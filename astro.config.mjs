import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { execSync } from "child_process";
import fsSync from "fs";

// Single source of truth for the canonical origin. Every canonical tag,
// hreflang alternate, OG url, JSON-LD @id and the sitemap derive from this,
// so there is exactly one place to change if the domain moves.
const mtimeCache = {};

function getFileMtime(filepaths) {
  if (!filepaths) return new Date().toISOString();
  const files = Array.isArray(filepaths) ? filepaths : [filepaths];
  const key = files.join(";");
  if (mtimeCache[key]) return mtimeCache[key];
  try {
    const fileArgs = files.map((f) => `"${f}"`).join(" ");
    const stdout = execSync(`git log -1 --format=%cI -- ${fileArgs}`, { encoding: "utf8" }).trim();
    if (stdout) {
      mtimeCache[key] = stdout;
      return stdout;
    }
  } catch(e) {}
  try {
    let maxTime = 0;
    for (const f of files) {
      try {
        const stat = fsSync.statSync(f);
        if (stat.mtimeMs > maxTime) maxTime = stat.mtimeMs;
      } catch(e) {}
    }
    if (maxTime > 0) {
      const d = new Date(maxTime).toISOString();
      mtimeCache[key] = d;
      return d;
    }
  } catch(e) {}
  mtimeCache[key] = new Date().toISOString();
  return mtimeCache[key];
}

const HOME_DEPS = [
  "src/components/HomePage.astro",
  "src/layouts/Layout.astro",
  "src/styles/landing.css",
  "src/styles/global.css",
  "src/scripts/lab.ts",
  "src/scripts/app.ts",
];

function getSourceFiles(url) {
  const path = new URL(url).pathname;
  if (path === "/" || path === "") return ["src/pages/index.astro", ...HOME_DEPS];
  if (path === "/us/") return ["src/pages/us/index.astro", ...HOME_DEPS];
  if (path === "/eye-test-chart/") return ["src/pages/eye-test-chart.astro", "src/scripts/vision.ts", "src/layouts/Layout.astro"];
  if (path === "/about/") return ["src/pages/about.astro", "src/layouts/Layout.astro"];
  if (path === "/terms/") return ["src/pages/terms.astro", "src/layouts/Layout.astro"];
  if (path === "/privacy/") return ["src/pages/privacy.astro", "src/layouts/Layout.astro"];
  if (path === "/contact/") return ["src/pages/contact.astro", "src/layouts/Layout.astro"];
  if (path === "/blog/") return ["src/pages/blog/index.astro", "src/data/blog.ts", "src/layouts/Layout.astro"];
  
  if (path.startsWith("/states/")) return ["src/pages/states/[state].astro", "src/data/states.ts", "src/layouts/Layout.astro"];
  if (path.match(/^\/blog\/[^/]+\/$/)) return ["src/pages/blog/[slug].astro", "src/data/blog.ts", "src/components/BlogPost.astro", "src/layouts/Layout.astro"];
  
  const localeMatch = path.match(/^\/([a-z]{2})\/(.*)$/);
  if (localeMatch) {
     const sub = localeMatch[2];
     if (sub === "" || sub === "/") return ["src/pages/[locale]/index.astro", ...HOME_DEPS];
     if (sub === "about/") return ["src/pages/[locale]/about.astro", "src/layouts/Layout.astro"];
     if (sub === "terms/") return ["src/pages/[locale]/terms.astro", "src/layouts/Layout.astro"];
     if (sub === "privacy/") return ["src/pages/[locale]/privacy.astro", "src/layouts/Layout.astro"];
     if (sub === "contact/") return ["src/pages/[locale]/contact.astro", "src/layouts/Layout.astro"];
     if (sub === "blog/") return ["src/pages/[locale]/blog/index.astro", "src/data/blog.ts", "src/layouts/Layout.astro"];
     if (sub.startsWith("blog/")) return ["src/pages/[locale]/blog/[slug].astro", "src/data/blog.ts", "src/components/BlogPost.astro", "src/layouts/Layout.astro"];
  }
  return null;
}

export const SITE = "https://onlinevisiontest.org";

export default defineConfig({
  vite: {
    build: { target: 'es2022' },
  },

  site: SITE,
  trailingSlash: "always",
  build: {
    // any-static: the whole site is prerendered to plain HTML + assets in dist/,
    // ready for any host (including Cloudflare Pages/Workers static assets).
    output: "static",
    // small stylesheets are inlined into the page; larger ones stay external
    inlineStylesheets: "auto",
    format: "directory",
  },
  redirects: { "/sitemap.xml": "/sitemap-index.xml" },
  compressHTML: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "de", "pt", "it", "ja", "ru"],
    routing: {
      // en lives at the root, the other seven under /es/ /fr/ /de/ /pt/ /it/ /ja/ /ru/
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          fr: "fr-FR",
          de: "de-DE",
          pt: "pt-BR",
          it: "it-IT",
          ja: "ja-JP",
          ru: "ru-RU",
        },
      },
      serialize(item) {
        const files = getSourceFiles(item.url);
        if (files) {
           item.lastmod = getFileMtime(files);
        }
        return item;
      },
      // error pages and unverified state pages are noindex and must stay out of the sitemap
      filter: (page) => {
        if (/\/(404|500)\/?$/.test(page)) return false;
        try {
          const pathname = new URL(page).pathname;
          const stateMatch = pathname.match(/^\/states\/([^/]+)\/$/);
          const VERIFIED_STATE_SLUGS = new Set([
            "alabama", "arizona", "arkansas", "california", "colorado",
            "connecticut", "delaware", "district-of-columbia", "florida", "georgia",
            "idaho", "illinois", "indiana", "kansas", "kentucky",
            "louisiana", "maine", "maryland", "montana", "nebraska",
            "new-york", "oregon", "south-carolina", "texas", "vermont",
            "virginia", "washington", "wisconsin"
          ]);
          if (stateMatch && !VERIFIED_STATE_SLUGS.has(stateMatch[1])) {
            return false;
          }
        } catch (e) {}
        return true;
      },
    }),
  ],
});
