# SkyWings Aviation & Travel Website

A modern, full-stack aviation and travel booking platform built with React (Vite) and Node.js/Express.

![SkyWings](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

## 🌟 Features

### 📱 Frontend Features
- ✈️ **Flight Booking** - Search and book domestic/international flights
- 🏨 **Hotel Booking** - Browse hotels with advanced filters (price, rating, location)
- 🚌 **Bus Booking** - Book comfortable bus tickets with seat selection
- 🚗 **Cab Services** - Book cabs with flexible pricing options
- 🎓 **Aviation Academy** - Course listings and enquiry system
- 📞 **Contact System** - Contact form with validation
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop

### 🔧 Backend Features
- RESTful API with Express.js
- CORS enabled for cross-origin requests
- Mock data endpoints for all services
- Booking management system
- Contact form processing
- Academy enquiry handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd newAviation
```

2. **Install Backend Dependencies**
```bash
npm install
```

3. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

### Running the Application

#### Start Backend Server
```bash
# From root directory
npm run dev
# Server runs on http://localhost:5000
```

#### Start Frontend Development Server
```bash
# From frontend directory
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

## 📁 Project Structure

```
newAviation/
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── FlightCard.jsx
│   │   │   ├── BusCard.jsx
│   │   │   └── CabCard.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Academy.jsx
│   │   │   ├── Hotels.jsx
│   │   │   ├── Flights.jsx
│   │   │   ├── Buses.jsx
│   │   │   └── Cabs.jsx
│   │   ├── data/           # Mock data
│   │   │   └── mockData.js
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── server.js               # Express backend
├── package.json
├── .env
└── README.md
```

## 🎨 Pages Overview

### 1. Home Page (`/`)
- Hero section with booking search
- Popular destinations showcase
- Stats section
- Why choose us section
- Call-to-action sections

### 2. Flights (`/flights`)
- Search flights by route, date, and class
- Filter by price and airline
- Real-time availability
- Quick booking interface

### 3. Hotels (`/hotels`)
- Grid view of available hotels
- Advanced filters (city, price range, rating)
- Hotel details with amenities
- Direct booking

### 4. Buses (`/buses`)
- Bus operator listings
- Filter by route and bus type
- Seat availability
- Rating system

### 5. Cabs (`/cabs`)
- Multiple vehicle options (Hatchback, Sedan, SUV, Luxury)
- Trip details form
- Real-time pricing calculator
- 24/7 availability

### 6. Academy (`/academy`)
- Course catalog
- Course details with duration and fees
- Enquiry form modal
- Student testimonials
- Placement statistics

### 7. About Us (`/about`)
- Company story
- Mission and vision
- Core values
- Timeline of milestones
- Statistics

### 8. Contact Us (`/contact`)
- Contact form with validation
- Contact information
- Map placeholder
- FAQ section

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **Nodemon** - Development auto-reload

## 🎨 Design Features

- **Aviation Theme** - Professional blue color scheme
- **Smooth Animations** - Fade-in effects and hover animations
- **Responsive Design** - Mobile-first approach
- **Modern Cards** - Shadow effects and hover transforms
- **Clean Typography** - Easy to read fonts
- **Intuitive Navigation** - User-friendly menu system

## 📡 API Endpoints

### Hotels
- `GET /api/hotels` - Get all hotels (with filters)
- `GET /api/hotels/:id` - Get hotel by ID
- `POST /api/bookings/hotel` - Book a hotel

### Flights
- `GET /api/flights` - Get all flights (with filters)
- `POST /api/bookings/flight` - Book a flight

### Buses
- `GET /api/buses` - Get all buses (with filters)
- `POST /api/bookings/bus` - Book bus seats

### Cabs
- `GET /api/cabs` - Get all cabs (with filters)
- `POST /api/bookings/cab` - Book a cab

### Other
- `POST /api/contact` - Submit contact form
- `POST /api/academy/enquiry` - Submit academy enquiry

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder
```

### Backend Deployment (Heroku/Railway)
```bash
# Ensure environment variables are set
# Deploy server.js with npm start command
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**SkyWings Development Team**

## 🙏 Acknowledgments

- Icons by Lucide React
- Images from Unsplash
- Design inspiration from modern travel websites

## 📞 Support

For support, email support@aviationtravel.com or call +91 1800-123-4567

---

**Built with ❤️ for aviation enthusiasts and travelers**
