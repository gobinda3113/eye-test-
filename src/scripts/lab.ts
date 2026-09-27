/**
 * The screener wizard.
 *
 * Every step renders into the lab's stage element and wires up its own
 * controls. A monotonically increasing token cancels any in-flight async run
 * when the user navigates away mid-sequence.
 */

import { t } from "./i18n.ts";
import {
  lineHeightPx,
  nearFontPx,
  drawPlate,
  drawStereogram,
  STEREO_SHAPES,
  CONTRAST_LEVELS,
  contrastInk,
  DIAL_ANGLES,
  axisFromBlurred,
  axisLabel,
  refractionRead,
  COLOR_PLATES,
  NEAR_LINES,
  CARD_MM,
  MM_PER_PX_FALLBACK,
  acuityLabel,
  acuityNotations,
  overallVerdict,
} from "./vision.ts";
import { lineSVG, tumblingESVG, landoltCSVG } from "./optotypes.ts";
import { TEST_LINES, ANSWER_POOL, SIVTSEV_LINES, SIVTSEV_POOL } from "./data.ts";

const READ_SECONDS = 6;
const STORE_KEY = "dmv-eye-test.profile.v1";
const RESULT_KEY = "dmv-eye-test.results.v1";

/** How many optotypes fit at their true size in `avail` px (never zero). */
function fitCount(avail, height, count) {
  const boxW = height * 1.2;
  const gapW = height * 1.05;
  return Math.max(1, Math.min(count, Math.floor((avail + gapW) / (boxW + gapW))));
}

const STEP_ORDER = [
  "calibrate",
  "distance",
  "tumbling",
  "color",
  "peripheral",
  "near",
  "contrast",
  "astigmatism",
  "refraction",
  "stereo",
  "results",
];

const STEP_LABEL = {
  calibrate: "calib.title",
  distance: "checks.distance.name",
  tumbling: "checks.tumbling.name",
  landolt: "checks.landolt.name",
  sivtsev: "checks.sivtsev.name",
  color: "checks.color.name",
  peripheral: "checks.peripheral.name",
  near: "checks.near.name",
  contrast: "checks.contrast.name",
  astigmatism: "checks.astigmatism.name",
  refraction: "checks.refraction.name",
  stereo: "checks.stereo.name",
  results: "results.title",
};

/** Published normal / pass values shown above each test, as a clinician would state them. */
const STEP_INFO = {
  distance: { norm: "20/20", bench: "20/40" },
  tumbling: { norm: "20/20", bench: "20/40" },
  landolt: { norm: "20/20", bench: "20/40" },
  color: { norm: "12 / 14", bench: "10 / 14" },
  peripheral: { norm: "140\u00b0", bench: "110\u00b0" },
  near: { norm: "J1 \u2013 J2", bench: "J3" },
  contrast: { norm: "\u2264 5%", bench: "\u2264 10%" },
  refraction: { norm: "\u00b10.25 D", bench: "R/G equal" },
  stereo: { norm: "shape seen", bench: "shape seen" },
};

/** Big symbol shown on the refraction result card. */
const REFRACT_SYM = { myopic: "\u2212", hyperopic: "+", balanced: "\u00b10" };

export function createLab(labEl) {
  const stage = labEl.querySelector("#labStage");
  const foot = labEl.querySelector("#labFoot");
  const stepper = labEl.querySelector("#stepper");
  const statusEl = labEl.querySelector("#labStatus");
  const normEl = labEl.querySelector("#labNorm");

  let cleanups = [];
  let token = 0;
  let config = loadProfile();
  let results = loadResults();
  let step = "calibrate";
  let single = null;

  function on(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    cleanups.push(() => target.removeEventListener(type, handler, options));
  }

  function clearCleanups() {
    cleanups.forEach((fn) => fn());
    cleanups = [];
  }

  function status(text) {
    statusEl.textContent = text;
  }

  function isDone(id) {
    if (id === "calibrate") return config.calibrated;
    if (id === "distance") return results.both != null || results.right != null || results.left != null;
    if (id === "tumbling") return results.tumbling != null;
    if (id === "color") return results.color != null;
    if (id === "peripheral") return results.peripheral != null;
    if (id === "near") return results.near != null;
    if (id === "contrast") return results.contrast != null;
    if (id === "astigmatism") return results.astigmatism != null;
    if (id === "refraction") return results.refraction != null;
    if (id === "stereo") return results.stereo != null;
    return false;
  }

  /** Published normal / benchmark values for the current step, if we have any. */
  function paintNorm() {
    if (!normEl) return;
    const info = STEP_INFO[step];
    if (!info) {
      normEl.hidden = true;
      normEl.innerHTML = "";
      return;
    }
    normEl.hidden = false;
    normEl.innerHTML =
      `<span class="norm-item">${t("lab.norm", { a: `<b>${info.norm}</b>` })}</span>` +
      `<span class="norm-item">${t("lab.bench", { b: `<b>${info.bench}</b>` })}</span>`;
  }

  function renderStepper() {
    stepper.innerHTML = STEP_ORDER.map((id, i) => {
      const active = id === step;
      const done = isDone(id);
      const classes = ["step"];
      if (active) classes.push("is-active");
      if (done && !active) classes.push("is-done");
      return `<button type="button" class="${classes.join(" ")}" data-step="${id}">` +
        `<span class="step-n">${done && !active ? "&#10003;" : i + 1}</span>${t(STEP_LABEL[id])}</button>`;
    }).join("");
    stepper.querySelectorAll("[data-step]").forEach((btn) => {
      on(btn, "click", () => go(btn.dataset.step));
    });
    const activeBtn = stepper.querySelector(".step.is-active");
    if (activeBtn && stepper.scrollWidth > stepper.clientWidth) {
      /* offsetLeft is relative to the offsetParent (a positioned ancestor), not
         the scroller, so derive the button's offset within the stepper itself
         from client rects instead. */
      const sr = stepper.getBoundingClientRect();
      const br = activeBtn.getBoundingClientRect();
      const within = br.left - sr.left + stepper.scrollLeft;
      stepper.scrollLeft = Math.max(0, within - (stepper.clientWidth - br.width) / 2);
    }
    /* The rail hides its scrollbar, so fade whichever edge still has steps
       beyond it. Recomputed on scroll because the effect depends on position. */
    const wrap = stepper.parentElement;
    const paintMask = () => {
      const max = stepper.scrollWidth - stepper.clientWidth;
      const scrollable = max > 1;
      wrap.classList.toggle("fade-left", scrollable && stepper.scrollLeft > 1);
      wrap.classList.toggle("fade-right", scrollable && stepper.scrollLeft < max - 1);
    };
    on(stepper, "scroll", paintMask, { passive: true });
    paintMask();
  }

  function go(id) {
    if (!id || (id === step && !single)) return;
    step = id;
    render();
    labEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function render() {
    token++;
    clearCleanups();
    renderStepper();
    paintNorm();
    const setters = {
      calibrate: renderCalibrate,
      distance: renderDistance,
      tumbling: renderTumbling,
      landolt: renderLandolt,
      sivtsev: renderSivtsev,
      color: renderColor,
      peripheral: renderPeripheral,
      near: renderNear,
      contrast: renderContrast,
      astigmatism: renderAstigmatism,
      refraction: renderRefraction,
      stereo: renderStereo,
      amsler: renderAmsler,
      results: renderResults,
    };
    (setters[step] || renderCalibrate)();
  }

  function setFoot(html) {
    foot.innerHTML = html || "";
  }

  function navFoot({ next = true } = {}) {
    if (single) {
      setFoot(`<span class="trial-counter">${t("lab.stepOf", { n: 1, total: 1 })}</span>
        <button class="btn btn-quiet btn-sm" data-act="restart">${t("results.retake")}</button>`);
      on(foot.querySelector('[data-act="restart"]'), "click", () => reset(false));
      return;
    }
    const idx = STEP_ORDER.indexOf(step);
    const prevId = idx > 0 ? STEP_ORDER[idx - 1] : null;
    setFoot(`
      <button class="btn btn-quiet btn-sm" data-act="prev"${prevId ? "" : " disabled"}>${t("lab.prev")}</button>
      <span class="trial-counter">${t("lab.stepOf", { n: idx + 1, total: STEP_ORDER.length })}</span>
      ${next ? `<button class="btn btn-soft btn-sm" data-act="next">${t("lab.next")}</button>` : "<span></span>"}
    `);
    const prevBtn = foot.querySelector('[data-act="prev"]');
    const nextBtn = foot.querySelector('[data-act="next"]');
    if (prevBtn && prevId) on(prevBtn, "click", () => go(prevId));
    if (nextBtn) on(nextBtn, "click", () => go(STEP_ORDER[Math.min(idx + 1, STEP_ORDER.length - 1)]));
  }

  function tip(text) {
    return `<div class="tip"><svg class="ico" viewBox="0 0 24 24"><path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4.2M12 16.6v.1"/></svg><span>${text}</span></div>`;
  }

  /* ------------------------------------------------------------- calibrate */

  function renderCalibrate() {
    const CARD_MIN = 140;
    const CARD_MAX = 620;
    const nativeW = CARD_MM / MM_PER_PX_FALLBACK;
    let want = config.cardWidthPx || Math.round(nativeW);
    let cardW = want;

    stage.innerHTML = `
      <div class="stage-title">${t("calib.title")}</div>
      <p class="stage-sub">${t("calib.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel">
          <div class="calib-stage">
            <div class="calib-visual">
              <div style="display: flex; gap: 8px; margin-bottom: 12px; justify-content: center; width: 100%;">
                <button type="button" id="btnModeCard" class="btn btn-quiet btn-xs" style="border: 2px solid var(--lab-accent);">${t("calib.modeCard")}</button>
                <button type="button" id="btnModeRuler" class="btn btn-quiet btn-xs" style="border: 1px solid transparent;">${t("calib.modeRuler")}</button>
              </div>
              <div class="calib-card-wrap" id="calibCardWrap" style="display:flex; align-items:center; justify-content:center;"><div class="calib-card" id="calibCard">
                <span class="cc-strip"></span>
                <span class="cc-chip"></span>
                <span class="cc-label">${t("calib.modeId1")}</span>
              </div></div>
              <div id="calibRuler" style="display:none; height: 32px; border-top: 2px solid var(--lab-accent); border-left: 2px solid var(--lab-accent); border-right: 2px solid var(--lab-accent); position: relative;">
                <div style="position: absolute; left: 0; right: 0; top: 0; height: 10px; background-image: linear-gradient(to right, var(--lab-accent) 2px, transparent 2px); background-repeat: repeat-x;" id="rulerTicks"></div>
              </div>
              <p class="cc-hint" id="calibHint">${t("calib.cardHint")}</p>
              <p style="font-size: 13px; color: var(--text-3); margin-top: 6px; text-align: center;">${t("calib.privacyNote")}</p>
            </div>
            <div>
              <label class="panel-title" id="calibRangeLabel" for="calibRange" style="display:block; cursor:pointer;">${t("calib.slider")}</label>
              <div class="slider-row">
                <input type="range" id="calibRange" min="${CARD_MIN}" max="${CARD_MAX}" step="1" value="${cardW}" aria-label="${t("calib.slider")}">
                <span class="slider-val" id="calibVal"></span>
              </div>
            </div>
            <p class="stage-sub calib-note" id="calibNote" hidden>${t("calib.tooNarrow")}</p>
            <p class="stage-sub" id="calibHold">${t("calib.hold")}</p>
          </div>
        </div>
        <div class="stage-panel">
          <div class="panel-title">${t("how.kicker")}</div>
          <div class="tips">
            ${tip(t("calib.tip1"))}
            ${tip(t("calib.tip2"))}
            ${tip(t("calib.tip3"))}
          </div>
          <div class="panel-title" style="margin-top:24px">${t("calib.distanceTitle")}</div>
          <p class="stage-sub" style="margin-bottom:14px">${t("calib.distanceSub")}</p>
          <div class="distance-opts">
            <button type="button" class="dist-opt" data-dist="3">
              <b>${t("calib.dist3")}</b><span>${t("calib.dist3note")}</span>
            </button>
            <button type="button" class="dist-opt" data-dist="6">
              <b>${t("calib.dist6")}</b><span>${t("calib.dist6note")}</span>
            </button>
            <button type="button" class="dist-opt" data-dist="5">
              <b>${t("calib.dist5")}</b><span>${t("calib.dist5note")}</span>
            </button>
          </div>
        </div>
      </div></details>`;

    const cardWrap = stage.querySelector("#calibCardWrap");
    const cardEl = stage.querySelector("#calibCard");
    const rulerEl = stage.querySelector("#calibRuler");
    const ticksEl = stage.querySelector("#rulerTicks");
    const btnCard = stage.querySelector("#btnModeCard");
    const btnRuler = stage.querySelector("#btnModeRuler");
    const hintEl = stage.querySelector("#calibHint");
    const holdEl = stage.querySelector("#calibHold");
    const range = stage.querySelector("#calibRange");
    const valEl = stage.querySelector("#calibVal");
    const rangeLabel = stage.querySelector("#calibRangeLabel");
    const visual = stage.querySelector(".calib-visual");
    const noteEl = stage.querySelector("#calibNote");

    let mode = 'card';
    const RULER_MM = 50;

    on(btnCard, "click", () => {
      mode = 'card';
      btnCard.style.border = "2px solid var(--lab-accent)";
      btnRuler.style.border = "1px solid transparent";
      cardWrap.style.display = "flex";
      cardEl.style.display = "grid";
      rulerEl.style.display = "none";
      hintEl.textContent = t("calib.cardHint");
      holdEl.textContent = t("calib.hold");
      if (rangeLabel) rangeLabel.textContent = t("calib.slider");
      lastMax = 0;
      fit();
    });

    on(btnRuler, "click", () => {
      mode = 'ruler';
      btnRuler.style.border = "2px solid var(--lab-accent)";
      btnCard.style.border = "1px solid transparent";
      cardWrap.style.display = "none";
      cardEl.style.display = "none";
      rulerEl.style.display = "block";
      hintEl.textContent = t("calib.rulerHint");
      holdEl.textContent = t("calib.rulerHold");
      if (rangeLabel) rangeLabel.textContent = t("calib.rulerScale");
      lastMax = 0;
      fit();
    });

    const paint = () => {
      if (mode === 'card') {
        const cs = getComputedStyle(visual);
        const pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        const avail = Math.floor(visual.clientWidth - pad);
        const ch = Math.round(cardW * (53.98 / CARD_MM));
        if (cardW > avail) {
          cardWrap.style.width = ch + "px";
          cardWrap.style.height = cardW + "px";
          cardEl.style.width = cardW + "px";
          cardEl.style.height = ch + "px";
          cardEl.style.transform = "rotate(90deg)";
        } else {
          cardWrap.style.width = cardW + "px";
          cardWrap.style.height = ch + "px";
          cardEl.style.width = cardW + "px";
          cardEl.style.height = ch + "px";
          cardEl.style.transform = "none";
        }
        valEl.textContent = Math.round((cardW / nativeW) * 100) + "%";
      } else {
        const rulerW = cardW * (RULER_MM / CARD_MM);
        rulerEl.style.width = rulerW + "px";
        ticksEl.style.backgroundSize = (rulerW / 5) + "px 10px";
        valEl.textContent = Math.round((rulerW / (RULER_MM / MM_PER_PX_FALLBACK)) * 100) + "%";
      }
    };

    /* The card is drawn at true size, so it has to be capped at whatever the
       panel can actually show - otherwise it runs off the side of a phone and
       the user calibrates against a clipped outline. */
    const maxCard = () => {
      const cs = getComputedStyle(visual);
      const pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const avail = Math.floor(visual.clientWidth - pad);
      let limit = avail;
      if (mode === 'ruler') limit = Math.floor(avail * (CARD_MM / RULER_MM));
      else limit = Math.floor(avail * (CARD_MM / 53.98));
      return Math.max(CARD_MIN, Math.min(CARD_MAX, limit || CARD_MIN));
    };

    let lastMax = 0;
    const fit = () => {
      const mx = maxCard();
      if (mx === lastMax) return;
      lastMax = mx;
      range.max = String(mx);
      cardW = Math.max(CARD_MIN, Math.min(want, mx));
      range.value = String(cardW);
      paint();
      noteEl.hidden = mx >= nativeW;
    };
    fit();

    on(range, "input", () => {
      want = Number(range.value);
      cardW = want;
      paint();
    });

    on(window, "resize", fit);
    if (typeof ResizeObserver === "function") {
      const ro = new ResizeObserver(fit);
      ro.observe(visual);
      cleanups.push(() => ro.disconnect());
    }
    /* Belt and braces: an embedded/zoomed viewport can change the layout width
       without delivering resize or ResizeObserver promptly, which would leave
       the card drawn wider than its panel. fit() is two cheap reads, and it
       early-returns unless the maximum actually changed. */
    const watch = setInterval(fit, 400);
    cleanups.push(() => clearInterval(watch));

    const distBtns = [...stage.querySelectorAll("[data-dist]")];
    const paintDist = () => distBtns.forEach((b) => b.classList.toggle("is-on", Number(b.dataset.dist) === config.distanceM));
    paintDist();
    distBtns.forEach((b) =>
      on(b, "click", () => {
        config.distanceM = Number(b.dataset.dist);
        paintDist();
      })
    );

    setFoot(`
      <span class="trial-counter">${config.calibrated ? t("calib.locked") : t("lab.ready")}</span>
      <button class="btn btn-soft btn-sm" data-act="lock">${t("calib.lockIn")}</button>
    `);
    on(foot.querySelector('[data-act="lock"]'), "click", () => {
      fit();
      config.cardWidthPx = cardW;
      config.mmPerPx = CARD_MM / cardW;
      config.calibrated = true;
      saveProfile(config);
      status(t("calib.locked"));
      go(single ? single.check : "distance");
    });
  }

  /* -------------------------------------------------------------- distance */

  async function renderDistance() {
    const my = token;
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    stage.innerHTML = `
      <div class="stage-title">${t("checks.distance.name")}</div>
      <p class="stage-sub">${t("test.eyeSub")}</p>
      <div id="distBody" style="margin-top:24px"></div></details>`;
    const body = stage.querySelector("#distBody");
    navFoot({ next: false });

    for (const eye of ["right", "left", "both"]) {
      if (my !== token) return;
      await coverScreen(body, eye, dist);
      if (my !== token) return;
      results[eye] = await runAcuityRun(body, eye, mmPerPx, dist, my);
      if (my !== token) return;
      saveResults(results);
    }
    go(single ? "results" : "tumbling");
  }

  /* Sivtsev Cyrillic chart: same adaptive ladder and answer-pad machinery as
     the Snellen distance run, but with Cyrillic triples and an on-screen
     Cyrillic pool, so no hardware Cyrillic keyboard is ever required. */
  async function renderSivtsev() {
    const my = token;
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    stage.innerHTML = `
      <div class="stage-title">${t("checks.sivtsev.name")}</div>
      <p class="stage-sub">${t("test.eyeSub")}</p>
      <div id="distBody" style="margin-top:24px"></div></details>`;
    const body = stage.querySelector("#distBody");
    navFoot({ next: false });

    results.sivtsev = results.sivtsev || { right: null, left: null, both: null };
    for (const eye of ["right", "left", "both"]) {
      if (my !== token) return;
      await coverScreen(body, eye, dist);
      if (my !== token) return;
      results.sivtsev[eye] = await runAcuityRun(body, eye, mmPerPx, dist, my, SIVTSEV_LINES, SIVTSEV_POOL);
      if (my !== token) return;
      saveResults(results);
    }
    go("results");
  }

  function coverScreen(body, eye, dist) {
    return new Promise((resolve) => {
      const label = eye === "right" ? t("test.coverRight") : eye === "left" ? t("test.coverLeft") : t("test.bothEyes");
      const distLabel = dist === 6 ? t("calib.dist6") : dist === 5 ? t("calib.dist5") : t("calib.dist3");
      body.innerHTML = `
        <div class="eye-cover">
          <span class="eye-badge">${label}</span>
          <p class="stage-sub" style="max-width:52ch;margin:0 auto">${t("test.coverHint")}</p>
          <p class="trial-counter">${distLabel} &middot; ${config.calibrated ? t("hero.calibrated") : t("calib.title")}</p>
          <div><button class="btn btn-soft" data-act="go">${t("test.getReady")}</button></div>
        </div>`;
      const btn = body.querySelector('[data-act="go"]');
      const handler = () => resolve(true);
      on(btn, "click", handler);
    });
  }

  async function runAcuityRun(body, eye, mmPerPx, dist, my, lines = TEST_LINES, pool = ANSWER_POOL) {
    const ladder = [200, 100, 70, 50, 40, 30, 25, 20];
    let best = null;
    let index = 0;
    let retry = false;
    let guard = 0;

    while (index < ladder.length && guard < 16) {
      if (my !== token) return best;
      guard++;
      const den = ladder[index];
      const letters = shuffled(lines[den]);
      const correct = await presentLine(body, den, letters, mmPerPx, dist, index, ladder.length, eye, my, pool);
      if (my !== token) return best;
      if (correct) {
        best = den;
        index++;
        retry = false;
      } else if (retry) {
        break;
      } else {
        retry = true;
      }
    }
    return best;
  }

  function presentLine(body, den, letters, mmPerPx, dist, index, total, eye, my, pool = ANSWER_POOL) {
    return new Promise((resolve) => {
      const height = lineHeightPx(den, dist, mmPerPx);
      const eyeLabel = eye === "right" ? t("results.eyeRight") : eye === "left" ? t("results.eyeLeft") : t("results.both");
      body.innerHTML = `
        <div class="progress-line"><i style="width:${Math.round(((index + 1) / total) * 100)}%"></i></div>
        <div class="eye-badge" style="margin-bottom:14px">${eyeLabel} &middot; ${t("test.line", { n: index + 1 })}</div>
        <div class="chart-view" id="chartView"></div>
        <div id="answerArea" style="margin-top:20px"></div></details>`;
      const chart = body.querySelector("#chartView");
      const area = body.querySelector("#answerArea");

      /* A row that has to be scrolled is no longer a "read the line" test, and
         the big lines at 3 m are wider than a phone. So show only as many
         letters as fit at their true size - never fewer than one. */
      const cpad = (() => {
        const cs = getComputedStyle(chart);
        return parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      })();
      const avail = Math.max(0, chart.clientWidth - cpad);
      letters = letters.slice(0, fitCount(avail, height, letters.length));
      chart.innerHTML = lineSVG(letters, height);

      let remaining = READ_SECONDS;

      area.innerHTML = `<div class="eye-cover">
        <p class="stage-sub">${t("test.linePrompt")}</p>
        <p class="trial-counter" id="readTick"></p>
      </div>`;
      const tick = area.querySelector("#readTick");
      const showTick = () => {
        tick.textContent = `${acuityLabel(den)} \u00b7 ${remaining}s`;
      };
      showTick();
      const iv = setInterval(() => {
        if (my !== token) {
          clearInterval(iv);
          return;
        }
        remaining -= 1;
        if (remaining <= 0) {
          clearInterval(iv);
          showPad();
        } else {
          showTick();
        }
      }, 1000);
      cleanups.push(() => clearInterval(iv));

      function showPad() {
        chart.classList.add("is-blanked");
        chart.innerHTML = "";
        let entered = [];

        area.innerHTML = `
          <div style="display:grid;gap:16px;justify-items:center">
            <div class="answer-slots" id="slots">
              ${letters.map(() => '<span class="slot"></span>').join("")}
            </div>
            <div class="answer-pad" id="pad">
              ${pool.map((ch) => `<button type="button" class="key-btn" data-key="${ch}">${ch}</button>`).join("")}
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
              <button class="btn btn-ghost btn-sm" data-act="clear">${t("test.clear")}</button>
              <button class="btn btn-ghost btn-sm" data-act="blind">${t("test.couldntRead")}</button>
            </div>
            <p class="stage-sub" id="verdictNote" style="text-align:center;min-height:1.4em"></p>
          </div>`;

        const slots = [...area.querySelectorAll(".slot")];
        const pad = area.querySelector("#pad");
        const note = area.querySelector("#verdictNote");

        const paint = () => {
          slots.forEach((s, i) => {
            s.textContent = entered[i] || "";
            s.classList.toggle("is-filled", Boolean(entered[i]));
          });
          pad.querySelectorAll(".key-btn").forEach((b) => {
            b.classList.toggle("is-used", entered.includes(b.dataset.key));
          });
        };

        let settled = false;
        const finish = (ok) => {
          if (settled) return;
          settled = true;
          setTimeout(() => resolve(ok), ok ? 620 : 1150);
        };

        pad.querySelectorAll(".key-btn").forEach((btn) =>
          on(btn, "click", () => {
            if (entered.length >= letters.length || entered.includes(btn.dataset.key)) return;
            entered.push(btn.dataset.key);
            paint();
            if (entered.length === letters.length) setTimeout(grade, 280);
          })
        );
        on(area.querySelector('[data-act="clear"]'), "click", () => {
          entered = [];
          paint();
        });
        on(area.querySelector('[data-act="blind"]'), "click", () => {
          slots.forEach((s, i) => {
            s.textContent = letters[i];
            s.classList.add("is-wrong");
          });
          note.textContent = t("test.wrongAnswer", { a: letters.join(" ") });
          note.style.color = "#ef7a86";
          finish(false);
        });

        function grade() {
          const ok = entered.every((c, i) => c === letters[i]);
          slots.forEach((s, i) => {
            s.textContent = letters[i];
            s.classList.toggle("is-right", entered[i] === letters[i]);
            s.classList.toggle("is-wrong", entered[i] !== letters[i]);
          });
          note.textContent = ok ? t("test.correct") : t("test.wrongAnswer", { a: letters.join(" ") });
          note.style.color = ok ? "#4fd39a" : "#ef7a86";
          finish(ok);
        }
      }
    });
  }

  /* -------------------------------------------------------------- tumbling */

  function renderTumbling() {
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    const sizes = [70, 50, 40, 30, 25, 20, 20, 20];
    const dirs = ["right", "down", "left", "up"];
    const rotation = { right: 0, down: 90, left: 180, up: 270 };
    const paths = {
      up: "M5 15l7-7 7 7",
      down: "M5 9l7 7 7-7",
      left: "M15 5l-7 7 7 7",
      right: "M9 5l7 7-7 7",
    };
    let trial = 0;
    let correct = 0;
    let bestDen = null;
    let current = "right";
    let locked = false;

    stage.innerHTML = `
      <div class="stage-title">${t("tumbling.title")}</div>
      <p class="stage-sub">${t("tumbling.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel">
          <div class="e-view" id="eView"></div>
        </div>
        <div class="stage-panel">
          <div class="panel-title">${t("tumbling.prompt")}</div>
          <div class="arrows">
            <button class="arrow-btn" data-dir="up" aria-label="up"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.up}"/></svg></button>
            <button class="arrow-btn" data-dir="left" aria-label="left"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.left}"/></svg></button>
            <span class="arrow-hub" aria-hidden="true"><svg class="ico" viewBox="0 0 24 24"><path d="M12 7v10M7 12h10"/></svg></span>
            <button class="arrow-btn" data-dir="right" aria-label="right"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.right}"/></svg></button>
            <button class="arrow-btn" data-dir="down" aria-label="down"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.down}"/></svg></button>
          </div>
          <p class="trial-counter" id="tumbleCount" style="text-align:center;margin-top:16px"></p>
        </div>
      </div></details>`;
    const view = stage.querySelector("#eView");
    const countEl = stage.querySelector("#tumbleCount");

    const next = () => {
      if (trial >= sizes.length) {
        results.tumbling = { correct, total: sizes.length, best: bestDen };
        saveResults(results);
        status(`${correct} / ${sizes.length}`);
        go(single ? "results" : "color");
        return;
      }
      const den = sizes[trial];
      current = dirs[Math.floor(Math.random() * dirs.length)];
      view.innerHTML = tumblingESVG(lineHeightPx(den, dist, mmPerPx), rotation[current]);
      countEl.textContent = `${t("tumbling.of", { n: trial + 1, total: sizes.length })} \u00b7 ${acuityLabel(den)}`;
    };

    const answer = (dir) => {
      if (locked || trial >= sizes.length) return;
      locked = true;
      const den = sizes[trial];
      const ok = dir === current;
      if (ok) {
        correct++;
        if (bestDen == null || den < bestDen) bestDen = den;
      }
      trial++;
      const btn = stage.querySelector(`.arrow-btn[data-dir="${dir}"]`);
      const currentBtn = stage.querySelector(`.arrow-btn[data-dir="${current}"]`);
      if (btn) btn.style.background = ok ? "#dcfce7" : "#fee2e2";
      if (btn) btn.style.color = ok ? "#166534" : "#991b1b";
      if (!ok && currentBtn) {
        currentBtn.style.background = "#dcfce7";
        currentBtn.style.color = "#166534";
      }
      view.style.transition = "opacity .15s";
      view.style.opacity = ok ? "1" : ".5";
      setTimeout(() => {
        stage.querySelectorAll(".arrow-btn").forEach(b => {
          b.style.background = "";
          b.style.color = "";
        });
        view.style.opacity = "1";
        locked = false;
        next();
      }, 500);
    };

    stage.querySelectorAll(".arrow-btn").forEach((btn) => on(btn, "click", () => answer(btn.dataset.dir)));
    on(document, "keydown", (e) => {
      const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
      if (map[e.key]) {
        e.preventDefault();
        answer(map[e.key]);
      }
    });

    next();
    navFoot({ next: false });
  }

  /* ---------------------------------------------------------------- landolt */

  function renderLandolt() {
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    const sizes = [70, 50, 40, 30, 25, 20, 20, 20];
    const dirs = ["up", "right", "down", "left"];
    // Outer rotation 0 centres the ring gap at the top (see landoltCSVG).
    const rotation = { up: 0, right: 90, down: 180, left: 270 };
    const paths = {
      up: "M5 15l7-7 7 7",
      down: "M5 9l7 7 7-7",
      left: "M15 5l-7 7 7 7",
      right: "M9 5l7 7-7 7",
    };
    let trial = 0;
    let correct = 0;
    let bestDen = null;
    let current = "up";
    let locked = false;

    stage.innerHTML = `
      <div class="stage-title">${t("landolt.title")}</div>
      <p class="stage-sub">${t("landolt.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel">
          <div class="e-view" id="landoltView"></div>
        </div>
        <div class="stage-panel">
          <div class="panel-title">${t("landolt.prompt")}</div>
          <div class="arrows">
            <button class="arrow-btn" data-dir="up" aria-label="up"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.up}"/></svg></button>
            <button class="arrow-btn" data-dir="left" aria-label="left"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.left}"/></svg></button>
            <span class="arrow-hub" aria-hidden="true"><svg class="ico" viewBox="0 0 24 24"><path d="M12 7v10M7 12h10"/></svg></span>
            <button class="arrow-btn" data-dir="right" aria-label="right"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.right}"/></svg></button>
            <button class="arrow-btn" data-dir="down" aria-label="down"><svg class="ico" viewBox="0 0 24 24"><path d="${paths.down}"/></svg></button>
          </div>
          <p class="trial-counter" id="landoltCount" style="text-align:center;margin-top:16px"></p>
        </div>
      </div></details>`;
    const view = stage.querySelector("#landoltView");
    const countEl = stage.querySelector("#landoltCount");

    const next = () => {
      if (trial >= sizes.length) {
        results.landolt = { correct, total: sizes.length, best: bestDen };
        saveResults(results);
        status(`${correct} / ${sizes.length}`);
        go("results");
        return;
      }
      const den = sizes[trial];
      current = dirs[Math.floor(Math.random() * dirs.length)];
      view.innerHTML = landoltCSVG(lineHeightPx(den, dist, mmPerPx), rotation[current]);
      countEl.textContent = `${t("landolt.of", { n: trial + 1, total: sizes.length })} \u00b7 ${acuityNotations(den)}`;
    };

    const answer = (dir) => {
      if (locked || trial >= sizes.length) return;
      locked = true;
      const den = sizes[trial];
      const ok = dir === current;
      if (ok) {
        correct++;
        if (bestDen == null || den < bestDen) bestDen = den;
      }
      trial++;
      const btn = stage.querySelector(`.arrow-btn[data-dir="${dir}"]`);
      const currentBtn = stage.querySelector(`.arrow-btn[data-dir="${current}"]`);
      if (btn) btn.style.background = ok ? "#dcfce7" : "#fee2e2";
      if (btn) btn.style.color = ok ? "#166534" : "#991b1b";
      if (!ok && currentBtn) {
        currentBtn.style.background = "#dcfce7";
        currentBtn.style.color = "#166534";
      }
      view.style.transition = "opacity .15s";
      view.style.opacity = ok ? "1" : ".5";
      setTimeout(() => {
        stage.querySelectorAll(".arrow-btn").forEach(b => {
          b.style.background = "";
          b.style.color = "";
        });
        view.style.opacity = "1";
        locked = false;
        next();
      }, 500);
    };

    stage.querySelectorAll(".arrow-btn").forEach((btn) => on(btn, "click", () => answer(btn.dataset.dir)));
    on(document, "keydown", (e) => {
      const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
      if (map[e.key]) {
        e.preventDefault();
        answer(map[e.key]);
      }
    });

    next();
    navFoot({ next: false });
  }

  /* ----------------------------------------------------------------- colour */

  function renderColor() {
    let index = 0;
    let correct = 0;
    let locked = false;

    stage.innerHTML = `
      <div class="stage-title">${t("color.title")}</div>
      <p class="stage-sub">${t("color.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel" style="display:grid;place-items:center">
          <div class="plate-wrap">
            <canvas class="plate-canvas" id="plateCanvas" width="340" height="340" role="img" aria-label="colour plate"></canvas>
          </div>
        </div>
        <div class="stage-panel">
          <div class="panel-title" id="plateCount"></div>
          <p class="stage-sub" style="margin-bottom:16px">${t("color.prompt")}</p>
          <div class="plate-input">
            <input id="plateInput" inputmode="numeric" autocomplete="off" maxlength="2" placeholder="${t("color.placeholder")}" aria-label="${t("color.prompt")}">
            <button class="btn btn-soft btn-sm" data-act="check">${t("color.submit")}</button>
          </div>
          <div style="margin-top:14px">
            <button class="btn btn-quiet btn-sm" data-act="blind">${t("color.noSee")}</button>
          </div>
          <p class="stage-sub" id="plateNote" style="margin-top:16px;min-height:1.4em"></p>
        </div>
      </div></details>`;
    const canvas = stage.querySelector("#plateCanvas");
    const input = stage.querySelector("#plateInput");
    const note = stage.querySelector("#plateNote");
    const countEl = stage.querySelector("#plateCount");

    const show = () => {
      if (index >= COLOR_PLATES.length) {
        results.color = { correct, total: COLOR_PLATES.length };
        saveResults(results);
        status(`${correct} / ${COLOR_PLATES.length}`);
        go(single ? "results" : "peripheral");
        return;
      }
      locked = false;
      drawPlate(canvas, { ...COLOR_PLATES[index], seed: 900 + index * 37 });
      input.value = "";
      note.textContent = "";
      countEl.textContent = t("color.of", { n: index + 1, total: COLOR_PLATES.length });
    };

    const submit = (value) => {
      if (locked) return;
      locked = true;
      const expected = COLOR_PLATES[index].digit;
      const ok = String(value).replace(/\D/g, "") === expected;
      if (ok) correct++;
      note.textContent = ok ? t("color.correct") : t("color.wrongNum", { a: expected });
      note.style.color = ok ? "#4fd39a" : "#ef7a86";
      index++;
      setTimeout(show, 950);
    };

    on(stage.querySelector('[data-act="check"]'), "click", () => submit(input.value));
    on(stage.querySelector('[data-act="blind"]'), "click", () => submit("-"));
    on(input, "keydown", (e) => {
      if (e.key === "Enter") submit(input.value);
    });

    show();
    navFoot({ next: false });
  }

  /* ------------------------------------------------------------- peripheral */

  function renderPeripheral() {
    const my = token;
    let phase = 0;
    let trials = buildTrials(60, 8);
    let index = 0;
    let hits = 0;
    let total = 0;
    let bestAngle = 0;
    let awaiting = false;
    let running = false;
    const missed = [];

    stage.innerHTML = `
      <div class="stage-title">${t("peripheral.title")}</div>
      <p class="stage-sub">${t("peripheral.sub")}</p>
      <div class="field-stage">
        <div class="field-screen" id="fieldScreen">
          <div class="fix-cross" aria-hidden="true"></div>
          <div class="fix-cross h" aria-hidden="true"></div>
          <div class="fix-dot" aria-hidden="true"></div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between">
          <p class="stage-sub" style="max-width:52ch">${t("peripheral.prompt")}</p>
          <div style="display:flex;gap:10px;align-items:center">
            <span class="trial-counter" id="fieldCount"></span>
            <button class="btn btn-soft" data-act="start">${t("peripheral.start")}</button>
          </div>
        </div>
      </div></details>`;
    const screen = stage.querySelector("#fieldScreen");
    const countEl = stage.querySelector("#fieldCount");
    const startBtn = stage.querySelector('[data-act="start"]');

    const finish = () => {
      results.peripheral = { hits, total, angle: bestAngle || 0, missed: missed.slice() };
      saveResults(results);
      status(`${hits} / ${total}`);
      go(single ? "results" : "near");
    };

    const runTrial = () => {
      if (my !== token) return;
      if (index >= trials.length) {
        if (phase === 0 && hits >= 7) {
          phase = 1;
          trials = buildTrials(75, 4);
          index = 0;
          bestAngle = 60;
        } else {
          if (phase === 1 && hits >= 3) bestAngle = 75;
          finish();
          return;
        }
      }
      const trial = trials[index];
      countEl.textContent = t("peripheral.of", { n: index + 1, total: trials.length });
      awaiting = false;
      setTimeout(() => {
        if (my !== token) return;
        const rect = screen.getBoundingClientRect();
        const rad = (trial.dir * Math.PI) / 180;
        const half = Math.min(rect.width, rect.height) / 2 - 20;
        const reach = half * (trial.angle / 90);
        const x = rect.width / 2 + Math.cos(rad) * reach;
        const y = rect.height / 2 + Math.sin(rad) * reach;
        const dot = document.createElement("div");
        dot.className = "field-target";
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        screen.appendChild(dot);
        awaiting = true;
        setTimeout(() => {
          if (dot.parentNode) dot.remove();
          if (awaiting) {
            awaiting = false;
            missed.push(trial.dir);
            total++;
            index++;
            setTimeout(runTrial, 420);
          }
        }, 1100);
      }, 700 + Math.random() * 1500);
    };

    const respond = () => {
      if (!awaiting) return;
      awaiting = false;
      hits++;
      total++;
      const dot = screen.querySelector(".field-target");
      if (dot) dot.remove();
      index++;
      setTimeout(runTrial, 420);
    };

    on(startBtn, "click", () => {
      if (running) return;
      running = true;
      startBtn.disabled = true;
      runTrial();
    });
    on(screen, "click", respond);
    on(document, "keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        respond();
      }
    });

    countEl.textContent = t("peripheral.of", { n: 1, total: trials.length });
    navFoot({ next: false });
  }

  function buildTrials(angle, count) {
    const out = [];
    const offset = Math.random() * 45;
    for (let i = 0; i < count; i++) {
      out.push({ angle, dir: (360 / count) * i + offset + (Math.random() * 22 - 11) });
    }
    return out;
  }

  /* ------------------------------------------------------------------- near */

  function renderNear() {
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    stage.innerHTML = `
      <div class="stage-title">${t("near.title")}</div>
      <p class="stage-sub">${t("near.sub")}</p>
      <div style="margin-top:22px">
        <div class="near-card" id="nearCard">
          ${NEAR_LINES.map((line, i) => `
            <button type="button" class="near-line" data-line="${i}">
              <span class="near-tag">${acuityLabel(line.denominator)}</span>
              <span class="near-text" style="font-size:${nearFontPx(line.denominator, mmPerPx).toFixed(1)}px">${line.text}</span>
            </button>`).join("")}
        </div>
      </div>
      <p class="trial-counter" style="text-align:center;margin-top:14px">${t("near.prompt")}</p>
    `;
    stage.querySelectorAll("[data-line]").forEach((btn) =>
      on(btn, "click", () => {
        const line = NEAR_LINES[Number(btn.dataset.line)];
        results.near = line.denominator;
        saveResults(results);
        status(acuityLabel(line.denominator));
        go(single ? "results" : "contrast");
      })
    );
    setFoot(`
      <button class="btn btn-quiet btn-sm" data-act="skip">${t("near.cantRead")}</button>
      <span class="trial-counter">${t("near.of", { n: 1, total: NEAR_LINES.length })}</span>
      <span></span>
    `);
    on(foot.querySelector('[data-act="skip"]'), "click", () => {
      results.near = 200;
      saveResults(results);
      go(single ? "results" : "contrast");
    });
  }

  /* --------------------------------------------------------------- contrast */

  /**
   * Letters at a fixed size with a falling Michelson contrast. Unlike the
   * acuity ladder the size never changes, so a low score points at contrast
   * sensitivity rather than resolution.
   */
  function renderContrast() {
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    const height = lineHeightPx(40, dist, mmPerPx);
    let index = 0;
    let correct = 0;
    let lowest = null;
    let locked = false;
    let letters = [];

    stage.innerHTML = `
      <div class="stage-title">${t("contrast.title")}</div>
      <p class="stage-sub">${t("contrast.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel" style="display:grid;place-items:center">
          <div class="contrast-view" id="contrastView"></div>
        </div>
        <div class="stage-panel">
          <div class="panel-title" id="contrastCount"></div>
          <p class="stage-sub" style="margin-bottom:16px">${t("contrast.prompt")}</p>
          <div class="plate-input">
            <input id="contrastInput" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" maxlength="3" placeholder="${t("contrast.placeholder")}" aria-label="${t("contrast.prompt")}">
            <button class="btn btn-soft btn-sm" data-act="check">${t("contrast.submit")}</button>
          </div>
          <div style="margin-top:14px">
            <button class="btn btn-quiet btn-sm" data-act="blind">${t("contrast.noSee")}</button>
          </div>
          <p class="stage-sub" id="contrastNote" style="margin-top:16px;min-height:1.4em"></p>
        </div>
      </div></details>`;
    const view = stage.querySelector("#contrastView");
    const input = stage.querySelector("#contrastInput");
    const note = stage.querySelector("#contrastNote");
    const countEl = stage.querySelector("#contrastCount");

    const finish = () => {
      results.contrast = { lowest: lowest == null ? CONTRAST_LEVELS[0] : lowest, levels: CONTRAST_LEVELS.length, correct };
      saveResults(results);
      status(`${t("contrast.lowest")}: ${results.contrast.lowest}%`);
      go(single ? "results" : "astigmatism");
    };

    const show = () => {
      if (index >= CONTRAST_LEVELS.length) {
        finish();
        return;
      }
      locked = false;
      const level = CONTRAST_LEVELS[index];
      /* Same rule as the acuity chart: never show a line that has to be
         clipped. The view stretches, so its clientWidth is the real space. */
      const pad = (() => {
        const cs = getComputedStyle(view);
        return parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      })();
      const avail = Math.max(0, view.clientWidth - pad);
      letters = shuffled(TEST_LINES[40]).slice(0, fitCount(avail, height, 3));
      const grey = contrastInk(level);
      view.innerHTML = lineSVG(letters, height, { ink: `rgb(${grey},${grey},${grey})` });
      input.value = "";
      note.textContent = "";
      note.style.color = "";
      countEl.textContent = `${t("contrast.levelPct", { a: level })} \u00b7 ${t("contrast.of", { n: index + 1, total: CONTRAST_LEVELS.length })}`;
      input.focus();
    };

    const miss = (delay) => {
      note.textContent = t("contrast.wrong", { a: letters.join(" ") });
      note.style.color = "#ef7a86";
      index = CONTRAST_LEVELS.length;
      setTimeout(() => {
        finish();
      }, delay);
    };

    const submit = (value) => {
      if (locked) return;
      const guess = String(value).toUpperCase().replace(/[^A-Z]/g, "");
      if (!guess) return;
      locked = true;
      const level = CONTRAST_LEVELS[index];
      if (guess === letters.join("")) {
        correct++;
        lowest = level;
        note.textContent = t("contrast.correct");
        note.style.color = "#4fd39a";
        index++;
        setTimeout(show, 780);
      } else {
        miss(1500);
      }
    };

    on(stage.querySelector('[data-act="check"]'), "click", () => submit(input.value));
    on(stage.querySelector('[data-act="blind"]'), "click", () => {
      if (locked) return;
      locked = true;
      miss(1500);
    });
    on(input, "keydown", (e) => {
      if (e.key === "Enter") submit(input.value);
    });

    show();
    navFoot({ next: false });
  }

  /* ------------------------------------------------------------ astigmatism */

  /**
   * The dial. A spherical cornea spreads every meridian equally, so nothing
   * stands out; astigmatism leaves one meridian crisp and its perpendicular
   * blurred. We ask which spoke stands out and turn that into an axis.
   */
  function renderAstigmatism() {
    const radius = 128;
    const inner = 30;
    const spokes = DIAL_ANGLES.map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const ux = Math.cos(rad);
      const uy = Math.sin(rad);
      const at = (r) => `${(150 + ux * r).toFixed(1)} ${(150 + uy * r).toFixed(1)}`;
      const [ax, ay] = at(radius).split(" ");
      const [bx, by] = at(-radius).split(" ");
      const [hax, hay] = at(inner).split(" ");
      const [hbx, hby] = at(radius).split(" ");
      const [hcx, hcy] = at(-inner).split(" ");
      const [hdx, hdy] = at(-radius).split(" ");
      return `<g class="dial-spoke" data-deg="${deg}">
        <line class="dial-visible" x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}"/>
        <line class="dial-hit" x1="${hax}" y1="${hay}" x2="${hbx}" y2="${hby}"/>
        <line class="dial-hit" x1="${hcx}" y1="${hcy}" x2="${hdx}" y2="${hdy}"/>
      </g>`;
    }).join("");

    stage.innerHTML = `
      <div class="stage-title">${t("astig.title")}</div>
      <p class="stage-sub">${t("astig.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel" style="display:grid;place-items:center">
          <svg class="dial-svg" viewBox="0 0 300 300" role="img" aria-label="${t("astig.title")}">
            <circle class="dial-rim" cx="150" cy="150" r="142"/>
            ${spokes}
            <circle class="dial-hub" cx="150" cy="150" r="7"/>
          </svg>
        </div>
        <div class="stage-panel">
          <div class="panel-title">${t("astig.prompt")}</div>
          <p class="stage-sub" style="margin-bottom:16px">${t("astig.pick")}</p>
          <button class="btn btn-quiet btn-sm" data-act="equal">${t("astig.equal")}</button>
          <p class="stage-sub" id="astigNote" style="margin-top:18px;min-height:1.4em"></p>
        </div>
      </div></details>`;

    const note = stage.querySelector("#astigNote");
    let settled = false;

    const pick = (deg) => {
      if (settled) return;
      settled = true;
      if (deg == null) {
        results.astigmatism = { blurred: null, axis: null };
        note.textContent = t("astig.equalNote");
        note.style.color = "#4fd39a";
      } else {
        const axis = axisFromBlurred(deg);
        results.astigmatism = { blurred: deg, axis };
        const g = stage.querySelector(`.dial-spoke[data-deg="${deg}"]`);
        if (g) g.classList.add("is-picked");
        note.textContent = `${t("astig.blurred")}: ${deg}\u00b0 \u00b7 ${t("astig.axis")}: ${axisLabel(axis)}`;
        note.style.color = "#e0a53a";
      }
      saveResults(results);
      status(t("astig.title"));
      setTimeout(() => go(single ? "results" : "refraction"), 1600);
    };

    stage.querySelectorAll(".dial-spoke").forEach((g) => on(g, "click", () => pick(Number(g.dataset.deg))));
    on(stage.querySelector('[data-act="equal"]'), "click", () => pick(null));
    navFoot({ next: false });
  }

  /* ------------------------------------------------------------- refraction */

  /** Three duochrome rounds, then the red/green balance becomes a tendency. */
  function renderRefraction() {
    const mmPerPx = config.mmPerPx || MM_PER_PX_FALLBACK;
    const dist = config.distanceM || 3;
    const dens = [40, 30, 25];
    const votes = [];
    let round = 0;
    let locked = false;

    stage.innerHTML = `
      <div class="stage-title">${t("refraction.title")}</div>
      <p class="stage-sub">${t("refraction.sub")}</p>
      <div class="duo-wrap" id="duoWrap"></div>
      <div class="duo-actions">
        <button class="btn btn-soft btn-sm" data-vote="red">${t("refraction.red")}</button>
        <button class="btn btn-soft btn-sm" data-vote="green">${t("refraction.green")}</button>
        <button class="btn btn-quiet btn-sm" data-vote="equal">${t("refraction.equal")}</button>
      </div>
      <p class="stage-sub duo-note" id="duoNote"></p>
    `;
    const wrap = stage.querySelector("#duoWrap");
    const note = stage.querySelector("#duoNote");

    const show = () => {
      if (round >= dens.length) {
        results.refraction = Object.assign(refractionRead(votes), { votes: votes.slice() });
        saveResults(results);
        status(t("refraction." + results.refraction.kind));
        go(single ? "results" : "stereo");
        return;
      }
      locked = false;
      note.textContent = "";
      const h = lineHeightPx(dens[round], dist, mmPerPx);
      wrap.innerHTML = `
        <div class="duo-head">${t("refraction.round", { n: round + 1, total: dens.length })} \u00b7 ${acuityLabel(dens[round])}</div>
        <div class="duo-row">
          <div class="duo-half duo-red"></div>
          <div class="duo-half duo-green"></div>
        </div></details>`;
      const halves = wrap.querySelectorAll(".duo-half");
      const cs = getComputedStyle(halves[0]);
      const avail = Math.max(60, halves[0].clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
      const letterW = h * (6 / 5);
      /* At the standard 3 m the line is physically wider than half a phone, so
         fewer letters are shown rather than letting the row overflow. */
      const letters = shuffled(TEST_LINES[dens[round]]).slice(0, Math.max(1, Math.min(3, Math.floor((avail + 3) / (letterW + 3)))));
      const fitGap = letters.length > 1 ? (avail - letters.length * letterW) / (letters.length - 1) : 0;
      const line = lineSVG(letters, h, { ink: "#0b0b0b", gapPx: Math.max(3, Math.min(h * 1.05, fitGap)) });
      halves.forEach((half) => {
        half.innerHTML = line;
      });
    };

    const vote = (kind) => {
      if (locked) return;
      locked = true;
      votes.push(kind);
      note.textContent = t(`refraction.${kind}Note`);
      round++;
      setTimeout(show, 900);
    };

    stage.querySelectorAll("[data-vote]").forEach((b) => on(b, "click", () => vote(b.dataset.vote)));
    show();
    navFoot({ next: false });
  }

  /* ------------------------------------------------------------------ stereo */

  /** Random-dot autostereogram with a hidden shape, plus a viewing-mode flip. */
  function renderStereo() {
    const shape = STEREO_SHAPES[Math.floor(Math.random() * STEREO_SHAPES.length)];
    const seed = Math.floor(Math.random() * 90000) + 1;
    let invert = false;
    let settled = false;

    stage.innerHTML = `
      <div class="stage-title">${t("stereo.title")}</div>
      <p class="stage-sub">${t("stereo.sub")}</p>
      <div class="stereo-wrap">
        <canvas class="stereo-canvas" id="stereoCanvas" role="img" aria-label="${t("stereo.title")}"></canvas>
        <p class="stage-sub stereo-how">${t("stereo.how")}</p>
      </div>
      <div class="stereo-answers">
        <div class="panel-title">${t("stereo.prompt")}</div>
        <div class="stereo-btns">
          ${STEREO_SHAPES.map((s) => `<button class="btn btn-soft btn-sm" data-shape="${s}">${t("stereo." + s)}</button>`).join("")}
          <button class="btn btn-quiet btn-sm" data-shape="none">${t("stereo.none")}</button>
        </div>
        <button class="btn btn-ghost btn-xs" data-act="flip">${t("stereo.flip")}</button>
        <p class="stage-sub stereo-tip">${t("stereo.tip")}</p>
        <p class="stage-sub" id="stereoNote" style="min-height:1.4em"></p>
      </div></details>`;
    const canvas = stage.querySelector("#stereoCanvas");
    const note = stage.querySelector("#stereoNote");
    const wrap = stage.querySelector(".stereo-wrap");

    const draw = () => {
      const avail = Math.max(240, Math.floor((wrap.clientWidth || 720) - 2));
      const width = Math.min(720, avail);
      const height = Math.round(width * (420 / 720));
      const sep = Math.min(118, Math.round(width / 3));
      const parallax = Math.round(sep * 0.36);
      drawStereogram(canvas, { shape, seed, invert, width, height, sep, parallax });
      canvas.style.height = "auto";
    };
    draw();
    on(window, "resize", draw);

    const answer = (choice) => {
      if (settled) return;
      settled = true;
      results.stereo = { seen: choice === shape, shape, answer: choice };
      saveResults(results);
      note.textContent = results.stereo.seen ? t("results.stereoSeen") : t("results.stereoNot");
      note.style.color = results.stereo.seen ? "#4fd39a" : "#e0a53a";
      setTimeout(() => go("results"), 1400);
    };

    stage.querySelectorAll("[data-shape]").forEach((b) => on(b, "click", () => answer(b.dataset.shape)));
    on(stage.querySelector('[data-act="flip"]'), "click", () => {
      invert = !invert;
      settled = false;
      note.textContent = "";
      draw();
    });
    navFoot({ next: false });
  }

  /* ---------------------------------------------------------------- results */

  function card(label, value, tone, note, small) {
    return `<div class="result-card${tone ? " rc-" + tone : ""}">
      <span class="rc-label">${label}</span>
      <span class="rc-value${small ? " rc-small" : ""}">${value}</span>
      ${note ? `<span class="rc-note">${note}</span>` : ""}
    </div>`;
  }

  function renderResults() {
    const verdict = overallVerdict(results);
    const acuity = (v) => (v == null ? t("results.notTested") : acuityNotations(v));
    const tone = (v) => (v == null ? null : v <= 40 ? "pass" : v <= 70 ? "warn" : "bad");

    const cards = [
      card(t("results.eyeRight"), acuity(results.right), tone(results.right), t("results.bench")),
      card(t("results.eyeLeft"), acuity(results.left), tone(results.left), t("results.bench")),
      card(t("results.both"), acuity(results.both), tone(results.both), t("results.bench")),
      card(
        t("results.color"),
        results.color ? `${results.color.correct}/${results.color.total}` : t("results.notTested"),
        results.color ? (results.color.correct >= 12 ? "pass" : results.color.correct >= 10 ? "warn" : "bad") : null,
        null
      ),
      card(
        t("results.peripheral"),
        results.peripheral ? `${results.peripheral.hits}/${results.peripheral.total}` : t("results.notTested"),
        results.peripheral ? (results.peripheral.hits / results.peripheral.total >= 0.85 ? "pass" : "warn") : null,
        results.peripheral && results.peripheral.angle ? `${results.peripheral.angle} ${t("peripheral.degrees")}` : null
      ),
      card(
        t("results.near"),
        results.near != null ? acuityLabel(results.near) : t("results.notTested"),
        tone(results.near),
        t("results.bench")
      ),
      card(
        t("results.tumbling"),
        results.tumbling ? `${results.tumbling.correct}/${results.tumbling.total}` : t("results.notTested"),
        results.tumbling ? (results.tumbling.correct / results.tumbling.total >= 0.75 ? "pass" : "warn") : null,
        null
      ),
      card(
        t("results.landolt"),
        results.landolt ? `${results.landolt.correct}/${results.landolt.total}` : t("results.notTested"),
        results.landolt ? (results.landolt.correct / results.landolt.total >= 0.75 ? "pass" : "warn") : null,
        null
      ),
      (() => {
        const s = results.sivtsev;
        if (!s) return card(t("results.sivtsev"), t("results.notTested"), null, null);
        const parts = [
          [t("results.eyeRight"), s.right],
          [t("results.eyeLeft"), s.left],
          [t("results.both"), s.both],
        ];
        const tested = parts.filter(([, v]) => v != null);
        const val = parts.map(([name, v]) => `${name[0]} ${acuityLabel(v)}`).join(" · ");
        const worst = tested.length ? Math.max(...tested.map(([, v]) => v)) : null;
        return card(t("results.sivtsev"), val, tone(worst), t("results.bench"));
      })(),
      card(
        t("results.contrast"),
        results.contrast ? `${results.contrast.lowest}%` : t("results.notTested"),
        results.contrast ? (results.contrast.lowest <= 5 ? "pass" : results.contrast.lowest <= 25 ? "warn" : "bad") : null,
        results.contrast ? t("contrast.lowest") : null
      ),
      card(
        t("results.astigmatism"),
        results.astigmatism
          ? results.astigmatism.axis == null
            ? t("results.astigNone")
            : axisLabel(results.astigmatism.axis)
          : t("results.notTested"),
        results.astigmatism ? (results.astigmatism.axis == null ? "pass" : "warn") : null,
        results.astigmatism && results.astigmatism.axis != null
          ? t("results.astigAxisTpl", { a: axisLabel(results.astigmatism.axis) })
          : null,
        results.astigmatism != null && results.astigmatism.axis == null
      ),
      card(
        t("results.refraction"),
        results.refraction ? REFRACT_SYM[results.refraction.kind] : t("results.notTested"),
        results.refraction ? (results.refraction.kind === "balanced" ? "pass" : "warn") : null,
        results.refraction ? `${t("refraction." + results.refraction.kind)} \u00b7 ${results.refraction.range}` : null
      ),
            card(
        t("results.amsler"),
        results.amsler != null ? (results.amsler ? t("results.amslerPass") : t("results.amslerFail")) : t("results.notTested"),
        results.amsler != null ? (results.amsler ? "pass" : "warn") : null,
        null
      ),
      card(
        t("results.stereo"),
        results.stereo ? (results.stereo.seen ? t("results.stereoSeen") : t("results.stereoNot")) : t("results.notTested"),
        results.stereo ? (results.stereo.seen ? "pass" : "warn") : null,
        null,
        true
      ),
      (() => {
        // Sourced driver-licence reference, shown only where a primary source
        // was verified. No threshold is ever published without its citation.
        const lang = document.documentElement.lang || "en";
        const urls = {
          de: "https://lxgesetze.de/fev/AL-6",
          it: "https://iapb.it/viaggiare-sicurezza-stradale-auto/",
          ja: "https://static3.arrivo.ru/cfcd/88/450/en.pdf",
          pt: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9272022ANEXO.pdf/@@download/file",
        };
        const url = urls[lang];
        if (!url) return "";
        return card(
          t("results.driveRef"),
          t("results.drive." + lang),
          null,
          `<a href="${url}" target="_blank" rel="noopener noreferrer">${t("results.driveSource")}</a>`
        );
      })(),
    ];

    const rows = reportRows(results, acuity);
    let hr = document.getElementById("hospital-report");
    if (!hr) {
      hr = document.createElement("div");
      hr.id = "hospital-report";
      document.body.appendChild(hr);
    }
    
    const dateStr = new Date().toLocaleDateString();
    const timeStr = new Date().toLocaleTimeString();
    const rowsHtml = rows.map(r => `
      <tr>
        <td style="padding: 8px 10px; border-bottom: 1px solid #ddd; font-weight: bold;">${r[0]}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #ddd;">${r[1]}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #ddd; color: #555;">${r[2] ? `${t("report.normalValue")} ${r[2]}` : ""}</td>
      </tr>
    `).join('');

    hr.innerHTML = `
      <div style="font-family: 'Times New Roman', serif; color: #000; padding: 0 20px; line-height: 1.4; max-width: 800px; margin: 0 auto; box-sizing: border-box;">
        <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px;">
          <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Online Vision Test</h1>
           <p style="margin: 5px 0 0; font-size: 14px; color: #555;">${t("report.summary")}</p>
        </div>
        
        <div style="margin-bottom: 25px;">
           <h2 style="font-size: 16px; margin-bottom: 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px;">${t("report.session")}</h2>
          <table style="width: 100%; font-size: 13px; border: 0;">
            <tr>
              <td style="padding: 3px 0;"><strong>Date:</strong> ${dateStr}</td>
              <td style="padding: 3px 0;"><strong>Time:</strong> ${timeStr}</td>
            </tr>
            <tr>
              <td style="padding: 3px 0;"><strong>Session ID:</strong> ${Math.random().toString(36).substring(2, 10).toUpperCase()}</td>
              <td style="padding: 3px 0;"><strong>Environment:</strong> Self-Administered</td>
            </tr>
          </table>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; text-align: left; font-size: 13px;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 8px 10px; border-bottom: 2px solid #000;">${t("report.check")}</th>
              <th style="padding: 8px 10px; border-bottom: 2px solid #000;">${t("report.result")}</th>
              <th style="padding: 8px 10px; border-bottom: 2px solid #000;">${t("report.normal")}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <div style="margin-bottom: 25px;">
           <h3 style="margin: 0 0 6px 0; font-size: 15px;">${t("report.verdict")} ${t(`results.verdict.${verdict}.title`)}</h3>
           <p style="margin: 0; font-size: 13px;">${t(`results.verdict.${verdict}.body`)}</p>
        </div>

        <div style="font-size: 11px; color: #666; border-top: 1px solid #ccc; padding-top: 15px; text-align: justify;">
          <strong>Disclaimer:</strong> ${t("report.disclaimer")} ${t("report.local")}
        </div>
      </div>
    `;

    const icons = {
      ok: '<path d="M4 12.5l5 5L20 6.5"/>',
      warn: '<path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4.2M12 16.6v.1"/>',
      bad: '<path d="M12 3.5 21 19H3l9-15.5Z"/><path d="M12 10v4.2M12 16.6v.1"/>',
    };

    stage.innerHTML = `
      <div class="stage-title">${t("results.title")}</div>
      <p class="stage-sub">${t("results.sub")}</p>
      <div class="verdict ${verdict}" style="margin-top:22px">
        <span class="verdict-ico"><svg class="ico" viewBox="0 0 24 24">${icons[verdict] || icons.warn}</svg></span>
        <div>
          <h3>${t(`results.verdict.${verdict}.title`)}</h3>
          <p>${t(`results.verdict.${verdict}.body`)}</p>
        </div>
      </div>
      <div class="result-grid">${cards.join("")}</div>
      <details class="ai-cta-details" style="margin-top:22px;"><summary class="btn btn-quiet btn-sm" style="width:100%; justify-content:space-between; cursor:pointer;"><strong>${t("results.seeOptom")}</strong><svg class="ico" viewBox="0 0 24 24" style="width:16px;height:16px;"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/></svg></summary><div class="ai-cta" style="margin-top:8px;"><div><p>${t("results.seeOptomBody")}</p></div><span class="trial-counter">${t("results.localNote")}</span>
      </div></details>`;

    setFoot(`
      <button class="btn btn-quiet btn-sm" data-act="restart">${t("results.retake")}</button>
      <span class="trial-counter">${config.distanceM === 6 ? t("calib.dist6") : config.distanceM === 5 ? t("calib.dist5") : t("calib.dist3")}</span>
      <button class="btn btn-soft btn-sm" data-act="print">${t("results.download")}</button>
    `);
    on(foot.querySelector('[data-act="restart"]'), "click", () => reset(false));
    on(foot.querySelector('[data-act="print"]'), "click", () => window.print());

    
    const histContainer = stage.querySelector("#history-list");
    const btnClearHist = stage.querySelector("#btn-clear-history");
    const history = loadHistory();
    const histSection = stage.querySelector(".results-history");
    if (histContainer && histSection) {
      if (history.length <= 1) {
        histSection.style.display = "none";
      } else {
        // slice(1) to hide the current run which was just pushed
        histContainer.innerHTML = history.slice(1).map(h => {
          const d = new Date(h.createdAt).toLocaleDateString();
          return `<div style="font-size:14px;color:var(--text-2);padding:4px 0;">${d} ${t("history.acuity")} ${h.both != null ? acuityLabel(h.both) : t("history.na")}</div>`;
        }).join("");
        on(btnClearHist, "click", () => {
          clearHistory();
          histSection.style.display = "none";
        });
      }
    }

    // Old report/copy buttons have been removed.
  }

  /* ------------------------------------------------------------------- misc */

  function reset(keepCalibration) {
    results = emptyResults();
    saveResults(results);
    single = null;
    step = keepCalibration && config.calibrated ? "distance" : "calibrate";
    status(t("lab.ready"));
    render();
  }

  function mapCheck(id) {
    if (id === "cdl") return "distance";
    if (id === "landolt") return "landolt";
    if (id === "sivtsev") return "sivtsev";
    return STEP_ORDER.includes(id) ? id : "distance";
  }

  function start(checkId) {
    if (checkId && checkId !== "all") {
      single = { check: mapCheck(checkId) };
      step = config.calibrated ? single.check : "calibrate";
    } else {
      single = null;
      step = config.calibrated ? "distance" : "calibrate";
    }
    render();
    labEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const fullBtn = labEl.querySelector("#labFullBtn");
  const resetBtn = labEl.querySelector("#labResetBtn");

  function exitFocus() {
    labEl.classList.remove("is-full");
    document.body.classList.remove("lab-locked");
    if (fullBtn) fullBtn.textContent = t("lab.focus");
    setTimeout(() => window.dispatchEvent(new Event("resize")), 10);
  }

  if (fullBtn) {
      fullBtn.addEventListener("click", () => {
        const on_ = !labEl.classList.contains("is-full");
        labEl.classList.toggle("is-full", on_);
        document.body.classList.toggle("lab-locked", on_);
        fullBtn.textContent = on_ ? t("lab.exitFocus") : t("lab.focus");
        setTimeout(() => window.dispatchEvent(new Event("resize")), 10);
      });
  }

  // Allow Escape key to exit focus/fullscreen mode
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && labEl.classList.contains("is-full")) {
      exitFocus();
    }
  });

  if (resetBtn) resetBtn.addEventListener("click", () => reset(true));

  render();

  return {
    start,
    reset,
    rerender: render,
    get results() {
      return results;
    },
  };
}

/* -------------------------------------------------------------- storage */

function emptyResults() {
  return {
    right: null,
    left: null,
    both: null,
    tumbling: null,
    landolt: null,
    sivtsev: null,
    color: null,
    peripheral: null,
    near: null,
    contrast: null,
    astigmatism: null,
    refraction: null,
    stereo: null,
  };
}

/* -------------------------------------------------------------- report */

/**
 * The downloadable / copyable report. Every value here is the same one on the
 * result cards, so the text file and the screen can never disagree.
 */
function reportRows(results, acuity) {
  const notTested = t("results.notTested");
  const rows = [];
  const add = (name, value, bench) => rows.push([name, String(value), bench || ""]);
  add(t("results.eyeRight"), acuity(results.right), "20/40");
  add(t("results.eyeLeft"), acuity(results.left), "20/40");
  add(t("results.both"), acuity(results.both), "20/40");
  add(
    t("results.tumbling"),
    results.tumbling ? `${results.tumbling.correct}/${results.tumbling.total}` : notTested,
    "20/40"
  );
  add(
    t("results.landolt"),
    results.landolt ? `${results.landolt.correct}/${results.landolt.total}` : notTested,
    "20/40"
  );
  add(
    t("results.sivtsev"),
    results.sivtsev
      ? [["results.eyeRight", results.sivtsev.right], ["results.eyeLeft", results.sivtsev.left], ["results.both", results.sivtsev.both]]
          .map(([k, v]) => `${t(k)[0]} ${acuityLabel(v)}`)
          .join(" · ")
      : notTested,
    "20/40"
  );
  add(t("results.color"), results.color ? `${results.color.correct}/${results.color.total}` : notTested, "10/14");
  add(
    t("results.peripheral"),
    results.peripheral ? `${results.peripheral.hits}/${results.peripheral.total}` : notTested,
    "110\u00b0"
  );
  add(t("results.near"), results.near != null ? acuityLabel(results.near) : notTested, "J3");
  add(t("results.contrast"), results.contrast ? `${results.contrast.lowest}%` : notTested, "\u2264 10%");
  add(
    t("results.astigmatism"),
    results.astigmatism
      ? results.astigmatism.axis == null
        ? t("results.astigNone")
        : axisLabel(results.astigmatism.axis)
      : notTested,
    ""
  );
  add(
    t("results.refraction"),
    results.refraction
      ? `${t("refraction." + results.refraction.kind)} (${results.refraction.range})`
      : notTested,
    "R/G equal"
  );
  add(
    t("results.stereo"),
    results.stereo ? (results.stereo.seen ? t("results.stereoSeen") : t("results.stereoNot")) : notTested,
    "shape seen"
  );
  const driveLang = typeof document !== "undefined" ? document.documentElement.lang || "en" : "en";
  if (["de", "it", "ja", "pt"].includes(driveLang)) {
    add(t("results.driveRef"), t("results.drive." + driveLang), "");
  }
  return rows;
}

function buildReport(rows) {
  const head = [t("report.check"), t("report.result"), t("report.normal")];
  const width = Math.max(head[0].length, ...rows.map((r) => r[0].length));
  const line = (r) => `${r[0].padEnd(width)}  ${r[1]}${r[2] ? "   [" + r[2] + "]" : ""}`;
  return [
    t("report.title"),
    t("report.line", { date: new Date().toLocaleString() }),
    "",
    line(head),
    "-".repeat(width + 26),
    ...rows.map(line),
    "",
    t("report.disclaimer"),
    t("report.local"),
    "",
  ].join("\n");
}

/** Clipboard with a synchronous fallback for browsers that refuse the async API. */
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
  }
  try {
    return Promise.resolve(legacyCopy(text));
  } catch (err) {
    return Promise.reject(err);
  }
}

function legacyCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-2000px";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  ta.remove();
  if (!ok) throw new Error("copy failed");
}

import { z } from "zod";

const ProfileSchema = z.object({
  distanceM: z.number().default(3),
  calibrated: z.boolean().default(false),
  mmPerPx: z.number().optional()
}).catch({ distanceM: 3, calibrated: false });

const ResultSchema = z.object({
  right: z.number().nullable().optional(),
  left: z.number().nullable().optional(),
  both: z.number().nullable().optional(),
  color: z.object({ correct: z.number() }).nullable().optional(),
  peripheral: z.object({ hits: z.number(), total: z.number(), angle: z.number() }).nullable().optional(),
  near: z.number().nullable().optional(),
  contrast: z.object({ lowest: z.number(), correct: z.number() }).nullable().optional(),
  stereo: z.object({ seen: z.boolean() }).nullable().optional(),
  astigmatism: z.object({ blurred: z.number().nullable(), axis: z.number().nullable() }).nullable().optional(),
  refraction: z.object({ kind: z.string(), red: z.number(), green: z.number(), equal: z.number(), range: z.string() }).nullable().optional()
}).catch({});


const HISTORY_KEY = "dmv_eye_history";
const MAX_HISTORY_ENTRIES = 10;
const HistoryEntrySchema = z.any();
const HistorySchema = z.array(HistoryEntrySchema);

export function saveResultToHistory(result) {
  const raw = localStorage.getItem(HISTORY_KEY);
  const previous = HistorySchema.safeParse(JSON.parse(raw ?? "[]"));
  const history = previous.success ? previous.data : [];

  const updated = [
    { ...result, createdAt: new Date().toISOString() },
    ...history,
  ].slice(0, MAX_HISTORY_ENTRIES);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
}

export function loadHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  const parsed = HistorySchema.safeParse(JSON.parse(raw ?? "[]"));
  return parsed.success ? parsed.data : [];
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return ProfileSchema.parse(JSON.parse(raw));
  } catch (e) {
    /* private mode — use defaults */
  }
  return { distanceM: 3, calibrated: false };
}

/**
 * Restore the last run. Results never leave the browser, but they do survive a
 * reload so the stepper can show what has already been covered.
 */
function loadResults() {
  try {
    const raw = localStorage.getItem(RESULT_KEY);
    if (raw) return Object.assign(emptyResults(), ResultSchema.parse(JSON.parse(raw)));
  } catch (e) {
    /* ignore */
  }
  return emptyResults();
}

function saveProfile(p: any) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(p));
  } catch (e) {
    /* ignore */
  }
}

function saveResults(r: any) {
  if (r && Object.keys(r).length > 0) saveResultToHistory(r);
  try {
    localStorage.setItem(RESULT_KEY, JSON.stringify(r));
  } catch (e) {
    /* ignore */
  }
}

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}





  function renderAmsler() {
    let gridLines = '';
    for (let i = 0; i <= 20; i++) {
      const pos = 10 + i * 14;
      gridLines += `<line x1="10" y1="${pos}" x2="290" y2="${pos}" stroke="currentColor" stroke-width="1.5" />`;
      gridLines += `<line x1="${pos}" y1="10" x2="${pos}" y2="290" stroke="currentColor" stroke-width="1.5" />`;
    }

    stage.innerHTML = `
      <div class="stage-title">${t("amsler.title")}</div>
      <p class="stage-sub">${t("amsler.sub")}</p>
      <div class="stage-grid">
        <div class="stage-panel" style="display:grid;place-items:center;background:#fff;color:#000;padding:20px;border-radius:12px;">
          <svg viewBox="0 0 300 300" style="width: 100%; max-width: 300px;">
            <rect width="300" height="300" fill="#fff" />
            ${gridLines}
            <circle cx="150" cy="150" r="4" fill="#000" />
          </svg>
        </div>
        <div class="stage-panel">
          <div class="panel-title">${t("amsler.prompt")}</div>
          <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;">
            <button class="btn btn-primary" data-act="pass">${t("amsler.noDistortion")}</button>
            <button class="btn btn-quiet" data-act="fail">${t("amsler.distortionFound")}</button>
          </div>
        </div>
      </div>`;

    stage.querySelector('[data-act="pass"]').addEventListener('click', () => {
      results.amsler = true;
      setTimeout(() => advance(), 100);
    });
    stage.querySelector('[data-act="fail"]').addEventListener('click', () => {
      results.amsler = false;
      setTimeout(() => advance(), 100);
    });
    setFoot('');
  }
