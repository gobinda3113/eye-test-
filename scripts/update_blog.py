import re

with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# For dmv-eye-test-practice
text = text.replace('slug: "dmv-eye-test-practice",\n    englishOnly: true,', 'slug: "dmv-eye-test-practice",\n    englishOnly: false,', 1)

text = re.sub(
    r'(slug: "dmv-eye-test-practice",\s*englishOnly: false,\s*title: \{\s*en: "DMV Eye Test Online - Practice Test",)',
    r'\1\n      it: "Test Vista Patente Online - Esercitati",\n      ru: "Онлайн-тест зрения для DMV - Практика",',
    text
)

text = re.sub(
    r'(excerpt: \{\s*en: "Get ready for your official DMV vision screening with our free practice eye test.",)',
    r'\1\n      it: "Preparati per l\'esame della vista con il nostro test pratico gratuito.",\n      ru: "Подготовьтесь к официальной проверке зрения с помощью нашего бесплатного тренировочного теста.",',
    text
)

it_practice_content = """      it: `
        <h2>Esercitati per il Test della Vista</h2>
        <p>Se devi rinnovare la patente, dovrai superare un esame della vista. Puoi usare il nostro <strong>test della vista online</strong> come pratica per vedere se la tua acuità visiva soddisfa i requisiti.</p>
        
        <h3>Qual è il punteggio minimo?</h3>
        <p>Molti enti richiedono una visione di 20/40. Usando il nostro <strong>test di Snellen</strong>, puoi simulare l'esame. Questo è un test di pratica e non sostituisce l'esame ufficiale.</p>
        
        <h3>Come esercitarsi</h3>
        <p>Assicurati che lo schermo sia calibrato. Mettiti alla giusta distanza e leggi le lettere. Fare pratica a casa riduce l'ansia e ti fa capire se hai bisogno di un oculista.</p>
      `,"""

ru_practice_content = """      ru: `
        <h2>Тренировка перед проверкой зрения</h2>
        <p>Если вам нужно обновить водительские права, вам предстоит пройти проверку зрения. Вы можете использовать наш <strong>онлайн-тест зрения</strong> в качестве тренировки, чтобы проверить, соответствует ли ваша острота зрения требованиям.</p>
        
        <h3>Какой результат нужен?</h3>
        <p>В большинстве случаев требуется зрение 20/40. Используя нашу <strong>таблицу Сивцева</strong>, вы можете смоделировать экзамен. Обратите внимание, что это неофициальный тренировочный тест.</p>
        
        <h3>Как тренироваться</h3>
        <p>Убедитесь, что экран откалиброван. Встаньте на нужное расстояние и читайте буквы. Практика дома снизит тревожность и покажет, нужен ли вам визит к врачу.</p>
      `"""

text = re.sub(
    r'(slug: "dmv-eye-test-practice".*?en: `.*?`\n    )(})',
    r'\1,\n' + it_practice_content + '\n' + ru_practice_content + r'\n    \2',
    text,
    flags=re.DOTALL
)

# For 6-6-vision-test-online
text = text.replace('slug: "6-6-vision-test-online",\n    englishOnly: true,', 'slug: "6-6-vision-test-online",\n    englishOnly: false,', 1)

text = re.sub(
    r'(slug: "6-6-vision-test-online",\s*englishOnly: false,\s*title: \{\s*en: "6/6 Vision Test Online: What 6/6 Means and How to Check",)',
    r'\1\n      it: "Test della vista 6/6 online: Significato e come verificare",\n      ru: "Онлайн-тест зрения 6/6: что значит 6/6 и как проверить",',
    text
)

text = re.sub(
    r'(excerpt: \{\s*en: "6/6 is the metric form of 20/20. See the full 6/6 to 20/20 conversion chart and how to check 6/6 vision at home.",)',
    r'\1\n      it: "6/6 è la forma metrica di 20/20. Scopri la tabella di conversione e come controllare la vista a casa.",\n      ru: "6/6 — это метрический эквивалент 20/20. Ознакомьтесь с таблицей перевода и узнайте, как проверить зрение дома.",',
    text
)

it_66_content = """      it: `
        <h2>Cosa significa visione 6/6</h2>
        <p>6/6 è la forma metrica di 20/20. Significa che leggi a 6 metri ciò che un occhio standard legge a 6 metri. 6/6, 20/20 e 1.0 indicano tutti una normale visione da lontano.</p>
        
        <h2>Come controllare il 6/6 a casa</h2>
        <p>Posizionati a 6 metri dallo schermo (equivalenti ai 20 piedi americani). Calibra il display con una carta bancaria. Copri un occhio e leggi la riga più piccola. I nostri risultati sono in formato 20/xx, ma un 20/20 corrisponde a un 6/6.</p>
      `,"""

ru_66_content = """      ru: `
        <h2>Что означает зрение 6/6</h2>
        <p>6/6 — это метрическая форма 20/20. Это означает, что вы видите с 6 метров то, что стандартный глаз видит с 6 метров. 6/6, 20/20 и 1.0 означают нормальное зрение вдаль.</p>
        
        <h2>Как проверить 6/6 дома</h2>
        <p>Встаньте в 6 метрах от экрана. Сначала откалибруйте экран с помощью банковской карты. Закройте один глаз и прочитайте самую маленькую строку. Наши результаты отображаются в формате 20/xx, но результат 20/20 соответствует 6/6.</p>
      `"""

text = re.sub(
    r'(slug: "6-6-vision-test-online".*?en: `.*?`\n    )(})',
    r'\1,\n' + it_66_content + '\n' + ru_66_content + r'\n    \2',
    text,
    flags=re.DOTALL
)

with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done")
