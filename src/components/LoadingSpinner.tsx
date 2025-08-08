import React from 'react';
import { Loader2, MapPin, Camera, Utensils, Bed } from 'lucide-react';

interface LoadingSpinnerProps {
  destination: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ destination }) => {
  return (
    <div className="text-center py-16">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
        <div className="mb-6">
          <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Creating Your Perfect Itinerary
          </h3>
          <p className="text-lg text-gray-600">
            Researching the best of <span className="font-semibold text-blue-600">{destination}</span>
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Discovering top attractions and hidden gems...</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Utensils className="w-5 h-5 text-green-500" />
            <span>Finding the best restaurants and local cuisine...</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Bed className="w-5 h-5 text-purple-500" />
            <span>Locating ideal accommodations...</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Camera className="w-5 h-5 text-orange-500" />
            <span>Crafting your 3-day adventure...</span>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Powered by AI • Sourcing from top travel platforms</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;