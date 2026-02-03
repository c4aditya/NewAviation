import { useState } from 'react';
import { Hotel as HotelIcon, Filter, Star, MapPin, Search, SlidersHorizontal } from 'lucide-react';
import { hotels } from '../data/mockData';
import HotelCard from '../components/HotelCard';

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: 'all',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    searchTerm: ''
  });

  const cities = ['all', ...new Set(hotels.map(h => h.city))];

  const applyFilters = () => {
    let result = hotels;

    if (filters.city !== 'all') {
      result = result.filter(h => h.city === filters.city);
    }

    result = result.filter(h => 
      h.price >= filters.minPrice && h.price <= filters.maxPrice
    );

    if (filters.minRating > 0) {
      result = result.filter(h => h.rating >= filters.minRating);
    }

    if (filters.searchTerm) {
      result = result.filter(h => 
        h.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        h.location.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setFilteredHotels(result);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSearch = () => {
    applyFilters();
  };

  const resetFilters = () => {
    setFilters({
      city: 'all',
      minPrice: 0,
      maxPrice: 10000,
      minRating: 0,
      searchTerm: ''
    });
    setFilteredHotels(hotels);
  };

  const handleBooking = (hotel) => {
    alert(`Booking ${hotel.name} - ₹${hotel.price} per night\n\nRedirecting to payment page...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aviation-primary to-aviation-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HotelIcon className="mx-auto mb-4" size={56} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl text-blue-100">
              Discover comfortable hotels at the best prices
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Search hotels by name or location..."
                className="input-field flex-1"
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              />
              <button onClick={handleSearch} className="btn-primary">
                <Search size={20} />
              </button>
            </div>

            {/* Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary flex items-center gap-2"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
              {filteredHotels.length !== hotels.length && (
                <span className="bg-aviation-primary text-white px-2 py-0.5 rounded-full text-xs">
                  Active
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-gray-50 rounded-lg animate-fadeInUp">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* City Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-1" />
                    City
                  </label>
                  <select
                    className="input-field"
                    value={filters.city}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                  >
                    {cities.map(city => (
                      <option key={city} value={city}>
                        {city === 'all' ? 'All Cities' : city.charAt(0).toUpperCase() + city.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Min Price: ₹{filters.minPrice}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                    className="w-full"
                  />
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
                    className="w-full"
                  />
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Star size={16} className="inline mr-1" />
                    Minimum Rating
                  </label>
                  <select
                    className="input-field"
                    value={filters.minRating}
                    onChange={(e) => handleFilterChange('minRating', Number(e.target.value))}
                  >
                    <option value="0">All Ratings</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button onClick={handleSearch} className="btn-primary">
                  Apply Filters
                </button>
                <button onClick={resetFilters} className="btn-secondary">
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hotels List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredHotels.length} Hotels Found
            </h2>
          </div>

          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} onBook={handleBooking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <HotelIcon size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Hotels Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters</p>
              <button onClick={resetFilters} className="btn-primary">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Book Hotels with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Best Prices</h3>
                <p className="text-gray-600">Guaranteed lowest prices on all hotel bookings</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HotelIcon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Wide Selection</h3>
                <p className="text-gray-600">Choose from thousands of verified hotels</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Booking</h3>
                <p className="text-gray-600">Simple and secure booking process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
