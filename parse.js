import fs from 'fs';
const text = fs.readFileSync('src/scripts/i18n.ts', 'utf8');

const dicts = {};
let currentLang = null;
for (const line of text.split('\n')) {
    const match = line.match(/^const (en|es|fr|de|pt|it|ja|ru) = \{/);
    if (match) {
        currentLang = match[1];
        dicts[currentLang] = new Set();
        continue;
    }
    if (currentLang) {
        if (line.match(/^};/)) {
            currentLang = null;
            continue;
        }
        const keyMatch = line.match(/^\s*"([^"]+)":/);
        if (keyMatch) {
            dicts[currentLang].add(keyMatch[1]);
        }
    }
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

missing.forEach(m => {
    console.log(m.lang + ' lacks ' + m.key + (m.lang === 'en' ? ' (P0)' : ' (P1)'));
});
