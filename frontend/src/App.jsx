import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Academy from './pages/Academy';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Buses from './pages/Buses';
import Cabs from './pages/Cabs';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Career from './pages/Career';
import JobDetail from './pages/JobDetail';
import Caution from './pages/Caution';
import AviationJob from './pages/AviationJob';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <PageTransition />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:jobId" element={<JobDetail />} />
          <Route path="/caution" element={<Caution />} />
          <Route path="/aviation-job" element={<AviationJob />} />
        </Routes>
      </main>

      {/* Sticky Caution Button - Only visible on Career page */}
      {location.pathname === '/career' && (
        <button
          onClick={() => window.location.href = '/caution'}
          className="fixed bottom-8 right-8 z-[9999] bg-white border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition shadow-2xl animate-bounce hover:animate-none"
        >
          Caution
        </button>
      )}

      <Footer />
    </div>
  );
}

export default App;
