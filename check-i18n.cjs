const fs = require('fs');
const content = fs.readFileSync('src/scripts/dict.ts', 'utf8');

const regex = /const (en|es|fr|de|pt|it|ja|ru) = \{([\s\S]*?)\n};/g;
const dicts = {};
let match;
while ((match = regex.exec(content)) !== null) {
  const lang = match[1];
  const body = match[2];
  const keys = [];
  const keyRegex = /"([^"]+)":/g;
  let keyMatch;
  while ((keyMatch = keyRegex.exec(body)) !== null) {
    keys.push(keyMatch[1]);
  }
  dicts[lang] = new Set(keys);
}

const allLangs = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ru'];
const allKeys = new Set();
for (const lang of allLangs) {
  if (dicts[lang]) {
    for (const key of dicts[lang]) {
      allKeys.add(key);
    }
  }
}

console.log('Total keys:', allKeys.size);

const missing = [];
for (const key of allKeys) {
  for (const lang of allLangs) {
    if (dicts[lang] && !dicts[lang].has(key)) {
      missing.push({ lang, key });
    }
  }
}

if (missing.length > 0) {
  missing.forEach(m => {
    console.error(m.lang + ' lacks ' + m.key + (m.lang === 'en' ? ' (P0)' : ' (P1)'));
  });
  console.error(`Total missing keys: ${missing.length}`);
  process.exit(1);
} else {
  console.log(`Success: All ${allKeys.size} keys present across all ${allLangs.length} locales.`);
  process.exit(0);
}
