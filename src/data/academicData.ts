export interface NepYearStructure {
  year: string;
  semesters: string;
  qualification: string;
  totalCredits: number;
  exitOption: boolean;
  coreBreakdown: string;
  additionalRequirement: string;
}

export const nepProgrammeStructure: NepYearStructure[] = [
  {
    year: "1st Year",
    semesters: "Semester I & II",
    qualification: "Undergraduate Certificate (UG Certificate)",
    totalCredits: 44,
    exitOption: true,
    coreBreakdown: "8 Cr Major 1 + 8 Cr Major 2 + 4 Cr Minor + 2 Cr Elective per semester",
    additionalRequirement: "Mandatory completion of one 2-credit course from AEC or SEC streams each semester."
  },
  {
    year: "2nd Year",
    semesters: "Semester III & IV",
    qualification: "Undergraduate Diploma (UG Diploma)",
    totalCredits: 88,
    exitOption: true,
    coreBreakdown: "8 Cr Major 1 + 8 Cr Major 2 + 4 Cr Minor + 2 Cr Elective per semester",
    additionalRequirement: "Mandatory completion of one 2-credit course from MDC or VAC streams each semester."
  },
  {
    year: "3rd Year",
    semesters: "Semester V & VI",
    qualification: "Bachelor's Degree (Dual Major UG Degree)",
    totalCredits: 136,
    exitOption: true,
    coreBreakdown: "12 Cr Major 1 (8 Core + 4 Elective) + 12 Cr Major 2 (8 Core + 4 Elective) per semester",
    additionalRequirement: "Students complete depth in both major disciplines. Qualifies for standard graduation and 2-year Master's entrance."
  },
  {
    year: "4th Year",
    semesters: "Semester VII & VIII",
    qualification: "Bachelor's (Honours / Honours with Research)",
    totalCredits: 184,
    exitOption: false,
    coreBreakdown: "Honours: 24 Cr/sem (Core + Adv. Electives) | Research: 12 Cr Core + Research Project / Dissertation (12 Cr)",
    additionalRequirement: "Merit-based entry (ordinarily limited to 20% of corresponding PG intake; minimum 75% marks in first 6 semesters & top 10% rank for Research track)."
  }
];

export interface SubjectCombination {
  code: number;
  major1: string;
  major2: string;
  minor: string;
}

export const baSubjectCombinations: SubjectCombination[] = [
  { code: 101, major1: "Ancient History", major2: "Economics", minor: "Hindi" },
  { code: 102, major1: "Ancient History", major2: "Education", minor: "Political Science" },
  { code: 103, major1: "Ancient History", major2: "English Literature", minor: "Economics" },
  { code: 104, major1: "Ancient History", major2: "Geography", minor: "Philosophy" },
  { code: 105, major1: "Ancient History", major2: "Geography", minor: "Education" },
  { code: 106, major1: "Ancient History", major2: "Hindi", minor: "Sanskrit" },
  { code: 107, major1: "Ancient History", major2: "Philosophy", minor: "Hindi" },
  { code: 108, major1: "Ancient History", major2: "Philosophy", minor: "Economics" },
  { code: 109, major1: "Ancient History", major2: "Political Science", minor: "Theatre and Film" },
  { code: 110, major1: "Ancient History", major2: "Sanskrit", minor: "Philosophy" },
  { code: 111, major1: "Anthropology", major2: "Economics", minor: "Psychology" },
  { code: 112, major1: "Arabic", major2: "Medieval History", minor: "Political Science" },
  { code: 113, major1: "Arabic", major2: "Urdu", minor: "Medieval History" },
  { code: 114, major1: "Defence Studies", major2: "Anthropology", minor: "Philosophy" },
  { code: 115, major1: "Defence Studies", major2: "Economics", minor: "Education" },
  { code: 116, major1: "Defence Studies", major2: "Geography", minor: "Theatre and Film" },
  { code: 117, major1: "Defence Studies", major2: "Hindi", minor: "Psychology" },
  { code: 118, major1: "Defence Studies", major2: "Medieval History", minor: "English Language" },
  { code: 119, major1: "Defence Studies", major2: "Modern History", minor: "Music" },
  { code: 120, major1: "Defence Studies", major2: "Political Science", minor: "Anthropology" },
  { code: 121, major1: "English Literature", major2: "Economics", minor: "Education" },
  { code: 122, major1: "English Literature", major2: "Education", minor: "Economics" },
  { code: 123, major1: "English Literature", major2: "Philosophy", minor: "Medieval History" },
  { code: 124, major1: "English Literature", major2: "Hindi", minor: "Education" },
  { code: 125, major1: "English Literature", major2: "Medieval History", minor: "Russian" },
  { code: 126, major1: "English Literature", major2: "Medieval History", minor: "Geography" },
  { code: 127, major1: "English Literature", major2: "Modern History", minor: "German" },
  { code: 128, major1: "English Literature", major2: "Modern History", minor: "Economics" },
  { code: 129, major1: "English Literature", major2: "Political Science", minor: "French" },
  { code: 130, major1: "English Literature", major2: "Political Science", minor: "Geography" },
  { code: 131, major1: "English Literature", major2: "Psychology", minor: "Ancient History" },
  { code: 132, major1: "Psychology", major2: "Medieval History", minor: "Education" },
  { code: 133, major1: "English Literature", major2: "Defence Studies", minor: "Geography" },
  { code: 134, major1: "Geography", major2: "Economics", minor: "Political Science" },
  { code: 135, major1: "Geography", major2: "English Literature", minor: "Medieval History" },
  { code: 136, major1: "Geography", major2: "Hindi", minor: "Education" },
  { code: 137, major1: "Geography", major2: "Medieval History", minor: "Hindi" },
  { code: 138, major1: "Geography", major2: "Modern History", minor: "Anthropology" },
  { code: 139, major1: "Geography", major2: "Philosophy", minor: "Economics" },
  { code: 140, major1: "Geography", major2: "Political Science", minor: "Ancient History" },
  { code: 141, major1: "Hindi", major2: "Economics", minor: "Ancient History" },
  { code: 142, major1: "Maths", major2: "Statistics", minor: "Economics" },
  { code: 143, major1: "Medieval History", major2: "Anthropology", minor: "English Language" },
  { code: 144, major1: "Medieval History", major2: "Economics", minor: "Education" },
  { code: 145, major1: "Medieval History", major2: "Economics", minor: "English Language" },
  { code: 146, major1: "Medieval History", major2: "Education", minor: "Economics" },
  { code: 147, major1: "Medieval History", major2: "English Literature", minor: "Political Science" },
  { code: 148, major1: "Medieval History", major2: "Hindi", minor: "Music" },
  { code: 149, major1: "Medieval History", major2: "Philosophy", minor: "English Language" },
  { code: 150, major1: "Medieval History", major2: "Political Science", minor: "English Language" },
  { code: 151, major1: "Modern History", major2: "Economics", minor: "English Language" },
  { code: 152, major1: "Music", major2: "Hindi", minor: "Ancient History" },
  { code: 153, major1: "Music", major2: "Medieval History", minor: "Hindi" },
  { code: 154, major1: "Persian", major2: "Political Science", minor: "Education" },
  { code: 155, major1: "Philosophy", major2: "Economics", minor: "Hindi" },
  { code: 156, major1: "Philosophy", major2: "Education", minor: "Ancient History" },
  { code: 157, major1: "Philosophy", major2: "Hindi", minor: "English Language" },
  { code: 158, major1: "Philosophy", major2: "Medieval History", minor: "Political Science" },
  { code: 159, major1: "Philosophy", major2: "Modern History", minor: "Sanskrit" },
  { code: 160, major1: "Political Science", major2: "Economics", minor: "Hindi" },
  { code: 161, major1: "Political Science", major2: "Economics", minor: "Education" },
  { code: 162, major1: "Political Science", major2: "Education", minor: "Sanskrit" },
  { code: 163, major1: "Political Science", major2: "English Literature", minor: "Economics" },
  { code: 164, major1: "Political Science", major2: "Geography", minor: "Hindi" },
  { code: 165, major1: "Political Science", major2: "Hindi", minor: "Economics" },
  { code: 166, major1: "Political Science", major2: "Medieval History", minor: "English Language" },
  { code: 167, major1: "Political Science", major2: "Medieval History", minor: "Economics" },
  { code: 168, major1: "Hindi", major2: "Philosophy", minor: "Anthropology" },
  { code: 169, major1: "Hindi", major2: "Philosophy", minor: "Modern History" },
  { code: 170, major1: "Psychology", major2: "Economics", minor: "Medieval History" },
  { code: 171, major1: "Sanskrit", major2: "Education", minor: "Economics" },
  { code: 172, major1: "Sanskrit", major2: "Hindi", minor: "Ancient History" },
  { code: 173, major1: "Sanskrit", major2: "Medieval History", minor: "Psychology" },
  { code: 174, major1: "Sanskrit", major2: "Modern History", minor: "English Language" },
  { code: 175, major1: "Sanskrit", major2: "Philosophy", minor: "Political Science" },
  { code: 176, major1: "Sociology", major2: "Economics", minor: "Education" },
  { code: 177, major1: "Sociology", major2: "Education", minor: "Economics" },
  { code: 178, major1: "Sociology", major2: "Geography", minor: "Medieval History" },
  { code: 179, major1: "Sociology", major2: "Political Science", minor: "Economics" },
  { code: 180, major1: "Sociology", major2: "Political Science", minor: "Psychology" },
  { code: 181, major1: "Sociology", major2: "Psychology", minor: "Political Science" },
  { code: 182, major1: "Urdu", major2: "Economics", minor: "Education" },
  { code: 183, major1: "Urdu", major2: "Education", minor: "Economics" }
];

export interface SuggestedPathway {
  title: string;
  majors: string;
  minor: string;
  focus: string;
  careerOutcomes: string;
}

export const suggestedPathways: SuggestedPathway[] = [
  {
    title: "Public Policy & Governance",
    majors: "Sociology + Political Science",
    minor: "Psychology / Economics",
    focus: "Governance mechanisms, societal institutions, behavioral insights, and policy analysis.",
    careerOutcomes: "UPSC Civil Services, State Public Service Commissions, Think Tanks, Policy Consulting, Public Administration."
  },
  {
    title: "Media, Law & Communication",
    majors: "English Literature + Political Science",
    minor: "Geography / Ancient History",
    focus: "Critical textual interpretation, political theory, constitutional background, and spatial-historical perspectives.",
    careerOutcomes: "Judicial Services / Law, Investigative Journalism, Corporate Communications, Publishing, Diplomacy."
  },
  {
    title: "Analytical & Financial Track",
    majors: "Mathematics + Statistics",
    minor: "Economics",
    focus: "Quantitative rigor, statistical inference, econometric modeling, and market forecasting.",
    careerOutcomes: "Data Analytics, Actuarial Science, Economic Research, Banking, Investment Analysis."
  },
  {
    title: "Urban & Social Planning",
    majors: "Sociology + Psychology",
    minor: "Geography",
    focus: "Human-centric research, community dynamics, spatial cartography, and developmental planning.",
    careerOutcomes: "Urban Planning Authorities, NGOs, International Development Agencies, Human Resources, Social Research."
  },
  {
    title: "Educational & Academic Leadership",
    majors: "Education + Philosophy",
    minor: "Medieval History",
    focus: "Pedagogical theory, ethical inquiry, logical reasoning, and historical contextualization.",
    careerOutcomes: "Academic Research, Teaching & Professorship, Curriculum Development, Educational Administration."
  }
];
