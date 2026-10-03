import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.astro')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
        // Simple check for data-i18n
        // Look for HTML tags that contain text
        // E.g. <span data-i18n="foo">{t("foo")}</span> or <h1 data-i18n="bar">{t("bar")}</h1>
        // If we see {t(key)} we expect data-i18n=key
        
        const tMatch = line.match(/\{t\(\s*["']([^"']+)["']\s*\)\}/g);
        if (tMatch) {
            tMatch.forEach(tcall => {
                const key = tcall.match(/["']([^"']+)["']/)[1];
                if (!line.includes('data-i18n="' + key + '"') && !line.includes('data-i18n-html="' + key + '"') && !line.includes('data-i18n-attr=')) {
                     // Check if it's not a generic usage
                     console.log(file + ':' + (idx+1) + ' -> t("' + key + '") missing matching data-i18n');
                }
            });
        }
    });
}
