/**
 * Per-locale SEO copy: the <title>, meta description, H1 and lede for every
 * prerendered route, plus the body sections of the text pages.
 *
 * The home page's on-screen strings come from src/scripts/i18n.js (the same
 * dictionary the client-side language switcher uses) so the server-rendered
 * HTML and the hydrated DOM are identical — no swap on load. This file only
 * holds what i18n.js does not: search-facing copy.
 *
 * Non-English routes carry genuinely translated title, description, H1 and
 * lede. The two legal documents (privacy, terms) keep an English body on every
 * locale — that is deliberate and stated on the page itself, because a machine
 * translation of a legal text is worse than none.
 */

export const EMAIL = "support@onlinevisiontest.org";

const en = {
  home: {
    keywords: "free online vision test, online vision test, eye test chart, snellen eye test, free eye test online, online eye exam",
    title: "Free Online Vision Test — 11 Checks in 10 Minutes",
    description:
      "Free online vision test: calibrate your screen and check distance, colour, peripheral and near vision eye by eye. No signup, results stay in your browser.",
    lede: "Practise the online vision test for free: calibrated, eye by eye, done in ten minutes.",
    articleTitle: "Free online vision test: what the screening actually covers",
    body: [
      { h: "What the screening actually covers", p: "The flow mirrors an in-person eye exam: calibrate your display with a standard card, step back to the designated distance, cover one eye with your palm, and identify the smallest row of optotypes. Following visual acuity, the screener guides you through Tumbling-E orientation, color recognition plates, 60° and 75° peripheral awareness, 16-inch near vision, contrast sensitivity, an astigmatism dial, and a red-green duochrome check. The primary target benchmark is 20/40 visual acuity — the standard required by most driver licensing agencies for unrestricted driving." },
      { h: "How to get an accurate result at home", p: "Accuracy depends entirely on physical pixel dimensions. Uncalibrated online charts can be distorted by 30% or more, turning a true 20/40 line into an apparent 20/25. By placing a standard magnetic card (85.6 mm under ISO/IEC 7810) against the screen outline and adjusting the slider, the software translates screen millimeters into exact angular dimensions, rendering vector letters with calibrated millimeter precision." },
      { h: "Preparing your testing environment", p: "Position yourself exactly 10 feet (3 meters) away, or 20 feet (6 meters) if space allows for standard Snellen testing. Mark your spot on the floor so your position stays consistent. Dim ambient room lighting so the monitor is the clearest light source in your field of view, keep the screen at eye level, and avoid leaning forward to guess optotypes — viewing distance is a fundamental part of the measurement." },
      { h: "Why calibrated vector optotypes beat static images", p: "Static image charts rely on fixed pixel resolutions that change physical size depending on screen resolution and scaling. Two people viewing the same image on different laptops will see vastly different visual angles. Calibrated vector optotypes scale dynamically on a 5x5 Snellen grid, ensuring identical arcminute substructures across all devices." },
      { h: "Medical disclaimer and purpose", p: "This screening tool is designed for personal practice and educational self-check. It is not an official DMV or DOT examination, not a clinical eye exam, and cannot replace a comprehensive medical evaluation by a licensed optometrist or ophthalmologist. If you notice persistent blur, double vision, or discomfort, schedule an examination with an eye care professional." },
    ],
  },
  us: {
    keywords: "dmv eye test online free, free dmv eye test online, dmv eye test online, dmv eye test chart, dmv eye test machine, nys dmv eye test online",
    title: "Free DMV Eye Test Online — Practice the 20/40 Check",
    description:
      "Practice the free DMV eye test online: DMV eye test chart, what the test machine shows, Snellen and Tumbling-E checks, 20/40 benchmark. No signup. Start now.",
    lede: "Practise the DMV eye test online free: calibrated, eye by eye, 50-state rules, done in ten minutes.",
    articleTitle: "DMV Eye Test Online: Requirements, Machines, and How to Prepare",
    body: [
      { h: "What the DMV eye test evaluates", p: "DMV vision screeners test whether an applicant meets the minimum visual standards to operate a motor vehicle safely. While standard driver licenses require 20/40 visual acuity in both eyes, states also test peripheral vision (typically 110° to 140° total horizontal field) and basic traffic light color recognition. Rehearsing at home helps you identify whether your current glasses or contacts meet your state's threshold." },
      { h: "Counter vision machines vs. wall charts", p: "Modern DMV service centers typically employ automated desktop vision machines like the Optec 1000 or Titmus V1 rather than illuminated wall charts. These enclosed viewers present optical slides under controlled illumination at simulated 20-foot optical infinity. The examiner will typically ask you to read line 5 (the standard 20/40 line) with both eyes, followed by monocular checks." },
      { h: "What happens if you fall below 20/40", p: "Falling short of 20/40 does not mean you lose your license. In almost every state, falling between 20/40 and 20/70 allows you to obtain a vision examination form (such as California DL-62, New York MV-619, or Texas DL-63) to take to an eye doctor. An optometrist or ophthalmologist can update your prescription or clear you for daytime-only driving." },
      { h: "How to rehearse effectively", p: "Rehearsing beforehand removes test anxiety. Use our calibrated practice screener to test each eye separately at a measured 10-foot or 20-foot distance. If you normally wear corrective lenses to drive, keep them on during the test." },
      { h: "Important advisory", p: "This practice screener is an independent educational tool and is not affiliated with or endorsed by any state DMV or DOT agency. Refer to your state's official department of motor vehicles for statutory requirements." },
    ],
  },
  blog: {
    title: "Online Eye Test Free - Check Your Vision at Home",
    description: "Take a free online eye test to check your visual acuity. Use our Snellen eye test chart from the comfort of your home.",
    h1: "Online Eye Test Guide",
    lede: "Learn how to easily test your vision online for free, check your dominant eye, and use a Snellen chart.",
    body: [
      { h: "How to read the table", p: "Minimum acuity is the standard for an unrestricted licence. If you fall below is the worst corrected acuity that may still qualify for a restricted licence — usually daylight-only driving or an outside-mirror requirement. Vision at renewal shows whether the state rechecks you every cycle, every other cycle, or on a longer cycle." },
      { h: "Why restrictions exist", p: "A restriction is not a ban. It is a note on the licence — corrective lenses, outside mirrors, daylight only — that a clerk or examiner adds so the standard matches how you actually see. Most people who fail a first acuity check simply needed their glasses." },
      { h: "CDL is a different standard", p: "Interstate commercial drivers are measured against 49 C.F.R. § 391.41: 20/40 corrected in each eye separately and in both together, 70° of field in each eye and 130° together, and the ability to recognise red, green and amber. A regular licence standard does not carry over." },
    ],
  },
  about: {
    title: "About Online Vision Test — Free Practice Screener",
    description:
      "Who builds Online Vision Test, why the chart is drawn rather than photographed, and what a browser-based screener can and cannot tell you.",
    h1: "About this screener",
    lede: "A free practice screener for people about to take a US driver-licence eye exam.",
    body: [
      { h: "What this is", p: "Online Vision Test is a free, browser-based practice screener. It reproduces the order of a counter vision check — calibrate, stand back, cover one eye, read the smallest line — and adds the tests US licences and CDL medical cards care about: distance acuity, a Tumbling-E direction test, colour plates, peripheral awareness, near vision, contrast sensitivity, an astigmatism dial and a duochrome refraction screen." },
      { h: "What it is not", p: "It is not an official DMV or DOT test, not a medical examination, and it cannot diagnose a condition or produce a prescription. Screen-based results depend on your monitor, your room lighting and your viewing distance. If a check suggests a problem, see an optometrist or ophthalmologist." },
      { h: "How it is built", p: "No accounts, no analytics, no uploads. The optotypes are drawn as vector paths on a 5x5 grid so the stroke-to-height ratio is correct at any size, and physical sizes derive from a bank-card calibration step. Everything runs on your device and every result stays in your browser." },
    ],
  },
  contact: {
    title: "Contact Online Vision Test",
    description:
      "Report a wrong state rule, a display bug or a translation error, or send a suggestion for the practice screener.",
    h1: "Contact",
    lede: "Found a stale state rule, a display bug or a mistranslation? Tell us.",
    body: [
      { h: "Email", p: "Write to " + EMAIL + ". Corrections to state vision rules are the most useful thing you can send, especially if you include the statute or the agency page." },
      { h: "Before you write", p: "This is a practice tool, not a clinic. We cannot interpret your results, tell you whether you will pass, or answer questions about your own eyes — please take those to an optometrist, ophthalmologist or your state licensing agency." },
    ],
  },
  privacy: {
    title: "Privacy Policy — Online Vision Test",
    description:
      "What Online Vision Test stores (a theme, a language and a calibration number in your own browser) and what it never does: no accounts, no analytics, no uploads.",
    h1: "Privacy policy",
    lede: "No account, no analytics, no uploads. Your results never leave your device.",
    body: [
      { h: "What we store", p: "Three small values in your browser's own localStorage: your light/dark theme choice, your language choice, and your screen-calibration profile. When you finish a run, the result summary is stored the same way so the stepper can show what you have already covered. None of it is transmitted anywhere." },
      { h: "What we do not do", p: "No account, no sign-in, no advertising or analytics script, no tracking pixel, no server-side log of your results. The page loads fonts from Google Fonts, which means Google sees the request for the font files — nothing about your test is attached to it." },
      { h: "Your control", p: "Clearing site data in your browser removes everything. The reported results can also be downloaded as a plain-text file or copied, and you can simply not do that — nothing is kept on our side either way." },
      { h: "Children", p: "The screener is intended for adults preparing for a driver-licence or CDL medical examination. It is not directed at children." },
      { h: "Changes and contact", p: "If this policy changes, the date on this page changes with it. Questions: " + EMAIL + "." },
    ],
  },
  terms: {
    title: "Terms of Use — Online Vision Test",
    description:
      "The terms for using Online Vision Test: a free practice screening tool offered as-is, with no medical advice, no warranty and no affiliation with any DMV.",
    h1: "Terms of use",
    lede: "A free practice tool, offered as-is, with no medical advice and no DMV affiliation.",
    body: [
      { h: "Practice tool only", p: "Online Vision Test is an educational practice screener. It is not an official DMV or DOT test, not a medical examination, and does not produce a prescription or a diagnosis." },
      { h: "No medical advice", p: "Nothing on this site is medical advice and no practitioner relationship is created by using it. Always consult a qualified eye-care professional about your vision." },
      { h: "Accuracy", p: "Results depend on your display, calibration, lighting and viewing distance, and the state summaries are a guide that may be out of date. Verify anything that matters with your state licensing agency or a medical examiner." },
      { h: "No warranty", p: "The service is provided as-is, without warranties of any kind. To the extent permitted by law we are not liable for any loss arising from reliance on it." },
      { h: "Acceptable use", p: "Use it for your own preparation. Do not present its output as an official test result, and do not imply that any DMV endorses it." },
      { h: "Changes and contact", p: "These terms may change; the date on this page changes with them. Questions: " + EMAIL + "." },
    ],
  },
  notFound: {
    title: "Page not found — Online Vision Test",
    description: "That address does not exist. Head back to the practice vision screener or browse the 50-state vision rules.",
    h1: "That page is not here",
    lede: "The link may be old, or the page may have moved. The screener and the state rules are both one click away.",
    body: [],
  },
  serverError: {
    title: "Something went wrong — Online Vision Test",
    description: "A temporary error. Reload the page or start the practice vision screener again.",
    h1: "Something went wrong",
    lede: "This is on us, not on you. Reload the page — the screener and the state rules are both still there.",
    body: [],
  },
};

const es = {
  home: {
    keywords: "examen de la vista online, examen de la vista online gratis, examen de la vista online para niños, examen de la vista online miopia",
    title: "Examen de la vista online gratis — Prueba visual (20/40)",
    description:
      "Examen de la vista online gratis. Calibra la pantalla con una tarjeta a 3 m y practica Snellen, agudeza 20/40, visión cercana y periférica sin registro.",
    lede: "Practica el examen de la vista online gratis: calibrado, ojo por ojo y en diez minutos.",
    articleTitle: "Examen de la vista online gratis: qué cubre realmente la evaluación",
    body: [
      { h: "Qué cubre la evaluación", p: "El orden imita el del mostrador: calibrar la pantalla, colocarte a la distancia correcta, tapar un ojo con la palma y leer la línea más pequeña que puedas. Después vienen la E de orientación, las láminas de color, la visión periférica a 60 y 75 grados, la visión cercana a 40 cm, la sensibilidad al contraste, el dial de astigmatismo y una pantalla de refracción duocroma. La referencia es 20/40, el mismo punto de corte que usa la mayoría de los estados para la licencia sin restricciones." },
      { h: "Cómo obtener un resultado fiable", p: "Todo depende de que los píxeles tengan el tamaño correcto, y eso es lo que falla en casi todas las pruebas caseras: un optotipo mostrado «más o menos» puede estar un 30 % desviado, lo justo para que una línea de 20/40 se confunda con una de 20/25. Coloca una tarjeta bancaria contra el contorno en pantalla y desliza hasta que coincidan. Una tarjeta mide 85,6 mm según la norma ISO/IEC 7810, así que la aplicación puede convertir milímetros en píxeles y dibujar cada letra a su tamaño real." },
      { h: "Prepara la habitación antes de empezar", p: "Colócate a 3 m (10 pies), o a 6 m si tienes espacio, que es la distancia estándar de Snellen, y marca el sitio en el suelo para repetir siempre la misma posición. Atenúa la luz de forma que la pantalla sea lo más brillante de la sala, mantén el monitor a la altura de los ojos y no te inclines hacia delante para salvar una línea: la distancia es la medida." },
      { h: "Por qué un optotipo calibrado supera a una imagen", p: "Muchas páginas muestran una imagen de una tabla de Snellen. Se ve igual, pero no mide nada: la imagen tiene un número fijo de píxeles, así que el ángulo visual depende por completo de tu monitor y de lo lejos que te sientes. Dos personas pueden leer el mismo archivo y recibir conclusiones distintas. Por eso el paso de la tarjeta aquí es obligatorio y no opcional, y por eso las letras se dibujan como vectores en lugar de componerse con una tipografía." },
      { h: "Qué no es esta herramienta", p: "No es un examen oficial de tráfico ni de transporte, no es una exploración médica y no puede diagnosticar ni recetar. Los resultados dependen de tu pantalla, tu iluminación y tu distancia, y los resúmenes por estado son orientativos y pueden estar desactualizados. Si algo te preocupa, acude a un optometrista u oftalmólogo antes de tu cita." },
    ],
  },
  blog: {
    title: "Examen de la vista online gratis - Comprueba tu visión en casa",
    description:
      "Guías sobre el examen de la vista: agudeza visual 20/40, requisitos por estado, restricciones y consejos para aprobar tu revisión de conducir en casa.",
    h1: "Guías y artículos sobre el examen de la vista",
    lede: "La mayoría de los estados exige 20/40 con ambos ojos para una licencia sin restricciones y permite seguir conduciendo con espejo exterior hasta 20/70. Cinco filas están verificadas con la norma; el resto te remite a tu organismo oficial de tráfico.",
    body: [
      { h: "Cómo leer la tabla", p: "Agudeza mínima es el estándar para una licencia sin restricciones. Si quedas por debajo es la peor agudeza corregida que aún puede dar derecho a una licencia restringida: normalmente conducir solo de día o llevar espejo exterior. Visión al renovar indica si el estado te revisa en cada ciclo, en ciclos alternos o con más intervalo." },
      { h: "Por qué existen las restricciones", p: "Una restricción no es una prohibición. Es una nota en la licencia —lentes correctivos, espejos exteriores, solo de día— para que la norma refleje cómo ves de verdad. La mayoría de quienes fallan la primera prueba simplemente necesitaban sus gafas." },
      { h: "Los conductores profesionales siguen otro estándar", p: "Los conductores comerciales interestatales se miden con 49 C.F.R. § 391.41: 20/40 corregido en cada ojo y en ambos a la vez, 70° de campo en cada ojo y 130° en conjunto, y distinguir rojo, verde y ámbar. El estándar de una licencia normal no sirve." },
    ],
  },
  about: {
    title: "Sobre Online Vision Test — Evaluador de práctica gratuito",
    description:
      "Quién construye Online Vision Test, por qué el optotipo se dibuja y no se fotografía, y qué puede y qué no puede decirte un evaluador en el navegador.",
    h1: "Acerca de este evaluador",
    lede: "Un evaluador de práctica gratuito para quienes van a hacer el examen de la vista para la licencia de conducir.",
    body: [
      { h: "Qué es esto", p: "Online Vision Test es un evaluador de práctica gratuito que funciona en el navegador. Reproduce el orden de una revisión de visión en ventanilla —calibrar, situarse a distancia, tapar un ojo, leer la línea más pequeña— y añade las pruebas que importan para las licencias de tu país y los certificados médicos profesionales: agudeza a distancia, dirección con la E, láminas de color, visión periférica, visión cercana, sensibilidad al contraste, dial de astigmatismo y cribado de refracción duo­croma." },
      { h: "Qué no es", p: "No es un examen oficial ni médico, no es una exploración médica y no puede diagnosticar nada ni emitir una receta. Los resultados dependen de tu monitor, la luz de la sala y la distancia. Si una prueba sugiere un problema, acude a un optometrista u oftalmólogo." },
      { h: "Cómo está hecho", p: "Sin cuentas, sin analíticas, sin subidas. Los optotipos se dibujan como trazos vectoriales sobre una rejilla de 5x5, así la proporción trazo/altura es correcta a cualquier tamaño, y los tamaños físicos derivan de una calibración con tarjeta bancaria. Todo se ejecuta en tu dispositivo y cada resultado se queda en tu navegador." },
    ],
  },
  contact: {
    title: "Contacto — Online Vision Test",
    description:
      "Informa de una norma estatal desactualizada, un fallo de pantalla o un error de traducción, o envía una sugerencia para el evaluador.",
    h1: "Contacto",
    lede: "¿Una norma estatal desactualizada, un fallo de pantalla o una mala traducción? Cuéntanoslo.",
    body: [
      { h: "Correo", p: "Escribe a " + EMAIL + ". Las correcciones de normas estatales de visión son lo más útil que puedes enviar, sobre todo si incluyes la ley o la página del organismo." },
      { h: "Antes de escribir", p: "Esto es una herramienta de práctica, no una clínica. No podemos interpretar tus resultados, decirte si vas a aprobar ni responder dudas sobre tus ojos: para eso, un optometrista, un oftalmólogo o tu organismo de licencias." },
    ],
  },
  privacy: {
    title: "Política de privacidad — Online Vision Test",
    description:
      "Qué guarda Online Vision Test (un tema, un idioma y un número de calibración en tu propio navegador) y qué no hace nunca: sin cuentas, sin analíticas, sin subidas.",
    h1: "Política de privacidad",
    lede: "Sin cuenta, sin analíticas y sin subidas. Tus resultados nunca salen de tu dispositivo.",
    body: [],
    englishBody: true,
  },
  terms: {
    title: "Términos de uso — Online Vision Test",
    description:
      "Las condiciones de uso de Online Vision Test: una herramienta de práctica gratuita ofrecida tal cual, sin consejo médico, sin garantía y sin afiliación con ningún organismo oficial.",
    h1: "Términos de uso",
    lede: "Una herramienta de práctica gratuita, tal cual, sin consejo médico y sin afiliación con ningún organismo oficial.",
    body: [],
    englishBody: true,
  },
  notFound: {
    title: "Página no encontrada — Online Vision Test",
    description: "Esa dirección no existe. Vuelve al evaluador de práctica o consulta nuestras guías de visión.",
    h1: "Esa página no está aquí",
    lede: "El enlace puede ser antiguo o la página puede haberse movido. El evaluador y las normas estatales están a un clic.",
    body: [],
  },
  serverError: {
    title: "Algo salió mal — Online Vision Test",
    description: "Un error temporal. Recarga la página o vuelve a empezar el evaluador de práctica.",
    h1: "Algo salió mal",
    lede: "El fallo es nuestro, no tuyo. Recarga la página: el evaluador y las normas estatales siguen ahí.",
    body: [],
  },
};

const fr = {
  home: {
    keywords: "test de vue en ligne, test de vue en ligne gratuit, comment réaliser un test de vue en ligne, test de vue en ligne myopie, test de vue en ligne pour enfant, comment faire un test de vue en ligne ?, faire un test de vue en ligne, test de vue en ligne enfant, test de vision en ligne, test de vision en ligne gratuit",
    title: "Test de vue en ligne gratuit — Contrôle visuel (20/40)",
    description:
      "Test de vue en ligne gratuit : calibrez votre écran à 3 m et testez votre acuité 20/40, échelle de Snellen, vision de près et périphérique sans inscription.",
    lede: "Entraînez-vous gratuitement au test de vue en ligne : calibré, œil par œil, en dix minutes.",
    articleTitle: "Test de vue en ligne gratuit : ce que couvre réellement le dépistage",
    body: [
      { h: "Ce que couvre le dépistage", p: "L'ordre reproduit celui du guichet : calibrer l'écran, se placer à la bonne distance, couvrir un œil avec la paume et lire la plus petite ligne possible. Viennent ensuite le E directionnel, les planches de couleurs, la vision périphérique à 60 puis 75 degrés, la vision de près à 40 cm, la sensibilité au contraste, le cadran d'astigmatisme et un écran de réfraction duochrome. Le repère est 20/40, le seuil que la plupart des États appliquent pour un permis sans restriction." },
      { h: "Comment obtenir un résultat fiable", p: "Tout dépend de la taille réelle des pixels, et c'est là que presque tous les tests maison échouent : un optotype affiché « à peu près à la bonne taille » peut être décalé de 30 %, assez pour confondre une ligne 20/40 avec une 20/25. Placez une carte bancaire contre le contour à l'écran et faites-la glisser jusqu'à ce qu'elles coïncident. Une carte mesure 85,6 mm selon la norme ISO/IEC 7810 : l'application peut donc convertir les millimètres en pixels et dessiner chaque lettre à sa taille réelle." },
      { h: "Préparez la pièce avant de commencer", p: "Placez-vous à 3 m (10 pieds), ou à 6 m si vous avez l'espace, la distance standard de Snellen, et marquez le sol pour reprendre toujours la même position. Baissez l'éclairage pour que l'écran soit l'élément le plus lumineux de la pièce, gardez l'écran à hauteur des yeux et ne vous penchez pas en avant pour sauver une ligne : la distance, c'est la mesure." },
      { h: "Pourquoi un optotype calibré vaut mieux qu'une image", p: "Beaucoup de sites affichent une image d'échelle de Snellen. Cela y ressemble, mais ne mesure rien : l'image a un nombre fixe de pixels, donc l'angle visuel dépend entièrement de votre écran et de votre recul. Deux personnes peuvent lire le même fichier et repartir avec des conclusions différentes. C'est pourquoi l'étape de la carte est obligatoire ici, et pourquoi les lettres sont dessinées en vectoriel plutôt que composées dans une police." },
      { h: "Ce que cet outil n'est pas", p: "Ce n'est pas un examen officiel ni médical, pas un examen médical, et il ne peut ni diagnostiquer ni prescrire. Les résultats dépendent de votre écran, de votre éclairage et de votre distance, et les résumés par État sont indicatifs et peuvent être périmés. Si quelque chose vous inquiète, consultez un optométriste ou un ophtalmologue avant votre rendez-vous." },
    ],
  },
  blog: {
    title: "Test de vue en ligne gratuit - Vérifiez votre vision chez vous",
    description:
      "Guides du test de vue : acuité visuelle 20/40, normes pour le permis de conduire, restrictions et conseils pour vérifier votre vue à la maison.",
    h1: "Exigences de vision par État",
    lede: "La plupart des États exigent 20/40 des deux yeux pour un permis sans restriction et autorisent la conduite avec rétroviseur extérieur jusqu'à 20/70. Cinq lignes sont vérifiées dans le texte de loi ; les autres vous renvoient à votre administration officielle.",
    body: [
      { h: "Comment lire le tableau", p: "L'acuité minimale est la norme pour un permis sans restriction. Si vous êtes en dessous indique la pire acuité corrigée qui peut encore ouvrir droit à un permis restreint — souvent la conduite de jour ou un rétroviseur extérieur. Vision au renouvellement précise si l'État contrôle à chaque cycle, un cycle sur deux, ou plus rarement." },
      { h: "Pourquoi les restrictions existent", p: "Une restriction n'est pas une interdiction. C'est une mention sur le permis — verres correcteurs, rétroviseurs extérieurs, conduite de jour — pour que la norme corresponde à votre vision réelle. La plupart des personnes recalées au premier contrôle avaient simplement besoin de leurs lunettes." },
      { h: "Les conducteurs professionnels suivent une autre norme", p: "Les conducteurs professionnels inter-États relèvent de 49 C.F.R. § 391.41 : 20/40 corrigé séparément à chaque œil et des deux ensemble, 70° de champ par œil et 130° au total, et la reconnaissance du rouge, du vert et de l'ambre. La norme d'un permis ordinaire ne s'applique pas." },
    ],
  },
  about: {
    title: "À propos de Online Vision Test — Dépistage d'entraînement gratuit",
    description:
      "Qui construit Online Vision Test, pourquoi l'optotype est dessiné plutôt que photographié, et ce qu'un dépistage dans le navigateur peut ou ne peut pas vous dire.",
    h1: "À propos de ce dépistage",
    lede: "Un outil d'entraînement gratuit pour les personnes qui vont passer l'examen de vue du permis officiel.",
    body: [
      { h: "Ce que c'est", p: "Online Vision Test est un dépistage d'entraînement gratuit qui tourne dans le navigateur. Il reproduit l'ordre d'un contrôle au guichet — calibrer, se placer à distance, cacher un œil, lire la plus petite ligne — et ajoute les tests qui comptent pour un permis officiel et un certificat médical professionnel : acuité de loin, sens du E, planches de couleurs, vision périphérique, vision de près, sensibilité aux contrastes, cadran d'astigmatisme et dépistage de réfraction duo­chrome." },
      { h: "Ce que ce n'est pas", p: "Ce n'est pas un examen officiel ou médical, ni un examen médical, et cela ne peut ni diagnostiquer ni prescrire. Les résultats dépendent de votre écran, de l'éclairage et de la distance. Si un test suggère un problème, consultez un optométriste ou un ophtalmologue." },
      { h: "Comment c'est construit", p: "Aucun compte, aucune mesure d'audience, aucun envoi. Les optotypes sont dessinés en tracés vectoriels sur une grille 5x5, donc le rapport trait/hauteur reste juste à toute taille, et les dimensions physiques viennent d'une calibration par carte bancaire. Tout s'exécute sur votre appareil et chaque résultat reste dans votre navigateur." },
    ],
  },
  contact: {
    title: "Contact — Online Vision Test",
    description:
      "Signalez une règle d'État périmée, un bug d'affichage ou une erreur de traduction, ou proposez une idée pour le dépistage.",
    h1: "Contact",
    lede: "Une règle d'État périmée, un bug d'affichage, une mauvaise traduction ? Dites-le-nous.",
    body: [
      { h: "E-mail", p: "Écrivez à " + EMAIL + ". Les corrections de règles de vision par État sont ce qu'il y a de plus utile, surtout avec le texte de loi ou la page officielle." },
      { h: "Avant d'écrire", p: "C'est un outil d'entraînement, pas un cabinet. Nous ne pouvons pas interpréter vos résultats, dire si vous réussirez, ni répondre sur vos yeux — adressez-vous à un optométriste, un ophtalmologue ou votre administration." },
    ],
  },
  privacy: {
    title: "Politique de confidentialité — Online Vision Test",
    description:
      "Ce que Online Vision Test stocke (un thème, une langue et un nombre de calibration dans votre propre navigateur) et ce qu'il ne fait jamais : aucun compte, aucune mesure d'audience, aucun envoi.",
    h1: "Politique de confidentialité",
    lede: "Aucun compte, aucune mesure d'audience, aucun envoi. Vos résultats ne quittent jamais votre appareil.",
    body: [],
    englishBody: true,
  },
  terms: {
    title: "Conditions d'utilisation — Online Vision Test",
    description:
      "Les conditions d'utilisation de Online Vision Test : un outil d'entraînement gratuit fourni en l'état, sans conseil médical, sans garantie et sans affiliation avec une administration officielle.",
    h1: "Conditions d'utilisation",
    lede: "Un outil d'entraînement gratuit, fourni en l'état, sans conseil médical ni affiliation avec un organisme officiel.",
    body: [],
    englishBody: true,
  },
  notFound: {
    title: "Page introuvable — Online Vision Test",
    description: "Cette adresse n'existe pas. Revenez au dépistage de vue ou consultez nos guides de vision.",
    h1: "Cette page n'est pas ici",
    lede: "Le lien est peut-être ancien ou la page a été déplacée. Le dépistage et les règles par État sont à un clic.",
    body: [],
  },
  serverError: {
    title: "Une erreur est survenue — Online Vision Test",
    description: "Erreur temporaire. Rechargez la page ou relancez le dépistage de vue.",
    h1: "Une erreur est survenue",
    lede: "C'est de notre côté, pas du vôtre. Rechargez la page : le dépistage et les règles par État sont toujours là.",
    body: [],
  },
};

const de = {
  home: {
    keywords: "sehtest online, sehtest online machen, sehtest online handy, sehtest online kostenlos, sehtest online handy kostenlos, kann man online einen sehtest machen, wie funktioniert ein online sehtest",
    title: "Sehtest online kostenlos — Am Handy & PC prüfen (20/40)",
    description:
      "Kostenloser Sehtest online am PC & Smartphone: Bildschirm kalibrieren, 3 m Abstand, Snellen-Sehtest, 20/40-Marke und Nahsicht ohne Anmeldung prüfen.",
    lede: "Üben Sie den Sehtest kostenlos online: kalibriert, Auge für Auge, in zehn Minuten.",
    articleTitle: "Kostenloser Sehtest online: was die Prüfung wirklich abdeckt",
    body: [
      { h: "Was die Prüfung abdeckt", p: "Die Reihenfolge folgt dem Schalter: Bildschirm kalibrieren, richtige Entfernung einnehmen, ein Auge mit der Handfläche abdecken und die kleinste lesbare Zeile vorlesen. Danach folgen das Richtungs-E, die Farbtafeln, das periphere Sehen bei 60 und 75 Grad, die Nahsicht bei 40 cm, die Kontrastempfindlichkeit, das Astigmatismus-Zifferblatt und ein duochromer Refraktionstest. Die Marke ist 20/40 — derselbe Wert, den die meisten Bundesstaaten für einen unbeschränkten Führerschein ansetzen." },
      { h: "So bekommen Sie ein belastbares Ergebnis", p: "Alles hängt davon ab, dass die Pixel die richtige Größe haben, und genau daran scheitern fast alle Heimtests: Eine Sehprobe, die „ungefähr richtig\" angezeigt wird, kann um 30 Prozent danebenliegen — genug, um eine 20/40-Zeile mit einer 20/25-Zeile zu verwechseln. Halten Sie eine Bankkarte an die Bildschirmkontur und schieben Sie sie, bis beide übereinstimmen. Eine Karte ist nach ISO/IEC 7810 genau 85,6 mm breit, sodass die Anwendung Millimeter in Pixel umrechnen und jeden Buchstaben in seiner echten Größe zeichnen kann." },
      { h: "Bereiten Sie den Raum vor", p: "Stellen Sie sich 3 m entfernt auf, oder 6 m, wenn Sie den Platz haben — das ist der Snellen-Standard —, und markieren Sie die Stelle am Boden, damit Sie immer gleich stehen. Dämpfen Sie das Licht, sodass der Bildschirm das hellste Objekt im Raum ist, halten Sie ihn auf Augenhöhe und lehnen Sie sich nicht vor, um eine Zeile zu retten: Die Entfernung ist die Messung." },
      { h: "Warum eine kalibrierte Tafel besser ist als ein Bild", p: "Viele Seiten zeigen ein Bild einer Snellen-Tafel. Es sieht gleich aus, misst aber nichts: Das Bild hat eine feste Pixelzahl, der Sehwinkel hängt also vollständig von Ihrem Monitor und Ihrem Abstand ab. Zwei Personen können dieselbe Datei lesen und unterschiedliche Rückmeldungen bekommen. Deshalb ist der Kartenschritt hier verpflichtend und nicht optional, und deshalb werden die Buchstaben als Vektoren gezeichnet statt in einer Schriftart gesetzt." },
      { h: "Was dieses Werkzeug nicht ist", p: "Es ist kein offizieller Führerschein- oder Sehtest, keine medizinische Untersuchung, und es kann weder diagnostizieren noch eine Brille verordnen. Ergebnisse hängen von Bildschirm, Beleuchtung und Abstand ab, und die Übersichten je Bundesstaat sind Anhaltspunkte, die veraltet sein können. Wenn Sie beunruhigt sind, gehen Sie vor Ihrem Termin zu einer Optometristin, einem Optometristen oder Augenarzt." },
    ],
  },
  blog: {
    title: "Sehtest online kostenlos - Überprüfen Sie Ihre Sehkraft zu Hause",
    description:
      "Ratgeber zum Sehtest: Mindestsehschärfe 20/40, Führerschein-Auflagen, Snellen-Tafel und praktische Tipps zur Überprüfung Ihrer Sehkraft zu Hause.",
    h1: "Sehanforderungen nach Bundesstaat",
    lede: "Die meisten Staaten verlangen 20/40 mit beiden Augen für eine unbeschränkte Fahrerlaubnis und erlauben mit Außenspiegel noch 20/70. Fünf Zeilen sind am Gesetzestext geprüft; der Rest verweist Sie an die zuständige Führerscheinstelle.",
    body: [
      { h: "So lesen Sie die Tabelle", p: "Mindest-Sehschärfe ist der Standard für eine unbeschränkte Fahrerlaubnis. Wenn Sie darunter liegen nennt die schlechteste korrigierte Sehschärfe, die noch für eine Auflage reicht — meist Fahren nur bei Tag oder Außenspiegel. Sehen bei Erneuerung zeigt, ob der Staat in jedem Zyklus, in jedem zweiten oder seltener nachprüft." },
      { h: "Warum es Auflagen gibt", p: "Eine Auflage ist kein Verbot. Sie ist ein Vermerk auf dem Führerschein — Korrekturbrille, Außenspiegel, nur bei Tag — damit die Regel zu Ihrem tatsächlichen Sehen passt. Wer die erste Prüfung nicht besteht, brauchte meist nur seine Brille." },
      { h: "Berufskraftfahrer unterliegen einer strengeren Norm", p: "Gewerbliche Fernfahrer werden nach 49 C.F.R. § 391.41 gemessen: 20/40 korrigiert auf jedem Auge einzeln und auf beiden zusammen, 70° Gesichtsfeld je Auge und 130° zusammen sowie Rot, Grün und Gelb. Die Norm eines normalen Führerscheins gilt dort nicht." },
    ],
  },
  about: {
    title: "Über Online Vision Test — Kostenlose Sehprüfung zum Üben",
    description:
      "Wer Online Vision Test baut, warum die Sehzeichen gezeichnet statt fotografiert werden und was eine Browser-Prüfung aussagen kann und was nicht.",
    h1: "Über diese Prüfung",
    lede: "Eine kostenlose Übungsprüfung für alle, die den Sehtest für den Führerschein vor sich haben.",
    body: [
      { h: "Was das ist", p: "Online Vision Test ist eine kostenlose Übungsprüfung im Browser. Sie bildet die Reihenfolge einer Sehprüfung am Schalter nach — kalibrieren, Abstand einnehmen, ein Auge abdecken, kleinste Zeile lesen — und ergänzt die Tests, auf die es bei Führerscheinen und Berufskraftfahrer-Untersuchungen ankommt: Fern-Sehschärfe, Richtungs-E, Farbtafeln, peripheres Sehen, Nahsicht, Kontrastempfindlichkeit, Astigmatismus-Tafel und Duochrom-Refraktion." },
      { h: "Was das nicht ist", p: "Es ist kein offizieller Führerschein- oder Sehtest, keine ärztliche Untersuchung, und es kann weder diagnostizieren noch eine Verordnung ausstellen. Ergebnisse hängen von Bildschirm, Licht und Abstand ab. Wenn ein Test auffällt, gehen Sie zu Optometrist oder Augenarzt." },
      { h: "Wie es gebaut ist", p: "Keine Konten, keine Analyse, keine Uploads. Die Sehzeichen sind Vektorpfade auf einem 5x5-Raster, damit das Verhältnis Strich zu Höhe in jeder Größe stimmt, und die physischen Größen folgen aus einer Kalibrierung per Bankkarte. Alles läuft auf Ihrem Gerät, jedes Ergebnis bleibt in Ihrem Browser." },
    ],
  },
  contact: {
    title: "Kontakt — Online Vision Test",
    description:
      "Melden Sie eine veraltete Landesregel, einen Anzeigefehler oder einen Übersetzungsfehler — oder schicken Sie einen Vorschlag.",
    h1: "Kontakt",
    lede: "Veraltete Landesregel, Anzeigefehler oder Übersetzungsfehler? Schreiben Sie uns.",
    body: [
      { h: "E-Mail", p: "Schreiben Sie an " + EMAIL + ". Korrekturen zu Sehregeln der Bundesstaaten sind am hilfreichsten, besonders mit Gesetzesangabe oder Behördenlink." },
      { h: "Bevor Sie schreiben", p: "Das ist ein Übungswerkzeug, keine Praxis. Wir können Ihre Werte nicht deuten, nicht sagen, ob Sie bestehen, und nichts zu Ihren Augen beantworten — dafür sind Optometrist, Augenarzt oder Ihre Fahrerlaubnisbehörde zuständig." },
    ],
  },
  privacy: {
    title: "Datenschutzerklärung — Online Vision Test",
    description:
      "Was Online Vision Test speichert (Thema, Sprache und ein Kalibrierwert im eigenen Browser) und was es nie tut: keine Konten, keine Analyse, keine Uploads.",
    h1: "Datenschutzerklärung",
    lede: "Kein Konto, keine Analyse, keine Uploads. Ihre Ergebnisse verlassen das Gerät nie.",
    body: [],
    englishBody: true,
  },
  terms: {
    title: "Nutzungsbedingungen — Online Vision Test",
    description:
      "Die Bedingungen für Online Vision Test: ein kostenloses Übungswerkzeug, bereitgestellt wie es ist — ohne medizinischen Rat, ohne Gewähr und ohne Verbindung zu einer.",
    h1: "Nutzungsbedingungen",
    lede: "Ein kostenloses Übungswerkzeug, wie es ist — ohne medizinischen Rat und ohne Verbindung.",
    body: [],
    englishBody: true,
  },
  notFound: {
    title: "Seite nicht gefunden — Online Vision Test",
    description: "Diese Adresse gibt es nicht. Zurück zur Sehprüfung oder zu den Regeln der Ihre Region.",
    h1: "Diese Seite gibt es nicht",
    lede: "Vielleicht ist der Link alt oder die Seite wurde verschoben. Sehprüfung und Landesregeln sind einen Klick entfernt.",
    body: [],
  },
  serverError: {
    title: "Etwas ist schiefgelaufen — Online Vision Test",
    description: "Ein vorübergehender Fehler. Seite neu laden oder die Sehprüfung erneut starten.",
    h1: "Etwas ist schiefgelaufen",
    lede: "Das liegt an uns, nicht an Ihnen. Laden Sie die Seite neu — Prüfung und Landesregeln sind weiter da.",
    body: [],
  },
};

const pt = {
  home: {
    keywords: "teste de visão, teste de visao, teste de visão online, teste de visao letras, teste de visão pelo celular, tabela teste de visão detran, teste de visão letras, teste de visão detran, letras para teste de visão, teste de visão infantil, letras pequenas para teste de visão, teste de visão pelo celular grátis, teste de visão miopia, teste de visão do detran, teste de visão para perto, teste de visão com desenhos, teste de visão online grátis, teste de visão no celular, simulação teste de visão detran, teste de visao celular",
    title: "Teste de visão online grátis — Pelo celular ou PC (20/40)",
    description:
      "Teste de visão online grátis no celular ou PC: calibre a tela a 3 m, treine com a tabela de Snellen, acuidade 20/40 e simulação Detran, sem cadastro.",
    lede: "Treine o teste de visão online grátis: calibrado, olho por olho, em dez minutos.",
    articleTitle: "Teste de visão online grátis: o que a avaliação cobre",
    body: [
      { h: "O que a avaliação cobre", p: "A ordem imita a do balcão: calibrar a tela, colocar-se à distância correta, tapar um olho com a palma da mão e ler a linha mais pequena que conseguir. Depois vêm o E direcional, as placas de cor, a visão periférica a 60 e 75 graus, a visão de perto a 40 cm, a sensibilidade ao contraste, o mostrador de astigmatismo e uma tela de refração duocromática. A referência é 20/40, o mesmo limite que a maioria dos estados usa para a carta sem restrições." },
      { h: "Como obter um resultado fiável", p: "Tudo depende de os píxeis terem o tamanho correto, e é aqui que quase todos os testes caseiros falham: um optótipo apresentado «mais ou menos» pode estar 30 % desviado, o suficiente para confundir uma linha de 20/40 com uma de 20/25. Encoste um cartão bancário ao contorno na tela e deslize até coincidirem. Um cartão mede 85,6 mm pela norma ISO/IEC 7810, por isso a aplicação converte milímetros em píxeis e desenha cada letra no tamanho real." },
      { h: "Prepare a sala antes de começar", p: "Fique a 3 m, ou a 6 m se tiver espaço — a distância padrão de Snellen — e marque o lugar no chão para repetir sempre a mesma posição. Baixe a luz para que a tela seja o objeto mais claro da sala, mantenha o monitor à altura dos olhos e não se incline para a frente para salvar uma linha: a distância é a medição." },
      { h: "Porque um optótipo calibrado vence uma imagem", p: "Muitos sites mostram uma imagem de uma tabela de Snellen. Parece igual, mas não mede nada: a imagem tem um número fixo de píxeis, logo o ângulo visual depende inteiramente do seu monitor e da distância a que se senta. Duas pessoas podem ler o mesmo arquivo e receber conclusões diferentes. Por isso o passo do cartão é obrigatório aqui, e por isso as letras são desenhadas como vetores em vez de compostas numa tipografia." },
      { h: "O que esta ferramenta não é", p: "Não é um exame oficial do Detran nem médico, não é um exame médico e não pode diagnosticar nem receitar. Os resultados dependem da tela, da iluminação e da distância, e os resumos por estado são orientativos e podem estar desatualizados. Se algo o preocupa, consulte um optometrista ou oftalmologista antes da sua consulta." },
    ],
  },
  blog: {
    title: "Teste de visão online grátis - Verifique sua visão em casa",
    description:
      "Guias do exame de vista: acuidade visual 20/40, requisitos para CNH e Detran, restrições e dicas práticas para testar sua visão em casa.",
    h1: "Requisitos de visão por estado",
    lede: "A maioria dos estados exige 20/40 com os dois olhos para uma carta sem restrições e permite conduzir com espelho exterior até 20/70. Cinco linhas estão verificadas na lei; as demais remetem ao órgão oficial de trânsito.",
    body: [
      { h: "Como ler a tabela", p: "Acuidade mínima é a norma para uma carta sem restrições. Se ficar abaixo indica a pior acuidade corrigida que ainda pode dar carta restrita — normalmente conduzir só de dia ou com espelho exterior. Visão na renovação mostra se o estado reavalia em cada ciclo, em ciclos alternados ou com mais intervalo." },
      { h: "Porque existem restrições", p: "Uma restrição não é uma proibição. É uma nota na carta — lentes corretivas, espelhos exteriores, só de dia — para que a norma corresponda ao que realmente vê. Quem falha a primeira avaliação quase sempre só precisava dos óculos." },
      { h: "Motoristas profissionais seguem outra norma", p: "Os motoristas comerciais interestaduais são medidos pela 49 C.F.R. § 391.41: 20/40 corrigido em cada olho e nos dois em conjunto, 70° de campo em cada olho e 130° no total, e distinguir vermelho, verde e âmbar. A norma de uma carta normal não se aplica." },
    ],
  },
  about: {
    title: "Sobre o Online Vision Test — Avaliação de prática gratuita",
    description:
      "Quem faz o Online Vision Test, porque o optotipo é desenhado em vez de fotografado, e o que uma avaliação no navegador pode e não pode dizer.",
    h1: "Sobre esta avaliação",
    lede: "Uma avaliação de prática gratuita para quem vai fazer o exame de vista da carteira de motorista (CNH).",
    body: [
      { h: "O que é isto", p: "O Online Vision Test é uma avaliação de prática gratuita que corre no navegador. Reproduz a ordem de uma verificação ao balcão — calibrar, afastar-se, tapar um olho, ler a linha mais pequena — e acrescenta os testes que contam para as cartas dos EUA e para o exame médico profissional: acuidade ao longe, sentido do E, placas de cor, visão periférica, visão de perto, sensibilidade ao contraste, mostrador de astigmatismo e rastreio de refração duocroma." },
      { h: "O que não é", p: "Não é um exame oficial do Detran nem médico, não é um exame médico e não pode diagnosticar nem receitar. Os resultados dependem da tela, da luz e da distância. Se um teste sugerir um problema, procure um optometrista ou oftalmologista." },
      { h: "Como é feito", p: "Sem contas, sem analítica, sem envios. Os optotipos são desenhados como traços vetoriais numa grelha 5x5, para que a razão traço/altura esteja certa em qualquer tamanho, e os tamanhos físicos vêm de uma calibração com cartão bancário. Tudo corre no seu dispositivo e cada resultado fica no seu navegador." },
    ],
  },
  contact: {
    title: "Contato — Online Vision Test",
    description:
      "Comunique uma regra estadual desatualizada, um erro de tela ou de tradução, ou envie uma sugestão para a avaliação.",
    h1: "Contato",
    lede: "Regra estadual desatualizada, erro na tela ou tradução errada? Diga-nos.",
    body: [
      { h: "E-mail", p: "Escreva para " + EMAIL + ". Correções às regras de visão dos estados são o mais útil, sobretudo com a lei ou a página do organismo." },
      { h: "Antes de escrever", p: "Isto é uma ferramenta de prática, não uma clínica. Não podemos interpretar resultados, dizer se vai passar nem responder sobre os seus olhos — para isso, um optometrista, um oftalmologista ou o organismo de licenciamento." },
    ],
  },
  privacy: {
    title: "Política de privacidade — Online Vision Test",
    description:
      "O que o Online Vision Test guarda (um tema, um idioma e um valor de calibração no seu próprio navegador) e o que nunca faz: sem contas, sem analítica, sem envios.",
    h1: "Política de privacidade",
    lede: "Sem conta, sem analítica e sem envios. Os seus resultados nunca saem do dispositivo.",
    body: [],
    englishBody: true,
  },
  terms: {
    title: "Termos de utilização — Online Vision Test",
    description:
      "Os termos do Online Vision Test: uma ferramenta de prática gratuita fornecida tal como está, sem aconselhamento médico, sem garantia e sem vínculo com qualquer órgão oficial.",
    h1: "Termos de utilização",
    lede: "Uma ferramenta de prática gratuita, tal como está, sem aconselhamento médico nem vínculo com qualquer órgão oficial.",
    body: [],
    englishBody: true,
  },
  notFound: {
    title: "Página não encontrada — Online Vision Test",
    description: "Esse endereço não existe. Volte à avaliação de vista ou veja as nossos guias de visão.",
    h1: "Essa página não está aqui",
    lede: "O link pode ser antigo ou a página pode ter mudado. A avaliação e as regras estaduais estão a um clique.",
    body: [],
  },
  serverError: {
    title: "Algo correu mal — Online Vision Test",
    description: "Um erro temporário. Recarregue a página ou comece de novo a avaliação de vista.",
    h1: "Algo correu mal",
    lede: "A culpa é nossa, não sua. Recarregue a página — a avaliação e as regras estaduais continuam lá.",
    body: [],
  },
};


const it = {
  home: {
    keywords: "test della vista online, test della vista online gratis, test acuità visiva online, tabella di Snellen online, test vista patente",
    title: "Test vista online gratis — Controllo 20/40",
    description: "Test della vista online gratis. Calibra lo schermo e controlla la tua vista in 10 minuti con il test di Snellen, astigmatismo e visione dei colori.",
    lede: "Esercitati con il test della vista online: calibrazione a schermo, occhio per occhio, in 10 minuti.",
    articleTitle: "Test della vista online gratis: cosa copre davvero lo screening",
    body: [
      { h: "Cosa copre lo screening", p: "L'ordine replica quello dello sportello: calibra lo schermo, mettiti alla giusta distanza, copri un occhio con il palmo e leggi la riga più piccola che riesci a leggere. Poi E direzionale, tavole dei colori, visione periferica a 60 e 75 gradi, visione da vicino a 40 cm, sensibilità al contrasto, quadrante per astigmatismo e schermo duocromatico. Il riferimento è 20/40." },
      { h: "Come ottenere un risultato affidabile", p: "Tutto dipende dalla dimensione reale dei pixel. Tieni una carta bancaria contro il contorno sullo schermo e trascina finché coincidono. Una carta misura 85,6 mm secondo ISO/IEC 7810, così l'app converte i millimetri in pixel e disegna ogni lettera alla dimensione reale." },
      { h: "Prepara la stanza prima di iniziare", p: "Mettiti a 3 m, o a 6 m se hai spazio, segna il punto sul pavimento e abbassa la luce in modo che lo schermo sia l'oggetto più luminoso. Tieni il monitor all'altezza degli occhi e non sporgerti in avanti per salvare una riga: la distanza è la misura." },
      { h: "Perché un ottotipo calibrato batte un'immagine", p: "Molti siti mostrano un'immagine della tabella di Snellen. Sembra uguale, ma non misura nulla: l'immagine ha un numero fisso di pixel, quindi l'angolo visivo dipende solo dal tuo monitor e dalla distanza. Qui il passo della carta è obbligatorio e le lettere sono disegnate come vettori." },
      { h: "Cosa non è questo strumento", p: "Non è un esame ufficiale, non è una visita medica e non può diagnosticare né prescrivere. I risultati dipendono da schermo, luce e distanza. Se qualcosa ti preoccupa, vai da un optometrista o un oculista prima dell'appuntamento." },
    ],
  },
  blog: {
    title: "Test della vista online gratis - Controlla la vista a casa",
    description: "Guide gratuite sul test della vista online: come usare la tabella di Snellen a casa, controllare l'occhio dominante e prepararsi alla visita.",
    h1: "Guide e articoli",
    lede: "Impara a testare la vista online gratis, a controllare l'occhio dominante e a usare la tabella di Snellen.",
    body: [
      { h: "Come leggere la tabella", p: "L'acutezza minima è lo standard per una patente senza restrizioni. Una restrizione non è un divieto: è una nota sulla patente — lenti correttive, specchi esterni, solo di giorno." },
      { h: "Perché esistono le restrizioni", p: "La maggior parte di chi non supera il primo controllo aveva semplicemente bisogno degli occhiali." },
      { h: "Standard diversi per professionisti", p: "I conducenti professionali seguono standard diversi, come 49 C.F.R. § 391.41 negli USA. Lo standard di una patente normale non si applica." },
    ],
  },
  about: {
    title: "Chi siamo — Online Vision Test, screening gratuito",
    description: "Chi crea Online Vision Test, perché gli ottotipi sono disegnati e non fotografati, e cosa può e non può dire uno screening nel browser.",
    h1: "Informazioni su questo screening",
    lede: "Uno screening gratuito per chi deve affrontare l'esame della vista per la patente.",
    body: [
      { h: "Cos'è", p: "Online Vision Test è uno screening gratuito nel browser. Replica l'ordine di un controllo allo sportello — calibra, allontanati, copri un occhio, leggi la riga più piccola — e aggiunge i test che contano: acutezza da lontano, E direzionale, tavole dei colori, visione periferica e da vicino, contrasto, astigmatismo e refrazione duocromatica." },
      { h: "Cosa non è", p: "Non è un esame ufficiale, non è una visita medica e non può diagnosticare né prescrivere. I risultati dipendono da monitor, luce e distanza. Se un test suggerisce un problema, vai da un optometrista o un oculista." },
      { h: "Come è fatto", p: "Nessun account, nessuna analisi, nessun upload. Gli ottotipi sono tracciati vettoriali su griglia 5x5 e le dimensioni reali derivano dalla calibrazione con carta bancaria. Tutto gira sul tuo dispositivo." },
    ],
  },
  contact: {
    title: "Contatti — Online Vision Test",
    description: "Segnala una regola non aggiornata, un bug di visualizzazione o un errore di traduzione, o invia un suggerimento.",
    h1: "Contatti",
    lede: "Una regola non aggiornata, un bug o una traduzione errata? Scrivici.",
    body: [
      { h: "Email", p: "Scrivi a " + EMAIL + ". Le correzioni alle regole sono utilissime, soprattutto con legge o pagina ufficiale." },
      { h: "Prima di scrivere", p: "Questo è uno strumento di pratica, non una clinica. Non possiamo interpretare i tuoi risultati né rispondere sui tuoi occhi: per questo rivolgiti a un optometrista, un oculista o alla motorizzazione." },
    ],
  },
  privacy: {
    title: "Informativa sulla privacy — Online Vision Test",
    description: "Cosa memorizza Online Vision Test (tema, lingua e calibrazione nel tuo browser) e cosa non fa mai: nessun account, nessuna analisi, nessun upload.",
    h1: "Informativa sulla privacy",
    lede: "Nessun account, nessuna analisi, nessun upload. I tuoi risultati non lasciano mai il dispositivo.",
    body: [
      { h: "Cosa memorizziamo", p: "Tre piccoli valori nel localStorage del tuo browser: la scelta del tema chiaro/scuro, la lingua selezionata e il profilo di calibrazione dello schermo. Al termine del test, il riepilogo viene salvato localmente nello stesso modo. Nessun dato viene mai trasmesso all'esterno." },
      { h: "Cosa non facciamo", p: "Nessun account, nessun login, nessuno script pubblicitario o di tracciamento, nessun pixel di monitoraggio e nessun registro lato server dei tuoi risultati." },
      { h: "Il tuo controllo", p: "Cancellando i dati del sito nel browser rimuovi ogni informazione salvata. Puoi scaricare o copiare il riepilogo dei risultati solo se lo desideri." },
      { h: "Destinatari", p: "Lo strumento di screening è pensato per adulti che desiderano verificare orientativamente la propria vista o prepararsi al rinnovo della patente." },
      { h: "Modifiche e contatti", p: "Eventuali aggiornamenti a questa informativa saranno pubblicati su questa pagina. Per domande: " + EMAIL + "." },
    ],
    englishBody: false,
  },
  terms: {
    title: "Termini di utilizzo — Online Vision Test",
    description: "Termini di utilizzo di Online Vision Test: strumento gratuito fornito così com'è, senza consulenza medica, senza garanzie e senza affiliazioni ufficiali.",
    h1: "Termini di utilizzo",
    lede: "Uno strumento di pratica gratuito, fornito così com'è, senza consulenza medica né affiliazioni con enti pubblici.",
    body: [
      { h: "Solo strumento di esercitazione", p: "Online Vision Test è uno screening educativo di prova. Non è un esame ufficiale della motorizzazione, non è una visita medica e non rilascia prescrizioni o diagnosi." },
      { h: "Nessuna consulenza medica", p: "Nulla su questo sito costituisce parere medico. Consulta sempre un medico oculista o un optometrista qualificato per qualsiasi necessità visiva." },
      { h: "Accuratezza", p: "I risultati dipendono dal monitor, dalla calibrazione, dall'illuminazione e dalla distanza di visione. Verifica sempre i requisiti ufficiali presso gli enti competenti." },
      { h: "Esclusione di garanzie", p: "Il servizio è fornito «così com'è», senza garanzie di alcun tipo. Nei limiti consentiti dalla legge, decliniamo ogni responsabilità derivante dall'uso delle informazioni fornite." },
      { h: "Modifiche e contatti", p: "Questi termini possono essere aggiornati periodicamente. Per domande: " + EMAIL + "." },
    ],
    englishBody: false,
  },
  notFound: {
    title: "Pagina non trovata — Online Vision Test",
    description: "Questo indirizzo non esiste. Torna allo screening gratuito o consulta le guide.",
    h1: "Questa pagina non c'è",
    lede: "Il link potrebbe essere vecchio o la pagina spostata. Screening e guide sono a un clic.",
    body: [],
  },
  serverError: {
    title: "Qualcosa è andato storto — Online Vision Test",
    description: "Errore temporaneo. Ricarica la pagina o riavvia lo screening gratuito.",
    h1: "Qualcosa è andato storto",
    lede: "È colpa nostra, non tua. Ricarica la pagina: screening e guide sono ancora qui.",
    body: [],
  },
};
const ja = {
  home: {
    keywords: "視力検査 スマホ, 視力検査スマホ, 視力 検査 スマホ, 簡易視力検査 スマホ, 家で視力検査 スマホ, ランドルト環 視力検査 スマホ, 視力検査スマホ 無料, 視力検査スマホで, 自宅 視力検査 スマホ, 運転免許更新 視力検査 スマホ, 簡易 視力検査 スマホ, スマホで視力検査",
    title: "視力検査 スマホ｜無料のオンライン簡易視力検査（20/40）",
    description: "スマホで視力検査できますか？はい、この無料ツールで自宅で簡易視力検査が可能です。視力検査スマホで画面を調整し、3m離れてスネレン表、ランドルト環、色覚、周辺視野、近見視力をチェック。家で視力検査 スマホとして登録不要。運転免許更新時の目安にも。",
    lede: "無料の視力検査 スマホを練習：自宅で画面調整つき、片目ずつ、約10分。簡易視力検査 スマホ対応。",
    articleTitle: "無料オンライン視力検査：スクリーニングの内容",
    body: [
      { h: "検査の内容", p: "手順は窓口と同じです：画面を調整し、正しい距離に立ち、手のひらで片目を隠して読める最小の行を読みます。次にランドルト環、色覚表、60度と75度の周辺視野、40cmの近見視力、コントラスト感度、乱視表、レッドグリーン検査が続きます。基準は20/40です。" },
      { h: "正確な結果を得るには", p: "すべてはピクセルの実寸にかかっています。銀行カードを画面の枠に当て、一致するまでスライドしてください。カードはISO/IEC 7810で85.6mmなので、アプリはmmをピクセルに変換し、各文字を実寸で描画できます。" },
      { h: "始める前の部屋の準備", p: "3m（または6m）離れ、床に印をつけて毎回同じ位置に立ちます。画面が部屋で一番明るくなるよう照明を落とし、モニターを目の高さに保ちます。行を読むために前かがみにならないでください：距離が測定です。" },
      { h: "調整済み視標が画像より優れる理由", p: "多くのサイトはスネレン表の画像を表示します。見た目は同じですが測定にはなりません：画像はピクセル数が固定なので、視角はモニターと距離だけで決まります。ここではカード手順が必須で、文字はフォントではなくベクターで描画されます。" },
      { h: "このツールの限界", p: "公式な試験でも医療検査でもなく、診断や処方はできません。結果は画面・照明・距離に依存します。気になる点があれば、受診前に眼科医や検眼医に相談してください。" },
    ],
  },
  blog: {
    title: "視力検査 スマホ 無料｜自宅で視力をチェック",
    description: "無料の視力検査 スマホの使い方ガイド：自宅でスネレン表を使う方法、利き目の調べ方、受診前の準備。",
    h1: "ガイドと記事",
    lede: "無料で視力をテストする方法、利き目の調べ方、スネレン表の使い方を学びましょう。",
    body: [
      { h: "表の読み方", p: "最小視力は無制限免許の基準です。制限は禁止ではなく、免許証の注記です（矯正レンズ、屋外ミラー、昼間のみなど）。" },
      { h: "制限がある理由", p: "初回で不合格になる人の多くは、単に眼鏡が必要だっただけです。" },
      { h: "プロは別基準", p: "事業用運転者は別の基準（米国では49 C.F.R. § 391.41）で評価されます。通常免許の基準は適用されません。" },
    ],
  },
  about: {
    title: "このサイトについて — Online Vision Test 無料スクリーニング",
    description: "Online Vision Testの制作者、視標を写真ではなく描画する理由、ブラウザ検査で分かることと分からないこと。",
    h1: "この検査について",
    lede: "運転免許の視力検査に備える人のための無料練習ツール。",
    body: [
      { h: "概要", p: "Online Vision Testはブラウザで動く無料の練習用スクリーニングです。窓口の手順（調整、距離、片目隠し、最小行の読み取り）を再現し、遠見視力、ランドルト環、色覚、周辺視野、近見視力、コントラスト、乱視、レッドグリーン検査を加えています。" },
      { h: "対象外", p: "公式試験でも医療検査でもなく、診断や処方はできません。結果は画面・照明・距離に依存します。問題が示唆されたら眼科医や検眼医に相談してください。" },
      { h: "仕組み", p: "アカウント、分析、アップロードはありません。視標は5x5グリッドのベクターパスで描画され、実寸は銀行カード調整から算出されます。すべて端末内で処理され、結果はブラウザに残ります。" },
    ],
  },
  contact: {
    title: "お問い合わせ — Online Vision Test",
    description: "運転免許の視力検査基準、画面表示の不具合、翻訳の誤りに関するご報告や改善のご提案はこちらのお問い合わせ窓口からご連絡ください。",
    h1: "お問い合わせ",
    lede: "古いルール、表示バグ、翻訳ミスを見つけたら教えてください。",
    body: [
      { h: "メール", p: EMAIL + " までご連絡ください。法令や公式ページを添えた修正報告が最も助かります。" },
      { h: "書く前に", p: "これは練習ツールであり、診療所ではありません。結果の解釈や合否の判断、目の相談にはお答えできません。眼科医、検眼医、免許機関にご相談ください。" },
    ],
  },
  privacy: {
    title: "プライバシーポリシー — Online Vision Test",
    description: "Online Vision Testのプライバシーポリシー：個人情報の収集やトラッキング、サーバーへの送信は一切行いません。安心して視力検査をご利用いただけます。",
    h1: "プライバシーポリシー",
    lede: "アカウント、分析、アップロードなし。結果が端末から出ることはありません。",
    body: [],
    englishBody: true,
  },
  terms: {
    title: "利用規約 — Online Vision Test",
    description: "Online Vision Testの利用規約：無料の練習ツールは現状有姿で提供され、医療助言、保証、提携はありません。",
    h1: "利用規約",
    lede: "無料の練習ツール（現状有姿）、医療助言なし、提携なし。",
    body: [],
    englishBody: true,
  },
  notFound: {
    title: "ページが見つかりません — Online Vision Test",
    description: "そのアドレスは存在しません。無料スクリーニングに戻るか、ガイドをご覧ください。",
    h1: "そのページはありません",
    lede: "リンクが古いか、ページが移動した可能性があります。スクリーニングとガイドはワンクリックです。",
    body: [],
  },
  serverError: {
    title: "エラーが発生しました — Online Vision Test",
    description: "一時的なエラーです。ページを再読み込みするか、スクリーニングを再開してください。",
    h1: "エラーが発生しました",
    lede: "こちら側の問題です。再読み込みしてください。スクリーニングはそのまま利用できます。",
    body: [],
  },
};
const ru = {
  home: {
    keywords: "проверка зрения онлайн, проверка зрения онлайн бесплатно, таблица сивцева, проверка зрения онлайн на смартфоне",
    title: "Проверка зрения онлайн бесплатно — Оценка 20/40",
    description: "Бесплатная проверка зрения онлайн на смартфоне или ПК: откалибруйте экран и проверьте зрение (таблица Сивцева, кольца Ландольта) за 10 минут.",
    lede: "Потренируйтесь бесплатно: калибровка, по одному глазу, за 10 минут.",
    articleTitle: "Бесплатная проверка зрения онлайн: что входит в скрининг",
    body: [
      { h: "Что входит в проверку", p: "Порядок как в кабинете: откалибруйте экран, встаньте на нужное расстояние, закройте один глаз ладонью и прочитайте самую мелкую строку. Затем кольца Ландольта, цветные таблицы, периферия на 60 и 75 градусов, зрение вблизи на 40 см, контраст, астигматизм и дуохромный тест. Ориентир — 20/40." },
      { h: "Как получить точный результат", p: "Всё зависит от реального размера пикселей. Приложите банковскую карту к контуру на экране и двигайте, пока размеры не совпадут. Карта — 85,6 мм по ISO/IEC 7810, поэтому приложение переводит миллиметры в пиксели и рисует каждую букву в реальном размере." },
      { h: "Подготовьте комнату", p: "Встаньте в 3 м (или 6 м, если есть место), отметьте точку на полу и приглушите свет, чтобы экран был самым ярким объектом. Держите монитор на уровне глаз и не наклоняйтесь вперёд, чтобы спасти строку: расстояние — это измерение." },
      { h: "Почему калиброванная таблица лучше картинки", p: "Многие сайты показывают картинку таблицы Сивцева. Выглядит так же, но ничего не измеряет: у картинки фиксированное число пикселей, поэтому угол зрения зависит только от монитора и расстояния. Здесь шаг с картой обязателен, а буквы нарисованы векторами." },
      { h: "Чем этот инструмент не является", p: "Это не официальный экзамен и не медицинское обследование, он не ставит диагноз и не выписывает рецепт. Результаты зависят от экрана, света и расстояния. Если что-то беспокоит, обратитесь к оптометристу или офтальмологу." },
    ],
  },
  blog: {
    title: "Проверка зрения онлайн бесплатно｜Проверьте зрение дома",
    description: "Бесплатные руководства по проверке зрения онлайн: как пользоваться таблицей Сивцева дома, определить ведущий глаз и подготовиться к приёму.",
    h1: "Руководства и статьи",
    lede: "Узнайте, как бесплатно проверить зрение онлайн, определить ведущий глаз и пользоваться таблицей.",
    body: [
      { h: "Как читать таблицу", p: "Минимальная острота — стандарт для прав без ограничений. Ограничение — не запрет, а отметка в правах: корректирующие линзы, наружные зеркала, только днём." },
      { h: "Зачем нужны ограничения", p: "Большинство не прошедших первую проверку просто нуждались в очках." },
      { h: "У профессионалов другой стандарт", p: "Коммерческие водители оцениваются по другим нормам (в США — 49 C.F.R. § 391.41). Стандарт обычных прав не применяется." },
    ],
  },
  about: {
    title: "О проекте — Online Vision Test, бесплатный скрининг",
    description: "Кто создаёт Online Vision Test, почему оптотипы нарисованы, а не сфотографированы, и что может и не может показать браузерный скрининг.",
    h1: "Об этом скрининге",
    lede: "Бесплатный тренировочный скрининг для тех, кто готовится к проверке зрения для прав.",
    body: [
      { h: "Что это", p: "Online Vision Test — бесплатный браузерный тренировочный скрининг. Повторяет порядок проверки — калибровка, дистанция, закрытие глаза, самая мелкая строка — и добавляет важные тесты: острота вдаль, кольца Ландольта, цвет, периферия, зрение вблизи, контраст, астигматизм и дуохром." },
      { h: "Чем не является", p: "Это не официальный экзамен и не медицинское обследование, он не ставит диагноз и не выписывает рецепт. Результаты зависят от экрана, света и расстояния. Если тест показал проблему, обратитесь к оптометристу или офтальмологу." },
      { h: "Как устроено", p: "Без аккаунтов, аналитики и загрузок. Оптотипы — векторные контуры на сетке 5x5, физические размеры выводятся из калибровки банковской картой. Всё работает на вашем устройстве." },
    ],
  },
  contact: {
    title: "Контакты — Online Vision Test",
    description: "Сообщите об устаревшем правиле, ошибке отображения или перевода, либо предложите улучшение.",
    h1: "Контакты",
    lede: "Устаревшее правило, баг или плохой перевод? Напишите нам.",
    body: [
      { h: "Почта", p: "Пишите на " + EMAIL + ". Исправления правил с законом или страницей ведомства полезнее всего." },
      { h: "Прежде чем писать", p: "Это тренажёр, а не клиника. Мы не интерпретируем результаты и не отвечаем про ваши глаза — с этим к оптометристу, офтальмологу или в лицензирующий орган." },
    ],
  },
  privacy: {
    title: "Политика конфиденциальности — Online Vision Test",
    description: "Что хранит Online Vision Test (тема, язык и калибровка в вашем браузере) и чего не делает никогда: без аккаунтов, аналитики и загрузок.",
    h1: "Политика конфиденциальности",
    lede: "Без аккаунта, аналитики и загрузок. Ваши результаты никогда не покидают устройство.",
    body: [
      { h: "Что мы храним", p: "Три небольших значения в локальном хранилище (localStorage) вашего браузера: выбранная тема оформления, язык интерфейса и коэффициент калибровки экрана. Итоги проверки сохраняются там же исключительно для отображения вашего прогресса и никуда не пересылаются." },
      { h: "Чего мы не делаем", p: "Мы не требуем регистрации, не используем рекламные или аналитические трекеры, не применяем отслеживающие пиксели и не ведем серверных логов ваших ответов." },
      { h: "Ваш контроль", p: "Очистка данных сайта в настройках браузера полностью удаляет все сохраненные значения. Вы можете скачать или скопировать текстовый отчет по собственному желанию." },
      { h: "Назначение сервиса", p: "Тренажёр рассчитан на взрослых пользователей, желающих предварительно оценить зрение перед визитом к специалисту или водительской медкомиссией." },
      { h: "Изменения и контакты", p: "При обновлении политики дата изменений публикуется на этой странице. Вопросы можно направлять на " + EMAIL + "." },
    ],
    englishBody: false,
  },
  terms: {
    title: "Условия использования — Online Vision Test",
    description: "Условия использования Online Vision Test: бесплатный тренажёр, предоставляемый «как есть», без медицинских советов, гарантий и связи с государственными органами.",
    h1: "Условия использования",
    lede: "Бесплатный тренировочный инструмент, предоставляемый «как есть», без медицинских консультаций и связи с официальными ведомствами.",
    body: [
      { h: "Только для ознакомления и тренировки", p: "Online Vision Test — образовательный онлайн-тренажёр. Он не является официальным экзаменом, не заменяет медицинское обследование и не выдает рецептов или диагнозов." },
      { h: "Отсутствие медицинских рекомендаций", p: "Материалы сайта не являются медицинской консультацией. По любым вопросам здоровья глаз обращайтесь к квалифицированному офтальмологу или оптометристу." },
      { h: "Точность результатов", p: "Показатели зависят от настроек дисплея, точности калибровки, освещения в помещении и соблюдения дистанции. Официальные нормативы всегда уточняйте в профильных медицинских учреждениях." },
      { h: "Ограничение ответственности", p: "Сервис предоставляется «как есть» без каких-либо гарантий. Мы не несем ответственности за любые решения, принятые на основе результатов онлайн-самопроверки." },
      { h: "Изменения и контакты", p: "Условия могут обновляться. По всем вопросам пишите на " + EMAIL + "." },
    ],
    englishBody: false,
  },
  notFound: {
    title: "Страница не найдена — Online Vision Test",
    description: "Такого адреса нет. Вернитесь к бесплатному скринингу или откройте руководства.",
    h1: "Этой страницы нет",
    lede: "Ссылка устарела или страница переехала. Скрининг и руководства — в один клик.",
    body: [],
  },
  serverError: {
    title: "Что-то пошло не так — Online Vision Test",
    description: "Временная ошибка. Обновите страницу или запустите скрининг заново.",
    h1: "Что-то пошло не так",
    lede: "Это наша ошибка, не ваша. Обновите страницу — скрининг и руководства на месте.",
    body: [],
  },
};
const PAGES = { en, es, fr, de, pt, it, ja, ru };


/**
 * SEO copy for one locale + page, falling back to English per field.
 * A locale row with no body falls back to the English body — that is how the
 * two legal pages stay explicitly English on every locale (englishBody: true).
 */
export function seoFor(locale, pageKey) {
  const base = PAGES.en[pageKey] || {};
  const row = (PAGES[locale] || PAGES.en)[pageKey] || {};
  const out = { ...base, ...row };
  if (!Array.isArray(row.body) || row.body.length === 0) out.body = base.body || [];
  out.englishBody = Boolean(row.englishBody);
  return out;
}

export default PAGES;
