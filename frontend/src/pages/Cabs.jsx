import { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { cabs } from '../data/mockData';
import CabCard from '../components/CabCard';

const Cabs = () => {
  const [filteredCabs, setFilteredCabs] = useState(cabs);
  const [filters, setFilters] = useState({
    type: 'all',
    capacity: 'all',
    maxPricePerKm: 50
  });
  const [bookingDetails, setBookingDetails] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 1
  });

  const applyFilters = () => {
    let result = cabs;

    if (filters.type !== 'all') {
      result = result.filter(c => c.type === filters.type);
    }

    if (filters.capacity !== 'all') {
      result = result.filter(c => c.capacity >= Number(filters.capacity));
    }

    result = result.filter(c => c.pricePerKm <= filters.maxPricePerKm);

    setFilteredCabs(result);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters({
      type: 'all',
      capacity: 'all',
      maxPricePerKm: 50
    });
    setFilteredCabs(cabs);
  };

  const handleBooking = (cab) => {
    if (!bookingDetails.pickup || !bookingDetails.dropoff) {
      alert('Please enter pickup and drop-off locations first!');
      return;
    }
    alert(`Booking ${cab.name}\nPickup: ${bookingDetails.pickup}\nDrop: ${bookingDetails.dropoff}\nBase Fare: ₹${cab.basePrice} + ₹${cab.pricePerKm}/km\n\nRedirecting to confirmation...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Car className="mx-auto mb-4" size={56} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Cab</h1>
            <p className="text-xl text-orange-100">
              Reliable and comfortable cab services at your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Enter Trip Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="input-field"
                  value={bookingDetails.pickup}
                  onChange={(e) => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Enter drop-off address"
                  className="input-field"
                  value={bookingDetails.dropoff}
                  onChange={(e) => setBookingDetails({...bookingDetails, dropoff: e.target.value})}
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
                  value={bookingDetails.date}
                  onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock size={16} className="inline mr-1" />
                  Time
                </label>
                <input
                  type="time"
                  className="input-field"
                  value={bookingDetails.time}
                  onChange={(e) => setBookingDetails({...bookingDetails, time: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users size={16} className="inline mr-1" />
                  Passengers
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="input-field"
                  value={bookingDetails.passengers}
                  onChange={(e) => setBookingDetails({...bookingDetails, passengers: e.target.value})}
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Filter Cabs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cab Type
                </label>
                <select
                  className="input-field"
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Capacity
                </label>
                <select
                  className="input-field"
                  value={filters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                >
                  <option value="all">Any Capacity</option>
                  <option value="4">4+ Passengers</option>
                  <option value="6">6+ Passengers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Price/Km: ₹{filters.maxPricePerKm}
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={filters.maxPricePerKm}
                  onChange={(e) => handleFilterChange('maxPricePerKm', Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={applyFilters} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Apply Filters
              </button>
              <button onClick={resetFilters} className="btn-secondary">
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cabs List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredCabs.length} Cabs Available
            </h2>
          </div>

          {filteredCabs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCabs.map(cab => (
                <CabCard key={cab.id} cab={cab} onBook={handleBooking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Car size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Cabs Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters</p>
              <button onClick={resetFilters} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Cab Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Selection</h3>
                <p className="text-gray-600">Choose from economy to luxury vehicles</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Drivers</h3>
                <p className="text-gray-600">Verified and trained drivers for safe journey</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Available</h3>
                <p className="text-gray-600">Book cabs anytime, anywhere in the city</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cabs;
