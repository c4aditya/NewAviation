import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, Star, Clock, IndianRupee, Calendar, ArrowLeft, 
  Check, User, Mail, Phone, MessageSquare, Send,
  Sparkles, Hotel as HotelIcon, Shield, Wifi, Utensils, Award
} from 'lucide-react';
import { hotels } from '../data/mockData';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Find the hotel by ID
    const found = hotels.find(h => h.id === parseInt(id));
    setHotel(found);
    setLoading(false);
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel enquiry submitted:', { ...formData, hotel: hotel?.name });
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <HotelIcon size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Hotel Not Found</h2>
          <p className="text-gray-500 mb-6">The hotel you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/hotels')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            Browse All Hotels
          </button>
        </div>
      </div>
    );
  }

  // Combined amenities list
  const allAmenities = [
    ...(hotel.amenities || []),
    "24/7 Room Service",
    "Complimentary Breakfast",
    "Air Conditioning",
    "Free Valet Parking",
    "Concierge & Tour Desk",
    "Daily Housekeeping"
  ];
  // Deduplicate
  const uniqueAmenities = Array.from(new Set(allAmenities));

  // Hotel highlights
  const hotelHighlights = [
    {
      name: "Luxury Rooms & Suites",
      description: "Elegantly furnished rooms with plush bedding, climate control, modern entertainment systems, and scenic views."
    },
    {
      name: "Fine Dining Restaurant",
      description: "On-site gourmet restaurant offering delicious breakfast buffets and signature multi-cuisine specialties."
    },
    {
      name: "Prime Strategic Location",
      description: `Conveniently situated in ${hotel.location} near prominent landmarks, business districts, and transit hubs.`
    },
    {
      name: "Premium Guest Hospitality",
      description: "Dedicated front desk and concierge staff committed to round-the-clock comfort, safety, and personalized service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative min-h-[500px] md:min-h-[550px] lg:h-[60vh] flex flex-col justify-between overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        
        {/* Top bar with Back Button */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-6">
          <button
            onClick={() => navigate('/hotels')}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft size={20} />
            <span>Back to Hotels</span>
          </button>
        </div>

        {/* Hotel Info Overlay */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-8 md:pb-12 pt-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {hotel.city ? hotel.city.toUpperCase() : 'HOTEL'}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white font-medium">{hotel.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-base md:text-lg">{hotel.location}</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex-shrink-0 self-start lg:self-auto shadow-lg">
              <p className="text-sm text-white/80">Starting from</p>
              <div className="flex items-center gap-1">
                <IndianRupee size={24} />
                <span className="text-3xl font-bold">
                  {hotel.price.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-white/80">per night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Hotel Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Clock size={24} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-500">Check-In</p>
                    <p className="font-bold text-gray-800">12:00 PM</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Calendar size={24} className="mx-auto text-green-600 mb-2" />
                    <p className="text-sm text-gray-500">Check-Out</p>
                    <p className="font-bold text-gray-800 text-sm">11:00 AM</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <Star size={24} className="mx-auto text-yellow-600 mb-2" />
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-bold text-gray-800">{hotel.rating}/5</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <MapPin size={24} className="mx-auto text-purple-600 mb-2" />
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-bold text-gray-800 truncate">{hotel.location}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <HotelIcon size={24} className="text-blue-600" />
                  About {hotel.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {hotel.description}. Providing a harmonious blend of luxury, comfort, and attentive service, {hotel.name} is the ideal sanctuary for travelers seeking world-class hospitality in {hotel.location}. Whether you are visiting for business or a leisure vacation, enjoy top-tier amenities, refined dining, and peaceful guest accommodations.
                </p>
              </div>

              {/* What Makes It Special / Amenities */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Sparkles size={24} className="text-yellow-500" />
                  Hotel Amenities & Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uniqueAmenities.map((amenity, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-all"
                    >
                      <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5 flex-shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Award size={24} className="text-blue-600" />
                  Property Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotelHighlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="group p-5 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                            {highlight.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Enquire Now</h3>
                  <p className="text-gray-600 mt-2">
                    Interested in staying at {hotel.name}? Fill out the form below!
                  </p>
                </div>

                {/* Success Message */}
                {enquirySubmitted && (
                  <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 animate-fadeInUp text-center">
                    <Check size={24} className="mx-auto mb-2" />
                    <p className="font-semibold">Thank you for your enquiry!</p>
                    <p className="text-sm">Our reservations desk will contact you shortly.</p>
                  </div>
                )}

                {/* Enquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline mr-2" size={16} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={`Tell us about your check-in dates and room requirements for ${hotel.name}...`}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={20} />
                    Submit Enquiry
                  </button>
                </form>

                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-center text-gray-600 text-sm mb-3">Or contact us directly</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href="tel:+911800123456" 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Phone size={16} />
                      <span>Call Now</span>
                    </a>
                    <a 
                      href="mailto:info@skywings.com" 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Mail size={16} />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Hotels */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Other Featured Hotels</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {hotels
              .filter(h => h.id !== hotel.id)
              .map(otherHotel => (
                <Link 
                  key={otherHotel.id} 
                  to={`/hotels/${otherHotel.id}`}
                  className="flex-shrink-0 w-64 bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={otherHotel.image} 
                      alt={otherHotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">{otherHotel.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{otherHotel.location}</p>
                    <p className="text-blue-600 font-bold mt-2">₹{otherHotel.price.toLocaleString()} / night</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelDetails;
