const fs = require('fs');
const zlib = require('zlib');

const MAX_FILE_GZIP = 80 * 1024;
const MAX_TOTAL_GZIP = 90 * 1024;

if (!fs.existsSync('dist/_astro')) {
    console.error('Error: dist/_astro does not exist. Run build first.');
    process.exit(1);
}

const scripts = fs.readdirSync('dist/_astro').filter(f => f.endsWith('.js')).sort();
if (scripts.length === 0) {
    console.error('Error: No JS scripts found in dist/_astro');
    process.exit(1);
}

let totalGzip = 0;
const failures = [];

for (const f of scripts) {
    const p = 'dist/_astro/' + f;
    const content = fs.readFileSync(p);
    const gzipped = zlib.gzipSync(content);
    totalGzip += gzipped.length;
    console.log(f, content.length, 'bytes raw,', gzipped.length, 'bytes gzip');

    if (gzipped.length > MAX_FILE_GZIP) {
        failures.push(`${f} is ${gzipped.length} bytes gzip (limit ${MAX_FILE_GZIP})`);
    }
}

console.log(`Total JS: ${totalGzip} bytes gzip (limit ${MAX_TOTAL_GZIP})`);
if (totalGzip > MAX_TOTAL_GZIP) {
    failures.push(`total JS is ${totalGzip} bytes gzip (limit ${MAX_TOTAL_GZIP})`);
}

if (failures.length > 0) {
    console.error('Bundle budget exceeded:');
    failures.forEach(f => console.error(' - ' + f));
    process.exit(1);
}

process.exit(0);
