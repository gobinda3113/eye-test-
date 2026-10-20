const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const SOURCE_EXTS = ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.astro', '.html'];
const DIST_EXTS = ['.html', '.js'];
const ALLOWED_SOURCE = new Set(['src/pages/contact.astro']);
const BANNED_PATTERNS = [
    { name: 'fetch(', re: /\bfetch\s*\(/ },
    { name: 'XMLHttpRequest', re: /XMLHttpRequest/ },
    { name: 'navigator.sendBeacon(', re: /navigator\.sendBeacon\s*\(/ },
    { name: 'new WebSocket(', re: /new\s+WebSocket\s*\(/ },
    { name: 'new Worker(', re: /new\s+Worker\s*\(/ },
];

function normalize(p) {
    return p.replace(/\\/g, '/');
}

function walk(dir, exts) {
    let results = [];
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const stat = fs.statSync(p);
        if (stat.isDirectory()) results = results.concat(walk(p, exts));
        else if (exts.some(ext => p.endsWith(ext))) results.push(p);
    }
    return results;
}

function isAllowedHost(hostname) {
    const host = hostname.toLowerCase();
    return host === 'onlinevisiontest.org'
        || host.endsWith('.onlinevisiontest.org')
        || host === 'googletagmanager.com'
        || host.endsWith('.googletagmanager.com');
}

if (!fs.existsSync('dist')) {
    console.error('Error: dist directory does not exist. Run build first.');
    process.exit(1);
}

const sourceFiles = walk('src', SOURCE_EXTS);
const bannedHits = [];

for (const file of sourceFiles) {
    const rel = normalize(file);
    if (ALLOWED_SOURCE.has(rel)) continue;
    const content = fs.readFileSync(file, 'utf8');
    for (const { name, re } of BANNED_PATTERNS) {
        if (re.test(content)) bannedHits.push(rel + ': ' + name);
    }
}

const distFiles = walk('dist', DIST_EXTS);
const externalResources = new Set();
const hostViolations = new Set();

function checkResource(file, rawUrl) {
    let value = rawUrl.trim();
    if (!value || value.startsWith('#') || value.startsWith('data:') || value.startsWith('blob:')
        || value.startsWith('mailto:') || value.startsWith('tel:')) return;
    if (value.startsWith('//')) value = 'https:' + value;
    if (!/^https?:\/\//i.test(value)) return;

    let parsed;
    try { parsed = new URL(value); } catch { return; }
    externalResources.add(parsed.href);
    if (!isAllowedHost(parsed.hostname)) {
        hostViolations.add(normalize(file) + ': ' + parsed.href);
    }
}

for (const file of distFiles) {
    const content = fs.readFileSync(file, 'utf8');

    let match;
    const scriptRe = /<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
    while ((match = scriptRe.exec(content))) checkResource(file, match[1]);

    const linkRe = /<link\b[^>]*>/gi;
    while ((match = linkRe.exec(content))) {
        const tag = match[0];
        const relMatch = tag.match(/\brel\s*=\s*["']([^"']+)["']/i);
        const hrefMatch = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
        if (!relMatch || !hrefMatch) continue;
        if (/\b(stylesheet|preload|modulepreload)\b/i.test(relMatch[1])) {
            checkResource(file, hrefMatch[1]);
        }
    }

    const srcAssignRe = /\.src\s*=\s*["']([^"']+)["']/g;
    while ((match = srcAssignRe.exec(content))) checkResource(file, match[1]);
}

console.log('External resource URLs:', [...externalResources]);

for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('localStorage.setItem')) {
        const matches = content.match(/localStorage\.setItem\([^,]+,/g);
        console.log(normalize(file), 'localStorage keys:', matches);
    }
}

let failed = false;

if (bannedHits.length > 0) {
    console.error('Banned network APIs found outside src/pages/contact.astro:');
    bannedHits.forEach(hit => console.error(' - ' + hit));
    failed = true;
}

if (hostViolations.size > 0) {
    console.error('Unapproved external resource hosts:');
    [...hostViolations].forEach(hit => console.error(' - ' + hit));
    failed = true;
}

if (failed) process.exit(1);

console.log('Privacy check passed.');
process.exit(0);
