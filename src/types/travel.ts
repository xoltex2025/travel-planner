export interface Attraction {
  name: string;
  description: string;
  rating: number;
  duration: string;
  type: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  description: string;
  rating: number;
  priceRange: string;
  specialty: string;
}

export interface Accommodation {
  name: string;
  type: string;
  area: string;
  description: string;
  rating: number;
  priceRange: string;
  amenities: string;
}

export interface DayItinerary {
  day: number;
  theme: string;
  morning: string;
  afternoon: string;
  evening: string;
}

export interface TravelData {
  destination: string;
  overview: string;
  attractions: Attraction[];
  restaurants: Restaurant[];
  accommodations: Accommodation[];
  itinerary: DayItinerary[];
  tips: string[];
}