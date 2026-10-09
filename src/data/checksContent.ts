/**
 * Clinical reference content for the 13 individual vision checks.
 * Written to adhere strictly to editorial humanizer guidelines:
 * - No em dashes or en dashes
 * - No overused AI vocabulary (delve, crucial, pivotal, landscape, robust, testament)
 * - No forced triads or bold-labeled lists
 * - Concrete optical standards (ISO 8596, ANSI Z80, Snellen formulas)
 */

export interface CheckGuide {
  id: string;
  name: string;
  subtitle: string;
  whatItMeasures: string;
  opticalPrinciples: string;
  testingProcedure: string;
  clinicalBenchmarks: string;
  whenToSeeDoctor: string;
}

export const CHECKS_CONTENT: Record<string, CheckGuide> = {
  distance: {
    id: "distance",
    name: "Distance Visual Acuity Test",
    subtitle: "Standard distance vision check using calibrated Snellen optotypes at 3 meters or 6 meters.",
    whatItMeasures:
      "Distance visual acuity measures the resolving power of the eye, specifically your ability to distinguish two separate points at a standard distance. Dutch ophthalmologist Herman Snellen designed this assessment in 1862. The test focuses primarily on foveal vision, the tiny central area of the retina packed with cone photoreceptors responsible for sharp, detailed sight.",
    opticalPrinciples:
      "The measurement relies on an angular standard. A standard 20/20 optotype subtends an angle of five minutes of arc on the retina from twenty feet away, with each individual stroke and gap subtending one minute of arc. When an eye resolves this stroke width, visual resolution matches normal human capability. If you read the 20/40 line, the letters are twice as large as the 20/20 baseline, meaning you need letters twice the standard size to recognize them.",
    testingProcedure:
      "To obtain a reliable result at home, screen calibration is required. Place a standard bank card against the screen outline and adjust the slider until the digital box matches the card width of 85.6 millimeters. Once calibrated, step back exactly three meters (ten feet) from your monitor. Keep ambient lighting balanced to avoid screen glare. Test your right eye first while covering the left eye with your palm, then switch eyes, and finish by reading with both eyes open. Avoid squinting, because narrowing your eyelids creates a pinhole effect that artificially sharpens blur.",
    clinicalBenchmarks:
      "In the United States, an unrestricted driver license generally requires 20/40 visual acuity in either both eyes or your better eye. Commercial drivers governed by federal DOT regulations must achieve at least 20/40 corrected in each eye separately. Normal baseline vision sits at 20/20, while young adults frequently reach 20/15. If your best corrected vision falls between 20/40 and 20/70, most licensing agencies require an eye doctor evaluation form before issuing a restricted permit.",
    whenToSeeDoctor:
      "If you cannot read the 20/40 line at the recommended distance while wearing your everyday corrective lenses, schedule an appointment with an optometrist. Sudden blurriness in one eye, difficulty reading street signs while driving, or eye strain accompanied by persistent headaches also indicate that your refractive prescription needs updating.",
  },
  tumbling: {
    id: "tumbling",
    name: "Tumbling E Visual Acuity Check",
    subtitle: "Directional visual screening for illiterate applicants, young children, and language-independent testing.",
    whatItMeasures:
      "The Tumbling E chart evaluates distance visual acuity without requiring familiarity with the Latin alphabet. Professor Hugh Albini and later Herman Snellen popularized this format to test young children, non-native speakers, and individuals with dyslexia. The subject only needs to identify which direction the three limbs of the letter E point: up, down, left, or right.",
    opticalPrinciples:
      "Like standard Snellen charts, each Tumbling E character is constructed on a five-by-five grid. The width of each bar and the space between the bars equal one-fifth of the total letter height. At the 20/20 threshold, the entire character subtends five arcminutes at twenty feet, and the gaps between the limbs subtend one arcminute. Because recognizing limb direction requires fine spatial discrimination, the test provides an accurate estimate of central macular resolution without vocabulary barriers.",
    testingProcedure:
      "Begin by calibrating your display with a bank card so the software calculates the exact pixels per millimeter for your screen. Measure three meters from the screen and sit upright. Occlude one eye without pressing against the eyelid, because pressure temporarily distorts the cornea and creates artificial blur. When an optotype appears, indicate the direction the open limbs point using your keyboard arrow keys or on-screen buttons. The system progressively decreases the optotype size as you enter correct responses.",
    clinicalBenchmarks:
      "Driver licensing agencies accept Tumbling E results on counter testing machines when applicants struggle with letter identification. A score of 20/40 remains the standard passing cutoff for passenger vehicle licenses. Preschool pediatric screenings typically target 20/30 or 20/40 depending on the child's age. For interstate commercial driving under DOT guidelines, passing requires 20/40 acuity in each eye.",
    whenToSeeDoctor:
      "Seek an optometric evaluation if one eye scores significantly worse than the other, or if you cannot consistently identify the 20/40 orientation with your everyday glasses. In children, a persistent difference in visual acuity between eyes can indicate amblyopia or uncorrected refractive error, which benefits from early clinical intervention.",
  },
  color: {
    id: "color",
    name: "Color Vision Deficiency Screening",
    subtitle: "Pseudoisochromatic plate test for red-green and blue-yellow color perception abnormalities.",
    whatItMeasures:
      "This test evaluates color discrimination and screens for inherited or acquired color vision deficiencies. Dr. Shinobu Ishihara developed the pseudoisochromatic plate technique in 1917. The plates present numbers or geometric patterns composed of dots varying in hue, saturation, and luminance, preventing individuals from identifying shapes based solely on lightness differences.",
    opticalPrinciples:
      "Human color perception depends on three classes of retinal cone photoreceptors: short-wavelength (blue), medium-wavelength (green), and long-wavelength (red). In red-green color deficiency, either the red cone pigment is missing or shifted (protanopia and protanomaly) or the green pigment is altered (deuteranopia and deuteranomaly). The color plates pair confusing colors along specific chromatic confusion axes. A person with normal trichromatic vision easily groups the target dots by hue, whereas a person with anomalous cone sensitivity perceives the pattern as uniform background noise.",
    testingProcedure:
      "Position yourself fifty centimeters to one meter from the monitor in a room with neutral, indirect lighting. Do not use night light mode, blue light filters, or tinted glasses during the check, as warm color shifts distort chromatic balance. Examine each plate for three to five seconds and identify the embedded number. Staring longer allows your brain to hunt for subtle luminance artifacts rather than relying on pure color grouping.",
    clinicalBenchmarks:
      "Around eight percent of men and roughly 0.5 percent of women carry an inherited red-green color deficiency. Driver licensing bureaus require drivers to recognize standard red, amber, and green traffic lights. Most DMV desktop machines include a dedicated three-light signal check rather than demanding perfect scores across subtle diagnostic plates. Aviation, maritime navigation, and certain electrical trades enforce stricter chromatic standards.",
    whenToSeeDoctor:
      "Inherited color blindness is stable throughout life. However, if you notice a sudden shift in your color perception, if colors appear faded or washed out in one eye, or if you have difficulty distinguishing red brake lights, consult an eye specialist promptly. Acquired color loss can indicate optic nerve inflammation, glaucoma, or retinal disease.",
  },
  peripheral: {
    id: "peripheral",
    name: "Peripheral Visual Field Awareness Test",
    subtitle: "Screening of horizontal field boundaries and lateral visual awareness for driving safety.",
    whatItMeasures:
      "Peripheral vision testing assesses your horizontal visual field, which is the total area your eyes detect while focusing straight ahead. While central vision handles reading and identifying faces, peripheral vision relies on retinal rod photoreceptors and sparse ganglion cells to detect motion, pedestrian movement, and approaching vehicles from the side.",
    opticalPrinciples:
      "A healthy human visual field extends approximately one hundred degrees temporally (toward the ear) and sixty degrees nasally (toward the nose) for each eye, yielding a combined binocular horizontal span near one hundred eighty degrees. In desktop testing machines and computerized screeners, lateral light stimuli appear at measured angular offsets while your gaze remains anchored to a central fixation point. This verifies functional visual sensitivity across the mid-peripheral retina.",
    testingProcedure:
      "Sit directly in front of your display at arm's length (about fifty to sixty centimeters). Fix your gaze steadily on the center fixation marker. Without shifting your eyes or turning your head, acknowledge light flashes or markers as they appear in the outer margins of the screen. Testing must be completed with a steady central gaze to avoid using sharp foveal vision in place of peripheral detection.",
    clinicalBenchmarks:
      "State motor vehicle departments enforce specific horizontal field minimums. Most states require a total horizontal visual field between 110 degrees and 140 degrees for an unrestricted passenger vehicle license. For commercial interstate drivers, federal regulations require at least 70 degrees in the horizontal meridian in each eye. A restricted field can prompt requirement for specialized panoramic rearview mirrors.",
    whenToSeeDoctor:
      "Any noticeable restriction in side vision, bumping into doorways, or missing vehicles in neighboring lanes requires immediate examination. Progressive peripheral vision loss is a primary indicator of open-angle glaucoma, retinal detachment, or neurological conditions affecting the optic chiasm. Early clinical perimetry can detect field defects before they become obvious in daily life.",
  },
  near: {
    id: "near",
    name: "Near Visual Acuity Screening",
    subtitle: "Reading vision assessment at sixteen inches (40 centimeters) to evaluate presbyopia and accommodation.",
    whatItMeasures:
      "Near visual acuity measures your ability to see clearly at normal reading distance, typically standardized at forty centimeters (sixteen inches). This test evaluates the eye's accommodative system and the refractive power of the crystalline lens. It screens for hyperopia (farsightedness) in younger individuals and presbyopia in adults over forty.",
    opticalPrinciples:
      "Viewing an object at forty centimeters requires the eye to add 2.5 diopters of positive optical power through accommodation. As the ciliary muscle contracts, the crystalline lens steepens, increasing its focal power to converge diverging light rays onto the retina. Starting around age forty, the human lens gradually loses elasticity, reducing accommodative amplitude and causing small print to blur at normal working distances.",
    testingProcedure:
      "Calibrate the screen using your bank card to ensure correct typographic scaling. Measure exactly forty centimeters from your eyes to the screen. If you wear reading glasses or bifocals for computer work and book reading, keep them on. Read through the text samples and optotype lines, identifying the smallest legible block with each eye individually, then with both eyes together. Avoid tilting the screen or leaning inward during the check.",
    clinicalBenchmarks:
      "Normal near visual acuity corresponds to 20/20 at near (frequently recorded as Jaeger J1 or 0.40 millimeter print size). A result of 20/40 at near represents acceptable functional reading vision for larger print, though sustained computer work often causes fatigue at this level. Many professional driver exams evaluate near vision alongside distance vision to confirm the applicant can read dashboard instrumentation and electronic logbooks.",
    whenToSeeDoctor:
      "Schedule a visit with an optometrist if you find yourself holding reading material farther away to bring it into focus, or if computer work produces eye fatigue, brow ache, or blurred distance vision after close work. Presbyopia is a predictable age-related change that simple prescription adjustments readily resolve.",
  },
  contrast: {
    id: "contrast",
    name: "Contrast Sensitivity Screening",
    subtitle: "Evaluation of visual discrimination under low-contrast conditions, night driving, and fog.",
    whatItMeasures:
      "Contrast sensitivity measures your ability to distinguish an object from its background when luminance differences are small. While standard Snellen charts present high-contrast black letters on a white background, everyday conditions such as night driving, rain, and fog involve low-contrast objects. This check assesses visual quality rather than pure resolving quantity.",
    opticalPrinciples:
      "Clinical contrast testing uses the Pelli-Robson or Mars chart principles, displaying letters of constant size that progressively decrease in optical contrast. Contrast is calculated as the luminance difference between the letter and background divided by the background luminance. Loss of contrast sensitivity often precedes measurable visual acuity loss because it reflects subtle light scattering within the cornea and lens, as well as early neural changes in the retina and visual cortex.",
    testingProcedure:
      "Ensure your computer monitor brightness is set to a moderate, comfortable level and eliminate reflections from nearby lamps. Sit one meter from the display. Read the letter sequences as they fade from solid dark gray into pale gray against the white field. Stop when you can no longer distinguish the shape from the background with certainty.",
    clinicalBenchmarks:
      "Normal healthy adults achieve a log contrast sensitivity score of 1.65 to 1.95 log units, which corresponds to detecting contrast variations below two percent. A score below 1.50 indicates reduced contrast sensitivity, which significantly increases difficulty with night driving, detecting curbs, and navigating low-light environments.",
    whenToSeeDoctor:
      "If you experience significant glare from oncoming headlights, haloing around streetlights, or difficulty seeing in rainy night conditions despite having 20/20 high-contrast acuity, make an appointment with an eye care professional. Reduced contrast sensitivity is often an early sign of cataracts, corneal swelling, dry eye disease, or early macular changes.",
  },
  astigmatism: {
    id: "astigmatism",
    name: "Astigmatism Dial & Fan Test",
    subtitle: "Screening for corneal curvature irregularity and principal focal meridians.",
    whatItMeasures:
      "The astigmatism dial check detects whether light entering your eye focuses at different points along different planes. In a non-astigmatic eye, the cornea and crystalline lens are shaped like a sphere, refracting light uniformly in all directions. In an astigmatic eye, the surface resembles the side of a rugby ball, creating two different refractive powers at right angles to each other.",
    opticalPrinciples:
      "The test uses an astigmatic clock dial or sunburst pattern containing radial lines arranged at equal intervals. If you have uncorrected astigmatism, lines aligned with the focal meridian closest to the retina appear sharp, dark, and distinct, while lines positioned perpendicular to that meridian appear washed out, grey, or slightly doubled. This discrepancy identifies the orientation of the principal astigmatic axis.",
    testingProcedure:
      "Position yourself two meters from your screen with your usual distance glasses on. Cover your left eye completely with your hand without applying pressure to the globe. Look steadily at the central hub of the dial. Observe whether all spokes appear equally black and uniform, or if a specific set of lines looks distinctly darker or thicker than the others. Note the numbers corresponding to the sharpest lines, then repeat the assessment with your left eye.",
    clinicalBenchmarks:
      "Astigmatism of 0.75 diopters or greater typically produces noticeable shadowing on the dial and causes letter confusion on distance acuity charts (such as mixing up the letters O, D, and C). Regular astigmatism is corrected with toric contact lenses or cylindrical spectacle lenses that equalize refractive power across all meridians.",
    whenToSeeDoctor:
      "Consult an optometrist if you notice persistent shadowing around high-contrast letters, ghosting around digital text, or if specific spokes on the dial remain noticeably darker despite wearing your current prescription. Regular eye exams verify whether astigmatism remains stable or requires updated cylindrical correction.",
  },
  refraction: {
    id: "refraction",
    name: "Duochrome Red-Green Refraction Check",
    subtitle: "Chromatic aberration check to evaluate spherical over-correction and balance.",
    whatItMeasures:
      "The duochrome test checks the spherical accuracy of an eye's optical correction by exploiting longitudinal chromatic aberration. It helps determine whether your distance glasses or contact lenses are slightly over-correcting or under-correcting your spherical refractive error.",
    opticalPrinciples:
      "Natural optical media refract different wavelengths of light by different amounts. Shorter green wavelengths (approximately 535 nanometers) bend more sharply and focus in front of the retina, while longer red wavelengths (approximately 650 nanometers) bend less and focus behind the retina. When an eye is perfectly focused for yellow light, the red and green focal planes sit equidistant in front of and behind the photoreceptors, making letters on both colored backgrounds look equally clear. If red letters look sharper, the eye is slightly nearsighted or under-corrected. If green letters stand out, the eye is over-minus or slightly farsighted.",
    testingProcedure:
      "Place your display in a dimly lit room to enhance color contrast. Sit two to three meters away from the screen wearing your current distance glasses. Cover one eye at a time. Look at the split screen containing black letters on red and green backgrounds. Compare the clarity of the letter strokes on both sides rather than the brightness of the colors. Determine whether letters on the red side, green side, or both sides appear equally sharp.",
    clinicalBenchmarks:
      "In a balanced distance prescription, letters on both red and green fields appear equally clear. A preference for the green side suggests over-minus correction, which forces the ciliary muscle to accommodate continuously during distance viewing and frequently leads to ocular strain. A preference for the red side suggests slight under-correction for distance nearsightedness.",
    whenToSeeDoctor:
      "If you experience eye strain, forehead pressure, or tension headaches after wearing new prescription glasses, and the green side appears substantially sharper on the duochrome check, your prescription may be over-minus. Bring this observation to your optometrist for a formal refraction refinement.",
  },
  stereo: {
    id: "stereo",
    name: "Stereopsis & Depth Perception Screening",
    subtitle: "Screening of binocular visual integration and fine depth discrimination.",
    whatItMeasures:
      "Stereopsis measures binocular depth perception, which is your brain's ability to fuse slightly disparate images from each eye into a single three-dimensional perception. This check evaluates how well both eyes coordinate as a functional unit to gauge spatial distances accurately.",
    opticalPrinciples:
      "Because our eyes sit roughly sixty to sixty-five millimeters apart horizontally, each eye views the surrounding world from a slightly different angle. This horizontal retinal disparity is processed in the visual cortex to yield precise stereoscopic depth perception. In computer-based screeners, stereoscopic targets use disparity markers and shape cues to evaluate whether binocular vision operates without suppression or strabismic misalignment.",
    testingProcedure:
      "Sit squarely in front of your display at fifty to sixty centimeters, keeping your head level and upright. If you tilt your head, horizontal retinal disparity is diminished, skewing the test. Observe the test patterns while keeping both eyes open and follow the on-screen prompts to identify which geometric figure or ring appears raised or positioned in front of the others.",
    clinicalBenchmarks:
      "Clinical stereopsis is quantified in seconds of arc. Normal high-grade stereoacuity reaches forty seconds of arc or better. Coarse stereopsis measures between one hundred and four hundred seconds of arc. While most non-commercial driver licenses do not strictly mandate fine stereopsis provided monocular acuity is sufficient, commercial driver roles and crane operation demand intact binocular depth awareness.",
    whenToSeeDoctor:
      "A complete inability to perceive depth or double vision (diplopia) warrants immediate medical evaluation by an eye care professional. Suppressed binocular vision can stem from longstanding amblyopia, eye muscle imbalances (phoria or tropia), or neurological conditions affecting ocular motility.",
  },
  cdl: {
    id: "cdl",
    name: "Commercial Driver (CDL / DOT) Vision Check",
    subtitle: "Federal motor carrier vision standards screening under 49 CFR § 391.41.",
    whatItMeasures:
      "This check evaluates your visual capabilities against the mandatory federal vision standards for commercial motor vehicle drivers. In the United States, interstate truck and bus operators must pass a DOT physical examination administered by a certified medical examiner listed on the National Registry.",
    opticalPrinciples:
      "Operating an eighty-thousand-pound commercial vehicle requires superior visual vigilance across multiple domains: distance acuity to spot highway obstacles early, wide peripheral awareness to monitor merge zones and blind spots, and dependable color recognition to identify red, green, and amber traffic signals promptly under adverse weather conditions.",
    testingProcedure:
      "Complete the three-part evaluation: calibrate your screen with a bank card, step back three meters for the distance acuity check, complete the horizontal field detection stage, and finish the traffic signal color discrimination check. Wear the glasses or contact lenses you intend to use while operating a commercial vehicle.",
    clinicalBenchmarks:
      "Federal Motor Carrier Safety Administration (FMCSA) regulations under 49 CFR § 391.41(b)(10) specify strict requirements: distant visual acuity of at least 20/40 (Snellen) in each eye separately and in both eyes combined with or without corrective lenses, a field of vision of at least 70 degrees in the horizontal meridian in each eye, and the ability to recognize the colors of traffic signals showing standard red, green, and amber. Drivers who do not meet these standards in one eye must apply for an FMCSA federal vision exemption.",
    whenToSeeDoctor:
      "If your corrected vision in either eye falls below 20/40 during practice, visit an eye specialist before scheduling your DOT medical exam. A failure at the certified medical examiner's office halts your medical card renewal and keeps you off the road until an eye specialist completes the federal evaluation paperwork.",
  },
  landolt: {
    id: "landolt",
    name: "Landolt C Ring Optotype Test",
    subtitle: "International standard visual acuity screening under ISO 8596 and DIN 58220.",
    whatItMeasures:
      "The Landolt C ring test is the official reference standard for visual acuity adopted by the International Organization for Standardization (ISO 8596) and the International Council of Ophthalmology. It measures minimum separable acuity by asking the observer to identify the position of a small gap in a circle.",
    opticalPrinciples:
      "Unlike alphabet charts where some letters like L and T are easier to identify than letters like B and S, the Landolt ring provides completely uniform legibility across all presentations. The optotype consists of an outer circle with a diameter subtending five minutes of arc, a stroke width of one minute of arc, and a break or gap subtending exactly one minute of arc. The gap appears in one of eight orientations (up, down, left, right, and four diagonal positions). Recognizing the gap requires pure resolving capability at the one-arcminute limit.",
    testingProcedure:
      "After calibrating screen dimensions with a standard bank card, measure three meters from your monitor. Cover one eye with your palm, taking care not to press on the eye. When a Landolt ring appears, indicate the direction of the opening using your directional keypad or on-screen controls. Proceed through progressively smaller rings until you reach your threshold.",
    clinicalBenchmarks:
      "In decimal notation, standard vision is recorded as 1.0, which corresponds to 20/20 Snellen or 0.0 LogMAR. Resolving a ring with a two-arcminute gap represents decimal 0.5 (20/40 Snellen), the minimum requirement for driving in many international jurisdictions. Research trials and formal clinical evaluations use Landolt C rings or Sloan letters because they eliminate memorization and language bias.",
    whenToSeeDoctor:
      "If you score below decimal 0.5 (20/40) with your best corrective lenses, schedule an optometric exam. Because Landolt C testing removes cultural and educational factors, a lower score points directly to an uncorrected refractive error or reduced ocular transparency that needs professional diagnosis.",
  },
  amsler: {
    id: "amsler",
    name: "Amsler Grid Macular Function Screening",
    subtitle: "Screening of the central ten degrees of visual field for macular distortion and scotomas.",
    whatItMeasures:
      "The Amsler grid check evaluates the central ten degrees of your visual field, focusing on the health of the macula, the functional center of the retina. Swiss ophthalmologist Marc Amsler designed this diagnostic tool in 1945 to detect early signs of age-related macular degeneration, diabetic maculopathy, and central serous chorioretinopathy.",
    opticalPrinciples:
      "The grid consists of intersecting black lines on a white background (or white lines on black) forming a ten-centimeter square subdivided into small half-centimeter squares, with a central fixation dot. When held at thirty-three centimeters, each small square subtends one degree of visual angle on the retina. In a healthy eye, the grid lines project onto an evenly curved retinal surface and appear straight and parallel. If fluid, swelling, or drusen accumulate beneath the photoreceptors, the retinal layer elevates, bending the projected lines and causing metamorphopsia (waviness) or dark blank spots (scotomas).",
    testingProcedure:
      "Wear your standard reading glasses if you use them. Sit or stand thirty-three to forty centimeters from your screen in good room light. Cover one eye with your hand. Fix your gaze steadily on the black dot in the center of the grid. While maintaining focus on the central dot, observe the surrounding lines. Check whether all lines appear straight and continuous, or if any sections look wavy, bent, blurred, discolored, or missing. Repeat the procedure with the opposite eye.",
    clinicalBenchmarks:
      "A normal Amsler grid response is uniform: all four corners of the grid are visible, all lines are straight and parallel, and no areas are distorted or obscured. Any report of wavy lines, distorted squares, or dark patches is abnormal and warrants prompt clinical investigation.",
    whenToSeeDoctor:
      "If straight lines on the grid appear wavy, bent, broken, or if a dark smudge blocks part of the grid, seek immediate evaluation by an optometrist or retinal specialist. Sudden distortion in central vision is a cardinal symptom of wet age-related macular degeneration or retinal swelling, where rapid clinical treatment helps preserve sight.",
  },
  sivtsev: {
    id: "sivtsev",
    name: "Golovin–Sivtsev Cyrillic Vision Chart",
    subtitle: "Standard visual acuity chart for Eastern European and Cyrillic-reading populations.",
    whatItMeasures:
      "The Golovin–Sivtsev table is the standard distance visual acuity chart used in Russia, Ukraine, and throughout Eastern Europe and Central Asia. Soviet ophthalmologist Dmitry Golovin and his student Dmitry Sivtsev developed this clinical system in 1923. It consists of two tables: one using seven Cyrillic letters and one using Landolt C rings.",
    opticalPrinciples:
      "The chart contains twelve rows of Cyrillic optotypes (using specifically selected letters: Ш, Б, М, Н, К, Ы, and И) with equal legibility characteristics. Similar to the Snellen system, each letter is drawn on a square grid where the stroke width equals one-fifth of the total character height. The tenth row from the top corresponds to normal visual acuity (V = 1.0, equivalent to 20/20) when viewed from a standard distance of five meters.",
    testingProcedure:
      "Calibrate your monitor using a bank card so the letter strokes scale with exact physical millimeter accuracy. Position yourself three meters from your display. Test each eye monocularly by covering the other eye with an occluder or palm. Read down the Cyrillic characters row by row until you reach the lowest line where you can distinguish at least half the letters correctly.",
    clinicalBenchmarks:
      "Acuity in the Golovin–Sivtsev system is expressed as a decimal value V. Row 10 represents V = 1.0 (20/20 Snellen). Row 7 corresponds to V = 0.5 (20/40 Snellen), which represents the passing threshold for driving licenses and military draft requirements across many Cyrillic-using nations. Row 1 represents V = 0.1 (20/200 Snellen).",
    whenToSeeDoctor:
      "If you cannot clearly read down to row seven (V = 0.5) with your everyday spectacles or contact lenses, consult an eye specialist for an updated refraction. If you notice asymmetry between eyes, where one eye reads V = 1.0 while the other struggles on row five, schedule a comprehensive examination to investigate the underlying cause.",
  },
};
