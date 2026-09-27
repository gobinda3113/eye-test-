import fs from "fs";
let newKeys = JSON.parse(fs.readFileSync("howto_keys.json", "utf8"));
let text = fs.readFileSync("src/scripts/i18n.ts", "utf8");
let langs = ["en", "es", "fr", "de", "pt", "it", "ja", "ru"];

for (let lang of langs) {
    let regex = new RegExp(`const ${lang} = \\{\\r?\\n([\\s\\S]*?)\\n\\s*\\};?`);
    let match = text.match(regex);
    if (match) {
        let lines = match[1].split(/\r?\n/);
        for (let k in newKeys[lang]) {
            lines.push(`    "${k}": "${newKeys[lang][k]}",`);
        }
        let newBlock = `const ${lang} = {\n${lines.join("\n")}\n  };`;
        text = text.replace(regex, newBlock);
    }
}

fs.writeFileSync("src/scripts/i18n.ts", text, "utf8");
console.log("Injected howto keys successfully.");
