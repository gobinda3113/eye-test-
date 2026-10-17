import { blogContent } from "../components/BlogContent.js";

export const POSTS = [
  {
    slug: "online-eye-test-guide",
    datePublished: "2025-05-15T09:00:00Z",
    dateModified: "2026-09-20T10:30:00Z",
    title: {
      en: "How to Take an Online Eye Test at Home",
      de: "Wie funktioniert ein online Sehtest?",
      fr: "Comment réaliser un test de vue en ligne ?",
      es: "Cómo hacer un examen de la vista online",
      pt: "Como fazer um teste de visão online",
      it: "Come eseguire un test della vista online",
      ja: "スマホでできる視力検査",
      ru: "Проверка зрения онлайн: как пройти тест"
    },
    excerpt: {
      en: "Learn how to use our free online eye test to check your vision at home.",
      de: "Erfahren Sie, wie Sie unseren kostenlosen Sehtest online nutzen.",
      fr: "Apprenez à utiliser notre test de vue en ligne gratuit.",
      es: "Aprende a usar nuestro examen de la vista online gratis en casa.",
      pt: "Aprenda a usar o nosso teste de visão online grátis em casa.",
      it: "Scopri come usare il nostro test della vista online gratuito.",
      ja: "自宅でできる無料の視力検査ツールの使い方を学びましょう。",
      ru: "Узнайте, как использовать наш бесплатный онлайн-тест зрения дома."
    },
    content: blogContent
  },
  {
    slug: "dmv-eye-test-practice",
    englishOnly: false,
    datePublished: "2025-06-20T09:00:00Z",
    dateModified: "2026-09-21T11:00:00Z",
    title: {
      en: "DMV Eye Test Online - Practice Test",
      es: "Examen de la vista para licencia de conducir - Prueba de práctica",
      de: "Führerschein Sehtest online - Übungstest",
      fr: "Test de vue permis de conduire - Entraînement en ligne",
      pt: "Simulado teste de visão Detran - Treino CNH online",
      it: "Test Vista Patente Online - Esercitati",
      ru: "Онлайн-тест зрения для водительских прав - Практика",
    },
    excerpt: {
      en: "Get ready for your official DMV vision screening with our free practice eye test.",
      es: "Prepárate para la prueba de visión del DMV o licencia de conducir con nuestro examen de práctica gratuito.",
      de: "Bereiten Sie sich mit unserem kostenlosen Sehtest-Übungstest auf die amtliche Sehprüfung vor.",
      fr: "Préparez-vous à l'examen de vue pour le permis avec notre test d'entraînement gratuit.",
      pt: "Prepare-se para o exame de vista da CNH no Detran com o nosso teste de treino gratuito.",
      it: "Preparati per l'esame della vista con il nostro test pratico gratuito.",
      ru: "Подготовьтесь к официальной проверке зрения с помощью нашего бесплатного тренировочного теста.",
    },
    content: {
      en: `
        <h2>Practice for the DMV Eye Test</h2>
        <p>If you are heading to the Department of Motor Vehicles to renew or obtain your driver's license, you must pass a basic vision screening. You can use our <a href="/">free online eye test</a> tool as a <a href="/us/">DMV practice test</a> to determine whether your visual acuity meets your state's minimum legal benchmarks, or practice with our <a href="/eye-test-chart/">Snellen eye test chart</a>.</p>
        
        <h3>What is the DMV passing score?</h3>
        <p>In almost every US state, an unrestricted driver's license requires <strong>20/40 visual acuity</strong> in both eyes combined or in at least one eye. If your eyesight falls between 20/40 and 20/70, most licensing agencies still allow you to drive with a restriction (such as corrective lenses or daylight-only driving) after an eye specialist completes an official evaluation form.</p>
        
        <h3>How the screening works at the counter</h3>
        <p>At the DMV counter, examiners typically ask applicants to look into an optical viewer machine (such as an Optec or Titmus viewer) or read an illuminated Snellen chart on a wall 10 or 20 feet away. You will be asked to read a specific line—frequently line 5, corresponding to the 20/40 mark—first with both eyes open, then monocularly with one eye occluded.</p>
        
        <h3>How to practice accurately at home</h3>
        <p>Ensure your screen is calibrated using a standard credit card (85.6 mm). Mark a line exactly 10 feet (3 meters) away from your display. Cover one eye with your palm without pressing on the eyeball, and read down the randomized letters. Testing each eye individually at home eliminates test anxiety and tells you immediately if you should renew your prescription glasses before your appointment.</p>
      `,
      es: `
        <h2>Práctica para el examen de la vista de conducir</h2>
        <p>Si necesitas renovar u obtener tu licencia de conducir, deberás superar una revisión visual básica. Puedes utilizar nuestra herramienta de <a href="/es/test/">examen de la vista online gratis</a> como prueba de práctica para verificar si tu agudeza visual cumple los requisitos legales.</p>
        
        <h3>¿Cuál es la agudeza visual mínima exigida?</h3>
        <p>La mayoría de los organismos de tráfico exigen una agudeza visual de <strong>20/40</strong> con ambos ojos o al menos en el ojo dominante para una licencia sin restricciones. Si tu visión se sitúa entre 20/40 y 20/70, generalmente puedes obtener una licencia con restricciones (como el uso obligatorio de gafas correctoras o conducción exclusivamente diurna) previa autorización médica.</p>
        
        <h3>Cómo prepararte en casa</h3>
        <p>Calibra tu pantalla con una tarjeta bancaria para asegurar que el tamaño de las letras sea exacto. Colócate a 3 metros de distancia, tápate un ojo sin presionar el párpado y lee la línea más pequeña que distingas. Esta práctica casera te permite saber si necesitas visitar al optometrista antes de tu cita oficial.</p>
      `,
      de: `
        <h2>Übung für den Führerschein-Sehtest</h2>
        <p>Wer den Führerschein erwerben oder verlängern möchte, muss eine amtliche Sehprüfung bestehen. Nutzen Sie unseren <a href="/de/test/">kostenlosen Sehtest online</a> als Übungstest, um Ihre Sehschärfe im Vorfeld verlässlich zu überprüfen.</p>
        
        <h3>Mindestanforderungen an die Sehstärke</h3>
        <p>Für die gängige Führerscheinklasse B wird meist eine Sehschärfe von mindestens 0,7 (entspricht 20/40) auf beiden Augen oder zentral verlangt. Werden diese Werte ohne Sehhilfe nicht erreicht, wird im Führerschein eine entsprechende Auflage für eine Brille oder Kontaktlinsen vermerkt.</p>
        
        <h3>So üben Sie zu Hause</h3>
        <p>Kalibrieren Sie Ihren Monitor mit einer Standardkarte auf die exakte Millimetergröße. Halten Sie 3 Meter Abstand, decken Sie ein Auge ab und lesen Sie die Zeilen ab. So stellen Sie rechtzeitig fest, ob Ihre Sehhilfe noch optimal angepasst ist.</p>
      `,
      fr: `
        <h2>Entraînement pour le test de vue du permis</h2>
        <p>Avant de vous présenter à l'examen du permis de conduire ou à votre visite médicale, entraînez-vous avec notre <a href="/fr/test/">test de vue en ligne gratuit</a> pour vérifier si votre acuité visuelle est conforme aux normes officielles.</p>
        
        <h3>Quel est le score requis ?</h3>
        <p>Dans la plupart des pays, une acuité minimale de 20/40 (ou 5/10e à 7/10e selon les barèmes) est nécessaire pour conduire sans restriction. Si vous n'atteignez pas ce seuil sans correction, le port de lunettes ou lentilles correctrices sera mentionné sur votre permis.</p>
        
        <h3>Conseils d'entraînement</h3>
        <p>Calibrez votre écran à l'aide d'une carte bancaire, reculez de 3 mètres et testez chaque œil séparément. Cela vous évitera toute surprise lors du contrôle officiel.</p>
      `,
      pt: `
        <h2>Simulado para o teste de visão do Detran (CNH)</h2>
        <p>Se você vai tirar ou renovar a Carteira Nacional de Habilitação (CNH), terá que passar pelo exame de aptidão física e mental com avaliação oftalmológica. Use o nosso <a href="/pt/test/">teste de visão online grátis</a> como um simulado prático para checar sua acuidade visual.</p>
        
        <h3>Qual a acuidade visual mínima exigida pelo Detran?</h3>
        <p>Para motoristas da categoria B (veículos de passeio), a resolução do Contran exige acuidade visual igual ou superior a <strong>20/40</strong> no melhor olho. Quem não atinge essa marca com visão natural precisará utilizar lentes corretivas (óculos ou lentes de contato), recebendo a observação 'A' na CNH.</p>
        
        <h3>Como fazer o simulado em casa</h3>
        <p>Calibre a tela usando um cartão magnético para garantir a escala correta dos optótipos. Afaste-se 3 metros da tela, cubra o olho esquerdo com a mão em concha (sem apertar o olho) e leia as menores letras possíveis. Em seguida, repita o teste com o outro olho. Se tiver dificuldades na linha de 20/40, consulte um oftalmologista antes do exame oficial.</p>
      `,
      it: `
        <h2>Esercitati per il Test della Vista della Patente</h2>
        <p>Se devi rinnovare o conseguire la patente di guida, dovrai sottoporti alla visita medica di idoneità visiva. Puoi usare il nostro <a href="/it/test/">test della vista online gratis</a> per verificare se la tua vista soddisfa i requisiti minimi di legge.</p>
        
        <h3>Requisiti minimi di acuità visiva</h3>
        <p>Per la patente B, la normativa richiede generalmente un'acuità visiva complessiva di almeno 0,7 (equivalente a 20/40), con non meno di 0,2 nell'occhio peggiore. Se raggiungi questo valore solo con occhiali o lenti a contatto, sulla patente verrà apposto il codice 01 (obbligo di lenti).</p>
        
        <h3>Come fare pratica a casa</h3>
        <p>Assicurati di calibrare lo schermo con una carta bancomat per garantire le dimensioni corrette delle lettere di Snellen. Posizionati a 3 metri di distanza, copri un occhio con la mano senza premere e leggi le lettere più piccole che riesci a distinguere. Esercitarti a casa riduce l'ansia da prestazione e ti aiuta a capire se hai bisogno di una nuova visita oculistica.</p>
      `,
      ru: `
        <h2>Тренировка перед проверкой зрения на водительские права</h2>
        <p>Если вам предстоит визит в ГИБДД или медкомиссию для получения либо продления водительских прав, воспользуйтесь нашим <a href="/ru/test/">бесплатным онлайн-тестом зрения</a> для предварительной тренировки.</p>
        
        <h3>Нормативы остроты зрения для водителей</h3>
        <p>Для категории B обычно требуется острота зрения не менее 0.6 на лучшем глазу и не менее 0.2 на худшем (или суммарно около 20/40 по шкале Снеллена). Если зрение не дотягивает до нормы без коррекции, в водительском удостоверении проставляется отметка об обязательном ношении очков или контактных линз (GCL).</p>
        
        <h3>Как правильно тренироваться дома</h3>
        <p>Обязательно откалибруйте экран по банковской карте. Встаньте на расстояние 3 метров от монитора, прикройте один глаз ладонью и назовите буквы проверочной таблицы. Домашняя тренировка помогает снять стресс перед медосмотром и заблаговременно проверить актуальность ваших очков.</p>
      `
    }
  },
  {
    slug: "dmv-eye-test-fail-guide",
    englishOnly: true,
    datePublished: "2025-08-10T09:00:00Z",
    dateModified: "2026-09-21T14:15:00Z",
    title: {
      en: "What Happens If You Fail the DMV Eye Test",
    },
    excerpt: {
      en: "Failed the DMV vision test? Here is what happens next: the doctor form, the retest, and the restrictions.",
    },
    content: {
      en: `
        <h2>Failing is paperwork, not punishment</h2>
        <p>You failed the DMV eye test. Nothing happens to your licence that day. The examiner gives you a form for an eye doctor, you get checked, and you return to retake the vision screening. You can practice in advance with our <a href="/">online vision test</a> and calibrated <a href="/eye-test-chart/">eye test chart</a>. People fail for boring reasons: they left their glasses at home, their prescription is two years old, or they have never had one eye checked on its own. All of that is fixable in a week.</p>

        <h2>Which form you will get</h2>
        <p>It depends on the state. California hands out the Report of Vision Examination (DL-62). New York uses form MV-619 for a straight pass at 20/40 or better, and form MV-80L if you land between 20/40 and 20/70 or wear telescopic lenses (that one goes to the Medical Review Unit, not the counter). Florida uses the HSMV Report of Eye Exam (form 72010). Texas uses the Explanation for Eye Specialist (DL-63). Take the right paper to an optometrist or ophthalmologist, get it signed, and bring it back.</p>

        <h2>The restrictions you might drive home with</h2>
        <p>Passing with glasses puts a corrective-lenses restriction on your licence, usually coded B. Weaker results can add daylight-only driving or an outside-mirror requirement. Texas is specific: the 20/60 to 20/70 band means daylight only and no faster than 45 mph. None of these end your driving. They match the licence to how you actually see.</p>

        <h2>How to come back and pass</h2>
        <p>Get the correction first, then retest. If your prescription changed, new glasses or contacts usually settle it. After LASIK or a fresh pass without correction, most states lift the restriction at your next visit. In New York you can also submit a passing result through the <a href="https://dmv.ny.gov/driver-license/online-vision-registry">Online Vision Registry</a> instead of queuing at an office. Before you go, rehearse at home: <a href="/test/">run the free practice screening</a>, calibrate the screen, and test each eye separately so there are no surprises.</p>
        <p>Practice is not the official test, and it cannot diagnose anything. If your results worry you, see an optometrist before your appointment. Our <a href="/about/">about page</a> explains what this screener can and cannot tell you.</p>
      `
    }
  },
  {
    slug: "dmv-eye-test-machine",
    englishOnly: true,
    datePublished: "2025-09-05T09:00:00Z",
    dateModified: "2026-09-22T08:45:00Z",
    title: {
      en: "DMV Eye Test Machine: What You Will Look Into",
    },
    excerpt: {
      en: "What the Optec and Titmus viewers show, what 'read line 5' means, and how to rehearse it at home.",
    },
    content: {
      en: `
        <h2>The box on the counter</h2>
        <p>Most DMV offices test vision with a desktop viewer, not a wall poster. Common models are the Optec 1000 and the Titmus V1. You rest your forehead against the hood and look inside at small slides. That enclosure is the point: the driver's license dmv eye test machine fixes your distance and blocks room light, so every applicant gets the same conditions. The Titmus tests far vision at 20 feet and near vision at 16 inches in the same unit.</p>

        <h2>What the examiner asks you to do</h2>
        <p>You read lines of letters or numbers, one eye at a time, then both together. The manuals for these machines describe the rhythm plainly: read one numbered line fully, move to the next, stop where you miss. Examiners often call out "read line 5," which is why that phrase shows up in search results. It is just the 20/40 row on that slide set. After acuity comes the rest: flashes at the sides for peripheral vision and a red, green and amber check for colour. The colour part is not a full colour-blindness exam. It only asks whether you can separate traffic signals.</p>

        <h2>Wall chart offices</h2>
        <p>Some offices still use a <a href="/eye-test-chart/">Snellen chart on the wall</a> at 10 or 20 feet. Same task, less ceremony: cover one eye with your palm, read the smallest line you can, swap eyes. You can also run our <a href="/">online eye test</a> to calibrate your screen before testing.</p>

        <h2>How to rehearse honestly</h2>
        <p>Looking for a cheat sheet dmv eye test machine? Cheat sheets and memorised posters do not transfer because offices rotate charts. What transfers is procedure: calibrate the screen with a bank card, stand at a marked 3 metres, cover one eye without pressing on it, and read randomised letters. That is exactly what <a href="/test/">the free practice screening</a> runs. If you wear glasses to drive, practise in them. Passing with correction is normal, and it is better to learn that at home than at the counter. Read <a href="/blog/dmv-eye-test-fail-guide/">what happens if you fail</a> so the worst case holds no surprises either.</p>
      `
    }
  },
  {
    slug: "dmv-vision-requirements-by-state",
    englishOnly: true,
    datePublished: "2025-10-18T09:00:00Z",
    dateModified: "2026-09-22T16:20:00Z",
    title: {
      en: "DMV Vision Requirements by State: CA, TX, FL, NY, NC",
    },
    excerpt: {
      en: "Plain-English DMV vision rules for California, Texas, Florida, New York and North Carolina, with the official forms.",
    },
    content: {
      en: `
        <h2>The rule almost everywhere</h2>
        <p>Nearly every state wants 20/40 or better with both eyes for a full licence, and most will still licence you with a restriction down to about 20/70. See our comprehensive guide to <a href="/states/">all 50 state DMV vision requirements</a> or test yourself with our <a href="/">online eye test</a>. Below that you see an eye doctor and retest. The differences sit in the details: per-eye versus both-together standards, field-of-vision degrees, and which form the doctor signs. Five states below, each checked against the statute or the agency page.</p>

        <h2>California: two thresholds, one form</h2>
        <p>California (Vehicle Code section 12804.9) reads 20/40 with both eyes together, plus 20/40 in one eye and at least 20/70 in the other. Miss it and you get 60 days on a temporary licence to return form DL-62 from an eye doctor. Fall short on the left eye and you may face a supplemental drive test with a freeway stretch. <a href="https://www.dmv.ca.gov/portal/driver-education-and-safety/medical-conditions-and-driving/vision-conditions/">CA DMV vision conditions</a>.</p>

        <h2>Texas: tiers, and the 45 mph surprise</h2>
        <p>Texas measures in bands. 20/40 passes clean. 20/50 passes with a specialist note. 20/60 to 20/70 with a note means a daylight-only licence capped at 45 mph. Worse than 20/70 fails until corrected. The eye-doctor paper is form DL-63, and note the agency is the DPS, not a DMV. <a href="https://www.dps.texas.gov/section/driver-license">Texas DPS driver licence</a>.</p>

        <h2>Florida: the one-eye rule</h2>
        <p>Florida asks 20/70 in either eye or both together where vision cannot be improved, with a 130-degree field. The trap is monocularity: if one eye is 20/200 or worse, the other must reach 20/40. The doctor form is HSMV-72010. <a href="https://www.flhsmv.gov/driver-licenses-id-cards/medical-review/vision-standards/">FLHSMV vision standards</a>.</p>

        <h2>New York: two forms, do not mix them up</h2>
        <p>New York passes 20/40 in either or both eyes. Form MV-619 certifies a pass and is good for 12 months. Form MV-80L is for results between 20/40 and 20/70 or telescopic lenses, and it goes to the Medical Review Unit, not the counter. Bringing the wrong form to the office is the classic avoidable rejection. New York also runs an <a href="https://dmv.ny.gov/driver-license/online-vision-registry">Online Vision Registry</a> so approved providers can file results directly. <a href="https://dmv.ny.gov/driver-license/vision-requirements-and-restrictions">NY vision requirements</a>.</p>

        <h2>North Carolina: one good eye, and teens take note</h2>
        <p>North Carolina passes 20/40 or better in at least one eye for an unrestricted licence. The practical failure point is driver education: students who forget their glasses on screening day fail and cannot start behind-the-wheel training until they pass. Remote renewals use a self-attestation of no vision change.</p>

        <h2>What to bring in any state</h2>
        <p>Glasses or contacts, your current prescription, photo ID, and any failed-test form already signed by your eye doctor. Confirm the current rule with your own agency before you go, since standards change. Then <a href="/test/">practise the screening at home</a> so the counter holds no surprises. This guide is practice information only. It is not medical advice, and state summaries can go out of date. Our <a href="/about/">about page</a> states the limits plainly.</p>
      `
    }
  },
  {
    slug: "6-6-vision-test-online",
    englishOnly: false,
    datePublished: "2025-11-12T09:00:00Z",
    dateModified: "2026-09-23T07:10:00Z",
    title: {
      en: "6/6 Vision Test Online: What 6/6 Means and How to Check",
      es: "Test de visión 6/6 online: qué significa y tabla de conversión 20/20",
      de: "6/6 Sehtest online: Bedeutung und 20/20 Umrechnungstabelle",
      fr: "Test de vision 6/6 en ligne : signification et équivalence 20/20",
      pt: "Teste de visão 6/6 online: o que significa e conversão para 20/20",
      it: "Test della vista 6/6 online: Significato e come verificare",
      ru: "Онлайн-тест зрения 6/6: что значит 6/6 и как проверить",
    },
    excerpt: {
      en: "6/6 is the metric form of 20/20. See the full 6/6 to 20/20 conversion chart and how to check 6/6 vision at home.",
      es: "6/6 es la forma métrica de 20/20. Consulta la tabla de conversión y cómo comprobar tu visión 6/6 en casa.",
      de: "6/6 ist das metrische Äquivalent zu 20/20. Entdecken Sie die Umrechnungstabelle und wie Sie Ihre Sehkraft zu Hause testen.",
      fr: "6/6 est la notation métrique de 20/20. Consultez le tableau de conversion et testez votre vision chez vous.",
      pt: "6/6 é a forma métrica de 20/20. Veja a tabela de conversão completa e como verificar sua visão em casa.",
      it: "6/6 è la forma metrica di 20/20. Scopri la tabella di conversione e come controllare la vista a casa.",
      ru: "6/6 — это метрический эквивалент 20/20. Ознакомьтесь с таблицей перевода и узнайте, как проверить зрение дома.",
    },
    content: {
      en: `
        <h2>What 6/6 vision means</h2>
        <p>6/6 is the metric form of 20/20. It indicates that you can read at 6 metres what an eye with standard visual acuity reads at 6 metres. Many Commonwealth countries and Indian clinical centers report vision using metric notation, while North America measures at 20 feet (about 6.1 metres). 6/6, 20/20, and decimal 1.0 all describe normal baseline distance acuity.</p>

        <h2>6/6 to 20/20 conversion chart</h2>
        <p>Every row below represents one line on a standardized <a href="/eye-test-chart/">visual acuity chart</a> written in metric, imperial, and decimal formats:</p>
        <table class="state-table">
          <thead><tr><th>Metric (6 m)</th><th>Feet (20 ft)</th><th>Decimal</th><th>Clinical Significance</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Normal baseline distance acuity</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Near normal; passes all driving standards</td></tr>
            <tr><td>6/9</td><td>20/30</td><td>0.67</td><td>Mild distance blur</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Standard <a href="/us/">DMV minimum driving cutoff</a> in most jurisdictions</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Restricted license or corrective lens requirement</td></tr>
            <tr><td>6/24</td><td>20/80</td><td>0.25</td><td>Requires corrective lenses for safe driving</td></tr>
            <tr><td>6/30</td><td>20/100</td><td>0.2</td><td>Substantial distance impairment</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Statutory legal blindness cutoff without correction</td></tr>
          </tbody>
        </table>

        <h2>How to check 6/6 acuity at home</h2>
        <p>Position yourself exactly 6 metres (or 20 feet) from your screen. Calibrate your display using a physical bank card or ID card, because an uncalibrated optotype cannot provide accurate angular measurements. Gently cover one eye with your palm without pressing against the eyelid, read the smallest row of optotypes, and then repeat with the other eye. You can run <a href="/">our free practice screener</a> directly in your browser.</p>
      `,
      es: `
        <h2>Qué significa una visión 6/6</h2>
        <p>6/6 es la notación métrica equivalente a 20/20 en el sistema imperial. Indica que a 6 metros puedes leer lo que una persona con visión estándar distingue a esa misma distancia. En la escala decimal, 6/6 y 20/20 corresponden a 1.0 (visión normal al 100%).</p>
        
        <h2>Tabla de equivalencias 6/6 a 20/20</h2>
        <p>La siguiente tabla muestra cómo se corresponden los resultados entre sistemas:</p>
        <table class="state-table">
          <thead><tr><th>Métrico (6 m)</th><th>Pies (20 ft)</th><th>Decimal</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Visión normal</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Excelente agudeza</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Mínimo legal estándar para conducir</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Requiere corrección óptica</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Límite de ceguera legal sin lentes</td></tr>
          </tbody>
        </table>

        <h2>Cómo comprobar tu agudeza en casa</h2>
        <p>Para comprobar si tienes visión 6/6 o 20/20, calibra tu pantalla con una tarjeta plástica en nuestra <a href="/es/test/">prueba visual gratuita</a> y colócate a la distancia recomendada. Si notas dificultades para leer las líneas intermedias, es aconsejable consultar a un especialista.</p>
      `,
      de: `
        <h2>Was bedeutet eine Sehkraft von 6/6?</h2>
        <p>6/6 ist die metrische Angabe für eine Sehschärfe von 20/20 oder einen Dezimal-Visus von 1,0. Es bedeutet, dass Sie auf 6 Meter Entfernung das erkennen können, was ein normalsichtiges Auge auf 6 Meter sieht.</p>
        
        <h2>Umrechnungstabelle von 6/6 zu 20/20</h2>
        <table class="state-table">
          <thead><tr><th>Metrisch (6 m)</th><th>Fuß (20 ft)</th><th>Dezimal</th><th>Bedeutung</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Normale Sehschärfe</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Mindestwert für den Führerschein</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Sehhilfe erforderlich</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Gesetzliche Erblindungsgrenze</td></tr>
          </tbody>
        </table>

        <h2>Sehtest zu Hause durchführen</h2>
        <p>Mit unserem <a href="/de/test/">kostenlosen Sehtest online</a> können Sie Ihre Sehschärfe schnell und kalibriert prüfen. Halten Sie den erforderlichen Abstand ein und testen Sie jedes Auge einzeln.</p>
      `,
      fr: `
        <h2>Que signifie une acuité visuelle de 6/6 ?</h2>
        <p>6/6 est la notation métrique de l'acuité 20/20. Elle signifie que vous distinguez à 6 mètres ce qu'un œil standard lit à 6 mètres. Dans le système décimal couramment utilisé en Europe, cela équivaut à 10/10e (1.0).</p>
        
        <h2>Tableau de conversion 6/6, 20/20 et décimal</h2>
        <table class="state-table">
          <thead><tr><th>Métrique</th><th>Impérial</th><th>Décimal</th><th>Statut</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>10/10 (1.0)</td><td>Vision normale</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>5/10 (0.5)</td><td>Seuil légal pour le permis de conduire</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>3/10 (0.33)</td><td>Nécessite des verres correcteurs</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>1/10 (0.1)</td><td>Seuil de malvoyance sévère</td></tr>
          </tbody>
        </table>

        <h2>Comment vérifier votre vision chez vous</h2>
        <p>Grâce à notre <a href="/fr/test/">test de vue en ligne</a>, étalonnez votre affichage avec une carte bancaire et vérifiez votre vision à distance pour chaque œil séparément.</p>
      `,
      pt: `
        <h2>O que significa visão 6/6</h2>
        <p>6/6 é a representação métrica de 20/20 (ou 1.0 na escala decimal). Isso indica que você consegue ler a 6 metros o que uma pessoa com visão padrão enxerga a 6 metros. É o padrão internacional para visão normal à distância.</p>

        <h2>Tabela de conversão 6/6 para 20/20 e escala decimal</h2>
        <table class="state-table">
          <thead><tr><th>Métrico (6 m)</th><th>Pés (20 ft)</th><th>Decimal</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Visão normal perfeita</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Excelente acuidade</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Limite mínimo para CNH sem restrição</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Exige lentes corretivas para dirigir</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Limite de cegueira legal</td></tr>
          </tbody>
        </table>

        <h2>Como testar em casa</h2>
        <p>Você pode testar sua visão em nosso <a href="/pt/test/">teste de visão online gratuito</a>. Calibre a tela com seu cartão de banco e mantenha a distância correta para avaliar se a sua visão atinge o padrão 6/6 ou 20/40.</p>
      `,
      it: `
        <h2>Cosa significa visione 6/6</h2>
        <p>6/6 è la forma metrica di 20/20 (o 10/10 nel sistema decimale europeo). Significa che leggi a 6 metri ciò che un occhio standard legge a 6 metri. 6/6, 20/20 e 1.0 indicano tutti una normale e ottimale visione da lontano.</p>
        
        <h2>Tabella di conversione da 6/6 a 20/20</h2>
        <table class="state-table">
          <thead><tr><th>Metrico (6 m)</th><th>Piedi (20 ft)</th><th>Decimale</th><th>Significato</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0 (10/10)</td><td>Visione normale ottimale</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5 (5/10)</td><td>Soglia minima per idoneità patente</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33 (3/10)</td><td>Richiede correzione visiva</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1 (1/10)</td><td>Soglia di cecità legale</td></tr>
          </tbody>
        </table>

        <h2>Come controllare il 6/6 a casa</h2>
        <p>Posizionati a 6 metri dallo schermo (o a 3 metri per la scala ridotta). Calibra il display con una carta bancaria sul nostro <a href="/it/test/">test della vista gratuito</a>. Copri un occhio e leggi la riga più piccola per verificare se raggiungi i 10/10.</p>
      `,
      ru: `
        <h2>Что означает зрение 6/6</h2>
        <p>6/6 — это метрическая форма записи остроты зрения 20/20 (или 1.0 в десятичной шкале, принятой в странах СНГ). Это означает, что вы видите с расстояния 6 метров те знаки, которые человек с нормальным зрением должен видеть с 6 метров.</p>
        
        <h2>Таблица перевода 6/6, 20/20 и десятичной шкалы</h2>
        <table class="state-table">
          <thead><tr><th>Метрическая (6 м)</th><th>Шкала Снеллена (20 ft)</th><th>Десятичная (Сивцев)</th><th>Клиническое значение</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Нормальное зрение 100%</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Хорошая острота зрения</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Минимальный порог для водительских прав</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Требуется очковая коррекция</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Тяжелое нарушение зрения</td></tr>
          </tbody>
        </table>

        <h2>Как проверить зрение 6/6 дома</h2>
        <p>Начните с калибровки экрана по банковской карте в нашем <a href="/ru/test/">бесплатном онлайн-тренажёре</a>. Встаньте на необходимое расстояние, проверяйте каждый глаз отдельно и сопоставьте результат с приведенной таблицей.</p>
      `
    }
  },
  {
    slug: "can-you-wear-glasses-for-dmv-eye-test",
    englishOnly: true,
    datePublished: "2026-01-15T09:00:00Z",
    dateModified: "2026-09-23T08:00:00Z",
    title: {
      en: "Can You Wear Glasses for the DMV Eye Test? Rules & Restrictions",
    },
    excerpt: {
      en: "Can you wear reading glasses or contact lenses during your DMV eye test? Understand the corrective lenses restriction, testing rules, and how to pass.",
    },
    content: {
      en: `
        <h2>Can you wear glasses during the DMV vision screening?</h2>
        <p><strong>Yes, you can absolutely wear glasses or contact lenses during your DMV eye test.</strong> Millions of drivers take and pass their vision screening with corrective lenses every day. In fact, if you need prescription lenses to see clearly at distance, you should always bring them to the DMV counter. You can pre-check your acuity using our <a href="/">online eye test</a> or printable <a href="/eye-test-chart/">Snellen eye test chart</a>.</p>

        <h2>What about reading glasses?</h2>
        <p>A common question applicants search for is: <em>can you use reading glasses for the DMV eye test?</em> <strong>The short answer is generally no for distance acuity.</strong></p>
        <p>Reading glasses (cheaters or plus lenses) are designed to magnify objects within arm's reach (about 14 to 16 inches). Because the primary DMV vision exam measures distance visual acuity at an optical simulation of 20 feet (6 meters), wearing pure reading glasses will actually blur your distance vision and cause you to fail line 5. You must use distance lenses, bifocals, or progressives rather than single-vision reading glasses for the distance check.</p>

        <h2>What is the 'B' Corrective Lenses Restriction?</h2>
        <p>If you take and pass the vision test while wearing glasses or contacts, the licensing officer will place a <strong>corrective lenses restriction</strong> on your driver's license (commonly denoted with code <strong>B</strong> on most state licenses). This restriction legally requires you to wear your corrective lenses whenever operating a motor vehicle. Driving without your glasses when this restriction is active is a traffic violation that carries fines and potential citations.</p>

        <h2>Can you remove the restriction later?</h2>
        <p>Yes. If your vision improves (for example, after LASIK or cataract surgery), or if you can meet the 20/40 benchmark without lenses, you can return to the DMV, retake the vision screening uncorrected, and have the restriction removed from your physical card.</p>

        <h2>How to prepare before going to the counter</h2>
        <p>Before your appointment, test your eyesight at home with and without your corrective eyewear. Use <a href="/test/">our free practice DMV vision screener</a> to verify which eye reaches 20/40. If your current glasses still feel blurry at 10 or 20 feet, visit an eye doctor for an updated prescription before visiting the DMV.</p>
      `
    }
  },
  {
    slug: "snellen-chart-explained",
    englishOnly: true,
    datePublished: "2026-02-20T09:00:00Z",
    dateModified: "2026-09-23T09:00:00Z",
    title: {
      en: "Snellen Eye Test Chart Explained: What 20/20 and 20/40 Mean",
    },
    excerpt: {
      en: "Everything you need to know about the Snellen eye test chart: how letter sizes are measured, what 20/20 and 20/40 mean, and why line 5 matters at the DMV.",
    },
    content: {
      en: `
        <h2>The history of the Snellen eye chart</h2>
        <p>Invented in 1862 by Dutch ophthalmologist Herman Snellen, the <a href="/eye-test-chart/">Snellen eye test chart</a> remains the global standard for measuring distance visual acuity. The chart consists of eleven lines of block letters (optotypes) that decrease in size as you read downward.</p>

        <h2>How the 5x5 grid works</h2>
        <p>Snellen optotypes are not standard typographic fonts. Each letter is meticulously drafted on a 5x5 grid where each stroke, gap, and limb subtends exactly 1 minute of arc (1/60th of a degree) on the retina when viewed from the designated test distance. A 20/20 letter at 20 feet subtends an overall visual angle of 5 minutes of arc.</p>

        <h2>Understanding the 20/xx fraction</h2>
        <p>The numbers in Snellen notation describe a ratio comparing your vision to a standardized reference eye:</p>
        <ul>
          <li><strong>Top number (20):</strong> The distance in feet from which you are viewing the chart.</li>
          <li><strong>Bottom number (e.g., 20, 40, 100):</strong> The distance from which a person with standard normal visual acuity could read that same line of letters.</li>
        </ul>
        <p>If your score is <strong>20/40</strong>, you must stand at 20 feet to read what a person with normal vision could comfortably read from 40 feet away. If your score is <strong>20/20</strong>, your distance visual acuity matches the accepted clinical baseline.</p>

        <h2>Why 'Line 5' is famous at the DMV</h2>
        <p>In driver licensing facilities and online forums, people often ask about "line 5 <a href="/us/">DMV eye test</a>". On standard Snellen charts calibrated for 20-foot viewing distances, Line 5 is typically the <strong>20/40 line</strong> (usually containing letters like P-E-C-F-D). Because 20/40 is the statutory minimum requirement to obtain an unrestricted driver's license in most US states, Line 5 is the crucial cutoff that examiners test.</p>

        <h2>Why static wall posters mislead</h2>
        <p>Many people print an eye chart poster or pull up an image on a smartphone. However, an uncalibrated digital image has an arbitrary pixel size that changes with screen resolution and magnification. If the letters are rendered 20% too large or too small, a true 20/40 letter can be easily misjudged as 20/20 or 20/60. To get an accurate measurement, use <a href="/">our card-calibrated online vision test</a>, which scales vector optotypes to exact physical millimeter standards.</p>
      `
    }
  },
  {
    slug: "dominant-eye-test",
    locales: ["en"],
    englishOnly: true,
    datePublished: "2026-03-01T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "en": "Dominant Eye Test: How to Find Your Dominant Eye at Home"
    },
    excerpt: {
      "en": "Learn how to take a dominant eye test at home using the Miles and Porta methods. Discover why eye dominance matters for shooting, archery, and driving."
    },
    content: {
      en: `
<h2>What is Eye Dominance and Why Does It Matter?</h2>
      <p>Just as most people are naturally right-handed or left-handed, the human brain typically favors visual input from one eye over the other. This biological phenomenon is known as <strong>ocular dominance</strong> or eye preference. When you look at an object in space with both eyes open, your eyes view it from slightly different angles. Your brain's visual cortex merges these two perspectives into a single three-dimensional image, but it relies primarily on your dominant eye for directional positioning, depth perception, and target alignment.</p>
      
      <p>Approximately 70% of people have right-eye dominance, while roughly 29% are left-eye dominant, and less than 1% exhibit mixed or alternating dominance. Interestingly, eye dominance does not always align with your dominant hand. If you write with your right hand but sight with your left eye, you have <strong>cross-dominance</strong> (also known as crossed hand-eye dominance). Knowing which eye dominates your vision is critical for activities ranging from clay shooting and archery to golf, photography, and driving. Before checking ocular dominance, you can establish baseline clarity with our <a href="/">online vision test</a>.</p>

      <h2>Method 1: The Miles Sighting Test</h2>
      <p>The Miles test is the gold-standard sighting test used by optometrists, sports trainers, and shooting coaches to determine the dominant eye. It requires no specialized equipment—only your hands and an object across the room.</p>
      
      <h3>Step-by-step instructions:</h3>
      <ol>
        <li>Extend both arms straight out in front of you at shoulder height.</li>
        <li>Bring your hands together and overlap your thumbs and index fingers to form a small triangular opening (about 1 to 2 inches wide).</li>
        <li>Keeping both eyes wide open, look through the opening and center a small object across the room—such as a doorknob, light switch, or clock on the wall—inside the triangular frame.</li>
        <li>Without moving your hands or head, close your <strong>left eye</strong>.</li>
        <li>If the object remains centered inside the opening, your <strong>right eye is dominant</strong>. If the target jumps out of view or is hidden by your hands, your left eye was doing the work.</li>
        <li>Now reopen both eyes and close your <strong>right eye</strong> to confirm. If the object stays centered while your right eye is closed, your <strong>left eye is dominant</strong>.</li>
      </ol>

      <h2>Method 2: The Porta Alignment Test</h2>
      <p>Another classic technique is the Porta test, which isolates ocular alignment using a single extended finger or thumb rather than a hand aperture.</p>
      
      <h3>Step-by-step instructions:</h3>
      <ol>
        <li>Extend your dominant arm straight out in front of you.</li>
        <li>Raise your index finger or thumb vertically, like a sight post.</li>
        <li>With both eyes open, align the tip of your finger with a distant focal point on the wall.</li>
        <li>Close one eye at a time while keeping your arm completely stationary.</li>
        <li>The eye that keeps the finger aligned directly over the target is your dominant eye. The non-dominant eye will make your finger appear to jump several inches to the side due to binocular parallax.</li>
      </ol>

      <h2>Method 3: The Hole-in-Card Technique</h2>
      <p>If you suspect you may be unintentionally nudging your hands toward your favored side during the Miles test, the hole-in-card test provides an objective check. Take a standard piece of paper or cardboard (about 8.5x11 inches) and cut a circular hole approximately 1 inch (2.5 cm) in diameter through the center.</p>
      <p>Hold the card with both hands at full arm's length. Look through the circular cutout at a distant target with both eyes open. Slowly draw the card backward toward your face while keeping the target in view. Naturally and involuntarily, your hands will guide the hole toward your dominant eye until the opening touches your face over that single eye.</p>

      <h2>Sensory Dominance vs. Sighting Dominance</h2>
      <p>Vision scientists distinguish between two types of dominance: <strong>motor (sighting) dominance</strong> and <strong>sensory dominance</strong>. Sighting dominance is what the Miles and Porta tests measure: the eye you naturally choose to align an object with a target. Sensory dominance, on the other hand, refers to which eye's retina provides stronger visual signals to the cerebral cortex when competing images are shown to both eyes.</p>
      <p>In most individuals, sighting and sensory dominance coincide. However, having a dominant eye does not automatically mean that eye has better 20/20 visual acuity. You can easily have a dominant eye that suffers from mild myopia or astigmatism while your non-dominant eye sees sharper. For that reason, measuring acuity per eye with a calibrated <a href="/eye-test-chart/">Snellen eye test chart</a> is essential.</p>

      <h2>Practical Applications: Where Eye Dominance Counts</h2>
      
      <h3>1. Marksmanship, Archery, and Hunting</h3>
      <p>In shooting sports, aligning sights on a rifle, shotgun, or bow requires sighting along the barrel or arrow shaft. Cross-dominant individuals (e.g., right-handed shooters with left dominant eyes) often face significant challenges: shooting from their natural shoulder can cause shots to pull consistently to the left. Solutions include learning to shoot from the off-hand shoulder, placing occluder tape over the shooting glasses lens of the dominant eye, or shooting with both eyes open using specialized red-dot optics.</p>

      <h3>2. Driving and License Vision Screenings</h3>
      <p>In motor vehicle licensing, understanding eye dominance helps explain how you perceive hazards on the road. Examiners at the DMV evaluate monocular and binocular visual acuity separately. If you are preparing for a counter vision check, practicing monocular occlusion beforehand with our <a href="/us/">DMV practice test</a> helps ensure your non-dominant eye meets statutory minimums (typically 20/40).</p>

      <h3>3. Monovision Correction (Presbyopia)</h3>
      <p>When adults reach their 40s and experience presbyopia (difficulty reading small print up close), optometrists often prescribe <strong>monovision</strong> contact lenses or refractive surgery. In a monovision setup, the dominant eye is corrected for distance vision (driving, walking, watching television), while the non-dominant eye is biased slightly for near reading. Understanding your dominant eye ensures the eye doctor tunes the correct eye for long-range clarity.</p>

      <h3>4. Photography and Sports</h3>
      <p>Photographers naturally place their dominant eye against the camera viewfinder, leaving the non-dominant eye to monitor surrounding action. Similarly, in baseball, golf, and tennis, the position of your dominant eye relative to the ball influences head turn, stance, and swing plane.</p>

      <h2>Frequently Asked Questions About Eye Dominance</h2>

      <h3>Can your dominant eye switch or change over time?</h3>
      <p>Under normal neurological conditions, ocular dominance remains stable throughout adulthood. However, significant ocular changes—such as dense cataracts, retinal disease, or refractive surgery in one eye—can cause the brain to reweight visual inputs, shifting dominance toward the eye with better neural fidelity.</p>

      <h3>What if the target jumps when closing both eyes?</h3>
      <p>If the target shifts away from center regardless of which eye you close, you likely moved your hands or head during the test. Repeat the Miles test, ensuring your arms remain locked straight ahead and both eyes stay wide open until you consciously close one eyelid.</p>

      <h3>Can you have no dominant eye?</h3>
      <p>Yes. A small percentage of the population exhibits equal or mixed dominance. These individuals can alternate sighting preference easily depending on the viewing angle or task.</p>

      <h2>Take a Comprehensive Vision Check</h2>
      <p>Finding your dominant eye is an enlightening discovery, but eye dominance is only one aspect of complete visual health. Take ten minutes to calibrate your screen, test your distance acuity, color perception, contrast sensitivity, and astigmatism using our <a href="/">free online vision test</a>.</p>
      `
    }
  },
  {
    slug: "sehtest-online-handy",
    locales: ["de"],
    englishOnly: false,
    datePublished: "2026-03-05T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "de": "Sehtest online am Handy: Sehkraft kostenlos prüfen"
    },
    excerpt: {
      "de": "Sehtest online am Handy machen: Prüfen Sie Sehschärfe, Kontrast und Farbsehen kostenlos am Smartphone. Anleitung zur richtigen Display-Kalibrierung."
    },
    content: {
      de: `
<h2>Sehkraft flexibel testen: Wie funktioniert ein Sehtest online am Handy?</h2>
      <p>In einer zunehmend digitalen Welt verbringen wir täglich viele Stunden vor Bildschirmen. Smartphones, Tablets und Monitore belasten unsere Augen intensiv, was häufig zu Symptomen wie verschwommenem Sehen, trockenen Augen oder Kopfschmerzen führt. Viele Menschen fragen sich daher: Kann man einen <strong>Sehtest online am Handy</strong> durchführen, um die eigene Sehstärke schnell und unkompliziert von zu Hause aus zu überprüfen? Die Antwort lautet: Ja, vorausgesetzt, der Test wird technisch präzise kalibriert und unter kontrollierten Bedingungen durchgeführt. Mit unserem <a href="/de/">Online-Sehtest</a> können Sie Ihr Sehvermögen innerhalb von zehn Minuten kostenlos orientierend überprüfen.</p>
      
      <p>Ein browserbasierter Sehtest auf dem Smartphone bietet eine hervorragende Möglichkeit, Veränderungen der Sehleistung frühzeitig zu erkennen. Ob vor dem Neukauf einer Brille, vor dem Besuch beim Optiker oder einfach zur regelmäßigen Selbstkontrolle: Moderne Webtechnologien ermöglichen es, Sehzeichen (Optotypen) mit exakter Vektorschärfe direkt auf dem Handybildschirm darzustellen.</p>

      <h2>Die physikalische Kalibrierung: Warum Millimeter auf dem Display entscheidend sind</h2>
      <p>Das größte Problem herkömmlicher Online-Sehtests im Internet sind statische Bilddateien. Ein Bild mit 500 Pixeln Breite erscheint auf einem kompakten Smartphone winzig, während es auf einem großen Tablet oder Laptop riesig dargestellt wird. Wenn die Buchstaben nicht im korrekten Verhältnis zum Sehabstand stehen, ist das Testergebnis physikalisch wertlos.</p>
      
      <p>Um eine echte Sehschärfenprüfung (Visus-Messung) durchzuführen, muss das Auge einen Optotypen unter einem genau definierten Sehwinkel wahrnehmen. In der Augenheilkunde entspricht die Standard-Sehschärfe (Visus 1,0 bzw. 20/20) der Fähigkeit, eine Detailöffnung von genau <strong>1 Winkelminute</strong> (1/60 Grad) zu erkennen. Unser Werkzeug löst dieses Problem durch eine Kalibrierung mit einer Standardkarte (Bankkarte oder Personalausweis nach ISO/IEC 7810, 85,6 mm Breite). Durch diesen Schritt weiß die Software millimetergenau, wie viele Pixel Ihr Handydisplay pro Zentimeter besitzt, und zeichnet die Buchstaben in absolut präziser Winkelgröße.</p>

      <h2>Schritt-für-Schritt-Anleitung für den Smartphone-Sehtest</h2>
      <p>Damit Ihre Ergebnisse zu Hause verlässlich sind, sollten Sie die folgenden Schritte sorgfältig befolgen:</p>

      <h3>1. Das Smartphone vorbereiten</h3>
      <ul>
        <li>Stellen Sie die Bildschirmhelligkeit auf ein angenehm helles Niveau (ca. 70 bis 80 %).</li>
        <li>Deaktivieren Sie Blaufilter, Nachtmodi (z. B. Night Shift) oder True-Tone-Funktionen, da diese den Kontrast verändern.</li>
        <li>Wischen Sie das Display sauber, um Fingerabdrücke und Lichtstreuungen zu entfernen.</li>
      </ul>

      <h3>2. Den richtigen Testabstand einhalten</h3>
      <p>Für die Nahsehschärfe halten Sie das Smartphone in bequemer Lesehaltung im Abstand von ca. 35 bis 40 Zentimetern. Für die Fernsehschärfe wird das Smartphone aufrecht auf einem Regal oder Tisch in Augenhöhe platziert, und Sie treten genau auf den angegebenen Abstand zurück (meist 1,5 bis 3 Meter, je nach gewähltem Kalibrierungsmodus).</p>

      <h3>3. Augen getrennt prüfen (Monokulare Prüfung)</h3>
      <p>Beim beidäugigen Sehen kann ein stärkeres Auge die Schwäche des anderen Auges mühelos ausgleichen. Decken Sie deshalb immer ein Auge mit der hohlen Hand ab. Achten Sie darauf, das Auge nicht zuzukneifen oder Druck auf den Augapfel auszuüben, da Druck die Hornhaut vorübergehend verformt und das anschließende Testergebnis verfälscht.</p>

      <h2>Welche Sehfunktionen können Sie am Handy testen?</h2>
      <p>Ein moderner Online-Sehtest am Handy beschränkt sich nicht nur auf das Lesen von Buchstaben. Unser umfassender Screener umfasst mehrere wichtige Dimensionen des Sehens:</p>

      <h3>Sehschärfe in der Ferne (Fernvisus)</h3>
      <p>Hierbei kommen standardisierte Snellen-Buchstaben oder das Tumbling-E (Landolt-Prinzip) zum Einsatz. Sie geben an, in welche Richtung die Öffnung des Zeichens zeigt. Sie können sich an unserer klassischen <a href="/eye-test-chart/">Snellen-Sehtafel</a> orientieren, um die Abstufungen von 0,1 bis 1,0 nachzuvollziehen.</p>

      <h3>Nahsehtest (Leseabstand)</h3>
      <p>Dieser Test prüft das Scharfstellen im Nahbereich. Er hilft insbesondere Personen ab etwa 40 Jahren zu erkennen, ob eine beginnende Altersweitsichtigkeit (Presbyopie) vorliegt und eine Lesebrille erforderlich wird.</p>

      <h3>Astigmatismus-Test (Hornhautverkrümmung)</h3>
      <p>Mithilfe einer Strahlenfigur (Sonnenuhr) wird geprüft, ob Linien in allen Meridianen gleichmäßig schwarz und scharf wahrgenommen werden. Erscheinen einzelne Linienstränge dunkler oder verwaschen, weist dies auf einen unkorrigierten Astigmatismus hin.</p>

      <h3>Farbsehen und Kontrastempfindlichkeit</h3>
      <p>Pseudo-isochromatische Farbtafeln prüfen, ob eine angeborene Rot-Grün-Sehschwäche vorliegt. Der Kontrasttest prüft zudem, wie gut Sie feine Graustufen vor weißem Hintergrund unterscheiden können—ein wichtiger Sicherheitsfaktor bei Fahrten in der Dämmerung oder bei Nebel.</p>

      <h2>Grenzen des Handy-Sehtests: Wann Sie zum Augenarzt müssen</h2>
      <p>Ein digitaler Sehtest am Smartphone ist ein wertvolles Instrument zur Orientierung und Früherkennung, ersetzt jedoch niemals eine umfassende medizinische Untersuchung. Bestimmte Aspekte können nur in einer Praxis untersucht werden:</p>
      <ul>
        <li><strong>Augeninnendruckmessung:</strong> Entscheidend für die Früherkennung des Grünen Stars (Glaukom), der schleichend und schmerzlos verläuft.</li>
        <li><strong>Untersuchung des Augenhintergrunds:</strong> Beurteilung der Netzhaut, der Makula und der Blutgefäße bei Diabetes oder Bluthochdruck.</li>
        <li><strong>Amtlicher Führerschein-Sehtest:</strong> Wer in Deutschland, Österreich oder der Schweiz einen Führerschein beantragt (Klasse B nach Fahrerlaubnis-Verordnung FeV), benötigt eine amtliche Sehtestbescheinigung einer anerkannten Sehteststelle (Optiker oder Augenarzt). Online-Tests dienen hierbei ausschließlich als Vorbereitung und Übungstest.</li>
      </ul>

      <h2>Häufig gestellte Fragen (FAQ) zum Sehtest am Smartphone</h2>

      <h3>Wie genau ist das Ergebnis am Handy wirklich?</h3>
      <p>Dank der Kartenkalibrierung erreicht unser Test eine geometrische Genauigkeit, die klassischen Papiertafeln in Arztpraxen entspricht. Voraussetzung ist jedoch, dass Sie den Testabstand mit einem Maßband exakt einhalten und Ihr Auge nicht zusammenkneifen.</p>

      <h3>Kann ich den Test mit meiner aktuellen Brille machen?</h3>
      <p>Ja! Wenn Sie bereits eine Brille oder Kontaktlinsen tragen, sollten Sie den Test einmal mit Sehhilfe und einmal ohne Sehhilfe durchführen. So stellen Sie sofort fest, ob Ihre Sehhilfe noch optimal korrigiert oder ob sich Ihre Dioptrienwerte verändert haben.</p>

      <h3>Kostet der Online-Sehtest etwas?</h3>
      <p>Nein, unser Angebot ist zu 100 % kostenlos, werbefrei und erfordert keinerlei Registrierung. Ihre Testergebnisse verbleiben ausschließlich im Speicher Ihres Browsers.</p>

      <h2>Starten Sie Ihre kostenlose Sehprüfung</h2>
      <p>Nutzen Sie die Gelegenheit und überprüfen Sie Ihre Sehkraft jetzt gleich bequem am Smartphone. Klicken Sie auf <a href="/de/test/">kostenlosen Sehtest starten</a>, kalibrieren Sie Ihr Display in wenigen Sekunden und erhalten Sie eine verlässliche Rückmeldung über Ihr Sehvermögen.</p>
      `
    }
  },
  {
    slug: "sumaho-shiryoku-kensa",
    locales: ["ja"],
    englishOnly: false,
    datePublished: "2026-03-08T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "ja": "スマホで視力検査：無料で自宅チェックする方法"
    },
    excerpt: {
      "ja": "スマホで視力検査を簡単に行う方法を徹底解説。画面の校正手順、検査距離、ランドルト環やスネレン視力表を使った正確な測定のコツをご紹介します。"
    },
    content: {
      ja: `
<h2>スマートフォンでできる視力検査とは？</h2>
      <p>テレワークの普及やスマートフォンの長時間利用により、「夕方になると文字がかすむ」「遠くの標識が見えにくくなった」「目の奥が重い」といった目の不調を訴える方が急増しています。眼科クリニックへ行く時間がなかなか取れないとき、手元の端末で手軽に測定できるのが<strong>スマホ 視力検査</strong>（オンライン視力セルフチェック）です。当サイトの<a href="/ja/">オンライン視力検査</a>ツールを使えば、アプリのダウンロードや会員登録なしで、ブラウザ上ですぐに自宅視力測定を開始できます。</p>
      
      <p>「スマホの画面で本当に正確な検査ができるの？」と疑問に思う方も多いでしょう。結論から言うと、<strong>画面の物理的サイズを正確に校正（キャリブレーション）</strong>し、適切な検査距離を保つことで、眼科の視力表に匹敵する幾何学的な視力測定が可能になります。</p>

      <h2>なぜ画面キャリブレーションが不可欠なのか？</h2>
      <p>インターネット上で見かける一般的な「視力検査画像」をスマホでそのまま表示しても、正しい視力は測れません。その理由は、画面の大きさや解像度（画素密度・PPI）が機種によって全く異なるからです。同じ「300ピクセルの文字」でも、画面の小さいスマートフォンでは極小になり、大型タブレットでは巨大に表示されてしまいます。</p>
      
      <p>視力測定の国際基準（ISO規格）では、視力1.0は「5メートルの距離から1分角（60分の1度）の切れ目を判別できる能力」と定義されています。当サイトのツールでは、身の回りにある標準規格カード（クレジットカード、交通系ICカード、運転免許証など：ISO/IEC 7810規格で幅85.6ミリ）を画面の枠に合わせてスライダーを調整します。これにより、お使いの端末の1ミリあたりのピクセル数が自動計算され、画面上にミリ単位で正確な視標（オプトタイプ）がベクター描画されます。</p>

      <h2>スマホで視力検査を行う実践ステップ</h2>
      <p>自宅で信頼性の高い結果を得るために、以下の手順で検査環境を整えましょう。</p>

      <h3>1. ディスプレイの準備</h3>
      <ul>
        <li>画面の明るさを自然な明るさ（70%程度）に設定します。</li>
        <li>Night Shiftやブルーライトカットモード、True Toneなど、色温度やコントラストを自動変更する機能を一時的にオフにします。</li>
        <li>画面の汚れや指紋を拭き取り、照明の映り込み（グレア）がない位置に画面を置きます。</li>
      </ul>

      <h3>2. 測定距離を正確に測る</h3>
      <p>手元の近見視力検査（読書距離）の場合は、目から画面まで約35〜40cmの距離を保ちます。遠見視力検査の場合は、スマートフォンをデスクや棚の上に垂直に固定し、指定された測定距離（1.5m〜3m）まで下がります。メジャーなどで床に目印をつけておくと、測定中の前傾姿勢を防げます。</p>

      <h3>3. 片目ずつ測定する（遮眼のポイント）</h3>
      <p>両目で検査すると、視力の良い方の目がもう一方の目のピントのずれを補正してしまい、片目の視力低下に気付けません。必ず片目を手のひらでお椀のように覆って測定してください。このとき、<strong>まぶたを強く押さえない</strong>ことが重要です。眼球を圧迫すると一時的に角膜が変形し、その後の検査で正確な測定ができなくなります。</p>

      <h2>スマホでチェックできる主な視覚機能</h2>
      <p>当スクリーナーでは、一般的な視力だけでなく、多角的な視覚スクリーニングを提供しています。</p>

      <h3>遠見視力（スネレン・ランドルト環テスト）</h3>
      <p>上下左右の切れ目を答える「ランドルト環」や、アルファベットを読み取る「スネレン視標」を用いて、遠くを見る解像力を測定します。段階的な指標の大きさは、<a href="/eye-test-chart/">スネレン視力表</a>の解説ページでご確認いただけます。</p>

      <h3>乱視テスト（放射線ダイヤル）</h3>
      <p>車輪のスポークのように放射状に並んだ線を見つめます。特定の方向の線だけが太く濃く見えたり、一部の線がにじんで見える場合、角膜や水晶体の歪み（乱視）が存在する可能性を示唆します。</p>

      <h3>赤緑テスト（デュオクローム検査）</h3>
      <p>赤色と緑色の背景に描かれた二重リングを見比べます。赤がはっきり見える場合は遠視・低矯正の傾向、緑がはっきり見える場合は近視・過矯正の傾向があります。現在使用しているメガネやコンタクトレンズの度数が強すぎないかを調べる目安になります。</p>

      <h3>コントラスト感度・色覚プレート</h3>
      <p>薄いグレーの視標を識別するコントラスト感度テストや、赤緑色覚を評価する数字プレートにより、日常生活の視覚の質（クオリティ・オブ・ビジョン）を総合的に判定します。</p>

      <h2>運転免許更新前のセルフチェックとして活用</h2>
      <p>日本の運転免許試験および免許更新時（第1種普通免許）には、<strong>「両眼で0.7以上、かつ片眼でそれぞれ0.3以上」</strong>の視力基準が定められています。片眼が0.3未満であっても、もう一方の目の視力が0.7以上で、視野が左右150度以上あれば合格となりますが、事前の把握が不可欠です。</p>
      <p>免許センターの検査機で慌てないために、自宅であらかじめセルフチェックを行い、視力が0.7を下回っている場合は、更新手続きの前に眼科や眼鏡店で度数調整を済ませておくことを強くおすすめします。</p>

      <h2>よくある質問（FAQ）</h2>

      <h3>スマホの視力検査は眼科の代わりになりますか？</h3>
      <p>いいえ、オンライン検査はあくまで健康管理や練習のためのスクリーニングツールです。緑内障（眼圧検査）、白内障、網膜剥離、加齢黄斑変性などの眼疾患は、眼科医による専門機器での診察でのみ発見できます。異常を感じた場合は速やかに医師の診察を受けてください。</p>

      <h3>子どもの視力をスマホで測っても大丈夫ですか？</h3>
      <p>お子様の目は調節力が非常に強いため、スマホ画面を見つめると一時的な調節緊張（仮性近視）が起きやすく、正確な数値を捉えにくい場合があります。お子様の視力低下が疑われる場合は、小児眼科を受診することをおすすめします。</p>

      <h3>メガネやコンタクトを着けたまま検査すべきですか？</h3>
      <p>裸眼の視力だけでなく、現在使っているメガネやコンタクトレンズを装用した状態（矯正視力）でも測定してみてください。矯正視力で1.0や0.7が見えなくなっている場合は、度数の見直し時期です。</p>

      <h2>今すぐ無料視力チェックを体験</h2>
      <p>準備は簡単です。画面の指示に従ってカードを画面に重ねるだけで、誰でも10秒で正確な測定環境が整います。まずは<a href="/ja/test/">無料の視力測定を試す</a>から、ご自身の視力をチェックしてみましょう。</p>
      `
    }
  },
  {
    slug: "teste-de-visao-para-perto",
    locales: ["pt"],
    englishOnly: false,
    datePublished: "2026-03-12T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "pt": "Teste de visão para perto: como avaliar a visão em casa"
    },
    excerpt: {
      "pt": "Aprenda a fazer o teste de visão para perto em casa. Identifique presbiopia ou vista cansada, avalie a acuidade e saiba quando consultar um especialista."
    },
    content: {
      pt: `
<h2>O que é o teste de visão para perto e por que ele é essencial?</h2>
      <p>Você já se pegou esticando o braço para ler uma mensagem no celular, aproximando uma bula de remédio da luz ou sentindo dores de cabeça após meia hora de leitura no computador? Esses são sinais clássicos de que sua acuidade visual de perto está diminuindo. Realizar um <strong>teste de visão para perto</strong> em casa é o primeiro passo para compreender a saúde dos seus olhos e identificar o início da presbiopia (popularmente conhecida como "vista cansada"). Com o nosso <a href="/pt/">teste de visão online</a>, você pode avaliar tanto a visão de perto quanto a visão de longe gratuitamente e com precisão milimétrica.</p>
      
      <p>A acuidade visual para perto mede a capacidade do sistema óptico ocular de focar detalhes finos a uma distância de trabalho habitual—geralmente entre 35 e 40 centímetros. Enquanto a visão de longe depende principalmente do formato anatômico do globo ocular e da curvatura da córnea, a visão de perto depende diretamente da flexibilidade do cristalino e da ação dos músculos ciliares.</p>

      <h2>O que causa a perda de foco de perto: a Presbiopia</h2>
      <p>A partir dos 40 anos de idade, o cristalino—a lente natural gelatinosa localizada no interior do olho—começa a perder gradativamente sua elasticidade natural. Trata-se de um processo fisiológico inevitável do envelhecimento humano, denominado <strong>presbiopia</strong>. Jovens conseguem alterar o foco de um ponto distante para um ponto a 10 cm dos olhos em frações de segundo (o chamado reflexo de acomodação visual). Conforme os anos passam, essa capacidade diminui progressivamente, tornando o foco em distâncias inferiores a 50 centímetros cada vez mais difícil e borrado.</p>

      <h2>Como funciona a escala e a distância no teste de perto</h2>
      <p>Na prática clínica oftalmológica e na optometria, a avaliação de perto é tradicionalmente realizada com a <strong>Tabela de Jaeger</strong> (com linhas graduadas de J1 a J7) ou com tabelas de Snellen reduzidas e escalas logMAR ajustadas para 40 cm (16 polegadas).</p>
      <ul>
        <li><strong>J1 ou 20/20 de perto:</strong> Visão nítida para textos minúsculos, equivalente a ler notas de rodapé ou caracteres em telas pequenas sem nenhum esforço.</li>
        <li><strong>J3 ou 20/40 de perto:</strong> Visão aceitável para textos comuns de jornais, livros e mensagens no WhatsApp em tamanho de fonte padrão.</li>
        <li><strong>J5 a J7:</strong> Dificuldade severa para leitura de perto, exigindo o afastamento constante dos braços ou letras muito ampliadas.</li>
      </ul>

      <h2>Passo a passo para realizar o teste de visão para perto em casa</h2>
      <p>Para garantir que o seu teste caseiro forneça resultados confiáveis, siga com atenção estas orientações:</p>

      <h3>1. Calibre a escala na tela</h3>
      <p>Letras exibidas na tela de um computador ou celular variam enormemente de tamanho conforme a resolução da tela. Em nosso teste interativo, você utiliza um cartão magnético padrão (como cartão de crédito ou débito, com 85,6 mm de largura) sobre a tela para ajustar a régua virtual. Isso garante que cada optótipo na tela tenha a altura física e o ângulo visual exatos.</p>

      <h3>2. Mantenha a distância correta</h3>
      <p>Segure o smartphone ou posicione-se em frente ao monitor a exatamente <strong>40 centímetros</strong> (o comprimento médio do antebraço de um adulto). Não incline a cabeça para frente nem curve as costas para tentar aproximar os olhos.</p>

      <h3>3. Ilumine bem o ambiente</h3>
      <p>Realize o teste em uma sala bem iluminada, mas sem reflexos diretos de lâmpadas ou janelas sobre a tela do aparelho. Reflexos reduzem o contraste e podem criar falsos resultados negativos.</p>

      <h3>4. Teste cada olho individualmente e ambos juntos</h3>
      <p>Cubra o olho esquerdo com a palma da mão em concha (sem pressionar a pálpebra) e leia a menor linha de texto visível. Em seguida, troque e teste o olho direito. Por fim, leia com os dois olhos abertos. Se você já utiliza óculos de leitura ou multifocais, teste primeiro com os óculos e depois sem eles para avaliar a eficácia do seu grau atual.</p>

      <h2>Sinais claros de que você precisa de óculos para perto</h2>
      <p>Muitas pessoas convivem com desconforto visual durante meses ou anos antes de procurar ajuda. Fique atento a estes sintomas característicos:</p>
      <ul>
        <li>Necessidade de aumentar o tamanho da fonte em todos os aplicativos do smartphone.</li>
        <li>Sensação de "olhos pesados" ou dor na testa e ao redor das sobrancelhas no final da tarde.</li>
        <li>Dificuldade para costurar, ler preços em prateleiras de supermercado ou enfiar uma linha na agulha.</li>
        <li>Visão momentaneamente embaçada ao olhar para longe após passar vários minutos lendo de perto.</li>
      </ul>

      <h2>Diferença entre o teste para perto e o teste para longe</h2>
      <p>Uma pessoa pode ter uma visão de longe perfeita (20/20) e, ao mesmo tempo, ser incapaz de ler um livro sem óculos de perto. Da mesma forma, um indivíduo com miopia pode enxergar perfeitamente de perto ao tirar os óculos, mas não distinguir uma placa de trânsito a 5 metros de distância. Por essa razão, uma autoavaliação completa deve conjugar a acuidade de perto com uma <a href="/eye-test-chart/">tabela de teste de visão Snellen</a> para distância.</p>

      <h2>A visão de perto em exames admissionais e na CNH</h2>
      <p>Embora o exame do Detran para motoristas privilegie a acuidade visual de longe e o campo periférico, muitos concursos públicos, perícias militares e exames admissionais em indústrias exigem acuidade comprovada para perto. Fazer um <a href="/pt/test/">simulado de exame visual</a> ajuda a verificar se sua visão está em conformidade com as normas profissionais antes da avaliação formal.</p>

      <h2>Perguntas frequentes sobre visão de perto</h2>

      <h3>Usar óculos de farmácia para perto estraga a visão?</h3>
      <p>Óculos prontos comprados em farmácias possuem o mesmo grau em ambas as lentes e não consideram a distância pupilar (DP) nem o astigmatismo. Embora possam servir como quebra-galho temporário, o uso contínuo pode causar cansaço visual e tonturas. Apenas uma receita personalizada garante conforto ideal.</p>

      <h3>Exercícios oculares podem curar a presbiopia?</h3>
      <p>Infelizmente não. A presbiopia decorre do endurecimento físico das fibras do cristalino ao longo da vida. Nenhum exercício muscular é capaz de devolver a elasticidade original à estrutura do cristalino.</p>

      <h2>Faça sua avaliação gratuita agora mesmo</h2>
      <p>Não deixe suas dúvidas para depois. Acesse o nosso <a href="/pt/">teste de visão online</a>, calibre seu aparelho e descubra em dez minutos como está a saúde dos seus olhos de perto e de longe.</p>
      `
    }
  },
  {
    slug: "tabela-teste-de-visao-detran",
    locales: ["pt"],
    englishOnly: false,
    datePublished: "2026-03-15T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "pt": "Tabela de teste de visão do Detran: treino para o exame"
    },
    excerpt: {
      "pt": "Treine com a tabela de teste de visão do Detran para a renovação da CNH. Veja os requisitos de acuidade visual 20/40, teste de cores e como passar no exame."
    },
    content: {
      pt: `
<h2>Como funciona o exame de vista do Detran para a CNH?</h2>
      <p>Quem vai tirar a primeira Carteira Nacional de Habilitação (CNH) ou renovar o documento precisa passar pelo exame de aptidão física e mental em uma clínica credenciada pelo Detran. Uma das etapas que mais gera ansiedade nos candidatos é a avaliação oftalmológica. Conhecer a <strong>tabela teste de visão Detran</strong> e entender os critérios exigidos pela legislação de trânsito é a melhor maneira de se preparar com tranquilidade. Usando o nosso <a href="/pt/">teste de visão online</a>, você pode treinar em casa, avaliar se sua visão atinge a linha de corte e evitar surpresas no dia da consulta.</p>
      
      <p>O exame do Detran não é um exame médico de refração completo: ele funciona como uma triagem (screening) visual de segurança. O objetivo do médico perito examinador é constatar se o condutor possui acuidade visual, campo de visão periférica e percepção de cores suficientes para conduzir um veículo automotor sem colocar em risco a própria vida e a de terceiros.</p>

      <h2>Qual tabela o Detran usa: Snellen, Tumbling-E ou Aparelho Fechado?</h2>
      <p>Dependendo da clínica e do estado, a avaliação visual do Detran pode ser realizada de duas formas principais:</p>
      
      <h3>1. Tabela de Snellen Tradicional</h3>
      <p>Fixada na parede ou projetada em painel luminoso a uma distância padrão (geralmente entre 3 e 6 metros), a <a href="/eye-test-chart/">tabela de teste de visão Snellen</a> apresenta onze linhas de optótipos com letras padronizadas que diminuem de tamanho de cima para baixo. Em alguns locais, para examinar analfabetos ou pessoas com dificuldades com o alfabeto latino, utiliza-se a <strong>Tabela do E de Snellen (Tumbling-E)</strong> ou os <strong>Anéis de Landolt</strong>, em que o candidato apenas aponta para onde a abertura da letra está voltada (para cima, para baixo, para a esquerda ou para a direita).</p>

      <h3>2. Aparelho de Teste Visual Fechado (Ortorratador / Campímetro)</h3>
      <p>Muitas clínicas modernas utilizam aparelhos desktop fechados (como o Ortorratador ou Titmus). Neles, o candidato apoia a testa em um suporte de borracha e visualiza cartões iluminados internamente. Esses equipamentos simulam o infinito óptico (distância equivalente a 6 metros) e permitem avaliar simultaneamente acuidade monocular, visão binocular, campo periférico e visão cromática.</p>

      <h2>Quais são os requisitos mínimos do Contran para ser aprovado?</h2>
      <p>As exigências visuais para condutores no Brasil são regulamentadas pelo Conselho Nacional de Trânsito (CONTRAN), principalmente pela Resolução nº 927/2022 e atualizações correlatas:</p>

      <h3>Categorias A e B (Carros de Passeio e Motocicletas)</h3>
      <ul>
        <li><strong>Acuidade visual:</strong> É exigida acuidade visual igual ou superior a <strong>20/40 (0,5 ou 50%)</strong> no melhor olho. O outro olho pode ter acuidade inferior ou até mesmo visão monocular, desde que o melhor olho alcance a marca exigida e o campo visual seja preservado.</li>
        <li><strong>Campo visual:</strong> Campo visual horizontal de pelo menos <strong>120 graus</strong> no plano horizontal binocular (ou 120° no olho único, caso seja monocular).</li>
        <li><strong>Visão de cores:</strong> Capacidade de distinguir as três cores básicas das luzes de sinalização viária: <strong>vermelho, verde e amarelo</strong>. O daltonismo leve não reprova o condutor comum, desde que ele diferencie essas cores fundamentais.</li>
      </ul>

      <h3>Categorias Profissionais: C, D e E (Caminhões, Ônibus e Carretas)</h3>
      <p>Para motoristas profissionais e condutores que exercem atividade remunerada (EAR), o rigor é muito maior:</p>
      <ul>
        <li>Acuidade de pelo menos <strong>20/30 (0,66)</strong> no melhor olho e no mínimo <strong>20/40 (0,5)</strong> no outro olho, com ou sem lentes corretivas.</li>
        <li>Visão monocular não é permitida para obtenção ou renovação das categorias C, D e E.</li>
        <li>Campo visual horizontal de no mínimo <strong>130 graus</strong> em ambos os olhos.</li>
        <li>Visão noturna e tempo de recuperação pós-ofuscamento normais.</li>
      </ul>

      <h2>O que acontece se você reprovar no teste do Detran?</h2>
      <p>Se você não conseguir ler a linha 20/40 durante o teste, mantenha a calma: você não perderá sua CNH de forma definitiva. O perito examinador registrará o laudo como <strong>"Inapto Temporário"</strong> e emitirá um encaminhamento para que você consulte um médico oftalmologista de sua confiança.</p>
      <p>O oftalmologista fará um exame completo de refração, receitará os óculos ou lentes de contato adequados e emitirá um relatório atestando sua acuidade com correção. Com os novos óculos prontos, você retorna à clínica do Detran para repetir a leitura na tabela de teste de visão. Ao ser aprovado com óculos, sua CNH receberá a <strong>observação 'A'</strong> (obrigatório o uso de lentes corretivas), e você poderá dirigir normalmente.</p>

      <h2>Como treinar em casa antes de ir ao Detran</h2>
      <p>Treinar em casa é a melhor estratégia para eliminar a insegurança e o medo do exame. Siga este roteiro prático:</p>
      <ol>
        <li>Acesse o nosso <a href="/pt/test/">simulado de visão do Detran</a> no navegador do seu computador.</li>
        <li>Coloque um cartão de crédito ou débito sobre a tela para fazer a calibração precisa do tamanho físico dos optótipos.</li>
        <li>Meça a distância exata de 3 metros entre você e o monitor.</li>
        <li>Tape o olho esquerdo com a mão em concha (sem apertar a pálpebra) e leia as menores letras possíveis. Anote a menor linha em que acertou a maioria dos caracteres.</li>
        <li>Repita o mesmo procedimento para o olho direito.</li>
        <li>Se você já usa óculos para dirigir, faça o teste com eles colocados. Se você perceber que tem dificuldades para distinguir a linha 20/40, procure seu oftalmologista para renovar o grau antes de agendar o exame no Detran.</li>
      </ol>

      <h2>Perguntas frequentes sobre a tabela do Detran</h2>

      <h3>Posso decorar as letras da tabela de Snellen do Detran?</h3>
      <p>Não recomendamos tentar decorar. As clínicas credenciadas utilizam tabelas com sequências aleatórias de optótipos, optorratadores com painéis rotativos ou telas eletrônicas que mudam a ordem das letras a cada candidato. Decorar não ajuda e pode colocá-lo em risco real no trânsito.</p>

      <h3>Posso fazer o exame usando lentes de contato?</h3>
      <p>Sim. Se você utiliza lentes de contato, informe previamente o médico examinador durante o atendimento. Ele testará sua acuidade corrigida e incluirá a observação correspondente no sistema do Detran.</p>

      <h3>Se eu errar uma única letra na linha 20/40 eu reprovo?</h3>
      <p>Geralmente, as normas técnicas permitem que o candidato erre até 1 ou 2 letras em uma linha de 5 ou mais optótipos para considerar aquela linha lida com sucesso. No entanto, a decisão final cabe ao perito médico examinador.</p>

      <h2>Simule seu exame agora mesmo</h2>
      <p>Não vá despreparado para a renovação da sua carteira de motorista. Acesse agora o nosso <a href="/pt/">teste de visão online</a>, faça o simulado com calibração milimétrica e tenha certeza de que sua visão está pronta para a aprovação.</p>
      `
    }
  },
  {
    slug: "proverka-zreniya-tablitsa-sivtseva",
    locales: ["ru"],
    englishOnly: false,
    datePublished: "2026-03-18T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "ru": "Проверка зрения онлайн: таблица Сивцева бесплатно"
    },
    excerpt: {
      "ru": "Бесплатная проверка зрения онлайн по таблице Сивцева. Узнайте, как проверить остроту зрения дома на экране компьютера или телефона с точной калибровкой."
    },
    content: {
      ru: `
<h2>Таблица Сивцева: золотой стандарт проверки зрения</h2>
      <p>Каждый житель русскоязычного пространства хотя бы раз в жизни видел знаменитый белый плакат с крупными буквами «Ш» и «Б» в верхней строке. Эта оптометрическая таблица, разработанная выдающимся советским офтальмологом Дмитрием Александровичем Сивцевым в 1925 году, на протяжении целого века остается официальным стандартом для определения остроты зрения в поликлиниках, оптиках, военных комиссариатах и на водительских медкомиссиях. Сегодня <strong>проверка зрения онлайн: таблица Сивцева</strong> доступна каждому прямо из дома. Наш специализированный сервис <a href="/ru/">проверка зрения онлайн</a> позволяет пройти профессиональный тест бесплатно, без регистрации и с идеальной геометрической точностью.</p>
      
      <p>Многие пользователи пробуют найти изображение таблицы в поисковике и открыть его на телефоне или мониторе. Однако обычный скриншот не дает точного результата. Чтобы онлайн-тестирование соответствовало настоящему приему у врача, оптические знаки должны быть строго откалиброваны с учетом физических размеров экрана и расстояния до глаз.</p>

      <h2>Почему для онлайн-таблицы критически важна калибровка?</h2>
      <p>Острота зрения (visus) — это угловая величина. По международным офтальмологическим стандартам острота зрения 1,0 (100% зрение) означает способность глаза различать две светящиеся точки или детали оптотипа, находящиеся под углом зрения ровно в <strong>1 угловую минуту</strong> (1/60 градуса). Вся буква целиком при этом занимает угол зрения в 5 угловых минут.</p>
      
      <p>В кабинете окулиста бумажная таблица висит на расстоянии 5 метров, и размер буквы десятой строки составляет ровно 7,0 мм. Но если вы откроете картинку таблицы на 14-дюймовом ноутбуке или на 27-дюймовом мониторе, пиксели будут иметь абсолютно разный физический размер. Наш сервис решает эту проблему с помощью шага интерактивной калибровки: приложив любую стандартную пластиковую карту (банковскую, транспортную или водительское удостоверение — стандарт ISO/IEC 7810, ширина 85,6 мм) к рамке на экране, вы настраиваете ползунок. Алгоритм вычисляет плотность пикселей (PPI) вашего дисплея и генерирует векторные буквы Сивцева с математической погрешностью менее 0,1 миллиметра.</p>

      <h2>Структура таблицы Сивцева: как расшифровать строки и значения</h2>
      <p>Таблица состоит из 12 строк печатных букв, размер которых постепенно уменьшается сверху вниз. В таблице используются всего 7 букв русского алфавита: <strong>Ш, Б, М, Н, К, Ы, И</strong>. Эти буквы подобраны не случайно: они имеют схожую квадратную конфигурацию на сетке 5х5 и одинаковую читаемость при различных дефектах рефракции.</p>
      
      <p>Слева и справа от строк расположены две колонки с латинскими буквами:</p>
      <ul>
        <li><strong>Колонка D (дистанция в метрах):</strong> Указывает расстояние, с которого человек со 100% зрением должен четко различать буквы данной строки. Для 1-й строки (Ш Б) это 50 метров, для 10-й строки — 5 метров, для 12-й строки — 2,5 метра.</li>
        <li><strong>Колонка V (visus — острота зрения):</strong> Показывает остроту зрения при чтении с базовой дистанции (обычно 5 метров). 1-я строка соответствует V=0,1 (10% зрения), 5-я строка — V=0,5, 10-я строка — V=1,0 (нормальное зрение). 11-я и 12-я строки соответствуют V=1,5 и V=2,0 (гиперзрение или так называемое «орлиное зрение»).</li>
      </ul>
      <p>Ознакомиться с детальной историей оптотипов и их международными аналогами можно в нашей статье <a href="/eye-test-chart/">таблица для проверки зрения</a>.</p>

      <h2>Пошаговая инструкция: как правильно проверить зрение дома</h2>
      <p>Чтобы результат домашней проверки был максимально достоверным, соблюдайте медицинский регламент:</p>

      <h3>1. Подготовка освещения</h3>
      <p>Экран устройства должен быть единственным или наиболее комфортным источником света в поле зрения. Избегайте прямых солнечных лучей и ярких ламп, отражающихся от глянцевого покрытия монитора. Установите яркость на 70–80%.</p>

      <h3>2. Точное измерение дистанции</h3>
      <p>В зависимости от размера комнаты выберите в настройках теста удобное расстояние: 3 метра или классические 5 метров. Замерьте дистанцию рулеткой и отметьте точку на полу. Положение экрана должно быть строго на уровне ваших глаз.</p>

      <h3>3. Проверка каждого глаза по отдельности</h3>
      <p>Никогда не проверяйте оба глаза одновременно, так как ведущий глаз всегда маскирует проблемы более слабого. Прикройте левый глаз ладонью в форме «лодочки» или плотным белым листом бумаги. <strong>Не зажмуривайте глаз и не давите на глазное яблоко</strong>. Называйте или выбирайте буквы на экране сверху вниз, пока не дойдете до порога четкой различимости. Затем повторите процедуру для второго глаза.</p>

      <h2>Нормы зрения для водителей и медкомиссий</h2>
      <p>При прохождении оружейной или водительской медкомиссии в ГИБДД (категория B) к кандидатам предъявляются следующие обязательные требования по таблице Сивцева:</p>
      <ul>
        <li>Острота зрения на лучшем глазу — не менее <strong>0,6</strong> (6-я строка таблицы).</li>
        <li>Острота зрения на худшем глазу — не менее <strong>0,2</strong> (2-я строка таблицы).</li>
        <li>Допускается достижение этих показателей с использованием очков или контактных линз. При этом в водительское удостоверение вносится отметка GCL (Glasses or Contact Lenses).</li>
      </ul>

      <h2>Дополнительные тесты: астигматизм и дуохромный баланс</h2>
      <p>Одной таблицы букв часто бывает недостаточно для полной оценки зрительного комфорта. В наш комплексный скрининг включены дополнительные методики:</p>
      <ul>
        <li><strong>Тест на астигматизм (лучистая звезда):</strong> Если часть радиальных линий кажется темнее и резче, а перпендикулярные линии двоятся или размываются, это признак неравномерной кривизны роговицы.</li>
        <li><strong>Красно-зеленый дуохромный тест:</strong> Позволяет определить, не перегружены ли ваши глаза избыточной оптической силой (перекоррекция близорукости). Буквы на красном и зеленом фоне должны читаться одинаково контрастно.</li>
      </ul>

      <h2>Часто задаваемые вопросы (FAQ)</h2>

      <h3>Чем таблица Сивцева отличается от таблицы Головина?</h3>
      <p>Таблица Головина состоит не из букв, а из колец Ландольта с разрывами в четырех направлениях. Офтальмологи используют таблицу Головина совместно с таблицей Сивцева, если есть подозрение, что пациент заранее выучил порядок букв наизусть.</p>

      <h3>Заменяет ли онлайн-тест прием у офтальмолога?</h3>
      <p>Нет. Онлайн-тренажер оценивает исключительно оптическую разрешающую способность. Он не измеряет внутриглазное давление (необходимо для диагностики глаукомы) и не позволяет осмотреть сетчатку и глазное дно. При появлении мушек, вспышек света, сужении полей зрения или резком падении четкости немедленно обратитесь к врачу.</p>

      <h2>Проверьте зрение прямо сейчас</h2>
      <p>Уделите всего несколько минут своему здоровью. Нажмите <a href="/ru/test/">запустить тест зрения онлайн</a>, откалибруйте экран по банковской карте и узнайте точную остроту своего зрения по классической таблице Сивцева.</p>
      `
    }
  },
  {
    slug: "dmv-eye-test-faqs",
    locales: ["en"],
    englishOnly: true,
    datePublished: "2026-03-22T09:00:00Z",
    dateModified: "2026-09-27T10:00:00Z",
    title: {
      "en": "DMV Eye Test FAQs: 20/40, Vision Field & Retest Rules"
    },
    excerpt: {
      "en": "Answers to common DMV eye test FAQs: 20/40 vision standards, peripheral vision requirements, counter vision machines, and what happens if you fail your test."
    },
    content: {
      en: `
<h2>Top DMV Eye Test Frequently Asked Questions</h2>
      <p>Whether you are getting your driver's license for the first time, relocating across state lines, or renewing your license after several years, having to pass the Department of Motor Vehicles vision screening often triggers unexpected anxiety. What if your vision has deteriorated? What line of letters will the examiner ask you to read? What happens if you fail? To help you feel confident before your appointment, we have assembled the ultimate guide answering the most essential <strong>DMV eye test FAQs</strong>. You can rehearse under realistic conditions with our free <a href="/">online vision test</a>.</p>

      <h2>1. What Visual Acuity Score Do I Need to Pass the DMV Eye Test?</h2>
      <p>In almost every US state, the statutory visual acuity standard for an unrestricted driver's license is <strong>20/40 visual acuity</strong>. This means you must be able to read at 20 feet what an individual with standardized normal vision can comfortably read from 40 feet away.</p>
      
      <p>State statutory rules generally fall into two categories regarding how acuity is assessed:</p>
      <ul>
        <li><strong>Binocular standard (both eyes together):</strong> States like California, Texas, Florida, and New York primarily test whether your vision reaches 20/40 with both eyes open. If one eye is weaker (e.g., 20/50) but your combined binocular vision or your better eye reaches 20/40, you pass for an unrestricted license.</li>
        <li><strong>Monocular requirement (each eye separately):</strong> Other states require 20/40 in <em>each eye separately</em> as well as together. If one eye falls below 20/40, the examiner will refer you to an eye specialist for an evaluation.</li>
      </ul>
      <p>If your vision falls between 20/40 and 20/70, you are not disqualified from driving; instead, you qualify for a restricted license (such as daylight-only driving or an outside rearview mirror mandate) once cleared by a licensed optometrist or ophthalmologist.</p>

      <h2>2. What Peripheral Vision Field Is Required?</h2>
      <p>Visual acuity only measures central vision—how sharply you can read letters directly ahead of you. Driving safely, however, depends heavily on peripheral vision to detect merging traffic, pedestrians stepping off curbs, and vehicles entering your blind spots.</p>
      
      <p>Most state licensing agencies mandate a minimum continuous horizontal visual field between <strong>110 degrees and 140 degrees</strong> across both eyes:</p>
      <ul>
        <li><strong>California:</strong> Requires a horizontal field of at least 110 degrees across both eyes.</li>
        <li><strong>New York:</strong> Requires a minimum horizontal visual field of 140 degrees.</li>
        <li><strong>Florida:</strong> Mandates 130 degrees of total uninterrupted horizontal field.</li>
      </ul>
      <p>If you have vision in only one eye (monocular drivers), most states require at least 70 to 80 degrees of temporal field in that functioning eye.</p>

      <h2>3. What Machines Are Used at the DMV Counter?</h2>
      <p>Gone are the days when every DMV had a paper poster hanging on the back wall. Today, motor vehicle service centers predominantly use automated desktop vision screeners, such as the <strong>Optec 1000, Optec 2000, or Titmus V2/V4</strong> viewers.</p>
      <p>These enclosed stereoscopic machines feature internal lighting, front forehead bars, and high-contrast optical slides that simulate optical infinity (20 feet) inside a compact counter device. The machine presents rows of randomized letters, circular rings, or flashing yellow/white LEDs on the outer edges to test peripheral awareness. You can simulate the testing procedure using our dedicated <a href="/us/">DMV practice test</a>.</p>

      <h2>4. What Happens If I Fail the DMV Eye Test?</h2>
      <p>Failing the eye test at the counter does <strong>not</strong> mean your driver's license is revoked or confiscated on the spot. Examiners understand that people fail for common, easily fixable reasons: their current glasses prescription is out of date, their eyes were tired, or their contacts were dry.</p>
      
      <p>When you cannot read the 20/40 line, the examiner will hand you an official state eye examination form:</p>
      <ul>
        <li><strong>California:</strong> Report of Vision Examination (Form DL-62).</li>
        <li><strong>New York:</strong> Eye Test Report (Form MV-619 or MV-80L).</li>
        <li><strong>Texas:</strong> Explanation for Eye Specialist (Form DL-63).</li>
        <li><strong>Florida:</strong> Report of Eye Exam (Form HSMV 72010).</li>
      </ul>
      <p>You take this paper to a licensed eye doctor (optometrist or ophthalmologist). The doctor conducts a comprehensive refractive exam, prescribes new lenses if necessary, signs the form confirming your safety behind the wheel, and you return to the DMV to complete your application.</p>

      <h2>5. Can I Wear Glasses or Contact Lenses During the Test?</h2>
      <p>Yes, absolutely. If you typically wear corrective eyewear to drive, read street signs, or watch television, you should wear them during your screening. When you pass the test wearing glasses or contacts, the DMV places a <strong>Corrective Lenses Restriction</strong> (commonly printed as code <strong>B</strong> on your physical card). This restriction simply means that whenever you operate a motor vehicle, you are legally required to wear corrective lenses.</p>

      <h2>6. How Can I Remove a Glasses Restriction from My License?</h2>
      <p>If you have undergone corrective eye surgery (such as LASIK or PRK) or your visual acuity has naturally improved, you can have the restriction removed. Schedule an appointment at the DMV, request a vision re-check, and pass the screening without wearing glasses. In some states, such as New York, your eye doctor can electronically submit passing uncorrected results directly into the state's Online Vision Registry, allowing you to renew online without visiting an office.</p>

      <h2>7. Do DMVs Test for Color Blindness?</h2>
      <p>DMVs do not test for subtle shades of color, but they do verify that you can distinguish standard traffic signal colors: <strong>red, green, and amber (yellow)</strong>. Individuals with mild red-green color blindness easily pass because modern traffic lights utilize standardized positions (red on top, green on bottom) and specific spectral hues.</p>

      <h2>8. How Do Commercial Driver's License (CDL) Rules Differ?</h2>
      <p>If you hold or are applying for a Commercial Driver's License (CDL), state discretion does not apply. Commercial motor vehicle drivers are governed by Federal Motor Carrier Safety Administration (FMCSA) regulations under <strong>49 CFR § 391.41</strong>:</p>
      <ul>
        <li>Distant visual acuity of at least <strong>20/40 in EACH eye separately</strong>, with or without corrective lenses.</li>
        <li>Distant visual acuity of at least <strong>20/40 in both eyes together</strong>.</li>
        <li>A field of vision of at least <strong>70 degrees in the horizontal meridian</strong> in each eye.</li>
        <li>The ability to recognize the colors of traffic signals and devices showing standard red, green, and amber.</li>
      </ul>
      <p>Practice measuring each eye independently with our calibrated <a href="/eye-test-chart/">Snellen eye test chart</a>.</p>

      <h2>9. How Often Is Vision Retested for License Renewal?</h2>
      <p>Renewal policies vary significantly by jurisdiction:</p>
      <ul>
        <li><strong>Every renewal:</strong> States like California, Florida, and Illinois re-test vision at every in-person renewal cycle.</li>
        <li><strong>Alternate renewals:</strong> Some states allow every other renewal to be completed online or by mail, requiring an in-person eye check every 8 to 10 years.</li>
        <li><strong>Senior driver rules:</strong> Many states require drivers over age 70 or 75 to renew in person and undergo an annual or bi-annual vision check.</li>
      </ul>

      <h2>10. Top Tips to Pass Your DMV Vision Test</h2>
      <ol>
        <li><strong>Get enough rest:</strong> Dry, exhausted eyes lose sharp focusing ability. Ensure a good night's sleep before your visit.</li>
        <li><strong>Hydrate and lubricate:</strong> If you wear contacts or work on computers, use lubricating artificial tears 20 minutes before testing to eliminate dry cornea blur.</li>
        <li><strong>Do not squint:</strong> Squinting artificially narrows the aperture of your eye to sharpen blur, but examiners will notice and ask you to keep your eyelids relaxed.</li>
        <li><strong>Calibrate and practice at home:</strong> Take our online screening test at a measured 10-foot or 20-foot distance to eliminate test anxiety.</li>
      </ol>

      <h2>Prepare for Your Driver's License Test Today</h2>
      <p>Don't leave your driver's license renewal to chance. Take ten minutes right now to calibrate your display and verify your distance visual acuity, color recognition, and peripheral awareness on our free <a href="/">online vision test</a>.</p>
      `
    }
  },
  {
    slug: "dmv-eye-test-cheat-sheet",
    englishOnly: true,
    datePublished: "2026-10-17T09:00:00Z",
    dateModified: "2026-10-17T09:00:00Z",
    title: {
      en: "DMV Eye Test Cheat Sheet: What to Know Before You Go",
    },
    excerpt: {
      en: "A plain-English DMV eye test cheat sheet: the exact acuity standard, the form names by state, what the machine shows, and how to rehearse at home.",
    },
    content: {
      en: `
        <h2>The one number that matters: 20/40</h2>
        <p>Nearly every US state requires 20/40 visual acuity for an unrestricted driver's license. On a standard Snellen chart at 20 feet, 20/40 is line 5. In a desktop DMV viewer (Optec or Titmus), it is the same line presented at simulated optical infinity. If you can read that line — with your glasses or contacts if you wear them to drive — you pass. You can practice right now with our <a href="/us/">free online DMV practice screener</a>.</p>

        <h2>What "cheat sheet" actually gets you</h2>
        <p>A memorized letter sequence does not transfer. DMV offices rotate slide sets, examiners swap charts, and randomized electronic boards mean the PECFD you memorized for line 5 may appear nowhere on test day. What does transfer is procedural fluency: knowing the distance, the occlusion technique, and the acuity benchmark. That is what this page gives you.</p>

        <h2>The acuity standard by common outcome</h2>
        <ul>
          <li><strong>20/20 – 20/40:</strong> Pass unrestricted in all 50 states and DC.</li>
          <li><strong>20/50 – 20/70:</strong> Most states issue a restricted license (corrective lenses, daylight only, outside mirror) after a doctor's form. Texas caps you at 45 mph on a daylight-only permit in this band.</li>
          <li><strong>Worse than 20/70 best eye:</strong> Most states deny until corrected. A handful allow monocular exceptions with a specialist evaluation.</li>
        </ul>

        <h2>Doctor referral forms by major state</h2>
        <p>If you fail the counter test, the examiner hands you a form. Do not lose it — it has specific instructions. Common forms:</p>
        <ul>
          <li><strong>California:</strong> DL-62 (Report of Vision Examination). Submit within 60 days.</li>
          <li><strong>Texas:</strong> DL-63 (Certificate of Physical Examination). Submit to DPS.</li>
          <li><strong>New York:</strong> MV-619 (Vision Test Report) for 20/40 pass; MV-80L for 20/40–20/70 band (goes to Medical Review Unit, not the counter).</li>
          <li><strong>Florida:</strong> HSMV 72010 (Report of Eye Examination).</li>
          <li><strong>Illinois:</strong> Form DSD X 20 (Vision Specialist Report).</li>
          <li><strong>Arizona:</strong> Form 32-4001 (Vision Examination Report). Must be completed within 90 days.</li>
        </ul>
        <p>All 51 state forms are listed on our <a href="/states/">state vision requirements pages</a>.</p>

        <h2>What the DMV machine actually shows you</h2>
        <p>Most offices use an Optec 1000, Optec 2000, or Titmus V-1. You rest your forehead against the eyepiece hood and look at small illuminated slides. The examiner asks you to read a numbered line — usually "read line 5" — first binocularly, then monocularly. The machine may also show a peripheral flash test (red lights at the edges) and a traffic-signal color check (red, amber, green). No surprises if you know this before you sit down.</p>

        <h2>The three-step home rehearsal</h2>
        <ol>
          <li><strong>Calibrate your screen</strong> with a physical bank card (85.6 mm, ISO/IEC 7810). An uncalibrated chart is physically meaningless.</li>
          <li><strong>Stand at the correct distance</strong> — 10 feet (3 m) for our short-distance screener, or 20 feet (6 m) if you have the space. Mark the floor.</li>
          <li><strong>Test each eye separately</strong>, palm flat over one eye without pressing the eyeball. Wear any corrective lenses you use when driving.</li>
        </ol>
        <p>Run the <a href="/test/">free practice screener</a> now and confirm you are comfortably above the 20/40 line before your appointment. This is a practice tool only and is not affiliated with any state DMV.</p>
      `
    }
  },
  {
    slug: "line-5-dmv-eye-test",
    englishOnly: true,
    datePublished: "2026-10-17T09:05:00Z",
    dateModified: "2026-10-17T09:05:00Z",
    title: {
      en: "Line 5 DMV Eye Test: What It Is and How to Read It",
    },
    excerpt: {
      en: "What 'line 5' means on the DMV eye test, why examiners call it out, what letters are on it, and how to practice passing it at home.",
    },
    content: {
      en: `
        <h2>Why examiners say "read line 5"</h2>
        <p>When a DMV examiner says "read line 5," they are asking you to read the 20/40 line — the statutory minimum for an unrestricted driver's license in most US states. On a standard Snellen chart calibrated for 20-foot viewing, line 5 from the top is the row where each letter subtends a 5-minute visual angle and each stroke subtends exactly 1 minute of arc. If you can identify those letters, you meet the acuity minimum. Practice the line right now with our <a href="/us/">free DMV practice screener</a>.</p>

        <h2>What letters are on line 5?</h2>
        <p>Standard Snellen charts often have PECFD or DFEPC on the 20/40 line, but the exact sequence varies by chart version, manufacturer, and whether the office uses an optical viewer or a wall chart. DMV offices frequently rotate slide sets specifically to prevent memorization. The letters that matter are any randomized combination of the standard Sloan optotype set: C, D, E, F, H, K, N, O, R, S, V, Z. Memorizing one specific sequence does not work. Practicing the visual acuity threshold does.</p>

        <h2>Line 5 in a DMV viewer machine vs. a wall chart</h2>
        <p>In an Optec or Titmus desktop viewer, "line 5" refers to the fifth row on the internal slide, presented at simulated 20-foot optical infinity inside the light-controlled hood. On an illuminated Snellen wall chart at 10 feet, line 5 corresponds to the 20/40 row at that reduced distance. On a 20-foot wall chart, it is the same row. The visual angle requirement — 5 arcminutes total letter height — is identical in all configurations. What changes is only the physical letter size, which scales with testing distance.</p>

        <h2>What if you cannot read line 5?</h2>
        <p>If you cannot read line 5 (20/40) at the counter, the examiner gives you a state vision examination form. You take it to an optometrist or ophthalmologist, who signs it after examining your corrected acuity. You return the form to the DMV. In most states you then retake the counter screening and receive your license with any applicable restrictions. Read our full guide on <a href="/blog/dmv-eye-test-fail-guide/">what happens if you fail the DMV eye test</a>.</p>

        <h2>How to practice reading line 5 at home</h2>
        <p>You cannot accurately practice from an uncalibrated image. The physical size of the letters on your screen depends entirely on your monitor's pixel density, and an unverified online chart can be off by 30% or more. Our <a href="/test/">free practice screener</a> requires a bank-card calibration step (ISO/IEC 7810, 85.6 mm) that establishes your screen's exact millimeter pitch and renders vector optotypes at precisely calibrated physical dimensions. The result is a real 20/40 letter at the correct angular size for your chosen test distance. Steps:</p>
        <ol>
          <li>Open the practice screener and complete the card calibration.</li>
          <li>Step back 10 feet (3 m) from your screen and mark the spot on the floor.</li>
          <li>Cover your left eye with your palm (no pressure on the eyeball).</li>
          <li>Read the smallest line you can. If you can read line 5, you pass the 20/40 benchmark.</li>
          <li>Repeat with the other eye.</li>
        </ol>
        <p>This is a practice tool and is not affiliated with or endorsed by any state DMV agency. For official requirements, consult your <a href="/states/">state's DMV vision page</a>.</p>
      `
    }
  },
];
