import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Plane, Hotel, Bus, Car, Shield, Clock, Award, Headphones,
  TrendingUp, Star, ArrowRight, IndianRupee, CheckCircle
} from 'lucide-react';
import { destinations, hotels, honeymoonPackages, testimonials } from '../data/mockData';
import TestimonialSlider from '../components/TestimonialSlider';
import StatsCounter from '../components/StatsCounter';
import FlightBookingForm from '../components/FlightBookingForm';
import HotelBookingForm from '../components/HotelBookingForm';
import BusBookingForm from '../components/BusBookingForm';
import CabBookingForm from '../components/CabBookingForm';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flight');

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '150+', label: 'Global Destinations' },
    { number: '98%', label: 'Positive Feedback' }
  ];

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
      <section
        className="relative py-16 md:py-24 transition-all duration-700 ease-in-out bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${activeTab === 'flight' ? 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop' :
            activeTab === 'hotel' ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop' :
              activeTab === 'bus' ? 'https://images.unsplash.com/photo-1544620359-1917a2a30de4?w=1600&h=900&fit=crop' :
                'https://images.unsplash.com/photo-1449965408869-eaa8f726abf3?w=1600&h=900&fit=crop'
            })`
        }}
      >
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white mb-8 animate-fadeInUp">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight shadow-sm">
              Your Journey Begins Here
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100 shadow-sm">
              Book flights, hotels, buses & cabs with ease. Travel smarter with Anant Airways!
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 md:p-6 animate-fadeInUp">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-gray-200 pb-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                  >
                    <Icon size={18} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Form Based on Active Tab */}
            <div className="transition-all duration-300 ease-in-out">
              {renderBookingForm()}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop"
                  alt="About Anant Airways"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl hidden md:block">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">About Us</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Exploration is the Essence of the Human Spirit</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Anant Airways, we believe that travel is more than just moving from one place to another; it's about the experiences, the memories, and the personal growth that happens along the way. Founded with a passion for exploration, we have been crafting unforgettable journeys for travelers worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you're looking for a relaxing beach getaway, an adventurous mountain trek, or a cultural immersion in a historic city, our team of expert travel planners is dedicated to making your dream vacation a reality. We handle all the details so you can focus on enjoying the moment.
              </p>
              <button
                onClick={() => navigate('/about')}
                className="btn-outline inline-flex items-center gap-2"
              >
                Read More
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Honeymoon Packages Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Honeymoon Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start your new life together with unforgettable romantic getaways
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {honeymoonPackages.map((pkg) => (
              <div key={pkg.id} className="card rounded-none overflow-hidden group flex flex-col h-[480px] hover:shadow-xl transition-shadow border-b-2 border-transparent hover:border-pink-500">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-[10px] uppercase font-bold tracking-wider bg-pink-500 px-2 py-0.5 inline-block mb-1">{pkg.duration}</p>
                    <h3 className="text-xl font-bold leading-tight">{pkg.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5">{pkg.hotelType}</span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-yellow-500" size={14} />
                      <span className="text-xs font-bold text-gray-700">{pkg.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-4 leading-relaxed flex-grow">
                    {pkg.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-semibold">Starting from</p>
                      <p className="text-lg font-bold text-pink-600 leading-none">{pkg.price}</p>
                    </div>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 font-semibold transition-colors text-xs uppercase tracking-wide">
                      View Details
                    </button>
                  </div>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {hotels.slice(0, 8).map((hotel) => (
              <div key={hotel.id} className="card rounded-none overflow-hidden group flex flex-col h-[480px] hover:shadow-xl transition-shadow border-b-2 border-transparent hover:border-blue-600">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold">
                    {hotel.rating} ★
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{hotel.name}</h3>

                  <div className="flex items-center gap-1 text-gray-500 mb-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs">{hotel.location}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed flex-grow">{hotel.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {hotel.amenities.slice(0, 2).map((amenity, index) => (
                      <span
                        key={index}
                        className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 2 && (
                      <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5">+{hotel.amenities.length - 2}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-semibold">Per Night</p>
                      <p className="text-lg font-bold text-blue-600 leading-none">₹{hotel.price}</p>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 p-2 transition-colors">
                      <ArrowRight size={20} />
                    </button>
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
            {destinations.slice(0, 6).map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="card rounded-none overflow-hidden cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
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
                      <span className="text-xs bg-white/20 px-2 py-1">
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

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-inter">Premium Aviation Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-inter">Experience world-class travel services tailored to your unique needs and preferences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-xl border-t-4 border-blue-600 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Plane className="text-blue-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 font-inter">Global Flight Network</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">Access thousands of routes and airlines worldwide with our advanced booking engine. From economy to first class, we find you the best value.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-600" /> Real-time Availability
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-600" /> Best Price Guarantee
                </li>
              </ul>
              <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Book Flights <ArrowRight size={18} /></button>
            </div>

            <div className="bg-white p-10 shadow-xl border-t-4 border-blue-800 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Hotel className="text-blue-800 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 font-inter">Luxury Accommodations</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">Discover a curated selection of five-star hotels and boutique resorts. We partner with top hospitality brands to ensure your comfort.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-800" /> Exclusive Member Rates
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-800" /> Complimentary Amenities
                </li>
              </ul>
              <button className="text-blue-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">Explore Hotels <ArrowRight size={18} /></button>
            </div>

            <div className="bg-white p-10 shadow-xl border-t-4 border-aviation-primary hover:transform hover:-translate-y-2 transition-all duration-300">
              <Car className="text-blue-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 font-inter">Seamless Ground Transport</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">Arrive in style with our premium car rental and chauffeur services. Reliable, safe, and always on time at any destination.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-600" /> Airport Transfers
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium">
                  <CheckCircle size={18} className="text-blue-600" /> Inter-city Cab Network
                </li>
              </ul>
              <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Rent a Car <ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">Why Choose Anant Airways?</h2>
            <p className="text-gray-600 text-lg font-inter">Your trusted travel partner for every journey.</p>
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
                  <div className={`${colors[feature.color]} w-20 h-20 rounded-none flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-inter">{feature.title}</h3>
                  <p className="text-gray-600 font-inter">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Reliability Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1544620359-1917a2a30de4?w=800&h=600&fit=crop" alt="Expert Support" className="rounded-none shadow-2xl w-full object-cover h-[500px]" />
                <div className="absolute -top-10 -left-10 bg-blue-600 p-8 text-white hidden md:block">
                  <Headphones size={48} className="mb-4" />
                  <p className="text-2xl font-bold font-inter">24/7 Expert Help</p>
                  <p className="text-blue-100 font-inter">Across all time zones</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-inter">Unrivaled Expertise in Aviation</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-inter">At Anant Airways, we combine years of industry experience with the latest technological innovations to provide you with a travel platform that is both powerful and easy to use.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-none h-fit">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 font-inter">Military-Grade Security</h4>
                    <p className="text-gray-600 font-inter">Your data and transactions are protected by the latest encryption standards and secure payment gateways.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-none h-fit">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 font-inter">Real-time Optimization</h4>
                    <p className="text-gray-600 font-inter">Our AI-driven engine constantly analyzes millions of data points to find you the absolute lowest fares in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg font-inter">Trusted by thousands of happy travelers worldwide.</p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Stats Section (Moved Below Reviews) */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCounter key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-inter">A Global Network You Can Trust</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-inter">
                With partnerships across 150+ countries and connections with over 400 airlines, Anant Airways provides you with unparalleled access to the world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow-md border-l-4 border-blue-600">
                  <p className="text-3xl font-bold text-blue-600 mb-1 font-inter">400+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold font-inter">Airlines</p>
                </div>
                <div className="p-6 bg-white shadow-md border-l-4 border-blue-800">
                  <p className="text-3xl font-bold text-blue-800 mb-1 font-inter">5000+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold font-inter">Partners</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop" alt="Global Network" className="rounded-none shadow-xl w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 font-inter">The World is Waiting for You</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto font-inter">Ready to embark on your next adventure? Join millions of travelers who choose Anant Airways for their journeys.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => navigate('/flights')}
              className="bg-white text-blue-900 font-bold py-5 px-10 rounded-none hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-widest text-sm"
            >
              Start Booking Now <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-white text-white font-bold py-5 px-10 rounded-none hover:bg-white hover:text-blue-900 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
