import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, Phone, Mail, ChevronDown, Hotel, Bus, Car, GraduationCap, Briefcase } from 'lucide-react';
import './main.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Flight Booking', path: '/services/flight-booking', icon: Plane },
    { name: 'Hotel Booking', path: '/services/hotel-booking', icon: Hotel },
    { name: 'Bus Booking', path: '/services/bus-booking', icon: Bus },
    { name: 'Cab Services', path: '/services/cab-services', icon: Car },
    { name: 'Aviation Academy', path: '/services/aviation-academy', icon: GraduationCap },
    { name: 'Recruitment Support', path: '/services/aviation-job', icon: Briefcase },
  ];

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Academy', path: '/academy' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9560205305</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@anantairways.in</span>
            </div>
          </div>
          <div className="flex gap-4">
            <span>Best Customer Support</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`shadow-lg sticky top-0 z-50 transition-colors duration-500 ease-in-out ${isScrolled ? 'bg-slate-100' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className='main-logo'>
              <Link to="/" className="block w-full h-full">
                <img 
                  src="https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/AAlogo.png" 
                  alt="Logo" 
                  className={`transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-0' : 'opacity-100'}`} 
                />
                <img 
                  src="https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/Logo.png" 
                  alt="Logo Scrolled" 
                  className={`transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold transition-colors relative group ${isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  ></span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 font-semibold transition-colors ${isActive('/services') || isServicesOpen ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Services <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 transition-all duration-300 origin-top-left ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 group/item transition-all"
                      >
                        <div className="bg-gray-50 p-2 rounded-lg group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <service.icon size={18} />
                        </div>
                        <span className="font-semibold text-gray-700 group-hover/item:text-blue-600">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navigation.slice(2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold transition-colors relative group ${isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[80vh] pb-6' : 'max-h-0'}`}
          >
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>Home</Link>
              <Link to="/destinations" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/destinations') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>Destinations</Link>
              
              {/* Mobile Services */}
              <div className="border-y border-gray-100 my-1 py-1">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 font-bold text-gray-700 hover:bg-gray-100 rounded-xl"
                >
                  Our Services <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                      className="flex items-center gap-3 py-3 px-8 text-gray-600 hover:text-blue-600 transition-colors bg-gray-50/50 mb-1 rounded-xl mx-4"
                    >
                      <service.icon size={16} />
                      <span className="font-semibold text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/academy" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/academy') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>Academy</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/about') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>About</Link>
              <Link to="/career" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/career') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>Career</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`py-3 px-4 rounded-xl font-bold transition-all ${isActive('/contact') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
