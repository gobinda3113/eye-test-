const fs = require('fs');
let f = fs.readFileSync('src/data/seo.ts', 'utf8');

f = f.replace(
  /keywords: "teste de vis.*pelo celular",/,
  'keywords: "teste de vis\\u00E3o, teste de visao, teste de vis\\u00E3o online, teste de visao letras, teste de vis\\u00E3o pelo celular",'
);

fs.writeFileSync('src/data/seo.ts', f, 'utf8');
