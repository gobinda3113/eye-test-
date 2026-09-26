import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Single source of truth for the canonical origin. Every canonical tag,
// hreflang alternate, OG url, JSON-LD @id and the sitemap derive from this,
// so there is exactly one place to change if the domain moves.
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
      // error pages are noindex and must stay out of the sitemap
      filter: (page) => !/\/(404|500)\/?$/.test(page),
    }),
  ],
});
