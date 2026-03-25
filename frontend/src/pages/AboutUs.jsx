import { Plane, Target, Eye, Award, Users, Globe, Heart, TrendingUp, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';

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
    { year: '2015', event: 'Founded Anant Airways with a vision to redefine travel.' },
    { year: '2016', event: 'First major partnership with domestic airlines.' },
    { year: '2017', event: 'Expanded to 50+ destinations across India.' },
    { year: '2018', event: 'Opened our flagship Aviation Academy.' },
    { year: '2019', event: 'Reached milestone of 500,000 monthly active users.' },
    { year: '2021', event: 'Successfully launched our comprehensive mobile app.' },
    { year: '2023', event: 'Strategic expansion into international markets.' },
    { year: '2024', event: 'ISO 9001:2015 Certified for excellence in service.' },
    { year: '2026', event: 'Over 50,000+ Happy Customers globally.' }
  ];

  const stats = [
    { number: '10+', label: 'User Experience (Years)' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '1000+', label: 'Flights Operated Daily' },
    { number: '150+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-aviation-primary to-aviation-secondary py-20 text-white background-color">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <Plane className="mx-auto mb-6" size={64} />
            <h1 className="text-5xl font-bold mb-6">About Anant Airways</h1>
            <p className="text-xl text-blue-100">
              Leading the aviation and travel industry with innovation, excellence, and customer satisfaction since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Journey – Anant Airways</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Anant Airways embarked on its path with a clear mission: to deliver dependable, customer-centric aviation and travel experiences. From our modest beginnings, we have evolved into an industry-trusted partner by steadfastly maintaining service quality and nurturing lasting relationships with our passengers.
              </p>
              <p>
                Throughout the years, we have broadened our portfolio and refined our operations to meticulously address the dynamic demands of modern travelers. Our ongoing journey is fueled by a passion for continuous innovation, unwavering dedication, and a resolute pursuit of excellence.
              </p>
              <p>
                As we look to the future, our focus remains on pioneering new ways to make travel progressively more accessible, genuinely efficient, and deeply satisfying for adventurers and professionals alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-700  leading-relaxed">
              <p>
                Founded in 2015, <span className="font-bold text-aviation-primary">Anant Airways</span> was born from a vision to revolutionize the travel booking experience in India. What started as a small team of passionate aviation enthusiasts has grown into one of the country's most trusted travel platforms.
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
            <div className="bg-white p-8 rounded-none border-t-4 border-blue-600 shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-none flex items-center justify-center mb-6">
                <Target className='text-white' size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 font-inter">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-inter">
                At Anant Airways, our mission is to deliver seamless, innovative, and cost-effective travel solutions that inspire confidence and curiosity in every traveler. We are dedicated to making travel universally accessible through cutting-edge technology and an unwavering commitment to exceptional customer care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-none border-t-4 border-blue-800 shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-blue-800 w-16 h-16 rounded-none flex items-center justify-center mb-6">
                <Eye className='text-white' size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 font-inter">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-inter">
                We envision becoming the gold standard in the global travel industry, recognized for our transformative impact on how people explore the world. Our goal is to create a future where every journey is effortlessly planned, perfectly executed, and deeply memorable for every segment of travelers.
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
                    <Icon className='icon-mid' size={32} />
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-aviation-primary border-main"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-aviation-primary mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-aviation-primary rounded-full border-4 border-white shadow-lg border-main"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Custom Image/Text Sections Added */}
      {/* Custom Section 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bharat Gaurav Ratna Shri Sammaan Council Certificate For Anant Airways</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>The Bharat Gaurav Ratna Shri Sammaan Council Certificate is recognized as one of the most distinguished honors conferred upon individuals and organizations for their outstanding achievements and meaningful contributions in their respective fields. This recognition serves as a powerful symbol of excellence, dedication, and commitment, encouraging recipients to continue striving for greater impact and success.

                Such national-level recognition plays a significant role in motivating organizations and individuals who have worked consistently with passion and integrity. Being acknowledged on such a prestigious platform not only enhances credibility but also inspires continued innovation and growth.

                Anant Airways, a proud subsidiary of Namo Airways Private Limited, has been honored with the esteemed Bharat Gaurav Ratna Shri Sammaan Council Certificate. This achievement reflects the organization’s unwavering commitment to quality, operational excellence, and its growing contribution to the aviation sector. The recognition further strengthens the reputation and legacy of Namo Airways Private Limited as a group committed to delivering exceptional standards across all its ventures.

                The Bharat Gaurav Ratna Shri Award Council takes pride in being associated with several eminent personalities, including Union Ministers, Members of Parliament, senior IAS and IPS officers, as well as Governors and Chief Ministers. Their association adds immense value and credibility to the recognition process.

                Furthermore, the Council operates as a non-profit organization registered under the National Capital Territory of Delhi. It is acknowledged by the Government of India’s NITI Aayog and holds membership with the Quality Council of India. The organization also adheres to internationally recognized quality standards, being ISO 9001:2015 certified, which reinforces its commitment to maintaining transparency, quality, and trust in its initiatives.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Custom Section 2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">World Human Rights Protection Commission Certificate For Anant Airways.</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>Anant Airways has consistently upheld the highest standards of care, dignity, and respect towards its passengers and employees. This strong commitment to ethical values and responsible service has played a vital role in shaping its identity within the aviation industry. By prioritizing human values alongside operational excellence, the organization continues to build trust and credibility among its stakeholders.

                In recognition of these efforts, Anant Airways was honored in the year 2025 with the prestigious Certificate of Excellence awarded by the World Human Rights Protection Commission (WHRPC). This distinguished recognition reflects the airline’s dedication to promoting fairness, respect, and integrity in all aspects of its operations.

                Namo Airways Private Limited, along with its proud group company Anant Airways, has achieved this significant milestone, further highlighting the group’s unified commitment to service excellence, social responsibility, and ethical practices. The recognition stands as a testament to the shared vision and values that drive both organizations toward continuous growth and excellence.

                This honor not only strengthens the reputation of Anant Airways but also reinforces the legacy of Namo Airways Private Limited as a forward-thinking aviation group dedicated to delivering quality service while upholding human rights and professional standards at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Section 3 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bharat Gaurav Ratna Shri Sammaan Award Certificate For Namo Airways.</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>Anant Airways has achieved another significant milestone by being honored with the prestigious Bharat Gaurav Ratna Shri Sammaan Award Certificate. This distinguished recognition is awarded to organizations that have demonstrated exceptional contributions toward national pride, innovation, and excellence across various industries.

                Namo Airways Private Limited, along with its esteemed group company Anant Airways, has proudly received this honor. This achievement reflects the collective dedication, operational excellence, and forward-thinking approach that define both organizations. It highlights their continuous efforts to elevate standards within the aviation sector while maintaining a strong commitment to quality and service.

                This recognition stands as a testament to the shared vision and legacy of Namo Airways Private Limited and Anant Airways, showcasing their unwavering commitment to innovation, reliability, and excellence. It further reinforces their position as trusted names in the aviation industry, driven by a passion to deliver outstanding experiences and contribute meaningfully to the growth of the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* Statistics Section (Animated) */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 text-white ">
            <h2 className="text-4xl font-bold mb-4 font-inter">Our Impact by Numbers</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto font-inter">Witness the scale of our operations and the trust we have built over the years.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatsCounter key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section for About Page */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-inter">Want to Be a Part of Our Story?</h2>
          <p className="text-gray-600 text-xl mb-10 max-w-3xl mx-auto font-inter">
            Join the Anant Airways family and help us redefine the future of travel. Whether you're a traveler or a professional, we have a place for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-none font-bold hover:bg-blue-700 transition flex items-center gap-2 uppercase tracking-wide">
              Join our Team <CheckCircle size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-none font-bold hover:bg-blue-50 transition uppercase tracking-wide">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
