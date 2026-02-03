const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock Data
const hotels = [
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
  }
];

const flights = [
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
  }
];

const buses = [
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
  }
];

const cabs = [
  {
    id: 1,
    type: "Sedan",
    name: "Swift Dzire",
    capacity: 4,
    pricePerKm: 12,
    basePrice: 150,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
    features: ["AC", "Music System", "GPS"]
  }
];

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'SkyWings Aviation & Travel API',
    version: '1.0.0',
    status: 'active'
  });
});

// Hotels
app.get('/api/hotels', (req, res) => {
  const { city, minPrice, maxPrice, minRating } = req.query;
  let result = hotels;

  if (city && city !== 'all') {
    result = result.filter(h => h.city === city);
  }

  if (minPrice) {
    result = result.filter(h => h.price >= Number(minPrice));
  }

  if (maxPrice) {
    result = result.filter(h => h.price <= Number(maxPrice));
  }

  if (minRating) {
    result = result.filter(h => h.rating >= Number(minRating));
  }

  res.json({ success: true, count: result.length, data: result });
});

app.get('/api/hotels/:id', (req, res) => {
  const hotel = hotels.find(h => h.id === Number(req.params.id));
  if (hotel) {
    res.json({ success: true, data: hotel });
  } else {
    res.status(404).json({ success: false, message: 'Hotel not found' });
  }
});

// Flights
app.get('/api/flights', (req, res) => {
  const { from, to, date, class: flightClass } = req.query;
  let result = flights;

  if (from) {
    result = result.filter(f => f.from.toLowerCase().includes(from.toLowerCase()));
  }

  if (to) {
    result = result.filter(f => f.to.toLowerCase().includes(to.toLowerCase()));
  }

  if (date) {
    result = result.filter(f => f.date === date);
  }

  if (flightClass && flightClass !== 'all') {
    result = result.filter(f => f.class === flightClass);
  }

  res.json({ success: true, count: result.length, data: result });
});

// Buses
app.get('/api/buses', (req, res) => {
  const { from, to, type } = req.query;
  let result = buses;

  if (from) {
    result = result.filter(b => b.from.toLowerCase().includes(from.toLowerCase()));
  }

  if (to) {
    result = result.filter(b => b.to.toLowerCase().includes(to.toLowerCase()));
  }

  if (type && type !== 'all') {
    result = result.filter(b => b.type === type);
  }

  res.json({ success: true, count: result.length, data: result });
});

// Cabs
app.get('/api/cabs', (req, res) => {
  const { type, capacity } = req.query;
  let result = cabs;

  if (type && type !== 'all') {
    result = result.filter(c => c.type === type);
  }

  if (capacity) {
    result = result.filter(c => c.capacity >= Number(capacity));
  }

  res.json({ success: true, count: result.length, data: result });
});

// Bookings (POST endpoints)
app.post('/api/bookings/hotel', (req, res) => {
  const { hotelId, checkIn, checkOut, guests, customerInfo } = req.body;
  
  const booking = {
    id: Date.now(),
    type: 'hotel',
    hotelId,
    checkIn,
    checkOut,
    guests,
    customerInfo,
    status: 'confirmed',
    bookingDate: new Date().toISOString()
  };

  res.json({ 
    success: true, 
    message: 'Hotel booking confirmed',
    data: booking 
  });
});

app.post('/api/bookings/flight', (req, res) => {
  const { flightId, passengers, customerInfo } = req.body;
  
  const booking = {
    id: Date.now(),
    type: 'flight',
    flightId,
    passengers,
    customerInfo,
    status: 'confirmed',
    bookingDate: new Date().toISOString()
  };

  res.json({ 
    success: true, 
    message: 'Flight booking confirmed',
    data: booking 
  });
});

app.post('/api/bookings/bus', (req, res) => {
  const { busId, seats, customerInfo } = req.body;
  
  const booking = {
    id: Date.now(),
    type: 'bus',
    busId,
    seats,
    customerInfo,
    status: 'confirmed',
    bookingDate: new Date().toISOString()
  };

  res.json({ 
    success: true, 
    message: 'Bus booking confirmed',
    data: booking 
  });
});

app.post('/api/bookings/cab', (req, res) => {
  const { cabId, pickup, dropoff, date, time, customerInfo } = req.body;
  
  const booking = {
    id: Date.now(),
    type: 'cab',
    cabId,
    pickup,
    dropoff,
    date,
    time,
    customerInfo,
    status: 'confirmed',
    bookingDate: new Date().toISOString()
  };

  res.json({ 
    success: true, 
    message: 'Cab booking confirmed',
    data: booking 
  });
});

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  console.log('Contact form submission:', { name, email, phone, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Academy enquiry
app.post('/api/academy/enquiry', (req, res) => {
  const { name, email, phone, course, message } = req.body;
  
  console.log('Academy enquiry:', { name, email, phone, course, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your enquiry! Our team will contact you soon.' 
  });
});

// Destinations enquiry
app.post('/api/destinations/enquiry', (req, res) => {
  const { name, email, phone, message, destination } = req.body;
  
  console.log('Destination enquiry:', { name, email, phone, message, destination });
  
  res.json({ 
    success: true, 
    message: `Thank you for your interest in ${destination}! Our travel experts will contact you within 24 hours.` 
  });
});

// Get all destinations
app.get('/api/destinations', (req, res) => {
  const destinations = [
    { id: 1, name: "Goa", location: "Western Coast, India", startingPrice: 15999 },
    { id: 2, name: "Jaipur", location: "Rajasthan, India", startingPrice: 12999 },
    { id: 3, name: "Kerala", location: "Southern India", startingPrice: 18999 },
    { id: 4, name: "Ladakh", location: "Northern India", startingPrice: 25999 },
    { id: 5, name: "Manali", location: "Himachal Pradesh, India", startingPrice: 14999 },
    { id: 6, name: "Udaipur", location: "Rajasthan, India", startingPrice: 13999 },
    { id: 7, name: "Andaman Islands", location: "Bay of Bengal, India", startingPrice: 32999 },
    { id: 8, name: "Varanasi", location: "Uttar Pradesh, India", startingPrice: 9999 }
  ];
  
  res.json({ success: true, count: destinations.length, data: destinations });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SkyWings API Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
