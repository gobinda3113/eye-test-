const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
        else results.push(file);
    });
    return results;
}

const allFiles = walk('src');
const cssFiles = allFiles.filter(f => f.endsWith('.css'));
const srcFiles = allFiles.filter(f => !f.endsWith('.css') && (f.endsWith('.astro') || f.endsWith('.ts')));

let fullSrc = srcFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const unused = [];
for (const file of cssFiles) {
    const css = fs.readFileSync(file, 'utf8');
    const classes = css.match(/\.([a-zA-Z0-9_-]+)/g);
    if (classes) {
        for (const cls of new Set(classes)) {
            const className = cls.substring(1);
            // Skip pseudo classes and general names
            if (['html', 'body', 'root', 'hover', 'active', 'focus', 'before', 'after', 'nth-child'].includes(className)) continue;
            // Also some might be dynamically built, let's just do a basic string match
            if (!fullSrc.includes(className)) {
                unused.push({ file, className });
            }
        }
    }
}
console.log('Unused classes:');
unused.forEach(u => console.log(u.file, u.className));
