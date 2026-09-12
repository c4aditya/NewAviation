import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plane } from 'lucide-react';
import { popularRoutes } from '../data/popularRoutes';

const TopFlightRoutes = () => {
  const navigate = useNavigate();

  const handleRouteClick = (route) => {
    // Default to tomorrow's date if no date selected yet
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];

    navigate('/flights', {
      state: {
        from: route.originCity,
        fromCode: route.originIata,
        to: route.destinationCity,
        toCode: route.destinationIata,
        date: dateStr,
        passengers: 1
      }
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-3">
            <Plane size={14} />
            <span>Popular Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">
            Top Flight Routes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-inter">
            Explore our most popular direct flight routes with instant search and best price guarantees
          </p>
        </div>

        {/* 3-Column Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {popularRoutes.map((route) => (
            <div
              key={route.id}
              onClick={() => handleRouteClick(route)}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                {/* Rounded City Image */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <img
                    src={route.image}
                    alt={`${route.originCity} to ${route.destinationCity}`}
                    className="w-full h-full object-cover rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Route Details */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {route.originCity}
                    </h3>
                    <span className="text-gray-400 font-semibold text-sm">→</span>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {route.destinationCity}
                    </h3>
                  </div>

                  {/* Styled Blue IATA Code */}
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-md tracking-wider border border-blue-100/80">
                    {route.displayCode}
                  </span>
                </div>
              </div>

              {/* Action Arrow Icon */}
              <div className="w-9 h-9 rounded-full bg-gray-50 group-hover:bg-blue-600 text-gray-400 group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-2">
                <ArrowRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFlightRoutes;
