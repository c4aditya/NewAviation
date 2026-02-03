import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Search, ArrowRight } from 'lucide-react';

const FlightBookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    tripType: 'roundtrip'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/flights', { state: formData });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Trip Type Toggle */}
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="roundtrip"
            checked={formData.tripType === 'roundtrip'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="font-medium text-gray-700">Round Trip</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={formData.tripType === 'oneway'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="font-medium text-gray-700">One Way</span>
        </label>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Departure Date */}
        <div>
          <label className="label-text">
            <Calendar size={16} className="inline mr-1" />
            Departure Date
          </label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
            required
          />
        </div>

        {/* Return Date */}
        {formData.tripType === 'roundtrip' && (
          <div>
            <label className="label-text">
              <Calendar size={16} className="inline mr-1" />
              Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              min={formData.departureDate || new Date().toISOString().split('T')[0]}
              className="input-field"
              required={formData.tripType === 'roundtrip'}
            />
          </div>
        )}

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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="w-full btn-primary text-lg flex items-center justify-center gap-2">
        <Search size={20} />
        Search Flights
        <ArrowRight size={20} />
      </button>
    </form>
  );
};

export default FlightBookingForm;
