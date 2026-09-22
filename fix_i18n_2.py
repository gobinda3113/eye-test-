import re

with open('src/scripts/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('const es = {', 1)
en_part = parts[0]
non_en_part = 'const es = {' + parts[1]

# Fix weird grammatical remnants from replacing DMV with "oficial"
reps = [
    (r"examen oficial del oficial", "examen oficial"),
    (r"examen oficial du oficial", "examen officiel"),
    (r"examen oficial do oficial", "exame oficial"),
    (r"examen oficial\s+,", "examen oficial,"),
    (r"al oficial\.", "al centro."),
    (r"el oficial eval", "el centro eval"),
    (r"en el oficial\.", "en el centro."),
    (r"du oficial", "du centre"),
    (r"le oficial", "le centre"),
    (r"au oficial", "au centre"),
    (r"dem oficial", "dem Amt"),
    (r"Beim oficial", "Beim Amt"),
    (r"der oficial", "das Amt"),
    (r"ao oficial\.", "ao centro."),
    (r"do oficial\?", "do centro?"),
    (r"do oficial", "do centro"),
    (r"no oficial", "no centro"),
    (r"o oficial eval", "o centro aval"),
    (r"empleado\s+con", "empleado con"),
    (r"examen oficial\s+ni", "examen oficial ni"),
    (r"del transporte", "oficial"),
    (r"du transporte", "officiel"),
]

for old, new in reps:
    non_en_part = re.sub(old, new, non_en_part, flags=re.IGNORECASE)

with open('src/scripts/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(en_part + non_en_part)

print("i18n.ts cleaned up!")
