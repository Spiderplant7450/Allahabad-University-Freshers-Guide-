export interface HostelItem {
  id: string;
  name: string;
  shortName: string;
  category: "Boys' General" | "Boys' Professional" | "Girls' General" | "Girls' Professional" | "International";
  gender: "Boys" | "Girls" | "Co-Ed / Foreign";
  established?: string;
  rooms: string;
  capacity?: string;
  messAvailable: boolean;
  libraryAvailable: boolean;
  sportsFacilities: string;
  keyFeatures: string;
  description: string;
  location: string;
  image?: string;
  fallbackImage?: string;
  highlights: string[];
}

export const allUniversityHostels: HostelItem[] = [
  // --- BOYS GENERAL HOSTELS ---
  {
    id: "hostel-anj",
    name: "Dr. Amaranatha Jha Hostel (Muir Hostel)",
    shortName: "A.N. Jha Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1911",
    rooms: "136 Rooms (Single & Double Seated)",
    capacity: "240+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton, Table Tennis, Outdoor volleyball, Quadrangle grounds",
    keyFeatures: "Recently renovated state-of-the-art building. Renowned for calm scholarly atmosphere and legacy of producing top civil servants (IAS/IPS).",
    description: "Named after former Vice-Chancellor and scholar Dr. Amaranatha Jha. Widely regarded as one of the most prestigious academic residences on campus with dedicated e-library and high-speed campus internet.",
    location: "Near Faculty of Arts Quadrangle & University Library",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "136 newly modernized and ventilated rooms",
      "Dedicated in-house library and e-learning reading zone",
      "Historic legacy producing scores of IAS, IPS, and administrative officers",
      "Student-run rotating mess system serving nutritious meals (₹45-50/diet)",
      "Strict study hours and academic discipline"
    ]
  },
  {
    id: "hostel-ssl",
    name: "Sir Sunder Lal Hostel (SSL Hostel & Annex)",
    shortName: "SSL Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1916",
    rooms: "158 Rooms (4 Single + 102 Double + 52 Single in SSL Annex)",
    capacity: "260+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Floodlit Basketball Court, Equipped Gymnasium, Cricket pitch, Badminton Court",
    keyFeatures: "Centenary heritage with the best sports & fitness infrastructure among all university residences, including a dedicated 52-room modern single Annex.",
    description: "Named after Sir Sunder Lal, the first Indian Vice-Chancellor of the University of Allahabad. Features a vibrant corporate life, modern fitness gym, active reading room, and extensive sports grounds.",
    location: "Adjacent to University Science Faculty & Bank Road",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Modern SSL Annex with 52 individual single-occupancy rooms",
      "Fully equipped fitness gymnasium with cardio and strength equipment",
      "Floodlit basketball court hosting annual inter-hostel tournaments",
      "Active reading room stocked with competitive exam periodicals and journals",
      "Spacious dining hall with hygienic food preparation"
    ]
  },
  {
    id: "hostel-gnj",
    name: "Sir Ganganatha Jha Hostel (G.N. Jha Hostel)",
    shortName: "G.N. Jha Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1920s",
    rooms: "137 Rooms (Single & Double Seated)",
    capacity: "230+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Table Tennis, Badminton, Volleyball, Indoor carrom & chess",
    keyFeatures: "Prestigious academic institution atmosphere with strict administrative discipline and dense alumni network in higher judiciary, civil services, and academia.",
    description: "Named after distinguished Sanskrit scholar and Vice-Chancellor Mahamahopadhyaya Sir Ganganatha Jha. Inmates traditionally treat the hostel as a familial scholarly sanctuary.",
    location: "Chatham Lines / Main University Quadrangle",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "137 rooms situated around a traditional open quadrangle architecture",
      "High concentration of UPSC, UPPCS, and UGC-NET aspirants",
      "Quiet library reading room with classical and contemporary reference texts",
      "Strict enforcement of campus discipline, gate timings, and attendance"
    ]
  },
  {
    id: "hostel-dj",
    name: "Diamond Jubilee Hostel (DJ Hostel)",
    shortName: "D.J. Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1897",
    rooms: "120+ Double Seated Rooms",
    capacity: "220+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton Court, Common grounds, Indoor Table Tennis",
    keyFeatures: "One of the oldest and most central hostels on campus, situated within direct walking distance of Faculty of Arts classrooms and Central Library.",
    description: "Established during Queen Victoria's Diamond Jubilee year (1897). Highly convenient for Arts faculty students attending early morning lectures.",
    location: "Central University Precinct, next to Faculty of Arts",
    image: "https://www.allduniv.ac.in/uploads/UniversityHostel/d.j.h.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1576495199011-ab4017460c70?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Immediate 2-minute walking access to Faculty of Arts lecture halls",
      "Student-managed rotating mess with affordable daily meal coupons",
      "Strict zero-tolerance anti-ragging enforcement",
      "Vibrant annual cultural and debate gatherings"
    ]
  },
  {
    id: "hostel-pcb",
    name: "Sir P.C. Banerjee Hostel (PCB Hostel)",
    shortName: "P.C.B. Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1920s",
    rooms: "110+ Rooms (Single & Double)",
    capacity: "200+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Volleyball Court, Badminton, Recreation grounds",
    keyFeatures: "Heritage residential complex situated near Chatham Lines with spacious courtyards and active academic culture.",
    description: "Named in memory of Sir Pramada Charan Banerjee, distinguished jurist and Vice-Chancellor. Provides a quiet, focused environment for degree candidates.",
    location: "Chatham Lines Campus sector",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Spacious quadrangle layout with green shaded courtyards",
      "In-house dining mess and common recreation hall",
      "24/7 basic water and electricity infrastructure with backup",
      "Active student committee overseeing welfare and discipline"
    ]
  },
  {
    id: "hostel-tc",
    name: "Dr. Tara Chand Hostel (T.C. Hostel)",
    shortName: "T.C. Hostel",
    category: "Boys' General",
    gender: "Boys",
    established: "1950s",
    rooms: "100+ Rooms (Double Seated)",
    capacity: "180+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton Court, Table Tennis, Outdoor field",
    keyFeatures: "Named after eminent historian and former Vice-Chancellor Dr. Tara Chand, providing affordable residential housing.",
    description: "Offers double-seated accommodation with basic utilities, reading room facilities, and student-run mess services.",
    location: "Near Arts Campus perimeter",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Clean water cooler installations with RO filtration",
      "Affordable dining setup with cooperative student oversight",
      "Close proximity to Central Library and Department of History"
    ]
  },

  // --- BOYS PROFESSIONAL HOSTELS ---
  {
    id: "hostel-radhakrishnan",
    name: "Dr. S. Radhakrishnan Hostel",
    shortName: "Dr. S. Radhakrishnan Hostel",
    category: "Boys' Professional",
    gender: "Boys",
    established: "1980s",
    rooms: "120+ Single & Double Rooms",
    capacity: "190+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton, Table Tennis, Outdoor recreation space",
    keyFeatures: "Designated Professional Course Hostel catering to B.Tech, M.Tech, MBA, and 5-Year Law (B.A. LL.B.) candidates.",
    description: "Named after philosopher and President Dr. Sarvepalli Radhakrishnan. Designed to support the intensive project and lab schedules of professional students.",
    location: "Near Science & Engineering Complexes",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Exclusive accommodation for Professional degree students",
      "High-speed Wi-Fi network and study terminals",
      "Extended library and study room access",
      "Modern mess facilities"
    ]
  },
  {
    id: "hostel-shatabdi-boys",
    name: "Shatabdi Boys' Hostel",
    shortName: "Shatabdi Boys",
    category: "Boys' Professional",
    gender: "Boys",
    established: "1987 (Centenary)",
    rooms: "140+ Rooms",
    capacity: "220+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Basketball, Volleyball, Indoor games",
    keyFeatures: "Built during the University Centenary (1987), designated for Professional and Postgraduate degree students with modern amenities.",
    description: "Provides well-proportioned rooms with modern electrical infrastructure and active mess operations.",
    location: "Chatham Lines campus area",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Designed for professional & master's degree scholars",
      "Well-maintained common recreation hall with TV",
      "Round-the-clock security and gated entry"
    ]
  },
  {
    id: "hostel-intl-house",
    name: "International House (Boys)",
    shortName: "International House",
    category: "International",
    gender: "Co-Ed / Foreign",
    established: "Modern",
    rooms: "60+ Single Seated Rooms",
    capacity: "60+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Table tennis, Gymnasium, Lawn",
    keyFeatures: "Dedicated residence for international foreign students and overflow research/professional scholars admitted via Foreign Students Advisor.",
    description: "Features single-occupancy rooms with attached bathroom configurations, international student support desk, and cultural exchange spaces.",
    location: "Main University Campus Precinct",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Single-occupancy rooms with upgraded furnishing",
      "Dedicated liaison office with Foreign Students Advisor",
      "High-speed Wi-Fi and international dining provisions",
      "Vacancies allotted to research / professional scholars as per Rule 11"
    ]
  },

  // --- GIRLS GENERAL & PROFESSIONAL HOSTELS ---
  {
    id: "hostel-sn",
    name: "Sarojini Naidu Girls' Hostel (S.N. Hostel)",
    shortName: "S.N. Girls Hostel",
    category: "Girls' General",
    gender: "Girls",
    established: "Historic",
    rooms: "150+ Rooms (Single & Double)",
    capacity: "280+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton Court, Table Tennis, Indoor Gym, Landscaped Courtyard",
    keyFeatures: "Premier women's residence of Allahabad University with robust 3-tier perimeter security, CCTV monitoring, and strict curfew protocols.",
    description: "Named after the 'Nightingale of India' Sarojini Naidu. Offers a secure, nurturing environment with in-house medical assistance and reading rooms.",
    location: "Women's Campus Complex, Bank Road",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "24/7 multi-tier female security guards and CCTV surveillance",
      "In-house air-cooled library reading room open until 10:00 PM",
      "Student-elected mess committee serving hygienic vegetarian meals",
      "Strict entry protocol: Visitor ID cards attested by Superintendent"
    ]
  },
  {
    id: "hostel-priyadarshini",
    name: "Priyadarshini Girls' Hostel",
    shortName: "Priyadarshini Hostel",
    category: "Girls' General",
    gender: "Girls",
    established: "Modern",
    rooms: "120+ Rooms",
    capacity: "220+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton, Indoor carrom, Yoga lawn",
    keyFeatures: "Modern multi-storey residential complex with comfortable rooms, solar water heaters, and peaceful study atmosphere.",
    description: "Designed for undergraduate and postgraduate women with excellent sanitation and green recreational gardens.",
    location: "Women's Hostel Enclave",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Solar water heating and continuous backup power",
      "Spacious dining hall with hygienic kitchen setup",
      "Dedicated warden and assistant superintendent supervision"
    ]
  },
  {
    id: "hostel-shatabdi-girls",
    name: "Shatabdi Girls' Hostel",
    shortName: "Shatabdi Girls",
    category: "Girls' General",
    gender: "Girls",
    established: "1987",
    rooms: "110+ Rooms",
    capacity: "200+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Table Tennis, Badminton Court",
    keyFeatures: "General women's residence with active academic community and close access to university departments.",
    description: "Equipped with student mess, common room, and automated biometric attendance infrastructure.",
    location: "Women's Campus Precinct",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Automated attendance recording system by 8:00 PM",
      "Safe, gated residential compound with lush gardens",
      "Cooperative mess system with rotating menu"
    ]
  },
  {
    id: "hostel-kalpana-chawla",
    name: "Kalpana Chawla Girls' Hostel",
    shortName: "Kalpana Chawla Hostel",
    category: "Girls' Professional",
    gender: "Girls",
    established: "2000s",
    rooms: "100+ Single & Double Rooms",
    capacity: "180+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Indoor Badminton, Fitness equipment",
    keyFeatures: "Designated Professional Girls Hostel for B.Tech, M.Tech, MBA, and Law candidates with modern computing and study infrastructure.",
    description: "Named after astronaut Kalpana Chawla. Tailored to the demanding schedules of professional female students.",
    location: "Chatham Lines / Women's Extension",
    image: "https://files.yappe.in/place/full/kalpana-chawla-memorial-girls-hostel-139187.webp",
    fallbackImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Dedicated accommodation for Professional degree students",
      "High-speed fiber internet and project discussion rooms",
      "24/7 security with strict electronic entry gates"
    ]
  },
  {
    id: "hostel-mahadevi-verma",
    name: "Mahadevi Verma Girls' Hostel",
    shortName: "Mahadevi Verma Hostel",
    category: "Girls' Professional",
    gender: "Girls",
    established: "Modern",
    rooms: "90+ Rooms",
    capacity: "160+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton, Common lawn",
    keyFeatures: "Professional women's residence named in honor of celebrated Hindi poet and Jnanpith laureate Mahadevi Verma.",
    description: "Features modern architecture, comfortable double-seated rooms, and serene study spaces.",
    location: "Women's Campus Enclave",
    image: "https://files.yappe.in/place/full/mahadevi-verma-girls-hostel-7292109.webp",
    fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Modern architectural layout with ample natural light",
      "Dedicated study rooms and reading lounge",
      "Strict adherence to Girls' Hostel Rule Book protocols"
    ]
  },
  {
    id: "hostel-hall-of-residence",
    name: "Hall of Residence (Girls & Foreign Students)",
    shortName: "Hall of Residence",
    category: "International",
    gender: "Girls",
    established: "Historic",
    rooms: "80+ Rooms",
    capacity: "140+ Inmates",
    messAvailable: true,
    libraryAvailable: true,
    sportsFacilities: "Badminton, Indoor sports",
    keyFeatures: "Designated accommodation for Foreign female students and select postgraduate/research scholars.",
    description: "Provides specialized amenities, individual room allotments for foreign scholars, and robust security oversight.",
    location: "Main University Campus Area",
    image: "https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Official residence for International female students",
      "High standard of room maintenance and sanitation",
      "Assigned staff facilitating foreign exchange administration"
    ]
  }
];

export const allHostelsList = {
  boysGeneral: [
    "Dr. Amaranatha Jha Hostel (Muir)",
    "Diamond Jubilee Hostel (DJ)",
    "Sir Ganganatha Jha Hostel (GN Jha)",
    "Sir P.C. Banerjee Hostel (PCB)",
    "Sir Sunder Lal Hostel (SSL & Annex)",
    "Dr. Tara Chand Hostel (T.C.)"
  ],
  boysProfessional: [
    "Dr. S. Radhakrishnan Hostel",
    "Shatabdi Boys' Hostel"
  ],
  girlsGeneralAndProfessional: [
    "Sarojini Naidu Girls' Hostel",
    "Priyadarshini Girls' Hostel",
    "Shatabdi Girls' Hostel",
    "Kalpana Chawla Girls' Hostel (Professional)",
    "Mahadevi Verma Girls' Hostel (Professional)"
  ],
  international: [
    "International House (For Foreign Male Students)",
    "Hall of Residence (For Foreign Female Students & Scholars)"
  ]
};

export const officialHostelFees = [
  { item: "Cultural Activities Fee", amount: "₹500 / session", note: "Rule 17(i): Annual cultural fund" },
  { item: "Games & Sports Fee", amount: "₹1,000 / session", note: "Rule 17(i): Sports equipment & grounds upkeep" },
  { item: "Hostel Maintenance & Users Charges", amount: "₹2,000 / session", note: "Rule 17(i): Infrastructure & sanitization" },
  { item: "Initial Electricity & Water Advance (Single Room)", amount: "₹8,000 / session", note: "Rule 17(ii): Adjusted against actual shared consumption" },
  { item: "Initial Electricity & Water Advance (Double Room)", amount: "₹7,000 / session", note: "Rule 17(ii): Divided equally among residents" },
  { item: "Admission Fee (Newly Admitted Students Only)", amount: "₹500 (one-time)", note: "Rule 17(iii): Payable at entry" },
  { item: "Room Rent (Single-Seated Room)", amount: "₹300 / month (₹3,000 for 10 months)", note: "Rule 18: Prescribed 10-month academic term" },
  { item: "Room Rent (Double-Seated Room)", amount: "₹200 / month (₹2,000 for 10 months)", note: "Rule 18: Prescribed 10-month academic term" },
  { item: "Caution Money / Security Deposit", amount: "₹5,000 (Refundable)", note: "Rule 20(b): Refunded upon clearance & vacating" },
  { item: "JRF / SRF Fellowship Candidates", amount: "Equal to full HRA", note: "Rule 17(v): JRF/SRF charged hostel fee equal to HRA from UGC/CSIR/DST" },
  { item: "Summer Vacation Hostel Charges", amount: "As notified by DSW", note: "Rule 13(ii): For approved summer stay only" },
  { item: "Mess Meal Diet Charges", amount: "₹45 – ₹50 / diet", note: "Rule 53: Student rotating / contractor mess (unlimited quantity)" }
];

export interface HostelRuleBookChapter {
  id: string;
  chapterTitle: string;
  part: string;
  summary: string;
  rules: {
    ruleNumber: number;
    title: string;
    text: string;
    penalties?: string;
  }[];
}

export const completeHostelRuleBook: HostelRuleBookChapter[] = [
  {
    id: "preliminary",
    part: "PRELIMINARY",
    chapterTitle: "Short Title, Extent & Definitions (Rules 1 - 2)",
    summary: "Establishes scope across all AU hostels and defines crucial legal terms: Acts of Indiscipline, Attached Member, Illegal Occupant, Professional Hostels, Trespassers, and Superintendents.",
    rules: [
      {
        ruleNumber: 1,
        title: "Short Title, Extent & Commencement",
        text: "(i) These rules may be called University of Allahabad (Hostel) Rules.\n(ii) Applicable to all University hostels (boys and girls) owned and maintained by the University of Allahabad.\n(iii) Enforced with immediate effect across all campuses."
      },
      {
        ruleNumber: 2,
        title: "Official Definitions & Statutory Terms",
        text: "• (a) Acts of Indiscipline: Leaving overnight without written Superintendent permission; keeping unauthorized vehicles; holding unapproved meetings; inviting outside guests to inaugurate functions; using loudspeakers; unauthorized electrical appliances; lodging unapproved guests >2 nights.\n• (b) Attached Member: Non-resident regular student attached to a hostel to participate in corporate life without a room allotment.\n• (c) Illegal/Unauthorized Occupant: A resident who ceases to be a regular student, fails to produce valid I-cards, drops out/fails, secures employment, defaults on dues for >1 month, or fails to vacate at start of summer vacation.\n• (d) Officers of the University: Chancellor, VC, Pro-VC, Deans of Faculties, Registrar, Finance Officer.\n• (e) Professional Hostels: Shatabdi Boys & Dr. S. Radhakrishnan (for boys); Kalpana Chawla & Mahadevi Verma (for girls); International House vacancies.\n• (f) Regular Student: Whole-time degree student in Arts, Commerce, Law, Science or University Institute.\n• (g) Warden: Senior Professor exercising general supervision.\n• (h) Superintendent: Teacher-in-charge of daily hostel administration.\n• (i) Trespasser: Anyone occupying premises without permission, or unauthorized person found in a resident's room after 9:00 PM."
      }
    ]
  },
  {
    id: "part-1-admissions",
    part: "PART I: ADMISSIONS",
    chapterTitle: "Chapter 1: Admissions, Seat Ratios & Duration (Rules 3 - 16)",
    summary: "Covers the 60:30:10 Seat Ratio (UG:PG:Research), 25 km distance exclusion, Central Govt reservations, maximum 8-year cumulative stay limits, and Summer Hostels.",
    rules: [
      {
        ruleNumber: 3,
        title: "Admission Framework",
        text: "Admission to University Hostels shall be made strictly in accordance with GoI statutory instructions, UGC policies, and University Ordinances."
      },
      {
        ruleNumber: 4,
        title: "Hostel Admission Committee Composition",
        text: "Comprises: (i) Dean Students' Welfare (DSW) - Chairman, (ii) Senior most Warden (Boys), (iii) Senior most Superintendent (Boys), (iv) Senior most Warden (Girls), (v) Senior most Superintendent (Girls), (vi) VC nominee teacher (SC/ST category), (vii) Teacher nominee by DSW (OBC category)."
      },
      {
        ruleNumber: 5,
        title: "Merit & 60:30:10 Seat Ratio Formula",
        text: "Admissions drawn strictly from merit lists of entrance tests. To facilitate new entrants, room allocation ratio is approximately:\n• Undergraduate (UG): 60%\n• Postgraduate (PG, excl. LL.M./M.Tech): 30%\n• Research / LL.M. / M.Tech: 10%"
      },
      {
        ruleNumber: 6,
        title: "Statutory Reservation Quotas",
        text: "• Scheduled Castes (SC): 15%\n• Scheduled Tribes (ST): 7.5% (ST unfilled seats transfer to SC, then to General)\n• Other Backward Classes (OBC): 27%\n• Persons with Disabilities (PwD / PH): 3%"
      },
      {
        ruleNumber: 7,
        title: "Application Protocol & Concealment Clause",
        text: "Applications downloadable from www.allduniv.ac.in. Concealing information or submitting false documents results in automatic cancellation of admission and mandatory vacation within 7 days."
      },
      {
        ruleNumber: 8,
        title: "Mandatory Enclosures for Allotment",
        text: "Applicants must furnish: Character Certificate from last attended head of institution, copy of University fee receipt, University ID card, and Medical Fitness Certificate."
      },
      {
        ruleNumber: 9,
        title: "Eligible Candidates",
        text: "Only regular full-time degree students of Allahabad University demonstrating upward academic progress are eligible."
      },
      {
        ruleNumber: 10,
        title: "Ineligible Candidates (25 km Rule)",
        text: "The following CANNOT be admitted:\n(i) Any student residing within 25 km territorial limits of the University with parents or financially supporting guardians.\n(ii) Students who failed or dropped out in university examinations.\n(iii) Students enrolled exclusively in Diploma, Certificate, or part-time courses."
      },
      {
        ruleNumber: 11,
        title: "Professional Courses & Research Scholars",
        text: "Admitted to Shatabdi Boys, Dr. S. Radhakrishnan, Kalpana Chawla, Mahadevi Verma, and International House (subject to vacancies)."
      },
      {
        ruleNumber: 12,
        title: "Term of Hostel & Exam Extensions",
        text: "Aligned strictly with the academic calendar. Stay extensions are permitted only till the final day of the resident's ongoing university examination with DSW approval."
      },
      {
        ruleNumber: 13,
        title: "Summer Vacation Hostel Policy",
        text: "Hostels MUST be vacated for a minimum of 1 month in summer for maintenance. Approved students must reside in designated 'Summer Hostels' on payment of prescribed Summer Fees."
      },
      {
        ruleNumber: 14,
        title: "Maximum Permissible Stay Limits",
        text: "Cumulative stay across one or multiple hostels:\n• UG entering up to D.Phil / LLB: Maximum 8 Years\n• PG entering up to D.Phil: Maximum 5 Years\n• Direct D.Phil Scholars: Maximum 3 Years (extendable by 10 months via DPC & DSW approval)."
      },
      {
        ruleNumber: 15,
        title: "Readmission Protocol",
        text: "Bonafide residents must re-apply annually and clear all previous dues and arrears before the notified deadline."
      },
      {
        ruleNumber: 16,
        title: "Foreign & International Students",
        text: "Male foreign students admitted to International House; female foreign students admitted to Hall of Residence on recommendation of Foreign Students Advisor."
      }
    ]
  },
  {
    id: "part-1-fees",
    part: "PART I: FEES & CHARGES",
    chapterTitle: "Chapter 2 & 3: Fees, Rents, Dues & Attachment (Rules 17 - 23)",
    summary: "Prescribes official fee slabs, electricity advance, monthly room rents (10 months), bank payment modes, consequences of default, and Attached Member rules.",
    rules: [
      {
        ruleNumber: 17,
        title: "Official Fee Slabs & Advances",
        text: "• Cultural Activities: ₹500/-\n• Games & Sports: ₹1,000/-\n• Hostel Maintenance & User Charges: ₹2,000/-\n• Initial Electricity & Water: ₹8,000/- (Single Room) / ₹7,000/- (Double Room)\n• Admission Fee: ₹500/- (new entrants only)\n• JRF/SRF with HRA: Charged hostel fee equal to full HRA entitlement."
      },
      {
        ruleNumber: 18,
        title: "Prescribed 10-Month Room Rent",
        text: "Payable for 10 months per term:\n• Single Seated Room: ₹300/- per month (₹3,000 total)\n• Double Seated Room: ₹200/- per month (₹2,000 total)"
      },
      {
        ruleNumber: 19,
        title: "Mode of Payment",
        text: "All fees, rent, and charges paid via Bank Draft or Banker's Cheque payable to the Superintendent of the concerned hostel."
      },
      {
        ruleNumber: 20,
        title: "When to Pay & Caution Money Refund",
        text: "Full term dues payable at commencement of session. Refund of caution money (₹5,000) processed on course completion and formal room handover."
      },
      {
        ruleNumber: 21,
        title: "Consequences of Default & Eviction",
        text: "Defaulting dues beyond prescribed dates leads to suspension/expulsion. Eviction conducted by Proctor, assisted by DSW, with Warden & Superintendent present.",
        penalties: "Suspension, Expulsion, and Proctorial Eviction."
      },
      {
        ruleNumber: 22,
        title: "Attached Member Status",
        text: "Non-resident regular students may be permitted to participate in corporate, cultural, and athletic life of a hostel without room allotment."
      },
      {
        ruleNumber: 23,
        title: "Attachment Discretion & Fee",
        text: "Discretion of Warden & Superintendent based on academic/sports performance. Attached member pays admission fee (₹500) but is exempt from electricity/water bills. Maximum duration 8 years."
      }
    ]
  },
  {
    id: "part-2-discipline",
    part: "PART II: DISCIPLINE & CONDUCT",
    chapterTitle: "Chapter 1 & 2: Discipline, Conduct Book & Eviction (Rules 25 - 38)",
    summary: "Establishes Warden authority, the 3-strike Conduct Book system, ₹500–₹1000 fines, 72-hour unauthorized eviction notices, and ₹500/day trespasser penalties.",
    rules: [
      {
        ruleNumber: 25,
        title: "Rule Book Undertaking",
        text: "Every admitted inmate receives a copy of the Hostel Rule Book and must submit a signed undertaking to abide by all clauses."
      },
      {
        ruleNumber: 26,
        title: "Disciplinary Authority",
        text: "Superintendent maintains daily discipline. Serious breaches reported to Warden whose decision is final within the hostel."
      },
      {
        ruleNumber: 27,
        title: "Appeal Mechanism",
        text: "An appeal against Warden's decision may be submitted ONLY to the Vice-Chancellor through the Dean Students' Welfare (DSW)."
      },
      {
        ruleNumber: 28,
        title: "Panel of Prefects",
        text: "Superintendent may nominate student prefects to assist in daily administration and attendance recording."
      },
      {
        ruleNumber: 29,
        title: "Proctor's Authority for Eviction",
        text: "Legal violations and forced evictions handled by the Proctor, assisted by DSW, with Warden and Superintendent present."
      },
      {
        ruleNumber: 30,
        title: "Conduct Book (3-Strike Rule)",
        text: "Superintendent maintains a Conduct Book. Misconduct recorded with reasons. THREE entries in the Conduct Book entail disciplinary action leading to suspension or expulsion.",
        penalties: "3 entries = Expulsion from hostel."
      },
      {
        ruleNumber: 31,
        title: "Penalties for Indiscipline & Moral Turpitude",
        text: "Guilty residents fined ₹500/- up to expulsion (expulsion requires DSW approval). Moral turpitude results in instant expulsion.",
        penalties: "₹500 fine, removal, or expulsion."
      },
      {
        ruleNumber: 32,
        title: "Repeated Indiscipline Penalties",
        text: "Superintendent issues warning; repeated breaches reported to Warden who may levy fines up to ₹1,000/-. Three entries lead to expulsion.",
        penalties: "Fine up to ₹1,000/-."
      },
      {
        ruleNumber: 33,
        title: "Room Allotment & Transfer Restrictions",
        text: "Inmates allotted rooms by Superintendent. Changing allotted rooms without written permission is strictly prohibited."
      },
      {
        ruleNumber: 34,
        title: "Unauthorized Room Occupation",
        text: "Occupying an unallotted room incurs a mandatory ₹1,000/- fine and immediate risk of expulsion.",
        penalties: "₹1,000/- fine + expulsion."
      },
      {
        ruleNumber: 35,
        title: "72-Hour Final Notice for Unauthorized Occupancy",
        text: "Inmates failing to vacate after term expiry served a 72-hour final notice. Failure to vacate treated as unauthorized occupation.",
        penalties: "Stern disciplinary & police eviction."
      },
      {
        ruleNumber: 37,
        title: "Trespasser Liability & Fines",
        text: "• Anyone found in a room after 9:00 PM without authorization deemed a trespasser.\n• Extra bedstead found in room = guilty of lodging a trespasser.\n• Resident fined ₹500/- per day for lodging unauthorized persons plus disciplinary action.",
        penalties: "₹500/- per day fine + disciplinary expulsion."
      },
      {
        ruleNumber: 38,
        title: "Legal Action Against Trespassers",
        text: "University reserves right to prosecute trespassers under law of the land, including rustication from the University if a student."
      }
    ]
  },
  {
    id: "part-2-property",
    part: "PART II: PROPERTY & UTILITIES",
    chapterTitle: "Chapter 3, 4 & 5: Property, Vehicles, Attendance & Electricity (Rules 39 - 52)",
    summary: "Prescribes furniture rules (₹1000 fine for unissued furniture), strict 4-wheeler ban, 80% attendance mandate for exams, 9:00 PM curfew, and the 200W electrical ceiling.",
    rules: [
      {
        ruleNumber: 39,
        title: "Hostel Furniture & Unissued Items",
        text: "Provided: 1 bed, 1 table, 1 chair, fixed cupboards. Charge must be handed over before vacating. Keeping unissued furniture attracts a fine of ₹1,000/- per item.",
        penalties: "₹1,000/- fine per unauthorized furniture piece."
      },
      {
        ruleNumber: 40,
        title: "Common Hall & Reading Room Decorum",
        text: "Open only during specified hours. Newspapers/periodicals must not be removed. No furniture or vehicles allowed inside Common/Dining Halls."
      },
      {
        ruleNumber: 41,
        title: "Damage to Property & Corridor Bathing Ban",
        text: "• Damaging walls, fittings, or furniture fined ₹1,000/- plus full repair/replacement costs.\n• Bathing in corridors or in the open is strictly prohibited (Fine: ₹500/-).",
        penalties: "₹1,000/- fine + repair cost; ₹500/- corridor bathing fine."
      },
      {
        ruleNumber: 42,
        title: "Vehicle Registration & Strict 4-Wheeler Ban",
        text: "• Two-wheelers allowed ONLY with written Superintendent permission and certified RC/insurance papers.\n• Four-wheelers (Cars, Jeeps) and Heavy Vehicles STRICTLY PROHIBITED on hostel premises for residents and guests alike (Penalty: ₹500/-).",
        penalties: "₹500/- penalty per breach; 4-wheelers impounded/barred."
      },
      {
        ruleNumber: 44,
        title: "Medical Assistance & Dispensary",
        text: "Cases of sickness reported immediately to Superintendent. Contagious diseases shifted to University Dispensary. Private doctors permitted only with Superintendent approval at student's expense."
      },
      {
        ruleNumber: 45,
        title: "Noise Pollution & Loudspeakers",
        text: "Playing music, radio, TV, or musical instruments prohibited without written permission. Recorded as misconduct in Conduct Book."
      },
      {
        ruleNumber: 46,
        title: "Meetings & Assemblies",
        text: "Holding meetings, unauthorized activities, or functions in hostel premises prohibited without written Superintendent permission."
      },
      {
        ruleNumber: 47,
        title: "Strikes & Hunger Strikes Banned",
        text: "Resort to hunger strikes or any strike within hostel premises is a severe breach of discipline inviting stern action."
      },
      {
        ruleNumber: 48,
        title: "Mandatory 80% Attendance & 9:00 PM Curfew",
        text: "• 80% hostel attendance is mandatory to appear in University semester examinations (VC may grant max 20 days grace).\n• Residents must be in their rooms by 9:00 PM.\n• Night attendance signed in room in presence of prefect between 8:00 PM – 8:15 PM daily."
      },
      {
        ruleNumber: 49,
        title: "Leave Applications",
        text: "Staying away overnight requires written Superintendent permission accompanied by written request from parents/legal guardian."
      },
      {
        ruleNumber: 50,
        title: "Electricity Restrictions: 200W Limit & Banned Lamps",
        text: "• Electrical appliances exceeding 200W are STRICTLY PROHIBITED (Fine: ₹1,000/- for first 3 breaches, then expulsion).\n• Bulbs exceeding 100W, Mercury vapor, Sodium, Metal halide, Xenon arc bulbs banned (Fine: ₹500/-).\n• Leaving lights/fans ON in locked room >24 hours fined ₹100/- per day.",
        penalties: "₹1,000/- fine (3 breaches = Expulsion); ₹500/- bulb fine; ₹100/day unattended fine."
      },
      {
        ruleNumber: 52,
        title: "Tampering with Electrical, Internet & Sanitary Fittings",
        text: "Tampering with verandah fittings, Wi-Fi routers, or sanitary lines entails disciplinary action, fine, and full replacement/labour costs."
      }
    ]
  },
  {
    id: "part-2-dining-guests",
    part: "PART II: DINING & GUESTS",
    chapterTitle: "Chapter 6 & 7: Mess, Canteen & Guest Regulations (Rules 53 - 59)",
    summary: "Mandates no cooking in personal rooms, student-run/centralized mess systems, guest permission rules (max 2 nights for illness), and complete ban on university students as guests.",
    rules: [
      {
        ruleNumber: 53,
        title: "Cooking in Rooms Strictly Prohibited",
        text: "Cooking inside personal hostel rooms is strictly forbidden under University Ordinance XXIII. Residents dine in the official mess or canteen under Superintendent oversight."
      },
      {
        ruleNumber: 54,
        title: "Centralized Mess vs Private Mess",
        text: "Where the administration runs a centralized mess, private catering arrangements are barred."
      },
      {
        ruleNumber: 56,
        title: "Room Service Prohibition",
        text: "Taking meals to personal rooms is prohibited except during certified illness with Superintendent permission."
      },
      {
        ruleNumber: 57,
        title: "Guest Permission Protocol",
        text: "Guests permitted ONLY with prior written approval from Warden and Superintendent. No outsiders permitted after 9:00 PM. Unauthorized guest lodging leads to expulsion."
      },
      {
        ruleNumber: 58,
        title: "Relatives & Former Residents Stay Limits",
        text: "• Relatives/family allowed ONLY during certified serious illness for a maximum of 2 nights.\n• Former bonafide residents may stay a maximum of 3 days on written application with Superintendent discretion."
      },
      {
        ruleNumber: 59,
        title: "University Students Cannot Be Guests",
        text: "Under NO circumstances may an enrolled student of the University stay as a guest in a hostel. Unauthorized student occupants face immediate legal and disciplinary action."
      }
    ]
  },
  {
    id: "girls-hostel-regulations",
    part: "SPECIAL PROVISIONS",
    chapterTitle: "Chapter 7 (Rules 60 - 62) & Part III: Girls' Hostels & General Codes (Rules 60 - 67)",
    summary: "Prescribes Girls Hostel visiting days (Wed/Fri/Sun), curfew timings (7 PM Summer / 6 PM Winter), night-out allowances (max 4 nights/mo), firearms & narcotics zero-tolerance.",
    rules: [
      {
        ruleNumber: 60,
        title: "Girls' Hostel Visiting Days & Hours",
        text: "• Visiting Days: Sundays, Wednesdays, and Fridays between 4:00 PM – 7:00 PM.\n• Sunday Mornings: 7:00 AM – 11:00 AM.\n• Visitors and local guardians permitted ONLY on production of official Identity Cards with photos attested under the seal and signature of the Superintendent.\n• Parents also require Superintendent permission before meeting wards."
      },
      {
        ruleNumber: 61,
        title: "Girls' Hostel Curfew & Gate Timings",
        text: "• Gate closure: Must return by 7:00 PM in Summers and 6:00 PM in Winters.\n• Late return up to 9:00 PM permitted ONLY upon written request from bona fide local guardian, granted maximum 3 evenings per month.\n• Leaving for shopping or movies requires prior written gate pass from Superintendent."
      },
      {
        ruleNumber: 62,
        title: "Overnight Stay Out Allowance",
        text: "Residents of Girls' Hostels permitted to stay out overnight for a maximum of FOUR (4) nights in a month and gazetted holidays upon advance written request from parents/legal guardians."
      },
      {
        ruleNumber: 64,
        title: "Change of Course of Study",
        text: "Changing course of study requires prior written permission from Superintendent and may require shifting to another designated hostel."
      },
      {
        ruleNumber: 65,
        title: "Zero Tolerance: Licensed Firearms, Weapons & Contraband",
        text: "Keeping licensed firearms, knives, weapons, or contraband materials is strictly prohibited. Breach leads to INSTANT EXPULSION from the hostel without inquiry.",
        penalties: "Immediate expulsion without inquiry & police FIR."
      },
      {
        ruleNumber: 66,
        title: "Zero Tolerance: Drugs & Alcoholic Beverages",
        text: "Possession, consumption, or distribution of alcoholic drinks or hallucinogenic drugs is strictly forbidden. Entails severe disciplinary action and immediate expulsion.",
        penalties: "Expulsion from hostel & University rustication."
      },
      {
        ruleNumber: 67,
        title: "Vice-Chancellor's Authority to Amend Rules",
        text: "The Vice-Chancellor may amend or delete these rules. The Warden and Superintendent may issue administrative orders for discipline and welfare."
      }
    ]
  }
];

export const keyHostelRules = [
  {
    title: "Eligibility & 25 km Boundary Rule (Rule 10)",
    detail: "Applicants must be regular, full-time students. Students residing with parents or guardians within 25 km territorial limits of the University are strictly ineligible. Ratio: 60% UG, 30% PG, 10% Research."
  },
  {
    title: "Mandatory 80% Attendance & Night Signature (Rule 48)",
    detail: "Maintaining 80% hostel attendance is mandatory to appear in University semester exams. Daily attendance sheets are signed in rooms between 8:00 PM and 8:15 PM in the presence of the prefect."
  },
  {
    title: "9:00 PM Curfew & Trespasser Clause (Rules 37 & 48)",
    detail: "All inmates must be inside the hostel by 9:00 PM. Anyone found in a room after 9:00 PM without authorization is treated as a trespasser (host inmate fined ₹500/day)."
  },
  {
    title: "200W Appliance Limit & Banned Lamps (Rule 50)",
    detail: "Electrical appliances exceeding 200W are strictly prohibited (₹1,000 fine; 3 breaches = expulsion). High-wattage lamps (>100W), heaters, and cooking coils are banned."
  },
  {
    title: "Strict Ban on Cooking in Personal Rooms (Rule 53)",
    detail: "Cooking inside personal hostel rooms is strictly forbidden under University Ordinance XXIII. Inmates dine in the official mess or canteen (₹45–50 per diet)."
  },
  {
    title: "Strict Ban on Four-Wheelers / Cars (Rule 42)",
    detail: "Residents and guests are prohibited from bringing or parking 4-wheelers (cars/jeeps) on hostel premises. Two-wheelers require Superintendent registration (₹500 penalty)."
  },
  {
    title: "Girls' Hostel Visiting & Curfew Protocol (Rules 60-62)",
    detail: "In-time: 7:00 PM (Summer) / 6:00 PM (Winter). Visiting days: Wed/Fri/Sun 4–7 PM and Sun 7–11 AM with Superintendent-attested ID. Overnight leave max 4 nights/month with parents' written consent."
  },
  {
    title: "Conduct Book 3-Strike Rule & Fines (Rules 30-32)",
    detail: "Superintendent maintains a Conduct Book. Three misconduct entries entail suspension or expulsion. Unissued furniture fine is ₹1,000/- per piece."
  },
  {
    title: "Zero Tolerance: Weapons, Drugs & Alcohol (Rules 65-66)",
    detail: "Possession of firearms, knives, alcohol, or narcotic drugs results in instant expulsion without inquiry and rustication from the University."
  }
];
