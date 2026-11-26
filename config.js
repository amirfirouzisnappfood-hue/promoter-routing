const APP_CONFIG = {
  appsScriptUrl: "AKfycbybItKDOMOmuOMzDTaxUWl9K87oP-nLkPet7rdarS6JwFuAO2LOfFWPQ_eCzr3SsFntpQ",
  osrmUrl: "https://router.project-osrm.org",
  mapTilesUrl: "https://tiles.openfreemap.org/styles/liberty",
  walkSpeedKmh: 5,
  vehicleSpeedKmh: 25,
  defaultServiceMin: 12,
  defaultShiftHours: 6,
  defaultTravelMode: "driving",
  maxCheckinDistanceM: 150,
  photoMaxPx: 1000,
  photoQuality: 0.7
};

if (typeof window !== "undefined") window.APP_CONFIG = APP_CONFIG;
