const fs = require('fs');
const path = require('path');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
        else if (file.endsWith('.astro')) results.push(file);
    });
    return results;
}
let errors = 0;
for (const file of walk('src')) {
    const content = fs.readFileSync(file, 'utf8');
    const images = content.match(/<img[^>]*>/g);
    if (images) {
        images.forEach(img => {
            if (!img.includes('alt=')) {
                console.error(file, 'Missing alt:', img);
                errors++;
            } else if (img.includes('alt=""')) {
                console.error(file, 'Empty alt:', img);
                errors++;
            }
        });
    }
}

if (errors > 0) {
    console.error(`Image checks failed: ${errors} issue(s) found.`);
    process.exit(1);
} else {
    console.log('Image check passed: all <img> tags have valid alt attributes.');
    process.exit(0);
}
