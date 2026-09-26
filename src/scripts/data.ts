/**
 * Static reference data.
 *
 * Kept as structured codes rather than prose so every row can be rendered in
 * all eight UI languages (the sentences live in i18n.js).
 */

/* ---------------------------------------------------------------- optotypes */

export const CHART_LINES = [
  { acuity: "20/200", letters: ["E"] },
  { acuity: "20/100", letters: ["F", "P"] },
  { acuity: "20/70", letters: ["T", "O", "Z"] },
  { acuity: "20/50", letters: ["L", "P", "E", "D"] },
  { acuity: "20/40", letters: ["P", "E", "C", "F", "D"] },
  { acuity: "20/30", letters: ["E", "D", "F", "C", "Z", "P"] },
  { acuity: "20/25", letters: ["F", "E", "L", "O", "P", "Z", "D"] },
  { acuity: "20/20", letters: ["D", "E", "F", "P", "O", "T", "E", "C"] },
  { acuity: "20/15", letters: ["L", "E", "F", "O", "D", "P", "C", "T"] },
];

/* Snellen denominators, in the order the adaptive test walks through them. */
export const ACUITY_STEPS = [200, 100, 70, 50, 40, 30, 25, 20];

/* Notated lines for the interactive distance test (three letters each). */
export const TEST_LINES = {
  200: ["E", "O", "F"],
  100: ["F", "P", "T"],
  70: ["T", "O", "Z"],
  50: ["L", "P", "E"],
  40: ["P", "C", "F"],
  30: ["E", "F", "Z"],
  25: ["F", "L", "O"],
  20: ["D", "E", "F"],
};

/* Letter pool for the on-screen answer pad: every optotype on the chart. */
export const ANSWER_POOL = ["C", "D", "E", "F", "H", "K", "L", "N", "O", "P", "R", "S", "T", "V", "Z"];

/* Sivtsev Cyrillic set (Golovin–Sivtsev table): lines per denominator and the
   on-screen answer pool, so no hardware Cyrillic keyboard is ever required. */
export const SIVTSEV_POOL = ["Ш", "Б", "М", "Н", "К", "Ы", "И"];
export const SIVTSEV_LINES = {
  200: ["Ш"],
  100: ["Б", "Ы"],
  70: ["М", "Н", "К"],
  50: ["Ш", "Б", "М"],
  40: ["Н", "К", "Ы"],
  30: ["М", "Ш", "И"],
  25: ["Б", "Н", "К"],
  20: ["Ы", "М", "Ш"],
};

/* ---------------------------------------------------------------- states */

/**
 * need:  "better" (better eye may be used) | "both" (each eye separately)
 * min:   acuity needed for an unrestricted licence
 * restrict: lowest acuity that may still qualify for a restricted licence
 * renewal: "every" | "alternate" | "cycle"
 */
export const STATES = [
  { code: "AL", name: "Alabama", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "AK", name: "Alaska", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "AZ", name: "Arizona", need: "better", min: "20/40", restrict: "20/60", renewal: "cycle" },
  { code: "AR", name: "Arkansas", need: "both", min: "20/40", restrict: "20/70", renewal: "alternate" },
  { code: "CA", name: "California", need: "better", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "CO", name: "Colorado", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "CT", name: "Connecticut", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "DE", name: "Delaware", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "DC", name: "District of Columbia", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "FL", name: "Florida", need: "better", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "GA", name: "Georgia", need: "better", min: "20/40", restrict: "20/60", renewal: "every" },
  { code: "HI", name: "Hawaii", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "ID", name: "Idaho", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "IL", name: "Illinois", need: "both", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "IN", name: "Indiana", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "IA", name: "Iowa", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "KS", name: "Kansas", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "KY", name: "Kentucky", need: "better", min: "20/40", restrict: "20/60", renewal: "every" },
  { code: "LA", name: "Louisiana", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "ME", name: "Maine", need: "better", min: "20/40", restrict: "20/70", renewal: "alternate" },
  { code: "MD", name: "Maryland", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "MA", name: "Massachusetts", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "MI", name: "Michigan", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "MN", name: "Minnesota", need: "both", min: "20/40", restrict: "20/60", renewal: "every", featured: true },
  { code: "MS", name: "Mississippi", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "MO", name: "Missouri", need: "both", min: "20/40", restrict: "20/70", renewal: "alternate" },
  { code: "MT", name: "Montana", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "NE", name: "Nebraska", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "NV", name: "Nevada", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "NH", name: "New Hampshire", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "NJ", name: "New Jersey", need: "both", min: "20/40", restrict: "20/50", renewal: "every" },
  { code: "NM", name: "New Mexico", need: "better", min: "20/40", restrict: "20/80", renewal: "every" },
  { code: "NY", name: "New York", need: "better", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "NC", name: "North Carolina", need: "better", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "ND", name: "North Dakota", need: "both", min: "20/40", restrict: "20/80", renewal: "every" },
  { code: "OH", name: "Ohio", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "OK", name: "Oklahoma", need: "both", min: "20/40", restrict: "20/60", renewal: "every" },
  { code: "OR", name: "Oregon", need: "better", min: "20/40", restrict: "20/70", renewal: "alternate" },
  { code: "PA", name: "Pennsylvania", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "RI", name: "Rhode Island", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "SC", name: "South Carolina", need: "better", min: "20/40", restrict: "20/70", renewal: "every", featured: true },
  { code: "SD", name: "South Dakota", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "TN", name: "Tennessee", need: "better", min: "20/40", restrict: "20/60", renewal: "every" },
  { code: "TX", name: "Texas", need: "both", min: "20/40", restrict: "20/70", renewal: "alternate", featured: true },
  { code: "UT", name: "Utah", need: "both", min: "20/40", restrict: "20/60", renewal: "every" },
  { code: "VT", name: "Vermont", need: "both", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "VA", name: "Virginia", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "WA", name: "Washington", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "WV", name: "West Virginia", need: "better", min: "20/40", restrict: "20/70", renewal: "every" },
  { code: "WI", name: "Wisconsin", need: "better", min: "20/40", restrict: "20/100", renewal: "every" },
  { code: "WY", name: "Wyoming", need: "better", min: "20/40", restrict: "20/100", renewal: "every" },
];

/* ---------------------------------------------------------------- checks */

export const CHECKS = [
  {
    id: "distance",
    icon: "chart",
    color: "#0c7d6f",
    test: "distance",
    tag: "20/40",
  },
  {
    id: "tumbling",
    icon: "tumble",
    color: "#5145d6",
    test: "tumbling",
    tag: "CDL",
  },
  {
    id: "color",
    icon: "color",
    color: "#c2470f",
    test: "color",
    tag: "12 plates",
  },
  {
    id: "peripheral",
    icon: "field",
    color: "#0a6a8f",
    test: "peripheral",
    tag: "70°",
  },
  {
    id: "near",
    icon: "near",
    color: "#7a4a12",
    test: "near",
    tag: "40 cm",
  },
  {
    id: "contrast",
    icon: "contrast",
    color: "#6d3bd4",
    test: "contrast",
    tag: "1%",
  },
  {
    id: "astigmatism",
    icon: "dial",
    color: "#b2540c",
    test: "astigmatism",
    tag: "axis",
  },
  {
    id: "refraction",
    icon: "refract",
    color: "#0f6fb5",
    test: "refraction",
    tag: "R/G",
  },
  {
    id: "stereo",
    icon: "stereo",
    color: "#1f7a5a",
    test: "stereo",
    tag: "3D",
  },
  {
    id: "cdl",
    icon: "truck",
    color: "#0f7a4f",
    test: "cdl",
    tag: "DOT",
  },
  {
    id: "landolt",
    icon: "ring",
    color: "#0e7c86",
    test: "landolt",
    tag: "0.5",
  },
  {
    id: "amsler",
    icon: "grid",
    color: "#9b59b6",
    test: "amsler",
    tag: "Grid",
  },
  {
    id: "sivtsev",
    icon: "siv",
    color: "#8a5a12",
    test: "sivtsev",
    tag: "V 1.0",
  },
];

/* ------------------------------------------------- official DMV resources */

/** Licensing agencies for the states people ask about most. */
export const DMV_LINKS = [
  { code: "CA", name: "California DMV", url: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/vision-requirements/" },
  { code: "FL", name: "Florida HSMV", url: "https://www.flhsmv.gov/driver-licenses-id-cards/medical-review/vision-standards/" },
  { code: "IL", name: "Illinois SOS", url: "https://www.ilsos.gov/departments/drivers/" },
  { code: "NY", name: "New York DMV", url: "https://dmv.ny.gov/driver-license/vision-requirements" },
  { code: "TX", name: "Texas DPS", url: "https://www.dps.texas.gov/section/driver-license" },
  { code: "NC", name: "NCDMV", url: "https://www.ncdot.gov/dmv/license-id/" },
  { code: "SC", name: "SCDMV", url: "https://www.scdmvonline.com/" },
  { code: "MN", name: "Minnesota DVS", url: "https://dps.mn.gov/divisions/dvs/Pages/default.aspx" },
];

/* ------------------------------------------------------- standards & sources */

export const REFS = [
  { id: "snellen", url: "https://www.aao.org/eye-health/tips-prevention/how-to-test-eyesight" },
  { id: "ishihara", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness" },
  { id: "duochrome", url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/refractive-errors" },
  { id: "jaeger", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/presbyopia" },
];

export const SOURCES = [
  { id: "aao", name: "American Academy of Ophthalmology", url: "https://www.aao.org/" },
  { id: "nei", name: "National Eye Institute (NIH)", url: "https://www.nei.nih.gov/" },
  { id: "aoa", name: "American Optometric Association", url: "https://www.aoa.org/" },
  { id: "who", name: "WHO — blindness and vision loss", url: "https://www.who.int/health-topics/blindness-and-vision-loss" },
  { id: "pb", name: "Prevent Blindness", url: "https://preventblindness.org/" },
];

/* ---------------------------------------------------------------- faq */

export const FAQ_COUNT = 20;

/**
 * US-DMV-only content. The English route (onlinevisiontest.org/) is the DMV
 * practice screener; every other locale is a generic vision check, so these
 * IDs/numbers are filtered out whenever the route language is not "en".
 * Server-side (HomePage.astro JSON-LD) and client-side (app.ts rendering)
 * must use the same lists so prerendered HTML and hydrated DOM agree.
 */
export const US_ONLY_CHECK_IDS = ["cdl"];
export const US_ONLY_FAQ_NUMS = [3, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/* ---------------------------------------------------------------- icons */

export const ICONS = {
  chart: '<path d="M4 20V4.5M4 20h16M7 17l3.5-5 3 3L20 8"/>',
  tumble: '<path d="M4 6h16M12 6v12M4 8v2.5H2.5M4 15.5V18H2.5M20 8v2.5h1.5M20 15.5V18h1.5"/>',
  color: '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="2.4"/><circle cx="14.6" cy="14.6" r="2.4"/>',
  field: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"/>',
  near: '<path d="M6 4h9l4 4v12H6z"/><path d="M15 4v4h4M9 12h7M9 16h5"/>',
  contrast: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17"/><path d="M17.2 8.2c-2.1 1.6-2.1 5.9 0 7.6M15.4 8.6c-1.6 1.4-1.6 5.4 0 6.8"/>',
  dial: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M4.6 7.7l14.8 8.5M4.6 16.3l14.8-8.5"/>',
  refract: '<circle cx="10" cy="12" r="6.2"/><path d="M15.2 6.4a9.6 9.6 0 0 1 0 11.2M18.4 9.2a5.6 5.6 0 0 1 0 5.6"/>',
  stereo: '<circle cx="7" cy="13" r="3.6"/><circle cx="17" cy="13" r="3.6"/><path d="M10.6 13h2.8M3.4 13H2M20.6 13H22M7 9.4V7.8M17 9.4V7.8"/>',
  truck: '<path d="M3 16.5V8.5A1.5 1.5 0 0 1 4.5 7H13v9.5M13 9h4.6a2 2 0 0 1 1.9 1.4L21 15v1.5h-2"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>',
  ring: '<circle cx="12" cy="12" r="8"/><path d="M12 4v3.4"/>',
  siv: '<path d="M6 4v16M6 12h5a4 4 0 0 1 0 8M15 4v16"/>',
  grid: '<path d="M4 4h16v16H4zM8 4v16M12 4v16M16 4v16M4 8h16M4 12h16M4 16h16"/>',
};
