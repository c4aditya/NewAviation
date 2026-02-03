import { Star, MapPin, Wifi, UtensilsCrossed } from 'lucide-react';

const HotelCard = ({ hotel, onBook }) => {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            <span className="font-bold text-sm">{hotel.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin size={16} />
          <span className="text-sm">{hotel.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index}
              className="text-xs bg-blue-50 text-aviation-primary px-3 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-gray-600 text-sm">Starting from</p>
            <p className="text-2xl font-bold text-aviation-primary">₹{hotel.price}</p>
            <p className="text-xs text-gray-500">per night</p>
          </div>
          <button 
            onClick={() => onBook && onBook(hotel)}
            className="btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
