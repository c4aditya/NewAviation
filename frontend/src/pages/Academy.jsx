import { useState } from 'react';
import { GraduationCap, BookOpen, Clock, Award, Check, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { courses, testimonials } from '../data/mockData';

const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleEnquiry = (course) => {
    setSelectedCourse(course);
    setEnquiryData({ ...enquiryData, course: course.title });
    setShowEnquiryForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', enquiryData);
    alert('Thank you for your enquiry! We will contact you soon.');
    setShowEnquiryForm(false);
    setEnquiryData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const benefits = [
    'Industry-experienced faculty',
    '100% placement assistance',
    'Hands-on practical training',
    'International certifications',
    'Modern training facilities',
    'Flexible batch timings'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <GraduationCap className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold mb-6">SkyWings Aviation Academy</h1>
            <p className="text-xl text-blue-100">
              Launch your career in aviation with India's premier training academy. Get certified and fly high!
            </p>
          </div>
        </div>
      </section>

      {/* Academy Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Academy?</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  SkyWings Aviation Academy is a premier institute dedicated to training the next generation of aviation professionals. With state-of-the-art facilities, experienced instructors, and industry partnerships, we provide comprehensive training programs that prepare students for successful careers in the aviation industry.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-green-100 text-green-600 rounded-full p-1">
                        <Check size={20} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-aviation-primary text-white p-6 rounded-xl text-center">
                  <Award size={40} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-blue-100">Trained Students</div>
                </div>
                <div className="bg-aviation-secondary text-white p-6 rounded-xl text-center">
                  <BookOpen size={40} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-blue-100">Courses Offered</div>
                </div>
                <div className="bg-green-600 text-white p-6 rounded-xl text-center">
                  <GraduationCap size={40} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm text-green-100">Placement Rate</div>
                </div>
                <div className="bg-orange-600 text-white p-6 rounded-xl text-center">
                  <Clock size={40} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm text-orange-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-gray-600 text-lg">Choose from our comprehensive range of aviation training programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="card p-6 hover:shadow-2xl">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={16} className="text-aviation-primary" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <BookOpen size={16} className="text-aviation-primary" />
                    <span><strong>Eligibility:</strong> {course.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Award size={16} className="text-aviation-primary" />
                    <span><strong>Fees:</strong> {course.fees}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleEnquiry(course)}
                  className="w-full btn-primary"
                >
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Success Stories</h2>
            <p className="text-gray-600 text-lg">Hear from our successful graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Course Enquiry</h3>
              <button 
                onClick={() => setShowEnquiryForm(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            {selectedCourse && (
              <div className="bg-aviation-light p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-1">Selected Course:</p>
                <p className="text-xl font-bold text-aviation-primary">{selectedCourse.title}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="inline mr-1" size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={enquiryData.name}
                  onChange={(e) => setEnquiryData({...enquiryData, name: e.target.value})}
                  className="input-field"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline mr-1" size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={enquiryData.email}
                    onChange={(e) => setEnquiryData({...enquiryData, email: e.target.value})}
                    className="input-field"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline mr-1" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={enquiryData.phone}
                    onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                    className="input-field"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="inline mr-1" size={16} />
                  Additional Message
                </label>
                <textarea
                  value={enquiryData.message}
                  onChange={(e) => setEnquiryData({...enquiryData, message: e.target.value})}
                  rows="4"
                  className="input-field"
                  placeholder="Any specific questions or requirements..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="flex-1 btn-primary">
                  Submit Enquiry
                </button>
                <button 
                  type="button"
                  onClick={() => setShowEnquiryForm(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-aviation-primary to-aviation-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Aviation Career?</h2>
          <p className="text-xl mb-8 text-blue-100">Join hundreds of successful graduates who are now flying high in their careers!</p>
          <button 
            onClick={() => setShowEnquiryForm(true)}
            className="bg-white text-aviation-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academy;
