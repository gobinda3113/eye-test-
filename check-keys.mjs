import { readFileSync } from 'fs';
import ts from 'typescript';

const fileContent = readFileSync('src/scripts/i18n.ts', 'utf8');
const sourceFile = ts.createSourceFile('i18n.ts', fileContent, ts.ScriptTarget.Latest, true);

const locales = {};
const allKeys = new Set();

function visit(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
    const name = node.name.text;
    if (['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ru'].includes(name) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      locales[name] = [];
      node.initializer.properties.forEach(prop => {
        if ((ts.isPropertyAssignment(prop) || ts.isStringLiteral(prop.name)) && prop.name) {
          const key = prop.name.text || prop.name.escapedText;
          if (key) {
             locales[name].push(key);
             allKeys.add(key);
          }
        }
      });
    }
  }
  ts.forEachChild(node, visit);
}
visit(sourceFile);

for (const loc in locales) {
  const missing = [];
  for (const k of allKeys) {
    if (!locales[loc].includes(k)) {
      missing.push(k);
    }
  }
  console.log(`Missing in ${loc}:`, missing);
}
