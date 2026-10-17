import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin, Star, Clock, IndianRupee, Calendar, ArrowLeft,
  Check, User, Mail, Phone, MessageSquare, Send, Heart,
  Sparkles, Map, Hotel, Compass, Award, ShieldCheck
} from 'lucide-react';
import { honeymoonPackages } from '../data/mockData';

const activityDescriptions = {
  "Snorkeling": "Explore vibrant coral reefs and exotic marine life together in crystal-clear azure waters.",
  "Candlelight Dinner": "Romantic private beachside candlelit gourmet dinner with customized chef menu.",
  "Spa": "Rejuvenating couples aromatherapy wellness session and relaxing body massage treatment.",
  "Skiing": "Thrilling guided alpine skiing through powdery snow slopes with breathtaking mountain views.",
  "Scenic Train": "Panoramic first-class mountain rail journey offering majestic alpine vistas.",
  "Chocolate Tour": "Exclusive Swiss artisan chocolate tasting experience and hands-on workshop.",
  "Temple Tour": "Spiritual discovery tour across historic sacred cliffside and water temples.",
  "Sunset Cruise": "Private luxury catamaran cruise watching the golden sunset across tranquil waters.",
  "Couples Massage": "Traditional herbal essential oil couples massage in an open-air relaxation pavilion.",
  "Wine Tasting": "Private sommelier-guided tasting of volcanic vintage wines at cliffside vineyard.",
  "Volcano Tour": "Guided excursion exploring Caldera volcanic hot springs and scenic craters.",
  "Sunset Sailing": "Catamaran sailing through Aegean waters with Mediterranean dinner onboard.",
  "Eiffel Tower Dinner": "Intimate haute cuisine dinner at Madame Brasserie overlooking the Paris skyline.",
  "Seine Cruise": "Illuminated evening river cruise passing historic Parisian monuments and bridges.",
  "Louvre Tour": "VIP guided tour through world-renowned masterpieces and timeless art galleries.",
  "Tea Ceremony": "Authentic meditative Japanese Matcha tea ceremony in a historic garden tea house.",
  "Bamboo Forest": "Hand-in-hand stroll through the mystical towering Arashiyama bamboo grove.",
  "Geisha District": "Enchanting evening walking tour through the preserved lantern-lit Gion district.",
  "Luau": "Traditional Polynesian feast with hula dancing, fire-knife show, and island music.",
  "Volcano Hike": "Sunrise hike along Haleakala crater trails high above the cloud line.",
  "Surfing": "Couples surf lesson in warm ocean waves guided by professional instructors.",
  "Boat Tour": "Private boat excursion exploring Grotta dello Smeraldo and secluded coastal coves.",
  "Lemon Grove": "Romantic walk through fragrant hillside lemon orchards and limoncello tasting.",
  "Coastal Drive": "Breathtaking coastal tour along winding cliffs overlooking the turquoise Mediterranean."
};

const HoneymoonPackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Find the honeymoon package by ID
    const found = honeymoonPackages.find(p => p.id === parseInt(id));
    setPkg(found);
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
    console.log('Honeymoon enquiry submitted:', { ...formData, package: pkg?.title });
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
          <p className="text-gray-600">Loading honeymoon package details...</p>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Honeymoon Package Not Found</h2>
          <p className="text-gray-500 mb-6">The package you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            Browse Home Page
          </button>
        </div>
      </div>
    );
  }

  // Format price display
  const displayPrice = pkg.price ? pkg.price.replace('₹', '').trim() : '';

  // Inclusions for honeymoon
  const specialInclusions = [
    "Luxury couple stay in premium romantic accommodation",
    "Complimentary romantic candlelight dinner with wine",
    "Welcome flowers, fruit basket & honeymoon celebration cake",
    "Couples rejuvenating wellness spa & massage experience",
    "Private airport transfers & guided local sightseeing tours",
    "24/7 dedicated personal travel concierge assistance"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative  flex flex-col justify-between overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

        {/* Top bar with Back Button */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft size={20} />
            <span>Back to Packages</span>
          </button>
        </div>

        {/* Package Info Overlay */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-8 md:pb-12 pt-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {pkg.hotelType || 'Honeymoon Special'}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white font-medium">{pkg.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                {pkg.title}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <Heart size={18} className="text-pink-400 fill-pink-400 flex-shrink-0" />
                <span className="text-base md:text-lg">Romantic Getaway &bull; {pkg.duration}</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white flex-shrink-0 self-start lg:self-auto shadow-lg">
              <p className="text-sm text-white/80">Starting from</p>
              <div className="flex items-center gap-1">
                <IndianRupee size={24} />
                <span className="text-3xl font-bold">
                  {displayPrice}
                </span>
              </div>
              <p className="text-sm text-white/80">per couple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Package Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Clock size={24} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold text-gray-800">{pkg.duration}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Hotel size={24} className="mx-auto text-green-600 mb-2" />
                    <p className="text-sm text-gray-500">Stay Type</p>
                    <p className="font-bold text-gray-800 text-sm">{pkg.hotelType}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <Star size={24} className="mx-auto text-yellow-600 mb-2" />
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-bold text-gray-800">{pkg.rating}/5</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Heart size={24} className="mx-auto text-purple-600 mb-2" />
                    <p className="text-sm text-gray-500">Package</p>
                    <p className="font-bold text-gray-800">Couple Special</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Map size={24} className="text-blue-600" />
                  About {pkg.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {pkg.description}
                </p>
              </div>

              {/* What Makes It Special */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Sparkles size={24} className="text-yellow-500" />
                  What Makes This Honeymoon Special
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialInclusions.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-transparent rounded-xl hover:from-pink-100 transition-all"
                    >
                      <div className="bg-pink-600 text-white rounded-full p-1 mt-0.5 flex-shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Activities */}
              {pkg.activities && pkg.activities.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Compass size={24} className="text-pink-500" />
                    Included Romantic Experiences & Activities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="group p-5 border border-gray-100 rounded-xl hover:border-pink-200 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                              {activity}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {activityDescriptions[activity] || "Specially curated romantic experience designed for couples to create unforgettable memories together."}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Enquire Now</h3>
                  <p className="text-gray-600 mt-2">
                    Interested in {pkg.title}? Fill out the form below!
                  </p>
                </div>

                {/* Success Message */}
                {enquirySubmitted && (
                  <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 animate-fadeInUp text-center">
                    <Check size={24} className="mx-auto mb-2" />
                    <p className="font-semibold">Thank you for your enquiry!</p>
                    <p className="text-sm">We'll contact you within 24 hours.</p>
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Message / Enquiry
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={`Tell us about your honeymoon travel dates and plans for ${pkg.title}...`}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
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
                      className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
                    >
                      <Phone size={16} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="mailto:info@skywings.com"
                      className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
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

      {/* Other Honeymoon Packages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Other Honeymoon Packages</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {honeymoonPackages
              .filter(p => p.id !== pkg.id)
              .map(otherPkg => (
                <Link
                  key={otherPkg.id}
                  to={`/honeymoon-packages/${otherPkg.id}`}
                  className="flex-shrink-0 w-64 bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={otherPkg.image}
                      alt={otherPkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">{otherPkg.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{otherPkg.description}</p>
                    <p className="text-pink-600 font-bold mt-2">{otherPkg.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HoneymoonPackageDetails;
