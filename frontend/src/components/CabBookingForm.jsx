import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Search, ArrowRight } from 'lucide-react';

const CabBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    pickupDate: '',
    pickupTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/cabs', { state: formData });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pickup Location */}
        <div>
          <label className="label-text">
            <MapPin size={16} className="inline mr-1" />
            Pickup Location
          </label>
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Enter pickup address"
            className="input-field"
            required
          />
        </div>

        {/* Drop Location */}
        <div>
          <label className="label-text">
            <MapPin size={16} className="inline mr-1" />
            Drop Location
          </label>
          <input
            type="text"
            name="dropoff"
            value={formData.dropoff}
            onChange={handleChange}
            placeholder="Enter drop address"
            className="input-field"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pickup Date */}
        <div>
          <label className="label-text">
            <Calendar size={16} className="inline mr-1" />
            Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
            required
          />
        </div>

        {/* Pickup Time */}
        <div>
          <label className="label-text">
            <Clock size={16} className="inline mr-1" />
            Pickup Time
          </label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
      </div>

      <button type="submit" className="w-full btn-primary text-lg flex items-center justify-center gap-2">
        <Search size={20} />
        Search Cabs
        <ArrowRight size={20} />
      </button>
    </form>
  );
};

export default CabBookingForm;
