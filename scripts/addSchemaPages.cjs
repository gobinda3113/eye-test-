const fs = require('fs');

const webAppSchema = `const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "DMV Eye Test Online",
  "url": "https://dmveyetestonline.com",
  "description": "Free online DMV vision screening for all 50 US states. Tests visual acuity, color blindness, peripheral vision, and more.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};`;

function addSchemaToPage(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace('---', `---\n${webAppSchema}\n`);
  content = content.replace('<Layout locale={locale} page="home">', '<Layout locale={locale} page="home" schema={webAppSchema}>');
  content = content.replace('<Layout page="home">', '<Layout page="home" schema={webAppSchema}>');
  fs.writeFileSync(file, content);
}

addSchemaToPage('src/pages/index.astro');
addSchemaToPage('src/pages/[locale]/index.astro');
console.log('Updated index pages with schema');
