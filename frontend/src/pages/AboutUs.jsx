import { Plane, Target, Eye, Award, Users, Globe, Heart, TrendingUp, Clock, Shield, Star, CheckCircle, Rocket, Cpu, Lightbulb, Zap } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import FAQSection from '../components/FAQSection';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
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
    { year: '2025', event: 'Founded Anant Airways with a vision to redefine travel.' },
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


      {/* Our Journey */}
      <section>

        <div className='backgourd-image-with-content-abouts'>

          <div className='content-main responsive-padding'>

            <h1>About Us</h1>

            <p>Discover unforgettable journeys with us—your trusted travel partner for curated destinations, comfortable stays, and seamless holiday experiences across India and beyond</p>

            <button
              onClick={() => navigate('/contact')}
              className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Enquiry
            </button>

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
                Founded in 2025, <span className="font-bold text-aviation-primary">Anant Airways</span> was born from a vision to revolutionize the travel booking experience in India. What started as a small team of passionate aviation enthusiasts has grown into one of the country's most trusted travel platforms.
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

      {/* Our Journey Section */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
        {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold text-gray-900 mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              From a vision of redefining travel to becoming a global leader in aviation services, our journey is built on growth, innovation, and an unwavering passion for building trust with every client we serve.
            </motion.p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {/* 2024 Milestone */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full shadow-2xl flex items-center justify-center">
                    <Rocket className="text-blue-600" size={28} />
                  </div>
                </div>
                <div className="w-full md:w-5/12 md:pr-16 text-center md:text-right">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 hover:border-blue-200 transition-all duration-500 group"
                  >
                    <div className="text-6xl font-black text-blue-600 opacity-10 mb-4">2024</div>
                    <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Foundation & Launch</h3>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">The Birth of Anant Airways</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Founded with a clear mission to make premium aviation services accessible. We started with a small but dedicated team of experts who shared a passion for innovation and excellence.
                    </p>
                    <div className="space-y-3 text-left md:text-right">
                      <div className="flex items-center md:justify-end gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>ISO 9001:2015 Certification</span>
                      </div>
                      <div className="flex items-center md:justify-end gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Launched 5 Domestic Routes</span>
                      </div>
                    </div>

                  </motion.div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </div>

              {/* 2025 Milestone */}
              <div className="flex flex-col md:flex-row-reverse items-center relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-indigo-600 rounded-full shadow-2xl flex items-center justify-center">
                    <Cpu className="text-indigo-600" size={28} />
                  </div>
                </div>
                <div className="w-full md:w-5/12 md:pl-16 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 hover:border-indigo-200 transition-all duration-500 group"
                  >
                    <div className="text-6xl font-black text-indigo-600 opacity-10 mb-4">2025</div>
                    <h3 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">Scaling New Heights</h3>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">Digital Transformation</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Transitioned into a tech-first aviation powerhouse. Integrated advanced telematics and AI-driven booking systems to ensure safety and affordability for all our travelers.
                    </p>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Most Innovative Startup 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>100+ Luxury Hotel Partners</span>
                      </div>
                    </div>

                  </motion.div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </div>

              {/* 2026 Milestone */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-violet-600 rounded-full shadow-2xl flex items-center justify-center">
                    <Globe className="text-violet-600" size={28} />
                  </div>
                </div>
                <div className="w-full md:w-5/12 md:pr-16 text-center md:text-right">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 hover:border-violet-200 transition-all duration-500 group"
                  >
                    <div className="text-6xl font-black text-violet-600 opacity-10 mb-4">2026</div>
                    <h3 className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-2">Global Outreach</h3>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">International Expansion</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Successfully launched international routes connecting major Asian hubs. Awarded for excellence in global service and commitment to sustainable aviation.
                    </p>
                    <div className="space-y-3 text-left md:text-right">
                      <div className="flex items-center md:justify-end gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Bharat Gaurav Ratna Award</span>
                      </div>
                      <div className="flex items-center md:justify-end gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>15+ Countries Reached</span>
                      </div>
                    </div>

                  </motion.div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </div>

              {/* Future Vision */}
              <div className="relative pt-12 md:pt-24 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full max-w-4xl bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 p-px rounded-[2rem] shadow-2xl relative group"
                >
                  <div className="bg-blue-600/20 absolute inset-0 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white rounded-[2rem] p-8 md:p-12 overflow-hidden border border-white/10">
                    <div className="absolute top-0 right-0 p-8">
                      <Zap className="text-yellow-400 animate-pulse" size={48} />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-2/3">
                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                          Future Vision
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Redefining the Skies Beyond 2027</h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          Our eyes are set on the horizon. We envision a world where travel is not just a service but a seamless, integrated experience powered by hyper-personalization and zero-emission travel alternatives.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <Target className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800">Our Mission</h5>
                              <p className="text-sm text-gray-500">World's most trusted travel ecosystem.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <Eye className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800">Our Vision</h5>
                              <p className="text-sm text-gray-500">Every city connected effortlessly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 bg-blue-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                        <Lightbulb className="text-blue-600 mb-4" size={56} />
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Join the Future</h4>
                        <p className="text-sm text-gray-500 mb-6">We are building the next generation of aviation tech.</p>
                        <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">Become a Partner</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Statistics Row */}
          <div className="mt-32 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", value: "2,500+", icon: CheckCircle },
                { label: "Happy Clients", value: "50K+", icon: Users },
                { label: "Team Members", value: "1,000+", icon: Award },
                { label: "Countries Reached", value: "15+", icon: Globe }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
                </motion.div>
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

              <img src='https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/WhatsApp%20Image%202026-03-28%20at%203.25.17%20PM.jpeg'></img>
              <p>
                The Bharat Gaurav Ratna Shri Sammaan Council Certificate is recognized as one of the most distinguished honors conferred upon individuals and organizations for their outstanding achievements and meaningful contributions in their respective fields. This recognition serves as a powerful symbol of excellence, dedication, and commitment, encouraging recipients to continue striving for greater impact and success.

                Such national-level recognition plays a significant role in motivating organizations and individuals who have worked consistently with passion and integrity. Being acknowledged on such a prestigious platform not only enhances credibility but also inspires continued innovation and growth.

                Namo Airways Private Limited has been honored with the esteemed Bharat Gaurav Ratna Shri Sammaan Council Certificate. This achievement reflects the organization’s strong commitment to quality, operational excellence, and its growing contribution to the aviation sector. Anant Airways, as a proud subsidiary of Namo Airways Private Limited, continues to grow under its guidance and carries forward the same values and standards. This recognition further strengthens the reputation and legacy of Namo Airways Private Limited as a group committed to delivering high standards across all its ventures.

                The Bharat Gaurav Ratna Shri Award Council takes pride in being associated with several eminent personalities, including Union Ministers, Members of Parliament, senior IAS and IPS officers, as well as Governors and Chief Ministers. Their association adds immense value and credibility to the recognition process.

                Furthermore, the Council operates as a non-profit organization registered under the National Capital Territory of Delhi. It is acknowledged by the Government of India’s NITI Aayog and holds membership with the Quality Council of India. The organization also follows internationally recognized quality standards and is ISO 9001:2015 certified, which shows its commitment to maintaining transparency, quality, and trust in its initiatives.

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
              <img src='https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/WhatsApp%20Image%202026-03-28%20at%203.32.04%20PM.jpeg' width={"100%"}></img>
              <p>Private Limited has consistently maintained high standards of care, dignity, and respect towards its passengers and employees. This strong commitment to ethical values and responsible service has played an important role in building its identity in the aviation industry. By focusing on human values along with operational excellence, the organization continues to gain trust and credibility among its stakeholders. In recognition of these efforts, Private Limited was honored in the year 2025 with the prestigious Certificate of Excellence awarded by the World Human Rights Protection Commission (WHRPC). This recognition reflects the airline’s dedication to fairness, respect, and integrity in all areas of its operations. Anant Airways, as a proud group company, operates under the guidance and strong foundation of Private Limited. This achievement highlights the group’s shared commitment to service quality, social responsibility, and ethical practices. It also shows the common vision and values that drive both organizations towards growth and excellence. This honor not only strengthens the reputation of Private Limited but also adds value to Anant Airways as part of the group. Together, they continue to move forward as a responsible and forward-thinking aviation group, focused on delivering quality service while maintaining high professional and human standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Section 3 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Bharat Gaurav Ratna Shri Sammaan Award Certificate </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <img src='https://starairways.in/assets/images/about-img/bharatratan2.jpg' width={"100%"}></img>
              <p>Anant Airways has achieved another significant milestone by being honored with the prestigious Bharat Gaurav Ratna Shri Sammaan Award Certificate. This distinguished recognition is awarded to organizations that have demonstrated exceptional contributions toward national pride, innovation, and excellence across various industries.

                Private Limited, along with its esteemed group company Anant Airways, has proudly received this honor. This achievement reflects the collective dedication, operational excellence, and forward-thinking approach that define both organizations. It highlights their continuous efforts to elevate standards within the aviation sector while maintaining a strong commitment to quality and service.

                This recognition stands as a testament to the shared vision and legacy of Private Limited and Anant Airways, showcasing their unwavering commitment to innovation, reliability, and excellence. It further reinforces their position as trusted names in the aviation industry, driven by a passion to deliver outstanding experiences and contribute meaningfully to the growth of the sector.
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

      {/* FAQ Section */}
      <FAQSection />

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
