import fs from "fs";
let content = fs.readFileSync("src/components/HomePage.astro", "utf8");

const newAppSchema = `const appSchema = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "HealthApplication", "MedicalWebPage"],
  name: "Online Vision Test",
  url: isUS ? SITE + "/us/" : locale === "en" ? SITE + "/" : SITE + "/" + locale + "/",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any modern web browser",
  browserRequirements: "Requires JavaScript and a calibrated display.",
  inLanguage: locale,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: meta.description,
  publisher: { "@type": "Organization", name: "Online Vision Test", url: SITE + "/" },
};`;

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

// We have to use a regex that handles whitespace and newlines flexibly
content = content.replace(/const appSchema = \{[\s\S]*?url: SITE \+ "\/",\r?\n\s*\};\r?\n/, newAppSchema + "\n");
content = content.replace(/const howToSchema = \{[\s\S]*?"#reference",\r?\n\s*\},\r?\n\s*\],\r?\n\s*\};\r?\n/, newHowToSchema + "\n");

fs.writeFileSync("src/components/HomePage.astro", content, "utf8");
console.log("Replaced schemas in HomePage.astro");
