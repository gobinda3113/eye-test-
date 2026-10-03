/**
 * Page assembly: theme, language, the static sections, and the wiring that
 * launches the screener from the marketing side of the page.
 */

import { LANGS, setLang, getLang, t, apply } from "./i18n.ts";
import { CHECKS, ICONS, CHART_LINES, STATES, FAQ_COUNT, REFS, SOURCES, DMV_LINKS, US_ONLY_CHECK_IDS, US_ONLY_FAQ_NUMS } from "./data.ts";
import { lineSVG } from "./optotypes.ts";
import { createLab } from "./lab.ts";

const THEME_KEY = "dmv-eye-test.theme";
const LANG_KEY = "dmv-eye-test.lang";

/* The homepage ships in two variants: the generic vision check (every locale
   route) and the US DMV screener (/us/). The server marks <main> accordingly;
   the URL is the fallback so a missing marker can never leak DMV content. */
function isUSPage() {
  const marked = document.querySelector("main[data-variant]")?.getAttribute("data-variant");
  if (marked) return marked === "us";
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/us") return true;
  return (document.documentElement.lang || "en") === "en";
}

/* ---------------------------------------------------------------- theme */

function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem(THEME_KEY);
  } catch (e) {
    /* ignore */
  }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = theme;

  const btn = document.getElementById("themeBtn");
  if (!btn || (btn as any).dataset.boundTheme) return;
  (btn as any).dataset.boundTheme = "1";
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* ignore */
    }
  });
}

/* --------------------------------------------------------------- language */

function initLanguage(lab) {
  const select = document.getElementById("langSelect");
  // Live region for screen readers — announces language change without page reload
  let liveRegion = document.getElementById("langAnnounce");
  if (!liveRegion) {
    liveRegion = document.createElement("span");
    liveRegion.id = "langAnnounce";
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;";
    document.body.appendChild(liveRegion);
  }

  // The server-rendered route determines the language
  const code = document.documentElement.lang || "en";
  if (select) (select as HTMLSelectElement).value = code;
  setLang(code);

  if (select) {
    select.addEventListener("change", () => {
      const newLang = (select as HTMLSelectElement).value;
      try {
        localStorage.setItem(LANG_KEY, newLang);
      } catch (e) {
        /* ignore */
      }
      
      // Calculate new URL based on Astro routing
      const locales = ["es", "fr", "de", "pt", "it", "ja", "ru"];
      const pathSegments = window.location.pathname.split("/").filter(Boolean);

      // The /us/ DMV page has no locale variants: switching language lands on
      // the generic homepage in that language, switching back returns to /us/.
      if (pathSegments.length > 0 && pathSegments[0] === "us") {
        window.location.href = newLang === "en" ? "/us/" : "/" + newLang + "/";
        return;
      }
      
      if (pathSegments.length > 0 && locales.includes(pathSegments[0])) {
        if (newLang === "en") {
          pathSegments.shift();
        } else {
          pathSegments[0] = newLang;
        }
      } else {
        if (newLang !== "en") {
          pathSegments.unshift(newLang);
        }
      }
      
      let newPath = "/" + pathSegments.join("/");
      if (window.location.pathname.endsWith("/") && newPath !== "/") {
        newPath += "/";
      }
      if (window.location.search) {
        newPath += window.location.search;
      }
      if (window.location.hash) {
        newPath += window.location.hash;
      }
      
      window.location.href = newPath || "/";
    });
  }
}

function refreshDynamic() {
  renderFeatured();
  renderTable();
  apply();
}

/* ------------------------------------------------------------ page chrome */

function initHeader() {
  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        mobileNav.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
    // Close mobile nav on outside click
    document.addEventListener("click", (e) => {
      if (!mobileNav.hidden && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileNav.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
    // Close mobile nav on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileNav.hidden) {
        mobileNav.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------- hero chart */

function renderHeroChart() {
  const holder = document.getElementById("heroChart");
  if (!holder) return;
  const lines = CHART_LINES.filter((l) => l.acuity !== "20/200" && l.acuity !== "20/15");
  const base = 6.6;
  holder.innerHTML = lines
    .map((line) => {
      const den = Number(line.acuity.split("/")[1]);
      const h = base * (den / 20);
      const bench = line.acuity === "20/40";
      return `<div class="chart-row${bench ? " is-bench" : ""}">
        <span class="row-tag">${line.acuity}</span>
        ${lineSVG(line.letters, h, { gapRatio: 1.1 })}
      </div>`;
    })
    .join("");
}

/* ------------------------------------------------------------ state table */

function levelFor(state) {
  if (state.restrict && Number(state.restrict.split("/")[1]) >= 100) return "warn";
  if (state.restrict && Number(state.restrict.split("/")[1]) >= 70) return "mid";
  return "ok";
}

function renderFeatured() {
  const wrap = document.getElementById("featuredStates");
  if (!wrap) return;
  wrap.innerHTML = STATES.filter((s) => s.featured)
    .map((s) => {
      const link = DMV_LINKS.find((d) => d.code === s.code);
      return `
      <article class="fs-card">
        <button type="button" class="fs-main" data-state="${s.code}">
          <span class="fs-top">
            <span class="fs-code">${s.code}</span>
            <span class="fs-name">${s.name}</span>
          </span>
          <span class="fs-acuity">${s.min}<small>${t("states.need." + s.need)}</small></span>
          <span class="fs-note">${t("featured." + s.code)}</span>
        </button>
        ${
          link
            ? `<a class="fs-official" href="${link.url}" target="_blank" rel="noopener noreferrer">${t("states.official")} \u2014 ${link.name}<svg class="ico" viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-8.5 8.5M18 14.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5"/></svg></a>`
            : ""
        }
      </article>`;
    })
    .join("");
}

/* ---------------------------------------------------------- references */


function renderTable(filter = "") {
  const body = document.getElementById("stateTableBody");
  if (!body) return;
  const q = filter.trim().toLowerCase();
  const rows = STATES.filter((s) => !q || s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q));
  if (!rows.length) {
    body.innerHTML = `<tr class="empty-row"><td colspan="4">${t("states.none")}</td></tr>`;
    return;
  }
  body.innerHTML = rows
    .map((s) => {
      const level = levelFor(s);
      return `<tr class="${s.featured ? "is-featured" : ""}" id="row-${s.code}">
        <td data-label="${t("states.colState")}"><span class="st-name">${s.name}<span>${s.code}</span></span></td>
        <td data-label="${t("states.colAcuity")}"><span class="acuity-cell"><span class="acuity-badge a-${level}">${s.min}</span><small>${t("states.need." + s.need)}</small></span></td>
        <td data-label="${t("states.colIfBelow")}">${s.restrict ? t("states.belowTpl", { a: s.restrict }) : t("states.belowNone")}</td>
        <td data-label="${t("states.colRenewal")}">${t("states.renewal." + s.renewal)}</td>
      </tr>`;
    })
    .join("");
}

function initStates() {
  const search = document.getElementById("stateSearch");
  if (search) search.addEventListener("input", () => renderTable(search.value));

  const wrap = document.getElementById("featuredStates");
  if (wrap) {
    wrap.addEventListener("click", (e) => {
      const card = e.target.closest("[data-state]");
      if (!card) return;
      const row = document.getElementById("row-" + card.dataset.state);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.style.transition = "background .4s";
        row.style.background = "color-mix(in srgb, var(--primary) 16%, transparent)";
        setTimeout(() => {
          row.style.background = "";
        }, 1400);
      }
    });
  }
}

/* ------------------------------------------------------------------- faq */


/* --------------------------------------------------------------- reveal */

/**
 * Entrance animation. Deliberately observer-free, plus a timed safety net: if
 * the document is hidden (background tab / offscreen embed) CSS animations are
 * paused, so anything relying on a fill-mode would stay at opacity 0 forever.
 * After the longest possible delay we force-reveal anything still invisible.
 */
function initReveal() {
  const targets = [
    ...document.querySelectorAll(".section-head"),
    ...document.querySelectorAll(".how-step"),
    ...document.querySelectorAll(".how-card"),
    ...document.querySelectorAll(".check-row"),
    ...document.querySelectorAll(".check-card"),
    ...document.querySelectorAll(".stat-strip"),
    ...document.querySelectorAll(".cdl-copy"),
    ...document.querySelectorAll(".cdl-card"),
    ...document.querySelectorAll(".featured-states"),
    ...document.querySelectorAll(".table-card"),
    ...document.querySelectorAll(".ref-card"),
    ...document.querySelectorAll(".ref-col"),
    ...document.querySelectorAll(".faq-item"),
  ];
  if (document.hidden) return;
  let maxDelay = 0;
  targets.forEach((el, i) => {
    const delay = Math.min(i % 8, 7) * 55;
    maxDelay = Math.max(maxDelay, delay);
    el.classList.add("reveal");
    el.style.animationDelay = delay + "ms";
  });
  setTimeout(() => {
    targets.forEach((el) => {
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) el.style.animation = "none";
    });
  }, maxDelay + 1200);
}

/* ------------------------------------------------------------------ boot */

async function boot() {
  initTheme();
  // The lab is the core of the page: create it first so a failure in any
  // decorative section (hero chart, states, refs, FAQ, reveal) can never
  // leave the stepper/stage/foot empty.
  const code = document.documentElement.lang || "en";
  setLang(code);

  const labEl = document.getElementById("lab");
  let lab = null;
  if (labEl) {
    try {
      lab = createLab(labEl);
    } catch (e) {
      console.error("[vision] lab failed to start", e);
    }
  }

  let isTransitioning = false;

  function getTestUrl(testId: string) {
    const lang = document.documentElement.lang || "en";
    const prefix = lang && lang !== "en" ? `/${lang}` : "";
    return `${prefix}/test/?mode=individual&check=${encodeURIComponent(testId)}`;
  }

  function handleModeSelect(mode: string, check?: string | null) {
    if (isTransitioning) return;
    isTransitioning = true;

    const entryChoice = document.getElementById("testEntryChoice");
    const labContainer = document.getElementById("lab");
    if (entryChoice && labContainer) {
      entryChoice.style.display = "none";
      labContainer.style.display = "block";
    }
    if (lab && typeof lab.startMode === "function") {
      lab.startMode(mode, check || null);
    }
    setTimeout(() => {
      isTransitioning = false;
    }, 120);
  }

  document.addEventListener("click", (e: any) => {
    // Test entry modes (only relevant if #lab or entry choice is present)
    const modeCard = e.target.closest("[data-mode]");
    if (modeCard && lab) {
      e.preventDefault();
      if (isTransitioning) return;

      modeCard.classList.add("is-active");
      const mode = modeCard.dataset.mode;
      setTimeout(() => {
        modeCard.classList.remove("is-active");
        handleModeSelect(mode);
      }, 50);
      return;
    }

    const card = e.target.closest("[data-test]");
    if (card) {
      if (lab) {
        lab.start(card.dataset.test);
      } else {
        const testId = card.dataset.test;
        if (testId) {
          const targetUrl = card.dataset.href || getTestUrl(testId);
          window.location.href = targetUrl;
        }
      }
      return;
    }

    const cdl = e.target.closest('[data-act="start-cdl"]');
    if (cdl) {
      e.preventDefault();
      if (lab) {
        lab.start("cdl");
      } else {
        window.location.href = getTestUrl("cdl");
      }
      return;
    }
  });

  // Handle deep link /test/?mode=individual&check=color
  const params = new URLSearchParams(window.location.search);
  const qMode = params.get("mode");
  const qCheck = params.get("check");
  if (qMode && lab) {
    handleModeSelect(qMode, qCheck);
  }

  const safe = (name, fn) => {
    try {
      return fn();
    } catch (e) {
      console.error("[vision] " + name + " failed", e);
      return undefined;
    }
  };

  await safe("fonts", whenFontsReady);
  safe("heroChart", renderHeroChart);
  safe("language", () => initLanguage(lab));
  safe("header", initHeader);
  safe("states", initStates);
  safe("dynamic", () => refreshDynamic(lab));
  safe("reveal", initReveal);

  document.addEventListener("keydown", (e: any) => {
    // Native <button> already fires click on Enter/Space; this guard is a no-op
    // for the check cards now that they are real buttons. Kept for safety.
    if (e.key === "Enter" || e.key === " ") {
      const row = e.target.closest("[data-test]");
      if (row) {
        e.preventDefault();
        if (lab) {
          lab.start(row.dataset.test);
        } else {
          const testId = row.dataset.test;
          if (testId) {
            const targetUrl = row.dataset.href || getTestUrl(testId);
            window.location.href = targetUrl;
          }
        }
      }
    }
  });

  window.dmvEyeTest = { lab, lang: getLang, t };
}

function whenFontsReady() {
  if (!document.fonts || !document.fonts.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise((r) => setTimeout(r, 2500)),
  ]);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
