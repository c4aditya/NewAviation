import { 
  Users, 
  Briefcase, 
  ShoppingBag, 
  Globe, 
  Layout, 
  Ticket,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  ShieldCheck,
  Target
} from 'lucide-react';

export const academyCourses = [
  {
    id: 'passenger-service-associate',
    title: 'Passenger Service Associate',
    shortDesc: 'Master the art of ground operations and passenger facilitation at major airports.',
    icon: Ticket,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'Passenger Service Associates (PSA) are the face of an airline at the airport. They handle check-in, boarding, and passenger assistance, ensuring a seamless experience from the terminal to the aircraft. This role requires exceptional communication, problem-solving, and a guest-first attitude.',
    benefits: [
      'Work at international airports',
      'Attractive salary packages with flight benefits',
      'Professional groom and etiquette training',
      'Interaction with global travelers',
      'Health insurance and corporate perks'
    ],
    careerOpportunities: 'Starting as a PSA can lead to roles like Floor Manager, Airport Duty Manager, or even transitions into Cabin Crew and Airline Operations Management.',
    skillsRequired: [
      'Fluent English and Hindi communication',
      'Customer service orientation',
      'Basic computer proficiency',
      'Ability to handle high-pressure environments',
      'Pleasing personality and grooming standards'
    ],
    trainingInformation: 'Our 3-month intensive program includes mock airport drills, GDS system training (Amadeus/Sabre), soft skill modules, and safety protocols.',
    futureGrowth: 'The aviation industry is projected to grow by 15% annually, creating over 20,000 PSA roles in the next 2 years across new greenfield airports.',
  },
  {
    id: 'human-resources',
    title: 'Human Resources',
    shortDesc: 'Develop the skills to manage talent and culture in the dynamic aviation and corporate world.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'HR professionals in aviation manage complex recruitment drives, employee relations, and compliance. You will be responsible for sourcing top-tier talent, handling payroll, and implementing training programs that align with airline safety standards.',
    benefits: [
      'Stable corporate career path',
      'Competitive payroll and performance bonuses',
      'Opportunity to build organizational culture',
      'Work-life balance with standard office hours',
      'Leadership development opportunities'
    ],
    careerOpportunities: 'Progress from HR Coordinator to HR Manager, Recruitment Head, or Chief People Officer (CPO) in airlines or hospitality groups.',
    skillsRequired: [
      'Strong interpersonal and negotiation skills',
      'Understanding of labor laws and compliance',
      'Proficiency in HRMS tools',
      'Organizational and time management',
      'Empathetic approach to employee grievances'
    ],
    trainingInformation: 'Comprehensive 6-month module covering recruitment life-cycles, payroll management, organizational behavior, and aviation-specific HR laws.',
    futureGrowth: 'As airlines expand their fleets, the demand for specialized Aviation HR managers is at an all-time high.',
  },
  {
    id: 'sales-and-retail-management',
    title: 'Sales & Retail Management',
    shortDesc: 'Lead the commercial success of airport retail and airline sales departments.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'Airport retail and duty-free sections are multi-billion dollar industries. Management professionals here handle inventory, team leading, and sales strategies to maximize revenue from global travelers.',
    benefits: [
      'High commissions and performance incentives',
      'Work in luxury duty-free environments',
      'Experience in international retail standards',
      'Rapid career advancement',
      'Networking with premium brand partners'
    ],
    careerOpportunities: 'Store Manager, Category Growth Manager, Area Sales Manager, or Regional Retail Director.',
    skillsRequired: [
      'Sales driven mindset',
      'Inventory control and cash management',
      'Leadership and team motivational skills',
      'Product knowledge and visual merchandising',
      'Data-driven decision making'
    ],
    trainingInformation: 'Focus on retail mathematics, store operations, consumer behavior, and luxury brand management.',
    futureGrowth: 'Retail expansion in airports is one of the fastest-growing segments in the non-aeronautical revenue sector.',
  },
  {
    id: 'travel-and-tourism-management',
    title: 'Travel & Tourism Management',
    shortDesc: 'Become an expert in curating world-class travel experiences and managing global tours.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'Tourism managers create itineraries, manage bookings, and handle exotic group tours. You are the architect of a travelers dream vacation, ensuring every logistical detail is perfect.',
    benefits: [
      'Opportunities for domestic and international travel',
      'Vibrant and creative work environment',
      'Industry discounts on hotels and flights',
      'Expertise in global geography and culture',
      'High demand in post-pandemic travel surge'
    ],
    careerOpportunities: 'Tour Operator, Travel Consultant, Destination Manager, or Entrepreneur in the travel tech space.',
    skillsRequired: [
      'Deep knowledge of global destinations',
      'Excellent itinerary planning skills',
      'Customer relationship management',
      'Fluent in multiple languages (optional but a plus)',
      'Budgeting and vendor negotiation'
    ],
    trainingInformation: 'Includes geography, visa processes, itinerary construction, and GDS software proficiency.',
    futureGrowth: 'Global tourism is rebounding with a 12% CAGR, making this a highly secure and rewarding career path.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDesc: 'Drive high-impact projects in aviation infrastructure and corporate operations.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'Aviation projects like airport modernization or fleet induction require precision management. You will coordinate between engineering, finance, and operations to deliver results on time.',
    benefits: [
      'Highly respectable executive role',
      'Premium salaries and project bonuses',
      'Strategic influence over company growth',
      'Cross-functional operational knowledge',
      'Global certification recognition (PMP/Agile)'
    ],
    careerOpportunities: 'Project Lead, Operations Director, Infrastructure Head, or Management Consultant.',
    skillsRequired: [
      'Strategic thinking and risk assessment',
      'Proficiency in project management tools (Jira/MS Project)',
      'Budgeting and financial forecasting',
      'Stakeholder management',
      'Problem-solving under tough deadlines'
    ],
    trainingInformation: 'Lean Six Sigma, Agile methodologies, Resource allocation modules, and Aviation compliance training.',
    futureGrowth: 'Multiple new airports and terminal expansions mean project managers are the most sought-after corporate professionals.',
  },
  {
    id: 'ticket-support-executive',
    title: 'Ticket Support Executive',
    shortDesc: 'Master the technical backend of global flight reservations and e-ticketing systems.',
    icon: Ticket,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    aboutJob: 'Ticketing executives use complex software to manage flight availability, pricing, and cancellations. You are the critical link in the revenue management chain for an airline.',
    benefits: [
      'Technical expertise in global GDS systems',
      'Opportunity to work with major airlines worldwide',
      'Performance-based growth and bonuses',
      'Standardized corporate environment',
      'Subsidized travel for self and family'
    ],
    careerOpportunities: 'Ticketing Lead, Revenue Manager, Pricing Analyst, or Operations Manager.',
    skillsRequired: [
      'High attention to detail',
      'Logical and mathematical aptitude',
      'Fast typing and data entry skills',
      'Ability to understand complex fare rules',
      'Customer query resolution skills'
    ],
    trainingInformation: 'In-depth GDS training (Amadeus/Galileo), Fare auditing, Reissuance processes, and Airline ticketing policies.',
    futureGrowth: 'With more people flying than ever, ticketing and reservation support remains a cornerstone of the industry.',
  }
];
