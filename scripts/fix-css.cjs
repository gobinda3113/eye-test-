const fs = require('fs');

let css = fs.readFileSync('src/styles/global.css', 'utf-8');
const lines = css.split('\n');

let cleanedLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  // Remove the badly inserted block
  if (lines[i] === '[hidden] { display: none !important; }' && i > 500) {
    skip = true;
    continue;
  }
  if (skip && lines[i].includes('.mobile-nav a:hover')) {
    skip = false;
    continue; // skip this line too
  }
  if (!skip) {
    cleanedLines.push(lines[i]);
  }
}

// Now replace the actual mobile-nav definition
css = cleanedLines.join('\n');

// 1. Add [hidden] to the root reset.
css = css.replace(
  'color-scheme: light;\n}',
  'color-scheme: light;\n}\n\n[hidden] { display: none !important; }'
);

// 2. Fix .mobile-nav so it's display none by default
css = css.replace(
  '.mobile-nav {\n  border-top: 1px solid var(--border); background: var(--bg-elev);\n  padding: 8px 20px 16px; display: grid; gap: 2px;\n}',
  '.mobile-nav {\n  display: none;\n}'
);

// 3. Ensure it shows in the media query (it's already in the max-width: 1080px query)
// Actually wait, let's just add it to the media query.
const mqTarget = '@media (max-width: 1080px) {';
if (css.includes(mqTarget)) {
  css = css.replace(
    mqTarget,
    mqTarget + '\n  .mobile-nav:not([hidden]) { display: grid; gap: 2px; border-top: 1px solid var(--border); background: var(--bg-elev); padding: 8px 20px 16px; }'
  );
}

fs.writeFileSync('src/styles/global.css', css);
console.log('Fixed CSS');
