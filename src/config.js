/**
 * App configuration — this is the Astro port of the generator's `main.pjs`
 * `config` list. Nothing in src/scripts imports it yet; it is kept as the
 * single place an owner should edit the tunable values.
 */
export const config = {
  cardWidthMm: 85.6,
  cardHeightMm: 53.98,
  defaultDistanceM: 3,
  distances: [3, 6],
  benchmark: "20/40",
  languages: ["en", "es", "fr", "de", "pt", "it", "ja", "ru"],
};
