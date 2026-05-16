import { useState } from 'react';
import { MapPin, Globe, TrendingUp } from 'lucide-react';
import { destinations } from '../data/mockData';
import DestinationCard from '../components/DestinationCard';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // FAQ State
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "What are the best destinations for family vacations?",
      answer: "Popular family destinations include Goa, Manali, Dubai, Bali, and Kashmir for their family-friendly attractions and activities."
    },
    {
      question: "How can I book a travel package?",
      answer: "You can contact us through the enquiry form or directly call our support team for customized travel packages."
    },
    {
      question: "Do you provide customized tour packages?",
      answer: "Yes, we offer fully customized travel packages based on your budget, destination, and travel preferences."
    },
    {
      question: "What is included in the travel package?",
      answer: "Most packages include hotel stay, sightseeing, transportation, and selected meals depending on the package type."
    },
    {
      question: "Which is the best time to travel?",
      answer: "The best time depends on the destination. Hill stations are ideal in summer, while beaches are best during winter."
    },
    {
      question: "Are flights included in the package?",
      answer: "Flights can be included upon request during package customization."
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, cancellation and rescheduling are available based on our travel policy and package terms."
    },
    {
      question: "Do you offer honeymoon packages?",
      answer: "Yes, we provide special honeymoon packages for destinations like Maldives, Bali, Goa, and Manali."
    },
    {
      question: "Is travel insurance included?",
      answer: "Travel insurance is optional but highly recommended for all travelers."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us through our contact page, email, or 24/7 support helpline."
    }
  ];

  // Filter destinations
  const filteredDestinations = destinations
    .filter(dest => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesPrice = true;

      if (priceFilter === 'budget')
        matchesPrice = dest.startingPrice < 15000;

      else if (priceFilter === 'mid')
        matchesPrice =
          dest.startingPrice >= 15000 &&
          dest.startingPrice < 25000;

      else if (priceFilter === 'luxury')
        matchesPrice = dest.startingPrice >= 25000;

      return matchesSearch && matchesPrice;
    })

    .sort((a, b) => {
      if (sortBy === 'price-low')
        return a.startingPrice - b.startingPrice;

      if (sortBy === 'price-high')
        return b.startingPrice - a.startingPrice;

      if (sortBy === 'rating')
        return b.rating - a.rating;

      return b.packages - a.packages;
    });

  const stats = [
    {
      icon: Globe,
      value: destinations.length,
      label: 'Destinations'
    },
    {
      icon: TrendingUp,
      value: destinations.reduce((sum, d) => sum + d.packages, 0),
      label: 'Total Packages'
    },
    {
      icon: MapPin,
      value: '24/7',
      label: 'Support'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section>

        <div className='backgourd-image-with-content'>

          <div className='content-main responsive-padding'>

            <h1>Our Popular Destinations</h1>

            <p>
              Discover your next adventure with our curated list
              of popular travel destinations. From vibrant cities
              to serene beaches, we have something for every traveler.
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

      {/* Destinations Grid */}
      <section className="py-12">

        <div className="container mx-auto px-4">

          {/* Results Count */}
          <div className="mb-8">

            <h2 className="text-2xl font-bold text-gray-800">
              {filteredDestinations.length}{' '}
              {filteredDestinations.length === 1
                ? 'Destination'
                : 'Destinations'} Found
            </h2>

            <p className="text-gray-600 mt-1">
              Explore amazing places for your next adventure
            </p>

          </div>

          {filteredDestinations.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredDestinations.map(destination => (

                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />

              ))}

            </div>

          ) : (

            <div className="text-center py-16">

              <MapPin
                size={64}
                className="mx-auto text-gray-300 mb-4"
              />

              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Destinations Found
              </h3>

              <p className="text-gray-500 mb-4">
                Try adjusting your search or filters
              </p>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceFilter('all');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-lg">
              Find answers to common travel and destination related questions.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
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

                {/* Answer */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find Your Dream Destination?
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            Contact us for customized travel packages tailored
            to your preferences
          </p>

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