import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Plane, Hotel, Bus, Car, GraduationCap, Briefcase,
  CheckCircle, ArrowRight, Shield, Clock, Award,
  Headphones, Zap, Search, Star, MessageSquare,
  Globe, Users, Settings, Database, TrendingUp,
  MapPin, ShieldCheck, HelpCircle, UserCheck,
  Target, Rocket, Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = {
  'flight-booking': {
    title: 'Professional Flight Booking',
    shortDesc: 'Connect to the world with our high-speed, integrated airline reservation system.',
    fullDesc: 'Anant Airways provides a high-speed, integrated flight booking engine that connects you to thousands of domestic and international routes. Our technology analyzes real-time data from over 400+ airlines to ensure you get the best value, optimal routes, and comfortable travel options.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
    icon: Plane,
    color: 'blue',
    stats: [
      { label: 'Airlines Network', value: '400+' },
      { label: 'Daily Bookings', value: '5K+' },
      { label: 'User Satisfaction', value: '99%' },
      { label: 'Global Destinations', value: '150+' }
    ],
    advancedFeatures: [
      { title: 'Predictive Pricing', desc: 'Our AI analyzes price trends to suggest the best time to book.' },
      { title: 'Multi-City Routing', desc: 'Seamlessly plan complex itineraries with multiple stops.' },
      { title: 'Corporate Portal', desc: 'Specialized tools for business travel management.' },
      { title: 'Instant Refunds', desc: 'Auto-processing for eligible cancellations.' }
    ],
    expertise: 'With over a decade of experience in aviation logistics, we have refined the art of flight management. We handle everything from individual budget flights to full-scale corporate aircraft charters.',
    industries: ['Individual Travelers', 'Corporate Entities', 'Government Agencies', 'Non-Profits', 'Wedding & Event Planners'],
    challenges: [
      { challenge: 'Dynamic Pricing', solution: 'Our fare-lock feature allows you to hold prices for up to 48 hours.' },
      { challenge: 'Complex Cancellations', solution: 'Dedicated 24/7 support team to handle airline negotiations.' }
    ],
    testimonials: [
      { name: 'Sameer Khanna', role: 'Business Traveler', text: 'The multi-city booking engine saved me hours of planning for my European tour.' },
      { name: 'Anjali Sharma', role: 'Family Vacationer', text: 'Lowest prices I found online, and the customer support was incredible when my flight was delayed.' }
    ],
    benefits: ['Real-time seat availability', 'Instant e-ticketing', '24/7 dedicated flight support', 'Best price guarantee', 'Meal & Seat preferences', 'Priority check-in assistance'],
    process: [
      { title: 'Search & Analyze', desc: 'Enter your destination and our AI scouts for the most efficient routes and lowest fares.' },
      { title: 'Smart Comparison', desc: 'Browse through categorized options with detailed breakdowns of amenities and layovers.' },
      { title: 'Secure Transaction', desc: 'Finalize your booking through our highly secure, multi-step encrypted gateway.' },
      { title: 'E-Ticket Delivery', desc: 'Receive your confirmed tickets instantly on your registered WhatsApp and Email.' },
      { title: 'Pre-flight Support', desc: 'Get automated updates on flight status, gate changes, and web check-in reminders.' }
    ],
    faqs: [
      { q: 'What is the "Fare Lock" feature?', a: 'Fare Lock allows you to hold a specific flight price for a small fee while you finalize your plans, protecting you from sudden price hikes.' },
      { q: 'How early should I book for international flights?', a: 'We recommend booking international tickets at least 45-60 days in advance for the best savings.' },
      { q: 'Do you offer group booking discounts?', a: 'Yes, for groups of 10 or more, we offer special negotiated rates and flexible payment options.' },
      { q: 'Is my data secure?', a: 'Absolutely. We use 256-bit SSL encryption and are fully PCI-DSS compliant.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'hotel-booking': {
    title: 'Luxury Hotel Accommodations',
    shortDesc: 'Handpicked premium stays across 150+ countries with world-class hospitality.',
    fullDesc: 'Experience world-class hospitality with Anant Airways. We have partnered with over 1,000+ luxury hotels, boutique resorts, and business stays to provide you with exclusive rates and complimentary upgrades. Every hotel in our network is vetted for quality, hygiene, and service excellence.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    icon: Hotel,
    color: 'indigo',
    stats: [
      { label: 'Partner Hotels', value: '1,000+' },
      { label: 'Verified Stays', value: '500K+' },
      { label: 'Global Cities', value: '300+' },
      { label: 'Member Savings', value: '25%' }
    ],
    advancedFeatures: [
      { title: 'Virtual Tours', desc: 'Experience the room layout before you book with our 360-degree tours.' },
      { title: 'Concierge Direct', desc: 'Message the hotel directly through our platform for special requests.' },
      { title: 'Smart Filters', desc: 'Filter by hygiene ratings, pet-friendliness, and eco-certifications.' },
      { title: 'Loyalty Credits', desc: 'Earn points on every stay to redeem for future free bookings.' }
    ],
    expertise: 'We specialize in curating accommodation experiences that go beyond a bed. From private island villas to high-tech urban business hubs, we know where to stay for every occasion.',
    industries: ['Leisure Travelers', 'Digital Nomads', 'Corporate Offices', 'Event Planners', 'Honeymooners'],
    challenges: [
      { challenge: 'Availability Peaks', solution: 'We hold exclusive allotments in top hotels for our members.' },
      { challenge: 'Hidden Fees', solution: 'Our "All-in" pricing shows taxes and resort fees upfront.' }
    ],
    testimonials: [
      { name: 'Vikram Mehta', role: 'Adventure Traveler', text: 'The boutique hotel they suggested in Manali was a hidden gem. Perfect service.' },
      { name: 'Sarah Jenkins', role: 'Business Manager', text: 'Anant Airways handles our entire team\'s stays during conferences with zero errors.' }
    ],
    benefits: ['Complimentary breakfast at select stays', 'Early check-in/Late check-out', 'Free Wi-Fi & premium amenities', 'Verified property photos', 'Spa & Dining vouchers', 'Loyalty point program'],
    process: [
      { title: 'Refined Search', desc: 'Use our deep-filters to narrow down your perfect stay based on 50+ criteria.' },
      { title: 'Visual Verification', desc: 'Examine high-resolution gallery and read verified, recent guest experiences.' },
      { title: 'Preferred Booking', desc: 'Select from "Pay at Hotel" or "Prepaid" options with special member discounts.' },
      { title: 'Stay Management', desc: 'Manage your check-in dates and special requests through our unified dashboard.' },
      { title: 'Feedback Loop', desc: 'Share your experience to help us maintain the highest quality standards.' }
    ],
    faqs: [
      { q: 'Can I request a specific room view?', a: 'Yes, you can use our "Concierge Direct" feature to request specific room types or views.' },
      { q: 'Are the room photos real?', a: 'We only show photos that have been verified by our quality audit team or are officially provided by the hotel management.' },
      { q: 'What is your refund policy for hotels?', a: 'Refund policies vary by hotel and room type. We clearly label "Refundable" vs "Non-Refundable" rooms during booking.' },
      { q: 'Do you offer airport transfers with hotels?', a: 'Many of our partner hotels offer free transfers. You can filter for this in the search results.' }
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1674651240687-92b4ad15d0ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBib29raW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",


    ]
  },
  'bus-booking': {
    title: 'Reliable Bus Services',
    shortDesc: 'Modern inter-city bus travel with premium fleets and real-time tracking.',
    fullDesc: 'Our bus booking network covers the entire length and breadth of the country. We partner with top-rated private operators and state transport corporations to offer AC, Non-AC, Sleeper, and Seater options at the most competitive prices.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8fDB8fHww',
    icon: Bus,
    color: 'green',
    stats: [
      { label: 'Bus Routes', value: '10K+' },
      { label: 'Operators', value: '2.5K+' },
      { label: 'Daily Trips', value: '15K+' },
      { label: 'On-time Rate', value: '96%' }
    ],
    advancedFeatures: [
      { title: 'Live GPS Tracking', desc: 'Share your live location with family for safety and predictability.' },
      { title: 'Seat Visualization', desc: 'Pick your seat with a detailed layout of the bus interior.' },
      { title: 'Female-Only Seats', desc: 'Restricted seating options for the safety of solo female travelers.' },
      { title: 'Digital Boarding', desc: 'Forget paper; use our mobile QR code boarding system.' }
    ],
    expertise: 'We manage one of the largest decentralized bus networks in India, ensuring that even remote towns are connected to major urban hubs.',
    industries: ['Students', 'Daily Commuters', 'Group Pilgrims', 'Inter-state Logistics', 'Backpackers'],
    challenges: [
      { challenge: 'Missing the Bus', solution: 'Automated SMS reminders 30 mins before the bus reaches your stop.' },
      { challenge: 'Comfort Standards', solution: 'We only partner with operators that maintain a 4+ star rating.' }
    ],
    testimonials: [
      { name: 'Amit Rai', role: 'College Student', text: 'The sleeper bus to Delhi was incredibly clean. Best bus booking experience.' },
      { name: 'Priya Verma', role: 'Freelancer', text: 'GPS tracking makes me feel safe when traveling alone at night.' }
    ],
    benefits: ['Live bus tracking', 'Choice of preferred seats', 'M-tickets for paperless travel', 'Reliable boarding points', 'Free Cancellation Policy', 'Verified Bus Photos'],
    process: [
      { title: 'Route Selection', desc: 'Enter source and destination to see all available direct and connecting buses.' },
      { title: 'Filter & Compare', desc: 'Sort by AC/Non-AC, Multi-axle, Price, and operator reviews.' },
      { title: 'Smart Seat Map', desc: 'View seat availability and select your preferred spot (Window/Aisle/Sleeper).' },
      { title: 'Instant Confirmation', desc: 'Get your m-ticket instantly with boarding point GPS links.' },
      { title: 'Journey Support', desc: 'Access our helpline for any assistance during your travel.' }
    ],
    faqs: [
      { q: 'What is an m-ticket?', a: 'An m-ticket is a mobile ticket sent via SMS and WhatsApp. You do not need to print it; just show it to the conductor.' },
      { q: 'Can I change my boarding point?', a: 'Yes, most operators allow boarding point changes up to 4 hours before departure through our app.' },
      { q: 'Is there a refund for late buses?', a: 'If a bus is delayed by more than 2 hours, you are entitled to a partial refund as per operator policy.' },
      { q: 'How many bags can I carry?', a: 'Most buses allow 1 large suitcase and 1 small handbag per passenger.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1444911897468-45a907106fe1?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'cab-services': {
    title: 'Premium Cab Rentals',
    shortDesc: 'Safe, sanitized, and punctual cab services for local and outstation travel.',
    fullDesc: 'Whether it is an airport transfer, a local city tour, or an inter-city round trip, our premium cab services ensure safety and comfort. We offer a range of vehicles from economic hatchbacks to luxury sedans and SUVs, all driven by professional, background-verified chauffeurs.',
    heroImage: 'https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    icon: Car,
    color: 'orange',
    stats: [
      { label: 'Fleet Size', value: '5K+' },
      { label: 'Verified Drivers', value: '100%' },
      { label: 'Cities Covered', value: '100+' },
      { label: 'Ride Safety', value: '5-Star' }
    ],
    advancedFeatures: [
      { title: 'Hourly Rentals', desc: 'Book a cab for 4, 8, or 12 hours for flexible city travel.' },
      { title: 'One-Way Drops', desc: 'Pay only for one-way distance for inter-city trips.' },
      { title: 'Emergency SOS', desc: 'In-app panic button for immediate safety assistance.' },
      { title: 'Scheduled Rides', desc: 'Book in advance and never worry about last-minute availability.' }
    ],
    expertise: 'Our focus on "Punctuality & Politeness" has made us the preferred cab partner for multiple Fortune 500 companies in India.',
    industries: ['Corporate Executives', 'Tourism Agencies', 'Events & Weddings', 'Healthcare Transfers', 'Airport Services'],
    challenges: [
      { challenge: 'Driver Cancellations', solution: 'We assign back-up drivers for every high-priority corporate booking.' },
      { challenge: 'Unclean Cars', solution: 'Compulsory photo-verification of car cleanliness before every shift.' }
    ],
    testimonials: [
      { name: 'Rahul Dutta', role: 'Marketing Head', text: 'Best outstation cab service. The driver was professional and the car was immaculate.' },
      { name: 'Sonal Gupta', role: 'Regular User', text: 'Airport transfers are always on time. Never missed a flight with Anant Airways.' }
    ],
    benefits: ['Professional and polite chauffeurs', 'Clean and sanitized vehicles', 'Transparent per-km pricing', 'Punctuality guaranteed', '24/7 Roadside Assistance', 'Corporate Billing Options'],
    process: [
      { title: 'Trip Definition', desc: 'Specify your pick-up, drop, and whether it is a local, outstation, or airport trip.' },
      { title: 'Vehicle Selection', desc: 'Choose from categorized fleets (Prime, Sedan, SUV, Luxury) based on your group size.' },
      { title: 'Operator Matching', desc: 'Our system matches you with the nearest highly-rated driver available.' },
      { title: 'Real-time Tracking', desc: 'Receive driver details and track them live as they approach your location.' },
      { title: 'Ride & Pay', desc: 'Enjoy a secure ride with digital payments and automated invoicing.' }
    ],
    faqs: [
      { q: 'How do you verify drivers?', a: 'Every driver undergoes background verification, license checks, and personality interviews before joining.' },
      { q: 'Is fuel included in outstation trips?', a: 'Yes, our per-km rates include fuel and driver beta. Only tolls and parking are extra.' },
      { q: 'Do you provide baby seats?', a: 'Yes, for an additional fee, we provide safety-standard baby seats on request.' },
      { q: 'Can I book a cab for multiple days?', a: 'Certainly! Our outstation packages can be customized for multi-day itineraries.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'aviation-academy': {
    title: 'Aviation Academy Training',
    shortDesc: 'Launch your career in the aviation industry with our expert-led modules.',
    fullDesc: 'Our Aviation Academy is dedicated to nurturing the next generation of aviation professionals. We provide industry-recognized training for ground staff, cabin crew, and airport management. Our curriculum is designed by veterans and includes practical simulations to ensure you are job-ready.',
    heroImage: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop',
    icon: GraduationCap,
    color: 'red',
    stats: [
      { label: 'Students Trained', value: '10K+' },
      { label: 'Placement Rate', value: '94%' },
      { label: 'Expert Trainers', value: '50+' },
      { label: 'Airline Partners', value: '30+' }
    ],
    advancedFeatures: [
      { title: 'Mock Cabin Setup', desc: 'Training in a real aircraft cabin environment for cabin crew aspirants.' },
      { title: 'Flight Simulators', desc: 'Access to high-fidelity flight simulators for ground operations study.' },
      { title: 'Grooming Labs', desc: 'Advanced makeup, attire, and etiquette labs for professional grooming.' },
      { title: 'E-Learning Portal', desc: '24/7 access to recorded lectures and study materials.' }
    ],
    expertise: 'We are led by a board of retired airline directors, ensuring our training is always aligned with current industry regulations.',
    industries: ['Airlines', 'Airport Operations', 'Aviation Security', 'In-flight Services', 'Ground Handling'],
    challenges: [
      { challenge: 'Job Readiness', solution: 'We include a 1-month mandatory industry internship for all full-time students.' },
      { challenge: 'Communication Gaps', solution: 'Special focus on English proficiency and soft-skills for luxury service.' }
    ],
    testimonials: [
      { name: 'Karan Singh', role: 'Cabin Crew - Indigo', text: 'The grooming sessions and mock interviews were the reason I cleared my first airline round.' },
      { name: 'Neha Kapoor', role: 'Ground Staff - Air India', text: 'Practical training on real airport equipment gave me a huge advantage over others.' }
    ],
    benefits: ['Industry expert trainers', '100% placement assistance', 'Practical simulations', 'Grooming & soft skills sessions', 'IATA Certified Curriculum', 'Lifetime career coaching'],
    process: [
      { title: 'Career Counselling', desc: 'Meet our experts to determine which aviation stream suits your personality and goals.' },
      { title: 'Skill Assessment', desc: 'Undergo a basic entrance evaluation to test aptitude and physical standards.' },
      { title: 'Intensive Training', desc: 'A 3-12 month program covering technical, behavioral, and safety modules.' },
      { title: 'Mock Evaluation', desc: 'Internal rigorous testing to prepare you for actual airline board interviews.' },
      { title: 'Active Placement', desc: 'Participation in our exclusive recruitment drives with partner airlines.' }
    ],
    faqs: [
      { q: 'Is the academy IATA certified?', a: 'Our courses are built on IATA standards, ensuring your certification is recognized globally.' },
      { q: 'What is the age limit for cabin crew?', a: 'Typically, airlines look for candidates between 18-27 years for freshers.' },
      { q: 'Do you provide hostel facilities?', a: 'Yes, we have tie-ups with premium hostels near our training centers.' },
      { q: 'Can I pay the fees in installments?', a: 'Absolutely. We offer flexible EMI options to ensure education is accessible to everyone.' }
    ],
    images: [
      'https://flytechaviation.aero/wp-content/uploads/2021/04/Flytech-Aviation-Academy-01.jpg',
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxhaXJwbGFuZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  'aviation-job': {
    title: 'Aviation Recruitment Support',
    shortDesc: 'Bridge the gap between your passion and the world\'s leading airlines.',
    fullDesc: 'At Anant Airways, we go beyond booking—we build careers. Our recruitment support division works closely with major airlines to identify talent. We provide genuine information about aviation jobs and protect candidates from fraudulent activities through our "Caution" initiatives.',
    heroImage: 'https://media.istockphoto.com/id/1364269973/photo/call-center-agent-with-headset-working-on-support-hotline-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=TbA60wPYltxVBftS9snSTC0AeOAUj9daCyyUwNzXJRA=',
    icon: Briefcase,
    color: 'purple',
    stats: [
      { label: 'Roles Filled', value: '2K+' },
      { label: 'Airline Tie-ups', value: '50+' },
      { label: 'Candidate Pool', value: '50K+' },
      { label: 'Job Alert Reach', value: '1M+' }
    ],
    advancedFeatures: [
      { title: 'ATS Optimized CVs', desc: 'We help you build resumes that pass airline recruitment software.' },
      { title: 'Direct Referral', desc: 'Priority processing for candidates vetted by Anant Airways.' },
      { title: 'Job Alerts 24/7', desc: 'Instant notifications for any upcoming walk-in or planned drives.' },
      { title: 'FRAUD-GUARD', desc: 'A dedicated cell to verify and report fake aviation job offers.' }
    ],
    expertise: 'We act as an official sourcing partner for several domestic and international carriers, giving us a front-row seat to their requirements.',
    industries: ['Domestic Airlines', 'International Carriers', 'Luxury Private Jets', 'Ground Handling Agencies', 'Airport Retail'],
    challenges: [
      { challenge: 'Fake Job Offers', solution: 'Our "Caution" page helps candidates verify the authenticity of any offer letter.' },
      { challenge: 'Interview Anxiety', solution: 'One-on-one sessions with former airline HR managers.' }
    ],
    testimonials: [
      { name: 'Siddharth Roy', role: 'Airline HR Manager', text: 'The quality of candidates sourced by Anant Airways is consistently excellent.' },
      { name: 'Alka Gupta', role: 'Security Executive', text: 'I found my dream job at Delhi Airport through their recruitment portal.' }
    ],
    benefits: ['Direct ties with airline HRs', 'Transparent recruitment process', 'Zero-fee policy for interviews', 'Mock interview sessions', 'Resume building workshop', 'Aviation Career Registry'],
    process: [
      { title: 'Talent Registration', desc: 'Securely upload your CV and certificates to our global aviation talent portal.' },
      { title: 'Profile Analysis', desc: 'Our automated system and human experts match your skills with active openings.' },
      { title: 'Technical Scrubbing', desc: 'Participate in initial rounds to verify your technical knowledge and grooming.' },
      { title: 'Airline Interview', desc: 'Face the airline board with full briefing on their specific culture and expectations.' },
      { title: 'Offer Handling', desc: 'We assist with document verification and orientation for the final selection.' }
    ],
    faqs: [
      { q: 'Do you charge money for jobs?', a: 'No. Anant Airways never charges any fee for job placement, interviews, or confirmation letters.' },
      { q: 'Which airlines do you hire for?', a: 'We support recruitment for major domestic airlines and several Middle-Eastern & European carriers.' },
      { q: 'Can I apply from any city?', a: 'Yes, our recruitment process is digital, but physical interviews will be held in major metros.' },
      { q: 'What after I get hired?', a: 'We provide post-placement support to help you with relocation and orientation in your new role.' }
    ],
    images: [
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3VyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661494492707-f53e16a6d7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91ciUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 mb-6">
              <Icon size={20} className="text-blue-400" />
              <span className="text-sm font-semibold uppercase tracking-wider">{serviceId.replace('-', ' ')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              {service.shortDesc}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary flex items-center gap-2">
                Book This Service <Zap size={20} />
              </button>
              <button className="btn-secondary">
                Get Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick Ribbon */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src={service.images[0]} alt="Overview 1" className="w-full h-64 object-cover rounded-xl shadow-lg" />
                <img src={service.images[1]} alt="Overview 2" className="w-full h-64 object-cover rounded-xl shadow-lg mt-8" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Experience Excellence</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Service Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.fullDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
                    <span className="font-semibold text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Advanced Features</h2>
          <p className="text-gray-600 text-lg">Harnessing technology for a superior service experience.</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.advancedFeatures.map((feature, idx) => (
              <div key={idx} className="card p-8 text-center h-full flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mb-6">
                  <Settings size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">Industries We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Globe size={20} className="text-blue-600" />
                    <span className="font-semibold text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">Common Challenges</h2>
              <div className="space-y-6">
                {service.challenges.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-6 py-2">
                    <h5 className="font-bold text-gray-800 text-lg mb-1">{item.challenge}</h5>
                    <p className="text-blue-600 font-semibold">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Operational Workflow</h2>
          <p className="text-gray-600 text-lg">A systematic approach to ensuring perfection.</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[200px] text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 text-lg">Real feedback from satisfied users of our {serviceId.replace('-', ' ')} services.</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.testimonials.map((t, idx) => (
            <div key={idx} className="card p-8 border-t-4 border-blue-600">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full font-bold text-blue-600">
                  {t.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{t.name}</h5>
                  <p className="text-xs text-gray-500 uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-gray-800">{faq.q}</span>
                  <ChevronDown size={24} className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden text-white text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Best?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Join thousands of travelers who choose Anant Airways for unmatched excellence in {serviceId.replace('-', ' ')} services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
              Book Now Today
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for ChevronDown
const ChevronDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default ServicePage;
