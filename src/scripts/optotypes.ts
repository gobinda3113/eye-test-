/**
 * True Sloan / Snellen optotypes drawn as vector paths on a 5x5 grid.
 * Ported from the superior single-file screener (zip) — replaces font-based
 * rows so a calibrated chart is geometrically honest.
 *
 * Every stroke is 1/5 of letter height. Cap height is set in CSS px from
 * calibration (see vision.ts lineHeightPx), viewBox padded by half a stroke
 * so the box is exactly 6/5 of cap height.
 */

const PATHS: Record<string, string> = {
  C: 'M4.5 .5 H .5 V 4.5 H 4.5',
  D: 'M.5 .5 H 2.5 A2 2 0 0 1 2.5 4.5 H .5 Z',
  E: 'M4.5 .5 H .5 V 4.5 H 4.5 M.5 2.5 H 3.5',
  F: 'M4.5 .5 H .5 V 4.5 M.5 2.5 H 3.5',
  H: 'M.5 .5 V 4.5 M4.5 .5 V 4.5 M.5 2.5 H 4.5',
  K: 'M.5 .5 V 4.5 M4.5 .5 L .5 2.5 M2 2.3 L 4.5 4.5',
  L: 'M.5 .5 V 4.5 H 4.5',
  N: 'M.5 4.5 V .5 L 4.5 4.5 V .5',
  O: 'M.5 .5 H 4.5 V 4.5 H .5 Z',
  P: 'M.5 4.5 V .5 H 3 A2 1 0 0 1 3 2.5 H .5',
  R: 'M.5 4.5 V .5 H 3 A2 1 0 0 1 3 2.5 H .5 M2.4 2.5 L 4.5 4.5',
  S: 'M4.5 .5 H .5 V 2.5 H 4.5 V 4.5 H .5',
  T: 'M.5 .5 H 4.5 M2.5 .5 V 4.5',
  V: 'M.5 .5 L 2.5 4.5 L 4.5 .5',
  Z: 'M.5 .5 H 4.5 L .5 4.5 H 4.5',
  /* Sivtsev Cyrillic set: same 5x5 grid and 1/5 stroke as Latin, so the
     angular size of every row is identical. Screening shapes, not a typeface. */
  'Ш': 'M.5 .5 V 4.5 M2.5 .5 V 4.5 M4.5 .5 V 4.5 M.5 4.5 H 4.5',
  'Б': 'M4.5 .5 H .5 V 4.5 H 4.5 M.5 2.5 H 3.5',
  'М': 'M.5 4.5 V .5 L 2.5 2.5 L 4.5 .5 V 4.5',
  'Н': 'M.5 .5 V 4.5 M4.5 .5 V 4.5 M.5 2.5 H 4.5',
  'К': 'M.5 .5 V 4.5 M4.5 .5 L .5 2.7 M2.2 2.5 L 4.5 4.5',
  'Ы': 'M.5 .5 V 4.5 M.5 2.5 H 2.5 A1 1 0 0 1 2.5 4.5 M3.6 .5 V 4.5',
  'И': 'M.5 .5 V 4.5 L 4.5 .5 V 4.5',
};

export const SLOAN = ['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z'];
export const SNELLEN = ['C', 'D', 'E', 'F', 'L', 'O', 'P', 'T', 'Z'];

export function hasOptotype(ch: string): boolean {
  return Object.prototype.hasOwnProperty.call(PATHS, String(ch).toUpperCase());
}

export function pathFor(ch: string): string {
  return PATHS[String(ch).toUpperCase()] || '';
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export function letterSVG(
  ch: string,
  heightPx: number,
  opts: { rotate?: number; className?: string; ink?: string } = {}
): string {
  const { rotate = 0, className = '', ink = 'currentColor' } = opts;
  const box = (heightPx * 6) / 5;
  const rot = rotate ? ` transform="rotate(${rotate} 2.5 2.5)"` : '';
  return (
    `<svg class="${className}" viewBox="-0.5 -0.5 6 6" width="${round(box)}" height="${round(box)}" role="img" aria-label="${ch}">` +
    `<path d="${pathFor(ch)}" fill="none" stroke="${ink}" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter"${rot}/></svg>`
  );
}

export function lineSVG(
  letters: string[],
  heightPx: number,
  opts: { gapRatio?: number; gapPx?: number; ink?: string } = {}
): string {
  const { gapRatio = 1.05, gapPx, ink = 'currentColor' } = opts;
  const gap = gapPx != null ? gapPx : heightPx * gapRatio;
  const inner = [...letters].map((ch) => letterSVG(ch, heightPx, { ink })).join('');
  return `<div class="line-row" style="--gap:${round(gap)}px">${inner}</div>`;
}

export function tumblingESVG(heightPx: number, rotation: number): string {
  const box = (heightPx * 6) / 5;
  return (
    `<svg viewBox="-0.5 -0.5 6 6" width="${round(box)}" height="${round(box)}" role="img" aria-label="Tumbling E">` +
    `<g transform="rotate(${rotation} 2.5 2.5)"><path d="${PATHS.E}" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square"/></g></svg>`
  );
}

export function landoltCSVG(heightPx: number, rotation: number): string {
  const box = (heightPx * 6) / 5;
  // True Landolt ring per EN ISO 8596: outer diameter 5 units, stroke 1 unit,
  // gap 1 unit. pathLength normalises the circumference to 5 so the gap is
  // exactly one fifth; the -54deg offset centres the gap at the top when the
  // outer rotation is 0, and rotation steps through the gap directions.
  return (
    `<svg viewBox="-0.5 -0.5 6 6" width="${round(box)}" height="${round(box)}" role="img" aria-label="Landolt C">` +
    `<g transform="rotate(${rotation} 2.5 2.5)"><circle cx="2.5" cy="2.5" r="2" fill="none" stroke="currentColor" stroke-width="1" pathLength="5" stroke-dasharray="4 1" transform="rotate(-54 2.5 2.5)"/></g></svg>`
  );
}

export function randomLetters(n: number, pool: string[] = SLOAN, rng: () => number = Math.random): string[] {
  const out: string[] = [];
  while (out.length < n) {
    const ch = pool[Math.floor(rng() * pool.length)];
    if (out[out.length - 1] !== ch) out.push(ch);
  }
  return out;
}
