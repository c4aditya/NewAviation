import { Routes, Route } from 'react-router-dom';
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

function App() {
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
          {/* <Route path="/academy" element={<Academy />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />  */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
