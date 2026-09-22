/**
 * The 50-state table plus a verification layer.
 *
 * The base rows (acuity, restriction, renewal cadence) come from
 * src/scripts/data.js — the same array the interactive home-page table uses —
 * so the two can never drift. This module adds the citation layer that the
 * /states/ page renders: the statute, the official agency URL and the date the
 * row was last checked.
 *
 * Only the five states and the federal CDL standard that were checked against
 * a primary source carry verified: true. Everything else is explicitly marked
 * as unverified so the page never implies more certainty than it has.
 */

import { STATES as BASE } from "../scripts/data.ts";

export const AS_OF = "2026-09";

export const CDL = {
  code: "CDL",
  name: "Interstate CDL / DOT medical card",
  need: "each",
  min: "20/40",
  restrict: null,
  renewal: "every",
  statute: "49 C.F.R. \u00a7 391.41(b)(10)",
  dmvUrl: "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-391/subpart-E/section-391.41",
  asOf: AS_OF,
  verified: true,
  field: "70\u00b0 in each eye, 130\u00b0 together",
  colour: "red, green and amber",
};

const VERIFIED = {
  CA: {
    statute: "Cal. Veh. Code \u00a7 12804.9",
    dmvUrl: "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/vision-requirements/",
    asOf: AS_OF,
    verified: true,
    field: "Not part of the licence vision screen",
  },
  NY: {
    statute: "N.Y. Veh. & Traf. Law \u00a7 502; form MV-619",
    dmvUrl: "https://dmv.ny.gov/driver-license/vision-requirements",
    asOf: AS_OF,
    verified: true,
    field: "Not part of the licence vision screen",
  },
  TX: {
    statute: "37 Tex. Admin. Code \u00a7 15.51",
    dmvUrl: "https://www.dps.texas.gov/section/driver-license",
    asOf: AS_OF,
    verified: true,
    field: "Not part of the licence vision screen",
  },
  FL: {
    statute: "Fla. Stat. \u00a7 322.12; Fla. Admin. Code R. 15A-1.012",
    dmvUrl: "https://www.flhsmv.gov/driver-licenses-id-cards/medical-review/vision-standards/",
    asOf: AS_OF,
    verified: true,
    field: "130\u00b0 (50\u00b0 each side)",
  },
  IL: {
    statute: "625 ILCS 5/6-103",
    dmvUrl: "https://www.ilsos.gov/departments/drivers/",
    asOf: AS_OF,
    verified: true,
    field: "140\u00b0 (70\u00b0 each side)",
  },
};

/** Every state, with the verification layer merged in. */
export const STATES_VERIFIED = BASE.map((s) => {
  const v = VERIFIED[s.code];
  return {
    ...s,
    statute: v ? v.statute : null,
    dmvUrl: v ? v.dmvUrl : null,
    asOf: v ? v.asOf : null,
    verified: Boolean(v),
    field: v ? v.field : null,
  };
});

export const VERIFIED_COUNT = STATES_VERIFIED.filter((s) => s.verified).length;
