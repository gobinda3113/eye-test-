import fs from "fs";
let content = fs.readFileSync("src/components/HomePage.astro", "utf8");

const newHowToSchema = `const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: isUS ? "How to Take the DMV Practice Eye Test at Home" : d("schema.howTo.name"),
  description: meta.description,
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: d("schema.howTo.step1.name"),
      text: d("schema.howTo.step1.text"),
      url: (isUS ? SITE + "/us/" : locale === "en" ? SITE + "/" : SITE + "/" + locale + "/") + "#screener",
    },
    {
      "@type": "HowToStep",
      name: d("schema.howTo.step2.name"),
      text: d("schema.howTo.step2.text"),
      url: (isUS ? SITE + "/us/" : locale === "en" ? SITE + "/" : SITE + "/" + locale + "/") + "#screener",
    },
    {
      "@type": "HowToStep",
      name: d("schema.howTo.step3.name"),
      text: d("schema.howTo.step3.text"),
      url: (isUS ? SITE + "/us/" : locale === "en" ? SITE + "/" : SITE + "/" + locale + "/") + "#screener",
    },
    {
      "@type": "HowToStep",
      name: d("schema.howTo.step4.name"),
      text: d("schema.howTo.step4.text"),
      url: (isUS ? SITE + "/us/" : locale === "en" ? SITE + "/" : SITE + "/" + locale + "/") + "#reference",
    },
  ],
};`;

content = content.replace(/const howToSchema = \{[\s\S]*?"#reference",\r?\n\s*\},\r?\n\s*\],\r?\n\s*\};\r?\n/, newHowToSchema + "\n");
fs.writeFileSync("src/components/HomePage.astro", content, "utf8");
