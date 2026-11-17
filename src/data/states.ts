/**
 * The 50-state + DC vision standards table with official verification layer.
 *
 * Base values (acuity, restriction, renewal cycle) come from src/scripts/data.ts
 * to guarantee that the interactive distance screener and the state reference pages
 * stay in complete sync.
 *
 * This module integrates the official primary-source evidence layer:
 * - Governing state statutes and administrative codes
 * - Official DMV / DOT verification URLs
 * - Specific numbered specialist examination forms
 * - Retest and medical review policies
 * - Field of vision (peripheral degrees) thresholds
 *
 * States with verified primary sources carry verified: true.
 * Unverified states are explicitly flagged as verified: false so that
 * search engines apply noindex and avoid low-value duplicate penalties.
 */

import { STATES as BASE } from "../scripts/data.ts";

export const AS_OF = "2026-10";

export interface StateVisionRecord {
  code: string;
  name: string;
  region: string;
  need: string;
  min: string;
  restrict: string | null;
  renewal: string;
  statute: string | null;
  dmvUrl: string | null;
  asOf: string | null;
  verified: boolean;
  field: string | null;
  doctorForm: string | null;
  retestPolicy: string | null;
  renewalCycle?: string;
  onlineEligible?: string;
  seniorRules?: string;
  screeningFormat?: string;
  stateGuide?: string;
  extraFaqs?: { q: string; a: string }[];
}

export const CDL = {
  code: "CDL",
  name: "Interstate CDL / DOT medical card",
  need: "each",
  min: "20/40",
  restrict: null,
  renewal: "every",
  statute: "49 C.F.R. § 391.41(b)(10)",
  dmvUrl: "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-391/subpart-E/section-391.41",
  asOf: AS_OF,
  verified: true,
  field: "70° in each eye, 130° together",
  colour: "red, green and amber",
  doctorForm: "Medical Examination Report (MCSA-5875)",
  retestPolicy: "Drivers must pass physical qualification with an FMCSA-certified medical examiner. A federal vision exemption may be sought under 49 C.F.R. § 391.44 if monocular vision criteria are met.",
};

export const VERIFIED_DATA: Record<string, {
  statute: string;
  dmvUrl: string;
  asOf: string;
  verified: boolean;
  field: string;
  doctorForm: string;
  retestPolicy: string;
  renewalCycle?: string;
  onlineEligible?: string;
  seniorRules?: string;
  screeningFormat?: string;
  stateGuide?: string;
  extraFaqs?: { q: string; a: string }[];
}> = {
  "AK": {
    "statute": "AS 28.15.081; 2 AAC 90.420",
    "dmvUrl": "https://www.dmv.alaska.gov/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the counter vision screening results in referral to an eye care professional; licensure follows the specialist's report."
  },
  "AL": {
    "statute": "Ala. Code §§ 32-2-9, 32-6-13; Ala. Admin. Code r. 760-X-20-.14, 760-X-20-.20",
    "dmvUrl": "https://www.alea.gov/dps/driver-license",
    "asOf": "2026-10",
    "verified": true,
    "field": "110° horizontal temporal field from center (per Ala. Admin. Code r. 760-X-20)",
    "doctorForm": "Certificate of Vision Examination / ALEA Specialist Report",
    "retestPolicy": "Applicants failing the counter vision screening must obtain a licensed eye specialist report; licensing continues upon submission, and corrective-lens restrictions may apply."
  },
  "AR": {
    "statute": "Ark. Code Ann. § 27-16-704(b)(3)-(6)",
    "dmvUrl": "https://www.dfa.arkansas.gov/office-of-motor-vehicle/driver-services/",
    "asOf": "2026-10",
    "verified": true,
    "field": "140° horizontal with two functional eyes / 105° with one functional eye",
    "doctorForm": "DFA Vision Referral/Examination Form",
    "retestPolicy": "Applicants who fail the eyesight test must obtain an eye examination from a licensed professional; minimum acuity of 20/70 is required with corrective lenses.",
    "renewalCycle": "Arkansas standard adult driver licenses run on an 8-year cycle, while residents aged 70 and older may elect an optional reduced-fee 4-year cycle or retain the standard 8-year validity.",
    "onlineEligible": "Arkansas provides NO online or mail renewal for standard Class D driver's licenses; all renewals require an in-person visit at a Department of Finance and Administration (DFA) State Revenue Office.",
    "seniorRules": "Every age group receives the identical counter vision test whenever renewing in person at an Arkansas DFA office. Arkansas imposes no mandatory age-based road retest.",
    "screeningFormat": "DFA counters and Arkansas State Police exam stations test distance vision at 20/40 uncorrected (up to 20/70 minimum corrected with eyewear or doctor clearance) and 140 degrees binocular field (105 degrees for monocular drivers).",
    "stateGuide": `
<p>Arkansas handles all Class D license renewals exclusively in person through Department of Finance and Administration (DFA) State Revenue Offices. Because online and mail renewals are not available for ordinary passenger credentials, passing the counter eye screening smoothly ensures you leave with your temporary paper license in a single trip without scheduling a follow-up Arkansas State Police appointment.</p>
      <p>State regulations check two distinct acuity tiers: applicants must measure at least <strong>20/40 unaided</strong> for completely unrestricted status, or no worse than <strong>20/70 best-corrected</strong> with prescription lenses or an eye doctor's clearance when passing with corrective lens restrictions. Peripheral coverage must span at least <strong>140 degrees horizontally</strong> when both eyes function, or <strong>105 degrees</strong> minimum for documented monocular drivers. Motorists aged 70+ may choose either the standard 8-year card or a reduced-fee 4-year term at the Revenue Office counter.</p>
      <p>Before walking into your local Revenue Office, verify clean distance resolution at <a href="/checks/distance/">3-meter calibrated spacing</a> and run our <a href="/checks/peripheral/">horizontal visual field check</a> with both eyes open.</p>
    `,
    "extraFaqs": [{"q":"Does Arkansas allow online driver's license renewal?","a":"No. Standard Arkansas Class D renewals must be completed in person at a DFA State Revenue Office so staff can conduct the mandatory vision screening and photo capture."},{"q":"What is the difference between 20/40 and 20/70 in Arkansas?","a":"20/40 unaided earns an unrestricted card, whereas applicants needing glasses or passing between 20/40 and 20/70 corrected carry corrective lens or restricted-license conditions."},{"q":"Do senior drivers in Arkansas need extra tests?","a":"No extra road tests are triggered by age; every driver takes the standard counter vision screening at each renewal."}],
  },
  "AZ": {
    "statute": "Ariz. Rev. Stat. § 28-3158; Ariz. Admin. Code R17-4-503",
    "dmvUrl": "https://azdot.gov/mvd/services/driver-services/driver-license-information/medical-and-vision-screening",
    "asOf": "2026-10",
    "verified": true,
    "field": "105° total horizontal (70° temporal + 35° nasal) in at least one eye",
    "doctorForm": "Form 32-4001 — Vision Examination Report",
    "retestPolicy": "Applicants who fail the counter screening must have an eye specialist complete Form 32-4001 within 90 days. ADOT reviews the report for licensing conditions."
  },
  "CA": {
    "statute": "Cal. Veh. Code § 12804.9",
    "dmvUrl": "https://www.dmv.ca.gov/portal/driver-education-and-safety/medical-conditions-and-driving/vision-conditions/",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not part of routine counter vision screening",
    "doctorForm": "DL 62 — Report of Vision Examination",
    "retestPolicy": "If an applicant does not meet the 20/40 acuity screening standard, DMV provides Form DL 62 for an optometrist or ophthalmologist to complete. DMV then determines whether a driving performance test or daylight-only restriction is necessary."
  },
  "CO": {
    "statute": "C.R.S. § 42-2-111(1)(a); 1 CCR 204-30:26",
    "dmvUrl": "https://dmv.colorado.gov/vision-screening",
    "asOf": "2026-10",
    "verified": true,
    "field": "120° total combined horizontal field",
    "doctorForm": "Form DR 2402 — Confidential Eye Examination Report (rev. 08/15/25)",
    "retestPolicy": "Applicants who fail the counter screening must submit Form DR 2402 completed by an eye care specialist. Colorado DMV evaluates the report to determine if corrective lenses or daylight restrictions are required."
  },
  "CT": {
    "statute": "Regs. Conn. State Agencies § 14-45a-1",
    "dmvUrl": "https://portal.ct.gov/dmv/licenses-permits-ids/take-knowledge-vision-test?language=en_US",
    "asOf": "2026-10",
    "verified": true,
    "field": "140° binocular",
    "doctorForm": "Eye Care Professional's State of Connecticut Medical Report",
    "retestPolicy": "A failed vision test may be rescheduled and retaken; applicants who cannot pass are referred to an eye care professional whose report DMV reviews."
  },
  "DC": {
    "statute": "D.C. Code § 50-1401.01a (vision provision unconfirmed)",
    "dmvUrl": "https://dmv.dc.gov/ar/service/obtain-a-real-id-driver-license",
    "asOf": "2026-10",
    "verified": false,
    "field": "140° using both eyes (best-effort; official degree unconfirmed)",
    "doctorForm": "Medical/Eye Form (name unconfirmed)",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care professional; the Medical/Eye Form is submitted to DMV for review."
  },
  "DE": {
    "statute": "21 Del. Code § 2713 (vision standards set by DMV policy; section text unconfirmed)",
    "dmvUrl": "https://services.dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_gdl_instruction",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): the eye screening is required at application; failing it results in referral for further eye examination before licensing proceeds."
  },
  "FL": {
    "statute": "Fla. Stat. § 322.12; Fla. Admin. Code R. 15A-1.012",
    "dmvUrl": "https://www.flhsmv.gov/driver-licenses-id-cards/medical-review/vision-standards/",
    "asOf": "2026-10",
    "verified": true,
    "field": "130° uninterrupted horizontal field (50° each side minimum)",
    "doctorForm": "Form HSMV 72010 — Report of Eye Examination",
    "retestPolicy": "Drivers unable to achieve 20/40 vision must have an eye specialist complete Form HSMV 72010. Acuity down to 20/70 in either eye allows restricted licensure; worse than 20/70 in both eyes results in license denial.",
    "renewalCycle": "Florida issues driver licenses for 8 years through age 79 and shortens validity to 6 years for drivers aged 80 and older under Florida Statutes § 322.18.",
    "onlineEligible": "Drivers under 80 may renew online via Florida MyDMV Portal every other renewal cycle (two consecutive remote renewals are barred without an intervening vision update). Drivers age 80+ must supply a passed vision exam at every 6-year renewal.",
    "seniorRules": "At age 80 and older, Florida mandates a vision test on every single 6-year renewal: applicants may screen in person at an FLHSMV office OR have a Florida-licensed optometrist, ophthalmologist, or MD/DO complete Form HSMV 72119 beforehand for online/mail submission.",
    "screeningFormat": "FLHSMV counters enforce a 20/70 cutoff in either or both eyes with or without eyewear, UNLESS one eye reads 20/200 or worse (in which case the better eye must read at least 20/40).",
    "stateGuide": `
<p>Florida maintains distinctive asymmetric licensing benchmarks compared with typical 20/40 states. Under Florida Administrative Code Rule 15A-1.013 and FLHSMV policy, an applicant passes standard counter screening with <strong>20/70 or better visual acuity in either or both eyes</strong> (with or without glasses), alongside a continuous <strong>130-degree minimum horizontal visual field</strong>. However, if either eye is blind or measures <strong>20/200 or worse</strong>, the functioning eye must read at least <strong>20/40</strong>.</p>
      <p>Florida also draws a clean operational line for drivers age <strong>80 and older</strong>: renewal terms tighten from 8 years to <strong>6 years</strong>, and passing a fresh vision screening becomes mandatory at every single cycle. Senior Floridians who prefer avoiding office waits can ask their eye doctor or physician to submit <strong>Form HSMV 72119 (Mature Driver Vision Test)</strong> before completing their renewal via MyDMV Portal or mail.</p>
      <p>If an in-office screening fails below 20/70 (or 20/40 monocular), examiners issue <strong>Form HSMV 72010 (Report of Eye Exam)</strong> for specialist evaluation. Check both eyes individually on our <a href="/us/test/">Florida DMV practice module</a> beforehand.</p>
    `,
    "extraFaqs": [{"q":"Why does Florida allow 20/70 unless one eye is 20/200?","a":"Florida grants a 20/70 pass threshold when both eyes contribute useful sight, but requires stronger 20/40 performance in the better eye whenever the weaker eye falls to 20/200 or worse."},{"q":"Can an 80-year-old renew a Florida license online?","a":"Yes, provided a Florida-licensed optometrist, ophthalmologist, or physician completes Form HSMV 72119 first so vision clearance is on file before using the MyDMV Portal."},{"q":"What is the difference between HSMV 72119 and HSMV 72010?","a":"HSMV 72119 is a preventive mature-driver vision form allowing convenient online/mail renewal at 80+, whereas HSMV 72010 is a referral issued after failing an in-office FLHSMV screening."}],
  },
  "GA": {
    "statute": "O.C.G.A. § 40-5-27",
    "dmvUrl": "https://dds.georgia.gov/medical-and-vision-information",
    "asOf": "2026-10",
    "verified": true,
    "field": "140°",
    "doctorForm": "Vision Report Form DDS-MR-274 (DS-274)",
    "retestPolicy": "Fail → the applicant is given Vision Report Form DS-274 to take to an optometrist/ophthalmologist; DDS evaluates the completed form to determine eligibility or restrictions."
  },
  "HI": {
    "statute": "Haw. Admin. R. § 19-122-356",
    "dmvUrl": "https://hidot.hawaii.gov/highways/files/2020/10/19-122-Ramseyer-8-3-20-FB.pdf",
    "asOf": "2026-10",
    "verified": true,
    "field": "70° or more using one eye",
    "doctorForm": "No named public form",
    "retestPolicy": "The vision test may be waived with a certificate of eye examination completed by a licensed ophthalmologist or optometrist within the last six months (§ 19-122-357). If the standards are not met, no license is issued; restrictions under § 19-122-358 may apply."
  },
  "IA": {
    "statute": "Iowa Code §§ 321.186, 321.186A; 761 IAC 604.5, 604.6, 604.8, 604.13",
    "dmvUrl": "https://iowadot.gov/mvd",
    "asOf": "2026-10",
    "verified": true,
    "field": "110° binocular / 100° monocular (denial thresholds; 140° binocular for no restriction)",
    "doctorForm": "Form 430032 Driver's Visual Acuity Report",
    "retestPolicy": "Fail → a vision report on Form 430032 signed by a licensed vision specialist within 30 days prior to submission; denial if binocular field is below 110° or monocular below 100°."
  },
  "ID": {
    "statute": "Idaho Code § 49-313 (official text not re-verified on legislature.idaho.gov)",
    "dmvUrl": "https://itd.idaho.gov/guide/new-to-idaho/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist for examination before licensing proceeds."
  },
  "IL": {
    "statute": "625 ILCS 5/6-103; 92 Ill. Adm. Code 1030.70",
    "dmvUrl": "https://www.ilsos.gov/departments/drivers/",
    "asOf": "2026-10",
    "verified": true,
    "field": "140° uninterrupted horizontal field (70° each side minimum)",
    "doctorForm": "Vision Specialist Report (Form DSD X 20)",
    "retestPolicy": "Applicants who fail the counter screening must submit a completed Vision Specialist Report (Form DSD X 20) from a licensed eye care professional before a driver license can be issued.",
    "renewalCycle": "Illinois uses a four-tier age schedule: 4 years for ages 21-80, 2 years for ages 81-86, and annual (1-year) renewal starting at age 87.",
    "onlineEligible": "Illinois Secretary of State Safe Driver Renewal invites eligible motorists with spotless records under age 75 to renew online or by mail; drivers age 75 and older must appear in person.",
    "seniorRules": "Illinois enforces progressive senior testing milestones: ages 75-80 require an in-person vision test every 4 years; ages 81-86 test vision every 2 years; age 87+ requires annual renewal with BOTH an in-person vision test and a behind-the-wheel road test.",
    "screeningFormat": "Illinois Driver Services facilities screen 20/40 unrestricted distance acuity (or 20/70 daylight-restricted floor) paired with a minimum 140-degree binocular peripheral field (105 degrees monocular).",
    "stateGuide": `
<p>Illinois maintains the clearest age-stratified renewal ladder in the United States under rules enforced by the Illinois Secretary of State Driver Services Department. Through age 74, Safe Driver letters frequently unlock mail or online renewal with zero facility visit. Starting at <strong>age 75</strong>, every renewal transitions to mandatory in-office screening: every 4 years for ages 75-80, shifting to every <strong>2 years</strong> at ages 81-86, and becoming <strong>annual (every 12 months)</strong> including a behind-the-wheel road examination at <strong>age 87 and older</strong>.</p>
      <p>Visually, Illinois mandates <strong>20/40 acuity</strong> and <strong>140 degrees binocular peripheral vision</strong> for full unrestricted privileges. Applicants testing between 20/41 and <strong>20/70</strong> qualify for a <strong>daylight-driving-only license</strong> when verified by a specialist on <strong>Form DSD X 20 (Vision Specialist Report)</strong>, which also documents monocular candidates meeting the 105-degree single-eye peripheral minimum.</p>
      <p>Test each eye individually on <a href="/checks/distance/">calibrated Snellen columns</a> and run our <a href="/checks/peripheral/">peripheral field check</a> before heading to an Illinois Driver Services facility.</p>
    `,
    "extraFaqs": [{"q":"At what age does Illinois require an annual driving and eye test?","a":"Starting at age 87, Illinois motorists must renew in person every single year and pass both the vision screening and a practical behind-the-wheel driving test."},{"q":"Can you pass the Illinois DMV eye test with 20/70 vision?","a":"Acuity between 20/41 and 20/70 can qualify for a daylight-only Illinois restricted license provided a specialist signs Form DSD X 20 and peripheral field criteria are met."},{"q":"What peripheral vision field does Illinois require for one-eyed drivers?","a":"While two-eyed drivers need 140 degrees total binocular field, documented monocular Illinois drivers can qualify with at least 105 degrees horizontal field in their functional eye via Form DSD X 20."}],
  },
  "IN": {
    "statute": "Ind. Code § 9-24-10-4",
    "dmvUrl": "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/vision-screening/",
    "asOf": "2026-10",
    "verified": true,
    "field": "120° horizontal (Form 22106; the 20/70 category requires proof of normal peripheral fields, at least 60° temporally in each eye)",
    "doctorForm": "Certificate of Vision (Eye Referral), State Form 22106",
    "retestPolicy": "Fail → the examiner provides State Form 22106 for an eye doctor; the examination is valid for six months from the exam date and must be mailed or faxed to the Driver Ability Department."
  },
  "KS": {
    "statute": "K.S.A. 8-295",
    "dmvUrl": "http://www.ksrevenue.gov/dovdriverreviewfaq.html",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not tested during routine screening",
    "doctorForm": "DV-124V",
    "retestPolicy": "The examiner gives the applicant vision form DV-124V and refers them to an ophthalmologist or optometrist of their choice; the exam must be within 90 days and the report returned to Driver Review.",
    "renewalCycle": "Kansas adult licenses are valid for 6 years between ages 21 and 64, shortening to a mandatory 4-year renewal interval starting at age 65.",
    "onlineEligible": "Drivers aged 21 to 64 holding compliant credentials can use the Kansas iKan online portal on alternating cycles with vision self-attestation; drivers aged 65+ cannot renew online and must appear in person.",
    "seniorRules": "Starting at age 65, Kansas requires an in-person Division of Vehicles renewal every 4 years accompanied by a mandatory counter vision check (or pre-signed specialist Form DV-124V).",
    "screeningFormat": "Kansas Division of Vehicles examiners test standard 20/40 acuity in at least one eye using counter optical units, with Form DV-124V accepted within 90 days if specialist evaluation is needed.",
    "stateGuide": `
<p>Kansas divides licensing administration cleanly at age 65. Residents aged 21 through 64 receive a 6-year card and qualify for convenient online renewals through the official <strong>iKan portal</strong> on alternating cycles, provided no disqualifying restrictions appear. Once a driver reaches <strong>age 65</strong>, Kansas drops remote eligibility and requires an in-person Division of Vehicles office visit every <strong>4 years</strong> with verified vision clearance.</p>
      <p>To pass unrestricted, at least one eye must demonstrate <strong>20/40 acuity</strong> with or without corrective lenses. Applicants unable to meet 20/40 inside the optical viewer at the county office receive <strong>Form DV-124V (Vision Statement)</strong>, which an optometrist or ophthalmologist must sign within <strong>90 calendar days</strong> before license issuance. Drivers wearing glasses or contacts receive corrective-lens restriction coding automatically, and reduced monocular/low-vision tiers may require an additional behind-the-wheel drive check.</p>
      <p>Run both monocular and binocular rounds on our <a href="/checks/distance/">calibrated distance acuity test</a> and check side vision with the <a href="/checks/peripheral/">peripheral field check</a> a month before your birthday renewal notice arrives.</p>
    `,
    "extraFaqs": [{"q":"At what age does Kansas stop allowing online license renewals?","a":"At age 65, Kansas requires in-person renewal every 4 years with a physical vision screening (iKan online renewal applies only to eligible ages 21-64)."},{"q":"How recent must Kansas Form DV-124V be?","a":"Vision examinations documented on Kansas Form DV-124V must be completed within 90 days prior to presenting them at a Division of Vehicles office."},{"q":"Do both eyes have to pass 20/40 in Kansas?","a":"At least one eye must achieve 20/40 with or without lenses for standard unrestricted status, with horizontal field verification applying for monocular cases."}],
  },
  "KY": {
    "statute": "KRS 186.577; 601 KAR 12:120",
    "dmvUrl": "https://drive.ky.gov/Drivers/Pages/Vision-Screening.aspx",
    "asOf": "2026-10",
    "verified": true,
    "field": "60° total horizontal (30° left/right of fixation, better eye)",
    "doctorForm": "TC 94-202",
    "retestPolicy": "Failing the initial screening results in referral to a vision specialist (Form TC 94-202); an applicant with 20/60 in the better eye meeting the 60° field standard remains eligible."
  },
  "LA": {
    "statute": "La. R.S. 32:408 (official text not re-verified on legis.la.gov)",
    "dmvUrl": "https://expresslane.la.gov/omv/drivers/personal-driver-s-licenses/new-licenses/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening (official degree standard unconfirmed)",
    "doctorForm": "Vision Examination Form (name unconfirmed)",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist; OMV reviews the specialist's report before issuing the license."
  },
  "MA": {
    "statute": "540 CMR 24.04",
    "dmvUrl": "https://www.mass.gov/info-details/medical-standards-for-passenger-class-d-and-motorcycle-class-m-drivers-licenses",
    "asOf": "2026-10",
    "verified": false,
    "field": "120° combined horizontal peripheral",
    "doctorForm": "Vision Screening Certificate",
    "retestPolicy": "Fail or decline the screening → submit an original Vision Screening Certificate completed by an optometrist or ophthalmologist for RMV review."
  },
  "MD": {
    "statute": "Md. Transportation Code § 16-110.1 (unconfirmed)",
    "dmvUrl": "https://mva.maryland.gov/drivers/Pages/vision-requirements.aspx",
    "asOf": "2026-10",
    "verified": false,
    "field": "140° continuous (unrestricted) / 110° (restricted)",
    "doctorForm": "Vision Screening Form DL-043A",
    "retestPolicy": "Best-effort (unverified): failing the screening requires Vision Screening Form DL-043A completed by an eye care professional; MVA determines eligibility and restrictions from the report."
  },
  "ME": {
    "statute": "29-A MRSA §§ 1258, 1303",
    "dmvUrl": "http://maine.gov/sos/bmv/licenses/vision.html",
    "asOf": "2026-10",
    "verified": true,
    "field": "Peripheral vision is screened; degree standard not stated on the public page",
    "doctorForm": "MVE-103 Eye Examinations Form",
    "retestPolicy": "Fail → the applicant may have the screening done at their own expense by an eye care specialist who completes Form MVE-103; the medical unit updates the record on receipt."
  },
  "MI": {
    "statute": "Mich. Admin. Code R 257.2",
    "dmvUrl": "https://www.michigan.gov/sos",
    "asOf": "2026-10",
    "verified": true,
    "field": "140° peripheral field",
    "doctorForm": "DA-4V Vision Statement of Examination",
    "retestPolicy": "Fail → submit a Vision Statement of Examination (DA-4V) completed by an ophthalmologist or optometrist; the Department reviews it for eligibility.",
    "renewalCycle": "Michigan issues standard adult driver's licenses on a 4-year cycle, requiring an in-person Secretary of State branch visit with a new counter vision screening and updated photograph at least once every 12 years.",
    "onlineEligible": "Most drivers under standard licensing can renew online or by mail on two consecutive 4-year intervals whenever the prior cycle included an in-person photo/vision visit and no medical holds exist on the driving record.",
    "seniorRules": "Michigan imposes zero shortened renewal schedules, extra written tests, or chronological-age road tests solely for senior motorists. Drivers of all adult ages follow the exact same 4-year / 12-year in-person schedule.",
    "screeningFormat": "Michigan Department of State (MDOS) branches administer Snellen counter box testing targeting 20/40 acuity and 140 degrees total horizontal peripheral vision with both eyes open (or 110 degrees for eligible single-eye setups).",
    "stateGuide": `
<p>Michigan drivers operate under a uniquely flexible 12-year in-person renewal cycle overseen by the Michigan Department of State (MDOS). Because two intermediate 4-year renewals can normally be completed remotely online or via mail with self-attestation, many motorists go over a decade between formal counter vision exams. When your 12-year branch-office notice arrives, arriving prepared prevents last-minute specialist deferrals.</p>
      <p>To pass unrestricted at a Michigan branch counter, you must demonstrate at least <strong>20/40 corrected or unaided visual acuity</strong> and a continuous horizontal visual field of <strong>140 degrees</strong>. Applicants whose better eye falls between <strong>20/50 and 20/70</strong> (with best spectacle correction) or whose monocular acuity drops sharply qualify only through a licensed eye specialist evaluation submitted on the MDOS <strong>Vision Statement of Examination (DA-4V)</strong>. Restricted tiers typically require outside rearview mirrors or daylight-only operation.</p>
      <p>Practice both binocular and single-eye letter reading at <a href="/checks/distance/">3-meter calibrated distance</a> and verify side-flash detection on our <a href="/checks/peripheral/">peripheral field check</a> before your Secretary of State branch appointment.</p>
    `,
    "extraFaqs": [{"q":"How often does Michigan require an in-person DMV eye test?","a":"Michigan mandates an in-person vision screening and updated photograph every 12 years (every third 4-year renewal), allowing remote online or mail renewals during the cycles in between if eligible."},{"q":"Does Michigan require special senior eye tests at age 65 or 70?","a":"No. Michigan sets zero age-based testing milestones or shorter senior renewal cycles based purely on age."},{"q":"What happens if I miss 20/40 at a Michigan Secretary of State branch?","a":"You will receive a specialist referral (Form DA-4V Vision Statement of Examination) to take to an ophthalmologist or optometrist for clinical review."}],
  },
  "MN": {
    "statute": "Minn. Stat. §§ 171.04, 171.13, 171.14; Minn. R. 7410.2400",
    "dmvUrl": "https://www.revisor.mn.gov/rules/7410.2400/",
    "asOf": "2026-10",
    "verified": true,
    "field": "105° horizontal diameter with one or both eyes",
    "doctorForm": "Vision Report PS30338-19",
    "retestPolicy": "Fail → submit a Vision Report completed by a licensed vision examiner; the exam must be within six months of the report."
  },
  "MO": {
    "statute": "§ 302.175 RSMo; 12 CSR 10-24.090",
    "dmvUrl": "https://dor.mo.gov/",
    "asOf": "2026-10",
    "verified": true,
    "field": "No field-degree standard in § 302.175 RSMo or 12 CSR 10-24.090",
    "doctorForm": "No numbered public form; statement from a registered optometrist or physician",
    "retestPolicy": "Fail → referred to a registered optometrist or physician; a conditional license may be issued under 12 CSR 10-24.090(6) based on the corrected readings (20/60–20/74 with daylight and 45 mph restrictions; 20/75–21/160 requires a departmental examination).",
    "renewalCycle": "Missouri issues licenses for 6 years for drivers aged 21 to 69 and shortens renewal validity to every 3 years starting at age 70 under Missouri statutes.",
    "onlineEligible": "Missouri offers NO online or mail renewal option for driver's licenses. Every Missouri driver must renew in person at a Department of Revenue contract license office.",
    "seniorRules": "At age 70 and older, Missouri cuts the standard 6-year renewal period in half to every 3 years and mandates a fresh in-person vision screening and road sign recognition test at each renewal.",
    "screeningFormat": "Missouri license office clerks administer both a Snellen distance screening (20/40 unrestricted) inside optical counters and a highway road sign identification test governed by 12 CSR 10-24.090.",
    "stateGuide": `
<p>Unlike states offering alternating online self-certification, Missouri requires every licensed driver to walk into a Missouri Department of Revenue contract office at every single renewal. Clerks administer two paired checks on counter optical hardware under <strong>§ 302.175 RSMo and 12 CSR 10-24.090</strong>: standard <strong>20/40 acuity</strong> (in at least one eye, binocularly) and an unweighted <strong>highway road-sign shape and legend check</strong>.</p>
      <p>If your better-eye screening drops below 20/40, Missouri refers you to a registered optometrist or physician whose written clinical statement allows conditional licensing under <strong>12 CSR 10-24.090(6)</strong>: drivers corrected between 20/60 and 20/74 qualify with daylight-only hours and 45 mph caps, while acuity between 20/75 and 20/160 requires a departmental examination.</p>
      <p>For seniors aged 70+, Missouri automatically enforces a <strong>3-year renewal rhythm</strong> with mandatory eye and sign checks each visit. Run our <a href="/us/test/">full counter practice simulator</a> days early so tired frames never cost you a DOR second trip.</p>
    `,
    "extraFaqs": [{"q":"Can you renew a Missouri driver's license online?","a":"No. Missouri does not permit online or mail driver license renewals for any age group; an in-person vision and road-sign screening at a contract license office is always mandatory."},{"q":"How often must seniors renew in Missouri?","a":"Beginning at age 70, Missouri driver licenses expire every 3 years instead of 6 years, with vision and road-sign tests required every renewal."},{"q":"How do Missouri conditional vision licenses work under 12 CSR 10-24.090?","a":"When referred after missing 20/40, a registered optometrist or physician certifies best-corrected acuity: 20/60 to 20/74 qualifies for daylight and 45 mph restrictions, while 20/75 to 20/160 requires a departmental exam."}],
  },
  "MS": {
    "statute": "31 Miss. Code R. 1-9.4 (official text not re-verified on sos.ms.gov)",
    "dmvUrl": "https://www.dps.ms.gov/",
    "asOf": "2026-10",
    "verified": false,
    "field": "170° both eyes / 70° temporal + 35° nasal one eye (non-official source; official confirmation pending)",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist for examination before licensing proceeds."
  },
  "MT": {
    "statute": "MCA 61-5-107",
    "dmvUrl": "https://mvdmt.gov/new-driver-license/adult-driver-license/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "Eye Evaluation 22-1801",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care professional, who completes Eye Evaluation form 22-1801 for MVD review."
  },
  "NC": {
    "statute": "N.C. Gen. Stat. § 20-7 (vision provision unconfirmed)",
    "dmvUrl": "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Pages/default.aspx",
    "asOf": "2026-10",
    "verified": false,
    "field": "60° horizontal using one eye, i.e., 30° each side of fixation (non-official source; official confirmation pending)",
    "doctorForm": "Vision Specialist Form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist, who records the horizontal field of view in each eye on the Vision Specialist Form for DMV review."
  },
  "ND": {
    "statute": "N.D. Admin. Code 37-08-01-05",
    "dmvUrl": "https://www.dot.nd.gov/",
    "asOf": "2026-10",
    "verified": false,
    "field": "105° horizontal (totaling temporal readings of both eyes, or temporal + nasal in one eye)",
    "doctorForm": "Field of vision report (per rule restriction code f)",
    "retestPolicy": "Per rule 37-08-01-05, applicants not meeting standards face restriction codes including daylight-only driving, vision-specialist recommendations, recheck within 1–2 years, road test, and outside-mirror requirements."
  },
  "NE": {
    "statute": "Neb. Rev. Stat. § 60-4,118",
    "dmvUrl": "http://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf",
    "asOf": "2026-10",
    "verified": true,
    "field": "140° total horizontal field (120–139° → restriction F; 100–119° → restrictions F, V, G, X; below 100° denied)",
    "doctorForm": "Statement of Vision (DMV06-181)",
    "retestPolicy": "Fail → the examiner requires an optometrist's or ophthalmologist's Statement of Vision certifying the reading within 90 days of the license examination; DMV applies restrictions per the field-vision schedule."
  },
  "NH": {
    "statute": "N.H. Admin. R. Saf-C 1004.05, 1004.08",
    "dmvUrl": "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not tested during routine screening",
    "doctorForm": "Form DSMV 61 Eye Examination",
    "retestPolicy": "Fail → the applicant must have an eye doctor certify capability to drive safely on Form DSMV 61; the completed form must be returned within 30 days."
  },
  "NJ": {
    "statute": "N.J.S.A. 39:3-10; N.J. Admin. Code § 13:21-8.10",
    "dmvUrl": "https://www.nj.gov/mvc/",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not tested during routine screening",
    "doctorForm": "Form ST-14",
    "retestPolicy": "Fail → visit your doctor and complete Form ST-14; return it to MVC for review."
  },
  "NM": {
    "statute": "NMSA § 66-5-9",
    "dmvUrl": "https://www.mvd.newmexico.gov/chapter-2-non-commercial-license/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "Vision Report MVD-10125",
    "retestPolicy": "Best-effort (unverified): failing the screening requires a Vision Report (MVD-10125) completed by an eye care professional; MVD reviews it for eligibility."
  },
  "NV": {
    "statute": "NRS 483.330; NAC 483.340 (both unconfirmed)",
    "dmvUrl": "https://www.leg.state.nv.us/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening (official confirmation pending)",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist for examination before licensing proceeds."
  },
  "NY": {
    "statute": "N.Y. Veh. & Traf. Law § 502; 15 NYCRR § 3.2",
    "dmvUrl": "https://dmv.ny.gov/driver-license/vision-requirements-and-restrictions",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not part of routine counter vision screening (acuity 20/40 required)",
    "doctorForm": "MV-619 — Vision Test Report",
    "retestPolicy": "Applicants who fail the counter screening can take the test with an approved provider enrolled in the NY DMV Vision Registry or submit Form MV-619 completed by a licensed vision professional."
  },
  "OH": {
    "statute": "Ohio R.C. 4507.12; Ohio Admin. Code 4501:1-1-20",
    "dmvUrl": "https://www.bmv.ohio.gov/",
    "asOf": "2026-10",
    "verified": true,
    "field": "70° one side / 45° other side of fixation",
    "doctorForm": "BMV 6317 Vision Screening Referral",
    "retestPolicy": "Fail → the examiner provides BMV 6317 for completion by an ophthalmologist or optometrist; the completed form must be returned within 30 days.",
    "renewalCycle": "Ohio driver licenses run on a standard 4-year cycle (with an optional 8-year validity tier under Ohio BMV rules), requiring a counter vision screening on every in-person deputy registrar renewal.",
    "onlineEligible": "Ohio motorists aged 21 to 64 holding a standard or compliant card may renew online for one eligible cycle via the Ohio BMV portal before returning in person for photo and vision verification.",
    "seniorRules": "Ohio does not shorten license validity periods or mandate road re-examinations strictly due to driver age. Every adult renewing at a Deputy Registrar office completes the standard counter box screening.",
    "screeningFormat": "Deputy Registrar counters test binocular acuity (20/40 standard), individual eye resolution (20/30 better eye requirement if one eye is weaker than standard), and a minimum 70-degree temporal field on each side.",
    "stateGuide": `
<p>Ohio Bureau of Motor Vehicles (BMV) Deputy Registrar locations screen every walk-in applicant under clear two-tier visual rules codified in the Ohio Administrative Code. Unrestricted driving requires <strong>20/40 binocular acuity</strong> (or <strong>20/30</strong> in the better eye when paired with monocular weakness in the fellow eye) plus a full <strong>70-degree horizontal field on each side</strong>.</p>
      <p>When distance sharpness falls into the <strong>20/50 to 20/70 binocular</strong> band (or 20/40 to 20/60 with monocular vision), examiners issue a formal referral packet carrying <strong>Form BMV 6317</strong>. Under Ohio procedure, your optometrist or ophthalmologist must complete and return BMV 6317 within <strong>30 calendar days</strong>. Eligible restricted drivers commonly receive daylight-only privileges (sunrise to sunset) and mandatory dual outside mirrors.</p>
      <p>Ohio also runs one of the country's clearest legal pathways for low-vision drivers using <strong>bioptic telescopic glasses</strong> paired with certified specialist training. Test both eyes individually with <a href="/checks/distance/">calibrated Snellen columns</a> ahead of your Deputy Registrar visit so minor eyeglass updates happen beforehand.</p>
    `,
    "extraFaqs": [{"q":"How long do you have to return Ohio Form BMV 6317?","a":"Ohio requires drivers referred after a failed counter screening to have their eye care specialist complete and submit Form BMV 6317 within 30 days."},{"q":"What is the Ohio monocular vision cutoff?","a":"If one eye is significantly impaired or blind, the better eye must read at least 20/30 unrestricted (or 20/40 to 20/60 for daylight restrictions) alongside an adequate horizontal field."},{"q":"Can you pass the Ohio DMV eye test with glasses or contacts?","a":"Yes. Glasses and contact lenses are permitted at every Deputy Registrar screening and result in a corrective lens restriction on your Ohio card."}],
  },
  "OK": {
    "statute": "47 O.S. § 6-110; OAC 670:15-11-7",
    "dmvUrl": "https://oklahoma.gov/content/dam/ok/en/dps/Vision%20Screening%20Report.pdf",
    "asOf": "2026-10",
    "verified": false,
    "field": "70° in the horizontal meridian (official confirmation pending)",
    "doctorForm": "Visual Screening Report",
    "retestPolicy": "Fail → referred to the DPS Medical Standards Section; an ophthalmologist/optometrist exam within 60 days is required, and the completed report is returned to DPS (PO Box 53004, Oklahoma City) or faxed to 405-497-7035."
  },
  "OR": {
    "statute": "ORS 807.070, 807.090; OAR 735-062-0050",
    "dmvUrl": "https://www.oregon.gov/odot/DMV/Pages/DriverID/licenseget.aspx",
    "asOf": "2026-10",
    "verified": true,
    "field": "110° intact horizontal visual field",
    "doctorForm": "DMV Form 735-24 — Certificate of Vision",
    "retestPolicy": "Unrestricted driving requires 110° field and 20/40 acuity. Drivers failing counter screening take Form 735-24 to a licensed eye specialist; acuity between 20/40 and 20/70 qualifies for daylight-only restrictions."
  },
  "PA": {
    "statute": "75 Pa.C.S. § 1508; 67 Pa. Code § 83.3",
    "dmvUrl": "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/applying-for-a-learners-permit",
    "asOf": "2026-10",
    "verified": true,
    "field": "120° combined horizontal field",
    "doctorForm": "DL-102 Report of Eye Examination",
    "retestPolicy": "Fail → submit Form DL-102 completed by an optometrist, ophthalmologist, physician assistant, CRNP, or licensed physician; return it to the Bureau of Driver Licensing by mail, fax, or email for review."
  },
  "RI": {
    "statute": "R.I. Gen. Laws § 31-10 (exact section unconfirmed)",
    "dmvUrl": "https://dmv.ri.gov/media/486/download?language=en",
    "asOf": "2026-10",
    "verified": false,
    "field": "115° horizontal two-eyed / 40° nasal + 75° temporal one-eyed",
    "doctorForm": "Eye Exam Card (rev. 3/2025, valid 1 year)",
    "retestPolicy": "Best-effort (unverified): failing the screening requires an Eye Exam Card completed by an eye care professional; the DMV reviews it for eligibility."
  },
  "SC": {
    "statute": "S.C. Code § 56-1-220",
    "dmvUrl": "https://dmv.sc.gov/sites/scdmv/files/2026-01/412-IS.pdf",
    "asOf": "2026-10",
    "verified": false,
    "field": "120° horizontal both eyes / 70° temporal + 35° nasal one eye (non-official source; official confirmation pending)",
    "doctorForm": "Certificate of Vision Examination, SCDMV Form 412-NC (non-commercial) / 412-CDL",
    "retestPolicy": "If you are unable to pass the SCDMV vision screening at a branch office, you must have your eyes examined by a licensed eye care professional; the Certificate of Vision Examination is valid 36 months from the exam date."
  },
  "SD": {
    "statute": "SDCL 32-12 (exact section unconfirmed)",
    "dmvUrl": "https://www.sd.gov/dps?id=kb_article_view&sysparm_article=KB0043731",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening (official confirmation pending)",
    "doctorForm": "Vision Statement",
    "retestPolicy": "Fail → the applicant must obtain a vision statement from an optometrist or ophthalmologist before licensing can continue."
  },
  "TN": {
    "statute": "Tenn. Comp. R. & Regs. 1340-01-13-.10",
    "dmvUrl": "https://www.tn.gov/safety/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist for examination before licensing proceeds."
  },
  "TX": {
    "statute": "37 Tex. Admin. Code § 15.51",
    "dmvUrl": "https://www.dps.texas.gov/section/driver-license",
    "asOf": "2026-10",
    "verified": true,
    "field": "Not part of routine counter vision screening",
    "doctorForm": "DL-63 — Certificate of Physical Examination (Vision Specialist)",
    "retestPolicy": "Applicants failing the counter screening are issued Form DL-63 for an optometrist or ophthalmologist to complete. TxDPS reviews the specialist evaluation to apply corrective lens or daylight restrictions."
  },
  "UT": {
    "statute": "Utah Code § 53-3-303 (unconfirmed)",
    "dmvUrl": "https://dld.utah.gov/eye-test/",
    "asOf": "2026-10",
    "verified": false,
    "field": "90° in at least one eye (counter test)",
    "doctorForm": "Certificate of Visual Examination (DLD-49)",
    "retestPolicy": "Best-effort (unverified): failing the counter test requires a Certificate of Visual Examination (DLD-49) completed by an eye care professional; the DLD reviews it for eligibility."
  },
  "VA": {
    "statute": "Va. Code § 46.2-311",
    "dmvUrl": "https://www.dmv.virginia.gov/licenses-ids/license/medical/visual-field",
    "asOf": "2026-10",
    "verified": true,
    "field": "110° total horizontal field in one or both eyes (70° for daylight-only restriction)",
    "doctorForm": "MED 4 — Customer Vision Report",
    "retestPolicy": "An unrestricted license requires 20/40 acuity and at least 110° horizontal field. A daylight-only restricted license may be issued with 20/70 acuity and 70° horizontal field. An eye specialist report on Form MED 4 is required if screening fails."
  },
  "VT": {
    "statute": "23 V.S.A. § 631",
    "dmvUrl": "https://dmv.vermont.gov/tags/medical",
    "asOf": "2026-10",
    "verified": false,
    "field": "60° temporal in each eye (60° temporal + nasal in one eye) — best-effort; official degree unconfirmed",
    "doctorForm": "Driver Eyesight Evaluation",
    "retestPolicy": "Best-effort (unverified): failing the screening results in the DMV requesting a Driver Eyesight Evaluation completed by an eye care professional."
  },
  "WA": {
    "statute": "RCW 46.20.041, 46.20.305; WAC 308-104-010",
    "dmvUrl": "https://dol.wa.gov/forms/view/500033/download",
    "asOf": "2026-10",
    "verified": true,
    "field": "110° in the horizontal meridian",
    "doctorForm": "Visual Examination Report DR-500-033",
    "retestPolicy": "Acuity worse than 20/40 with both eyes (or other significant visual limitation) → eye examination by a competent vision authority; 20/50–20/100 or uncorrectable problems → reexamination; worse than 20/100 → fail; field below 110° in the horizontal meridian is flagged on the Visual Examination Report.",
    "renewalCycle": "Washington State issues standard adult driver's licenses on a 6-year renewal schedule (with transitional 8-year options managed through the Department of Licensing).",
    "onlineEligible": "Drivers under age 70 may alternate remote License Express online renewal cycles when holding no disqualifiers; drivers age 70 and older must renew in person at a DOL office.",
    "seniorRules": "At age 70 and older, Washington strictly prohibits online and mail driver's license renewals so all senior motorists undergo an in-person vision screening at every licensing office visit.",
    "screeningFormat": "Washington Department of Licensing offices evaluate distance visual acuity against the 20/40 baseline alongside a minimum 110-degree binocular horizontal visual field.",
    "stateGuide": `
<p>The Washington State Department of Licensing (DOL) manages routine vision compliance by gating remote convenience renewals strictly below age 70. Younger drivers can alternate online renewals through <strong>License Express</strong> without sitting in line every term, whereas every Washington motorist <strong>age 70 and older</strong> must visit a licensing office in person to take the counter eye screening and update their photograph.</p>
      <p>Washington enforces two core benchmarks: <strong>20/40 or better visual acuity</strong> (with or without eyewear) and a horizontal peripheral span of at least <strong>110 degrees binocularly</strong>. If screening indicates reduced acuity between 20/50 and 20/100 or a compromised side field, the examiner provides a <strong>Visual Examination Report (Form DR-500-033)</strong> for specialist review. Under medical evaluation, DOL determines whether updated spectacles resolve the issue, whether a supplemental drive skill exam or bioptic training assessment is warranted, or whether daytime-only restrictions and special outside mirrors should be assigned before printing your new card.</p>
      <p>Confirm both sharp distance clarity and side-angle awareness via our <a href="/checks/distance/">distance Snellen test</a> and <a href="/checks/peripheral/">visual field tool</a> days ahead of your DOL office or License Express renewal.</p>
    `,
    "extraFaqs": [{"q":"Can seniors 70+ renew a Washington driver license online?","a":"No. Washington State requires drivers aged 70 and older to renew in person at a DOL office so a physical vision screening can be completed."},{"q":"What peripheral vision angle does Washington require?","a":"Washington requires a continuous horizontal field of vision of at least 110 degrees to hold a standard passenger license."},{"q":"What form does a Washington eye doctor fill out after a failed test?","a":"Your optometrist or ophthalmologist completes Washington DOL Visual Examination Report Form DR-500-033."}],
  },
  "WI": {
    "statute": "Wis. Admin. Code § Trans 102.13 / Trans 112.15",
    "dmvUrl": "https://wisconsindot.gov/Pages/dmv/license-drvs/rnew-and-chge/vision-standards.aspx",
    "asOf": "2026-10",
    "verified": true,
    "field": "70° total horizontal field of vision for unrestricted licensing",
    "doctorForm": "MV3030V — Certificate of Vision Examination",
    "retestPolicy": "Vision worse than 20/40 or visual field less than 70 degrees requires referral to an eye specialist via Form MV3030V, possible driving skills evaluation, and restrictions such as daylight-only driving."
  },
  "WV": {
    "statute": "W. Va. Code § 17B-2-3 (unconfirmed)",
    "dmvUrl": "https://transportation.wv.gov/DMV/",
    "asOf": "2026-10",
    "verified": false,
    "field": "Not tested during routine screening (official confirmation pending)",
    "doctorForm": "No named public form",
    "retestPolicy": "Best-effort (unverified): failing the screening results in referral to an eye care specialist for examination before licensing proceeds."
  },
  "WY": {
    "statute": "W.S. § 31-7-114",
    "dmvUrl": "https://dot.state.wy.us/",
    "asOf": "2026-10",
    "verified": false,
    "field": "120° total combined horizontal field with both eyes (90° in the other eye if blind in one eye) — per WYDOT vision evaluation form text",
    "doctorForm": "Confidential Driver Vision Evaluation",
    "retestPolicy": "Fail the screening → obtain a vision statement from an eye specialist; combined acuity of 20/50–20/100 may require a driving skills test."
  }
};

/** Every state, with the primary-source verification layer merged in. */
export const STATES_VERIFIED: StateVisionRecord[] = BASE.map((s) => {
  const v = VERIFIED_DATA[s.code];
  return {
    ...s,
    statute: v ? v.statute : null,
    dmvUrl: v ? v.dmvUrl : null,
    asOf: v ? v.asOf : null,
    verified: Boolean(v && v.verified),
    field: v ? v.field : null,
    doctorForm: v ? v.doctorForm : null,
    retestPolicy: v ? v.retestPolicy : null,
    renewalCycle: v?.renewalCycle,
    onlineEligible: v?.onlineEligible,
    seniorRules: v?.seniorRules,
    screeningFormat: v?.screeningFormat,
    stateGuide: v?.stateGuide,
    extraFaqs: v?.extraFaqs,
  };
});

export const VERIFIED_COUNT = STATES_VERIFIED.filter((s) => s.verified).length;

export const VERIFIED_STATE_SLUGS = new Set(
  STATES_VERIFIED.filter((s) => s.verified).map((s) => s.name.toLowerCase().replace(/ /g, "-"))
);
