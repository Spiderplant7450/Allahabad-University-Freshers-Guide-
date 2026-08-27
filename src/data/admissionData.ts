export interface AdmissionStep {
  id: number;
  stepNumber: string;
  title: string;
  portal: string;
  portalUrl?: string;
  description: string;
  keyInstructions: string[];
}

export const admissionWorkflow: AdmissionStep[] = [
  {
    id: 1,
    stepNumber: "Step 1",
    title: "CUET (UG) Registration & Examination",
    portal: "NTA CUET Portal",
    portalUrl: "https://exams.nta.ac.in/CUET-UG",
    description: "Candidates appear for CUET (UG) conducted by the National Testing Agency (NTA). For B.A. programmes, candidates must attempt at least one language (English/Hindi), at least one domain subject, and the compulsory General Aptitude Test (GAT).",
    keyInstructions: [
      "Mandatory Sections: 1 Language + 1 Domain + General Test",
      "Ensure identity details match High School certificate exactly",
      "Retain CUET Admit Card & Scorecard safely"
    ]
  },
  {
    id: 2,
    stepNumber: "Step 2",
    title: "Samarth Portal Registration & Programme Selection",
    portal: "University of Allahabad Samarth Portal",
    portalUrl: "https://alldunivcuet.samarth.edu.in/",
    description: "After scorecards are released by NTA, candidates register on the University of Allahabad Samarth Portal. Candidates fill in educational qualifications, upload documents, enter APAAR/ABC ID, and pay the non-refundable registration fee.",
    keyInstructions: [
      "Registration Fee: ₹300 (UR / OBC-NCL / EWS) | ₹150 (SC / ST / PwD)",
      "Provide valid Aadhaar Card and APAAR/ABC ID",
      "Upload recent photo, signature, and Central Government format Caste Certificate (if applicable)"
    ]
  },
  {
    id: 3,
    stepNumber: "Step 3",
    title: "Subject Combination Preferences Submission",
    portal: "Samarth Counselling Window",
    description: "Candidates select and submit a comprehensive list of 20–25 preferred B.A. subject combinations (two Majors + one Minor) from the approved 81 combinations offered by the Faculty of Arts.",
    keyInstructions: [
      "Submit 20–25 combination choices in order of preference",
      "Combinations are allocated based on merit score and seat availability",
      "Correction window is provided briefly before allotment rounds"
    ]
  },
  {
    id: 4,
    stepNumber: "Step 4",
    title: "Cut-off Rounds & Online Fee Payment",
    portal: "Samarth Admission Portal",
    description: "The University releases successive cut-off marks for different social categories. Qualified applicants must accept their allotted combination and pay the course admission fee within the designated 48-hour window.",
    keyInstructions: [
      "Check daily cut-off notifications published on allduniv.ac.in",
      "Pay the prescribed admission fee online before the round deadline",
      "Download and print the official Admission Slip / Fee Receipt"
    ]
  },
  {
    id: 5,
    stepNumber: "Step 5",
    title: "Physical Document Verification at Pravesh Bhawan",
    portal: "Pravesh Bhawan (Chatham Lines Campus)",
    description: "Admitted candidates report physically in person to Pravesh Bhawan strictly according to the date and time slot assigned to their computed merit score band with all original certificates, self-attested photocopies, and filled forms.",
    keyInstructions: [
      "Report strictly on the scheduled date and time slot",
      "Submit filled Enrolment Form & signed Anti-Ragging Undertaking",
      "Submit original Migration Certificate and Transfer Certificate (TC)"
    ]
  },
  {
    id: 6,
    stepNumber: "Step 6",
    title: "Departmental Enrolment & Admission Card Issuance",
    portal: "Concerned Academic Departments (Arts Campus)",
    description: "Following document verification at Pravesh Bhawan, students report to each of their three allotted departments (Major 1, Major 2, Minor) on the Arts Campus to complete departmental enrolment and receive their final Admission Cards.",
    keyInstructions: [
      "Enrol in Major 1, Major 2, and Minor department offices",
      "Collect Admission Cards and Time Tables",
      "No change of subject combination is entertained after Admission Card issuance"
    ]
  }
];

export interface CutoffRoundExample {
  round: string;
  timeline: string;
  categories: string;
  notes: string;
}

export const cutoffRoundsStructure: CutoffRoundExample[] = [
  {
    round: "1st Cut-off Round",
    timeline: "Late July",
    categories: "Unreserved (UR), ST",
    notes: "Initial high-merit cutoff opening admissions for top-scoring candidates."
  },
  {
    round: "2nd Cut-off Round",
    timeline: "Early August",
    categories: "Unreserved (UR), ST",
    notes: "Expanded score threshold for remaining general seats."
  },
  {
    round: "3rd Cut-off Round",
    timeline: "Early August",
    categories: "Unreserved (UR), ST",
    notes: "Further merit relaxation for UR and ST categories."
  },
  {
    round: "4th Cut-off Round",
    timeline: "Mid-August",
    categories: "UR, ST, Employee Ward Quota",
    notes: "Opening for supernumerary university ward quotas alongside general lists."
  },
  {
    round: "5th Cut-off Round",
    timeline: "Mid-August",
    categories: "UR, EWS, OBC-NCL, SC, ST",
    notes: "Comprehensive multi-category round opening EWS, OBC, and SC quota lists."
  },
  {
    round: "6th Cut-off Round & onwards",
    timeline: "Mid-to-Late August",
    categories: "EWS, OBC-NCL, SC",
    notes: "Subsequent rounds for remaining category vacancies until seats fill."
  }
];

export interface VerificationSlot {
  dayNumber: string;
  datePattern: string;
  morningSlot: {
    time: string;
    scoreBand: string;
  };
  afternoonSlot: {
    time: string;
    scoreBand: string;
  };
}

export const verificationSlotsSchedule: VerificationSlot[] = [
  {
    dayNumber: "Day 1",
    datePattern: "Phase I (Day 1)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "510 & above" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "509 – 486" }
  },
  {
    dayNumber: "Day 2",
    datePattern: "Phase I (Day 2)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "485 – 473" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "472 – 462" }
  },
  {
    dayNumber: "Day 3",
    datePattern: "Phase I (Day 3)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "461 – 451" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "450 – 441" }
  },
  {
    dayNumber: "Day 4",
    datePattern: "Phase I (Day 4)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "440 – 428" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "427 – 419" }
  },
  {
    dayNumber: "Day 5",
    datePattern: "Phase I (Day 5)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "418 – 412" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "411 – 399" }
  },
  {
    dayNumber: "Day 6",
    datePattern: "Phase I (Day 6)",
    morningSlot: { time: "10:00 AM – 01:00 PM", scoreBand: "398 – 369" },
    afternoonSlot: { time: "02:00 PM – 05:00 PM", scoreBand: "368 & below" }
  }
];
