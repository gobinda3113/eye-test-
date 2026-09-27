import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { execSync } from "child_process";
import fsSync from "fs";

// Single source of truth for the canonical origin. Every canonical tag,
// hreflang alternate, OG url, JSON-LD @id and the sitemap derive from this,
// so there is exactly one place to change if the domain moves.
const mtimeCache = {};

function getFileMtime(filepath) {
  if (mtimeCache[filepath]) return mtimeCache[filepath];
  try {
    const stdout = execSync(`git log -1 --format=%cI -- "${filepath}"`, { encoding: 'utf8' }).trim();
    if (stdout) {
      mtimeCache[filepath] = stdout;
      return stdout;
    }
  } catch(e) {}
  try {
     const stat = fsSync.statSync(filepath);
     const d = stat.mtime.toISOString();
     mtimeCache[filepath] = d;
     return d;
  } catch(e) {}
  mtimeCache[filepath] = new Date().toISOString();
  return mtimeCache[filepath];
}

function getSourceFile(url) {
  const path = new URL(url).pathname;
  if (path === '/' || path === '') return 'src/pages/index.astro';
  if (path === '/us/') return 'src/pages/us/index.astro';
  if (path === '/eye-test-chart/') return 'src/pages/eye-test-chart.astro';
  if (path === '/about/') return 'src/pages/about.astro';
  if (path === '/terms/') return 'src/pages/terms.astro';
  if (path === '/privacy/') return 'src/pages/privacy.astro';
  if (path === '/contact/') return 'src/pages/contact.astro';
  if (path === '/blog/') return 'src/pages/blog/index.astro';
  
  if (path.startsWith('/states/')) return 'src/pages/states/[state].astro';
  if (path.match(/^\/blog\/[^/]+\/$/)) return 'src/pages/blog/[slug].astro';
  
  const localeMatch = path.match(/^\/([a-z]{2})\/(.*)$/);
  if (localeMatch) {
     const sub = localeMatch[2];
     if (sub === '' || sub === '/') return 'src/pages/[locale]/index.astro';
     if (sub === 'about/') return 'src/pages/[locale]/about.astro';
     if (sub === 'terms/') return 'src/pages/[locale]/terms.astro';
     if (sub === 'privacy/') return 'src/pages/[locale]/privacy.astro';
     if (sub === 'contact/') return 'src/pages/[locale]/contact.astro';
     if (sub === 'blog/') return 'src/pages/[locale]/blog/index.astro';
     if (sub.startsWith('blog/')) return 'src/pages/[locale]/blog/[slug].astro';
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
        const file = getSourceFile(item.url);
        if (file) {
           item.lastmod = getFileMtime(file);
        }
        return item;
      },
      // error pages are noindex and must stay out of the sitemap
      filter: (page) => !/\/(404|500)\/?$/.test(page),
    }),
  ],
});
