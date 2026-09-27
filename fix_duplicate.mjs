import fs from "fs";
let c = fs.readFileSync("src/pages/states/[state].astro", "utf8");

// replace ALL faqSchemas with empty
while (c.includes("const faqSchema =")) {
    c = c.replace(/const faqSchema = \{[\s\S]*?\}\s*\]\r?\n\};\r?\n/, "");
}

// remove the original one if it was faq.map
c = c.replace(/const faqSchema = \{[\s\S]*?\}\s*\)\)\r?\n\};\r?\n/, "");

// remove the script tag
c = c.replace(/  <script type="application\/ld\+json" is:inline set:html=\{JSON\.stringify\(faqSchema\)\} \/>\r?\n/g, "");

// now inject exactly once
const faqScript = `
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": \`What is the standard vision requirement for a \${stateData.name} driver's license?\`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": \`The standard vision requirement for a \${stateData.name} driver's license is \${stateData.min} in \${stateData.need === "both" ? "both eyes" : "at least one eye"}.\`
      }
    },
    {
      "@type": "Question",
      "name": \`Can I get a restricted license in \${stateData.name} if my vision is below the minimum?\`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stateData.restrict ? \`Yes, a restricted license may be possible with vision down to \${stateData.restrict}.\` : "No, restricted licenses are not generally permitted below the minimum standard in this state."
      }
    },
    {
      "@type": "Question",
      "name": \`How often is the vision test required in \${stateData.name}?\`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": \`The vision test is required \${stateData.renewal === "every" ? "every renewal cycle" : stateData.renewal === "alternate" ? "every other renewal cycle" : "depending on age or longer renewal cycles"}.\`
      }
    }
  ]
};
`;

c = c.replace(/---\r?\n\r?\n<Layout/, faqScript + "\n---\n\n<Layout");
c = c.replace(/<Layout([^>]+)>/, `<Layout$1>\n  <script type="application/ld+json" is:inline set:html={JSON.stringify(faqSchema)} />`);

fs.writeFileSync("src/pages/states/[state].astro", c, "utf8");
console.log("Fixed state schema duplicate");
