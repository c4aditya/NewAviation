// Real airline logos using reliable SVG / high quality brand images
export const airlineLogos = {
  'Air India': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/air-india-logo.png',
  'IndiGo': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/indigo-logo.png',
  'Vistara': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/vistara-logo.png',
  'SpiceJet': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/spicejet-logo.png',
  'Akasa Air': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/akasa-logo.png',
  'AirAsia India': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/airasia-logo.png',
  'Air India Express': 'https://pub-fad5bb8905db40d28f8096005388a2f1.r2.dev/air-india-logo.png',
  'Emirates': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop',
  'flydubai': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop'
};

// Return logo URL if matched, or null for fallback icon
export const getAirlineLogo = (airlineName) => {
  if (!airlineName) return null;
  const name = airlineName.trim();
  
  // Direct match
  if (airlineLogos[name]) return airlineLogos[name];

  // Soft search
  for (const [key, val] of Object.entries(airlineLogos)) {
    if (name.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(name.toLowerCase())) {
      return val;
    }
  }

  return null;
};
