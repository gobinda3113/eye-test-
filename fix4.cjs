const fs = require('fs');

let css = fs.readFileSync('src/styles/global.css', 'utf-8');

// Fix 720px media query
// It currently has: .lang-wrap select { width: 86px; padding: 7px 8px; font-size: 12.5px; }
css = css.replace(
  '.lang-wrap select { width: 86px; padding: 7px 8px; font-size: 12.5px; }',
  '.lang-wrap select { width: auto; padding: 7px 28px 7px 12px; font-size: 12.5px; }'
);

// Fix 560px media query
// It currently has: .lang-wrap select { width: 64px; font-size: 12px; }
css = css.replace(
  '.lang-wrap select { width: 64px; font-size: 12px; }',
  '.lang-wrap select { width: auto; font-size: 12px; padding: 7px 28px 7px 10px; }'
);

fs.writeFileSync('src/styles/global.css', css);
console.log('Fixed mobile select widths and padding');
