import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Plus, Minus, HelpCircle, Phone, Mail, MessageSquare, 
  ChevronRight, ExternalLink, Globe, ShieldCheck, Award, 
  Clock, Users, MapPin, Zap, Info, CheckCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'bg-blue-50/40' : 'bg-white'}`}>
      <button
        onClick={onClick}
        className="w-full py-5 px-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg transition-colors duration-300 font-medium ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180 shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
              {answer.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'About Us', 'Services', 'Trust & Legality', 'Customer Support', 
    'Interview Process', 'Pricing & Consultation', 'Company Mission', 
    'Experience', 'Security & Privacy', 'Contact & Assistance'
  ];

  const faqData = [
    // About Us
    {
      category: 'About Us',
      question: "Who Are We?",
      answer: "Founded in 2025, Anant Airways is a premier aviation and travel solutions provider that operates as a flagship subsidiary of Namo Airways Private Limited. We have evolved from a passionate startup into a multi-faceted travel powerhouse, dedicated to redefining the sky-high standards of the Indian travel industry. Our identity is rooted in a unique blend of technological innovation and deep-seated human values, ensuring that we are more than just a booking platform—we are a trusted companion in your journey across the globe."
    },
    {
      category: 'About Us',
      question: "Why Was Our Company Established?",
      answer: "Anant Airways was established in 2025 with a singular, transformative vision: to revolutionize the fragmented travel booking landscape in India. At the time, travelers faced significant challenges, including opaque pricing, unreliable customer support, and a lack of integrated platforms that covered all aspects of a journey. Our founders, a group of passionate aviation experts and technology visionaries, saw an opportunity to bridge this gap by creating a unified ecosystem that prioritized transparency, safety, and an uncompromising 'Customer First' philosophy."
    },
    {
        category: 'About Us',
        question: "Where is Anant Airways located?",
        answer: "Our corporate headquarters is located at Plot no. D-77, D-Block, Sector 63, Noida, Uttar Pradesh 201309. We also have a presence in several other cities and hubs across India to facilitate our extensive network of travel and aviation services."
    },
    {
        category: 'About Us',
        question: "Is Anant Airways part of a larger group?",
        answer: "Yes, Anant Airways is a proud subsidiary of Namo Airways Private Limited. This association provides us with a strong foundation of industry expertise, financial stability, and shared values that drive our commitment to excellence."
    },
    {
        category: 'About Us',
        question: "Does Anant Airways operate its own aircraft?",
        answer: "Currently, Anant Airways operates as a comprehensive travel service provider and aviation specialist. We partner with leading domestic and international airlines to offer booking services, while also providing specialized aviation training and recruitment solutions."
    },

    // Services
    {
      category: 'Services',
      question: "What Do We Do?",
      answer: "Anant Airways serves as a comprehensive travel ecosystem, offering an integrated suite of services designed to simplify the complexities of modern travel. At our core, we provide a seamless 360-degree booking experience for domestic and international flights, luxury and budget hotels, interstate bus services, and premium cab rentals. Beyond just logistics, we are deeply invested in human capital through our specialized Aviation Academy and Recruitment Hub."
    },
    {
      category: 'Services',
      question: "What Kind of Services Do We Provide?",
      answer: "Our service portfolio is expansive and tailored to meet the diverse needs of contemporary travelers and aviation professionals alike. Firstly, our flight booking engine offers real-time connectivity to major domestic and international airlines. Complementing this is our robust accommodation network, featuring collaborations with over 1,000+ luxury hotels. For surface travel, we provide reliable bus ticketing and professional cab services. Furthermore, Anant Airways distinguishes itself through its professional services division, including specialized aviation training programs."
    },
    {
        category: 'Services',
        question: "Can I book international flight packages?",
        answer: "Certainly! We offer a wide range of international travel packages that include flight bookings, hotel accommodations, and curated local tours. Our aim is to provide a stress-free international travel experience tailored to your preferences."
    },
    {
        category: 'Services',
        question: "Do you offer corporate travel management?",
        answer: "Yes, we have a dedicated corporate travel division that provides tailored solutions for businesses. This includes priority bookings, consolidated reporting, and competitive corporate rates to help organizations manage their travel efficiently."
    },
    {
        category: 'Services',
        question: "What types of hotels can I book through your platform?",
        answer: "We offer a diverse range of accommodations, from 5-star luxury hotels and boutique resorts to budget-friendly stays. Our network includes over 1,000+ handpicked properties to ensure quality and comfort for every traveler."
    },

    // Trust & Legality
    {
      category: 'Trust & Legality',
      question: "Are We a Legal and Trusted Company?",
      answer: "Integrity is the cornerstone of our operations. Anant Airways is a fully registered entity under Namo Airways Private Limited, operating in strict compliance with the Government of India’s corporate and aviation regulations. Our credibility is reinforced by our ISO 9001:2015 certification. Additionally, we have been honored with the prestigious Bharat Gaurav Ratna Shri Sammaan Council Certificate and a Certificate of Excellence from the World Human Rights Protection Commission (WHRPC)."
    },
    {
      category: 'Trust & Legality',
      question: "Who Approves or Authorizes Our Work?",
      answer: "Our operations and standards are recognized and validated by several prestigious national and international bodies. Anant Airways and our parent company Namo Airways Private Limited are actively acknowledged by the Government of India’s NITI Aayog. We are also proud members of the Quality Council of India (QCI). Our quality management systems are ISO 9001:2015 certified, an internationally recognized hallmark for organizations that prioritize customer satisfaction."
    },
    {
        category: 'Trust & Legality',
        question: "Is Anant Airways ISO certified?",
        answer: "Yes, we are ISO 9001:2015 certified. This certification validates our commitment to maintaining the highest global standards in quality management and ensuring consistent service excellence for our customers."
    },
    {
        category: 'Trust & Legality',
        question: "What awards has the company won?",
        answer: "We have received several prestigious awards, including the Bharat Gaurav Ratna Shri Sammaan Award for our contributions to the aviation and travel sectors, as well as recognition from the World Human Rights Protection Commission for our ethical business practices."
    },
    {
        category: 'Trust & Legality',
        question: "Is my payment safe on your website?",
        answer: "Absolutely. We use industry-standard 256-bit SSL encryption to protect your financial transactions. Our payment gateways are PCI-DSS compliant, ensuring that your banking details are never stored and are processed through the most secure channels available."
    },

    // Customer Support
    {
        category: 'Customer Support',
        question: "How can I contact Anant Airways customer support?",
        answer: "You can reach us through multiple channels: via email at support@anantairways.in, by calling our helpline at +91 9560205305, or through the 'Contact Us' page on our website. Our support team is available 24/7 to assist you."
    },
    {
        category: 'Customer Support',
        question: "What are your support hours?",
        answer: "Travel issues can arise at any time, which is why we offer 24/7 customer support. Whether it's a late-night flight query or a weekend hotel booking issue, our team is always ready to help you."
    },
    {
        category: 'Customer Support',
        question: "How long does it take to get a response for support queries?",
        answer: "For urgent issues, we aim to respond within 15-30 minutes. For standard inquiries, our typical response time is under 4 hours, and we guarantee a response within 24 hours for all communications."
    },
    {
        category: 'Customer Support',
        question: "Can I get assistance with a refund directly?",
        answer: "Yes, our customer support team can guide you through the refund process. You can also refer to our Refund Policy page for detailed steps on how to initiate a refund for your specific service."
    },
    {
        category: 'Customer Support',
        question: "Do you offer multi-lingual support?",
        answer: "Currently, our primary support languages are English and Hindi. We are working on expanding our support team to include more regional languages to better serve our diverse customer base."
    },

    // Interview Process
    {
      category: 'Interview Process',
      question: "How Many Interviews or Consultations Do We Schedule?",
      answer: "Transparency and thoroughness define our interaction philosophy. For our corporate clients and high-value package bookings, we typically range from 3 to 5 detailed sessions. In the context of our Aviation Academy and recruitment services, we provide multiple rounds of career guidance and interview preparation sessions to help candidates navigate the competitive aviation job market."
    },
    {
        category: 'Interview Process',
        question: "Is there a charge for job interviews at Anant Airways?",
        answer: "Definitely not. We have a strict policy against charging any fees for recruitment, interviews, or job confirmations. Beware of any fraudulent entities claiming to represent us and asking for money. We only communicate through official channels."
    },
    {
        category: 'Interview Process',
        question: "What is the typical format of your airline interviews?",
        answer: "Our recruitment process usually includes an initial screening, a face-to-face or video interview, and a final technical or role-specific evaluation. We focus on assessing communication skills, professionalism, and industry knowledge."
    },
    {
        category: 'Interview Process',
        question: "Can I re-apply if I don't pass an interview?",
        answer: "Yes, we encourage candidates to re-apply after 3-6 months. This gives you time to work on any feedback provided and improve your skills for the next opportunity."
    },
    {
        category: 'Interview Process',
        question: "What should I bring to my aviation interview?",
        answer: "You should carry updated copies of your resume, academic certificates, valid ID proof, and passport-size photographs. Specific requirements will be communicated to you by our HR team prior to the interview."
    },

    // Pricing & Consultation
    {
        category: 'Pricing & Consultation',
        question: "Are there any hidden charges in your pricing?",
        answer: "We follow a strict 'No Hidden Costs' policy. The price you see during the booking process is inclusive of all taxes and fees. We believe in complete transparency to build long-term trust with our customers."
    },
    {
        category: 'Pricing & Consultation',
        question: "How do I book a consultation for a customized holiday?",
        answer: "You can book a consultation by filling out the enquiry form on our 'Contact Us' page or by calling our sales team directly. We will assign a dedicated travel consultant to help plan your perfect trip."
    },
    {
        category: 'Pricing & Consultation',
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, net banking, UPI, and popular digital wallets. All transactions are processed through highly secure and encrypted payment gateways."
    },
    {
        category: 'Pricing & Consultation',
        question: "Is there a consultation fee for travel planning?",
        answer: "No, our initial travel planning consultations are complimentary. We only charge for the actual bookings and services you choose to proceed with."
    },
    {
        category: 'Pricing & Consultation',
        question: "Can I pay in installments?",
        answer: "For certain high-value holiday packages, we offer the option to pay a booking amount upfront and the remaining balance in installments. Please check with your travel consultant for specific package details."
    },

    // Company Mission
    {
      category: 'Company Mission',
      question: "What Is Our Main Goal?",
      answer: "Our overarching goal is to democratize premium travel and aviation services, making them accessible, affordable, and enjoyable. We believe that travel should be a source of inspiration rather than stress, and we strive to remove the frictions inherent in traditional booking processes through cutting-edge technology and exceptional customer care."
    },
    {
        category: 'Company Mission',
        question: "What are your core values?",
        answer: "Our core values are Customer First, Excellence, Innovation, and Integrity. These principles guide every decision we make and reflect our commitment to providing world-class service."
    },
    {
        category: 'Company Mission',
        question: "How does Anant Airways contribute to the aviation industry?",
        answer: "We contribute by training highly skilled aviation professionals through our academy and by providing a transparent, reliable platform for travelers, thereby fostering growth and trust in the entire ecosystem."
    },
    {
        category: 'Company Mission',
        question: "What is your vision for the next 5 years?",
        answer: "Our vision is to become the gold standard in the global travel industry, recognized for our innovation in tech-driven travel and our dedication to building the world's most trusted travel ecosystem."
    },
    {
        category: 'Company Mission',
        question: "Do you have any sustainability initiatives?",
        answer: "Yes, we are committed to Sustainable Aviation. Our long-term vision includes partnering with eco-friendly airlines and implementing digital solutions to eliminate paper waste across our operations."
    },

    // Experience
    {
      category: 'Experience',
      question: "How Many Years of Experience Do We Have?",
      answer: "Anant Airways has amassed over a decade of hands-on experience in the highly demanding aviation and travel sectors. Since our foundation in 2025 (as part of Namo Airways Private Limited group heritage), we have successfully served over 50,000+ happy customers and operated over 1,000+ flights daily through our partner network."
    },
    {
      category: 'Experience',
      question: "What Makes Us Different?",
      answer: "What sets Anant Airways apart is our unique 'Tech-Human' hybrid model. While many competitors rely purely on automated algorithms, we combine state-of-the-art predictive AI with a dedicated 24/7 human support system. Furthermore, our presence in the aviation academy sector gives us a deeper 'insider' understanding of the industry."
    },
    {
        category: 'Experience',
        question: "How many customers have you served?",
        answer: "Over the years, we have had the privilege profile of serving over 50,000 happy customers across India and several international destinations."
    },
    {
        category: 'Experience',
        question: "What is your satisfaction rate?",
        answer: "We are proud to maintain a consistent 98% customer satisfaction rate, a testament to our dedication to quality and service excellence."
    },
    {
        category: 'Experience',
        question: "Do you have experience in international markets?",
        answer: "Yes, we have established a strong presence in over 15+ countries, providing comprehensive travel and booking services for travelers exploring global destinations."
    },

    // Security & Privacy
    {
        category: 'Security & Privacy',
        question: "Is my personal data shared with third parties?",
        answer: "We follow a strict 'no-sale' policy for customer data. Your information is only shared with necessary service providers (like airlines or hotels) to fulfill your booking and is never sold to marketing firms."
    },
    {
        category: 'Security & Privacy',
        question: "How do you protect my financial information?",
        answer: "We use 256-bit SSL encryption and PCI-DSS compliant payment gateways. We do not store sensitive financial information like credit card numbers on our own servers."
    },
    {
        category: 'Security & Privacy',
        question: "What are your cookies used for?",
        answer: "Cookies are used to enhance your browsing experience, remember your preferences, and provide personalized travel recommendations. You can manage your cookie settings through our Privacy Policy page."
    },
    {
        category: 'Security & Privacy',
        question: "Can I request for my account to be deleted?",
        answer: "Yes, if you wish to close your account and delete your personal information, please send a request to privacy@anantairways.in, and our team will process it in accordance with legal requirements."
    },
    {
        category: 'Security & Privacy',
        question: "How do you ensure the safety of your website?",
        answer: "Our website is regularly audited for security vulnerabilities and is protected by advanced firewall systems to prevent data breaches and unauthorized access."
    },

    // Contact & Assistance
    {
        category: 'Contact & Assistance',
        question: "What do I do if I forget my booking ID?",
        answer: "Don't worry! You can find your booking ID in the confirmation email we sent you. Alternatively, you can contact our support team with your name and date of travel, and we will retrieve it for you."
    },
    {
        category: 'Contact & Assistance',
        question: "How can I update my contact details in a booking?",
        answer: "To update your phone number or email in an existing booking, please contact our customer support team or log in to your account and go to the 'My Bookings' section."
    },
    {
        category: 'Contact & Assistance',
        question: "Do you have an office I can visit?",
        answer: "Yes, our main office is in Sector 63, Noida. You are welcome to visit us during business hours (Monday to Saturday, 9 AM to 6 PM) for face-to-face consultations."
    },
    {
        category: 'Contact & Assistance',
        question: "Who can I contact for media or partnership inquiries?",
        answer: "For media, PR, or strategic partnership inquiries, please email us at partnerships@anantairways.in."
    },
    {
        category: 'Contact & Assistance',
        question: "What is your emergency contact for travelers?",
        answer: "Travelers can use our 24/7 dedicated emergency line available at +91 9560205305 for any urgent issues during their journey."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // SEO Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.slice(0, 10).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-widest mb-6"
              >
                <HelpCircle size={16} />
                <span>Knowledge Base</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
              >
                Frequently Asked <span className="text-blue-600">Questions</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Find answers to the most common questions about our services, company, process, and support. We are here to help you every step of the way.
              </motion.p>
              
              <div className="relative max-w-lg mx-auto lg:mx-0 group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search your question here..."
                  className="w-full py-5 pl-14 pr-6 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-xl shadow-blue-900/5 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="relative p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[2rem] shadow-2xl">
                <img 
                  src="https://betterdocs.co/wp-content/uploads/2020/02/5-Tips-For-Creating-A-Killer-FAQ-Page.png" 
                  alt="FAQ Illustration" 
                  className="w-full h-auto rounded-[1.8rem] shadow-inner"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Zap size={24} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Instant Answers</p>
                      <p className="text-gray-900 font-bold">50+ Detailed Topics</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Globe size={20} className="text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-medium ${
                        activeCategory === cat 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-2' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-100'
                      }`}
                    >
                      {cat}
                      <ChevronRight size={16} className={activeCategory === cat ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl text-white">
                  <h4 className="font-bold mb-3">Can't find it?</h4>
                  <p className="text-sm text-gray-300 mb-6">Our experts are available around the clock to assist you.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group">
                    Go to Support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900">
                  {activeCategory} <span className="text-gray-400 font-normal text-lg ml-2">({filteredFaqs.length} questions)</span>
                </h2>
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="space-y-4 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  {filteredFaqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={32} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or selecting a different category.</p>
                </div>
              )}
              
              {/* Trust Section */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Safe & Secure</h4>
                    <p className="text-sm text-gray-600">ISO 9001:2015 certified operations and policies.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Instant Support</h4>
                    <p className="text-sm text-gray-600">Average response time is less than 30 minutes.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Award Winning</h4>
                    <p className="text-sm text-gray-600">Recognized for excellence in travel and aviation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden group shadow-[0_40px_100px_rgba(37,99,235,0.3)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md"
              >
                <MessageSquare size={32} />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Still Need Help?</h2>
              <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Our support team is just a click away. Whether you have a complex query or just need some guidance, we are here to ensure your journey is perfect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition shadow-2xl hover:shadow-inner flex items-center gap-2 uppercase tracking-wide">
                  Contact Our Team <Zap size={20} className="fill-current" />
                </Link>
                <a href="tel:+919560205305" className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition flex items-center gap-2 uppercase tracking-wide">
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
