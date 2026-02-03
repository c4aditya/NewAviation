import { Car, Users, Star } from 'lucide-react';

const CabCard = ({ cab, onBook }) => {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cab.image} 
          alt={cab.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
          <span className="font-bold text-sm text-orange-600">{cab.type}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{cab.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Users size={16} />
          <span className="text-sm">{cab.capacity} Passengers</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {cab.features.map((feature, index) => (
            <span 
              key={index}
              className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Base Fare</span>
            <span className="font-bold text-gray-800">₹{cab.basePrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Per Kilometer</span>
            <span className="font-bold text-orange-600">₹{cab.pricePerKm}/km</span>
          </div>
        </div>

        <button 
          onClick={() => onBook && onBook(cab)}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Cab
        </button>
      </div>
    </div>
  );
};

export default CabCard;
