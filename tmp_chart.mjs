import fs from "fs";
let c = fs.readFileSync("src/pages/eye-test-chart.astro", "utf8");
const schemaStr = `
const chartSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Printable Eye Test Chart",
  "url": "https://onlinevisiontest.org/eye-test-chart/",
  "description": "Download and print a free, clinically accurate Snellen eye chart.",
  "inLanguage": "en"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use the Printable Eye Chart",
  "step": [
    { "@type": "HowToStep", "name": "Print", "text": "Print the PDF chart on US Letter or A4 paper without scaling." },
    { "@type": "HowToStep", "name": "Calibrate", "text": "Verify the printed chart scale using a standard credit card." },
    { "@type": "HowToStep", "name": "Position", "text": "Tape the chart to a wall at eye level in a well-lit room." },
    { "@type": "HowToStep", "name": "Measure", "text": "Stand exactly 10 feet or 20 feet away." },
    { "@type": "HowToStep", "name": "Read", "text": "Cover one eye and read the lowest line possible." }
  ]
};
`;
c = c.replace(/---\r?\n\r?\n<Layout/, schemaStr + "\n---\n\n<Layout");
c = c.replace(/<Layout ([^>]+)>/, `<Layout $1 schema={chartSchema}>\n  <script type="application/ld+json" is:inline set:html={JSON.stringify(howToSchema)} />`);
fs.writeFileSync("src/pages/eye-test-chart.astro", c, "utf8");
