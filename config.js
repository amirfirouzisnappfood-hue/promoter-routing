const APP_CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzj_e1o5W99IUju_DM654GTwtAtq1GtlAF1qsZUdIfysIdRlF6ShpkZrlNVDizpu_iQ8Q/exec",
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
export default APP_CONFIG;
