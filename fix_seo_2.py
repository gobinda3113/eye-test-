import re

with open('src/data/seo.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix broken titles and sentences in seo.ts caused by previous generic replacement
reps = [
    (r"del oficial\s+", ""),
    (r"du oficial\s+", ""),
    (r"oficial Sehtest", "Sehtest"),
    (r"do oficial\s+", ""),
    (r"\|\s+oficial Practice", ""),
    (r"oficial\s+Practice", "Practice"),
    (r"\s+oficial\b", ""),
    (r"\boficial\s+", ""),
]

for old, new in reps:
    # only replace after the English block
    parts = content.split('const es = {', 1)
    if len(parts) > 1:
        non_en_part = 'const es = {' + parts[1]
        non_en_part = re.sub(old, new, non_en_part, flags=re.IGNORECASE)
        content = parts[0] + non_en_part

with open('src/data/seo.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("seo.ts titles fixed!")
