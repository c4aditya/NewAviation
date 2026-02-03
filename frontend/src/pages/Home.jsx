import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Plane, Hotel, Bus, Car, Shield, Clock, Award, Headphones, 
  TrendingUp, Star, ArrowRight, IndianRupee, CheckCircle
} from 'lucide-react';
import { destinations, hotels } from '../data/mockData';
import FlightBookingForm from '../components/FlightBookingForm';
import HotelBookingForm from '../components/HotelBookingForm';
import BusBookingForm from '../components/BusBookingForm';
import CabBookingForm from '../components/CabBookingForm';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flight');

  const tabs = [
    { id: 'flight', name: 'Flights', icon: Plane },
    { id: 'hotel', name: 'Hotels', icon: Hotel },
    { id: 'bus', name: 'Buses', icon: Bus },
    { id: 'cab', name: 'Cabs', icon: Car },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: '100% secure payments with encryption',
      color: 'blue'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round the clock customer assistance',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Guaranteed lowest prices on bookings',
      color: 'orange'
    },
    {
      icon: Headphones,
      title: 'Easy Cancellation',
      description: 'Hassle-free cancellation process',
      color: 'purple'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Daily Bookings' },
    { number: '150+', label: 'Destinations' },
    { number: '4.8★', label: 'Average Rating' }
  ];

  const renderBookingForm = () => {
    switch (activeTab) {
      case 'flight':
        return <FlightBookingForm />;
      case 'hotel':
        return <HotelBookingForm />;
      case 'bus':
        return <BusBookingForm />;
      case 'cab':
        return <CabBookingForm />;
      default:
        return <FlightBookingForm />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Journey Begins Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Book flights, hotels, buses & cabs with ease. Travel smarter with SkyWings!
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-fadeInUp">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Form Based on Active Tab */}
            {renderBookingForm()}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Hotels</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium hotels offering comfort, luxury, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hotels.slice(0, 3).map((hotel) => (
              <div key={hotel.id} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} />
                    <span className="font-bold text-sm">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{hotel.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">₹{hotel.price}</p>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/hotels')}
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Hotels
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Popular Destinations</h2>
              <p className="text-gray-600 text-lg">Explore amazing places around India</p>
            </div>
            <Link 
              to="/destinations" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
            >
              View All Destinations
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((destination) => (
              <Link 
                key={destination.id} 
                to={`/destinations/${destination.id}`}
                className="card overflow-hidden cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} />
                    <span className="font-bold text-xs">{destination.rating}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{destination.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <IndianRupee size={14} />
                        <span className="font-bold">{destination.startingPrice?.toLocaleString()}</span>
                      </div>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {destination.packages} packages
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button - Mobile */}
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/destinations" 
              className="inline-flex items-center gap-2 btn-primary"
            >
              View All Destinations
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose SkyWings?</h2>
            <p className="text-gray-600 text-lg">Your trusted travel partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                orange: 'bg-orange-100 text-orange-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`${colors[feature.color]} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of happy travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Traveler",
                text: "SkyWings made my business trip seamless. The flight booking was quick and the hotel recommendations were spot on!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Family Vacation",
                text: "Booked a complete family package to Goa. Everything was perfect from flights to hotels. Highly recommend!",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Solo Traveler",
                text: "Best travel platform I've used. Customer support is excellent and prices are very competitive.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied travelers worldwide</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => navigate('/academy')} 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore Academy
              <CheckCircle size={20} />
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
