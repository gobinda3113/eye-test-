import re

with open('src/scripts/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('const es = {', 1)
en_part = parts[0]
non_en_part = 'const es = {' + parts[1]

# Fix weird grammatical remnants
reps = [
    (r"Confirma con el oficial", "Confirma con el centro"),
    (r"examen oficial ni oficial", "examen oficial"),
    (r"o oficial aval", "o centro aval"),
    (r"exame oficial do centro", "exame oficial"),
    (r"examen oficial \?", "examen oficial?"),
]

for old, new in reps:
    non_en_part = re.sub(old, new, non_en_part, flags=re.IGNORECASE)

with open('src/scripts/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(en_part + non_en_part)

print("i18n.ts cleaned up again!")
