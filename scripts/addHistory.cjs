const fs = require('fs');
let lab = fs.readFileSync('src/scripts/lab.ts', 'utf-8');

// 1. History logic
const historyLogic = `
const HISTORY_KEY = "dmv_eye_history";
const MAX_HISTORY_ENTRIES = 10;
const HistoryEntrySchema = ResultSchema.extend({
  createdAt: z.string().datetime()
});
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
`;

lab = lab.replace('function loadProfile() {', historyLogic + '\nfunction loadProfile() {');

// 2. Hook into saveResults
lab = lab.replace(
  'function saveResults(r: any) {',
  `function saveResults(r: any) {
  if (r && Object.keys(r).length > 0) saveResultToHistory(r);`
);

// 3. Render history in buildVerdict
const historyHtml = `
      <div class="results-history no-print" style="margin-top:40px;border-top:1px solid var(--border);padding-top:20px;">
        <h3>Previous Sessions</h3>
        <div id="history-list"></div>
        <button id="btn-clear-history" class="btn btn-quiet btn-sm" style="margin-top:10px;">Clear History</button>
      </div>
`;

lab = lab.replace('</p>\n        </div>\n      </div>', '</p>\n        </div>\n      </div>' + historyHtml);

// 4. Populate history list after rendering
const renderHistoryCall = `
    const histContainer = stage.querySelector("#history-list");
    const btnClearHist = stage.querySelector("#btn-clear-history");
    const history = loadHistory();
    if (history.length <= 1) {
      stage.querySelector(".results-history").style.display = "none";
    } else {
      // slice(1) to hide the current run which was just pushed
      histContainer.innerHTML = history.slice(1).map(h => {
        const d = new Date(h.createdAt).toLocaleDateString();
        return \`<div style="font-size:14px;color:var(--text-2);padding:4px 0;">\${d} — Acuity: \${h.both != null ? acuityLabel(h.both) : "N/A"}</div>\`;
      }).join("");
      on(btnClearHist, "click", () => {
        clearHistory();
        stage.querySelector(".results-history").style.display = "none";
      });
    }
`;

lab = lab.replace('const reportNote = stage.querySelector("#reportNote");', renderHistoryCall + '\n    const reportNote = stage.querySelector("#reportNote");');

fs.writeFileSync('src/scripts/lab.ts', lab);
console.log('Updated lab.ts with history');
