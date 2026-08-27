export interface DocumentItem {
  id: string;
  name: string;
  type: "mandatory_original" | "mandatory_photocopy" | "optional_backup";
  format: string;
  importance: "Strictly Required" | "Crucial" | "Recommended" | "Backup";
  description: string;
}

export const mandatoryOriginalDocuments: DocumentItem[] = [
  {
    id: "doc-orig-1",
    name: "Transfer Certificate (TC)",
    type: "mandatory_original",
    format: "Original physical certificate issued by previous school/college",
    importance: "Strictly Required",
    description: "Must be submitted in original at Pravesh Bhawan during reporting."
  },
  {
    id: "doc-orig-2",
    name: "Migration Certificate",
    type: "mandatory_original",
    format: "Original certificate or verified DigiLocker color printout",
    importance: "Strictly Required",
    description: "Essential for university enrolment. If from DigiLocker, keep the active DigiLocker app available on your mobile device."
  },
  {
    id: "doc-orig-3",
    name: "Character Certificate",
    type: "mandatory_original",
    format: "Original physical certificate issued by institution last attended",
    importance: "Crucial",
    description: "Required for student registration and hostel application."
  },
  {
    id: "doc-orig-4",
    name: "Class 10 (High School) Marksheet & Passing Certificate",
    type: "mandatory_original",
    format: "Original document(s)",
    importance: "Strictly Required",
    description: "Used as primary age proof and verification of candidate, father, and mother's names in BLOCK letters."
  },
  {
    id: "doc-orig-5",
    name: "Class 12 (10+2 / Intermediate) Marksheet & Certificate",
    type: "mandatory_original",
    format: "Original document(s)",
    importance: "Strictly Required",
    description: "Qualifying examination mark verification for UG eligibility and hostel merit ranking."
  },
  {
    id: "doc-orig-6",
    name: "Category / Caste Certificate (SC / ST / OBC-NCL / EWS)",
    type: "mandatory_original",
    format: "Original certificate in Central Government format",
    importance: "Strictly Required",
    description: "Required for all reserved quota admissions. OBC-NCL certificate must be current and valid for Central Educational Institutions."
  },
  {
    id: "doc-orig-7",
    name: "Aadhaar Card",
    type: "mandatory_original",
    format: "Original Government Photo ID",
    importance: "Strictly Required",
    description: "Mandatory identification document required for university registration and APAAR linking."
  },
  {
    id: "doc-orig-8",
    name: "CUET (UG) Scorecard & Admit Card",
    type: "mandatory_original",
    format: "Official NTA portal printouts",
    importance: "Crucial",
    description: "Evidence of candidate CUET subject scores and roll number."
  },
  {
    id: "doc-orig-9",
    name: "Samarth Admission Slip & Fee Receipt",
    type: "mandatory_original",
    format: "Printout of official paid receipt from university portal",
    importance: "Strictly Required",
    description: "Proof of completed online fee remittance for course allotment."
  },
  {
    id: "doc-orig-10",
    name: "Recent Passport Size Photographs",
    type: "mandatory_original",
    format: "2 to 4 recent color passport photos",
    importance: "Strictly Required",
    description: "One photo pasted on the Enrolment Form, additional photos submitted at verification counter."
  },
  {
    id: "doc-orig-11",
    name: "Duly Filled Enrolment Form (नामांकन आवेदन पत्र)",
    type: "mandatory_original",
    format: "Official university proforma (Hindi/English)",
    importance: "Strictly Required",
    description: "Completed in clear capital letters, signed and dated by the applicant."
  },
  {
    id: "doc-orig-12",
    name: "Signed Anti-Ragging Declaration Undertaking",
    type: "mandatory_original",
    format: "Prescribed UGC / University declaration",
    importance: "Strictly Required",
    description: "Must be signed by both the student and the parent/guardian."
  }
];

export const photocopyInstructions = {
  title: "Self-Attested Photocopy Sets (2 Full Sets Required)",
  rule: "Prepare TWO independent folders containing complete photocopies of all mandatory documents.",
  instructions: [
    "Write 'Self Attested' in clear handwriting on each photocopy sheet.",
    "Place the student's full signature and the current date on every page.",
    "Ensure both front and back sides of certificates (especially Aadhaar and Marksheets) are copied.",
    "Keep Set 1 and Set 2 organized in separate protective folders."
  ]
};

export const optionalBackupDocuments: DocumentItem[] = [
  {
    id: "opt-1",
    name: "Income Certificate",
    type: "optional_backup",
    format: "Government issued certificate",
    importance: "Recommended",
    description: "Useful for fee concession considerations or government scholarship applications."
  },
  {
    id: "opt-2",
    name: "Domicile / Residence Certificate",
    type: "optional_backup",
    format: "State Government certificate",
    importance: "Backup",
    description: "Provides supplementary address verification if required."
  },
  {
    id: "opt-3",
    name: "APAAR ID / ABC (Academic Bank of Credits) Slip",
    type: "optional_backup",
    format: "DigiLocker / ABC printout",
    importance: "Recommended",
    description: "Digital academic registry ID for credit carry-forward under NEP."
  },
  {
    id: "opt-4",
    name: "Parent/Guardian ID Copy",
    type: "optional_backup",
    format: "Photocopy of Parent's Aadhaar / Voter ID",
    importance: "Backup",
    description: "Supplementary record for signature verification on the anti-ragging affidavit."
  }
];
