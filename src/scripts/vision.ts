export const KEYS = { snellen: 'snellen_result', tumbling: 'tumbling_score', color: 'color_score', ppi: 'calibrated_ppi' } as const;
export function loadScore(key: string): { correct: number; total: number } {
  try { return JSON.parse(localStorage.getItem(key) || '{"correct":0,"total":0}'); } catch { return { correct: 0, total: 0 }; }
}
export function saveScore(key: string, correct: number, total: number) {
  localStorage.setItem(key, JSON.stringify({ correct, total }));
}
export function ppiFromPx(px: number, mmWidth = 85.6): number {
  return Math.round((px / mmWidth) * 25.4);
}

/** Viewing distance in feet → CSS px at a given PPI */
export function ftToPx(distanceFt: number, ppi: number): number {
  return distanceFt * 12 * ppi;
}

/**
 * Snellen letter height in CSS px for a 10-ft simulated mode.
 * Angular size: a 20/20 letter subtends 5 arcmin → height = 2·d·tan(5′),
 * scaled by denominator/20 for each row.
 */
export function snellenLetterPx(distanceFt: number, denominator: number, ppi: number): number {
  const TAN_5_ARCMIN = Math.tan((5 / 60) * (Math.PI / 180));
  const dInches = distanceFt * 12;
  const baseInches = 2 * dInches * TAN_5_ARCMIN;
  return baseInches * (denominator / 20) * ppi;
}

/** 10-ft simulated mode shorthand */
export function simulate10ftMode(denominator: number, ppi: number): number {
  return snellenLetterPx(10, denominator, ppi);
}

/* ------------------------------------------------------------------ */
/* Ported from zip src/vision.js — geometrically correct optics.       */
/* A 20/20 letter subtends 5 arc-min = 8.73mm at 6m. Scale linearly.   */
/* ------------------------------------------------------------------ */

export const MM_PER_PX_FALLBACK = 0.264583;
export const CARD_MM = 85.6;
export const NEAR_DISTANCE_M = 0.4;

export function letterHeightMm(denominator: number, distanceM: number): number {
  return (distanceM / 6) * 8.73 * (denominator / 20);
}
export function mmToPx(mm: number, mmPerPx: number): number {
  return mm / (mmPerPx || MM_PER_PX_FALLBACK);
}
export function lineHeightPx(denominator: number, distanceM: number, mmPerPx: number): number {
  return mmToPx(letterHeightMm(denominator, distanceM), mmPerPx);
}

const SERIF_CAP_RATIO = 0.692;
export function nearFontPx(denominator: number, mmPerPx: number): number {
  return mmToPx(letterHeightMm(denominator, NEAR_DISTANCE_M), mmPerPx) / SERIF_CAP_RATIO;
}

/* ------------------------- Ishihara-style plates ------------------------- */

export interface PlateDef { digit: string; bgHue: number; fgHue: number }

export const COLOR_PLATES: PlateDef[] = [
  { digit: '12', bgHue: 44, fgHue: 122 },
  { digit: '8', bgHue: 36, fgHue: 6 },
  { digit: '6', bgHue: 40, fgHue: 128 },
  { digit: '29', bgHue: 46, fgHue: 118 },
  { digit: '74', bgHue: 34, fgHue: 150 },
  { digit: '45', bgHue: 48, fgHue: 8 },
  { digit: '5', bgHue: 28, fgHue: 96 },
  { digit: '3', bgHue: 52, fgHue: 14 },
  { digit: '15', bgHue: 42, fgHue: 138 },
  { digit: '7', bgHue: 30, fgHue: 108 },
  { digit: '16', bgHue: 50, fgHue: 20 },
  { digit: '2', bgHue: 38, fgHue: 158 },
  { digit: '73', bgHue: 26, fgHue: 130 },
  { digit: '26', bgHue: 44, fgHue: 4 },
];

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function drawPlate(
  canvas: HTMLCanvasElement,
  opts: { digit?: string; size?: number; bgHue?: number; fgHue?: number; seed?: number } = {}
): void {
  const { digit = '12', size = 340, bgHue = 44, fgHue = 122, seed = 1 } = opts;
  const rng = mulberry32(seed);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const mask = digitMask(digit, size);
  const R = size / 2 - 2;
  const step = size / 38;
  const cx = size / 2;
  const cy = size / 2;

  for (let y = -R; y < R; y += step) {
    const spanX = Math.sqrt(Math.max(0, R * R - y * y));
    for (let x = -spanX; x < spanX; x += step) {
      const jx = x + (rng() - 0.5) * step * 0.92;
      const jy = y + (rng() - 0.5) * step * 0.92;
      const r = Math.hypot(jx, jy);
      if (r > R) continue;
      const px = cx + jx;
      const py = cy + jy;
      const inside = mask.sample(px, py) > 0.42 + rng() * 0.34;
      let hue = inside ? fgHue + (rng() - 0.5) * 34 : bgHue + (rng() - 0.5) * 30;
      const sat = (inside ? 58 : 66) + rng() * 26;
      let light = 44 + rng() * 24;
      let radius = step * (0.3 + rng() * 0.22);
      const rimT = (r - (R - step * 1.9)) / (step * 1.9);
      if (rimT > 0) {
        if (rng() < rimT * 0.42) continue;
        hue = bgHue + (rng() - 0.5) * 40;
        light = Math.max(12, light - 26 * rimT - rng() * 8);
        radius *= 1 - rimT * 0.18;
      }
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue} ${sat}% ${light}%)`;
      ctx.fill();
    }
  }
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = '#2a2118';
  for (let i = 0; i < 420; i++) {
    const a = rng() * Math.PI * 2;
    const rr = Math.sqrt(rng()) * R;
    ctx.fillRect(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, rng() * 1.6, rng() * 1.6);
  }
  ctx.globalAlpha = 1;
}

function digitMask(digit: string, size: number) {
  const off = document.createElement('canvas');
  off.width = size;
  off.height = size;
  const oc = off.getContext('2d')!;
  oc.fillStyle = '#000';
  oc.fillRect(0, 0, size, size);
  oc.fillStyle = '#fff';
  oc.textAlign = 'center';
  oc.textBaseline = 'middle';
  let font = size * 0.72;
  oc.font = `800 ${font}px system-ui, sans-serif`;
  const maxWidth = size * 0.78;
  const width = oc.measureText(digit).width;
  if (width > maxWidth) {
    font *= maxWidth / width;
    oc.font = `800 ${font}px system-ui, sans-serif`;
  }
  oc.fillText(digit, size / 2, size / 2 + size * 0.015);
  const data = oc.getImageData(0, 0, size, size).data;
  return {
    sample(x: number, y: number) {
      const ix = Math.round(x);
      const iy = Math.round(y);
      if (ix < 0 || iy < 0 || ix >= size || iy >= size) return 0;
      return data[(iy * size + ix) * 4] / 255;
    },
  };
}

/* ------------------------------ near card ------------------------------ */

export interface NearLine {
  nPoint: string;
  denominator: number;
  equiv: string;
  desc: string;
  text: string;
}

export const NEAR_LINES: NearLine[] = [
  { nPoint: 'N24', denominator: 200, equiv: '≈20/200', desc: 'large print', text: 'Hand this card to a friend and read the next line.' },
  { nPoint: 'N14', denominator: 100, equiv: '≈20/100', desc: 'large text', text: 'Small print is still print, and it still has to be read.' },
  { nPoint: 'N12', denominator: 80,  equiv: '≈20/80',  desc: 'official forms', text: 'Most counter forms are printed somewhere near this size.' },
  { nPoint: 'N8',  denominator: 50,  equiv: '≈20/50',  desc: 'bank slips', text: 'Registration renewals and bank slips tend to use this.' },
  { nPoint: 'N6',  denominator: 40,  equiv: '≈20/40',  desc: 'normal print', text: 'The DMV benchmark line for an unrestricted licence.' },
  { nPoint: 'N5',  denominator: 30,  equiv: '≈20/30',  desc: 'book print', text: 'Newspaper body text sits comfortably around here.' },
  { nPoint: 'N4.5', denominator: 20, equiv: '≈20/20',  desc: 'fine print', text: 'The smallest line on a standard near card.' },
];

export function nearLineByDenominator(denominator: number | null): NearLine | undefined {
  if (denominator == null) return undefined;
  return NEAR_LINES.find((l) => l.denominator === denominator);
}

export function nearLineTag(line: NearLine): string {
  return `${line.nPoint} · ${line.equiv}`;
}

/* ------------------------------- contrast ------------------------------ */

export const CONTRAST_LEVELS = [100, 25, 10, 5, 2.5, 1.25, 0.6];

export function contrastInk(percent: number): number {
  const c = Math.min(1, Math.max(0.0001, percent / 100));
  const lum = (1 - c) / (1 + c);
  return Math.round(Math.pow(lum, 1 / 2.2) * 255);
}

/* -------------------------------- stereo ------------------------------- */

export const STEREO_SHAPES = ['ring', 'cross', 'triangle', 'square'] as const;

export function drawStereogram(
  canvas: HTMLCanvasElement,
  opts: { shape?: string; width?: number; height?: number; seed?: number; sep?: number; parallax?: number; invert?: boolean } = {}
): void {
  const { shape = 'ring', width = 720, height = 420, seed = 1, sep = 118, parallax = 42, invert = false } = opts;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = Math.round(width * dpr);
  const H = Math.round(height * dpr);
  const SEP = Math.round(sep * dpr);
  const PAR = Math.round(parallax * dpr);
  canvas.width = W;
  canvas.height = H;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const rng = mulberry32(seed);
  const depth = depthField(shape, W, H);
  const img = ctx.createImageData(W, H);
  const data = img.data;
  const lead = SEP + PAR;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const o = (y * W + x) * 4;
      if (x < lead) {
        data[o] = (rng() * 255) | 0;
        data[o + 1] = (rng() * 255) | 0;
        data[o + 2] = (rng() * 255) | 0;
        data[o + 3] = 255;
      } else {
        const d = depth(x, y);
        const period = invert ? SEP + PAR * d : SEP - PAR * d;
        const sx = Math.max(0, Math.min(W - 1, Math.round(x - period)));
        const so = (y * W + sx) * 4;
        data[o] = data[so];
        data[o + 1] = data[so + 1];
        data[o + 2] = data[so + 2];
        data[o + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

function depthField(shape: string, w: number, h: number): (x: number, y: number) => number {
  const cx = w / 2;
  const cy = h / 2;
  const R = h * 0.36;
  const inner = R * 0.58;
  const half = h * 0.26;
  return (x, y) => {
    const dx = x - cx;
    const dy = y - cy;
    switch (shape) {
      case 'ring':
        return Math.hypot(dx, dy) < R && Math.hypot(dx, dy) > inner ? 1 : 0;
      case 'square':
        return Math.abs(dx) < R * 0.82 && Math.abs(dy) < R * 0.82 ? 1 : 0;
      case 'cross':
        return (Math.abs(dx) < R * 0.22 && Math.abs(dy) < R * 0.86) ||
          (Math.abs(dy) < R * 0.22 && Math.abs(dx) < R * 0.86) ? 1 : 0;
      case 'triangle': {
        const top = cy - half;
        const bottom = cy + half * 1.15;
        if (y < top || y > bottom) return 0;
        const t = (y - top) / (bottom - top);
        const halfW = t * half * 1.15;
        return Math.abs(dx) < halfW ? 1 : 0;
      }
      default:
        return 0;
    }
  };
}

/* ----------------------------- astigmatism ----------------------------- */

export const DIAL_ANGLES = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165];

export function axisFromBlurred(degrees: number): number {
  return (degrees + 90) % 180;
}
export function axisLabel(degrees: number): string {
  return String(degrees).padStart(3, '0') + '°';
}

/* ----------------------------- refraction ------------------------------ */

export function refractionRead(votes: string[]) {
  const red = votes.filter((v) => v === 'red').length;
  const green = votes.filter((v) => v === 'green').length;
  const equal = votes.filter((v) => v === 'equal').length;
  if (red > green && red >= equal) return { kind: 'myopic' as const, red, green, equal, range: '-0.25 to -1.25 D' };
  if (green > red && green >= equal) return { kind: 'hyperopic' as const, red, green, equal, range: '+0.25 to +1.25 D' };
  return { kind: 'balanced' as const, red, green, equal, range: '0.00 to ±0.25 D' };
}

/* ------------------------------- scoring ------------------------------- */

export const ACUITY_STEPS = [200, 100, 70, 50, 40, 30, 25, 20];

export function acuityLabel(denominator: number | null): string {
  if (denominator == null) return '—';
  return '20/' + denominator;
}

/**
 * All three world notations for one Snellen denominator, e.g. "20/40 · 6/12 · 0.5".
 * Display only: the underlying measurement is unchanged.
 */
export function acuityNotations(denominator: number | null): string {
  if (denominator == null) return '—';
  const metric = Math.round(denominator * 0.3 * 10) / 10;
  const decimal = Math.round((20 / denominator) * 100) / 100;
  return `20/${denominator} · 6/${metric} · ${decimal}`;
}
export function meetsBenchmark(denominator: number | null, benchmark = 40): boolean {
  return denominator != null && denominator <= benchmark;
}

export interface OverallResults {
  right?: number | null;
  left?: number | null;
  both?: number | null;
  color?: { correct: number } | null;
  peripheral?: { hits: number } | null;
  near?: number | null;
  contrast?: { lowest: number } | null;
  stereo?: { seen: boolean } | null;
}

export function overallVerdict(results: OverallResults): 'ok' | 'warn' | 'bad' {
  const eyes = [results.right, results.left].filter((v) => v != null) as number[];
  if (!eyes.length) return 'warn';
  const worst = Math.max(...eyes);
  if (worst > 60) return 'bad';
  if (worst > 40) return 'warn';
  const colorBad = results.color != null && results.color.correct < 12;
  const fieldBad = results.peripheral != null && results.peripheral.hits < 6;
  const nearBad = results.near != null && results.near > 60;
  const contrastBad = results.contrast != null && results.contrast.lowest > 10;
  const stereoBad = results.stereo != null && !results.stereo.seen;
  if (colorBad || fieldBad || nearBad || contrastBad || stereoBad) return 'warn';
  return 'ok';
}
