const fs = require('fs');

let css = fs.readFileSync('src/styles/global.css', 'utf-8');

// The line currently looks like this (from my previous fixes):
// .mobile-nav:not([hidden]) { display: grid; gap: 2px; border-top: 1px solid var(--border); background: var(--bg-elev); padding: 8px 20px 16px; }

const target = '.mobile-nav:not([hidden]) { display: grid; gap: 2px; border-top: 1px solid var(--border); background: var(--bg-elev); padding: 8px 20px 16px; }';
const replacement = '.mobile-nav:not([hidden]) { display: grid; gap: 2px; border-top: 1px solid var(--border); background: var(--bg-elev); padding: 8px 20px 16px; position: absolute; top: 100%; left: 0; right: 0; z-index: 100; box-shadow: var(--shadow-sm); }';

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('src/styles/global.css', css);
  console.log('Fixed mobile menu overlap');
} else {
  console.log('Target not found, maybe formatting is different?');
}
