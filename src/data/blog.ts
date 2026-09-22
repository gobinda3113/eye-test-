import { blogContent } from "../components/BlogContent.js";

export const POSTS = [
  {
    slug: "online-eye-test-guide",
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
    englishOnly: true,
    title: {
      en: "DMV Eye Test Online - Practice Test",
    },
    excerpt: {
      en: "Get ready for your official DMV vision screening with our free practice eye test.",
    },
    content: {
      en: `
        <h2>Practice for the DMV Eye Test</h2>
        <p>If you are heading to the Department of Motor Vehicles to renew your driver's license, you'll need to pass a vision screening. You can use our <strong>DMV eye test online</strong> tool as a <strong>practice test</strong> to see if your visual acuity meets the state requirements.</p>
        
        <h3>What is the passing score?</h3>
        <p>Most states require 20/40 vision in at least one eye to pass without restrictions. Using our <strong>snellen eye test</strong>, you can simulate the exam. Please note that this is an unofficial <strong>practice test</strong> and does not replace the official DMV examination.</p>
        
        <h3>How to practice</h3>
        <p>Ensure your screen is calibrated properly using a credit card. Stand at the designated distance and read the letters. Practicing at home can reduce anxiety and let you know if you need to visit an optometrist before your official appointment.</p>
      `
    }
  },
  {
    slug: "dmv-eye-test-fail-guide",
    englishOnly: true,
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
    englishOnly: true,
    title: {
      en: "6/6 Vision Test Online: What 6/6 Means and How to Check",
    },
    excerpt: {
      en: "6/6 is the metric form of 20/20. See the full 6/6 to 20/20 conversion chart and how to check 6/6 vision at home.",
    },
    content: {
      en: `
        <h2>What 6/6 vision means</h2>
        <p>6/6 is the metric form of 20/20. It says you read at 6 metres what a standard eye reads at 6 metres. Indian clinics commonly report vision this way, while America tests at 20 feet, and 20 feet is about 6.1 metres, so both systems describe the same eyesight with different numbers. 6/6, 20/20 and 1.0 all mean normal distance vision.</p>

        <h2>6/6 to 20/20 conversion chart</h2>
        <p>Every row below is one line on the chart, written three ways. Find your result in any column and read across.</p>
        <table class="state-table">
          <thead><tr><th>Metric (6 m)</th><th>Feet (20 ft)</th><th>Decimal</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>6/6</td><td>20/20</td><td>1.0</td><td>Normal vision</td></tr>
            <tr><td>6/7.5</td><td>20/25</td><td>0.8</td><td>Near normal</td></tr>
            <tr><td>6/9</td><td>20/30</td><td>0.67</td><td>Mild blur at distance</td></tr>
            <tr><td>6/12</td><td>20/40</td><td>0.5</td><td>Half of normal, most driving limits sit here</td></tr>
            <tr><td>6/18</td><td>20/60</td><td>0.33</td><td>Needs correction for driving</td></tr>
            <tr><td>6/24</td><td>20/80</td><td>0.25</td><td>Needs correction</td></tr>
            <tr><td>6/30</td><td>20/100</td><td>0.2</td><td>Poor distance vision</td></tr>
            <tr><td>6/60</td><td>20/200</td><td>0.1</td><td>Legal blindness threshold in many countries</td></tr>
          </tbody>
        </table>

        <h2>One limit to know before you test</h2>
        <p>India's official medical certificate (Form 1A) asks whether you can read a number plate at 25 metres. It names no chart and no national pass line, so treat this page as notation help and general screening, not licence equivalence. Real pass/fail claims belong to a registered medical practitioner. (<a href="https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-1A.pdf">Form 1A wording</a>.)</p>

        <h2>How to check 6/6 at home</h2>
        <p>Stand 6 metres from the screen, which is the same spot as the 20-foot mark on American charts. Calibrate the display with a bank card first, since an uncalibrated letter is not a real letter. Cover one eye with your palm without pressing on it, read the smallest line you can, then swap eyes. If you wear glasses, keep them on. There is no single national pass line behind this page, so read your result as information, not a verdict.</p>

        <h2>What this screener shows instead</h2>
        <p>One honest note: <a href="/#screener">the free practice screening</a> displays results in 20/xx form, because it was built around the American notation. The lines are the same physical sizes, so use the chart above to map your result. A 20/20 result is a 6/6 result. A 20/40 result is a 6/12 result. If a line worries you, see an optometrist before relying on it. Our <a href="/about/">about page</a> explains what a screen-based check can and cannot tell you.</p>
      `
    }
  }
];
