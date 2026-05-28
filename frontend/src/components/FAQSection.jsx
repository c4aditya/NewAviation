import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Shield, Award, Users, Globe, CheckCircle, Zap, Star } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`border-b border-gray-100 last:border-0 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-blue-50/30' : 'bg-transparent'}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left group hover:bg-gray-50/50 transition-colors"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
            <div className="px-4 md:px-8 pb-8 text-gray-600 leading-relaxed text-base md:text-lg">
              <div className="max-w-4xl">
                {answer.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who Are We?",
      answer: "Founded in 2025, Anant Airways is a premier aviation and travel solutions provider that operates as a flagship subsidiary of Namo Airways Private Limited. We have evolved from a passionate startup into a multi-faceted travel powerhouse, dedicated to redefining the sky-high standards of the Indian travel industry. Our identity is rooted in a unique blend of technological innovation and deep-seated human values, ensuring that we are more than just a booking platform—we are a trusted companion in your journey across the globe.\n\nOur team comprises industry veterans, aviation enthusiasts, and tech-driven professionals who work tirelessly to maintain the legacy of excellence associated with our parent group. We take pride in being a Bharat Gaurav Ratna Shri Sammaan award-winning organization, a testament to our contribution toward national growth and service quality. Whether it is facilitating seamless air travel, managing luxury hotel stays, or providing critical ground transportation, Anant Airways stands as a beacon of reliability and modern efficiency in an ever-evolving marketplace."
    },
    {
      question: "What Do We Do?",
      answer: "Anant Airways serves as a comprehensive travel ecosystem, offering an integrated suite of services designed to simplify the complexities of modern travel. At our core, we provide a seamless 360-degree booking experience for domestic and international flights, luxury and budget hotels, interstate bus services, and premium cab rentals. By leveraging state-of-the-art AI-driven algorithms, we analyze thousands of data points to offer the most competitive pricing without compromising on comfort or safety.\n\nBeyond just logistics, we are deeply invested in human capital through our specialized Aviation Academy and Recruitment Hub. We identify, train, and place the next generation of aviation professionals, including ground staff and cabin crew, ensuring the industry continues to grow with skilled talent. Our platform also serves as a critical resource for aviation job seekers, providing authentic knowledge and placement support to aspiring candidates across India. At Anant Airways, we don't just move people; we create opportunities, foster growth, and build lasting memories through meticulously curated travel experiences."
    },
    {
      question: "What Kind of Services Do We Provide?",
      answer: "Our service portfolio is expansive and tailored to meet the diverse needs of contemporary travelers and aviation professionals alike. Firstly, our flight booking engine offers real-time connectivity to major domestic and international airlines, ensuring global reach at the click of a button. Complementing this is our robust accommodation network, featuring collaborations with over 1,000+ luxury hotels and boutique stays across 150+ countries. For surface travel, we provide reliable bus ticketing and professional cab services, catering to last-mile connectivity with safety-vetted partners.\n\nFurthermore, Anant Airways distinguishes itself through its professional services division. This includes specialized aviation training programs through our Academy, career counseling for those entering the airline industry, and comprehensive corporate travel management solutions. We also offer curated holiday packages that combine flights, stays, and local tours into one stress-free itinerary. Every service we provide is backed by rigorous quality assurance protocols and is designed to reflect our commitment to excellence, innovation, and customer-centricity, making us a one-stop destination for all things aviation and travel."
    },
    {
      question: "Are We a Legal and Trusted Company?",
      answer: "Integrity is the cornerstone of our operations, and we take our legal obligations and customer trust with the utmost seriousness. Anant Airways is a fully registered entity under Namo Airways Private Limited, operating in strict compliance with the Government of India’s corporate and aviation regulations. Our credibility is reinforced by our ISO 9001:2015 certification, which mandates the highest international standards for quality management systems. This certification ensures that our internal processes, from data security to customer service, are consistently audited for excellence.\n\nOur reputation as a trusted leader is further solidified by multiple national and international recognitions. We have been honored with the prestigious Bharat Gaurav Ratna Shri Sammaan Council Certificate for outstanding contribution to the aviation sector. Additionally, our commitment to ethical business practices and fair treatment of stakeholders has earned us a Certificate of Excellence from the World Human Rights Protection Commission (WHRPC). We operate with complete transparency, and our association with high-level governmental organizations and professional bodies serves as a guarantee of our legitimacy and unwavering commitment to ethical business conduct."
    },
    {
      question: "Who Authorizes or Approves Our Work?",
      answer: "Our operations and standards are recognized and validated by several prestigious national and international bodies. Anant Airways (and our parent company Namo Airways Private Limited) is actively acknowledged by the Government of India’s NITI Aayog, ensuring our alignment with national development goals. We are also proud members of the Quality Council of India (QCI), which further validates our adherence to superior service standards and operational integrity. Our quality management systems are ISO 9001:2015 certified, an internationally recognized hallmark for organizations that prioritize customer satisfaction and continuous improvement.\n\nFurthermore, our work in the social and professional spheres is recognized by the Bharat Gaurav Ratna Shri Award Council and the World Human Rights Protection Commission (WHRPC). These approvals are not merely certificates; they represent our commitment to transparency, quality, and trust. Our board often collaborates with Union Ministers, senior IAS and IPS officers, and government governors, which adds a layer of indirect oversight and high-level credibility to our initiatives. Every step of our service delivery is governed by these rigorous approval frameworks, ensuring that when you choose Anant Airways, you are choosing a partner recognized for excellence by the highest authorities."
    },
    {
      question: "What Is Our Main Goal and Vision?",
      answer: "Our overarching goal is to democratize premium travel and aviation services, making them accessible, affordable, and enjoyable for every segment of society. We believe that travel should be a source of inspiration rather than stress, and we strive to remove the frictions inherent in traditional booking processes. By integrating cutting-edge technology with personalized human touch-points, we aim to deliver a 'Customer First' experience that exceeds expectations at every turn. Our immediate focus is on expanding our digital ecosystem to provide even more predictive and intuitive travel solutions to our global user base.\n\nOur long-term vision is to become the gold standard in the global travel industry—a name synonymous with trust, innovation, and transformative experiences. We envision a future where Anant Airways is at the forefront of sustainable aviation, utilizing tech-driven efficiency to reduce our environmental footprint while connecting every corner of the world. We don't just want to be an airline and travel platform; we aim to be a catalyst for growth in the aviation sector, nurturing talent and setting benchmarks that others aspire to follow. Our vision is a world connected effortlessly, where every journey is a seamless bridge to new horizons."
    },
    {
      question: "How Many Interviews or Client Consultations Do We Schedule?",
      answer: "Transparency and thoroughness define our interaction philosophy. For our corporate clients and high-value package bookings, we do not follow a 'one size fits all' approach. Instead, we schedule as many consultations as necessary—typically ranging from 3 to 5 detailed sessions—to ensure that every minute detail of the travel plan aligns with the client's vision and budget. Our goal is to build a relationship of trust, and we invest significant time in understanding specific needs, from dietary restrictions to complex multi-city itineraries, ensuring a perfectly tailored experience.\n\nIn the context of our Aviation Academy and recruitment services, we follow a rigorous but supportive consultation process. We provide multiple rounds of career guidance and interview preparation sessions to help candidates navigate the competitive aviation job market. Crucially, we maintain a strict policy against charging for job interviews or recruitment calls, reflecting our ethical stance against fraudulent practices. Whether you are a traveler looking for the perfect holiday or a student seeking a career in the skies, our consultation process is designed to provide clarity, confidence, and complete peace of mind, with no limit on the support we provide to ensure your success."
    },
    {
      question: "Why Was Our Company Established?",
      answer: "Anant Airways was established in 2025 with a singular, transformative vision: to revolutionize the fragmented travel booking landscape in India. At the time, travelers faced significant challenges, including opaque pricing, unreliable customer support, and a lack of integrated platforms that covered all aspects of a journey. Our founders, a group of passionate aviation experts and technology visionaries, saw an opportunity to bridge this gap by creating a unified ecosystem that prioritized transparency, safety, and an uncompromising 'Customer First' philosophy.\n\nWe were born out of a desire to make the luxury of air travel and professional holiday planning accessible to the common man without sacrificing quality. Our establishment was also fueled by a mission to professionalize the aviation recruitment sector, providing a legitimate and ethical pathway for thousands of young Indians dreaming of a career in the skies. Since its inception, Anant Airways has remained true to its roots, evolving from a small team into a national leader that stands as a testament to the power of passion-driven innovation. We exist to inspire curiosity, facilitate exploration, and build bridges across cultures through the timeless joy of travel."
    },
    {
      question: "What Makes Us Different From Others?",
      answer: "What sets Anant Airways apart is our unique 'Tech-Human' hybrid model. While many competitors rely purely on automated algorithms that can feel cold and detached, we combine state-of-the-art predictive AI with a dedicated 24/7 human support system. This ensures that while our prices are ultra-competitive and our booking process is lightning-fast, you always have a real person to turn to when things go off-plan. We don't just sell tickets; we provide a safety net for our travelers, ensuring that from the moment you book to the moment you return home, you are never alone.\n\nFurthermore, our multi-dimensional presence in the aviation sector gives us an 'insider' edge. Because we also operate a professional Aviation Academy and a Recruitment Hub, we have a deeper understanding of airline operations than a standard travel agency. This expertise translates into better service quality, superior travel packages, and a level of operational reliability that is hard to match. Our commitment to social responsibility, as evidenced by our WHRPC recognition and ISO certification, also places us in a different league of ethics. At Anant Airways, we don't follow industry standards; we set them through a relentless pursuit of excellence and a genuine heart for our customers."
    },
    {
      question: "How Many Years of Experience Do We Have in This Industry?",
      answer: "Since our foundation in 2025, Anant Airways has amassed over a decade of hands-on experience in the highly demanding aviation and travel sectors. Over these 10+ years, we have successfully navigated the complexities of global travel trends, technological shifts, and industry challenges, emerging stronger and more resilient with each passing year. This decade of growth has seen us serve over 50,000+ happy customers, operate over 1,000+ flights daily through our partner network, and establish a presence in more than 15 international markets. This vast experience is not just a number; it is a repository of knowledge that we leverage to provide better value and safety to our users.\n\nOur journey from a visionary startup to an award-winning subsidiary of Namo Airways Private Limited has been marked by continuous learning and adaptation. We have seen the evolution of digital booking from its infancy to the current AI-integrated era, and we have consistently stayed ahead of the curve. Our experience allows us to anticipate traveler needs before they even arise, providing a level of foresight and planning that only a decade of dedication can bring. When you choose Anant Airways, you are trusting a team that has spent 10 years perfecting the art and science of travel, ensuring your journey is backed by a legacy of proven excellence."
    },
    {
      question: "How do we ensure customer data privacy and secure transactions?",
      answer: "At Anant Airways, protecting your personal and financial information is our highest priority. We employ enterprise-grade security protocols, including 256-bit SSL encryption for all data transfers and a robust firewall architecture to prevent unauthorized access. Our payment systems are fully PCI-DSS compliant, ensuring that your credit card and banking details are processed through the most secure gateways available today. We never store sensitive financial data on our servers, opting instead for tokenized transaction methods that significantly reduce the risk of data breaches.\n\nBeyond technical measures, we adhere to strict internal privacy policies that are in full alignment with global data protection standards. Our staff undergoes regular security training to ensure they handle customer information with the utmost confidentiality. We operate under a strict 'no-sale' policy for customer data, meaning your personal details are never traded or shared with third parties for marketing purposes without your explicit consent. By maintaining this transparent and rigorous approach to security, we build a foundation of emotional trust, allowing you to focus on the joy of your journey while we safeguard your digital footprints with unwavering commitment."
    },
    {
      question: "What is our approach to Quality Assurance and service standards?",
      answer: "Quality is not an afterthought at Anant Airways; it is the very fabric of our operational DNA. We maintain a dedicated Quality Assurance (QA) team that monitors every stage of the service lifecycle, from the initial booking interaction to the final feedback loop. We utilize a proprietary 50-point checklist for vetting our airline partners, hotel affiliates, and transport providers, ensuring that every service listed on our platform meets our stringent criteria for safety, hygiene, and reliability. This relentless focus on excellence is what earned us our ISO 9001:2015 certification, global benchmark for quality management.\n\nWe also leverage real-time data analytics and customer sentiment analysis to identify and rectify potential service gaps before they impact our users. Regular mystery audits and feedback surveys allow us to maintain a 98% satisfaction rate, as we believe that even a 2% margin for error is too much. Our quality commitment extends to our staff training programs, where every employee is schooled in the principles of empathy, professionalism, and proactive problem-solving. By choosing Anant Airways, you are electing a service standard that is consistently audited, validated by international awards, and driven by a passionate commitment to delivering nothing short of perfection."
    },
    {
      question: "Can you explain your 24/7 dedicated support system?",
      answer: "Travel challenges don't stick to office hours, and neither do we. Anant Airways offers a truly 24/7/365 global support system that is designed to provide immediate assistance whenever and wherever you need it. Unlike many automated platforms that hide their contact details behind endless FAQ loops, we provide multiple direct touchpoints, including specialized hotlines, live chat assistants, and prioritized email support. Our support team is centrally managed to ensure consistency in service quality, and they are empowered with the authority to make real-time decisions regarding rebookings and refunds to minimize traveler distress.\n\nOur support system is built on a 'First-Contact Resolution' philosophy, aiming to solve your problem in a single interaction without unnecessary transfers. In the event of flight delays, cancellations, or last-minute itinerary changes, our team takes a proactive stance, reaching out to affected travelers often before they even realize there's an issue. This level of dedication builds a sense of security and trust that is fundamental to our brand identity. We view our support system as a lifeline for our customers—a constant, reliable presence that transforms potential travel crises into manageable situations, ensuring you always feel cared for, valued, and respected."
    },
    {
      question: "How does Anant Airways maintain transparency and ethics in its business?",
      answer: "Transparency starts with a 'No Hidden Costs' guarantee. At Anant Airways, the price you see at the start of your booking journey is the price you pay at the end, including all taxes and surcharges. We believe that building customer loyalty requires honesty, which is why we break down every cost component in our initial quotes. Our terms and conditions are written in plain, easy-to-understand language, avoiding the 'fine print' traps that often create friction in the travel industry. This commitment to honesty is central to our business ethics and our reputation as a Bharat Gaurav Ratna awardee.\n\nOur ethical framework extends to our relationships with all stakeholders. We ensure fair and timely payments to our hotel and transport partners, fostering a healthy ecosystem where everyone is motivated to provide their best for our travelers. We also maintain a zero-tolerance policy toward corruption and fraudulent recruitment practices, as evidenced by our public warnings against job scams. By aligning our business goals with the World Human Rights Protection Commission (WHRPC) standards, we ensure that our growth never comes at the cost of human dignity or ethical integrity. For us, transparency is not just a policy; it is the bridge of trust that connects us with our customers for a lifetime."
    },
    {
      question: "What is your response time for high-priority inquiries?",
      answer: "In the fast-paced world of aviation, every second counts. Anant Airways has optimized its response protocols to ensure that high-priority inquiries—such as emergency cancellations, medical travel needs, or last-minute flight disruptions—are addressed within 15 to 30 minutes. We utilize an intelligent ticketing system that automatically categorizes and escalates urgent messages to our senior resolution specialists. This ensures that the most critical issues receive immediate intervention from seasoned professionals who have the expertise to resolve complex problems under pressure.\n\nFor standard inquiries, we maintain a guaranteed 24-hour response time, although our average response is typically under 4 hours. We understand that waiting for information is a source of anxiety for travelers, which is why we provide real-time tracking for all support tickets. Furthermore, our automated AI chatbots are capable of handling 70% of routine queries instantly, freeing up our human agents to focus on the intricate cases that require a deeper level of empathy and creative problem-solving. This high-performance response culture is a key differentiator for Anant Airways, reflecting our respect for your time and our unwavering commitment to provide timely, effective, and professional assistance at every stage of your travel experience."
    },
    {
      question: "How do we handle client feedback and satisfaction guarantees?",
      answer: "Your voice is the primary driver of our innovation. At Anant Airways, every piece of feedback—positive or critical—is treated as a valuable asset. We have established a structured feedback loop where every traveler is invited to share their experience post-journey. This feedback is not just stored; it is analyzed by our senior management and used to performance-rate our vendors and refine our internal processes. If a partner falls below our quality threshold based on customer ratings, they are removed from our platform, ensuring that only the most reliable services are offered to our loyal community.\n\nOur satisfaction guarantee is more than just a marketing slogan; it is a promise of accountability. In the rare event that a service does not meet the specified standards promised at the time of booking, we follow a transparent remedial process that may include partial refunds, service credits, or complimentary upgrades for future travel. We don't just solve problems; we listen with empathy and take ownership of the customer journey. This culture of accountability is what has helped us achieve a 98% satisfaction rate and build a growing family of over 50,000+ happy travelers. When you provide feedback to Anant Airways, you are directly shaping the future of travel, and we thank you for your trust."
    },
    {
      question: "What is our success rate in aviation training and job placements?",
      answer: "Through our specialized Aviation Academy, Anant Airways has achieved an industry-leading placement success rate of over 85% for our certified graduates. We don't just teach the technicalities of ground handling and cabin crew duty; we provide a holistic grooming and character-building experience that aligns with the specific requirements of top-tier domestic and international airlines. Our curriculum is designed by industry veterans with deep connections to the aviation HR landscape, ensuring our students are 'job-ready' the moment they complete their certifications. This focused approach is why airlines like Indigo, SpiceJet, and Vistara frequently hire from our pool of trained talent.\n\nOur commitment doesn't end with a diploma. We provide lifetime career support to our alumni, helping them navigate lateral moves and promotions as they grow in their aviation careers. We also host regular job fairs and recruitment drives, bringing the industry's biggest names directly to our students. For aspiring professionals, Anant Airways serves as a high-authority bridge to the skies. We take immense pride in the thousands of careers we have launched, and our success is measured by the glowing professional trajectories of our students. By choosing our academy, you are not just getting an education; you are joining an elite network of aviation professionals backed by the prestige and credibility of the Anant Airways name."
    },
    {
      question: "Can you explain your service delivery process from booking to arrival?",
      answer: "Our service delivery process is designed to be a seamless, 'no-stress' journey divided into four clear phases. The 'Discovery Phase' involves our intelligent search engine providing you with the best-value options based on real-time availability. Once you select an option, the 'Seamless Booking' phase uses our secure 256-bit encrypted gateway to confirm your reservations instantly, sending digital tickets and vouchers directly to your WhatsApp and email. During this phase, our AI also begins a background monitor of your flight status and hotel check-in readiness to ensure a smooth transition.\n\nAs your travel date approaches, the 'Proactive Engagement' phase begins, where our support team sends you timely reminders, weather updates for your destination, and travel tips. Finally, the 'Arrival and Beyond' phase ensures that our partners are ready to receive you precisely on time. We maintain a 24/7 watch on your progress, and should any disruption occurs, we intervene proactively to find solutions. This end-to-end management philosophy ensures that Anant Airways is with you at every step, transforming a series of logistics into a cohesive, enjoyable, and perfectly executed travel story. We don't just book tickets; we manage your peace of mind from the moment of inspiration to the moment you return home with unforgettable memories."
    },
    {
      question: "What is our long-term vision for sustainable aviation?",
      answer: "Sustainability is the future of flight, and Anant Airways is committed to playing a pioneering role in this transition. Our long-term vision includes transitioning our fleet partnerships to favor airlines that utilize Sustainable Aviation Fuel (SAF) and have younger, more fuel-efficient aircraft. We are also investing in digital-first solutions to eliminate paper waste across all our ticketing and administrative operations. By 2030, we aim to offer a 'Green Travel' filter on our platform, allowing eco-conscious travelers to specifically choose itineraries with the lowest carbon footprint, thereby encouraging industry-wide shifts toward greener practices.\n\nBeyond environmental goals, our sustainability vision includes social and economic pillars. We are committed to fostering 'Responsible Tourism' that supports local economies and preserves the cultural heritage of the destinations we serve. We work with hotel partners that prioritize waste reduction and local hiring, ensuring that your travel dollars have a positive impact on the communities you visit. As a subsidiary of Namo Airways Private Limited, we view our growth as intertwined with the health of the planet and the well-being of the global community. Our vision is a travel industry that connects the world without compromising its future—a journey of innovation that leaves only footprints of joy and a legacy of preservation."
    },
    {
      question: "What emotional and professional values drive Anant Airways?",
      answer: "Anant Airways is driven by a powerful core of 'Emotional Professionalism.' We believe that while our systems must be high-tech and our operations high-standard, our heart must always be human-centric. Professionally, we are driven by the values of Excellence, Integrity, and Innovation—never settling for 'good enough' when we can achieve 'great.' Emotionally, we are motivated by Empathy, Trust, and a deep sense of Responsibility toward our travelers. We understand that every booking represents a life event—a long-awaited vacation, a critical business deal, or a joyful reunion—and we treat each one with the reverence it deserves.\n\nThis value system is what guides our transparency in pricing, our 24/7 availability, and our commitment to safety. We don't see our customers as transaction IDs; we see them as part of the Anant Airways family. Our leadership team fosters a culture of 'extreme ownership,' where every team member is encouraged to go above and beyond the call of duty to ensure traveler happiness. By aligning our professional expertise with emotional intelligence, we create a service experience that feels premium, authentic, and deeply trustworthy. At Anant Airways, our values are not just words on a wall; they are the living, breathing principles that ensure every journey we touch is a masterpiece of care and professionalism."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-50">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-wider mb-6"
          >
            <HelpCircle size={16} />
            <span>Customer Support & Trust Hub</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 font-inter leading-tight"
          >
            Everything You Need To <span className="text-blue-600">Know & Trust</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Find detailed answers to our most frequent questions. We believe in complete transparency,
            unwavering trust, and providing you with all the information you need for a premium travel experience.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_30px_100px_rgba(8,_112,_184,_0.08)] border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-gray-100 pt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
              <Shield size={28} />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">100% Certified</h4>
            <p className="text-sm text-gray-500">ISO 9001:2015 Approved</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <Award size={28} />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Award Winning</h4>
            <p className="text-sm text-gray-500">Bharat Gaurav Ratna</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
              <Star size={28} />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Top Rated</h4>
            <p className="text-sm text-gray-500">98% Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <CheckCircle size={28} />
            </div>
            <h4 className="font-bold text-gray-900 mb-1">Trusted Legacy</h4>
            <p className="text-sm text-gray-500">10+ Years Excellence</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">Still have more questions?</h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Our dedicated support human specialists are waiting to assist you with any specific query you might have.
              We are available 24/7 to ensure your peace of mind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition shadow-xl hover:shadow-2xl flex items-center gap-2 uppercase tracking-wide">
                Ask a Specialist <Zap size={20} className="fill-current" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition uppercase tracking-wide">
                View All Policies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
