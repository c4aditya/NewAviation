import { Plane, Clock, Calendar } from 'lucide-react';
import { getAirlineLogo } from '../utils/airlineLogos';

const FlightCard = ({ flight, onBook }) => {
  const logoUrl = getAirlineLogo(flight.airline);
  
  const formattedDate = flight.date
    ? new Date(flight.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : 'Upcoming';

  return (
    <div className="card p-4 md:p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        {/* Airline Logo & Details */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-blue-50/80 rounded-lg flex items-center justify-center p-1.5 border border-blue-100/80 flex-shrink-0">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={flight.airline}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
            ) : null}
            <Plane
              className="text-blue-600"
              size={20}
              style={{ display: logoUrl ? 'none' : 'block' }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug">{flight.airline}</h3>
              {flight.flightNumber && (
                <span className="text-[11px] font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                  {flight.flightNumber}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-500 font-medium">{flight.class || 'Economy'}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">
                {flight.stops === 0 || flight.stops === 'Direct' || !flight.stops ? 'Non-stop' : `${flight.stops} Stop`}
              </span>
            </div>
          </div>
        </div>

        {/* Price Tag */}
        <div className="text-right">
          <p className="text-xl md:text-2xl font-bold text-blue-600">₹{flight.price?.toLocaleString()}</p>
          <p className="text-[10px] text-gray-400 uppercase font-semibold">per person</p>
        </div>
      </div>

      {/* Route & Times Row */}
      <div className="grid grid-cols-3 gap-3 mb-3 bg-gray-50/60 p-3 rounded-lg border border-gray-100/80">
        <div>
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Departure</p>
          <p className="text-base font-bold text-gray-800 leading-tight">{flight.from}</p>
          <p className="text-xs font-semibold text-blue-600">{flight.departure}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Clock size={14} className="text-gray-400 mb-0.5" />
          <p className="text-xs font-semibold text-gray-600">{flight.duration}</p>
          <div className="w-full h-0.5 bg-gray-200 mt-1 relative flex items-center justify-center">
            <Plane size={10} className="text-blue-600 absolute bg-white px-0.5 transform rotate-90" />
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Arrival</p>
          <p className="text-base font-bold text-gray-800 leading-tight">{flight.to}</p>
          <p className="text-xs font-semibold text-blue-600">{flight.arrival}</p>
        </div>
      </div>

      {/* Footer Action Row */}
      <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-gray-500">
          <Calendar size={14} className="text-blue-600" />
          <span className="text-xs font-medium">{formattedDate}</span>
        </div>
        <button
          onClick={() => onBook && onBook(flight)}
          className="btn-primary py-1.5 px-4 text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-wide"
        >
          Book Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
