import { useState } from 'react';
import { MapPin, Search, Filter, Globe, TrendingUp } from 'lucide-react';
import { destinations } from '../data/mockData';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Filter destinations
  const filteredDestinations = destinations
    .filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dest.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesPrice = true;
      if (priceFilter === 'budget') matchesPrice = dest.startingPrice < 15000;
      else if (priceFilter === 'mid') matchesPrice = dest.startingPrice >= 15000 && dest.startingPrice < 25000;
      else if (priceFilter === 'luxury') matchesPrice = dest.startingPrice >= 25000;

      return matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.packages - a.packages; // popular = more packages
    });

  const stats = [
    { icon: Globe, value: destinations.length, label: 'Destinations' },
    { icon: TrendingUp, value: destinations.reduce((sum, d) => sum + d.packages, 0), label: 'Total Packages' },
    { icon: MapPin, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <MapPin size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              Explore Popular Destinations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fadeInUp">
              Discover breathtaking places across India. Your adventure awaits!
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon size={28} />
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Price Filter */}
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-500" />
                <select
                  className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (&lt; ₹15,000)</option>
                  <option value="mid">Mid-Range (₹15k - ₹25k)</option>
                  <option value="luxury">Luxury (&gt; ₹25,000)</option>
                </select>
              </div>

              {/* Sort By */}
              <select
                className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Destination' : 'Destinations'} Found
            </h2>
            <p className="text-gray-600 mt-1">Explore amazing places for your next adventure</p>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Destinations Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <button 
                onClick={() => { setSearchTerm(''); setPriceFilter('all'); }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us for customized travel packages tailored to your preferences</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
