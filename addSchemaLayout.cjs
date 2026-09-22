const fs = require('fs');
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf-8');

// 1. Add schema to props
layout = layout.replace(
  'const { locale = DEFAULT_LOCALE, page = "home", noindex = false } = Astro.props;',
  'const { locale = DEFAULT_LOCALE, page = "home", noindex = false, schema } = Astro.props;'
);

// 2. Add JSON-LD to head
layout = layout.replace(
  '</head>',
  '  {schema && <script type="application/ld+json" set:html={JSON.stringify(schema)} />}\n  </head>'
);

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Updated Layout.astro');
