const fs = require('fs');

let errors = 0;
function check(file) {
  if (!fs.existsSync(file)) {
    console.error(`Breadcrumb target file missing: ${file}`);
    errors++;
    return;
  }
  const html = fs.readFileSync(file, 'utf8');
  const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let found = false;
  for (const m of matches) {
    try {
      const json = JSON.parse(m[1]);
      const b = json['@type'] === 'BreadcrumbList' ? json : (json.breadcrumb && json.breadcrumb['@type'] === 'BreadcrumbList' ? json.breadcrumb : null);
      if (b) {
        found = true;
        console.log(`\nChecking ${file}:`);
        console.log('Valid @type:', b['@type'] === 'BreadcrumbList');
        console.log('Items:', b.itemListElement.length);
        b.itemListElement.forEach((it, i) => {
           console.log(`  Item ${i+1}:`);
           const id = it.item || it['@id'];
           console.log(`    @id (or item): ${id}`);
           const isAbs = String(id).startsWith('https://');
           console.log(`    is absolute URL: ${isAbs}`);
           if (!isAbs) errors++;
        });
      }
    } catch(e) {}
  }
  if (!found) {
    console.error(`No BreadcrumbList found in ${file}`);
    errors++;
  }
}

check('dist/states/index.html');
check('dist/states/texas/index.html');

if (errors > 0) {
  console.error(`Breadcrumb checks failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('Breadcrumbs check passed.');
  process.exit(0);
}
