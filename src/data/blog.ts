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
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "DMV Eye Test Practice Online: Exact 20/40 Standards & How to Pass",
      es: "Práctica de Examen Visual para Licencia DGT y DMV: Reglas y Cómo Aprobar",
      de: "Führerschein-Sehtest üben: FeV 0,7 Regeln, Landolt-Ringe & Tipps",
      fr: "Test de Vue Permis de Conduire : Règle des 5/10 et Préparation",
      pt: "Simulado Exame de Vista Detran CNH: Regras CONTRAN 927/2022",
      it: "Test Vista Rinnovo Patente B: Requisiti 7/10, 2/10 e Preparazione",
      ru: "Проверка зрения на права ГИБДД (форма 003-В/у): нормы и тренировка",
    },
    excerpt: {
      en: "Practice with calibrated 20/40 Snellen lines at true angular size, understand optical stereo-viewer machines, and review official licensing thresholds before counter day.",
      es: "Practica con líneas Snellen calibradas antes del examen psicotécnico DGT o DMV. Compara mínimos de 0,5 y 20/40, campo visual y códigos de gafas.",
      de: "Bereiten Sie sich mit kalibrierten Landolt-Ringen auf den amtlichen Sehtest nach § 12 FeV vor: Visus 0,7 für Klasse B, Ablauf beim Optiker und Schlüsselzahl 01.",
      fr: "Préparez le contrôle visuel du permis B selon l'arrêté du 28 mars 2022 : acuité binoculaire de 5/10, champ horizontal de 120° et test calibré en ligne.",
      pt: "Treine a tabela de Snellen calibrada e entenda os requisitos oficiais da Resolução CONTRAN nº 927/2022 para categorias A, B, C, D e E na clínica do Detran.",
      it: "Esercitati prima della visita medica per il rinnovo della patente B: soglia minima di 7/10 complessivi, almeno 2/10 nell'occhio peggiore e codice 01.",
      ru: "Подготовьтесь к медкомиссии ГИБДД по Постановлению № 1604: нормы 0,6 и 0,2 для категории B, таблица Сивцева и кольца Ландольта с калибровкой.",
    },
    content: {
      en: `
<p>Counter vision screenings trigger avoidable retests every single day, not because drivers lack safe road vision, but because applicants arrive tired, wearing scratched or outdated eyewear, or caught off guard by how desktop optical stereo-viewers present letter rows. Practicing ahead of time on a physically calibrated monitor removes guesswork and confirms weeks before your appointment whether your prescription still clears the <strong>20/40 legal standard</strong>.</p>
      <p>Launch our calibrated <a href="/us/test/">US DMV Practice Eye Test</a> after sizing the calibration box to a standard bank card. That step locks every optotype stroke to 1 arcminute at 20/20 scale for your real viewing distance instead of relying on uncalibrated browser zoom.</p>

      <h2>What Happens Inside the DMV Vision Machine vs Wall Charts?</h2>
      <p>Depending on the field office you visit, clerks screen vision either on a printed wall chart placed 10 to 20 feet behind the counter or through a hooded stereo-optical machine such as an Optec 1000 or Titmus vision tester. Desktop screeners use internal lenses and mirrors to simulate an optical viewing distance of 20 feet while sitting directly on the desk.</p>
      <p>When you lean your forehead against the headrest sensor, the examiner switches internal lights between both eyes, right eye only, and left eye only while calling out column numbers or colored slide targets. Because the forehead cushion places glasses lenses close to the eyepiece, smudge marks, progressive bifocal corridors, and dry eyes from driving with cabin vents blowing can cause temporary blur. Clean your lenses thoroughly and blink several times before pressing into the viewer.</p>

      <h2>Licensing Acuity Standards by State &amp; License Class</h2>
      <table>
        <thead>
          <tr><th>Jurisdiction / License Class</th><th>Minimum Unrestricted Acuity</th><th>Visual Field &amp; Key Restrictions</th></tr>
        </thead>
        <tbody>
          <tr><td>Most US States (Class C / D)</td><td>20/40 (0.50 decimal / 6/12)</td><td>Monocular applicants typically need 20/40 + 105° to 140° horizontal field</td></tr>
          <tr><td>New Jersey &amp; New York</td><td>NJ: 20/50 each eye; NY: 20/40 better eye</td><td>NJ screens at least once every 10 years; NY accepts Online Vision Registry</td></tr>
          <tr><td>Georgia &amp; Florida</td><td>GA: 20/60 either eye; FL: 20/70 either/both</td><td>If one FL eye is 20/200 or worse, the better eye must read 20/40</td></tr>
          <tr><td>Interstate CDL (49 CFR § 391.41)</td><td>20/40 in each eye AND both eyes</td><td>At least 70° horizontal meridian per eye plus red, green, amber recognition</td></tr>
        </tbody>
      </table>
      <p>Rules on senior renewal frequency, daylight-only tiers, and specialist forms (such as Form DL 62 in California or MV-619 in New York) vary across every jurisdiction. Verify your local threshold in our <a href="/states/">50-State DMV Vision Requirements Directory</a>.</p>

      <h2>Step-by-Step Home Practice Protocol</h2>
      <ol>
        <li><strong>Calibrate physical screen scale first:</strong> Align the reference box with any ISO/IEC 7810 ID-1 card (85.60 mm wide). Never skip calibration, since laptop display scaling between 100% and 200% changes true angular height dramatically.</li>
        <li><strong>Position at your test distance:</strong> Mark 3 meters (10 feet) from your chair to the display for the <a href="/checks/distance/">distance Snellen module</a>, keeping ambient room light steady and eliminating bright windows behind the screen.</li>
        <li><strong>Check distance glasses separately from readers:</strong> Always wear your distance driving glasses or contact lenses during practice if you normally wear them on the road. Reading glasses blur targets beyond arm's length and will fail a distance screening.</li>
        <li><strong>Test both eyes open, then right eye, then left eye:</strong> Rest the heel of a cupped palm lightly over your cheek bone rather than pressing your fingers onto the closed eyelid. Pressing deforms the corneal surface temporarily and blurs the next round.</li>
        <li><strong>Verify peripheral width and signal colors:</strong> Follow acuity practice with our <a href="/checks/peripheral/">horizontal visual field screening</a> and <a href="/checks/color/">traffic signal color test</a> so nothing at the counter catches you off guard.</li>
      </ol>

      <h2>Troubleshooting Borderline Line 5 (20/40) Results</h2>
      <p>If letters on the 20/40 row look washed out or slightly doubled at home, test early in the morning after a full night of sleep and artificial tears if your eyes run dry. Digital eye strain late in the afternoon frequently drops borderline acuity by one full Snellen line. When you consistently miss letters on 20/40 or 20/50, schedule an optometrist visit two to four weeks ahead of renewal so an updated lens prescription or state medical vision form is already in hand before your DMV appointment.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Is 20/40 tested with both eyes open or one eye at a time?</h3>
      <p>Most states pass an applicant who reaches 20/40 binocularly or in the better eye, while individual eye checks determine whether an outside mirror restriction or monocular specialist report applies. Practicing each eye separately prepares you for both checks.</p>
      <h3>What if I wear multifocal or progressive lenses inside a stereo viewer?</h3>
      <p>Ask the clerk before reading if you need to tilt your chin slightly upward or downward to look through the upper distance corridor rather than the bottom reading zone of your lens.</p>
      <h3>Does an online vision practice score count at the DMV?</h3>
      <p>No. Self-tests on your monitor do not replace official DMV counter testing or a signed doctor certificate, though they accurately preview whether you are ready to pass.</p>
      `,
      es: `
<p>No superar el reconocimiento visual para obtener o renovar el carné de conducir suele deberse a causas completamente evitables: cansancio ocular tras trabajar frente a ordenadores, gafas rayadas o con graduación desactualizada, o desconocimiento de cómo funciona el aparato óptico en el centro médico o ventanilla del DMV. Practicar antes en una pantalla calibrada elimina esa incertidumbre y permite comprobar si alcanzas sin esfuerzo el mínimo legal antes de tu cita.</p>
      <p>Empieza calibrando tu monitor con una tarjeta física estándar en nuestro <a href="/es/test/">test de visión calibrado en español</a>. Sin esta calibración inicial, cada sistema operativo escala el tamaño de las fuentes a su manera y desvirtúa el ángulo real de lectura.</p>

      <h2>Normativa Oficial: DGT España (RD 818/2009) y DMV Estados Unidos</h2>
      <p>Los requisitos varían según el organismo emisor y la categoría de vehículo. En España, el <strong>Anexo IV del Real Decreto 818/2009</strong> fija los criterios psicofísicos de obligada comprobación en los Centros de Reconocimiento de Conductores (CRC):</p>
      <table>
        <thead>
          <tr><th>Organismo / Grupo de Permiso</th><th>Agudeza Visual Mínima</th><th>Campo Visual y Condiciones Asociadas</th></tr>
        </thead>
        <tbody>
          <tr><td>España DGT Grupo 1 (Permisos AM, A, B)</td><td>0,5 binocular (equivalente a 20/40)</td><td>Con o sin corrección; código armonizado 01 en el permiso si requiere lentes</td></tr>
          <tr><td>España DGT Grupo 2 (C, D, E profesionales)</td><td>0,8 ojo mejor y 0,1 ojo peor</td><td>Campo binocular mínimo de 160° horizontales y ausencia total de diplopía</td></tr>
          <tr><td>Visión monocular (Grupo 1 España)</td><td>0,5 en el único ojo funcional</td><td>Campo visual íntegro en ese ojo y periodo mínimo de adaptación de seis meses</td></tr>
          <tr><td>DMV EE. UU. (Licencia Clase C / D)</td><td>20/40 (0,5 decimal o 6/12)</td><td>Comprobación en visor óptico de mostrador con lectura binocular y monocular</td></tr>
        </tbody>
      </table>

      <h2>Equivalencias Entre Escala Decimal, Snellen y LogMAR</h2>
      <p>Aunque cada país imprime su cartilla en décimas, fracciones en pies o escala métrica, todas respetan la geometría de Snellen de 5 minutos de arco por letra completa y 1 minuto de arco por cada trazo:</p>
      <ul>
        <li><strong>1,0 decimal (20/20 o 6/6 métrico):</strong> Agudeza estándar completa sin pérdida detectable en visión lejana.</li>
        <li><strong>0,8 decimal (20/25):</strong> Nivel exigido al ojo director para conductores profesionales de mercancías y viajeros en el Grupo 2.</li>
        <li><strong>0,5 decimal (20/40):</strong> Mínimo legal vigente para turismos y motocicletas tanto en España (Grupo 1) como en la mayoría de estados de EE. UU.</li>
        <li><strong>0,3 decimal (20/63 o 20/70):</strong> Valor insuficiente para permiso ordinario sin restricción específica o informe favorable del oftalmólogo.</li>
      </ul>

      <h2>Cómo Preparar y Ejecutar el Simulacro en Casa</h2>
      <ol>
        <li><strong>Ajusta el recuadro de calibración con una tarjeta:</strong> Coloca una tarjeta bancaria estándar de 85,60 mm sobre el rectángulo en pantalla hasta que los bordes coincidan exactamente.</li>
        <li><strong>Respeta la distancia de tres metros:</strong> Ubica tu silla a 3 metros exactos de la pantalla para el <a href="/checks/distance/">test de agudeza lejana</a>, con iluminación ambiente uniforme y sin reflejos de ventanas detrás del equipo.</li>
        <li><strong>Evalúa primero ambos ojos y luego cada ojo separado:</strong> Tapa un ojo formando una concha suave con la palma apoyada en el pómulo, nunca presionando el párpado. Presionar el ojo altera temporalmente la curvatura corneal y empeora artificialmente la lectura posterior.</li>
        <li><strong>Utiliza tus gafas de conducir habituales:</strong> Nunca realices pruebas de visión lejana con gafas de lectura o progresivos mal centrados. Quien necesita lentes para llegar a 0,5 recibe la anotación del código europeo 01 que obliga a conducir siempre con corrección óptica.</li>
        <li><strong>Revisa amplitud lateral y discriminación cromática:</strong> Completa la sesión evaluando la <a href="/checks/peripheral/">amplitud periférica horizontal</a> y el <a href="/checks/color/">test de colores de señalización vial</a>.</li>
      </ol>

      <h2>Errores Frecuentes y Cómo Evitar un Apto Restringido</h2>
      <p>Las lágrimas insuficientes, el uso de lentes progresivas mirando por el pasillo inferior cercano o acudir al reconocimiento psicotécnico a última hora tras jornadas largas frente al ordenador pueden hacer bajar tu rendimiento en una o dos décimas. Limpia tus cristales antes de entrar en el gabinete, descansa la vista de pantallas treinta minutos antes y reserva tu cita por la mañana. Si en el ensayo en casa dudaste en la línea de 0,5 o notaste sombras en una dirección, visita a tu óptico u oftalmólogo semanas antes de caducar el permiso.</p>

      <h2>Preguntas Frecuentes</h2>
      <h3>¿Sirve este simulador para evitar el psicotécnico presencial?</h3>
      <p>No. La prueba en línea sirve únicamente para entrenar y detectar cambios en tu graduación antes de acudir a un centro médico homologado o oficina de tráfico.</p>
      <h3>¿Puedo llevar lentillas durante el examen oficial?</h3>
      <p>Sí. Avisa al examinador antes de comenzar para que registre el uso de corrección óptica si superas el umbral mínimo gracias a ellas.</p>
      <h3>¿Qué ocurre si tengo visión monocular desde hace años?</h3>
      <p>En Grupo 1 la normativa permite renovar si el ojo único alcanza al menos 0,5 y conserva un campo visual periférico normal, acompañado del informe oftalmológico correspondiente.</p>
      `,
      de: `
<p>Ein nicht bestandener Sehtest beim Optiker verzögert den gesamten Führerscheinantrag um Wochen, weil danach zwingend ein augenärztliches Gutachten erforderlich wird. Dabei liegt ein schlechtes Ergebnis oft nicht an schweren Augenerkrankungen, sondern an veralteten Brillengläsern, abendlicher Bildschirmmüdigkeit oder ungewohnten Sehtestgeräten. Mit einer kalibrierten Vorprüfung zu Hause sehen Sie rechtzeitig, ob Ihre aktuelle Sehstärke die Vorgaben der Fahrerlaubnis-Verordnung sicher erfüllt.</p>
      <p>Starten Sie den <a href="/de/test/">kalibrierten Online-Sehtest</a> direkt im Browser, indem Sie die Skalierung einmalig exakt mit einer Standard-Bankkarte einmessen.</p>

      <h2>Gesetzliche Grenzwerte nach § 12 und Anlage 6 FeV</h2>
      <p>Die Verordnung über die Zulassung von Personen zum Straßenverkehr (FeV) unterscheidet zwischen der einfachen Sehteststelle (Gruppe 1) und tiefergehenden augenärztlichen Untersuchungen (Gruppe 2 sowie Nachuntersuchungen):</p>
      <table>
        <thead>
          <tr><th>Prüfstelle &amp; Fahrerlaubnisklasse</th><th>Geforderte zentrale Tagessehschärfe</th><th>Ablauf &amp; rechtliche Konsequenzen</th></tr>
        </thead>
        <tbody>
          <tr><td>Sehteststelle Klasse B, A, AM, L, T</td><td>Mindestens 0,7 auf dem rechten UND linken Auge</td><td>Prüfung mit genormten Landolt-Ringen am Gerät; bei Bestehen sofortige Bescheinigung</td></tr>
          <tr><td>Augenärztliches Zeugnis Klasse B (Nr. 1.2)</td><td>Mindestens 0,5 auf dem besseren oder beidäugig</td><td>Notwendig, falls ein Auge unter 0,7 liegt; schließt Gesichtsfeld und Beweglichkeit ein</td></tr>
          <tr><td>Klassen C, C1, CE, D, D1, DE (LKW/Bus)</td><td>0,8 besseres Auge und mindestens 0,5 schlechteres</td><td>Stets augenärztliche Untersuchung inkl. Dämmerungssehen, Farbsehen und Gesichtsfeld</td></tr>
        </tbody>
      </table>

      <h2>Warum amtliche Stellen in Deutschland Landolt-Ringe prüfen</h2>
      <p>Anders als Buchstabentafeln, bei denen geübte Prüflinge Zeichen anhand ihrer Umrisse erraten können, schreibt <strong>DIN EN ISO 8596</strong> für den amtlichen Sehtest geschlossene Kreise mit einer genau definierten Lücke vor. Bei diesen Landolt-Ringen misst die Öffnung exakt ein Fünftel des gesamten Ringdurchmessers und erscheint wahlweise oben, unten, links, rechts oder in einer von vier diagonalen Richtungen. Gerade ein unkorrigierter Astigmatismus fällt durch diagonale Lücken zuverlässig auf.</p>
      <p>Trainieren Sie diese Richtungserkennung gezielt in unserem <a href="/checks/landolt/">Landolt-Ring-Prüfmodul</a>.</p>

      <h2>Vorbereitung in fünf konkreten Schritten</h2>
      <ol>
        <li><strong>Monitor maßstabsgetreu kalibrieren:</strong> Legen Sie eine Scheckkarte im ISO-Format (85,60 mm Breite) an den Kalibrierungsrahmen und ziehen Sie den Regler exakt passend.</li>
        <li><strong>Abstand und Beleuchtung normgerecht wählen:</strong> Halten Sie beim <a href="/checks/distance/">Fernvisus-Check</a> 3 Meter Abstand ein und vermeiden Sie direktes Fensterlicht hinter dem Monitor.</li>
        <li><strong>Rechtes und linkes Auge konsequent einzeln prüfen:</strong> Da die einfache Sehteststelle nach Anlage 6 Nummer 1.1 auf beiden Augen jeweils den Wert 0,7 verlangt, zählt das schwächere Auge genauso wie das starke. Bedecken Sie das Gegenauge locker mit der hohlen Hand, ohne auf das Lid zu drücken.</li>
        <li><strong>Sehhilfe beim Vortest direkt überprüfen:</strong> Erreichen Sie 0,7 erst mit aktueller Brille oder Kontaktlinsen, gilt der Sehtest mit der Schlüsselzahl 01 („Sehhilfe erforderlich“) als bestanden.</li>
        <li><strong>Kontrast und seitliches Sehen zusätzlich prüfen:</strong> Prüfen Sie ergänzend das <a href="/checks/peripheral/">Gesichtsfeld-Screening</a> und die <a href="/checks/contrast/">Kontrastempfindlichkeit</a>, da Dämmerungsblendung im Straßenverkehr häufig unterschätzt wird.</li>
      </ol>

      <h2>Unterschied zwischen Optiker-Gerät und augenärztlichem Gutachten</h2>
      <p>In der amtlich anerkannten Sehteststelle blicken Sie in ein geschlossenes optisches Gerät, das über interne Linsen eine Prüfentfernung von rund fünf Metern simuliert. Putzen Sie Ihre Brille unmittelbar vorher und blinzeln Sie ruhig, bevor Sie die Öffnungsrichtungen nennen. Fällt ein Auge knapp unter 0,7, lohnt vor der Weiterleitung zum Facharzt eine klassische Brillenglasbestimmung beim Augenoptiker, da oft schon 0,5 Dioptrien Unterschied den Ausschlag geben. Besteht das Defizit auch mit optimaler Korrektur, prüft der Augenarzt nach Anlage 6 Nummer 1.2 ausführlicher Gesichtsfeld, Stereosehen, Augenbeweglichkeit und Dämmerungsvisus; ab einem Gesamtvisus von 0,5 kann bei unauffälligen Nebenbefunden die Fahrerlaubnis Klasse B dennoch erteilt werden.</p>

      <h2>Häufige Fragen zum Führerschein-Sehtest</h2>
      <h3>Wie viele Fehler pro Landolt-Ring-Reihe sind erlaubt?</h3>
      <p>Eine Visusstufe gilt gemäß Prüfnorm in der Regel als erkannt, wenn von fünf angezeigten Ringen mindestens drei Öffnungsrichtungen fehlerfrei benannt werden.</p>
      <h3>Darf man den Sehtest mit Kontaktlinsen absolvieren?</h3>
      <p>Ja. Tragen Sie beim Termin Ihre gewohnten Tages- oder Monatslinsen, wird die Sehhilfe per Schlüsselzahl 01 (beziehungsweise 01.02 für Kontaktlinsen oder 01.06 für Brille oder Linsen) im Dokument eingetragen.</p>
      <h3>Wie lange bleibt eine ausgestellte Sehtestbescheinigung gültig?</h3>
      <p>Die Sehtestbescheinigung für Fahrerlaubnisbewerber der Klassen A und B verliert nach Ablauf von zwei Jahren ab Ausstellungsdatum ihre Gültigkeit bei der Behörde.</p>
      <h3>Ersetzt das Online-Ergebnis den Stempel der Sehteststelle?</h3>
      <p>Nein. Eine offizielle Bescheinigung nach § 12 FeV darf ausschließlich eine amtlich anerkannte Sehteststelle, ein Augenarzt oder ein Amtsarzt ausstellen.</p>
      `,
      fr: `
<p>Avant de vous présenter devant un médecin agréé ou pour un renouvellement de titre professionnel, vérifier votre acuité sur un écran correctement calibré évite une inaptitude temporaire liée à une correction optique dépassée. Une légère baisse d'acuité de loin, une fatigue visuelle en fin de journée ou des verres rayés suffisent parfois à bloquer la validation du dossier médical le jour de l'examen.</p>
      <p>Lancez notre <a href="/fr/test/">test de vision calibré en ligne</a> en ajustant d'abord le cadre de référence avec une carte bancaire standard de 85,60 mm afin d'annuler les variations de zoom entre écrans.</p>

      <h2>Normes Visuelles de l'Arrêté du 28 mars 2022</h2>
      <p>En France, l'<strong>arrêté du 28 mars 2022</strong> détaille les critères officiels appliqués lors du contrôle médical de l'aptitude à la conduite :</p>
      <table>
        <thead>
          <tr><th>Catégorie de Permis</th><th>Acuité Visuelle Minimale Exigée</th><th>Champ Visuel &amp; Obligations Complémentaires</th></tr>
        </thead>
        <tbody>
          <tr><td>Groupe léger (A1, A2, A, B1, B, BE)</td><td>Au moins 5/10 en vision binoculaire (deux yeux ouverts)</td><td>Avec ou sans lunettes ; champ horizontal d'au moins 120° et centre intact sur 20°</td></tr>
          <tr><td>Vision monoculaire (Groupe léger)</td><td>Au moins 5/10 sur l'œil unique</td><td>Champ horizontal minimal de 120° sans déficit central et délai d'adaptation médicale</td></tr>
          <tr><td>Groupe lourd (C, CE, D, DE)</td><td>Au moins 8/10 sur le meilleur œil et 1/10 sur le moins bon</td><td>Champ visuel minimal de 160° horizontalement ; contrôle strict de l'éblouissement</td></tr>
        </tbody>
      </table>

      <h2>Correspondances entre l'Échelle Monoyer (Dixièmes) et Snellen</h2>
      <p>En cabinet français, on mesure l'acuité en dixièmes, tandis que les tests anglo-saxons emploient la fraction en pieds ou le score décimal. La géométrie angulaire reste strictement identique :</p>
      <ul>
        <li><strong>10/10 (1,0 décimal ou 20/20) :</strong> Acuité de référence normale à distance.</li>
        <li><strong>8/10 (0,8 décimal ou 20/25) :</strong> Minimum requis sur le meilleur œil pour les conducteurs du groupe lourd.</li>
        <li><strong>5/10 (0,5 décimal ou 20/40) :</strong> Seuil binoculaire réglementaire pour conduire les véhicules légers des catégories A et B.</li>
        <li><strong>1/10 (0,1 décimal ou 20/200) :</strong> Plancher absolu toléré pour l'œil faible dans le cadre des licences poids lourds lorsque le meilleur atteint 8/10.</li>
      </ul>

      <h2>Méthode Fiable d'Auto-Contrôle à Domicile</h2>
      <ol>
        <li><strong>Calibrez impérativement la taille d'affichage :</strong> Sans réglage sur une carte ISO réelle de 85,60 mm, un écran Retina ou Windows configuré à 125% modifie artificiellement la difficulté du test.</li>
        <li><strong>Installez-vous à 3 mètres exacts :</strong> Utilisez le <a href="/checks/distance/">module d'acuité à distance</a> dans une pièce lumineuse sans fenêtre en contre-jour derrière l'écran.</li>
        <li><strong>Comparez vision binoculaire et chaque œil séparément :</strong> Placez la paume légèrement incurvée devant un œil sans appuyer sur la paupière. Presser le globe oculaire provoque un flou cornéen momentané lorsque vous changez de côté.</li>
        <li><strong>Gardez vos lunettes de conduite habituelles :</strong> Ne passez pas un contrôle de vision lointaine avec des verres de lecture. Si la correction est nécessaire pour obtenir 5/10, le titre comportera le code restrictif 01 imposant le port de verres ou lentilles au volant.</li>
        <li><strong>Testez le champ horizontal et le contraste :</strong> Complétez l'épreuve des lettres avec le <a href="/checks/peripheral/">contrôle du champ périphérique</a> et le <a href="/checks/contrast/">test de sensibilité aux contrastes</a>.</li>
      </ol>

      <h2>Déroulement chez le Médecin Agréé et Vision Crépusculaire</h2>
      <p>Lors de la visite médicale hors commission ou en préfecture, le médecin agréé contrôle d'abord les dixièmes sur l'échelle de Monoyer, puis interroge les antécédents ophtalmologiques comme le glaucome, la cataracte ou la rétinopathie diabétique. Au-delà de la lecture simple, la réglementation examine la sensibilité aux contrastes, la récupération après éblouissement nocturne et l'absence de diplopie. Si vous hésitez à 3 mètres sur la ligne des 5/10 avec vos lunettes actuelles, consultez un ophtalmologue avant votre convocation officielle afin d'actualiser votre ordonnance optique.</p>

      <h2>Questions Fréquentes</h2>
      <h3>Un test en ligne remplace-t-il le certificat médical officiel ?</h3>
      <p>Non. Ce simulateur permet uniquement une évaluation préparatoire avant une consultation en cabinet ophtalmologique ou devant un médecin agréé.</p>
      <h3>Que signifie le code 01 inscrit au dos du permis ?</h3>
      <p>Ce code européen indique l'obligation légale de porter des lunettes ou des lentilles correctrices lors de la conduite de tout véhicule de la catégorie concernée.</p>
      <h3>Peut-on obtenir ou renouveler le permis B en cas de vision monoculaire ?</h3>
      <p>Oui pour le groupe léger, à condition que l'œil fonctionnel atteigne au moins 5/10 avec correction éventuelle, présente un champ horizontal de 120° minimum et ait respecté une période d'adaptation.</p>
      `,
      pt: `
<p>O exame médico de aptidão física e mental nas clínicas credenciadas pelos Detrans estaduais determina se sua visão atende aos requisitos mínimos de segurança no trânsito. Boa parte dos casos de inaptidão temporária ocorre simplesmente porque o motorista comparece com grau desatualizado, lentes arranhadas ou fadiga visual ao final do expediente. Fazer uma checagem prévia em monitor calibrado revela com semanas de antecedência se vale a pena atualizar seus óculos antes de pagar as taxas do exame.</p>
      <p>Para começar com tamanho real fiel ao consultório, calibre sua tela usando um cartão bancário no <a href="/pt/test/">teste de visão online calibrado</a>.</p>

      <h2>Exigências da Resolução CONTRAN nº 927/2022 por Categoria</h2>
      <p>A <strong>Resolução CONTRAN nº 927, de 28 de março de 2022</strong>, regulamenta os parâmetros do exame oftalmológico realizado pelo médico perito examinador de trânsito na primeira habilitação, renovação ou mudança de categoria da CNH em todo o Brasil:</p>
      <table>
        <thead>
          <tr><th>Grupo de Categorias CNH</th><th>Critérios Visuais Avaliados pelo Perito</th><th>Restrições e Regras Adicionais</th></tr>
        </thead>
        <tbody>
          <tr><td>Categorias A e B (motos e carros)</td><td>Acuidade visual central compatível com direção segura, campo horizontal e senso cromático</td><td>Necessidade de óculos ou lentes registra o Código A obrigatório no verso da CNH</td></tr>
          <tr><td>Categorias C, D e E (profissionais)</td><td>Padrões mais rigorosos de acuidade binocular, visão de profundidade, campo visual e ofuscamento</td><td>Exige ainda avaliação obrigatória de distúrbios do sono conforme Art. 4º</td></tr>
          <tr><td>Laudo Inapto Temporário (Art. 8º)</td><td>Indicado quando o déficit de visão pode ser corrigido por novas lentes ou tratamento</td><td>Permite refazer a etapa médica após ajuste oftalmológico</td></tr>
        </tbody>
      </table>

      <h2>O Que É Verificado no Consultório Além da Tabela de Snellen</h2>
      <p>Durante o atendimento presencial no Detran ou clínica credenciada, o médico examinador costuma verificar quatro aspectos visuais essenciais:</p>
      <ul>
        <li><strong>Acuidade visual central:</strong> Leitura de letras da tabela de Snellen ou símbolos direcionais em visor óptico fechado ou quadro iluminado na parede. Veja a correspondência detalhada de linhas no artigo <a href="/pt/blog/tabela-teste-de-visao-detran/">Tabela do Teste de Visão do Detran</a>.</li>
        <li><strong>Campo visual horizontal:</strong> Capacidade de perceber movimentos laterais sem tirar os olhos do ponto central, fundamental em cruzamentos e trocas de faixa.</li>
        <li><strong>Senso cromático:</strong> Identificação rápida de luzes vermelha, amarela e verde de semáforos, que você pode exercitar no <a href="/checks/color/">módulo de percepção de cores</a>.</li>
        <li><strong>Sensibilidade ao contraste e ofuscamento:</strong> Recuperação visual após exposição a faróis noturnos em sentido contrário, avaliada também no <a href="/checks/contrast/">teste de contraste</a>.</li>
      </ul>

      <h2>Guia Prático para Treinar em Casa Sem Distorções</h2>
      <ol>
        <li><strong>Execute a calibração física primeiro:</strong> Notebooks Windows e Mac aplicam escalas de zoom diferentes (100%, 125%, 150%). Ajustar o retângulo ao cartão padrão de 85,60 mm assegura altura milimétrica exata de cada caractere.</li>
        <li><strong>Posicione-se a 3 metros do monitor:</strong> No <a href="/checks/distance/">teste de distância online</a>, mantenha boa iluminação uniforme no ambiente e evite janelas diretamente atrás da tela para não reduzir o contraste.</li>
        <li><strong>Avalie primeiro os dois olhos e depois um de cada vez:</strong> Cubra o olho oposto com a palma em concha apoiada levemente na bochecha, sem pressionar a pálpebra. Pressionar o globo ocular embaça a visão na rodada seguinte.</li>
        <li><strong>Use seus óculos de direção, nunca óculos de leitura:</strong> Lentes para perto focam apenas a 40 centímetros e impedem a leitura correta em exames de distância.</li>
      </ol>

      <h2>Prazos de Renovação da CNH, Idade e Restrição Código A</h2>
      <p>O Código de Trânsito Brasileiro vincula a validade do exame médico à faixa etária do condutor: até 10 anos para motoristas abaixo de 50 anos, 5 anos entre 50 e 69 anos e 3 anos para condutores com 70 anos ou mais, salvo redução estabelecida pelo médico perito em razão de condições clínicas progressivas. Quando o candidato só alcança a acuidade mínima utilizando óculos ou lentes de contato, o verso da CNH recebe o Código A de observação obrigatória. Dirigir sem a correção registrada constitui infração gravíssima sujeita a multa e retenção do veículo. Caso note dificuldade em casa na leitura de linhas médias, atualize seu exame de vista particular antes de agendar a perícia.</p>

      <h2>Dúvidas Frequentes sobre o Exame da CNH</h2>
      <h3>Posso usar lentes de contato durante a perícia do Detran?</h3>
      <p>Sim. Avise o médico examinador no início da consulta para que avalie seu desempenho com lentes de contato. Se forem indispensáveis para atingir a nota de aprovação, o Código A aparecerá nas observações da CNH.</p>
      <h3>Pessoas com daltonismo conseguem aprovação nas categorias A e B?</h3>
      <p>Na grande maioria dos casos sim, desde que o candidato identifique de forma segura as cores e a ordem dos sinais luminosos semafóricos durante o teste na clínica credenciada.</p>
      <h3>Este teste online gera documento aceito pelo Detran?</h3>
      <p>Não. O simulador oferece triagem educativa para ajudar você a verificar se precisa de nova consulta oftalmológica antes da avaliação presencial obrigatória.</p>
      `,
      it: `
<p>Superare con sicurezza il controllo della vista alla visita medica per il rilascio o il rinnovo della patente B richiede soprattutto che la propria correzione ottica sia aggiornata. Molti automobilisti riscontrano difficoltà in ambulatorio non per patologie improvvise, ma per occhiali vecchi di anni, stanchezza serale davanti al PC oppure lenti sporche davanti al visore luminoso. Esercitarsi a casa su uno schermo calibrato consente di verificare in anticipo il proprio livello reale in decimi.</p>
      <p>Avvia il nostro <a href="/it/test/">test della vista online calibrato</a> allineando subito il riquadro sullo schermo a una tessera rigida standard da 85,60 mm.</p>

      <h2>Parametri Legali per la Patente B (Art. 119 Codice della Strada)</h2>
      <p>L'<strong>Articolo 119 del Codice della Strada</strong> e l'Articolo 322 del relativo Regolamento di esecuzione definiscono con esattezza le soglie visive per i conducenti del Gruppo 1 (patenti AM, A1, A2, A, B1, B, BE):</p>
      <table>
        <thead>
          <tr><th>Categoria / Situazione Visiva</th><th>Requisito Minimo di Visus</th><th>Campo Visivo &amp; Annotazioni Patente</th></tr>
        </thead>
        <tbody>
          <tr><td>Visione binoculare (Patente A / B)</td><td>Almeno 7/10 complessivi con minimo 2/10 nell'occhio peggiore</td><td>Con o senza lenti correttive; obbligo segnalato con codice 01 sul retro patente</td></tr>
          <tr><td>Visione monoculare (occhio singolo)</td><td>Almeno 8/10 nell'occhio residuo</td><td>Campo visivo orizzontale >= 120° senza deficit centrali; valutazione spesso in CML</td></tr>
          <tr><td>Gruppo 2 (Patenti C, CE, D, DE)</td><td>Almeno 8/10 nell'occhio migliore e 4/10 nel peggiore</td><td>Campo minimo 160° orizzontali e controllo stretto su abbagliamento e contrasto</td></tr>
        </tbody>
      </table>

      <h2>Scala in Decimi, Frazioni Snellen e Differenza per Occhio</h2>
      <p>Durante la visita alla ASL, in autoscuola o agli uffici abilitati, l'ottotipo mostra righe numerate da 1/10 fino a 10/10. Ricorda che il requisito italiano combina due soglie distinte: raggiungere almeno 7/10 totali con entrambi gli occhi aperti e mantenere comunque almeno 2/10 nell'occhio più debole:</p>
      <ul>
        <li><strong>10/10 (equivalente a 20/20):</strong> Massima nitidezza di riferimento nella scala standard.</li>
        <li><strong>7/10 (circa 20/30):</strong> Soglia complessiva minima richiesta alla visita ordinaria per la patente B.</li>
        <li><strong>5/10 (equivalente a 20/40):</strong> Valore intermedio molto comune quando uno dei due occhi necessita di una piccola correzione per astigmatismo o miopia.</li>
        <li><strong>2/10 (equivalente a 20/100):</strong> Limite minimo assoluto per l'occhio che vede meno in presenza di visione binoculare.</li>
      </ul>

      <h2>Come Simulare Correttamente la Prova a Casa</h2>
      <ol>
        <li><strong>Calibra fisicamente la larghezza delle lettere:</strong> Ogni laptop applica un fattore di ingrandimento diverso; usare la tessera da 85,60 mm blocca la scala angolare reale a ogni risoluzione.</li>
        <li><strong>Mantieni la distanza esatta di 3 metri:</strong> Utilizza il <a href="/checks/distance/">modulo di acuità da lontano</a> in una stanza illuminata in modo uniforme, senza finestre alle spalle dello schermo.</li>
        <li><strong>Prova prima con due occhi e poi ciascuno singolarmente:</strong> Copri l'occhio opposto con il palmo curvo appoggiato sullo zigomo senza schiacciare le palpebre, evitando deformazioni temporanee della cornea prima della lettura successiva.</li>
        <li><strong>Verifica anche visione laterale e colori semaforici:</strong> Integra l'allenamento sulle lettere con il <a href="/checks/peripheral/">test del campo periferico</a> e il <a href="/checks/color/">test del senso cromatico</a>.</li>
      </ol>

      <h2>Quando Interviene la Commissione Medica Locale (CML)</h2>
      <p>Se durante la visita monocratica il medico rileva un visus inferiore ai limiti ordinari, una patologia oculare progressiva come glaucoma, cheratocono o retinopatia diabetica, oppure una visione monoculare, l'idoneità viene demandata alla Commissione Medica Locale provinciale. Oltre alla lettura dei decimi su tabellone luminoso, la Commissione può verificare visione crepuscolare, sensibilità al contrasto, assenza di diplopia e tempi di recupero dopo abbagliamento da fari notturni. Eseguire una prova domestica settimane prima della scadenza consente di prenotare per tempo l'oculista e portare eventuali referti già pronti alla visita.</p>

      <h2>Domande Frequenti sul Rinnovo Patente</h2>
      <h3>Posso indossare lenti a contatto durante la visita medica?</h3>
      <p>Sì, basta informare il medico prima di leggere il tabellone. Sulla patente verrà riportato il codice armonizzato 01 relativo all'obbligo di correzione ottica.</p>
      <h3>In cosa consiste la prova di sensibilità al contrasto e abbagliamento?</h3>
      <p>Il dispositivo proietta lettere a basso contrasto o subito dopo un breve fascio luminoso per valutare in quanti secondi l'occhio recupera la leggibilità notturna.</p>
      <h3>Il test su browser ha validità legale per il rinnovo?</h3>
      <p>No. La prova online ha finalità esclusivamente preparatoria per scoprire in anticipo se occorre rinnovare la prescrizione presso il proprio ottico o oculista.</p>
      `,
      ru: `
<p>Прохождение водительской медицинской комиссии по форме 003-В/у часто затягивается не из-за серьезных заболеваний глаз, а по банальной причине: водитель давно не обновлял очки, пришел на прием уставшим вечером или не знает юридических нюансов допуска по каждому глазу. Домашняя самопроверка на откалиброванном мониторе позволяет за несколько недель до осмотра понять, проходит ли текущая коррекция по закону.</p>
      <p>Начните проверку на <a href="/ru/test/">калиброванном онлайн-тесте зрения</a>, предварительно выставив точный физический масштаб с помощью стандартной банковской карты шириной 85,60 мм. Без этой настройки браузер искажает реальный угловой размер символов.</p>

      <h2>Официальные нормы по Постановлению Правительства РФ № 1604</h2>
      <p>Требования к зрению кандидатов и действующих водителей установлены <strong>Постановлением Правительства РФ № 1604</strong>. Ключевое правило категории B учитывает показатели обоих глаз по отдельности:</p>
      <table>
        <thead>
          <tr><th>Категория водительских прав</th><th>Минимальная острота с коррекцией</th><th>Особые условия допуска и отметки</th></tr>
        </thead>
        <tbody>
          <tr><td>Категория B, BE, A, A1 (легковые и мото)</td><td>Не ниже 0,6 на лучшем глазу и не ниже 0,2 на худшем</td><td>При слепоте одного глаза допускается минимум 0,8 на единственном глазу</td></tr>
          <tr><td>Категории C, D, CE, DE (грузовые и автобусы)</td><td>Не ниже 0,8 на лучшем глазу и не ниже 0,4 на худшем</td><td>Монокулярное зрение (слепота одного глаза) является противопоказанием</td></tr>
          <tr><td>Использование очков или контактных линз</td><td>Допускается при переносимой разнице рефракции</td><td>В раздел 12 прав вносится обязательная отметка GCL</td></tr>
        </tbody>
      </table>

      <h2>Почему важна проверка по таблице Сивцева и кольцам Ландольта</h2>
      <p>В российских поликлиниках зрение проверяют либо по буквенной <strong>таблице Сивцева</strong> (строки со знаками Ш, Б, М, Н, К, Ы, И, где шестая строка соответствует 0,6, а десятая равна 1,0), либо по <a href="/checks/landolt/">кольцам Ландольта</a> с разрывом в разных направлениях. Обратите внимание на важную деталь закона: если оба глаза без очков показывают по 0,5, комиссия не выдаст допуск категории B, так как минимум 0,6 должен обеспечивать хотя бы один глаз.</p>
      <p>Подробная разметка строк и дистанций описана в статье <a href="/ru/blog/proverka-zreniya-tablitsa-sivtseva/">Проверка зрения по таблице Сивцева</a>.</p>

      <h2>Как правильно подготовиться и провести самопроверку дома</h2>
      <ol>
        <li><strong>Обязательная калибровка экрана по пластиковой карте:</strong> Масштабирование Windows (125% или 150%) или экранов Retina меняет высоту букв; калибровка картой 85,60 мм приводит символы к точной угловой минуте Снеллена.</li>
        <li><strong>Соблюдение дистанции 3 метра:</strong> Расположитесь строго на расстоянии 3 метров при тестировании в <a href="/checks/distance/">модуле дальней остроты зрения</a>, обеспечив ровное освещение комнаты без бликов от окна.</li>
        <li><strong>Поочередная проверка правого и левого глаза:</strong> Прикрывайте свободный глаз ладонью-лодочкой, опираясь на скулу и не надавливая на веко, чтобы не исказить форму роговицы перед следующей попыткой.</li>
        <li><strong>Дополнительный контроль периферии и цветовосприятия:</strong> Врач на комиссии также проверяет различение оттенков по полихроматическим таблицам и ширину обзора, которые можно предварительно оценить в <a href="/checks/color/">тесте цветовосприятия</a> и <a href="/checks/peripheral/">проверке периферического зрения</a>.</li>
      </ol>

      <h2>Что проверяет офтальмолог кроме букв и как пересдать комиссию</h2>
      <p>Помимо таблицы Сивцева врач оценивает границы периферического поля зрения (допускается сужение не более чем на 20 градусов) и отсутствие выраженного нарушения цветоощущения. Важную роль играет и переносимая разница между линзами для правого и левого глаза (обычно не более трех диоптрий при подборе очковой коррекции). Если вы не прошли комиссию с первого раза, не переживайте: достаточно обратиться к оптометристу, подобрать современные очки или контактные линзы с актуальными диоптриями и вернуться к офтальмологу. С правильно подобранной оптикой повторное освидетельствование обычно проходит с первой попытки.</p>

      <h2>Частые вопросы перед медкомиссией ГИБДД</h2>
      <h3>Что означает код GCL в водительском удостоверении?</h3>
      <p>Это международное обозначение медицинского ограничения, обязывающего водителя управлять автомобилем исключительно в очках или контактных линзах, в которых была пройдена медкомиссия.</p>
      <h3>Разрешено ли проходить осмотр в контактных линзах?</h3>
      <p>Да, осмотр в контактных линзах полностью разрешен, однако об их наличии необходимо заранее сообщить офтальмологу, чтобы проверить переносимость коррекции и корректно оформить допуск.</p>
      <h3>Заменяет ли онлайн-тренажер визит к офтальмологу?</h3>
      <p>Нет. Онлайн-проверка служит исключительно для домашней самооценки перед походом к врачу, чтобы вовремя подобрать новые очки и не тратить время на повторную комиссию.</p>
      `,
    }
  },
  {
    slug: "dmv-eye-test-fail-guide",
    englishOnly: true,
    datePublished: "2025-08-10T09:00:00Z",
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "What Happens If You Fail the DMV Eye Test? Retests & Doctor Forms",
    },
    excerpt: {
      en: "Failing the counter vision screening does not suspend your license immediately. Learn state retest rules, official eye doctor forms, and restricted license tiers.",
    },
    content: {
      en: `
<p>Missing rows on the DMV vision screener is frustrating, yet in nearly every state it does <em>not</em> result in immediate license confiscation unless your vision drops dramatically below even restricted driving floors. Instead, failing the counter test pauses card issuance temporarily and activates one of three standard pathways: an immediate clean retest at the counter, a return trip after updating eyeglasses, or a referral packet requiring an eye doctor's signed clearance form.</p>
      <p>You can spot borderline drops weeks before renewal day by testing both eyes individually at home using our <a href="/us/test/">calibrated DMV vision practice screener</a> and inspecting our <a href="/checks/contrast/">contrast sensitivity check</a> if glare bothers you at dusk.</p>

      <h2>Step 1: Immediate Counter Troubleshooting Before Accepting a Referral</h2>
      <p>Desktop optical view boxes exaggerate three temporary vision dips: smeared glasses coatings, eye dryness after sitting in conditioned waiting rooms, and accidental gaze through the bottom reading channel of progressive eyeglasses. Before signing off on a failed screening sheet, politely tell the clerk if your lenses fogged, ask for ten seconds to wipe your frames and blink slowly, and request one immediate re-attempt on a fresh letter column.</p>

      <h2>Step 2: What Happens If You Still Miss Line 5 (20/40)?</h2>
      <p>When your best-corrected counter reading misses the state standard (commonly 20/40, or 20/50 in New Jersey), examiners issue an official <strong>Report of Vision Examination</strong> form. In most states holding an unexpired license, you keep driving on a temporary paper authorization (or your unexpired card until expiration) while booking a clinic exam. Returning with stronger updated eyeglasses either clears a counter rescreen directly or satisfies administrative filing once your optometrist signs off:</p>
      <table>
        <thead>
          <tr><th>State</th><th>Official Vision Specialist Form</th><th>Key Submission Rule or Acuity Trigger</th></tr>
        </thead>
        <tbody>
          <tr><td>California</td><td>Form DL 62 (Report of Vision Examination)</td><td>Issued if worse than 20/40 both eyes or under 20/70 in one eye</td></tr>
          <tr><td>Texas</td><td>Form DL-63 (Examination by Vision Specialist)</td><td>20/50 needs doctor note; 20/60-20/70 limits daylight &amp; 45 mph max</td></tr>
          <tr><td>New York</td><td>MV-619 (&gt;=20/40) or MV-80L (20/40-20/70)</td><td>MV-619 valid 12 mos; MV-80L routes to Medical Review Unit</td></tr>
          <tr><td>Florida</td><td>Form HSMV 72010 (Report of Eye Exam)</td><td>Required if under 20/70 better eye (20/40 required if other &lt;=20/200)</td></tr>
          <tr><td>Ohio &amp; Iowa</td><td>OH BMV 6317 / IA Form 430032</td><td>Must be completed and returned within 30 calendar days</td></tr>
          <tr><td>Indiana &amp; Missouri</td><td>IN Form 22106 / MO Form 999</td><td>Covers medical exemptions or 20/41-20/160 conditional Missouri tiers</td></tr>
          <tr><td>North Carolina</td><td>Form DL77 (Vision Specialist Form)</td><td>Evaluated by NCDMV Medical Review Unit including bioptic pathways</td></tr>
        </tbody>
      </table>
      <p>Check exact cutoff numbers, form codes, and return windows on your own jurisdiction's guide in the <a href="/states/">50-State DMV Vision Directory</a>.</p>

      <h2>Step 3: What Optometrists Evaluate on State Referral Forms</h2>
      <ol>
        <li><strong>Updated refraction:</strong> Often a tiny shift of -0.50 diopters of nearsightedness or corrected cylinder restores clean 20/20 acuity, letting you pass a counter retest with fresh eyeglasses without needing any restricted endorsement.</li>
        <li><strong>Ocular health and stability:</strong> If cataracts, early macular changes, glaucoma, or corneal scarring hold best-corrected acuity near 20/50 to 20/70, the doctor documents prognosis, horizontal field degrees, and whether progressive follow-ups (annual vs two-year reviews) are prudent.</li>
        <li><strong>Restriction recommendations:</strong> Most states ask specialists whether you can drive safely at night or on high-speed divided highways based on contrast sensitivity and glare recovery.</li>
      </ol>

      <h2>Restricted License Tiers vs Mandatory Road Tests</h2>
      <p>Drivers whose best-corrected eyesight remains between <strong>20/50 and 20/70</strong> usually keep legal mobility through targeted operational limits rather than suspension:</p>
      <ul>
        <li><strong>Daylight-only driving:</strong> Restricts operation strictly between sunrise and sunset when uncorrectable twilight blur poses elevated pedestrian risk.</li>
        <li><strong>Speed and corridor caps:</strong> Several states cap speed at 45 mph or bar controlled-access freeways alongside daylight restrictions.</li>
        <li><strong>Left and right outside mirrors:</strong> Standard safety accommodation for single-eye weakness or monocular drivers.</li>
        <li><strong>Specialized road checks:</strong> Simple corrective eyewear updates almost never trigger a driving skills retest. Behind-the-wheel drive tests typically apply only when switching to bioptic telescopic lenses, showing severe uncorrectable drops near 20/70-20/100, or hitting specific senior age evaluations (such as Illinois age 87+).</li>
      </ul>

      <h2>Bioptic Telescopic Driving Exemptions for Uncorrectable Low Vision</h2>
      <p>When standard single-vision spectacles cannot bring acuity better than 20/70, over 40 US states permit restricted licensing using custom miniature telescopes mounted above carrier eyeglasses (bioptic telescopic systems). In states like North Carolina, Ohio, Texas, and Virginia, low-vision specialists evaluate carrier acuity (often >=20/200) and through-the-telescope acuity (>=20/40 or 20/70 daylight), followed by certified behind-the-wheel training and a specialized DMV road test.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Do you lose your driver's license immediately after failing?</h3>
      <p>No, unless both eyes measure drastically worse than even minimal daytime-restricted thresholds (for instance worse than 20/100 or 20/200) or your prior credential is already expired beyond statutory grace windows. In normal renewals taken weeks early, you retain driving privileges under current validity while getting updated eyewear.</p>
      <h3>Can a failing counter score hurt your auto insurance rates?</h3>
      <p>No. A routine administrative deferral for an eye doctor visit is a medical credentialing check, not a traffic infraction, moving violation, or at-fault accident report reported to insurance carriers.</p>
      <h3>Do you have to pay the full renewal fee again for a retest?</h3>
      <p>Usually not. Most state agencies hold your active application open for 30 to 90 days so returning with a signed eye specialist form or new glasses incurs zero extra licensing fee.</p>
      <h3>Can you pass after missing once by going to a private eye doctor first?</h3>
      <p>Yes. Submitting your state's completed eye specialist form (or uploading it via a state portal like NY Online Vision Registry) waives repeat counter box checks in most jurisdictions. In fact, scheduling a quick dilated optometry check every two years keeps your prescription aligned long before renewal notices arrive.</p>
      `,
    }
  },
  {
    slug: "dmv-eye-test-machine",
    englishOnly: true,
    datePublished: "2025-09-05T09:00:00Z",
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "Inside the DMV Eye Test Machine: Optec 1000 Slides, Mirrors & Tips",
    },
    excerpt: {
      en: "Understand how desktop Optec 1000 and Titmus DMV vision screeners simulate 20 feet optically, test peripheral LEDs, and what examiners look for step by step.",
    },
    content: {
      en: `
<p>Walk into almost any modern DMV counter today and instead of squinting across the room at a wall poster, the clerk slides a compact plastic optical instrument toward you. Across the United States, state licensing bureaus rely predominantly on two standardized desktop screeners: the <strong>Stereo Optical Optec 1000 DMV</strong> and the <strong>Titmus V4</strong> series. Understanding how these counter units work inside explains why healthy drivers occasionally misread targets that they can easily spot down an open street.</p>
      <p>Before appointment day, practice distance rows, signal color recognition, and peripheral LED awareness using our <a href="/us/test/">DMV practice screener</a> and <a href="/checks/peripheral/">horizontal visual field check</a>.</p>

      <h2>How an 18-Inch Box Creates an Optical 20-Foot Test Lane</h2>
      <p>Inside the dark shielded drum sit illuminated slide drums viewed through precision collimating lenses and internal mirrors. Because collimating lenses bend incoming light into parallel rays matching infinity focus, your ciliary focusing muscles relax as though looking at a road sign <strong>20 feet (6 meters)</strong> away while standing right at the service desk.</p>
      <p>Just above the twin eyepieces sits a soft rubber brow cushion housing a tiny touch or optical forehead sensor. The internal lamps illuminate only when your forehead rests gently against that sensor, ensuring every applicant stays at the intended eye-relief vertex distance from the ocular lenses.</p>

      <h2>The Five Standard Screening Stages Inside DMV Machines</h2>
      <ol>
        <li><strong>Binocular Snellen Acuity (Both Eyes Open):</strong> The clerk turns on both left and right internal lamps and asks you to read down a vertical target column (commonly Column 3 or Column 5, moving from large 20/100 rows toward 20/40 and 20/20).</li>
        <li><strong>Independent Monocular Checks (Right Eye, Then Left Eye):</strong> Keeping your head still against the sensor pad, the clerk shuts off the left lamp to test the right eye individually on a different randomized column, then reverses the switch for the left eye. Keep both eyes comfortably open in the dark visor so squinting never bends your corneal optics.</li>
        <li><strong>Traffic Signal Color Discs:</strong> A separate dial drum projects colored circles representing standard red, green, and amber highway signals, which proves signal literacy even without Ishihara dot plates. Practice signal distinction cleanly in our <a href="/checks/color/">color vision screening check</a>.</li>
        <li><strong>Temporal Peripheral LED Flashes:</strong> Built into the left and right outer viewport rims sit recessed LED lights at <strong>55°, 70°, and 85°</strong> temporal angles (standard clinical range depending on agency configuration). Looking steadily straight down the center slide, you call out "left" or "right" as brief peripheral blinks fire alongside your temples.</li>
        <li><strong>Depth Perception / Phoria Checks (Specialized Renewals):</strong> Standard passenger drivers rarely receive stereopsis grading at a counter terminal, whereas select commercial or specialist evaluations examine ringed targets for binocular fusion.</li>
      </ol>

      <h2>Why Drivers Stumble Inside Optical Screeners vs Open Charts</h2>
      <table>
        <thead>
          <tr><th>Common Counter Machine Trap</th><th>Why It Happens Optically</th><th>Simple Counter Solution</th></tr>
        </thead>
        <tbody>
          <tr><td>"Instrument myopia" haze</td><td>Enclosed black housing triggers unconscious near over-focusing</td><td>Relax gaze as though looking out a windshield at distant trees</td></tr>
          <tr><td>Progressive lens bottom blur</td><td>Leaning into headrest aims pupils through the reading add zone</td><td>Tilt chin gently up/down to align straight through the top distance pane</td></tr>
          <tr><td>Warm lens fogging</td><td>Sealing eyes too tightly traps moist skin/breath heat on cold frames</td><td>Rest brow lightly on the switch without jamming cheekbones shut</td></tr>
          <tr><td>Missing 85° side flashes</td><td>Thick plastic eyeglass temple arms eclipse outer perimeter LEDs</td><td>Mention frame-arm blockage immediately if an arm sits in front of the rim</td></tr>
        </tbody>
      </table>

      <h2>Five Practical Tips to Clear Counter Machines Smoothly</h2>
      <ul>
        <li><strong>Clean eyewear ten minutes ahead of your turn:</strong> Back-lit slides inside dark optical drums scatter strongly across oily fingerprints or anti-reflective micro-scratches.</li>
        <li><strong>Clear photochromic transitions completely indoors:</strong> Sunglasses and sun-darkened transition lenses drop slide luminance enough to steal one full Snellen line.</li>
        <li><strong>Avoid rushing the first row:</strong> Take two calm breaths and blink slowly after leaning against the forehead pad so tear film spreads evenly across your corneas before reading Column 5.</li>
        <li><strong>Never guess memorized charts:</strong> Desktop drums contain multiple independent monocular columns specifically to prevent memorizing letters from the applicant ahead of you in line.</li>
        <li><strong>Check 20/40 distance acuity beforehand:</strong> Verify clean margin well above 20/40 on our <a href="/checks/distance/">calibrated distance module</a> days before walking in.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Do examiners sanitize the headrest between applicants?</h3>
      <p>Yes, DMV counters use disposable paper brow shields or disinfectant wipes on the forehead cushion, though bringing a small lens cloth to clear smudge marks before leaning in stays helpful.</p>
      <h3>Can height differences make the optical viewer harder to align?</h3>
      <p>Yes. Optec and Titmus pedestals tilt on friction hinges specifically so tall or short applicants can adjust viewing angle. Ask the clerk to angle the housing cleanly rather than craning your neck upward or stooping into a progressive lower corridor.</p>
      <h3>What if one internal bulb looks dimmer than the other eye?</h3>
      <p>If an eyepiece appears noticeably dim or unlit when your forehead touches the sensor, tell the clerk immediately; minor brow-switch slip or aging lamps happen occasionally on busy counters and you should never be penalized for dim lighting. Most optical units run independent low-voltage bulbs for right and left lanes so alerting the clerk lets them re-seat the housing switch or move you to an adjacent terminal.</p>
      `,
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
        <p>California (Vehicle Code section 12804.9) reads 20/40 with both eyes together, plus 20/40 in one eye and at least 20/70 in the other. Miss it and you get 60 days on a temporary licence to return form DL-62 from an eye doctor. Fall short on the left eye and you may face a supplemental drive test with a freeway stretch. <a href="https://www.dmv.ca.gov/portal/driver-education-and-safety/medical-conditions-and-driving/vision-conditions/">CA DMV vision conditions</a>. See the full <a href="/states/california/">California vision requirements</a>.</p>

        <h2>Texas: tiers, and the 45 mph surprise</h2>
        <p>Texas measures in bands. 20/40 passes clean. 20/50 passes with a specialist note. 20/60 to 20/70 with a note means a daylight-only licence capped at 45 mph. Worse than 20/70 fails until corrected. The eye-doctor paper is form DL-63, and note the agency is the DPS, not a DMV. <a href="https://www.dps.texas.gov/section/driver-license">Texas DPS driver licence</a>. See the full <a href="/states/texas/">Texas vision requirements</a>.</p>

        <h2>Florida: the one-eye rule</h2>
        <p>Florida asks 20/70 in either eye or both together where vision cannot be improved, with a 130-degree field. The trap is monocularity: if one eye is 20/200 or worse, the other must reach 20/40. The doctor form is HSMV-72010. <a href="https://www.flhsmv.gov/driver-licenses-id-cards/medical-review/vision-standards/">FLHSMV vision standards</a>. See the full <a href="/states/florida/">Florida vision requirements</a>.</p>

        <h2>New York: two forms, do not mix them up</h2>
        <p>New York passes 20/40 in either or both eyes. Form MV-619 certifies a pass and is good for 12 months. Form MV-80L is for results between 20/40 and 20/70 or telescopic lenses, and it goes to the Medical Review Unit, not the counter. Bringing the wrong form to the office is the classic avoidable rejection. New York also runs an <a href="https://dmv.ny.gov/driver-license/online-vision-registry">Online Vision Registry</a> so approved providers can file results directly. <a href="https://dmv.ny.gov/driver-license/vision-requirements-and-restrictions">NY vision requirements</a>. See the full <a href="/states/new-york/">New York vision requirements</a>.</p>

        <h2>North Carolina: one good eye, and teens take note</h2>
        <p>North Carolina passes 20/40 or better in at least one eye for an unrestricted licence. The practical failure point is driver education: students who forget their glasses on screening day fail and cannot start behind-the-wheel training until they pass. Remote renewals use a self-attestation of no vision change. See the full <a href="/states/north-carolina/">North Carolina vision requirements</a>.</p>

        <h2>What to bring in any state</h2>
        <p>Glasses or contacts, your current prescription, photo ID, and any failed-test form already signed by your eye doctor. Confirm the current rule with your own agency before you go, since standards change. Then <a href="/test/">practise the screening at home</a> so the counter holds no surprises. This guide is practice information only. It is not medical advice, and state summaries can go out of date. Our <a href="/about/">about page</a> states the limits plainly.</p>
      `
    }
  },
  {
    slug: "6-6-vision-test-online",
    englishOnly: false,
    datePublished: "2025-07-05T14:00:00Z",
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "6/6 Vision Test Online: What It Means, 20/20 & LogMAR Conversion Table",
      es: "Prueba de Visión 6/6 Online: Qué Significa y Equivalencia con 20/20",
      de: "6/6 Sehtest (Visus 1,0) Online: Umrechnung zu 20/20, LogMAR & Tabelle",
      fr: "Test de Vue 6/6 et 10/10 en Ligne : Équivalence 20/20 et Échelle LogMAR",
      pt: "Teste de Visão 6/6 Online: O Que Significa e Tabela Comparativa 20/20",
      it: "Test Vista 6/6 Online: Significato, 10/10 in Decimi e Tabella 20/20",
      ru: "Тест зрения 6/6 онлайн: что означает, таблица перевода в 20/20 и 1,0",
    },
    excerpt: {
      en: "Understand 6/6 metric acuity, compare 6/6 vs 20/20, decimal and LogMAR scores with exact millimeter letter heights at 3m and 6m, and run a calibrated screen check.",
      es: "Descubre qué significa ver 6/6 en metros, compara las escalas 6/6, 20/20, decimal y LogMAR con alturas en milímetros a 3 m y 6 m.",
      de: "Was bedeutet Visus 6/6 im metrischen System? Vollständige Umrechnungstabelle zu 20/20, Dezimalvisus, LogMAR und exakten Buchstabengrößen bei 3 m.",
      fr: "Comprenez l'acuité métrique 6/6, ses correspondances en dixièmes (10/10), 20/20 et LogMAR avec hauteurs millimétriques à 3 m et 6 m.",
      pt: "Entenda o padrão métrico 6/6, compare com 20/20, escala decimal e LogMAR, veja medidas em milímetros a 3 metros e faça o teste calibrado.",
      it: "Scopri cosa significa acutezza visiva 6/6 in metri, il confronto con 10/10, 20/20 e LogMAR e le altezze ottotipiche calibrate a 3 metri.",
      ru: "Узнайте, что означает острота зрения 6/6 в метрах, сравните с 1,0 по Сивцеву, 20/20 и LogMAR с точными размерами букв на 3 и 6 метров.",
    },
    content: {
      en: `
<p>Hearing that you have <strong>6/6 vision</strong> often puzzles patients accustomed to hearing <strong>20/20</strong> on American charts, or vice versa. Both fractions describe identical visual performance measured in different length units: 6/6 expresses testing at <strong>6 meters</strong> (the standard across the UK, Australia, Canada, India, and New Zealand), while 20/20 expresses testing at <strong>20 feet</strong> in the United States. Neither figure represents "perfect human eyesight" as a biological ceiling; instead, both define a clinical baseline resolution of <strong>1 arcminute per stroke</strong>.</p>
      <p>Measure your current acuity accurately using our <a href="/test/">card-calibrated online eye test</a>, which locks optotype size to physical millimeters at your selected 3-meter or closer screening distance.</p>

      <h2>The Optical Geometry Behind 6/6, 20/20, and 1 Arcminute</h2>
      <p>Hermann Snellen standardized optotype design in 1862 around angular subtense rather than fixed millimeter paper sizes. Every standard letter or Tumbling E sits inside a 5x5 grid whose total height subtends <strong>5 minutes of arc (1/12 of a degree)</strong> at the designated viewing distance, so each bar and gap equals <strong>1 arcminute</strong>.</p>
      <p>At a 6-meter test lane, exact trigonometry gives a total optotype height of <code>2 * 6000 * tan(2.5 arcminutes) = 8.73 mm</code> (stroke width 1.75 mm). When an optometrist folds a 3-meter exam room in half with a front-surface mirror to create a 6-meter optical path, light travels 6 meters total while you sit comfortably in a compact office. When our digital <a href="/checks/distance/">distance Snellen module</a> scales letters for a <strong>3-meter (10 ft)</strong> living room test, every letter halves proportionally to <strong>4.36 mm</strong> while keeping the exact same 5-arcminute angular demand on your retina.</p>

      <h2>Complete Acuity Conversion Table: 6/6, 20/20, Decimal, LogMAR &amp; Letter Height</h2>
      <table>
        <thead>
          <tr><th>Metric (6m)</th><th>Imperial (20ft)</th><th>Decimal (EU / Asia)</th><th>LogMAR</th><th>Letter Height @ 3m</th><th>Practical Meaning</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>2.00</td><td>-0.30</td><td>2.18 mm</td><td>Twice standard resolution (rare in young unaided eyes)</td></tr>
          <tr><td>6/4.5</td><td>20/15</td><td>1.33</td><td>-0.12</td><td>3.27 mm</td><td>Sharper than normal clinical baseline</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>1.00</strong></td><td><strong>0.00</strong></td><td><strong>4.36 mm</strong></td><td>Standard healthy reference baseline</td></tr>
          <tr><td>6/7.5</td><td>20/25</td><td>0.80</td><td>+0.10</td><td>5.45 mm</td><td>Mild blur; passes civilian driving effortlessly</td></tr>
          <tr><td>6/9</td><td>20/30</td><td>0.67</td><td>+0.18</td><td>6.54 mm</td><td>Clears standard 0.7 German FeV cutoff near borderline</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>0.50</strong></td><td><strong>+0.30</strong></td><td><strong>8.73 mm</strong></td><td>Minimum driving standard in most US states &amp; UK 20m plate read</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>0.40</td><td>+0.40</td><td>10.91 mm</td><td>New Jersey standard; daylight limits in stricter states</td></tr>
          <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>+0.48</td><td>13.09 mm</td><td>Georgia pass baseline; noticeable distance blur</td></tr>
          <tr><td>6/21</td><td>20/70</td><td>0.29</td><td>+0.54</td><td>15.27 mm</td><td>Common restricted/daylight threshold if uncorrectable</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>0.20</td><td>+0.70</td><td>21.82 mm</td><td>Significant refractive error or clinical eye review needed</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>0.10</td><td>+1.00</td><td>43.63 mm</td><td>Best-corrected statutory threshold for legal blindness in US/UK</td></tr>
        </tbody>
      </table>

      <h2>How LogMAR Charts Improve on Traditional Snellen Scoring</h2>
      <p>Notice in the table above how traditional Snellen lines jump unevenly: stepping from 6/6 to 6/9 increases size by 50%, whereas stepping from 6/18 to 6/21 increases size by only 17%. Clinical research and ETDRS trials solve that inconsistency with <strong>LogMAR (Logarithm of the Minimum Angle of Resolution)</strong>, where each line multiplies letter height by a constant geometric factor of <code>10^0.1</code> (roughly 1.2589x) and places exactly five equal-difficulty letters on every row. Lower LogMAR scores mean sharper eyesight: 0.00 equals 6/6, negative values like -0.10 denote above-average resolution, and +0.30 corresponds directly to 6/12 or 20/40.</p>

      <h2>Why Card Calibration Matters Before Running a 6/6 Screen Test</h2>
      <p>Browser pixels do not have a fixed physical width. A 14-inch laptop running at 150% display scaling, a 27-inch desktop monitor, and an external 4K display all render a "24px font" at completely different millimeter heights. Without physical calibration against a <strong>85.60 mm credit card or ID card</strong>, an uncalibrated webpage can make 6/9 look as large as 6/15 and give false confidence before an eye exam. Always calibrate once per device, then test at 3 meters with each eye individually using clean lenses.</p>

      <h2>Can You Have Better Than 6/6 Vision?</h2>
      <p>Yes. Many young healthy eyes and precisely corrected spectacle wearers comfortably read the <strong>6/4.5 (20/15)</strong> or even <strong>6/3 (20/10)</strong> line in bright examination lighting. Conversely, reading 6/6 without glasses still does not rule out latent hyperopia (farsightedness that strains focusing muscles up close), mild astigmatism, or near focusing presbyopia. Follow distance acuity with our <a href="/checks/astigmatism/">astigmatism dial check</a> and <a href="/checks/near/">near vision test</a> for a fuller picture.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Is 6/6 vision the same as 20/20?</h3>
      <p>Yes. Both mean you resolve at 6 meters (or 20 feet) what a standard observer with 1-arcminute minimum resolution resolves at the exact same distance, equivalent to 1.0 decimal or 0.0 LogMAR.</p>
      <h3>What does 6/12 vision mean?</h3>
      <p>The numerator (6) is your testing distance in meters; the denominator (12) is the distance at which a standard eye could read that same letter size. 6/12 equals 20/40 or 0.50 decimal acuity.</p>
      <h3>What is considered poor eyesight on the 6/6 scale?</h3>
      <p>Correctable acuity below 6/12 affects daytime driving safety in most jurisdictions, while best-corrected visual acuity of 6/60 (20/200) or worse in the better eye qualifies clinically as severe vision loss or legal blindness.</p>
      `,
      es: `
<p>En consultas oftalmológicas internacionales es frecuente escuchar el resultado <strong>6/6</strong>, mientras que en América se utiliza <strong>20/20</strong> y en España o Europa continental predomina la escala decimal de <strong>1,0 (o 10/10)</strong>. Aunque cambien las cifras, las tres notaciones expresan exactamente el mismo rendimiento óptico: la capacidad de distinguir detalles separados por <strong>1 minuto de arco</strong> a la distancia clínica estándar.</p>
      <p>Comprueba tu agudeza actual de forma fiable con nuestro <a href="/es/test/">test de visión calibrado con tarjeta bancaria</a>, que ajusta el tamaño exacto en milímetros para evaluar tu vista a 3 metros o a distancia corta.</p>

      <h2>Geometría Óptica Detrás de 6/6, 20/20 y 1 Minuto de Arco</h2>
      <p>El oftalmólogo neerlandés Hermann Snellen definió en 1862 la carta optométrica universal partiendo del ángulo visual en lugar de tamaños fijos impresos. Cada letra estándar encaja en una cuadrícula de 5x5 módulos cuyo alto total subtiende <strong>5 minutos de arco</strong> a la distancia de referencia, de modo que cada trazo o espacio blanco mide <strong>1 minuto de arco</strong>.</p>
      <p>En la escala métrica de 6 metros (utilizada en Reino Unido, Australia o Canadá), la altura exacta de la letra 6/6 es de <strong>8,73 mm</strong> (\`2 * 6000 * tan(2,5')\`). En la mayoría de gabinetes actuales o mediante nuestro <a href="/checks/distance/">módulo de agudeza a distancia</a> a <strong>3 metros</strong>, el tamaño se reduce exactamente a la mitad (<strong>4,36 mm</strong>), manteniendo idéntica exigencia angular sobre la fóvea retiniana.</p>

      <h2>Tabla Completa de Equivalencias: 6/6, 20/20, Decimal y LogMAR</h2>
      <table>
        <thead>
          <tr><th>Escala 6 m</th><th>Escala 20 pies</th><th>Decimal (ES / EU)</th><th>LogMAR</th><th>Altura a 3 m</th><th>Interpretación Práctica</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>2,00</td><td>-0,30</td><td>2,18 mm</td><td>Agudeza superior al promedio (frecuente en ojos jóvenes sanos)</td></tr>
          <tr><td>6/4,5</td><td>20/15</td><td>1,33</td><td>-0,12</td><td>3,27 mm</td><td>Nitidez por encima de la línea clínica estándar</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>1,00</strong></td><td><strong>0,00</strong></td><td><strong>4,36 mm</strong></td><td>Referencia clínica normal (100% estándar)</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>0,80</td><td>+0,10</td><td>5,45 mm</td><td>Leve desenfoque; supera con margen permisos profesionales</td></tr>
          <tr><td>6/9</td><td>20/30</td><td>0,67</td><td>+0,18</td><td>6,54 mm</td><td>Desenfoque moderado leve perceptible en señales lejanas</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>0,50</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 mm</strong></td><td>Mínimo legal para permiso B en España DGT y DMV EE. UU.</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>0,40</td><td>+0,40</td><td>10,91 mm</td><td>Requiere nueva graduación óptica para conducir con seguridad</td></tr>
          <tr><td>6/20</td><td>20/63</td><td>0,32</td><td>+0,50</td><td>14,54 mm</td><td>Baja agudeza de lejos; precisa valoración oftalmológica</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>0,20</td><td>+0,70</td><td>21,82 mm</td><td>Límite mínimo en el ojo débil para licencia italiana o revisión</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>0,10</td><td>+1,00</td><td>43,63 mm</td><td>Umbral legal de baja visión severa cuando no mejora con lentes</td></tr>
        </tbody>
      </table>

      <h2>Por Qué LogMAR Corrige las Irregularidades de Snellen</h2>
      <p>Las cartas Snellen tradicionales cambian de tamaño de manera desigual entre filas. Las cartillas clínicas <strong>LogMAR</strong> resuelven este sesgo aplicando un crecimiento geométrico constante de <code>10^0,1</code> (factor 1,2589x por fila) con cinco optotipos por nivel. En esta escala, 0,00 equivale exactamente a 6/6 (1,0 decimal), los valores negativos indican visión más fina que el estándar y +0,30 corresponde directamente a 6/12 (0,5 decimal o 20/40).</p>

      <h2>Cómo Calibrar Correctamente Tu Pantalla para 6/6</h2>
      <p>Cada navegador y portátil cambia el tamaño físico del píxel según la densidad DPI y el escalado del sistema operativo (100%, 125%, 150%). Antes de evaluar una fila 6/6 de apenas 4,36 mm a 3 metros, ajusta siempre el rectángulo de calibración con una tarjeta estándar de 85,60 mm de ancho. Realiza la prueba primero con ambos ojos, luego cubriendo suavemente un ojo por vez sin apretar el párpado, y compleméntala con la <a href="/checks/astigmatism/">comprobación de astigmatismo</a> y el <a href="/checks/near/">test de lectura de cerca</a>.</p>

      <h2>Preguntas Frecuentes</h2>
      <h3>¿6/6 significa tener "100% de vista máxima"?</h3>
      <p>No es un máximo biológico, sino el punto de referencia clínico promedio. Muchas personas jóvenes sin defecto refractivo leen con facilidad la fila 6/4,5 (20/15) o incluso 6/3.</p>
      <h3>¿Qué significa tener visión 6/9 o 6/12?</h3>
      <p>Significa que a 6 metros necesitas un tamaño de letra que un ojo estándar distingue ya desde 9 o 12 metros respectivamente. En escala decimal corresponden a 0,67 y 0,50.</p>
      <h3>¿Ver 6/6 descarta cualquier problema ocular?</h3>
      <p>No. La agudeza central no detecta glaucoma periférico, presbicia incipiente de cerca ni astigmatismos leves compensados mediante esfuerzo muscular continuo.</p>
      `,
      de: `
<p>In englischsprachigen Arztberichten taucht häufig der Wert <strong>6/6</strong> oder <strong>20/20</strong> auf, während deutsche Augenoptiker und Augenärzte fast ausschließlich den <strong>Dezimalvisus 1,0</strong> verwenden. Alle drei Angaben beschreiben exakt dieselbe optische Auflösung: das Erkennen feiner Details unter einem Sehwinkel von <strong>1 Winkelminute</strong>. Der einzige Unterschied liegt in der Maßeinheit der Prüfentfernung: 6 Meter in Europa, Australien und Asien gegenüber 20 Fuß in den Vereinigten Staaten.</p>
      <p>Prüfen Sie Ihre Sehleistung exakt unter normierter Größe mit unserem <a href="/de/test/">kartenkalibrierten Online-Sehtest</a>, bevor Sie einen Sehtest beim Optiker oder eine Führerscheinuntersuchung absolvieren.</p>

      <h2>Geometrie hinter Visus 6/6, 20/20 und Dezimal 1,0</h2>
      <p>Hermann Snellen definierte 1862 das Normzeichen über ein 5x5-Raster: Die gesamte Höhe eines Buchstabens oder Landolt-Rings erscheint aus der Prüfentfernung unter exakt <strong>5 Winkelminuten</strong>, sodass ein einzelner Balken oder die Ringöffnung genau <strong>1 Winkelminute</strong> einnimmt.</p>
      <p>Bei 6 Metern Prüfdistanz beträgt die rechnerische Zeichengröße für Visus 1,0 exakt <code>8,73 mm</code>. Da viele Praxisräume kürzer geschnitten sind, arbeiten unser <a href="/checks/distance/">Fernvisus-Testmodul</a> und moderne Prüfgeräte häufig mit <strong>3 Metern Distanz</strong> oder gefalteten Spiegelsystemen: Bei 3 Metern halbiert sich die Zeichengröße linear auf exakt <strong>4,36 mm</strong>, während der Netzhautwinkel unverändert 5 Winkelminuten beträgt.</p>

      <h2>Umrechnungstabelle: 6/6, 20/20, Dezimalvisus, LogMAR &amp; Größe bei 3 m</h2>
      <table>
        <thead>
          <tr><th>Metrisch (6 m)</th><th>Imperial (20 ft)</th><th>Dezimalvisus (DE)</th><th>LogMAR</th><th>Zeichenhöhe @ 3 m</th><th>Alltags- &amp; FeV-Einordnung</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>2,00</td><td>-0,30</td><td>2,18 mm</td><td>Überdurchschnittliche Auflösung bei jungen gesunden Augen</td></tr>
          <tr><td>6/4,8</td><td>20/16</td><td>1,25</td><td>-0,10</td><td>3,49 mm</td><td>Sehr gute Fernsicht oberhalb des Standardwerts</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>1,00</strong></td><td><strong>0,00</strong></td><td><strong>4,36 mm</strong></td><td>Klinischer Richtwert normaler Tagessehschärfe (100%)</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>0,80</td><td>+0,10</td><td>5,45 mm</td><td>Erfüllt auch LKW-/Bus-Mindestanforderung besseres Auge (FeV)</td></tr>
          <tr><td>6/8,5</td><td>20/28</td><td>0,70</td><td>+0,15</td><td>6,23 mm</td><td>Gesetzliche FeV-Grenze je Auge für Führerschein-Sehtest Klasse B</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>0,50</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 mm</strong></td><td>Augenärztliche Mindestgrenze Klasse B (Nr. 1.2 FeV) &amp; US-DMV</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>0,40</td><td>+0,40</td><td>10,91 mm</td><td>Deutliche Unschärfe; Brillenbestimmung beim Optiker ratsam</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>0,20</td><td>+0,70</td><td>21,82 mm</td><td>Erhebliche Sehminderung ohne Korrektur</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>0,10</td><td>+1,00</td><td>43,63 mm</td><td>Starke Sehbehinderung bei bestkorrigierter Messung</td></tr>
        </tbody>
      </table>

      <h2>Warum LogMAR wissenschaftlich genauer misst als klassische Tafeln</h2>
      <p>Bei klassischen Snellen-Reihen schwanken die Größensprünge stark. Die in Studien genutzte <strong>LogMAR-Skala</strong> wählt stattdessen von Zeile zu Zeile einen einheitlichen Faktor von <code>10^0,1</code> (etwa 1,2589x) mit jeweils fünf Zeichen gleicher Erkennbarkeit. Visus 1,0 entspricht dabei genau <code>0,00 LogMAR</code>, schärfere Augen erzielen negative Werte wie -0,10, und Visus 0,5 entspricht exakt +0,30 LogMAR. Eine ausführlichere Bewertung der Öffnungsrichtungen finden Sie zudem im <a href="/checks/landolt/">Landolt-Ring-Check</a>.</p>

      <h2>Warum Bildschirmkalibrierung vor dem Online-Test unverzichtbar ist</h2>
      <p>Windows-Skalierung (125% oder 150%), macOS Retina-Auflösung und unterschiedliche Monitorgrößen führen dazu, dass dieselbe Pixelzahl auf zwei Laptops völlig verschieden groß erscheint. Da ein 6/6-Zeichen auf 3 Metern exakt 4,36 mm hoch sein muss, kalibrieren Sie Ihren Bildschirm einmalig mit einer 85,60 mm breiten EC- oder Kreditkarte. Prüfen Sie jedes Auge einzeln bei gleichmäßiger Raumbeleuchtung ohne Gegenlicht hinter dem Display und reinigen Sie zuvor Ihre Brillengläser.</p>

      <h2>Kann man besser als 6/6 sehen?</h2>
      <p>Ja. Viele junge gesunde Augen sowie optimal korrigierte Kontaktlinsenträger erreichen im hellen Untersuchungszimmer Werte von <strong>1,25 (6/4,8)</strong> oder sogar <strong>1,6 bis 2,0 (6/3)</strong>. Gleichzeitig schließt ein scharfer Wert von 6/6 in der Ferne weder eine leichte altersbedingte Leseschwäche noch einen versteckten Astigmatismus oder eine beginnende Weitsichtigkeit aus, bei der der Ziliarmuskel kleine Unschärfen anstrengend ausgleicht. Ergänzen Sie die Messung daher stets mit dem <a href="/checks/astigmatism/">Astigmatismus-Check</a> und dem <a href="/checks/near/">Nahvisus-Test</a>.</p>

      <h2>Häufige Fragen zu 6/6 und Visus 1,0</h2>
      <h3>Ist Visus 6/6 dasselbe wie 100% Sehkraft?</h3>
      <p>Umgangssprachlich ja, optisch ist 1,0 (6/6) jedoch ein statistischer Durchschnittswert normaler Sehschärfe und kein biologisches Maximum. Viele Menschen erreichen mit passender Brille 1,25 oder 1,6.</p>
      <h3>Reicht 6/6 für den deutschen Führerschein-Sehtest?</h3>
      <p>Ja, eindeutig. Die Führerscheinstelle verlangt für Klasse B beim Optiker mindestens 0,7 auf jedem Auge einzeln, was deutlich unter 1,0 (6/6) liegt.</p>
      <h3>Warum sehe ich 6/6 scharf, bekomme aber beim Lesen Kopfschmerzen?</h3>
      <p>Leichte Weitsichtigkeit (Hyperopie), Hornhautverkrümmung oder beginnende Alterssichtigkeit lassen sich in der Ferne muskulär ausgleichen, ermüden aber im Nahbereich.</p>
      `,
      fr: `
<p>Sur un compte-rendu médical étranger, l'acuité visuelle apparaît souvent sous la forme <strong>6/6</strong> (système métrique britannique ou australien) ou <strong>20/20</strong> (système impérial nord-américain), tandis qu'en France l'échelle Monoyer exprime le même résultat en <strong>10/10</strong>. Ces trois notations désignent exactement la même finesse optique : la capacité de l'œil à résoudre deux détails séparés par un angle de <strong>1 minute d'arc</strong>.</p>
      <p>Vérifiez votre propre acuité dans des conditions géométriques fiables grâce à notre <a href="/fr/test/">test de vue calibré en ligne</a> avant de consulter un ophtalmologue.</p>

      <h2>Principes Optiques de l'Acuité 6/6, 20/20 et 10/10</h2>
      <p>Conçue par Hermann Snellen en 1862, la règle géométrique impose qu'une lettre de référence soit inscrite dans un carré de 5x5 unités dont la hauteur totale sous-tend <strong>5 minutes d'arc</strong> à la distance prévue, soit <strong>1 minute d'arc par barre ou espace</strong>.</p>
      <p>À 6 mètres, une lettre 6/6 mesure précisément <strong>8,73 mm</strong> de haut. Dans un salon ou un cabinet de <strong>3 mètres</strong> comme dans notre <a href="/checks/distance/">module d'acuité à distance</a>, cette hauteur est exactement divisée par deux (<strong>4,36 mm</strong>), préservant strictement le même angle visuel sur la macula. Les ophtalmologues utilisent d'ailleurs souvent un miroir plan face au patient dans une salle de 3 mètres afin de reconstituer un trajet optique complet de 6 mètres sans fausser l'accommodation.</p>

      <h2>Tableau Complet : 6/6, 20/20, Dixièmes (10/10) et LogMAR</h2>
      <table>
        <thead>
          <tr><th>Métrique (6 m)</th><th>Impérial (20 ft)</th><th>Dixièmes (FR)</th><th>LogMAR</th><th>Hauteur @ 3 m</th><th>Signification Clinique</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>20/10 (2,0)</td><td>-0,30</td><td>2,18 mm</td><td>Résolution très supérieure à la normale de référence</td></tr>
          <tr><td>6/4,8</td><td>20/16</td><td>12,5/10 (1,25)</td><td>-0,10</td><td>3,49 mm</td><td>Vision nette au-delà du seuil clinique 10/10</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>10/10 (1,0)</strong></td><td><strong>0,00</strong></td><td><strong>4,36 mm</strong></td><td>Acuité standard de référence sans perte détectée</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>8/10 (0,8)</td><td>+0,10</td><td>5,45 mm</td><td>Seuil minimal meilleur œil pour permis groupe lourd</td></tr>
          <tr><td>6/9</td><td>20/30</td><td>6,7/10 (0,67)</td><td>+0,18</td><td>6,54 mm</td><td>Légère myopie ou astigmatisme discret de loin</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>5/10 (0,5)</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 mm</strong></td><td>Minimum binoculaire réglementaire permis B en France</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>4/10 (0,4)</td><td>+0,40</td><td>10,91 mm</td><td>Nécessite une mise à jour optique avant conduite nocturne</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>2/10 (0,2)</td><td>+0,70</td><td>21,82 mm</td><td>Baisse d'acuité marquée justifiant un bilan complet</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>1/10 (0,1)</td><td>+1,00</td><td>43,63 mm</td><td>Seuil de malvoyance sévère en l'absence de correction efficace</td></tr>
        </tbody>
      </table>

      <h2>L'Intérêt de l'Échelle LogMAR par Rapport aux Échelles Classiques</h2>
      <p>Les échelles traditionnelles présentent des écarts irréguliers entre lignes : passer de 6/6 à 6/9 augmente la taille de 50%, alors que passer de 6/18 à 6/21 ne l'augmente que de 17%. L'échelle scientifique <strong>LogMAR</strong> applique au contraire une progression géométrique rigoureuse de <code>10^0,1</code> (environ 1,2589x entre chaque ligne) avec cinq caractères d'égale difficulté par rangée. Un score de 0,00 correspond à 6/6 (10/10), un score négatif indique une acuité supérieure à la moyenne, et +0,30 équivaut à 6/12 (5/10).</p>

      <h2>Calibration par Carte Bancaire et Tests Complémentaires</h2>
      <p>Le zoom système de Windows ou l'affichage haute densité Retina faussent la taille physique d'un caractère HTML non calibré. Avant de mesurer la ligne 6/6 (4,36 mm à 3 m), ajustez toujours l'outil à la largeur exacte d'une carte bancaire de 85,60 mm. Vérifiez chaque œil séparément en couvrant l'œil opposé sans appuyer sur la paupière. Même avec 10/10 de loin, un léger astigmatisme ou une presbytie naissante peuvent fatiguer la lecture ; complétez si besoin par le <a href="/checks/astigmatism/">cadran d'astigmatisme</a> et le <a href="/checks/near/">test de vision de près</a>.</p>

      <h2>Questions Fréquentes</h2>
      <h3>Avoir 6/6 ou 10/10 est-il le maximum possible ?</h3>
      <p>Non. 6/6 et 10/10 constituent une norme clinique de référence, mais de nombreux jeunes adultes ou porteurs de lentilles bien adaptées atteignent 12/10 ou 15/10 (6/4).</p>
      <h3>Que veut dire un résultat de 6/12 ?</h3>
      <p>Un observateur à vision standard distingue à 12 mètres ce que vous déchiffrez à 6 mètres. Cela correspond exactement à 5/10 en France ou 20/40 aux États-Unis.</p>
      <h3>Une acuité 6/6 garantit-elle une conduite nocturne sans gêne ?</h3>
      <p>Pas toujours : la sensibilité aux contrastes et l'éblouissement peuvent baisser avant même une perte sur lettres noires sur fond blanc.</p>
      `,
      pt: `
<p>Quem busca informações sobre saúde ocular na internet encontra com frequência os termos <strong>visão 6/6</strong>, <strong>20/20</strong> ou <strong>1,0 (10/10)</strong>. Apesar dos números distintos, todas essas frações representam exatamente a mesma acuidade visual normal: a capacidade de identificar detalhes separados por um ângulo visual de <strong>1 minuto de arco</strong>. A diferença está apenas na unidade adotada para a distância padrão da consulta: <strong>6 metros</strong> no padrão métrico internacional (Reino Unido, Austrália, Índia e Europa) contra <strong>20 pés</strong> nos Estados Unidos.</p>
      <p>Faça uma medição fiel no navegador utilizando nosso <a href="/pt/test/">teste de visão calibrado por cartão</a>, que converte cada letra para a altura milimétrica exata na sua distância de leitura.</p>

      <h2>A Geometria Clínica do Padrão 6/6 e 20/20</h2>
      <p>Em 1862, Hermann Snellen criou a tabela optométrica a partir de ângulos retinianos fixos. Cada letra encaixa-se em uma grade 5x5 cuja altura total ocupa exatamente <strong>5 minutos de arco</strong> à distância padrão, tornando cada traço e espaço igual a <strong>1 minuto de arco</strong>.</p>
      <p>A 6 metros reais, a letra da linha 6/6 mede exatos <strong>8,73 mm</strong> de altura. Como muitos consultórios e salas domésticas têm <strong>3 metros</strong> de comprimento útil, oftalmologistas usam espelhos frontais para dobrar o percurso luminoso até 6 metros ou reduzem os caracteres proporcionalmente. Em nosso <a href="/checks/distance/">módulo calibrado à distância</a> a 3 metros, a linha 6/6 mede exatos <strong>4,36 mm</strong>, mantendo exatamente a mesma exigência óptica sobre a retina.</p>

      <h2>Tabela Comparativa: 6/6, 20/20, Decimal, LogMAR e Altura em 3 m</h2>
      <table>
        <thead>
          <tr><th>Padrão 6 m</th><th>Padrão 20 ft</th><th>Decimal (BR/PT)</th><th>LogMAR</th><th>Altura @ 3 m</th><th>Interpretação Clínica</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>2,00</td><td>-0,30</td><td>2,18 mm</td><td>Acuidade excepcional acima da referência padrão</td></tr>
          <tr><td>6/4,5</td><td>20/15</td><td>1,33</td><td>-0,12</td><td>3,27 mm</td><td>Visão mais nítida que a linha clínica básica</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>1,00</strong></td><td><strong>0,00</strong></td><td><strong>4,36 mm</strong></td><td>Referência saudável padrão de acuidade distante</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>0,80</td><td>+0,10</td><td>5,45 mm</td><td>Leve variação; atende categorias profissionais rigorosas</td></tr>
          <tr><td>6/9</td><td>20/30</td><td>0,67</td><td>+0,18</td><td>6,54 mm</td><td>Desfoque discreto perceptível em placas distantes à noite</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>0,50</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 mm</strong></td><td>Referência mínima comum para CNH categorias A e B</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>0,40</td><td>+0,40</td><td>10,91 mm</td><td>Recomenda-se exame oftalmológico para novos óculos</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>0,20</td><td>+0,70</td><td>21,82 mm</td><td>Redução acentuada da nitidez sem correção óptica</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>0,10</td><td>+1,00</td><td>43,63 mm</td><td>Patamar clínico de baixa visão acentuada quando não corrigível</td></tr>
        </tbody>
      </table>

      <h2>Escala LogMAR vs Tabela de Snellen Convencional</h2>
      <p>Na tabela tradicional de Snellen, a variação percentual entre linhas próximas não é uniforme: passar de 6/6 para 6/9 aumenta a letra em 50%, mas passar de 6/18 para 6/21 altera apenas 17%. Para pesquisas científicas e acompanhamentos precisos, a tabela <strong>LogMAR</strong> utiliza progressão geométrica fixa de <code>10^0,1</code> (cerca de 1,2589x por linha) com cinco letras de dificuldade equivalente em cada nível. Nessa escala, 0,00 corresponde a 6/6 (1,0 decimal), valores negativos revelam visão acima da média e +0,30 equivale a 6/12 (0,5 ou 20/40).</p>

      <h2>Por Que Calibrar o Monitor e Avaliar Além de 6/6</h2>
      <p>Sem calibração física, notebooks Windows com zoom de 125% ou telas Retina alteram completamente a altura das letras na tela. Ajustar o quadro inicial usando um cartão bancário de 85,60 mm assegura que a linha 6/6 meça exatamente 4,36 mm a 3 metros. Além disso, alcançar 6/6 para longe não descarta astigmatismo leve nem dificuldade de foco próximo após os 40 anos; complemente sempre com o <a href="/checks/astigmatism/">teste de astigmatismo</a> e o <a href="/checks/near/">teste de visão para perto</a>.</p>

      <h2>Perguntas Frequentes</h2>
      <h3>Visão 6/6 é sinônimo exato de 20/20?</h3>
      <p>Sim. Ambos significam que você enxerga a 6 metros (ou 20 pés) o mesmo detalhe mínimo definido como padrão de 1 minuto de arco, equivalente a 1,0 na escala decimal do Detran.</p>
      <h3>O que significa ter visão 6/12 ou 0,5?</h3>
      <p>Significa que você precisa estar a 6 metros para distinguir um detalhe que a visão de referência enxerga a 12 metros de distância, exigindo atenção redobrada ou lentes corretivas.</p>
      <h3>Ter visão 6/6 garante que não preciso de óculos para ler?</h3>
      <p>Não. A escala 6/6 mede nitidez para longe; após os 40 anos é comum surgir presbiopia ("vista cansada") para leitura próxima mantendo 6/6 à distância.</p>
      `,
      it: `
<p>Chi consulta referti oculistici anglofoni o guide internazionali incontra spesso l'espressione <strong>vista 6/6</strong> oppure <strong>20/20</strong>, mentre in Italia il visus viene abitualmente espresso in <strong>decimi (10/10)</strong>. Nonostante i numeri diversi, tutte e tre le scale indicano la medesima capacità visiva normale: distinguere dettagli separati da un angolo visivo di <strong>1 primo d'arco</strong> alla distanza di prova stabilita.</p>
      <p>Misura la tua acutezza visiva con precisione geometrica grazie al nostro <a href="/it/test/">test della vista calibrato con tessera</a>, impostato per riprodurre fedelmente l'ottotipo anche a 3 metri in casa.</p>

      <h2>La Geometria Ottica Dietro 6/6, 20/20 e 10/10</h2>
      <p>Nel 1862 Hermann Snellen basò i caratteri ottotipici sull'angolo retinico anziché su dimensioni cartacee arbitrarie: ogni lettera occupa una griglia 5x5 la cui altezza totale sottende <strong>5 primi d'arco</strong> alla distanza di riferimento, lasciando <strong>1 primo d'arco</strong> a ciascun tratto e spazio.</p>
      <p>Alla distanza metrica di 6 metri, la lettera corrispondente ai 10/10 (6/6) misura esattamente <strong>8,73 mm</strong>. Negli studi moderni lunghi 3 metri con specchio riflettente per raddoppiare il percorso ottico o nel nostro <a href="/checks/distance/">modulo per visione da lontano a 3 metri</a>, l'altezza dei caratteri si dimezza esattamente a <strong>4,36 mm</strong>, conservando identico l'impegno angolare sulla macula.</p>

      <h2>Tabella di Conversione Completa: 6/6, 20/20, Decimi e LogMAR</h2>
      <table>
        <thead>
          <tr><th>Scala 6 m</th><th>Scala 20 ft</th><th>Decimi (IT)</th><th>LogMAR</th><th>Altezza @ 3 m</th><th>Significato Pratico</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>20/10 (2,0)</td><td>-0,30</td><td>2,18 mm</td><td>Risoluzione visiva nettamente superiore allo standard</td></tr>
          <tr><td>6/4,5</td><td>20/15</td><td>13/10 (1,33)</td><td>-0,12</td><td>3,27 mm</td><td>Visione nitida oltre la soglia di riferimento clinica</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>10/10 (1,0)</strong></td><td><strong>0,00</strong></td><td><strong>4,36 mm</strong></td><td>Acutezza visiva standard normale da lontano</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>8/10 (0,8)</td><td>+0,10</td><td>5,45 mm</td><td>Ottimo livello, idoneo anche per patenti superiori Gruppo 2</td></tr>
          <tr><td>6/9</td><td>20/30</td><td>7/10 (0,67)</td><td>+0,18</td><td>6,54 mm</td><td>Soglia complessiva minima richiesta per rinnovo patente B</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>5/10 (0,5)</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 mm</strong></td><td>Lieve deficit da lontano, utile controllo ottico</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>4/10 (0,4)</td><td>+0,40</td><td>10,91 mm</td><td>Opportuna verifica di miopia o astigmatismo</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>2/10 (0,2)</td><td>+0,70</td><td>21,82 mm</td><td>Limite minimo nell'occhio peggiore per patente B binoculare</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>1/10 (0,1)</td><td>+1,00</td><td>43,63 mm</td><td>Riduzione visiva severa in assenza di correzione</td></tr>
        </tbody>
      </table>

      <h2>Perché la Scala LogMAR Supera le Tabelle Snellen Classiche</h2>
      <p>Nelle tabelle tradizionali gli incrementi tra righe consecutive non sono uniformi: passare da 6/6 a 6/9 aumenta la lettera del 50%, mentre da 6/18 a 6/21 cambia solo del 17%. La scala clinica <strong>LogMAR</strong> mantiene invece un fattore geometrico costante di <code>10^0,1</code> (circa 1,2589x) fra ogni livello, presentando sempre cinque lettere di uguale leggibilità. Il punteggio 0,00 corrisponde a 6/6 (10/10), i numeri negativi indicano vista più acuta e +0,30 equivale a 6/12 (5/10).</p>

      <h2>Importanza della Calibrazione Fisica e dei Test Complementari</h2>
      <p>Schermi Retina o portatili Windows impostati al 125% o 150% alterano sensibilmente la dimensione in millimetri delle lettere sul browser. Allineando il riquadro iniziale con una tessera fisica da 85,60 mm garantisci che la riga 6/6 misuri esattamente 4,36 mm a 3 metri. Ricorda inoltre che vedere 10/10 da lontano non esclude un lieve astigmatismo compensato o una presbiopia iniziale: controlla sempre ciascun occhio singolarmente e integra con il <a href="/checks/astigmatism/">test per astigmatismo</a> e la <a href="/checks/near/">verifica da vicino</a>.</p>

      <h2>Domande Frequenti</h2>
      <h3>6/6 corrisponde esattamente a 10/10 in Italia?</h3>
      <p>Sì. Entrambi i valori rappresentano una capacità visiva di 1,0 decimale (uguale a 20/20 negli Stati Uniti).</p>
      <h3>È possibile vedere più di 6/6 (più di 10/10)?</h3>
      <p>Sì. Giovani senza difetti refrattivi o portatori di lenti calibrate al decimo possono leggere righe fino a 12/10 o 15/10 (6/4).</p>
      <h3>Che differenza c'è tra avere 6/6 e avere bisogno di occhiali da lettura?</h3>
      <p>La misura 6/6 riguarda esclusivamente la messa a fuoco da lontano; la presbiopia riduce la nitidezza da vicino mantenendo spesso inalterati i 10/10 a distanza.</p>
      `,
      ru: `
<p>В зарубежных медицинских источниках остроту зрения часто обозначают дробью <strong>6/6</strong> или <strong>20/20</strong>, тогда как в России и странах СНГ привычнее десятичная запись <strong>1,0</strong> по таблице Сивцева. Все три записи описывают одинаковый физический предел детализации: способность различать элементы размером <strong>1 угловую минуту</strong>. Отличается лишь единица расстояния: <strong>6 метров</strong> в метрической системе (Великобритания, Австралия, Индия) против <strong>20 футов</strong> в США или <strong>5 метров</strong> в российских поликлиниках.</p>
      <p>Проверьте текущую остроту зрения с геометрической точностью на нашем <a href="/ru/test/">калиброванном онлайн-тесте зрения</a>, настроив масштаб экрана обычной пластиковой картой.</p>

      <h2>Оптическая геометрия стандартов 6/6, 20/20 и 1,0</h2>
      <p>В 1862 году Герман Снеллен привязал размеры тестовых символов к угловой величине: вся буква вписывается в сетку 5x5 и с контрольной дистанции занимает ровно <strong>5 угловых минут</strong>, а толщина каждого штриха и пробела составляет <strong>1 угловую минуту</strong>.</p>
      <p>На расстоянии 6 метров высота знака строки 6/6 равна <strong>8,73 мм</strong> (на дистанции 5 метров по стандарту Сивцева она составляет 7,27 мм, как подробно разобрано в статье <a href="/ru/blog/proverka-zreniya-tablitsa-sivtseva/">Проверка зрения по таблице Сивцева</a>). В небольших кабинетах врачи нередко используют зеркала, чтобы удвоить 3-метровую комнату до 6 метров оптического пути. В <a href="/checks/distance/">модуле дальней проверки на 3 метрах</a> программа пропорционально уменьшает знак до <strong>4,36 мм</strong>, сохраняя идентичную угловую нагрузку на сетчатку глаза.</p>

      <h2>Таблица перевода: 6/6, 20/20, десятичная шкала, LogMAR и высота на 3 м</h2>
      <table>
        <thead>
          <tr><th>Шкала 6 м</th><th>Шкала 20 футов</th><th>Сивцев (RU)</th><th>LogMAR</th><th>Высота @ 3 м</th><th>Практическое значение</th></tr>
        </thead>
        <tbody>
          <tr><td>6/3</td><td>20/10</td><td>2,0</td><td>-0,30</td><td>2,18 мм</td><td>Острота зрения вдвое выше клинического стандарта</td></tr>
          <tr><td>6/4,5</td><td>20/15</td><td>1,33</td><td>-0,12</td><td>3,27 мм</td><td>Высокая четкость выше базовой нормы</td></tr>
          <tr><td><strong>6/6</strong></td><td><strong>20/20</strong></td><td><strong>1,0</strong></td><td><strong>0,00</strong></td><td><strong>4,36 мм</strong></td><td>Международный эталон нормального зрения</td></tr>
          <tr><td>6/7,5</td><td>20/25</td><td>0,8</td><td>+0,10</td><td>5,45 мм</td><td>Норма с запасом для профессиональных водительских прав</td></tr>
          <tr><td>6/10</td><td>20/33</td><td>0,6</td><td>+0,22</td><td>7,27 мм</td><td>Минимальный порог лучшего глаза для категории B в РФ</td></tr>
          <tr><td><strong>6/12</strong></td><td><strong>20/40</strong></td><td><strong>0,5</strong></td><td><strong>+0,30</strong></td><td><strong>8,73 мм</strong></td><td>Базовый водительский стандарт в большинстве штатов США</td></tr>
          <tr><td>6/15</td><td>20/50</td><td>0,4</td><td>+0,40</td><td>10,91 мм</td><td>Заметное снижение четкости вдаль, нужна проверка рефракции</td></tr>
          <tr><td>6/30</td><td>20/100</td><td>0,2</td><td>+0,70</td><td>21,82 мм</td><td>Нижний допуск для худшего глаза при правах категории B</td></tr>
          <tr><td>6/60</td><td>20/200</td><td>0,1</td><td>+1,00</td><td>43,63 мм</td><td>Соответствует первой верхней строке («Ш Б») таблицы Сивцева</td></tr>
        </tbody>
      </table>

      <h2>Чем шкала LogMAR отличается от классических таблиц</h2>
      <p>В традиционных таблицах шаги между строками неравномерны (например, переход с 0,1 до 0,2 увеличивает размер вдвое, а с 0,9 до 1,0 лишь на 10%). В научных таблицах <strong>LogMAR</strong> каждая следующая строка меняется строго с коэффициентом <code>10^0,1</code> (примерно 1,2589x) и содержит ровно по пять знаков равной читаемости. Значение 0,00 соответствует 6/6 (1,0), отрицательные значения говорят о зрении выше стандарта, а +0,30 равно 0,5.</p>

      <h2>Зачем нужна калибровка экрана картой перед проверкой 6/6</h2>
      <p>На ноутбуках с масштабом Windows 125% или 150% и экранах высокого разрешения физический размер пикселя сильно различается. Без калибровки по банковской карте шириной 85,60 мм высота букв на экране искажается, превращая тест 6/9 в легкую строку 6/15. Откалибруйте экран один раз, проверяйте правый и левый глаз отдельно без давления на веко и дополните тест проверками в модулях <a href="/checks/astigmatism/">теста астигматизма</a> и <a href="/checks/near/">зрения вблизи</a>.</p>

      <h2>Можно ли видеть лучше стандарта 6/6?</h2>
      <p>Да. Многие молодые люди без аномалий рефракции и пользователи точно подобранных линз легко различают строки <strong>1,25 (6/4,8)</strong> и даже <strong>1,6 или 2,0 (6/3)</strong> при хорошем освещении. В то же время четкое зрение 6/6 вдаль не исключает скрытую дальнозоркость, легкий астигматизм или возрастные трудности фокусировки на мелком тексте.</p>

      <h2>Частые вопросы о зрении 6/6</h2>
      <h3>Является ли 6/6 абсолютным максимумом человеческого зрения?</h3>
      <p>Нет. Значение 6/6 (1,0 или 20/20) представляет собой клинический ориентир нормы, тогда как многие молодые люди без патологий читают строки 1,25 или 1,5 (6/4).</p>
      <h3>Что означает запись 6/12 или 6/18 в медицинской выписке?</h3>
      <p>Она показывает, что мелкий объект, который человек с нормальным зрением различает с 12 или 18 метров, пациент уверенно видит лишь с 6 метров (0,5 и 0,33 по Сивцеву соответственно).</p>
      <h3>Если зрение вдаль 6/6, может ли требоваться коррекция для чтения?</h3>
      <p>Да. Тест 6/6 оценивает только фокусировку на дальнюю дистанцию, тогда как возрастная пресбиопия после 40 лет ухудшает четкость текста вблизи на расстоянии 35-40 см.</p>
      `,
    }
  },
  {
    slug: "can-you-wear-glasses-for-dmv-eye-test",
    englishOnly: true,
    datePublished: "2026-01-15T09:00:00Z",
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "Can You Wear Glasses for DMV Eye Test? (Code B, Contacts & Rules)",
    },
    excerpt: {
      en: "Yes, prescription glasses and contact lenses are permitted at every US DMV counter. Learn how Code B restrictions work, why reading glasses fail, and how to handle progressives.",
    },
    content: {
      en: `
<p>Yes, you can wear prescription eyeglasses or contact lenses during the DMV vision screening in all 50 US states and the District of Columbia. Roughly half of licensed passenger-vehicle drivers rely on distance eyewear to clear counter screening. What matters to the examiner is whether your corrected acuity satisfies the state driving safety floor (usually 20/40) with your everyday distance eyewear in place, not whether your bare eyes pass unassisted.</p>
      <p>Before heading to your field office, test both with and without eyewear on our <a href="/us/test/">calibrated DMV eye test practice tool</a> so you already know whether you need updated lenses or whether a restriction code will remain on your license.</p>

      <h2>Glasses vs Contact Lenses vs Reading Glasses: Complete Rules</h2>
      <table>
        <thead>
          <tr><th>Eyewear Type</th><th>Permitted at Counter?</th><th>Triggers License Code?</th><th>Key Practical Counter Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Distance prescription glasses</td><td>Yes</td><td>Yes (if needed to pass)</td><td>Attempt unaided first only if seeking restriction removal</td></tr>
          <tr><td>Soft or rigid contact lenses</td><td>Yes</td><td>Yes (Code B / A)</td><td>Mention contacts upfront; carry solution in case of dryness</td></tr>
          <tr><td>Bifocal or progressive lenses</td><td>Yes</td><td>Yes</td><td>Keep chin level inside stereo-viewer; never use bottom zone</td></tr>
          <tr><td>Over-the-counter reading glasses</td><td>No (fails distance test)</td><td>Cannot pass distance target</td><td>Built for 14-16 inch print; blurs the optically 20-foot chart</td></tr>
          <tr><td>Monovision contact setups</td><td>Depends on each-eye rule</td><td>Specialist form possible</td><td>Distance eye passes easily; reading eye may trigger mirror note</td></tr>
          <tr><td>Bioptic telescopic spectacles</td><td>Select states only</td><td>Daylight / specialist form</td><td>NC, OH, VA, PA and others enforce dedicated training rules</td></tr>
        </tbody>
      </table>

      <h2>How Code B (and Code A) Corrective Lens Restrictions Work</h2>
      <p>Every jurisdiction prints an endorsement or restriction code on your license whenever glasses or contact lenses are needed to reach its unrestricted threshold (20/40 in most states, 20/50 in New Jersey, 20/60 in Georgia). Most states designate this <strong>Code B ("Corrective Lenses")</strong>, while several states denote the exact same condition as <strong>Code A</strong> or Restriction 1.</p>
      <p>Operating a vehicle without corrective lenses while holding an active Code B restriction counts as a license-violation citation during traffic stops and can create avoidable liability headaches during insurance claims. Modern statutes generally treat eyeglasses and contact lenses interchangeably under a single corrective-lens code, meaning you do not return to the DMV merely for switching from glasses to soft daily contacts unless a medical specialist expressly restricts you to spectacles only.</p>

      <h2>Monovision Contacts and Blended Prescriptions</h2>
      <p>Drivers fitted with <strong>monovision contact lenses</strong> (one eye corrected sharply for highway distance and the non-dominant eye set for close dashboard or phone reading) should pay close attention before testing. In states that pass you on binocular vision alone (both eyes open together), the sharper distance eye usually carries both eyes smoothly across the 20/40 row. However, states checking each eye independently may flag the near-corrected eye on monocular columns. If that happens, keep a simple single-vision pair of distance glasses in your bag specifically for driving in heavy rain, night highways, or license screening day.</p>

      <h2>Removing a Restriction After LASIK, PRK, or Cataract Surgery</h2>
      <p>If laser surgery or cataract intraocular lens implantation restored your distance sight to 20/40 or sharper without glasses, leave your old frames in your pocket <em>before</em> leaning into the counter machine. Explicitly ask the clerk to record an unaided screening so Code B can be dropped at renewal. If your state asks for medical documentation verifying permanent removal, bring an updated Vision Specialist Report (such as New York Form MV-619 or California Form DL 62) signed by your surgeon or optometrist.</p>

      <h2>Progressive Lenses and Bifocals Inside the Desktop Viewer</h2>
      <p>Many unnecessary misses happen when progressive-lens wearers lean forward onto a counter Optec or Titmus forehead pad. Because the machine slopes downward slightly relative to standing eye height, gazing straight ahead drops your pupils through the lower intermediate or reading corridor of progressive glass, smearing letters optically projected at 20 feet. Keep your spine tall, tuck or lift your chin lightly as needed, and verify that targets look crisp through the very top distance window before reading aloud.</p>

      <h2>Pre-Appointment Eyewear Checklist</h2>
      <ol>
        <li>Screen yourself wearing your driving glasses against <a href="/checks/distance/">calibrated 20/40 rows at 3 meters</a> under steady indoor lighting.</li>
        <li>Clean both surfaces of every lens using lens spray and a fresh microfiber cloth; skin oils and hairspray scatter backlight inside hooded counter machines.</li>
        <li>Take transition photochromic glasses off for a few minutes outdoors-to-indoors so dark tint fades fully clear before you press into the eyepiece.</li>
        <li>Review your state's exact acuity cutoff, peripheral requirements, and medical form number in the <a href="/states/">50-State DMV Vision Directory</a>.</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
      <h3>Will the examiner force me to take my glasses off first?</h3>
      <p>During first-time licensing or when transferring from out of state without an existing restriction, clerks routinely ask you to read unaided first and then put glasses on only if needed. For routine renewals that already list Code B, examiners usually let you step up wearing your eyewear immediately unless you ask to remove the code.</p>
      <h3>Can I wear tinted glasses or blue-light filters at the DMV test?</h3>
      <p>Standard clear anti-reflective coatings and ultra-mild indoor blue-light filters are fine, whereas dark sunglasses or photochromic lenses still tinted dark from bright parking-lot sunlight drop contrast inside the box and must clear completely or be removed if prescription tinted.</p>
      <h3>Do out-of-state transfers keep my Code B restriction automatically?</h3>
      <p>Every state conducts a fresh initial transfer vision screening regardless of what code appeared on your prior card. If you pass unaided on transfer day, the new state issues an unrestricted card cleanly.</p>
      `,
    }
  },
  {
    slug: "snellen-chart-explained",
    englishOnly: true,
    datePublished: "2026-02-20T09:00:00Z",
    dateModified: "2026-11-17T12:00:00Z",
    title: {
      en: "Snellen Eye Chart Explained: 20/20, 20/40 Line 5 & 5-Arcminute Math",
    },
    excerpt: {
      en: "Learn the 1862 Snellen formula behind every eye chart line, why 20/40 sits on Line 5, millimeter letter sizes at 10ft vs 20ft, and how Sloan letters compare to LogMAR.",
    },
    content: {
      en: `
<p>Almost everyone recognizes the tapering pyramid of block capital letters hanging across optometry offices, crowned by a giant "E" at the top and narrowing toward tiny print near the bottom. Yet few drivers know that Hermann Snellen engineered the chart in 1862 using strict angular trigonometry rather than arbitrary font points, turning simple printed letters into an exact measurement of retinal resolution.</p>
      <p>See live scaled optotype rows directly on our <a href="/eye-test-chart/">interactive Online Eye Test Chart</a> or test yourself with calibrated targets in our <a href="/checks/distance/">distance Snellen module</a>.</p>

      <h2>The 5-Arcminute Formula Behind Every Snellen Optotype</h2>
      <p>Snellen designed every optotype character inside a rigid <strong>5-by-5 square grid</strong>. At the chart's calibrated viewing distance (20 feet in US offices or 6 meters in metric lanes), a normal reference <strong>20/20 (6/6)</strong> letter subtends a total vertical angle of exactly <strong>5 minutes of arc</strong> (1/12th of a single degree). Because the stroke width and the empty whitespace gaps inside an "E" each occupy one-fifth of that grid, every critical detail spans exactly <strong>1 minute of arc</strong>.</p>
      <p>Always read any Snellen score as <code>Testing Distance / Standard Comparison Distance</code>:</p>
      <ul>
        <li><strong>20/20 (6/6 metric or 1.00 decimal):</strong> You resolve at 20 feet what a healthy reference observer resolves at 20 feet (1 arcminute critical gap).</li>
        <li><strong>20/40 (6/12 metric or 0.50 decimal):</strong> At 20 feet, you need characters twice as tall (<strong>10 arcminutes</strong> overall), which a normal eye could already decipher cleanly from 40 feet back.</li>
        <li><strong>20/15 (6/4.5 metric or 1.33 decimal):</strong> Sharper than average; you resolve at 20 feet smaller letters that require a standard eye to step closer to 15 feet.</li>
        <li><strong>20/200 (6/60 metric or 0.10 decimal):</strong> The top orientation letter spanning 50 arcminutes at 20 feet, ten times taller than the 20/20 row.</li>
      </ul>

      <h2>Line-by-Line Snellen Chart Sizes (20ft Office vs 10ft Room)</h2>
      <p>Using the exact formula <code>Height = 2 * Distance * tan(2.5 arcminutes) * (Denominator / 20)</code>, letter size scales linearly with testing distance so a 10-foot (3-meter) living-room chart enforces the exact same angular challenge as a 20-foot hallway poster:</p>
      <table>
        <thead>
          <tr><th>Standard Row</th><th>Imperial (20ft)</th><th>Metric (6m)</th><th>Decimal</th><th>Letter Height @ 20ft</th><th>Letter Height @ 10ft (3m)</th></tr>
        </thead>
        <tbody>
          <tr><td>Row 1</td><td>20/200</td><td>6/60</td><td>0.10</td><td>88.7 mm (87.3mm @ 6m)</td><td>43.6 mm</td></tr>
          <tr><td>Row 2</td><td>20/100</td><td>6/30</td><td>0.20</td><td>44.3 mm</td><td>21.8 mm</td></tr>
          <tr><td>Row 3</td><td>20/70</td><td>6/21</td><td>0.29</td><td>31.0 mm</td><td>15.3 mm</td></tr>
          <tr><td>Row 4</td><td>20/50</td><td>6/15</td><td>0.40</td><td>22.2 mm</td><td>10.9 mm</td></tr>
          <tr><td><strong>Row 5 (DMV)</strong></td><td><strong>20/40</strong></td><td><strong>6/12</strong></td><td><strong>0.50</strong></td><td><strong>17.7 mm</strong></td><td><strong>8.73 mm</strong></td></tr>
          <tr><td>Row 6</td><td>20/30</td><td>6/9</td><td>0.67</td><td>13.3 mm</td><td>6.54 mm</td></tr>
          <tr><td>Row 7</td><td>20/25</td><td>6/7.5</td><td>0.80</td><td>11.1 mm</td><td>5.45 mm</td></tr>
          <tr><td><strong>Row 8 (Ref)</strong></td><td><strong>20/20</strong></td><td><strong>6/6</strong></td><td><strong>1.00</strong></td><td><strong>8.87 mm</strong></td><td><strong>4.36 mm</strong></td></tr>
        </tbody>
      </table>

      <h2>Why Row 5 (20/40) Is the Legal Licensing Cutoff</h2>
      <p>On classic wall charts carrying 8 to 11 tapering lines, <strong>Line 5 corresponds directly to 20/40 acuity</strong> (though specialized clinic posters occasionally add intermediate steps like 20/80 or 20/60, so always check the printed margin fraction instead of assuming row count alone). Traffic safety regulators standardized 20/40 (0.50 decimal) as the legal baseline because highway sign glyphs are engineered with wide enough stroke height to give 20/40 drivers adequate reaction time before braking thresholds at 65 mph.</p>

      <h2>Snellen Serifs vs Sloan Letters vs Tumbling E vs ETDRS / LogMAR</h2>
      <ul>
        <li><strong>Original Snellen Serif:</strong> 19th-century decorative end strokes slightly distorted relative difficulty across letters ("L" remained noticeably easier to identify than "B" or "E").</li>
        <li><strong>Sloan Sans-Serif Set (1959):</strong> Louise Sloan eliminated serifs and narrowed modern American clinical wall charts to ten balanced letters (<code>C, D, E, F, L, N, O, P, T, Z</code>) designed for uniform legibility.</li>
        <li><strong>Directional Symbols (<a href="/checks/tumbling/">Tumbling E</a> &amp; <a href="/checks/landolt/">Landolt C</a>):</strong> Remove alphabet familiarity bias completely for international driver testing, pediatric checks, and German FeV optician machines.</li>
        <li><strong>ETDRS / LogMAR Charts:</strong> Research clinics replace uneven Snellen step sizes with constant geometric scaling of <code>10^0.1</code> (roughly 1.2589x per row) and exactly five letters on every line, preventing crowding bias on large rows. Compare full metric and LogMAR rows in our <a href="/blog/6-6-vision-test-online/">6/6 &amp; LogMAR guide</a>.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>How many letters on a Snellen line can you miss and still pass?</h3>
      <p>Most clinical and licensing examiners credit a row if you identify more than half of its characters correctly (for instance, at least 3 out of 5 or 4 out of 6 optotypes). Missing one character out of five is recorded as <code>20/40 -1</code>.</p>
      <h3>Why do some office wall charts start with 20/200 while others show 20/400?</h3>
      <p>Extended low-vision charts include 20/400 and 20/300 top targets so practitioners can track profound refractive errors or macular disease down to half the standard baseline without shifting testing chair distances.</p>
      <h3>Why do eye rooms use a wall mirror instead of a 20-foot corridor?</h3>
      <p>Mounting the illuminated letter box over your chair facing a flat mirror 10 feet ahead folds the light path cleanly to 20 optical feet, giving full distance focus relaxation in compact medical exam rooms without accommodation squeeze.</p>
      <h3>Can lighting contrast change what Snellen row I read?</h3>
      <p>Yes. Back-lit charts boost contrast sensitivity compared with dim cardboard wall posters, while overhead window glare directly behind an unshielded chart lowers score clarity by half a line to a full line.</p>
      `,
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
  {
    slug: "cdl-dot-eye-exam-requirements",
    englishOnly: true,
    datePublished: "2026-11-17T10:00:00Z",
    dateModified: "2026-11-17T10:00:00Z",
    title: {
      en: "CDL & DOT Eye Exam Requirements: 49 CFR § 391.41, Chart & MCSA-5871",
    },
    excerpt: {
      en: "Complete guide to interstate DOT commercial driver vision standards: 20/40 in each eye, 70° peripheral field, traffic signal colors, Form MCSA-5875, and 49 CFR § 391.44.",
    },
    content: {
      en: `
<p>Commercial drivers face significantly stricter eye examination standards than passenger Class C motorists. Under Federal Motor Carrier Safety Administration regulations in <strong>49 CFR § 391.41(b)(10)</strong>, missing a single line in your weaker eye during a Department of Transportation (DOT) physical can hold up your Medical Examiner's Certificate (MEC) even when both eyes open together read cleanly.</p>
      <p>Before walking into an NRCME-certified occupational clinic, screen both eyes independently and check your 70-degree side vision and red-green-amber differentiation in our <a href="/checks/cdl/">dedicated CDL vision compliance simulator</a> alongside <a href="/checks/distance/">calibrated distance rows</a>.</p>

      <h2>The Three Core DOT Vision Standards (49 CFR § 391.41(b)(10))</h2>
      <p>Every interstate commercial driver operating under FMCSA rules (Class A, B, or C vehicles over 10,001 lbs GVWR, hazmat placards, or 16+ passengers) must pass all three components with or without corrective eyewear:</p>
      <table>
        <thead>
          <tr><th>DOT Requirement</th><th>Federal Threshold (§ 391.41)</th><th>Key Difference From State Passenger DMV</th></tr>
        </thead>
        <tbody>
          <tr><td>Distant Visual Acuity</td><td>At least <strong>20/40</strong> in RIGHT eye, LEFT eye, AND both eyes together</td><td>Most state passenger licenses require 20/40 only in better eye or binocularly</td></tr>
          <tr><td>Horizontal Field of Vision</td><td>Minimum <strong>70 degrees</strong> in horizontal meridian of EACH eye</td><td>Evaluated independently per eye rather than combined total alone</td></tr>
          <tr><td>Signal Color Recognition</td><td>Distinguish standard <strong>red, green, and amber</strong> traffic control colors</td><td>Checked actively during DOT medical exams even where state counters skip it</td></tr>
        </tbody>
      </table>

      <h2>What Eye Charts Do DOT Certified Medical Examiners Use?</h2>
      <p>NRCME medical clinics administer distance acuity testing using either a traditional wall-mounted <strong>20-foot Snellen / Sloan letter poster</strong> or a counter stereo-optical vision tester (such as a Titmus or Optec desktop machine). Unlike quick licensing renewals where examiners sometimes only test both eyes together first, DOT clinics follow a rigid three-column checklist recorded directly onto <strong>Form MCSA-5875 (Medical Examination Report Form)</strong>:</p>
      <ol>
        <li><strong>Right eye covered, read left eye alone:</strong> Must clear the 20/40 (or finer) line with minimal errors (&gt;=3 of 5 or 4 of 6 letters).</li>
        <li><strong>Left eye covered, read right eye alone:</strong> Must independently clear 20/40 on a fresh column or line.</li>
        <li><strong>Both eyes open (binocular):</strong> Confirms combined fusion clears 20/40 or better without diplopia (double vision).</li>
        <li><strong>Peripheral confrontation or perimeter flash:</strong> Verifies at least 70 degrees laterally on both right and left temporal sides.</li>
      </ol>
      <p>If corrective eyewear is worn during any step, the medical examiner marks the corrective-lens box on Form MCSA-5875 and your Medical Card carries the mandatory eyewear notation alongside any state driver license code.</p>

      <h2>What If One Eye Fails 20/40? The Alternative Vision Standard (49 CFR § 391.44)</h2>
      <p>Prior to 2022, drivers with amblyopia, monocular vision loss, or one eye unable to reach 20/40 faced a lengthy Federal Vision Exemption application packet. Today, FMCSA's finalized <strong>Alternative Vision Standard (49 CFR § 391.44)</strong> creates a clear medical pathway governed by <strong>Form MCSA-5871 (Vision Evaluation Report)</strong>:</p>
      <ul>
        <li><strong>Better-eye baseline must qualify cleanly:</strong> Your better eye must independently achieve at least <strong>20/40 distance acuity</strong> (with or without lenses), at least a <strong>70-degree horizontal visual field</strong>, and accurate red-green-amber recognition.</li>
        <li><strong>Eye specialist completes Form MCSA-5871:</strong> An optometrist or ophthalmologist examines your ocular health, diagnoses stable monocular or worse-eye impairment, and signs the 3-page MCSA-5871 report.</li>
        <li><strong>Strict 45-day physical deadline:</strong> Your Certified Medical Examiner must receive the signed Form MCSA-5871 and initiate your DOT physical exam (Form MCSA-5875) <strong>within 45 calendar days</strong> of the specialist's signature date.</li>
        <li><strong>Annual recertification cap:</strong> Drivers qualified under 49 CFR § 391.44 receive a Medical Examiner's Certificate valid for a maximum of <strong>1 year</strong> (rather than the usual 24 months), requiring fresh annual MCSA-5871 specialist checks alongside DOT physicals.</li>
      </ul>

      <h2>Color Vision Rules: Do Color Plates Disqualify CDL Drivers?</h2>
      <p>Standard Ishihara dot plates frequently flag mild congenital red-green anomalies even in drivers who separate traffic signal reds, yellows, and greens reliably on highway corridors. Importantly, FMCSA regulations under § 391.41 require the functional ability to recognize traffic signal red, green, and amber rather than reading subtle numeric dot patterns. If you fail standard clinic dot plates, request a secondary chromatic test (such as the Farnsworth D-15, Optec traffic lamp slide, or formal specialist confirmation on signal lamp discrimination) and review signal contrasts ahead of time on our <a href="/checks/color/">color vision screener</a>.</p>

      <h2>DOT Physical Prep Checklist for Commercial Drivers</h2>
      <ol>
        <li>Check each eye individually on <a href="/checks/distance/">calibrated Snellen columns at 3 meters</a> before scheduling; if either eye hovers around 20/40 or 20/50, update your glasses first so you keep full 24-month certification instead of triggering MCSA-5871 annual renewals.</li>
        <li>Clean anti-glare coatings and allow transition lenses to fade completely clear outdoors-to-indoors before stepping to the chart.</li>
        <li>Test peripheral responsiveness on our <a href="/checks/peripheral/">horizontal visual field check</a> wearing your driving frames to confirm thick temple arms do not obscure 70 degrees.</li>
        <li>Check your home state's counter requirements in our <a href="/states/">50-State DMV Vision Directory</a> for state-level CDL self-certification filing rules.</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
      <h3>Can you hold a CDL if you are blind in one eye or have amblyopia?</h3>
      <p>Yes, provided your better eye satisfies 20/40 acuity, 70-degree horizontal field, and traffic signal color detection, and you follow the 49 CFR § 391.44 pathway using Form MCSA-5871 completed by an optometrist or ophthalmologist within 45 days of your DOT exam.</p>
      <h3>Does Form MCSA-5871 replace the regular DOT physical (MCSA-5875)?</h3>
      <p>No. MCSA-5871 is a supplemental Vision Evaluation Report prepared by an eye doctor; your NRCME Certified Medical Examiner still completes the full health physical on Form MCSA-5875 and decides certification fitness.</p>
      <h3>Are intrastate CDL rules different from interstate FMCSA rules?</h3>
      <p>Some states offer intrastate-only commercial exemptions or legacy grandfather provisions restricted strictly inside state borders without hazmat or interstate commerce, whereas any interstate CDL carrier must satisfy full 49 CFR § 391.41 / § 391.44 federal rules.</p>
      `,
    }
  },
];
