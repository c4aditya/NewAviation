import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, IndianRupee } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/destinations/${destination.id}`);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <Star className="text-yellow-500 fill-yellow-500" size={16} />
          <span className="font-bold text-sm text-gray-800">{destination.rating}</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <Clock className="text-white" size={14} />
          <span className="font-medium text-sm text-white">{destination.duration}</span>
        </div>

        {/* Destination Name on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1.5 text-white/90">
            <MapPin size={14} />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Short Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {destination.shortDescription} - {destination.packages} packages available
        </p>

        {/* Best Time to Visit */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
            Best: {destination.bestTimeToVisit}
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-center gap-1">
              <IndianRupee size={18} className="text-blue-700" />
              <span className="text-2xl font-bold text-blue-700">
                {destination.startingPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={handleViewDetails}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
