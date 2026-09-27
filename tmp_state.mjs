import fs from "fs";
let c = fs.readFileSync("src/pages/states/[state].astro", "utf8");
const schemaStr = `
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": \`\${stateData.name} DMV Eye Test & Vision Requirements\`,
  "url": \`https://onlinevisiontest.org/states/\${slug}/\`,
  "description": \`Pass the \${stateData.name} DMV eye test in \${new Date().getFullYear()}. Learn the vision requirements, visual acuity minimums, and practice online.\`,
  "inLanguage": "en"
};
`;
c = c.replace(/---\r?\n\r?\n<Layout/, schemaStr + "\n---\n\n<Layout");
c = c.replace(/<Layout ([^>]+)>/, `<Layout $1 schema={pageSchema}>`);
fs.writeFileSync("src/pages/states/[state].astro", c, "utf8");
