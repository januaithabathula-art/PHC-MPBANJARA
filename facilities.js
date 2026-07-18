// One line per PHC. Left side = the code used in the link (?f=code) — no
// spaces, keep it short and simple (e.g. lowercase place name). Right side =
// the name shown on that PHC's board.
//
// To add a new PHC: copy a line, change both the code and the name, keep the
// comma at the end, then re-upload this file to GitHub. Nothing else needs
// to change — the new PHC's link and its own private data start working
// immediately.
const FACILITIES = {
  "mpbanjara": "PHC MP Banjara",
  "sulanagar": "PHC Sulanagar",
  "manuguru":  "PHC Manuguru"
};

// One PIN per PHC — used on that PHC's own "Manage list" screen to unlock
// editing. Each PHC's staff should only know their own PHC's PIN, so they
// can't accidentally (or on purpose) edit another PHC's stock.
// Code on the left MUST exactly match a code above. 4-6 digits recommended.
// If a PHC is missing here, it falls back to the DEFAULT_PIN below.
const FACILITY_PINS = {
  "mpbanjara": "1947",
  "sulanagar": "2201",
  "manuguru":  "3315"
};
const DEFAULT_PIN = "1947"; // used only if a PHC code isn't listed above
