import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">SkyWings</h3>
                <p className="text-xs text-gray-400">Aviation & Travel</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for all aviation and travel needs. We provide seamless booking experiences for flights, hotels, buses, and cabs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academy" className="hover:text-white transition-colors">Academy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/flights" className="hover:text-white transition-colors">Flight Booking</Link></li>
              <li><Link to="/hotels" className="hover:text-white transition-colors">Hotel Booking</Link></li>
              <li><Link to="/buses" className="hover:text-white transition-colors">Bus Booking</Link></li>
              <li><Link to="/cabs" className="hover:text-white transition-colors">Cab Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">123 Aviation Hub, Terminal 2, New Delhi - 110037, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">info@aviationtravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 SkyWings Aviation & Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
