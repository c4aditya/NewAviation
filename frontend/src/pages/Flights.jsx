import { useState } from 'react';
import { Plane, Calendar, MapPin, Search, Filter as FilterIcon } from 'lucide-react';
import { flights } from '../data/mockData';
import FlightCard from '../components/FlightCard';

const Flights = () => {
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    date: '',
    class: 'all',
    maxPrice: 10000
  });

  const applyFilters = () => {
    let result = flights;

    if (filters.from) {
      result = result.filter(f => 
        f.from.toLowerCase().includes(filters.from.toLowerCase())
      );
    }

    if (filters.to) {
      result = result.filter(f => 
        f.to.toLowerCase().includes(filters.to.toLowerCase())
      );
    }

    if (filters.date) {
      result = result.filter(f => f.date === filters.date);
    }

    if (filters.class !== 'all') {
      result = result.filter(f => f.class === filters.class);
    }

    result = result.filter(f => f.price <= filters.maxPrice);

    setFilteredFlights(result);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters({
      from: '',
      to: '',
      date: '',
      class: 'all',
      maxPrice: 10000
    });
    setFilteredFlights(flights);
  };

  const handleBooking = (flight) => {
    alert(`Booking ${flight.airline} flight\n${flight.from} → ${flight.to}\nPrice: ₹${flight.price}\n\nRedirecting to payment...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aviation-primary to-aviation-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Plane className="mx-auto mb-4" size={56} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Flight</h1>
            <p className="text-xl text-blue-100">
              Find the best deals on domestic and international flights
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  From
                </label>
                <input
                  type="text"
                  placeholder="Departure city"
                  className="input-field"
                  value={filters.from}
                  onChange={(e) => handleFilterChange('from', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  To
                </label>
                <input
                  type="text"
                  placeholder="Arrival city"
                  className="input-field"
                  value={filters.to}
                  onChange={(e) => handleFilterChange('to', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Date
                </label>
                <input
                  type="date"
                  className="input-field"
                  value={filters.date}
                  onChange={(e) => handleFilterChange('date', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Class
                </label>
                <select
                  className="input-field"
                  value={filters.class}
                  onChange={(e) => handleFilterChange('class', e.target.value)}
                >
                  <option value="all">All Classes</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Price: ₹{filters.maxPrice}
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={applyFilters} className="btn-primary flex items-center gap-2">
                <Search size={20} />
                Search Flights
              </button>
              <button onClick={resetFilters} className="btn-secondary">
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flights List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredFlights.length} Flights Available
            </h2>
          </div>

          {filteredFlights.length > 0 ? (
            <div className="max-w-5xl mx-auto space-y-4">
              {filteredFlights.map(flight => (
                <FlightCard key={flight.id} flight={flight} onBook={handleBooking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Plane size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Flights Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <button onClick={resetFilters} className="btn-primary">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Flights;
