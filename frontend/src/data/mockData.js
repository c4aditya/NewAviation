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
    fees: "₹35000"
  },
  {
    id: 2,
    title: "Ground Staff Training",
    duration: "4 Months",
    description: "Learn airport operations, check-in procedures, baggage handling, and customer service excellence.",
    icon: "🎫",
    eligibility: "12th Pass",
    fees: "₹30000"
  },
  {
    id: 3,
    title: "Airport Management",
    duration: "1 Year",
    description: "Complete course on airport operations, management, and aviation business administration.",
    icon: "🏢",
    eligibility: "Graduate",
    fees: "₹27000"
  },
  {
    id: 4,
    title: "Aviation Hospitality",
    duration: "3 Months",
    description: "Focus on hospitality skills, etiquette, grooming, and communication for aviation industry.",
    icon: "🌟",
    eligibility: "12th Pass",
    fees: "₹25000"
  },
  {
    id: 5,
    title: "Airline Customer Service",
    duration: "3 Months",
    description: "Specialized training in airline customer relations, complaint handling, and service excellence.",
    icon: "💼",
    eligibility: "12th Pass",
    fees: "₹25000"
  },
  {
    id: 6,
    title: "Aviation Security",
    duration: "5 Months",
    description: "Training in airport security procedures, screening techniques, and safety protocols.",
    icon: "🔒",
    eligibility: "12th Pass",
    fees: "₹31000"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Flight to Dubai",
    reviewText: "Anant Airways made my business trip seamless. The flight booking was quick, and the customer support was exceptional when I needed to make changes."
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Family Vacation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Hotel in Goa",
    reviewText: "Booked a complete family package to Goa. Everything was perfect from flights to hotels. The resort recommendation was spot on!"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Solo Traveler",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Bus to Manali",
    reviewText: "Best travel platform I've used. The bus was comfortable and on time. Highly recommend Anant Airways for hassle-free travel."
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Honeymoon",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Maldives Package",
    reviewText: "Our honeymoon in Maldives was magical! Anant Airways handled everything perfectly. The water villa was a dream come true."
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Adventure Seeker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 4,
    bookedType: "Trek in Ladakh",
    reviewText: "Great experience booking my trekking expedition. The guides were professional and the itinerary was well-planned."
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "Frequent Flyer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Flight to London",
    reviewText: "I travel often for work and Anant Airways is my go-to app. The rewards program is fantastic and saves me a lot on bookings."
  },
  {
    id: 7,
    name: "Rahul Verma",
    role: "Weekend Getaway",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Cab to Jaipur",
    reviewText: "Booked a cab for a weekend trip to Jaipur. The driver was polite, the car was clean, and the journey was smooth."
  },
  {
    id: 8,
    name: "Kavita Reddy",
    role: "Family Reunion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Villa in Kerala",
    reviewText: "We booked a large villa for our family reunion in Kerala. It was spacious, beautiful, and exactly as described."
  },
  {
    id: 9,
    name: "Arjun Das",
    role: "Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    rating: 4,
    bookedType: "Budget Hotel",
    reviewText: "Found a great budget hotel in Mumbai. Clean, safe, and affordable. perfect for students like me."
  },
  {
    id: 10,
    name: "Meera Nair",
    role: "Health Retreat",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    rating: 5,
    bookedType: "Yoga Retreat",
    reviewText: "The yoga retreat in Rishikesh was rejuvenating. Anant Airways made the booking process so easy and stress-free."
  }
];

export const honeymoonPackages = [
  {
    id: 1,
    title: "Romantic Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    price: "₹1,25,000",
    duration: "5 Days / 4 Nights",
    hotelType: "Water Villa",
    activities: ["Snorkeling", "Candlelight Dinner", "Spa"],
    rating: 4.9,
    description: "Escape to paradise with our exclusive Maldives package. Enjoy pristine water villas, private beach access, and romantic sunset cruises."
  },
  {
    id: 2,
    title: "Swiss Alps Escape",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&h=600&fit=crop",
    price: "₹2,50,000",
    duration: "7 Days / 6 Nights",
    hotelType: "Luxury Chatel",
    activities: ["Skiing", "Scenic Train", "Chocolate Tour"],
    rating: 4.8,
    description: "Experience the magic of the Swiss Alps. Stay in cozy chalets, ride scenic trains, and indulge in world-class chocolates."
  },
  {
    id: 3,
    title: "Bali Bliss",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    price: "₹85,000",
    duration: "6 Days / 5 Nights",
    hotelType: "Private Pool Villa",
    activities: ["Temple Tour", "Sunset Cruise", "Couples Massage"],
    rating: 4.7,
    description: "Immerse yourself in the tranquility of Bali. Relax in a private pool villa, explore ancient temples, and enjoy a romantic massage."
  },
  {
    id: 4,
    title: "Santorini Sunset",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    price: "₹1,80,000",
    duration: "6 Days / 5 Nights",
    hotelType: "Cave Suite",
    activities: ["Wine Tasting", "Volcano Tour", "Sunset Sailing"],
    rating: 4.9,
    description: "Watch breathtaking sunsets in Santorini. Stay in iconic cave suites, tour wineries, and sail the Aegean Sea."
  },
  {
    id: 5,
    title: "Paris Romance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    price: "₹1,60,000",
    duration: "5 Days / 4 Nights",
    hotelType: "Boutique Hotel",
    activities: ["Eiffel Tower Dinner", "Seine Cruise", "Louvre Tour"],
    rating: 4.8,
    description: "Fall in love with Paris. Dine at the Eiffel Tower, cruise the Seine, and visit world-famous museums."
  },
  {
    id: 6,
    title: "Kyoto Culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    price: "₹1,40,000",
    duration: "7 Days / 6 Nights",
    hotelType: "Traditional Ryokan",
    activities: ["Tea Ceremony", "Bamboo Forest", "Geisha District"],
    rating: 4.7,
    description: "Discover the cultural heart of Japan. Stay in a traditional Ryokan, participate in tea ceremonies, and walk through bamboo forests."
  },
  {
    id: 7,
    title: "Maui Paradise",
    image: "https://images.unsplash.com/photo-1542259659439-429fee256ce4?w=800&h=600&fit=crop",
    price: "₹2,10,000",
    duration: "8 Days / 7 Nights",
    hotelType: "Oceanfront Resort",
    activities: ["Luau", "Volcano Hike", "Surfing"],
    rating: 4.8,
    description: "Experience the aloha spirit in Maui. Stay in an oceanfront resort, hike volcanoes, and learn to surf."
  },
  {
    id: 8,
    title: "Amalfi Coast",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop",
    price: "₹1,95,000",
    duration: "6 Days / 5 Nights",
    hotelType: "Cliffside Hotel",
    activities: ["Boat Tour", "Lemon Grove", "Coastal Drive"],
    rating: 4.9,
    description: "Drive the stunning Amalfi Coast. Stay in cliffside hotels, tour lemon groves, and enjoy Italian coastal cuisine."
  }
];

export const carrerPositions = [
  {
    id: 1,
    slug: "ground-staff",
    on: "On Site",
    place: "Hiring",
    location: "Pan India",
    aboutJob: "Ground staff are responsible for various kinds of responsibilities. At Anant Airways, we provide ground staff who maintain the reputation of the airports they work for, and they are well trained for carrying out any duty on the ground.",
    totalPosition: "10",
    jobId: "NACJ 126787",
    salary: "21,000 - 28,000",
    position: "Airport Ground Staff",
    positionType: "Full time",
    qualification: "Intermediate or Equivalent",
    image: "data:image/jpeg;base64,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",
    eligibility: [
      "Minimum educational qualification: 10+2 (Intermediate) or equivalent from a recognized board.",
      "Age limit: 18 to 27 years.",
      "Good communication skills in Hindi and English.",
      "Pleasing personality and good interpersonal skills.",
      "Willingness to work in shifts (rotational)."
    ],
    responsibilities: [
      "Assisting passengers with check-in, ticketing, and boarding processes.",
      "Handling passenger queries and providing accurate flight information.",
      "Managing baggage handling and ensuring smooth transfer of luggage.",
      "Coordinating with various airport departments for flight operations.",
      "Ensuring safety and security protocols are followed at all times."
    ],
    pointOne: "Passenger Assistance",
    pointTwo: "Ticketing & Check-in",
    pointThree: "Baggage Handling",
    pointFour: "Flight Boarding Support",
    pointFive: "Airport Coordination"
  },
  {
    id: 2,
    slug: "cabin-crew",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Cabin crew jobs are an integral part of the aviation industry, where their behavior shapes the airline's image. At Anant Airways, we recruit skilled professionals who enhance the flight experience with exceptional hospitality.",
    totalPosition: "14",
    jobId: "NACJ 1673652",
    salary: "30,000 - 38,000",
    position: "Cabin Crew",
    positionType: "Full time",
    qualification: "Intermediate or Equivalent",
    image: "data:image/jpeg;base64,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",
    eligibility: [
      "Minimum 10+2 (Intermediate) pass from a recognized board/university.",
      "Nationality: Indian.",
      "Minimum Height: Female - 155 cm; Male - 170 cm.",
      "BMI: Female (18-22); Male (18-25).",
      "No visible tattoos or marks while in uniform."
    ],
    responsibilities: [
      "Conducting pre-flight safety checks and demonstrations.",
      "Ensuring passenger safety and comfort throughout the flight.",
      "Providing high-quality in-flight food and beverage service.",
      "Handling emergency situations and first aid if required.",
      "Maintaing cabin cleanliness and organization."
    ],
    pointOne: "Passenger Greeting",
    pointTwo: "Safety Demonstration",
    pointThree: "In-flight Service",
    pointFour: "Emergency Assistance",
    pointFive: "Cabin Cleanliness"
  },
  {
    id: 3,
    slug: "flight-attendant",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Flight Attendents ensure passenger safety, comfort, and service on board. At Anant Airways, our attendants provide excellent hospitality and handle in-flight needs with professionalism and care.",
    totalPosition: "13",
    jobId: "NACJ 987656",
    position: "Flight Attendant",
    salary: "28,000 - 36,000",
    positionType: "Full time",
    qualification: "Intermediate or Equivalent",
    image: "https://www.totaljobs.com/advice/wp-content/uploads/Flight-Attendant-job-description_14800-1024x576.jpg",
    eligibility: [
      "Graduation or 10+2 from a recognized board.",
      "Fluent in English and Hindi.",
      "Age: 18 - 30 years.",
      "Clear complexion and good eyesight.",
      "Ability to swim is a plus."
    ],
    responsibilities: [
      "Helping passengers with seating and stowing luggage.",
      "Serving meals and refreshments during flight.",
      "Monitoring the cabin for hazards or suspicious activities.",
      "Assisting in evacuation and emergency procedures.",
      "Providing exceptional customer service to all passengers."
    ],
    pointOne: "Passenger Safety Briefing",
    pointTwo: "Emergency Response",
    pointThree: "In-flight Service",
    pointFour: "Customer Assistance",
    pointFive: "Cabin Preparation"
  },

  {
    id: 10,
    slug: "aircraft-maintenance",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Aircraft Maintenance Engineers at Anant Airways ensure the airworthiness of our fleet through meticulous inspection, repair, and maintenance tasks. We value technical expertise and an uncompromising attitude towards aviation safety.",
    totalPosition: "12",
    jobId: "NACJ 556677",
    salary: "45,000 - 65,000",
    position: "Aircraft Maintenance Engineer",
    positionType: "Full time",
    qualification: "AME License / Diploma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmM7WFEqMmkNexP2hY6lJSKfwmWU8GXriBQ&s",
    eligibility: [
      "DGCA issued AME license or relevant engineering diploma.",
      "Experience in maintaining specific aircraft types in our fleet.",
      "Strong understanding of aviation regulations and safety standards.",
      "Detail-oriented with strong problem-solving skills.",
      "Ability to work in a fast-paced environment."
    ],
    responsibilities: [
      "Performing scheduled and unscheduled aircraft maintenance.",
      "Troubleshooting airframe, engine, and avionics systems.",
      "Replacing defective components and testing system functionality.",
      "Ensuring all work is documented according to aviation standards.",
      "Certifying aircraft as fit for flight after maintenance."
    ],
    pointOne: "System Troubleshooting",
    pointTwo: "Routine Maintenance",
    pointThree: "Safety Checks",
    pointFour: "Technical Documentation",
    pointFive: "Component Replacement"
  },
  {
    id: 11,
    slug: "flight-management",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Flight Management Executives at Anant Airways coordinate ground operations and ensure flight schedules are met efficiently. This role involves high-level organizational skills and real-time problem solving.",
    totalPosition: "5",
    jobId: "NACJ 889900",
    salary: "35,000 - 50,000",
    position: "Flight Management Executive",
    positionType: "Full time",
    qualification: "Graduate in Aviation Management/Equivalent",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000249826/nbaa.org/wp-content/uploads/2018/05/17-020-1040.jpg",
    eligibility: [
      "Degree in Aviation Management or related business field.",
      "Minimum 2 years experience in flight dispatch or operations.",
      "Excellent communication and coordination skills.",
      "Proficient in using flight management software.",
      "Strong analytical and decision-making abilities."
    ],
    responsibilities: [
      "Monitoring flight schedules and coordinating with ground crew.",
      "Ensuring timely departure and arrival of all flights.",
      "Managing crew scheduling and roster updates.",
      "Optimizing fuel planning and payload distribution.",
      "Providing real-time updates to relevant stakeholders."
    ],
    pointOne: "Schedule Optimization",
    pointTwo: "Ground Coordination",
    pointThree: "Crew Rostering",
    pointFour: "Operations Support",
    pointFive: "Performance Monitoring"
  },
  {
    id: 12,
    slug: "flight-operations",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Flight Operations Officers at Anant Airways are responsible for pre-flight planning, flight monitoring, and providing operational support to our flight crews. You will be at the heart of our mission to ensure safe and efficient flight operations.",
    totalPosition: "6",
    jobId: "NACJ 112233",
    salary: "40,000 - 60,000",
    position: "Flight Operations Officer",
    positionType: "Full time",
    qualification: "DGCA Flight Dispatcher License Preferred",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxgpvN0kSkolGoCk7Az2bsxf5bhnJUInhkQ&s",
    eligibility: [
      "Minimum 21 years of age.",
      "Graduation in any stream (Science preferred).",
      "Knowledge of meteorology, navigation, and flight planning.",
      "Strong decision-making skills under pressure.",
      "Ability to work in rotational shifts."
    ],
    responsibilities: [
      "Preparing operational flight plans and weather briefings.",
      "Monitoring flight progress and providing updates to pilots.",
      "Coordinating with ATC and ground services for flight departures.",
      "Managing fuel requirements and load sheets.",
      "Handling operational irregularities and diversions."
    ],
    pointOne: "Flight Planning",
    pointTwo: "Weather Monitoring",
    pointThree: "Pilot Briefing",
    pointFour: "Fuel Management",
    pointFive: "Operational Support"
  },
  {
    id: 13,
    slug: "security-officer",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Security Officers at Anant Airways ensure the safety and security of our passengers, crew, and assets. You will be responsible for implementing security protocols and maintaining a vigilant presence at our operational bases.",
    totalPosition: "8",
    jobId: "NACJ 445566",
    salary: "25,000 - 35,000",
    position: "Aviation Security Officer",
    positionType: "Full time",
    qualification: "Graduate with NCASP Certification Preferred",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/VC/GX/QC/47769146/security-services-malls-500x500.jpg",
    eligibility: [
      "Height: Male (170cm), Female (155cm).",
      "Excellent physical fitness and mental alertness.",
      "Clear background check and no criminal record.",
      "Basic knowledge of aviation security standards.",
      "Strong communication and observation skills."
    ],
    responsibilities: [
      "Conducting security screening for passengers and baggage.",
      "Surveillance of aircraft and restricted areas.",
      "Implementing access control measures at airport terminals.",
      "Responding to security incidents and emergencies.",
      "Ensuring compliance with national aviation security programs."
    ],
    pointOne: "Passenger Screening",
    pointTwo: "Terminal Surveillance",
    pointThree: "Access Control",
    pointFour: "Incident Response",
    pointFive: "Security Compliance"
  },
  {
    id: 14,
    slug: "ticketing-agent",
    place: "Hiring",
    on: "On Site",
    location: "Pan India",
    aboutJob: "Ticketing \u0026 Reservation Agents at Anant Airways are the first point of contact for our customers. You will provide expert assistance with flight bookings, fare calculations, and travel documentation, ensuring a seamless booking experience.",
    totalPosition: "10",
    jobId: "NACJ 778899",
    salary: "22,000 - 30,000",
    position: "Ticketing \u0026 Reservation Agent",
    positionType: "Full time",
    qualification: "Intermediate or Graduate",
    image: "https://ritacharitabletrust.org/wp-content/uploads/2022/10/image-118.png",
    eligibility: [
      "Fluent in English and Hindi.",
      "Basic computer skills and familiarity with GDS systems.",
      "Pleasing personality and customer-centric approach.",
      "Willingness to work in a target-driven environment.",
      "Prior experience in travel/airline industry is an advantage."
    ],
    responsibilities: [
      "Handling domestic and international flight reservations.",
      "Calculating complex fares and processing ticket issuances.",
      "Explaining baggage rules and travel requirements to passengers.",
      "Managing ticket cancellations, refunds, and re-issuances.",
      "Coordinating with the sales team for promotional offers."
    ],
    pointOne: "GDS Reservations",
    pointTwo: "Fare Calculation",
    pointThree: "Ticket Issuance",
    pointFour: "Customer Support",
    pointFive: "Travel Documentation"
  }
];
