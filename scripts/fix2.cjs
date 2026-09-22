const fs = require('fs');

let css = fs.readFileSync('src/styles/global.css', 'utf-8');

// 1. Fix mobile header alignment
const mqTarget = '@media (max-width: 1080px) {';
if (css.includes(mqTarget)) {
  css = css.replace(
    mqTarget,
    mqTarget + '\n  .header-nav + .header-tools { margin-left: auto; }'
  );
}

// 2. Add chevron to language select
const selectTarget = 'padding: 7px 12px 7px 30px; font-size: 13.5px; font-weight: 600; font-family: inherit;';
const newSelectTarget = `padding: 7px 28px 7px 30px; font-size: 13.5px; font-weight: 600; font-family: inherit;
  background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="none" stroke="%236c8189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;`;
css = css.replace(selectTarget, newSelectTarget);

fs.writeFileSync('src/styles/global.css', css);
console.log('Fixed CSS part 2');
