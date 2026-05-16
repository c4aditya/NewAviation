import { useState } from 'react';
import {
  Hotel as HotelIcon,
  Filter,
  Star,
  MapPin,
  Search,
  SlidersHorizontal
} from 'lucide-react';

import { hotels } from '../data/mockData';
import HotelCard from '../components/HotelCard';
import { useNavigate } from 'react-router-dom';

const Hotels = () => {

  const navigate = useNavigate();

  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const [showFilters, setShowFilters] = useState(false);

  const [openFAQ, setOpenFAQ] = useState(null);

  const [filters, setFilters] = useState({
    city: 'all',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    searchTerm: ''
  });

  // FAQ DATA
  const faqs = [
    {
      question: "How can I book a hotel?",
      answer: "You can easily book a hotel by selecting your preferred hotel and clicking the booking button."
    },
    {
      question: "Are hotel prices inclusive of taxes?",
      answer: "Some hotels include taxes in the displayed price while others may add taxes during checkout."
    },
    {
      question: "Can I cancel my hotel booking?",
      answer: "Yes, cancellation policies depend on the hotel and booking terms."
    },
    {
      question: "Do you offer luxury hotels?",
      answer: "Yes, we provide luxury, budget, and premium hotel options for all travelers."
    },
    {
      question: "Are meals included with hotel booking?",
      answer: "Meal inclusion depends on the hotel package you select."
    },
    {
      question: "Can I book hotels for group travel?",
      answer: "Yes, group bookings are available for families, corporate trips, and events."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our travel support team is available 24/7 to assist you."
    },
    {
      question: "Do hotels provide free WiFi?",
      answer: "Most hotels offer complimentary WiFi for guests."
    },
    {
      question: "Can I choose hotel rooms with a view?",
      answer: "Yes, many hotels offer room preferences like sea view, mountain view, or city view."
    },
    {
      question: "Are hotels safe for family stays?",
      answer: "All listed hotels are verified and suitable for family and solo travelers."
    }
  ];

  const cities = ['all', ...new Set(hotels.map(h => h.city))];

  const applyFilters = () => {

    let result = hotels;

    if (filters.city !== 'all') {
      result = result.filter(h => h.city === filters.city);
    }

    result = result.filter(
      h =>
        h.price >= filters.minPrice &&
        h.price <= filters.maxPrice
    );

    if (filters.minRating > 0) {
      result = result.filter(h => h.rating >= filters.minRating);
    }

    if (filters.searchTerm) {
      result = result.filter(
        h =>
          h.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||

          h.location
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())
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

    alert(
      `Booking ${hotel.name} - ₹${hotel.price} per night\n\nRedirecting to payment page...`
    );
  };

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section>

        <div className='backgourd-image-with-content-hotel'>

          <div className='content-main responsive-padding'>

            <h1>Our Popular Hotels</h1>

            <p>
              Discover the best hotels at unbeatable prices.
              Whether you're looking for luxury, budget,
              or something in between, we have a wide
              selection of hotels to suit every traveler's needs.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Enquiry
            </button>

          </div>

          <div className='overlay'></div>

        </div>

      </section>

      {/* SEARCH & FILTERS */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-40">

        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <div className="flex-1 flex gap-2">

              <input
                type="text"
                placeholder="Search hotels by name or location..."
                className="input-field flex-1"
                value={filters.searchTerm}
                onChange={(e) =>
                  handleFilterChange(
                    'searchTerm',
                    e.target.value
                  )
                }
              />

              <button
                onClick={handleSearch}
                className="btn-primary"
              >
                <Search size={20} />
              </button>

            </div>

            {/* Filter Button */}
            <button
              onClick={() =>
                setShowFilters(!showFilters)
              }
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

          {/* FILTER PANEL */}
          {showFilters && (

            <div className="mt-4 p-6 bg-gray-50 rounded-lg animate-fadeInUp">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* CITY */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">

                    <MapPin
                      size={16}
                      className="inline mr-1"
                    />

                    City

                  </label>

                  <select
                    className="input-field"
                    value={filters.city}
                    onChange={(e) =>
                      handleFilterChange(
                        'city',
                        e.target.value
                      )
                    }
                  >

                    {cities.map(city => (

                      <option key={city} value={city}>

                        {city === 'all'
                          ? 'All Cities'
                          : city.charAt(0).toUpperCase() +
                            city.slice(1)}

                      </option>

                    ))}

                  </select>

                </div>

                {/* MIN PRICE */}
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
                    onChange={(e) =>
                      handleFilterChange(
                        'minPrice',
                        Number(e.target.value)
                      )
                    }
                    className="w-full"
                  />

                </div>

                {/* MAX PRICE */}
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
                    onChange={(e) =>
                      handleFilterChange(
                        'maxPrice',
                        Number(e.target.value)
                      )
                    }
                    className="w-full"
                  />

                </div>

                {/* RATING */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">

                    <Star
                      size={16}
                      className="inline mr-1"
                    />

                    Minimum Rating

                  </label>

                  <select
                    className="input-field"
                    value={filters.minRating}
                    onChange={(e) =>
                      handleFilterChange(
                        'minRating',
                        Number(e.target.value)
                      )
                    }
                  >

                    <option value="0">All Ratings</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>

                  </select>

                </div>

              </div>

              <div className="mt-4 flex gap-4">

                <button
                  onClick={handleSearch}
                  className="btn-primary"
                >
                  Apply Filters
                </button>

                <button
                  onClick={resetFilters}
                  className="btn-secondary"
                >
                  Reset
                </button>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* HOTELS LIST */}
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

                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onBook={handleBooking}
                />

              ))}

            </div>

          ) : (

            <div className="text-center py-16">

              <HotelIcon
                size={64}
                className="mx-auto text-gray-400 mb-4"
              />

              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Hotels Found
              </h3>

              <p className="text-gray-500 mb-4">
                Try adjusting your filters
              </p>

              <button
                onClick={resetFilters}
                className="btn-primary"
              >
                Reset Filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hotel Booking FAQs
            </h2>

            <p className="text-gray-600 text-lg">
              Find answers to the most commonly asked
              hotel booking questions.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenFAQ(
                      openFAQ === index
                        ? null
                        : index
                    )
                  }
                  className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                >

                  <span className="text-left font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-blue-600">
                    {openFAQ === index ? '−' : '+'}
                  </span>

                </button>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index
                      ? 'max-h-40 p-5'
                      : 'max-h-0'
                  }`}
                >

                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INFO SECTION */}
      <section className="py-12 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Why Book Hotels with Us?
            </h2>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Hotels;