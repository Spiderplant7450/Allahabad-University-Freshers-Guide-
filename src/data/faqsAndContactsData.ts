export interface FAQItem {
  id: string;
  category: "Admissions" | "Academic & NEP" | "Verification" | "Hostels";
  question: string;
  answer: string;
}

export const freshersFaqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Admissions",
    question: "What is the CUET UG scoring formula used for B.A. merit calculation?",
    answer: "For Bachelor of Arts (B.A.), the computed score equals: [Best Language Score (English or Hindi)] + [Best Domain Subject Score from candidate's attempted domains] + [General Aptitude Test (GAT) Score]. These three components are summed to generate the candidate's composite merit score."
  },
  {
    id: "faq-2",
    category: "Admissions",
    question: "How do I know if my allotted B.A. combination is in the Main Campus or an Affiliated College?",
    answer: "All subject combinations listed under the Faculty of Arts (Codes 101 through 183) on the official university portal and verified at Pravesh Bhawan are for the Main Campus (Senate House & Arts Faculty complex). Constituent colleges release independent cutoffs and conduct their own verification."
  },
  {
    id: "faq-3",
    category: "Admissions",
    question: "Can I change my subject combination after the Admission Card is issued?",
    answer: "No. As per the official admission notification, after the issuance of the official Admission Card by the respective departments, no requests for change of subject combination, Major, or Minor will be entertained at any level."
  },
  {
    id: "faq-4",
    category: "Verification",
    question: "Is a DigiLocker Migration Certificate accepted during physical verification?",
    answer: "Yes. The University of Allahabad accepts digitally signed Migration Certificates issued via DigiLocker. You should carry a high-quality color printout and keep the active DigiLocker application accessible on your smartphone for on-spot verification if requested."
  },
  {
    id: "faq-5",
    category: "Verification",
    question: "What if I am missing a document on the day of physical verification?",
    answer: "While original Transfer Certificate (TC), Migration Certificate, and marksheets are mandatory for completing permanent enrolment, candidates in emergency situations may submit a time-bound provisional undertaking promising to produce the original documents within the stipulated period prescribed by the Admission Coordinator."
  },
  {
    id: "faq-6",
    category: "Academic & NEP",
    question: "What is the Dual Major system under NEP 2020 at Allahabad University?",
    answer: "Under the FYUGP framework, students study two Major subjects simultaneously with equal credit weight throughout the first three years (Semesters I–VI), alongside one Minor subject studied at half depth. In the third year, studies transition to 12 credits per major per semester, culminating in a 3-Year Dual Major Bachelor's degree (136 credits)."
  },
  {
    id: "faq-7",
    category: "Academic & NEP",
    question: "How do I choose and register for elective courses (AEC, SEC, MDC, VAC)?",
    answer: "You must complete one 2-credit course from AEC or SEC streams in Semesters I & II, and one from MDC or VAC streams in Semesters III & IV. Registration takes place on the University's Samarth Portal when the academic session course registration window opens. Seats are limited (20–50 per course) and allocated on a first-come, first-served basis."
  },
  {
    id: "faq-8",
    category: "Academic & NEP",
    question: "Is entry into the 4th Year (Honours / Honours with Research) automatic?",
    answer: "No. Progression to Year 4 is merit-based and capped at 20% of the corresponding PG intake for that discipline. To qualify for the Honours with Research track, students must secure a minimum of 75% marks across the first six semesters and rank within the top 10% of their third-year class cohort."
  },
  {
    id: "faq-9",
    category: "Hostels",
    question: "Who is eligible for University Hostel accommodation?",
    answer: "Hostel admission is open to regular, full-time undergraduate students whose family residence is located further than 25 km from the university. Allotment is strictly merit-based (calculated primarily on Class 12 / qualifying examination marks) following reservation guidelines."
  },
  {
    id: "faq-10",
    category: "Hostels",
    question: "What is the fee and meal structure in the general hostels?",
    answer: "Hostel charges are approximately ₹15,000 for the first year (including room rent, electricity/water advance, maintenance, and admission fee), along with a refundable security deposit of ₹5,000. All general hostels have student-managed rotating messes where meals cost approximately ₹45–₹50 per diet with unlimited quantity."
  }
];

export const universityContacts = {
  institution: "University of Allahabad (A Central University)",
  tagline: "Est. 1887 · The Fourth Oldest University of India",
  naacRating: "NAAC Grade A+",
  admissionHelpdeskEmail: "aupravesh@allduniv.ac.in",
  baGrievanceEmail: "baadminau@gmail.com",
  admissionHelplinePhone: "+91 9453852490 (10:00 AM – 04:00 PM on working days)",
  universityMainLine: "0532-2461083",
  verificationVenue: "Pravesh Bhawan, Chatham Lines, University of Allahabad, Prayagraj, Uttar Pradesh – 211002",
  mainCampusAddress: "Senate House Campus, University Road, Old Katra, Prayagraj, Uttar Pradesh – 211002",
  officialLinks: [
    { label: "Official University Website", url: "https://allduniv.ac.in" },
    { label: "UG Admissions Portal", url: "https://allduniv.ac.in/p/715/ug-admissions-2026" },
    { label: "Samarth Admission Portal", url: "https://alldunivcuet.samarth.edu.in/" },
    { label: "NTA CUET (UG) Portal", url: "https://exams.nta.ac.in/CUET-UG" }
  ]
};
