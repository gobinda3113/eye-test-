const fs = require('fs');
const path = require('path');
function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      if (!p.includes('node_modules') && !p.includes('.astro')) walk(p);
    } else if (p.endsWith('.astro') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf-8');
      if (content.includes('.js')) {
        content = content.replace(/\.js(['"`])/g, '.ts$1');
        fs.writeFileSync(p, content);
      }
    }
  });
}
walk('./src');
