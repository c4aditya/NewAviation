import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Aviation Hub, Terminal 2', 'New Delhi - 110037, India'],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 1800-123-4567', '+91 98765-43210'],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@aviationtravel.com', 'support@aviationtravel.com'],
      color: 'orange'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white background-color">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <MessageSquare className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                orange: 'bg-orange-100 text-orange-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`${colors[info.color]} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 animate-fadeInUp">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="input-field"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg">
                  <Send className="inline mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden mb-6 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-3" />
                  <p className="font-semibold">Google Maps Location</p>
                  <p className="text-sm">123 Aviation Hub, New Delhi</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-aviation-light p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-aviation-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>24/7 customer support for all your travel needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-aviation-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Expert guidance on bookings and travel plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-aviation-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Quick resolution of queries and issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-aviation-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Customized travel solutions for your needs</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h4 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h4>
                <p className="text-red-700 mb-2">For urgent travel assistance:</p>
                <p className="text-2xl font-bold text-red-600">+91 1800-EMERGENCY</p>
                <p className="text-sm text-red-600 mt-1">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'What are your customer support hours?',
                  a: 'Our customer support team is available 24/7 to assist you with any queries or concerns.'
                },
                {
                  q: 'How can I cancel or modify my booking?',
                  a: 'You can cancel or modify your booking through our website or by contacting our support team. Cancellation policies vary by service provider.'
                },
                {
                  q: 'Do you offer group booking discounts?',
                  a: 'Yes! We offer special discounts for group bookings. Please contact us for more details and customized packages.'
                },
                {
                  q: 'How do I enroll in the Aviation Academy?',
                  a: 'Visit our Academy page for course details and enrollment information, or contact us directly for personalized guidance.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
