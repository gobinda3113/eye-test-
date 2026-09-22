import os

with open('src/pages/blog/index.astro', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace static locale="en" with dynamic locale={locale}
c = c.replace('locale="en"', 'locale={locale}')

header = """---
import { LOCALES, DEFAULT_LOCALE } from "../../lib/site.ts";
export const prerender = true;

export function getStaticPaths() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params;
"""

# Replace the first --- with our header and a new ---
c = c.replace('---', header, 1)

with open('src/pages/[locale]/blog/index.astro', 'w', encoding='utf-8') as f:
    f.write(c)

print("Blog pages generated for locales!")
