import { Plane, Target, Eye, Award, Users, Globe, Heart, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We go the extra mile to ensure your travel experience is exceptional.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in service quality, safety, and professionalism across all operations.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Constantly evolving with technology to provide seamless booking experiences and travel solutions.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Transparent pricing, honest communication, and ethical business practices in everything we do.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Founded SkyWings Aviation & Travel' },
    { year: '2017', event: 'Expanded to 50+ destinations' },
    { year: '2019', event: 'Launched Aviation Academy' },
    { year: '2022', event: 'Reached 1 Million+ bookings' },
    { year: '2024', event: 'ISO 9001:2015 Certified' },
    { year: '2026', event: '50,000+ Happy Customers' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <Plane className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold mb-6">About SkyWings</h1>
            <p className="text-xl text-blue-100">
              Leading the aviation and travel industry with innovation, excellence, and customer satisfaction since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2015, <span className="font-bold text-aviation-primary">SkyWings Aviation & Travel</span> was born from a vision to revolutionize the travel booking experience in India. What started as a small team of passionate aviation enthusiasts has grown into one of the country's most trusted travel platforms.
              </p>
              <p>
                We understand that travel is more than just reaching a destination—it's about the journey, the experiences, and the memories created along the way. That's why we've dedicated ourselves to making every aspect of travel planning seamless, affordable, and enjoyable.
              </p>
              <p>
                Today, we serve over 50,000 customers annually, offering comprehensive booking solutions for flights, hotels, buses, and cabs. Our commitment to excellence and innovation has earned us recognition as a leader in the aviation and travel industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-aviation-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide seamless, affordable, and reliable travel solutions that empower people to explore the world with confidence. We strive to make travel accessible to everyone through innovative technology and exceptional customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-aviation-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become India's most trusted and preferred travel partner, recognized for innovation, quality, and customer satisfaction. We envision a future where travel planning is effortless and every journey is memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-aviation-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aviation-secondary transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-aviation-primary"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-aviation-primary mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-aviation-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-aviation-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <Globe size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Destinations</div>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
