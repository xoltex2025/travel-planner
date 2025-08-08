import React, { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import LoadingSpinner from './components/LoadingSpinner';
import ItineraryResults from './components/ItineraryResults';
import { generateTravelData } from './utils/travelData';
import type { TravelData } from './types/travel';

function App() {
  const [destination, setDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [travelData, setTravelData] = useState<TravelData | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerateItinerary = async () => {
    if (!destination.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setTravelData(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2500));

    const data = generateTravelData(destination.trim());
    setTravelData(data);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGenerateItinerary();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Travel Itinerary Planner
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {!hasSearched && (
          <div className="text-center mb-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Plan Your Perfect Trip
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover amazing destinations, find the best attractions, restaurants, and create 
                a personalized 3-day itinerary powered by AI recommendations.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="destination" className="block text-lg font-semibold text-gray-700 mb-3">
                      Enter Your Destination
                    </label>
                    <input
                      id="destination"
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="e.g., Paris, Tokyo, New York..."
                      className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200 outline-none"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button
                    onClick={handleGenerateItinerary}
                    disabled={!destination.trim() || isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Generating Itinerary...</span>
                      </div>
                    ) : (
                      'Generate Itinerary'
                    )}
                  </button>
                </div>
                
                <div className="mt-8 text-sm text-gray-500">
                  <p className="font-medium mb-2">Try these popular destinations:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Paris', 'Tokyo', 'New York', 'Barcelona', 'Rome'].map((city) => (
                      <button
                        key={city}
                        onClick={() => setDestination(city)}
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                        disabled={isLoading}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {hasSearched && (
          <div className="mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter destination..."
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleGenerateItinerary}
                  disabled={!destination.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Searching...</span>
                    </div>
                  ) : (
                    'Generate New Itinerary'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {isLoading && <LoadingSpinner destination={destination} />}
        
        {travelData && !isLoading && (
          <ItineraryResults data={travelData} />
        )}
      </div>
    </div>
  );
}

export default App;