const fs = require('fs');
const path = require('path');

const i18nContent = fs.readFileSync('src/scripts/dict.ts', 'utf8');
const keyRegex = /"([^"]+)":/g;
const matchEn = i18nContent.match(/const en = \{([\s\S]*?)\n};/);
const keys = new Set();
if (matchEn) {
    let keyMatch;
    while ((keyMatch = keyRegex.exec(matchEn[1])) !== null) {
        keys.add(keyMatch[1]);
    }
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
        else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.astro')) results.push(file);
    });
    return results;
}

const files = walk('src').filter(f => !f.includes('dict.ts'));
const fileContents = files.map(f => fs.readFileSync(f, 'utf8'));
const fullText = fileContents.join('\n');

if (keys.size === 0) {
    console.error('Error: No keys parsed from src/scripts/dict.ts');
    process.exit(1);
}

const unused = [];
for (const key of keys) {
    if (!fullText.includes(key)) {
        unused.push(key);
    }
}
console.log(`Parsed ${keys.size} keys from dict.ts. Unused/dynamic candidates: ${unused.length}`);
process.exit(0);
