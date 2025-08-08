import React from 'react';
import { MapPin, Star, Clock, Utensils, Bed, Camera, Info, Sun, Sunset, Moon } from 'lucide-react';
import type { TravelData } from '../types/travel';

interface ItineraryResultsProps {
  data: TravelData;
}

const ItineraryResults: React.FC<ItineraryResultsProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Destination Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-3 mb-4">
          <MapPin className="w-8 h-8" />
          <h2 className="text-3xl font-bold">{data.destination}</h2>
        </div>
        <p className="text-xl text-blue-100">{data.overview}</p>
      </div>

      {/* Top Attractions */}
      <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-full">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Top Attractions</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {data.attractions.map((attraction, index) => (
            <div key={index} className="bg-white/80 rounded-xl p-6 shadow-md border border-white/40 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-800">{attraction.name}</h4>
                <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-700">{attraction.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{attraction.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{attraction.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Info className="w-4 h-4" />
                  <span>{attraction.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Restaurants */}
      <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-full">
            <Utensils className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Recommended Restaurants</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {data.restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white/80 rounded-xl p-6 shadow-md border border-white/40 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{restaurant.name}</h4>
                  <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.priceRange}</p>
                </div>
                <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-700">{restaurant.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{restaurant.description}</p>
              <div className="text-sm text-green-600 font-medium">
                {restaurant.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Places to Stay */}
      <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-purple-100 p-2 rounded-full">
            <Bed className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Best Places to Stay</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {data.accommodations.map((hotel, index) => (
            <div key={index} className="bg-white/80 rounded-xl p-6 shadow-md border border-white/40 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{hotel.name}</h4>
                  <p className="text-sm text-gray-500">{hotel.type} • {hotel.area}</p>
                </div>
                <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-700">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{hotel.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-blue-600">{hotel.priceRange}</div>
                <div className="text-sm text-gray-500">{hotel.amenities}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Day Itinerary */}
      <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-orange-100 p-2 rounded-full">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Your 3-Day Adventure</h3>
        </div>
        
        <div className="space-y-8">
          {data.itinerary.map((day, dayIndex) => (
            <div key={dayIndex} className="border-l-4 border-gradient-to-b from-blue-400 to-purple-400 pl-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 mb-4">
                <h4 className="text-xl font-bold">Day {day.day}: {day.theme}</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sun className="w-5 h-5 text-yellow-600" />
                    <h5 className="font-semibold text-gray-800">Morning (9:00 AM - 12:00 PM)</h5>
                  </div>
                  <p className="text-gray-700">{day.morning}</p>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sunset className="w-5 h-5 text-orange-600" />
                    <h5 className="font-semibold text-gray-800">Afternoon (12:00 PM - 6:00 PM)</h5>
                  </div>
                  <p className="text-gray-700">{day.afternoon}</p>
                </div>
                
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Moon className="w-5 h-5 text-indigo-600" />
                    <h5 className="font-semibold text-gray-800">Evening (6:00 PM onwards)</h5>
                  </div>
                  <p className="text-gray-700">{day.evening}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-2 mb-3">
            <Info className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-800">Travel Tips</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            {data.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ItineraryResults;