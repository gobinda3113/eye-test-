/**
 * Canonical origins, locales and route table. Imported by the Astro pages at
 * build time only — never shipped to the browser.
 */

export const SITE = "https://onlinevisiontest.org";
export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "es", "fr", "de", "pt", "it", "ja", "ru"];

/** hreflang values for the <link rel="alternate"> set and the sitemap. */
export const HREFLANG = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  pt: "pt-BR",
  it: "it-IT",
  ja: "ja-JP",
  ru: "ru-RU",
};

/**
 * The eight prerendered page types. "path" is the segment used for every
 * locale; the default locale has no prefix (prefixDefaultLocale: false).
 */
export const PAGES = [
  { key: "home", path: "", nav: false },
  { key: "test", path: "test", nav: false, noindex: true },
  // US DMV practice page. English-only single route (/us/), NOT crossed with
  // locales: never pass "us" to pathFor(), use usUrl() instead.
  { key: "us", path: "us", nav: false, singleLocale: "en" },
  { key: "blog", path: "blog", nav: true },
  { key: "about", path: "about", nav: true },
  { key: "contact", path: "contact", nav: true },
  { key: "privacy", path: "privacy", nav: false },
  { key: "terms", path: "terms", nav: false },
  { key: "notFound", path: "404", nav: false, noindex: true },
  { key: "serverError", path: "500", nav: false, noindex: true },
];

export function pageDef(key) {
  const p = PAGES.find((x) => x.key === key);
  if (!p) throw new Error("Unknown page key: " + key);
  return p;
}

/** Locale-aware path, always with a trailing slash: "/", "/es/", "/states/", "/es/states/". */
export function pathFor(locale, pageKey) {
  const def = pageDef(pageKey);
  const prefix = locale === DEFAULT_LOCALE ? "" : "/" + locale;
  const seg = def.path ? "/" + def.path : "";
  return prefix + seg + "/";
}

export function urlFor(locale, pageKey) {
  return SITE + pathFor(locale, pageKey);
}

/** English-only US DMV practice page. The one US route; no locale variants. */
export const US_PATH = "/us/";
export const US_HREFLANG = "en-US";
export function usUrl() {
  return SITE + US_PATH;
}

/**
 * The full reciprocal hreflang set for the homepage family: generic English
 * (/) and every locale homepage. /us/ is English-only and intentionally NOT
 * part of this set — it self-canonicalizes with a single en-US alternate so
 * Google never sees two URLs claiming the same hreflang value.
 */
export function homeAlternates() {
  return LOCALES.map((locale) => ({
    locale,
    hreflang: HREFLANG[locale],
    url: urlFor(locale, "home"),
  }));
}

/** Every locale variant of one page, for the hreflang alternate set. */
export function alternates(pageKey) {
  return LOCALES.map((locale) => ({
    locale,
    hreflang: HREFLANG[locale],
    url: urlFor(locale, pageKey),
  }));
}

/** Single self-referencing alternate for the English-only /us/ page. */
export function usAlternates() {
  return [{ locale: "en", hreflang: US_HREFLANG, url: usUrl() }];
}

/** OG locale uses underscores (en_US), hreflang uses hyphens (en-US). */
export function ogLocale(locale) {
  const v = HREFLANG[locale] || HREFLANG.en;
  return v.replace("-", "_");
}

/** Locales with a dedicated OG image on disk. Others fall back to en. */
const OG_AVAILABLE = ["en", "de", "es", "fr", "pt", "it", "ja", "ru"];

export function ogImage(locale) {
  const safe = OG_AVAILABLE.includes(locale) ? locale : "en";
  return SITE + "/og-" + safe + ".png";
}
