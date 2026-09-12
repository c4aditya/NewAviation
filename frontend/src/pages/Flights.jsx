import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Plane, Calendar, MapPin, Search, Loader2, AlertCircle, RefreshCw,
  Filter, X, ArrowUpDown, Clock, Check
} from 'lucide-react';
import FlightCard from '../components/FlightCard';
import BookingRequestModal from '../components/BookingRequestModal';
import api from '../utils/axiosConfig';

const cityToIataMap = {
  'delhi': 'DEL',
  'new delhi': 'DEL',
  'mumbai': 'BOM',
  'ahmedabad': 'AMD',
  'lucknow': 'LKO',
  'chennai': 'MAA',
  'dubai': 'DXB',
  'kolkata': 'CCU',
  'hyderabad': 'HYD',
  'bangalore': 'BLR',
  'bengaluru': 'BLR',
  'jaipur': 'JAI',
  'goa': 'GOI',
  'pune': 'PNQ'
};

const iataToCityMap = {
  'DEL': 'Delhi',
  'BOM': 'Mumbai',
  'AMD': 'Ahmedabad',
  'LKO': 'Lucknow',
  'MAA': 'Chennai',
  'DXB': 'Dubai',
  'CCU': 'Kolkata',
  'HYD': 'Hyderabad',
  'BLR': 'Bangalore',
  'JAI': 'Jaipur',
  'GOI': 'Goa',
  'PNQ': 'Pune'
};

const getIataCode = (input) => {
  if (!input) return 'DEL';
  const trimmed = input.trim();
  if (trimmed.length === 3) return trimmed.toUpperCase();
  return cityToIataMap[trimmed.toLowerCase()] || trimmed.toUpperCase();
};

const getCityName = (input) => {
  if (!input) return 'Delhi';
  const upper = input.trim().toUpperCase();
  if (iataToCityMap[upper]) return iataToCityMap[upper];
  return input;
};

// Fallback flight generator when backend server is unreached
const generateClientFallbackFlights = (originCode, destCode, fromName, toName, departureDate) => {
  const origCode = (originCode || 'DEL').toUpperCase();
  const dstCode = (destCode || 'BOM').toUpperCase();
  const origCity = fromName || getCityName(origCode);
  const dstCity = toName || getCityName(dstCode);
  const dateStr = departureDate || new Date().toISOString().split('T')[0];

  const templates = [
    { code: '6E', num: '204', dep: '06:00 AM', arr: '08:15 AM', dur: '2h 15m', basePrice: 4200, cls: 'Economy', stops: 0 },
    { code: 'AI', num: '805', dep: '07:30 AM', arr: '09:45 AM', dur: '2h 15m', basePrice: 4800, cls: 'Economy', stops: 0 },
    { code: 'UK', num: '930', dep: '09:00 AM', arr: '11:15 AM', dur: '2h 15m', basePrice: 5600, cls: 'Economy', stops: 0 },
    { code: 'QP', num: '1102', dep: '10:45 AM', arr: '01:00 PM', dur: '2h 15m', basePrice: 3900, cls: 'Economy', stops: 0 },
    { code: 'SG', num: '8161', dep: '12:15 PM', arr: '02:30 PM', dur: '2h 15m', basePrice: 4100, cls: 'Economy', stops: 0 },
    { code: '6E', num: '5312', dep: '02:00 PM', arr: '04:15 PM', dur: '2h 15m', basePrice: 4600, cls: 'Economy', stops: 0 },
    { code: 'UK', num: '944', dep: '04:30 PM', arr: '06:45 PM', dur: '2h 15m', basePrice: 6200, cls: 'Business', stops: 0 },
    { code: 'AI', num: '868', dep: '06:15 PM', arr: '08:30 PM', dur: '2h 15m', basePrice: 5100, cls: 'Economy', stops: 0 },
    { code: '6E', num: '6184', dep: '08:00 PM', arr: '10:15 PM', dur: '2h 15m', basePrice: 4300, cls: 'Economy', stops: 0 },
    { code: 'UK', num: '988', dep: '09:45 PM', arr: '11:55 PM', dur: '2h 10m', basePrice: 5400, cls: 'Economy', stops: 0 },
    { code: 'AI', num: '652', dep: '11:15 PM', arr: '01:30 AM', dur: '2h 15m', basePrice: 4000, cls: 'Economy', stops: 0 }
  ];

  const carrierNames = {
    'AI': 'Air India',
    '6E': 'IndiGo',
    'UK': 'Vistara',
    'SG': 'SpiceJet',
    'QP': 'Akasa Air'
  };

  const isIntl = origCode === 'DXB' || dstCode === 'DXB';
  const priceMult = isIntl ? 2.5 : 1.0;

  return templates.map((item, idx) => ({
    id: `FL-${origCode}-${dstCode}-${idx + 1}`,
    airline: carrierNames[item.code] || 'Air India',
    flightNumber: `${item.code}-${item.num}`,
    from: origCity,
    to: dstCity,
    departure: item.dep,
    arrival: item.arr,
    duration: item.dur,
    price: Math.round(item.basePrice * priceMult),
    class: item.cls,
    date: dateStr,
    stops: item.stops
  }));
};

// Convert "06:00 AM" to minutes for sorting & filtering
const parseTimeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

// Convert "2h 15m" to minutes
const parseDurationToMinutes = (durStr) => {
  if (!durStr) return 0;
  let total = 0;
  const hMatch = durStr.match(/(\d+)h/i);
  const mMatch = durStr.match(/(\d+)m/i);
  if (hMatch) total += parseInt(hMatch[1], 10) * 60;
  if (mMatch) total += parseInt(mMatch[1], 10);
  return total || 120;
};

const Flights = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useState(() => {
    const stateData = location.state || {};
    const fromVal = stateData.from || 'Delhi';
    const toVal = stateData.to || 'Mumbai';
    return {
      from: fromVal,
      fromCode: stateData.fromCode || getIataCode(fromVal),
      to: toVal,
      toCode: stateData.toCode || getIataCode(toVal),
      date: stateData.date || stateData.departureDate || new Date().toISOString().split('T')[0]
    };
  });

  // Filter & Sort State
  const [stopsFilter, setStopsFilter] = useState('all'); // 'all', '0', '1', '2'
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [timeFilter, setTimeFilter] = useState('all'); // 'all', 'morning', 'afternoon', 'evening', 'night'
  const [sortBy, setSortBy] = useState('cheapest'); // 'cheapest', 'earliest', 'duration'

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Modal Booking State
  const [bookingFlight, setBookingFlight] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedFlights, setFetchedFlights] = useState([]);

  // Main flight fetch function
  const fetchFlightsData = useCallback(async (originCode, destCode, departureDate, fromName, toName) => {
    setLoading(true);
    setError(null);

    const origIata = originCode || getIataCode(searchParams.from);
    const destIata = destCode || getIataCode(searchParams.to);
    const dateVal = departureDate || searchParams.date || new Date().toISOString().split('T')[0];

    try {
      const response = await api.get('/flights/search', {
        params: { origin: origIata, destination: destIata, date: dateVal }
      });

      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        setFetchedFlights(response.data.data);
      } else {
        throw new Error('Invalid response structure from backend');
      }
    } catch (err) {
      console.warn('Backend API request notice:', err.message, '- Using fallback flight data.');
      const fallbackList = generateClientFallbackFlights(
        origIata,
        destIata,
        fromName || searchParams.from,
        toName || searchParams.to,
        dateVal
      );
      setFetchedFlights(fallbackList);
    } finally {
      setLoading(false);
    }
  }, [searchParams.from, searchParams.to, searchParams.date]);

  // Sync on navigation state change
  useEffect(() => {
    if (location.state) {
      const fromVal = location.state.from || 'Delhi';
      const toVal = location.state.to || 'Mumbai';
      const fromCodeVal = location.state.fromCode || getIataCode(fromVal);
      const toCodeVal = location.state.toCode || getIataCode(toVal);
      const dateVal = location.state.date || location.state.departureDate || new Date().toISOString().split('T')[0];

      setSearchParams({
        from: fromVal,
        fromCode: fromCodeVal,
        to: toVal,
        toCode: toCodeVal,
        date: dateVal
      });

      fetchFlightsData(fromCodeVal, toCodeVal, dateVal, fromVal, toVal);
    } else {
      fetchFlightsData(getIataCode(searchParams.from), getIataCode(searchParams.to), searchParams.date, searchParams.from, searchParams.to);
    }
  }, [location.state]);

  // Dynamically extract unique airlines from fetched flight results
  const availableAirlines = useMemo(() => {
    const set = new Set();
    fetchedFlights.forEach(f => {
      if (f.airline) set.add(f.airline);
    });
    return Array.from(set);
  }, [fetchedFlights]);

  // Apply Sidebar Filters & Sorting
  const filteredFlights = useMemo(() => {
    let list = [...fetchedFlights];

    // Filter by Stops
    if (stopsFilter === '0') {
      list = list.filter(f => f.stops === 0 || f.stops === 'Direct' || !f.stops);
    } else if (stopsFilter === '1') {
      list = list.filter(f => f.stops === 1);
    } else if (stopsFilter === '2') {
      list = list.filter(f => f.stops >= 2);
    }

    // Filter by Selected Airlines Checkboxes
    if (selectedAirlines.length > 0) {
      list = list.filter(f => selectedAirlines.includes(f.airline));
    }

    // Filter by Price Range
    list = list.filter(f => (f.price || 0) <= maxPrice);

    // Filter by Departure Time Slot
    if (timeFilter !== 'all') {
      list = list.filter(f => {
        const mins = parseTimeToMinutes(f.departure);
        if (timeFilter === 'morning') return mins >= 360 && mins < 720; // 06:00 - 12:00
        if (timeFilter === 'afternoon') return mins >= 720 && mins < 1080; // 12:00 - 18:00
        if (timeFilter === 'evening') return mins >= 1080 && mins < 1260; // 18:00 - 21:00
        if (timeFilter === 'night') return mins >= 1260 || mins < 360; // 21:00 - 06:00
        return true;
      });
    }

    // Sorting
    if (sortBy === 'cheapest') {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'earliest') {
      list.sort((a, b) => parseTimeToMinutes(a.departure) - parseTimeToMinutes(b.departure));
    } else if (sortBy === 'duration') {
      list.sort((a, b) => parseDurationToMinutes(a.duration) - parseDurationToMinutes(b.duration));
    }

    return list;
  }, [fetchedFlights, stopsFilter, selectedAirlines, maxPrice, timeFilter, sortBy]);

  const handleAirlineCheckboxChange = (airlineName) => {
    setSelectedAirlines(prev =>
      prev.includes(airlineName)
        ? prev.filter(a => a !== airlineName)
        : [...prev, airlineName]
    );
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const fromCode = getIataCode(searchParams.from);
    const toCode = getIataCode(searchParams.to);
    fetchFlightsData(fromCode, toCode, searchParams.date, searchParams.from, searchParams.to);
  };

  const resetAllFilters = () => {
    setStopsFilter('all');
    setSelectedAirlines([]);
    setMaxPrice(50000);
    setTimeFilter('all');
    setSortBy('cheapest');
  };

  // Sidebar Filter Section JSX
  const renderFilterSidebar = () => (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-200/80 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg">
          <Filter size={18} className="text-blue-600" />
          <span>Filter Flights</span>
        </div>
        <button
          onClick={resetAllFilters}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
        >
          Reset All
        </button>
      </div>

      {/* Sort By Filter */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Sort Results By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="input-field bg-gray-50/50 text-sm font-medium"
        >
          <option value="cheapest">Cheapest First</option>
          <option value="earliest">Earliest Departure</option>
          <option value="duration">Shortest Duration</option>
        </select>
      </div>

      {/* Stops Filter */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Stops
        </label>
        <div className="grid grid-cols-3 gap-1.5 bg-gray-100 p-1 rounded-xl">
          {[
            { id: 'all', label: 'All' },
            { id: '0', label: 'Non-stop' },
            { id: '1', label: '1 Stop' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setStopsFilter(item.id)}
              className={`py-1.5 text-xs font-semibold rounded-lg transition ${
                stopsFilter === item.id
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Max Price Range Slider */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Max Price
          </label>
          <span className="text-sm font-bold text-blue-600">₹{maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="2000"
          max="50000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
          <span>₹2,000</span>
          <span>₹50,000</span>
        </div>
      </div>

      {/* Departure Time Slots */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Departure Time
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'all', label: 'Anytime', icon: Clock },
            { id: 'morning', label: 'Morning (6am - 12pm)', icon: Clock },
            { id: 'afternoon', label: 'Afternoon (12pm - 6pm)', icon: Clock },
            { id: 'evening', label: 'Evening (6pm - 9pm)', icon: Clock }
          ].map(slot => (
            <button
              key={slot.id}
              onClick={() => setTimeFilter(slot.id)}
              className={`p-2.5 rounded-xl border text-left text-xs font-medium transition flex items-center gap-1.5 ${
                timeFilter === slot.id
                  ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{slot.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Airlines Checkboxes */}
      {availableAirlines.length > 0 && (
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Airlines ({availableAirlines.length})
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {availableAirlines.map(airlineName => {
              const isChecked = selectedAirlines.includes(airlineName);
              return (
                <label
                  key={airlineName}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer text-xs font-semibold text-gray-700 transition"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleAirlineCheckboxChange(airlineName)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <span>{airlineName}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Search Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-10 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* From */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-1">
                    <MapPin size={14} className="inline mr-1 text-blue-300" />
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Departure city or IATA (e.g. DEL)"
                    className="input-field bg-white text-gray-900 font-semibold"
                    value={searchParams.from}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, from: e.target.value }))}
                    required
                  />
                </div>

                {/* To */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-1">
                    <MapPin size={14} className="inline mr-1 text-blue-300" />
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="Arrival city or IATA (e.g. BOM)"
                    className="input-field bg-white text-gray-900 font-semibold"
                    value={searchParams.to}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, to: e.target.value }))}
                    required
                  />
                </div>

                {/* Date & Submit */}
                <div>
                  <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-1">
                    <Calendar size={14} className="inline mr-1 text-blue-300" />
                    Date
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="input-field bg-white text-gray-900 font-semibold"
                      value={searchParams.date}
                      onChange={(e) => setSearchParams(prev => ({ ...prev, date: e.target.value }))}
                      required
                    />
                    <button type="submit" className="btn-primary py-2.5 px-5 flex items-center justify-center gap-1.5 flex-shrink-0" disabled={loading}>
                      {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                      <span className="hidden sm:inline">Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Main Results Layout */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4 flex items-center justify-between bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
            <div className="font-bold text-gray-800 text-sm flex items-center gap-2">
              <span>{searchParams.from} → {searchParams.to}</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                {filteredFlights.length} Flights
              </span>
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="btn-primary py-1.5 px-3.5 text-xs font-bold flex items-center gap-1.5 rounded-lg"
            >
              <Filter size={14} />
              Filter Flights
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Left-Side Filter Sidebar */}
            <div className="hidden lg:block w-full lg:w-1/4 flex-shrink-0 sticky top-28 self-start">
              {renderFilterSidebar()}
            </div>

            {/* Right-Side Flights List */}
            <div className="w-full lg:w-3/4 flex-grow">
              <div className="hidden lg:flex justify-between items-center mb-5 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 font-inter">
                    {searchParams.from} → {searchParams.to}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    Showing available direct & connecting flights
                  </p>
                </div>
                <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100">
                  {loading ? 'Searching...' : `${filteredFlights.length} Flights Available`}
                </span>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="text-center py-20 bg-white rounded-2xl shadow-xs border border-gray-100 space-y-3">
                  <Loader2 size={44} className="mx-auto text-blue-600 animate-spin" />
                  <h3 className="text-lg font-bold text-gray-800">Searching Available Flights...</h3>
                  <p className="text-xs text-gray-500">Fetching best routes for {searchParams.from} → {searchParams.to}</p>
                </div>
              )}

              {/* Error State */}
              {!loading && error && (
                <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100 space-y-4">
                  <AlertCircle size={48} className="mx-auto text-red-500" />
                  <h3 className="text-xl font-bold text-red-700">Flight Search Failed</h3>
                  <p className="text-sm text-red-600">{error}</p>
                  <button onClick={() => handleSearchSubmit()} className="btn-primary py-2 px-4 text-xs font-bold inline-flex items-center gap-1.5">
                    <RefreshCw size={14} />
                    Try Again
                  </button>
                </div>
              )}

              {/* Flights Display Grid */}
              {!loading && !error && filteredFlights.length > 0 && (
                <div className="space-y-4">
                  {filteredFlights.map(flight => (
                    <FlightCard
                      key={flight.id}
                      flight={flight}
                      onBook={(selectedFlight) => setBookingFlight(selectedFlight)}
                    />
                  ))}
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && filteredFlights.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl shadow-xs border border-gray-100 space-y-4">
                  <Plane size={56} className="mx-auto text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-700">No flights found matching your filters.</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Try relaxing your price range or airline selections to view available flights.
                  </p>
                  <button onClick={resetAllFilters} className="btn-primary py-2 px-5 text-xs font-bold">
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Collapsible Filter Drawer / Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs lg:hidden animate-fadeIn">
          <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto flex flex-col shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Filter Flights</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow space-y-6">
              {renderFilterSidebar()}
            </div>

            <div className="pt-4 mt-auto border-t border-gray-100">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="btn-primary w-full py-3 text-sm font-bold rounded-xl"
              >
                Apply Filters ({filteredFlights.length} Flights)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Flight Booking Request Modal */}
      <BookingRequestModal
        flight={bookingFlight}
        isOpen={Boolean(bookingFlight)}
        onClose={() => setBookingFlight(null)}
      />
    </div>
  );
};

export default Flights;
