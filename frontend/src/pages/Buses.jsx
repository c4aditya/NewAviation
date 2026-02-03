import { useState } from 'react';
import { Bus, Calendar, MapPin, Search, Star } from 'lucide-react';
import { buses } from '../data/mockData';
import BusCard from '../components/BusCard';

const Buses = () => {
  const [filteredBuses, setFilteredBuses] = useState(buses);
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    type: 'all',
    maxPrice: 2000
  });

  const applyFilters = () => {
    let result = buses;

    if (filters.from) {
      result = result.filter(b => 
        b.from.toLowerCase().includes(filters.from.toLowerCase())
      );
    }

    if (filters.to) {
      result = result.filter(b => 
        b.to.toLowerCase().includes(filters.to.toLowerCase())
      );
    }

    if (filters.type !== 'all') {
      result = result.filter(b => b.type === filters.type);
    }

    result = result.filter(b => b.price <= filters.maxPrice);

    setFilteredBuses(result);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters({
      from: '',
      to: '',
      type: 'all',
      maxPrice: 2000
    });
    setFilteredBuses(buses);
  };

  const handleBooking = (bus) => {
    alert(`Booking ${bus.operator}\n${bus.from} → ${bus.to}\nPrice: ₹${bus.price} per seat\n\nRedirecting to seat selection...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bus className="mx-auto mb-4" size={56} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Bus Tickets</h1>
            <p className="text-xl text-green-100">
              Comfortable and affordable bus travel across India
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                  Bus Type
                </label>
                <select
                  className="input-field"
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="AC Sleeper">AC Sleeper</option>
                  <option value="Volvo AC">Volvo AC</option>
                  <option value="Non-AC Seater">Non-AC Seater</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Price: ₹{filters.maxPrice}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={applyFilters} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Search size={20} />
                Search Buses
              </button>
              <button onClick={resetFilters} className="btn-secondary">
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Buses List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredBuses.length} Buses Available
            </h2>
          </div>

          {filteredBuses.length > 0 ? (
            <div className="max-w-5xl mx-auto space-y-4">
              {filteredBuses.map(bus => (
                <BusCard key={bus.id} bus={bus} onBook={handleBooking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Bus size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Buses Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <button onClick={resetFilters} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Book Buses with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Verified Operators</h3>
                <p className="text-gray-600">All bus operators are verified and rated</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Network</h3>
                <p className="text-gray-600">Connect to 500+ destinations across India</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Cancellation</h3>
                <p className="text-gray-600">Cancel or reschedule with minimal charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buses;
