import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Home, Search, ArrowRight } from 'lucide-react';

const HotelBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
    guests: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hotels', { state: formData });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Location */}
      <div>
        <label className="label-text">
          <MapPin size={16} className="inline mr-1" />
          City / Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter city or hotel name"
          className="input-field"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check-in Date */}
        <div>
          <label className="label-text">
            <Calendar size={16} className="inline mr-1" />
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
            required
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label className="label-text">
            <Calendar size={16} className="inline mr-1" />
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            className="input-field"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Number of Rooms */}
        <div>
          <label className="label-text">
            <Home size={16} className="inline mr-1" />
            Number of Rooms
          </label>
          <select
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="input-field"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div>
          <label className="label-text">
            <Users size={16} className="inline mr-1" />
            Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="input-field"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="w-full btn-primary text-lg flex items-center justify-center gap-2">
        <Search size={20} />
        Search Hotels
        <ArrowRight size={20} />
      </button>
    </form>
  );
};

export default HotelBookingForm;
