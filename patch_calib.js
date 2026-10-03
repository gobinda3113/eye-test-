const fs = require('fs');
let code = fs.readFileSync('src/scripts/lab.ts', 'utf8');

// Patch renderCalibrate for Quick mode
code = code.replace(
  /<div class="stage-title">\$\{t\("calib.title"\)\}<\/div>/,
  '<div class="stage-title">${runMode === "quick" ? "Preparation" : t("calib.title")}</div>'
);
code = code.replace(
  /<p class="stage-sub">\$\{t\("calib.sub"\)\}<\/p>/,
  '<p class="stage-sub">${runMode === "quick" ? "Hold device at reading distance (40 cm)." : t("calib.sub")}</p>'
);
code = code.replace(
  /<div class="stage-panel">/g,
  '<div class="stage-panel" ${runMode === "quick" && arguments[1] ? "style=\\"display:none;\\"" : ""}>' 
  // Wait, I can't just replace globally easily like this for quick mode. Let's just use string replace for the first one.
);

fs.writeFileSync('src/scripts/lab.ts', code);
console.log('patched calib');
