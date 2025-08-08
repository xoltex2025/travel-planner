import type { TravelData } from '../types/travel';

const travelDatabase: Record<string, TravelData> = {
  'Paris': {
    destination: 'Paris, France',
    overview: 'The City of Light enchants visitors with its timeless beauty, world-class museums, romantic atmosphere, and exquisite cuisine. From iconic landmarks to hidden gems, Paris offers an unforgettable blend of history, culture, and joie de vivre.',
    attractions: [
      {
        name: 'Eiffel Tower',
        description: 'The iconic iron lattice tower offering breathtaking views of Paris from its observation decks.',
        rating: 4.6,
        duration: '2-3 hours',
        type: 'Landmark'
      },
      {
        name: 'Louvre Museum',
        description: 'Home to the Mona Lisa and countless masterpieces, the world\'s largest art museum.',
        rating: 4.5,
        duration: '3-4 hours',
        type: 'Museum'
      },
      {
        name: 'Notre-Dame Cathedral',
        description: 'Gothic architectural masterpiece on Île de la Cité, currently undergoing restoration.',
        rating: 4.4,
        duration: '1-2 hours',
        type: 'Religious Site'
      },
      {
        name: 'Sacré-Cœur Basilica',
        description: 'Stunning white basilica atop Montmartre with panoramic city views.',
        rating: 4.5,
        duration: '2 hours',
        type: 'Religious Site'
      },
      {
        name: 'Arc de Triomphe',
        description: 'Monumental arch honoring those who fought for France, center of Place Charles de Gaulle.',
        rating: 4.5,
        duration: '1 hour',
        type: 'Monument'
      },
      {
        name: 'Champs-Élysées',
        description: 'Famous avenue perfect for shopping, dining, and people-watching.',
        rating: 4.2,
        duration: '2-3 hours',
        type: 'Street/District'
      }
    ],
    restaurants: [
      {
        name: 'Le Comptoir du 7ème',
        cuisine: 'French Bistro',
        description: 'Intimate bistro serving exceptional modern French cuisine with seasonal ingredients.',
        rating: 4.8,
        priceRange: '$$$',
        specialty: 'Duck confit and wine pairings'
      },
      {
        name: 'L\'As du Fallafel',
        cuisine: 'Middle Eastern',
        description: 'Famous falafel spot in the Marais district, beloved by locals and tourists alike.',
        rating: 4.6,
        priceRange: '$',
        specialty: 'Best falafel in Paris'
      },
      {
        name: 'Breizh Café',
        cuisine: 'Modern Crêperie',
        description: 'Contemporary take on traditional Breton crêpes with high-quality ingredients.',
        rating: 4.7,
        priceRange: '$$',
        specialty: 'Buckwheat galettes and organic cider'
      },
      {
        name: 'Le Train Bleu',
        cuisine: 'Classic French',
        description: 'Historic brasserie in Gare de Lyon station with stunning Belle Époque décor.',
        rating: 4.3,
        priceRange: '$$$$',
        specialty: 'Traditional French dishes in opulent setting'
      }
    ],
    accommodations: [
      {
        name: 'Hotel des Grands Boulevards',
        type: 'Boutique Hotel',
        area: '2nd Arrondissement',
        description: 'Stylish boutique hotel with contemporary design and excellent restaurant.',
        rating: 4.6,
        priceRange: '$$$',
        amenities: 'Restaurant, Bar, 24h Front Desk'
      },
      {
        name: 'Le Marais Airbnb Loft',
        type: 'Apartment',
        area: 'Le Marais',
        description: 'Modern loft apartment in the heart of historic Marais district.',
        rating: 4.8,
        priceRange: '$$',
        amenities: 'Kitchen, WiFi, Central Location'
      },
      {
        name: 'Hôtel Plaza Athénée',
        type: 'Luxury Hotel',
        area: 'Champs-Élysées',
        description: 'Legendary palace hotel with Michelin-starred restaurants and Eiffel Tower views.',
        rating: 4.7,
        priceRange: '$$$$$',
        amenities: 'Spa, Multiple Restaurants, Concierge'
      },
      {
        name: 'Hotel Malte Opera',
        type: 'Mid-Range Hotel',
        area: 'Opera District',
        description: 'Comfortable hotel near major attractions with traditional Parisian charm.',
        rating: 4.2,
        priceRange: '$$',
        amenities: 'Breakfast, WiFi, Central Location'
      }
    ],
    itinerary: [
      {
        day: 1,
        theme: 'Classic Paris Icons',
        morning: 'Start your Parisian adventure at the Eiffel Tower. Take the elevator to the top for stunning city views, then enjoy a leisurely walk along the Seine River to the Trocadéro Gardens for perfect photo opportunities.',
        afternoon: 'Head to the Louvre Museum to see the Mona Lisa and other masterpieces. Take breaks in the beautiful Tuileries Garden adjacent to the museum. End the afternoon with a stroll through the elegant Place Vendôme.',
        evening: 'Dine at a traditional French bistro in Saint-Germain-des-Prés, then take a romantic evening Seine River cruise to see Paris illuminated at night.'
      },
      {
        day: 2,
        theme: 'Art & Culture in Montmartre',
        morning: 'Explore the artistic neighborhood of Montmartre. Visit Sacré-Cœur Basilica for panoramic views, then wander through Place du Tertre to watch street artists at work.',
        afternoon: 'Discover the bohemian charm of Montmartre with visits to the Moulin Rouge area, browse vintage shops, and enjoy lunch at a local café. Visit the Musée de Montmartre to learn about the area\'s artistic history.',
        evening: 'Experience authentic Parisian nightlife with dinner in a cozy bistro followed by a cabaret show or jazz club in the Latin Quarter.'
      },
      {
        day: 3,
        theme: 'Hidden Gems & Local Life',
        morning: 'Explore the trendy Marais district with its historic Jewish quarter, vintage boutiques, and beautiful Place des Vosges - Paris\'s oldest planned square.',
        afternoon: 'Visit the covered markets like Marché Saint-Germain for local delicacies, then relax in Luxembourg Gardens. Take a leisurely walk along the Seine\'s left bank browsing the famous book stalls.',
        evening: 'End your Paris journey with a gourmet dinner in the fashionable Saint-Germain area, followed by drinks at a rooftop bar overlooking the city lights.'
      }
    ],
    tips: [
      'Purchase a Museum Pass for skip-the-line access to major attractions',
      'Learn basic French greetings - locals appreciate the effort',
      'Always validate your metro tickets and keep them until you exit',
      'Restaurants typically open at 7:30 PM for dinner - book ahead for popular spots',
      'Tipping 10% is standard in restaurants if service charge isn\'t included',
      'Many museums are free on the first Sunday morning of each month',
      'Pack comfortable walking shoes - Paris is best explored on foot'
    ]
  },
  
  'Tokyo': {
    destination: 'Tokyo, Japan',
    overview: 'A mesmerizing metropolis where ancient traditions seamlessly blend with cutting-edge technology. Experience everything from serene temples and traditional gardens to bustling districts and innovative cuisine in this captivating capital.',
    attractions: [
      {
        name: 'Senso-ji Temple',
        description: 'Tokyo\'s oldest temple in historic Asakusa district, famous for its Thunder Gate and traditional atmosphere.',
        rating: 4.5,
        duration: '2 hours',
        type: 'Temple'
      },
      {
        name: 'Tokyo Skytree',
        description: 'World\'s tallest tower offering spectacular 360-degree views of Tokyo from observation decks.',
        rating: 4.4,
        duration: '2-3 hours',
        type: 'Observation Tower'
      },
      {
        name: 'Shibuya Crossing',
        description: 'World\'s busiest pedestrian crossing and iconic symbol of modern Tokyo\'s energy.',
        rating: 4.3,
        duration: '1 hour',
        type: 'Landmark'
      },
      {
        name: 'Meiji Shrine',
        description: 'Peaceful Shinto shrine dedicated to Emperor Meiji, surrounded by a beautiful forest in the heart of the city.',
        rating: 4.6,
        duration: '2 hours',
        type: 'Shrine'
      },
      {
        name: 'Tsukiji Outer Market',
        description: 'World-famous fish market area offering the freshest sushi and traditional Japanese street food.',
        rating: 4.4,
        duration: '2-3 hours',
        type: 'Market'
      },
      {
        name: 'Imperial Palace East Gardens',
        description: 'Beautiful traditional Japanese gardens on the former site of Edo Castle.',
        rating: 4.5,
        duration: '2 hours',
        type: 'Garden'
      }
    ],
    restaurants: [
      {
        name: 'Jiro Dreams of Sushi',
        cuisine: 'Sushi',
        description: 'World-renowned sushi restaurant run by master chef Jiro Ono, a true culinary legend.',
        rating: 4.9,
        priceRange: '$$$$$',
        specialty: 'Omakase sushi experience'
      },
      {
        name: 'Ichiran Ramen',
        cuisine: 'Ramen',
        description: 'Famous tonkotsu ramen chain known for individual booth dining and customizable orders.',
        rating: 4.3,
        priceRange: '$$',
        specialty: 'Tonkotsu ramen with secret sauce'
      },
      {
        name: 'Nabezo Shibuya',
        cuisine: 'Shabu-shabu',
        description: 'All-you-can-eat shabu-shabu restaurant with premium wagyu beef and fresh vegetables.',
        rating: 4.5,
        priceRange: '$$$',
        specialty: 'Premium wagyu shabu-shabu'
      },
      {
        name: 'Gonpachi Nishi-Azabu',
        cuisine: 'Traditional Japanese',
        description: 'Atmospheric restaurant that inspired the House of Blue Leaves scene in Kill Bill.',
        rating: 4.4,
        priceRange: '$$$',
        specialty: 'Robatayaki and traditional izakaya dishes'
      }
    ],
    accommodations: [
      {
        name: 'The Ritz-Carlton Tokyo',
        type: 'Luxury Hotel',
        area: 'Roppongi',
        description: 'Ultra-luxury hotel on the top floors of Tokyo Midtown with stunning city views.',
        rating: 4.8,
        priceRange: '$$$$$',
        amenities: 'Spa, Multiple Restaurants, Club Level'
      },
      {
        name: 'Shibuya Capsule Hotel',
        type: 'Capsule Hotel',
        area: 'Shibuya',
        description: 'Modern capsule hotel experience in the heart of Tokyo\'s busiest district.',
        rating: 4.1,
        priceRange: '$',
        amenities: 'Shared Bath, WiFi, Vending Machines'
      },
      {
        name: 'Traditional Ryokan Experience',
        type: 'Ryokan',
        area: 'Asakusa',
        description: 'Authentic Japanese inn with tatami rooms, futon beds, and traditional hospitality.',
        rating: 4.7,
        priceRange: '$$$',
        amenities: 'Onsen, Kaiseki Dinner, Tea Ceremony'
      },
      {
        name: 'Shinjuku City Hotel',
        type: 'Business Hotel',
        area: 'Shinjuku',
        description: 'Efficient business hotel near major train stations and entertainment districts.',
        rating: 4.2,
        priceRange: '$$',
        amenities: 'Restaurant, Business Center, WiFi'
      }
    ],
    itinerary: [
      {
        day: 1,
        theme: 'Traditional Tokyo Culture',
        morning: 'Begin at the ancient Senso-ji Temple in Asakusa. Walk through Nakamise Shopping Street to experience traditional crafts and snacks. Visit nearby Tokyo National Museum for Japanese art and history.',
        afternoon: 'Take a peaceful stroll through the Imperial Palace East Gardens, then visit the serene Meiji Shrine. Experience a traditional tea ceremony in nearby Omotesando.',
        evening: 'Enjoy an authentic kaiseki dinner at a traditional restaurant in Ginza, followed by a night walk through the illuminated streets of this upscale district.'
      },
      {
        day: 2,
        theme: 'Modern Tokyo & Pop Culture',
        morning: 'Explore the electric atmosphere of Shibuya, including the famous crossing and Hachiko statue. Visit the trendy neighborhoods of Harajuku and Omotesando for fashion and pop culture.',
        afternoon: 'Head to Tokyo Skytree for panoramic city views, then explore the Sumida area. Visit the teamLab Borderless digital art museum for an immersive technological experience.',
        evening: 'Experience Tokyo\'s nightlife in Shinjuku with dinner at a traditional izakaya, then explore the neon-lit streets and entertainment districts.'
      },
      {
        day: 3,
        theme: 'Food Culture & Hidden Gems',
        morning: 'Early visit to Tsukiji Outer Market for the freshest sushi breakfast and coffee. Explore the surrounding area and local shops for unique souvenirs and food items.',
        afternoon: 'Discover the quirky neighborhoods of Akihabara (electronics and anime) and nearby Kanda for traditional bookshops and temples. Experience a modern Japanese bath house (sento).',
        evening: 'Conclude with a memorable dining experience at a high-end sushi restaurant or teppanyaki grill, followed by drinks at a rooftop bar overlooking Tokyo\'s skyline.'
      }
    ],
    tips: [
      'Purchase a JR Pass for unlimited travel on most trains and subways',
      'Always carry cash - many places don\'t accept credit cards',
      'Bow slightly when greeting people and receiving items',
      'Remove shoes when entering homes, temples, and some restaurants',
      'Don\'t eat or drink while walking in public',
      'Be quiet on trains and avoid phone calls',
      'Learn basic Japanese phrases - locals greatly appreciate the effort',
      'Slurping noodles is not only acceptable but encouraged'
    ]
  }
};

export function generateTravelData(destination: string): TravelData {
  // Check for exact matches first
  const exactMatch = travelDatabase[destination];
  if (exactMatch) {
    return exactMatch;
  }

  // Check for partial matches (case insensitive)
  const lowerDestination = destination.toLowerCase();
  for (const [key, data] of Object.entries(travelDatabase)) {
    if (key.toLowerCase().includes(lowerDestination) || lowerDestination.includes(key.toLowerCase())) {
      return data;
    }
  }

  // Generate dynamic data for unknown destinations
  return generateDynamicTravelData(destination);
}

function generateDynamicTravelData(destination: string): TravelData {
  const templates = {
    attractions: [
      { name: 'Historic City Center', type: 'Historic District', duration: '2-3 hours' },
      { name: 'Main Cathedral/Temple', type: 'Religious Site', duration: '1-2 hours' },
      { name: 'Central Museum', type: 'Museum', duration: '2-3 hours' },
      { name: 'City Viewpoint', type: 'Viewpoint', duration: '1 hour' },
      { name: 'Traditional Market', type: 'Market', duration: '2 hours' },
      { name: 'Public Gardens', type: 'Park', duration: '1-2 hours' }
    ],
    restaurants: [
      { cuisine: 'Local Traditional', priceRange: '$$', specialty: 'Regional specialties' },
      { cuisine: 'International', priceRange: '$$$', specialty: 'Fusion cuisine' },
      { cuisine: 'Street Food', priceRange: '$', specialty: 'Local street favorites' },
      { cuisine: 'Fine Dining', priceRange: '$$$$', specialty: 'Gourmet experience' }
    ],
    accommodations: [
      { type: 'Luxury Hotel', area: 'City Center', priceRange: '$$$$' },
      { type: 'Boutique Hotel', area: 'Historic District', priceRange: '$$$' },
      { type: 'Budget Hotel', area: 'Near Transport', priceRange: '$$' },
      { type: 'Local Guesthouse', area: 'Residential Area', priceRange: '$' }
    ]
  };

  return {
    destination,
    overview: `${destination} offers a unique blend of cultural attractions, delicious cuisine, and memorable experiences. This vibrant destination combines rich history with modern amenities, making it perfect for travelers seeking authentic local experiences.`,
    attractions: templates.attractions.map((template, index) => ({
      name: `${template.name} of ${destination}`,
      description: `A must-visit ${template.type.toLowerCase()} showcasing the best of ${destination}'s culture and heritage.`,
      rating: 4.2 + (Math.random() * 0.6),
      duration: template.duration,
      type: template.type
    })),
    restaurants: templates.restaurants.map((template, index) => ({
      name: `Local ${template.cuisine} Restaurant ${index + 1}`,
      cuisine: template.cuisine,
      description: `Highly rated restaurant serving authentic ${template.cuisine.toLowerCase()} dishes in ${destination}.`,
      rating: 4.1 + (Math.random() * 0.7),
      priceRange: template.priceRange,
      specialty: template.specialty
    })),
    accommodations: templates.accommodations.map((template, index) => ({
      name: `${destination} ${template.type} ${index + 1}`,
      type: template.type,
      area: template.area,
      description: `Well-located ${template.type.toLowerCase()} offering comfort and convenience in ${destination}.`,
      rating: 4.0 + (Math.random() * 0.8),
      priceRange: template.priceRange,
      amenities: 'WiFi, Breakfast, Concierge'
    })),
    itinerary: [
      {
        day: 1,
        theme: 'First Impressions',
        morning: `Begin your journey in ${destination} by exploring the historic city center and main landmarks. Visit the most iconic sites to get oriented with the city's layout and culture.`,
        afternoon: `Discover local museums and cultural attractions that showcase ${destination}'s unique heritage. Take time to explore traditional markets and interact with locals.`,
        evening: `Experience the local dining scene with dinner at a traditional restaurant, followed by an evening stroll through the illuminated historic areas.`
      },
      {
        day: 2,
        theme: 'Culture & Adventure',
        morning: `Visit the most popular attractions and viewpoints in ${destination}. Take plenty of photos and learn about the local history from guides or information centers.`,
        afternoon: `Explore different neighborhoods and districts, each offering unique perspectives on local life. Visit parks, gardens, or natural attractions for a change of pace.`,
        evening: `Try local specialties at recommended restaurants and experience ${destination}'s nightlife, whether it's cultural performances, bars, or evening markets.`
      },
      {
        day: 3,
        theme: 'Hidden Gems & Departure',
        morning: `Seek out lesser-known attractions and hidden gems that locals recommend. Visit artisan workshops or local markets for authentic souvenirs.`,
        afternoon: `Enjoy relaxing activities like visiting gardens, cafes, or scenic spots. Take time to reflect on your journey and purchase last-minute gifts.`,
        evening: `Conclude your visit with a memorable farewell dinner at a special restaurant, celebrating your discoveries in ${destination}.`
      }
    ],
    tips: [
      `Research local customs and etiquette before visiting ${destination}`,
      'Learn basic phrases in the local language to enhance your experience',
      'Try the local cuisine - ask locals for their favorite restaurant recommendations',
      'Keep copies of important documents and emergency contact information',
      'Check local weather and pack appropriate clothing',
      'Respect local traditions and dress codes, especially at religious sites',
      'Stay aware of your surroundings and keep valuables secure'
    ]
  };
}