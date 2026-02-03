import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Search, ArrowRight } from 'lucide-react';

const BusBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    journeyDate: '',
    passengers: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/buses', { state: formData });
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
        {/* From */}
        <div>
          <label className="label-text">
            <MapPin size={16} className="inline mr-1" />
            From
          </label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Enter departure city"
            className="input-field"
            required
          />
        </div>

        {/* To */}
        <div>
          <label className="label-text">
            <MapPin size={16} className="inline mr-1" />
            To
          </label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Enter arrival city"
            className="input-field"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Journey Date */}
        <div>
          <label className="label-text">
            <Calendar size={16} className="inline mr-1" />
            Journey Date
          </label>
          <input
            type="date"
            name="journeyDate"
            value={formData.journeyDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
            required
          />
        </div>

        {/* Passengers */}
        <div>
          <label className="label-text">
            <Users size={16} className="inline mr-1" />
            Passengers
          </label>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="input-field"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="w-full btn-primary text-lg flex items-center justify-center gap-2">
        <Search size={20} />
        Search Buses
        <ArrowRight size={20} />
      </button>
    </form>
  );
};

export default BusBookingForm;
