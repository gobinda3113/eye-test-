const fs = require('fs');
const zlib = require('zlib');

if (!fs.existsSync('dist/_astro')) {
    console.error('Error: dist/_astro does not exist. Run build first.');
    process.exit(1);
}

const scripts = fs.readdirSync('dist/_astro').filter(f => f.endsWith('.js'));
if (scripts.length === 0) {
    console.error('Error: No JS scripts found in dist/_astro');
    process.exit(1);
}

for (const f of scripts) {
    const p = 'dist/_astro/' + f;
    const content = fs.readFileSync(p);
    const gzipped = zlib.gzipSync(content);
    console.log(f, content.length, 'bytes raw,', gzipped.length, 'bytes gzip');
    
    // search for dict keys
    const matchES = content.toString().indexOf('"es":{');
    const matchFR = content.toString().indexOf('"fr":{');
    if (matchES > -1 || matchFR > -1) {
        console.log('Contains complete dictionaries. To quantify waste: ~' + (content.length - 20000) + ' bytes waste if logic is separated.');
        const dictFileSize = fs.statSync('src/scripts/dict.ts').size;
        console.log('Original dict file size:', dictFileSize);
    }
}
process.exit(0);
