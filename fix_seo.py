import re

with open('src/data/seo.ts', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('const es = {', 1)
en_part = parts[0]
non_en_part = 'const es = {' + parts[1]

# Replacements to strip US/DMV context
reps = [
    (r"del DMV\b", ""),
    (r"\bDMV-", ""),
    (r"\bDMV\b", "oficial"),
    (r"\bCDL\b", "profesional"),
    (r"\bDOT\b", "transporte"),
    (r"50 estados", "tu región"),
    (r"50 states", "tu región"),
    (r"50 États", "votre région"),
    (r"50 Bundesstaaten", "Ihre Region"),
    (r"50 Staaten", "Ihre Region"),
    (r"EE\. UU\.", "tu país"),
    (r"US-", ""),
    (r"américain", "officiel"),
]

for old, new in reps:
    non_en_part = re.sub(old, new, non_en_part, flags=re.IGNORECASE)

with open('src/data/seo.ts', 'w', encoding='utf-8') as f:
    f.write(en_part + non_en_part)

print("seo.ts updated!")
