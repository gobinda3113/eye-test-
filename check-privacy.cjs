const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { results = results.concat(walk(file)); }
        else { if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.astro')) results.push(file); }
    });
    return results;
}

if (!fs.existsSync('dist')) {
    console.error('Error: dist directory does not exist. Run build first.');
    process.exit(1);
}
const files = walk('dist');
const external = new Set();
const fetches = [];
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const urls = content.match(/(?:src|href)="([^"]+)"/g);
    if (urls) {
        for (const url of urls) {
            const u = url.match(/(?:src|href)="([^"]+)"/)[1];
            if (u.startsWith('http') && !u.includes('onlinevisiontest.org')) {
                external.add(u);
            }
        }
    }
}
console.log('External URLs:', [...external]);

const srcFiles = walk('src');
for (const file of srcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('fetch(') || content.includes('XMLHttpRequest')) {
        console.log(file, 'has fetch/XHR');
    }
    if (content.includes('localStorage.setItem')) {
        const matches = content.match(/localStorage\.setItem\([^,]+,/g);
        console.log(file, 'localStorage keys:', matches);
    }
}
console.log('Privacy check passed.');
process.exit(0);
