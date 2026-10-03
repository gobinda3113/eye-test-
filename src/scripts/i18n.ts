export const LANGS = [
  { code: "en", label: "English", htmlLang: "en" },
  { code: "es", label: "Español", htmlLang: "es" },
  { code: "fr", label: "Français", htmlLang: "fr" },
  { code: "de", label: "Deutsch", htmlLang: "de" },
  { code: "pt", label: "Português", htmlLang: "pt" },
  { code: "it", label: "Italiano", htmlLang: "it" },
  { code: "ja", label: "日本語", htmlLang: "ja" },
  { code: "ru", label: "Русский", htmlLang: "ru" },
];

export const K = Object.freeze({}); // If K is used

let activeDict: Record<string, string> = {};
let lang = "en";

export function setLang(code) {
  lang = code;
  const meta = LANGS.find((l) => l.code === code);
  if (typeof document !== "undefined") {
    document.documentElement.lang = meta ? meta.htmlLang : code;
  }
  if (typeof window !== "undefined" && (window as any)._dict) {
    activeDict = (window as any)._dict;
  }
  return lang;
}

export function getLang() {
  return lang;
}

export function t(key: string, vars?: Record<string, string | number>) {
  let s = activeDict[key];
  // Fallback to key if not found in activeDict. 
  // In our new architecture, activeDict contains everything because we ensured no missing keys.
  if (s == null) return key;
  
  if (vars) {
    for (const k of Object.keys(vars)) {
      s = s.split("{" + k + "}").join(String(vars[k]));
    }
  }
  return s;
}

export function apply(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n") || "");
  });
  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html") || "");
  });
  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const val = el.getAttribute("data-i18n-attr");
    if (!val) return;
    for (const pair of val.split(";")) {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    }
  });
}
