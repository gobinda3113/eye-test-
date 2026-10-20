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
    "retestPolicy": "Applicants who fail the eyesight test must obtain an eye examination from a licensed professional; minimum acuity of 20/70 is required with corrective lenses."
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
    "dmvUrl": "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/vision-requirements/",
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
    "retestPolicy": "Drivers unable to achieve 20/40 vision must have an eye specialist complete Form HSMV 72010. Acuity down to 20/70 in either eye allows restricted licensure; worse than 20/70 in both eyes results in license denial."
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
    "retestPolicy": "Applicants who fail the counter screening must submit a completed Vision Specialist Report (Form DSD X 20) from a licensed eye care professional before a driver license can be issued."
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
    "retestPolicy": "The examiner gives the applicant vision form DV-124V and refers them to an ophthalmologist or optometrist of their choice; the exam must be within 90 days and the report returned to Driver Review."
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
    "retestPolicy": "Fail → submit a Vision Statement of Examination (DA-4V) completed by an ophthalmologist or optometrist; the Department reviews it for eligibility."
  },
  "MN": {
    "statute": "Minn. Stat. §§ 171.04, 171.13, 171.14; Minn. R. 7410.2400",
    "dmvUrl": "https://dps.mn.gov/",
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
    "retestPolicy": "Fail → referred to a registered optometrist or physician; a conditional license may be issued under 12 CSR 10-24.090(6) based on the corrected readings (20/60–20/74 with daylight and 45 mph restrictions; 20/75–21/160 requires a departmental examination)."
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
    "dmvUrl": "https://dmv.ny.gov/driver-license/vision-requirements",
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
    "retestPolicy": "Fail → the examiner provides BMV 6317 for completion by an ophthalmologist or optometrist; the completed form must be returned within 30 days."
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
    "verified": true,
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
    "retestPolicy": "Acuity worse than 20/40 with both eyes (or other significant visual limitation) → eye examination by a competent vision authority; 20/50–20/100 or uncorrectable problems → reexamination; worse than 20/100 → fail; field below 110° in the horizontal meridian is flagged on the Visual Examination Report."
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
  };
});

export const VERIFIED_COUNT = STATES_VERIFIED.filter((s) => s.verified).length;

export const VERIFIED_STATE_SLUGS = new Set(
  STATES_VERIFIED.filter((s) => s.verified).map((s) => s.name.toLowerCase().replace(/ /g, "-"))
);
