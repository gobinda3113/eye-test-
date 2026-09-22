const fs = require('fs');

const datasetSchema = `const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "DMV Vision Requirements by US State",
  "description": "A comprehensive table of visual acuity, field of vision, and other DMV eye test requirements for all 50 US states.",
  "url": "https://dmveyetestonline.com/states",
  "creator": {
    "@type": "WebSite",
    "name": "DMV Eye Test Online"
  }
};`;

function addSchemaToStatesPage(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace('---', `---\n${datasetSchema}\n`);
  content = content.replace('<Layout locale={locale} page="states">', '<Layout locale={locale} page="states" schema={datasetSchema}>');
  content = content.replace('<Layout page="states">', '<Layout page="states" schema={datasetSchema}>');
  
  // Note: For root states/index.astro it's likely <Layout locale="en" page="states">
  content = content.replace('<Layout locale="en" page="states">', '<Layout locale="en" page="states" schema={datasetSchema}>');
  fs.writeFileSync(file, content);
}

addSchemaToStatesPage('src/pages/states/index.astro');
addSchemaToStatesPage('src/pages/[locale]/states/index.astro');
console.log('Updated states pages with schema');
