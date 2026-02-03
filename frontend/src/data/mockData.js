// Mock data for the Aviation & Travel Booking website

export const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "New Delhi",
    city: "delhi",
    price: 5500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym"],
    description: "Luxury hotel in the heart of Delhi"
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Goa",
    city: "goa",
    price: 8000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop",
    amenities: ["Beach Access", "WiFi", "Spa", "Restaurant"],
    description: "Beautiful beachfront resort"
  },
  {
    id: 3,
    name: "Business Inn",
    location: "Mumbai",
    city: "mumbai",
    price: 4500,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=300&fit=crop",
    amenities: ["WiFi", "Conference Room", "Restaurant"],
    description: "Perfect for business travelers"
  },
  {
    id: 4,
    name: "Mountain View Hotel",
    location: "Shimla",
    city: "shimla",
    price: 6000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
    amenities: ["Mountain View", "WiFi", "Restaurant", "Fireplace"],
    description: "Scenic mountain retreat"
  },
  {
    id: 5,
    name: "Heritage Palace",
    location: "Jaipur",
    city: "jaipur",
    price: 7500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
    amenities: ["Heritage Site", "WiFi", "Pool", "Restaurant"],
    description: "Experience royal hospitality"
  },
  {
    id: 6,
    name: "Tech City Hotel",
    location: "Bangalore",
    city: "bangalore",
    price: 5000,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop",
    amenities: ["WiFi", "Co-working Space", "Gym", "Restaurant"],
    description: "Modern hotel in tech hub"
  }
];

export const flights = [
  {
    id: 1,
    airline: "Air India",
    from: "Delhi",
    to: "Mumbai",
    departure: "06:00 AM",
    arrival: "08:30 AM",
    duration: "2h 30m",
    price: 4500,
    class: "Economy",
    date: "2026-02-15"
  },
  {
    id: 2,
    airline: "IndiGo",
    from: "Bangalore",
    to: "Goa",
    departure: "09:15 AM",
    arrival: "10:45 AM",
    duration: "1h 30m",
    price: 3200,
    class: "Economy",
    date: "2026-02-15"
  },
  {
    id: 3,
    airline: "Vistara",
    from: "Mumbai",
    to: "Kolkata",
    departure: "02:30 PM",
    arrival: "05:00 PM",
    duration: "2h 30m",
    price: 5500,
    class: "Business",
    date: "2026-02-15"
  },
  {
    id: 4,
    airline: "SpiceJet",
    from: "Chennai",
    to: "Delhi",
    departure: "11:00 AM",
    arrival: "02:00 PM",
    duration: "3h 00m",
    price: 4800,
    class: "Economy",
    date: "2026-02-15"
  }
];

export const buses = [
  {
    id: 1,
    operator: "RedBus Travels",
    from: "Delhi",
    to: "Jaipur",
    departure: "10:00 PM",
    arrival: "05:30 AM",
    duration: "7h 30m",
    price: 800,
    type: "AC Sleeper",
    seats: 28,
    rating: 4.3
  },
  {
    id: 2,
    operator: "VRL Travels",
    from: "Bangalore",
    to: "Hyderabad",
    departure: "09:30 PM",
    arrival: "06:00 AM",
    duration: "8h 30m",
    price: 1200,
    type: "Volvo AC",
    seats: 35,
    rating: 4.5
  },
  {
    id: 3,
    operator: "Orange Travels",
    from: "Mumbai",
    to: "Goa",
    departure: "08:00 PM",
    arrival: "06:30 AM",
    duration: "10h 30m",
    price: 1500,
    type: "AC Sleeper",
    seats: 32,
    rating: 4.4
  }
];

export const cabs = [
  {
    id: 1,
    type: "Sedan",
    name: "Swift Dzire",
    capacity: 4,
    pricePerKm: 12,
    basePrice: 150,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
    features: ["AC", "Music System", "GPS"]
  },
  {
    id: 2,
    type: "SUV",
    name: "Toyota Innova",
    capacity: 6,
    pricePerKm: 18,
    basePrice: 250,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=300&fit=crop",
    features: ["AC", "Music System", "GPS", "Extra Luggage"]
  },
  {
    id: 3,
    type: "Luxury",
    name: "Mercedes E-Class",
    capacity: 4,
    pricePerKm: 35,
    basePrice: 500,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop",
    features: ["AC", "Premium Sound", "GPS", "Chauffeur"]
  },
  {
    id: 4,
    type: "Hatchback",
    name: "Maruti Swift",
    capacity: 4,
    pricePerKm: 10,
    basePrice: 100,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop",
    features: ["AC", "Music System"]
  }
];

export const destinations = [
  {
    id: 1,
    name: "Goa",
    location: "Western Coast, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    shortDescription: "Beach Paradise",
    startingPrice: 15999,
    packages: 45,
    rating: 4.8,
    duration: "3-7 Days",
    fullDescription: "Goa is India's smallest state by area and the fourth smallest by population. Located on the western coast, it is bounded by Maharashtra to the north and Karnataka to the east and south. The Arabian Sea forms Goa's western coast. Goa is known for its stunning beaches, vibrant nightlife, Portuguese heritage architecture, and delicious seafood cuisine.",
    specialFeatures: [
      "Beautiful golden sand beaches stretching for miles",
      "Rich Portuguese colonial heritage and architecture",
      "Vibrant nightlife with beach parties and clubs",
      "Delicious Goan seafood and local cuisine",
      "Water sports including parasailing, jet skiing, and scuba diving",
      "Historic churches and temples"
    ],
    popularPlaces: [
      { name: "Baga Beach", description: "Famous for water sports and nightlife" },
      { name: "Calangute Beach", description: "Queen of beaches, perfect for swimming" },
      { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage Site" },
      { name: "Dudhsagar Falls", description: "Spectacular four-tiered waterfall" },
      { name: "Fort Aguada", description: "17th-century Portuguese fort" },
      { name: "Anjuna Flea Market", description: "Famous Wednesday market for souvenirs" }
    ],
    bestTimeToVisit: "November to February"
  },
  {
    id: 2,
    name: "Jaipur",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
    shortDescription: "Pink City Heritage",
    startingPrice: 12999,
    packages: 38,
    rating: 4.7,
    duration: "2-5 Days",
    fullDescription: "Jaipur, the capital of Rajasthan, is known as the Pink City due to the dominant color scheme of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, the city is famous for its rich history, stunning architecture, vibrant culture, and traditional handicrafts. It forms part of the Golden Triangle tourist circuit along with Delhi and Agra.",
    specialFeatures: [
      "Magnificent palaces and historic forts",
      "Traditional Rajasthani arts and crafts",
      "Colorful bazaars with jewelry and textiles",
      "Rich culinary heritage with authentic Rajasthani cuisine",
      "Elephant rides and cultural experiences",
      "UNESCO World Heritage Sites"
    ],
    popularPlaces: [
      { name: "Hawa Mahal", description: "Iconic Palace of Winds with 953 windows" },
      { name: "Amber Fort", description: "Magnificent hilltop fort with stunning views" },
      { name: "City Palace", description: "Royal residence with museums and gardens" },
      { name: "Jantar Mantar", description: "UNESCO listed astronomical observation site" },
      { name: "Nahargarh Fort", description: "Perfect for sunset views over the city" },
      { name: "Jal Mahal", description: "Beautiful water palace in Man Sagar Lake" }
    ],
    bestTimeToVisit: "October to March"
  },
  {
    id: 3,
    name: "Kerala",
    location: "Southern India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    shortDescription: "God's Own Country",
    startingPrice: 18999,
    packages: 52,
    rating: 4.9,
    duration: "4-8 Days",
    fullDescription: "Kerala, located on the southwestern Malabar Coast of India, is known for its palm-lined beaches, backwaters, tea plantations, and Ayurvedic treatments. The state offers a unique blend of natural beauty, cultural heritage, and wellness experiences. From the serene backwaters of Alleppey to the misty hills of Munnar, Kerala captivates every traveler.",
    specialFeatures: [
      "Scenic backwater houseboat cruises",
      "World-renowned Ayurvedic treatments and spas",
      "Lush tea and spice plantations",
      "Traditional Kathakali dance performances",
      "Wildlife sanctuaries and nature reserves",
      "Pristine beaches and coastal experiences"
    ],
    popularPlaces: [
      { name: "Alleppey Backwaters", description: "Houseboat cruises through palm-fringed canals" },
      { name: "Munnar", description: "Hill station with vast tea plantations" },
      { name: "Kovalam Beach", description: "Crescent-shaped beach with lighthouse" },
      { name: "Periyar Wildlife Sanctuary", description: "Home to elephants and tigers" },
      { name: "Fort Kochi", description: "Historic area with Chinese fishing nets" },
      { name: "Wayanad", description: "Pristine forests and tribal culture" }
    ],
    bestTimeToVisit: "September to March"
  },
  {
    id: 4,
    name: "Ladakh",
    location: "Northern India (Union Territory)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    shortDescription: "Mountain Adventure",
    startingPrice: 25999,
    packages: 28,
    rating: 4.9,
    duration: "5-10 Days",
    fullDescription: "Ladakh, the 'Land of High Passes', is a region in northern India known for its remote mountain beauty and Buddhist culture. Situated at altitudes ranging from 9,000 to 25,170 feet, Ladakh offers breathtaking landscapes, ancient monasteries, pristine lakes, and thrilling adventure activities. It's a dream destination for adventure enthusiasts and spiritual seekers alike.",
    specialFeatures: [
      "Stunning Himalayan landscapes and high-altitude passes",
      "Ancient Buddhist monasteries and culture",
      "Crystal-clear high-altitude lakes",
      "Thrilling adventure activities like trekking and river rafting",
      "Unique wildlife including snow leopards",
      "Star-gazing opportunities with clear skies"
    ],
    popularPlaces: [
      { name: "Pangong Lake", description: "Stunning blue lake at 14,270 feet altitude" },
      { name: "Nubra Valley", description: "Valley with sand dunes and double-humped camels" },
      { name: "Leh Palace", description: "17th-century royal palace overlooking the city" },
      { name: "Khardung La", description: "One of the world's highest motorable passes" },
      { name: "Thiksey Monastery", description: "12-story monastery resembling Potala Palace" },
      { name: "Magnetic Hill", description: "Mysterious hill with gravity-defying illusion" }
    ],
    bestTimeToVisit: "May to September"
  },
  {
    id: 5,
    name: "Manali",
    location: "Himachal Pradesh, India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    shortDescription: "Valley of the Gods",
    startingPrice: 14999,
    packages: 42,
    rating: 4.6,
    duration: "3-6 Days",
    fullDescription: "Manali is a high-altitude Himalayan resort town in Himachal Pradesh, India. It's a gateway for skiing in the Solang Valley and trekking in the Parvati Valley. The town is also a jumping-off point for paragliding, rafting, and mountaineering in the Pir Panjal mountains. Known for its snow-capped peaks, apple orchards, and adventure activities.",
    specialFeatures: [
      "Snow-capped mountain views year-round",
      "Adventure sports including skiing and paragliding",
      "Apple orchards and natural hot springs",
      "Ancient temples and Tibetan monasteries",
      "River rafting in the Beas River",
      "Gateway to Rohtang Pass and Solang Valley"
    ],
    popularPlaces: [
      { name: "Rohtang Pass", description: "High mountain pass with stunning snow views" },
      { name: "Solang Valley", description: "Adventure hub for skiing and paragliding" },
      { name: "Hadimba Temple", description: "Ancient wooden temple in cedar forest" },
      { name: "Old Manali", description: "Charming village with cafes and shops" },
      { name: "Vashisht Hot Springs", description: "Natural hot water springs and temple" },
      { name: "Jogini Waterfall", description: "Beautiful waterfall with scenic trek" }
    ],
    bestTimeToVisit: "October to June"
  },
  {
    id: 6,
    name: "Udaipur",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=600&fit=crop",
    shortDescription: "City of Lakes",
    startingPrice: 13999,
    packages: 35,
    rating: 4.8,
    duration: "2-5 Days",
    fullDescription: "Udaipur, often called the 'Venice of the East', is a city in Rajasthan known for its lavish royal residences, scenic lakes, and romantic ambiance. Founded in 1559 by Maharana Udai Singh II, the city is surrounded by the Aravalli Hills and features stunning architecture, beautiful gardens, and a rich cultural heritage that attracts visitors from around the world.",
    specialFeatures: [
      "Beautiful lakes with scenic boat rides",
      "Magnificent palaces and royal architecture",
      "Romantic sunset views over the lakes",
      "Traditional Rajasthani music and dance",
      "Vibrant local markets and handicrafts",
      "Heritage hotels in historic buildings"
    ],
    popularPlaces: [
      { name: "Lake Pichola", description: "Artificial lake with two island palaces" },
      { name: "City Palace", description: "Largest palace complex in Rajasthan" },
      { name: "Jag Mandir", description: "Island palace with stunning lake views" },
      { name: "Jagdish Temple", description: "Indo-Aryan temple dedicated to Lord Vishnu" },
      { name: "Saheliyon Ki Bari", description: "Beautiful garden with fountains and pavilions" },
      { name: "Monsoon Palace", description: "Hilltop palace with panoramic views" }
    ],
    bestTimeToVisit: "September to March"
  },
  {
    id: 7,
    name: "Andaman Islands",
    location: "Bay of Bengal, India",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    shortDescription: "Tropical Paradise",
    startingPrice: 32999,
    packages: 25,
    rating: 4.8,
    duration: "5-8 Days",
    fullDescription: "The Andaman Islands are an archipelago of 572 islands in the Bay of Bengal, known for their pristine beaches, crystal-clear waters, and rich marine life. These tropical islands offer a perfect escape with their coral reefs, water sports, and colonial history. From the historic Cellular Jail to the stunning Radhanagar Beach, Andaman is a true tropical paradise.",
    specialFeatures: [
      "Crystal-clear turquoise waters",
      "World-class scuba diving and snorkeling",
      "Pristine white sand beaches",
      "Rich colonial history and heritage",
      "Unique indigenous tribal cultures",
      "Bioluminescent beaches at night"
    ],
    popularPlaces: [
      { name: "Radhanagar Beach", description: "Asia's best beach with stunning sunsets" },
      { name: "Cellular Jail", description: "Historic colonial prison, now a memorial" },
      { name: "Havelock Island", description: "Paradise for beach lovers and divers" },
      { name: "Neil Island", description: "Quiet island with natural rock formations" },
      { name: "Ross Island", description: "Ruins of British colonial headquarters" },
      { name: "Baratang Island", description: "Limestone caves and mangrove creeks" }
    ],
    bestTimeToVisit: "October to May"
  },
  {
    id: 8,
    name: "Varanasi",
    location: "Uttar Pradesh, India",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    shortDescription: "Spiritual Capital",
    startingPrice: 9999,
    packages: 30,
    rating: 4.5,
    duration: "2-4 Days",
    fullDescription: "Varanasi, also known as Benares or Kashi, is one of the world's oldest continuously inhabited cities and the spiritual capital of India. Situated on the banks of the sacred Ganges River, this ancient city is a major pilgrimage site for Hindus. The city's labyrinthine alleys, ancient temples, and famous ghats create an unforgettable spiritual experience.",
    specialFeatures: [
      "Sacred Ganges River and ghats",
      "Ancient temples and spiritual experiences",
      "Famous Ganga Aarti ceremony at sunset",
      "Silk weaving and traditional crafts",
      "Rich music and cultural heritage",
      "Authentic Indian street food"
    ],
    popularPlaces: [
      { name: "Dashashwamedh Ghat", description: "Main ghat famous for Ganga Aarti" },
      { name: "Kashi Vishwanath Temple", description: "One of the most sacred Hindu temples" },
      { name: "Assi Ghat", description: "Peaceful ghat for morning rituals" },
      { name: "Sarnath", description: "Buddhist pilgrimage site nearby" },
      { name: "Manikarnika Ghat", description: "Ancient cremation ground" },
      { name: "Ramnagar Fort", description: "18th-century fort across the Ganges" }
    ],
    bestTimeToVisit: "October to March"
  }
];

export const courses = [
  {
    id: 1,
    title: "Cabin Crew Training",
    duration: "6 Months",
    description: "Comprehensive training for aspiring flight attendants covering safety procedures, customer service, and in-flight operations.",
    icon: "✈️",
    eligibility: "12th Pass",
    fees: "₹2,50,000"
  },
  {
    id: 2,
    title: "Ground Staff Training",
    duration: "4 Months",
    description: "Learn airport operations, check-in procedures, baggage handling, and customer service excellence.",
    icon: "🎫",
    eligibility: "12th Pass",
    fees: "₹1,50,000"
  },
  {
    id: 3,
    title: "Airport Management",
    duration: "1 Year",
    description: "Complete course on airport operations, management, and aviation business administration.",
    icon: "🏢",
    eligibility: "Graduate",
    fees: "₹3,50,000"
  },
  {
    id: 4,
    title: "Aviation Hospitality",
    duration: "3 Months",
    description: "Focus on hospitality skills, etiquette, grooming, and communication for aviation industry.",
    icon: "🌟",
    eligibility: "12th Pass",
    fees: "₹1,00,000"
  },
  {
    id: 5,
    title: "Airline Customer Service",
    duration: "3 Months",
    description: "Specialized training in airline customer relations, complaint handling, and service excellence.",
    icon: "💼",
    eligibility: "12th Pass",
    fees: "₹1,20,000"
  },
  {
    id: 6,
    title: "Aviation Security",
    duration: "5 Months",
    description: "Training in airport security procedures, screening techniques, and safety protocols.",
    icon: "🔒",
    eligibility: "12th Pass",
    fees: "₹1,80,000"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Cabin Crew, Air India",
    image: "https://i.pravatar.cc/150?img=1",
    text: "The academy provided excellent training. I'm now confidently serving passengers at 35,000 feet!"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Airport Manager",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Best decision of my career. The practical training and industry exposure were invaluable."
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Ground Staff, IndiGo",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Great faculty and placement support. I got placed within 2 months of completing my course."
  }
];
