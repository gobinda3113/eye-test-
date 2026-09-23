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
        <p>If you are heading to the Department of Motor Vehicles to renew or obtain your driver's license, you must pass a basic vision screening. You can use our <a href="/#screener">free online eye test</a> tool as a practice test to determine whether your visual acuity meets your state's minimum legal benchmarks.</p>
        
        <h3>What is the DMV passing score?</h3>
        <p>In almost every US state, an unrestricted driver's license requires <strong>20/40 visual acuity</strong> in both eyes combined or in at least one eye. If your eyesight falls between 20/40 and 20/70, most licensing agencies still allow you to drive with a restriction (such as corrective lenses or daylight-only driving) after an eye specialist completes an official evaluation form.</p>
        
        <h3>How the screening works at the counter</h3>
        <p>At the DMV counter, examiners typically ask applicants to look into an optical viewer machine (such as an Optec or Titmus viewer) or read an illuminated Snellen chart on a wall 10 or 20 feet away. You will be asked to read a specific line—frequently line 5, corresponding to the 20/40 mark—first with both eyes open, then monocularly with one eye occluded.</p>
        
        <h3>How to practice accurately at home</h3>
        <p>Ensure your screen is calibrated using a standard credit card (85.6 mm). Mark a line exactly 10 feet (3 meters) away from your display. Cover one eye with your palm without pressing on the eyeball, and read down the randomized letters. Testing each eye individually at home eliminates test anxiety and tells you immediately if you should renew your prescription glasses before your appointment.</p>
      `,
      es: `
        <h2>Práctica para el examen de la vista de conducir</h2>
        <p>Si necesitas renovar u obtener tu licencia de conducir, deberás superar una revisión visual básica. Puedes utilizar nuestra herramienta de <a href="/es/#screener">examen de la vista online gratis</a> como prueba de práctica para verificar si tu agudeza visual cumple los requisitos legales.</p>
        
        <h3>¿Cuál es la agudeza visual mínima exigida?</h3>
        <p>La mayoría de los organismos de tráfico exigen una agudeza visual de <strong>20/40</strong> con ambos ojos o al menos en el ojo dominante para una licencia sin restricciones. Si tu visión se sitúa entre 20/40 y 20/70, generalmente puedes obtener una licencia con restricciones (como el uso obligatorio de gafas correctoras o conducción exclusivamente diurna) previa autorización médica.</p>
        
        <h3>Cómo prepararte en casa</h3>
        <p>Calibra tu pantalla con una tarjeta bancaria para asegurar que el tamaño de las letras sea exacto. Colócate a 3 metros de distancia, tápate un ojo sin presionar el párpado y lee la línea más pequeña que distingas. Esta práctica casera te permite saber si necesitas visitar al optometrista antes de tu cita oficial.</p>
      `,
      de: `
        <h2>Übung für den Führerschein-Sehtest</h2>
        <p>Wer den Führerschein erwerben oder verlängern möchte, muss eine amtliche Sehprüfung bestehen. Nutzen Sie unseren <a href="/de/#screener">kostenlosen Sehtest online</a> als Übungstest, um Ihre Sehschärfe im Vorfeld verlässlich zu überprüfen.</p>
        
        <h3>Mindestanforderungen an die Sehstärke</h3>
        <p>Für die gängige Führerscheinklasse B wird meist eine Sehschärfe von mindestens 0,7 (entspricht 20/40) auf beiden Augen oder zentral verlangt. Werden diese Werte ohne Sehhilfe nicht erreicht, wird im Führerschein eine entsprechende Auflage für eine Brille oder Kontaktlinsen vermerkt.</p>
        
        <h3>So üben Sie zu Hause</h3>
        <p>Kalibrieren Sie Ihren Monitor mit einer Standardkarte auf die exakte Millimetergröße. Halten Sie 3 Meter Abstand, decken Sie ein Auge ab und lesen Sie die Zeilen ab. So stellen Sie rechtzeitig fest, ob Ihre Sehhilfe noch optimal angepasst ist.</p>
      `,
      fr: `
        <h2>Entraînement pour le test de vue du permis</h2>
        <p>Avant de vous présenter à l'examen du permis de conduire ou à votre visite médicale, entraînez-vous avec notre <a href="/fr/#screener">test de vue en ligne gratuit</a> pour vérifier si votre acuité visuelle est conforme aux normes officielles.</p>
        
        <h3>Quel est le score requis ?</h3>
        <p>Dans la plupart des pays, une acuité minimale de 20/40 (ou 5/10e à 7/10e selon les barèmes) est nécessaire pour conduire sans restriction. Si vous n'atteignez pas ce seuil sans correction, le port de lunettes ou lentilles correctrices sera mentionné sur votre permis.</p>
        
        <h3>Conseils d'entraînement</h3>
        <p>Calibrez votre écran à l'aide d'une carte bancaire, reculez de 3 mètres et testez chaque œil séparément. Cela vous évitera toute surprise lors du contrôle officiel.</p>
      `,
      pt: `
        <h2>Simulado para o teste de visão do Detran (CNH)</h2>
        <p>Se você vai tirar ou renovar a Carteira Nacional de Habilitação (CNH), terá que passar pelo exame de aptidão física e mental com avaliação oftalmológica. Use o nosso <a href="/pt/#screener">teste de visão online grátis</a> como um simulado prático para checar sua acuidade visual.</p>
        
        <h3>Qual a acuidade visual mínima exigida pelo Detran?</h3>
        <p>Para motoristas da categoria B (veículos de passeio), a resolução do Contran exige acuidade visual igual ou superior a <strong>20/40</strong> no melhor olho. Quem não atinge essa marca com visão natural precisará utilizar lentes corretivas (óculos ou lentes de contato), recebendo a observação 'A' na CNH.</p>
        
        <h3>Como fazer o simulado em casa</h3>
        <p>Calibre a tela usando um cartão magnético para garantir a escala correta dos optótipos. Afaste-se 3 metros da tela, cubra o olho esquerdo com a mão em concha (sem apertar o olho) e leia as menores letras possíveis. Em seguida, repita o teste com o outro olho. Se tiver dificuldades na linha de 20/40, consulte um oftalmologista antes do exame oficial.</p>
      `,
      it: `
        <h2>Esercitati per il Test della Vista della Patente</h2>
        <p>Se devi rinnovare o conseguire la patente di guida, dovrai sottoporti alla visita medica di idoneità visiva. Puoi usare il nostro <a href="/it/#screener">test della vista online gratis</a> per verificare se la tua vista soddisfa i requisiti minimi di legge.</p>
        
        <h3>Requisiti minimi di acuità visiva</h3>
        <p>Per la patente B, la normativa richiede generalmente un'acuità visiva complessiva di almeno 0,7 (equivalente a 20/40), con non meno di 0,2 nell'occhio peggiore. Se raggiungi questo valore solo con occhiali o lenti a contatto, sulla patente verrà apposto il codice 01 (obbligo di lenti).</p>
        
        <h3>Come fare pratica a casa</h3>
        <p>Assicurati di calibrare lo schermo con una carta bancomat per garantire le dimensioni corrette delle lettere di Snellen. Posizionati a 3 metri di distanza, copri un occhio con la mano senza premere e leggi le lettere più piccole che riesci a distinguere. Esercitarti a casa riduce l'ansia da prestazione e ti aiuta a capire se hai bisogno di una nuova visita oculistica.</p>
      `,
      ru: `
        <h2>Тренировка перед проверкой зрения на водительские права</h2>
        <p>Если вам предстоит визит в ГИБДД или медкомиссию для получения либо продления водительских прав, воспользуйтесь нашим <a href="/ru/#screener">бесплатным онлайн-тестом зрения</a> для предварительной тренировки.</p>
        
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
        <p>You failed the DMV eye test. Nothing happens to your licence that day. The examiner gives you a form for an eye doctor, you get checked, and you return to retake the vision screening. People fail for boring reasons: they left their glasses at home, their prescription is two years old, or they have never had one eye checked on its own. All of that is fixable in a week.</p>

        <h2>Which form you will get</h2>
        <p>It depends on the state. California hands out the Report of Vision Examination (DL-62). New York uses form MV-619 for a straight pass at 20/40 or better, and form MV-80L if you land between 20/40 and 20/70 or wear telescopic lenses (that one goes to the Medical Review Unit, not the counter). Florida uses the HSMV Report of Eye Exam (form 72010). Texas uses the Explanation for Eye Specialist (DL-63). Take the right paper to an optometrist or ophthalmologist, get it signed, and bring it back.</p>

        <h2>The restrictions you might drive home with</h2>
        <p>Passing with glasses puts a corrective-lenses restriction on your licence, usually coded B. Weaker results can add daylight-only driving or an outside-mirror requirement. Texas is specific: the 20/60 to 20/70 band means daylight only and no faster than 45 mph. None of these end your driving. They match the licence to how you actually see.</p>

        <h2>How to come back and pass</h2>
        <p>Get the correction first, then retest. If your prescription changed, new glasses or contacts usually settle it. After LASIK or a fresh pass without correction, most states lift the restriction at your next visit. In New York you can also submit a passing result through the <a href="https://dmv.ny.gov/driver-license/online-vision-registry">Online Vision Registry</a> instead of queuing at an office. Before you go, rehearse at home: <a href="/us/#screener">run the free practice screening</a>, calibrate the screen, and test each eye separately so there are no surprises.</p>
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
        <p>Most DMV offices test vision with a desktop viewer, not a wall poster. Common models are the Optec 1000 and the Titmus V1. You rest your forehead against the hood and look inside at small slides. That enclosure is the point: it fixes your distance and blocks room light, so every applicant gets the same conditions. The Titmus tests far vision at 20 feet and near vision at 16 inches in the same unit.</p>

        <h2>What the examiner asks you to do</h2>
        <p>You read lines of letters or numbers, one eye at a time, then both together. The manuals for these machines describe the rhythm plainly: read one numbered line fully, move to the next, stop where you miss. Examiners often call out "read line 5," which is why that phrase shows up in search results. It is just the 20/40 row on that slide set. After acuity comes the rest: flashes at the sides for peripheral vision and a red, green and amber check for colour. The colour part is not a full colour-blindness exam. It only asks whether you can separate traffic signals.</p>

        <h2>Wall chart offices</h2>
        <p>Some offices still use a Snellen chart on the wall at 10 or 20 feet. Same task, less ceremony: cover one eye with your palm, read the smallest line you can, swap eyes. Bright rooms and short distances flatter your eyes, which is one reason home posters mislead.</p>

        <h2>How to rehearse honestly</h2>
        <p>Cheat sheets and memorised posters do not transfer because offices rotate charts. What transfers is procedure: calibrate the screen with a bank card, stand at a marked 3 metres, cover one eye without pressing on it, and read randomised letters. That is exactly what <a href="/us/#screener">the free practice screening</a> runs. If you wear glasses to drive, practise in them. Passing with correction is normal, and it is better to learn that at home than at the counter. Read <a href="/blog/dmv-eye-test-fail-guide/">what happens if you fail</a> so the worst case holds no surprises either.</p>
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
        <p>Nearly every state wants 20/40 or better with both eyes for a full licence, and most will still licence you with a restriction down to about 20/70. Below that you see an eye doctor and retest. The differences sit in the details: per-eye versus both-together standards, field-of-vision degrees, and which form the doctor signs. Five states below, each checked against the statute or the agency page.</p>

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
        <p>Glasses or contacts, your current prescription, photo ID, and any failed-test form already signed by your eye doctor. Confirm the current rule with your own agency before you go, since standards change. Then <a href="/us/#screener">practise the screening at home</a> so the counter holds no surprises. This guide is practice information only. It is not medical advice, and state summaries can go out of date. Our <a href="/about/">about page</a> states the limits plainly.</p>
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
        <p>Every row below represents one line on a standardized visual acuity chart written in metric, imperial, and decimal formats:</p>
        <table class="state-table">
          <thead><tr><th>Metric (6 m)</th><th>Feet (20 ft)</th><th>Decimal</th><th>Clinical Significance</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Normal baseline distance acuity</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Near normal; passes all driving standards</td></tr>
            <tr><td>6/9</td><td>20/30</td><td>0.67</td><td>Mild distance blur</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Standard DMV minimum driving cutoff in most jurisdictions</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Restricted license or corrective lens requirement</td></tr>
            <tr><td>6/24</td><td>20/80</td><td>0.25</td><td>Requires corrective lenses for safe driving</td></tr>
            <tr><td>6/30</td><td>20/100</td><td>0.2</td><td>Substantial distance impairment</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Statutory legal blindness cutoff without correction</td></tr>
          </tbody>
        </table>

        <h2>How to check 6/6 acuity at home</h2>
        <p>Position yourself exactly 6 metres (or 20 feet) from your screen. Calibrate your display using a physical bank card or ID card, because an uncalibrated optotype cannot provide accurate angular measurements. Gently cover one eye with your palm without pressing against the eyelid, read the smallest row of optotypes, and then repeat with the other eye. You can run <a href="/#screener">our free practice screener</a> directly in your browser.</p>
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
        <p>Para comprobar si tienes visión 6/6 o 20/20, calibra tu pantalla con una tarjeta plástica en nuestra <a href="/es/#screener">prueba visual gratuita</a> y colócate a la distancia recomendada. Si notas dificultades para leer las líneas intermedias, es aconsejable consultar a un especialista.</p>
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
        <p>Mit unserem <a href="/de/#screener">kostenlosen Sehtest online</a> können Sie Ihre Sehschärfe schnell und kalibriert prüfen. Halten Sie den erforderlichen Abstand ein und testen Sie jedes Auge einzeln.</p>
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
        <p>Grâce à notre <a href="/fr/#screener">test de vue en ligne</a>, étalonnez votre affichage avec une carte bancaire et vérifiez votre vision à distance pour chaque œil séparément.</p>
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
        <p>Você pode testar sua visão em nosso <a href="/pt/#screener">teste de visão online gratuito</a>. Calibre a tela com seu cartão de banco e mantenha a distância correta para avaliar se a sua visão atinge o padrão 6/6 ou 20/40.</p>
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
        <p>Posizionati a 6 metri dallo schermo (o a 3 metri per la scala ridotta). Calibra il display con una carta bancaria sul nostro <a href="/it/#screener">test della vista gratuito</a>. Copri un occhio e leggi la riga più piccola per verificare se raggiungi i 10/10.</p>
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
        <p>Начните с калибровки экрана по банковской карте в нашем <a href="/ru/#screener">бесплатном онлайн-тренажёре</a>. Встаньте на необходимое расстояние, проверяйте каждый глаз отдельно и сопоставьте результат с приведенной таблицей.</p>
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
        <p><strong>Yes, you can absolutely wear glasses or contact lenses during your DMV eye test.</strong> Millions of drivers take and pass their vision screening with corrective lenses every day. In fact, if you need prescription lenses to see clearly at distance, you should always bring them to the DMV counter.</p>

        <h2>What about reading glasses?</h2>
        <p>A common question applicants search for is: <em>can you use reading glasses for the DMV eye test?</em> <strong>The short answer is generally no for distance acuity.</strong></p>
        <p>Reading glasses (cheaters or plus lenses) are designed to magnify objects within arm's reach (about 14 to 16 inches). Because the primary DMV vision exam measures distance visual acuity at an optical simulation of 20 feet (6 meters), wearing pure reading glasses will actually blur your distance vision and cause you to fail line 5. You must use distance lenses, bifocals, or progressives rather than single-vision reading glasses for the distance check.</p>

        <h2>What is the 'B' Corrective Lenses Restriction?</h2>
        <p>If you take and pass the vision test while wearing glasses or contacts, the licensing officer will place a <strong>corrective lenses restriction</strong> on your driver's license (commonly denoted with code <strong>B</strong> on most state licenses). This restriction legally requires you to wear your corrective lenses whenever operating a motor vehicle. Driving without your glasses when this restriction is active is a traffic violation that carries fines and potential citations.</p>

        <h2>Can you remove the restriction later?</h2>
        <p>Yes. If your vision improves (for example, after LASIK or cataract surgery), or if you can meet the 20/40 benchmark without lenses, you can return to the DMV, retake the vision screening uncorrected, and have the restriction removed from your physical card.</p>

        <h2>How to prepare before going to the counter</h2>
        <p>Before your appointment, test your eyesight at home with and without your corrective eyewear. Use <a href="/us/#screener">our free practice DMV vision screener</a> to verify which eye reaches 20/40. If your current glasses still feel blurry at 10 or 20 feet, visit an eye doctor for an updated prescription before visiting the DMV.</p>
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
        <p>Invented in 1862 by Dutch ophthalmologist Herman Snellen, the <strong>Snellen eye test chart</strong> remains the global standard for measuring distance visual acuity. The chart consists of eleven lines of block letters (optotypes) that decrease in size as you read downward.</p>

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
        <p>In driver licensing facilities and online forums, people often ask about "line 5 dmv eye test". On standard Snellen charts calibrated for 20-foot viewing distances, Line 5 is typically the <strong>20/40 line</strong> (usually containing letters like P-E-C-F-D). Because 20/40 is the statutory minimum requirement to obtain an unrestricted driver's license in most US states, Line 5 is the crucial cutoff that examiners test.</p>

        <h2>Why static wall posters mislead</h2>
        <p>Many people print an eye chart poster or pull up an image on a smartphone. However, an uncalibrated digital image has an arbitrary pixel size that changes with screen resolution and magnification. If the letters are rendered 20% too large or too small, a true 20/40 letter can be easily misjudged as 20/20 or 20/60. To get an accurate measurement, use <a href="/#screener">our card-calibrated online vision test</a>, which scales vector optotypes to exact physical millimeter standards.</p>
      `
    }
  }
];
