import { Bus, Clock, Users, Star } from 'lucide-react';

const BusCard = ({ bus, onBook }) => {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-600 p-3 rounded-lg">
            <Bus className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{bus.operator}</h3>
            <p className="text-sm text-gray-600">{bus.type}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">₹{bus.price}</p>
          <p className="text-xs text-gray-500">per seat</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">From</p>
          <p className="text-lg font-bold text-gray-800">{bus.from}</p>
          <p className="text-sm text-green-600">{bus.departure}</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Clock size={20} className="text-gray-400 mb-1" />
          <p className="text-sm font-semibold text-gray-600">{bus.duration}</p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-600 mb-1">To</p>
          <p className="text-lg font-bold text-gray-800">{bus.to}</p>
          <p className="text-sm text-green-600">{bus.arrival}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{bus.seats} seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span>{bus.rating}</span>
          </div>
        </div>
        <button 
          onClick={() => onBook && onBook(bus)}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Seats
        </button>
      </div>
    </div>
  );
};

export default BusCard;
