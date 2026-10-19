const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.html')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('dist');
const regex = /(tracking pixel|rastreadores|Pseudo-isochromatic|pseudo-isocrom)/i;
let matchesFound = 0;
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(regex);
    if (match && !file.includes('dist\\index.html') && !file.includes('dist\\checks\\color') && !file.includes('dist/index.html') && !file.includes('dist/checks/color')) {
        console.error(file + ' -> ' + match[0]);
        matchesFound++;
    }
}

if (matchesFound > 0) {
    console.error(`String check failed: ${matchesFound} disallowed string match(es) found.`);
    process.exit(1);
} else {
    console.log('String check passed: no disallowed strings in dist.');
    process.exit(0);
}
