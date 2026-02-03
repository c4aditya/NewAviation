import { Plane, Clock, Calendar } from 'lucide-react';

const FlightCard = ({ flight, onBook }) => {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-aviation-primary p-3 rounded-lg">
            <Plane className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.class}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-aviation-primary">₹{flight.price}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Departure</p>
          <p className="text-lg font-bold text-gray-800">{flight.from}</p>
          <p className="text-sm text-aviation-primary">{flight.departure}</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Clock size={20} className="text-gray-400 mb-1" />
          <p className="text-sm font-semibold text-gray-600">{flight.duration}</p>
          <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">Arrival</p>
          <p className="text-lg font-bold text-gray-800">{flight.to}</p>
          <p className="text-sm text-aviation-primary">{flight.arrival}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          <span className="text-sm">{new Date(flight.date).toLocaleDateString('en-IN', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
          })}</span>
        </div>
        <button 
          onClick={() => onBook && onBook(flight)}
          className="btn-primary"
        >
          Book Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
