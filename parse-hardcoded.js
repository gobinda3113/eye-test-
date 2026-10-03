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
            if (file.endsWith('.astro') || (file.endsWith('.ts') && !file.includes('i18n.ts'))) {
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
        // Strip out comments, HTML tags, template tags, and known d()/t() calls
        let cleaned = line.replace(/<!--[\s\S]*?-->/g, '')
                          .replace(/<[^>]+>/g, ' ')
                          .replace(/\{[^\}]+\}/g, ' ')
                          .replace(/t\("[^"]+"\)/g, ' ')
                          .replace(/d\("[^"]+"\)/g, ' ')
                          .replace(/\/\/.*/, '')
                          .replace(/\/\*[\s\S]*?\*\//, '')
                          .trim();
        
        // Find sequences of words
        const words = cleaned.match(/[A-Z][a-zA-Z\s]{15,}/g);
        if (words) {
            for (const match of words) {
                const numWords = match.trim().split(/\s+/).length;
                if (numWords > 3 && !match.includes('DMV') && !match.includes('Snellen') && !match.includes('import') && !match.includes('export') && !match.includes('console.log')) {
                    // check if it's not a code identifier or something
                    console.log(file + ':' + (idx+1) + ' -> ' + match.trim());
                }
            }
        }
    });
}
