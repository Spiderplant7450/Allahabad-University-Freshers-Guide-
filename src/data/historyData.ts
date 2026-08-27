export interface HistoricalFigureOrBuilding {
  id: string;
  name: string;
  roleOrType: string;
  periodOrYear: string;
  image: string;
  shortDesc: string;
  details: string[];
  quote?: string;
  badge: string;
}

export interface HistoryHostelHoverItem {
  id: string;
  name: string;
  historicName?: string;
  founded: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  historicSignificance: string;
  architectureFact: string;
  alumniLegacy: string;
}

export interface HistorySectionItem {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  leadParagraph: string;
  image: string;
  imageCaption: string;
  keyPoints: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  detailedBullets: string[];
  historicalQuote?: {
    text: string;
    speaker: string;
    year: string;
  };
}

// Hover cards for Historical Figures & Architectural Landmarks
export const historicalEntitiesData: Record<string, HistoricalFigureOrBuilding> = {
  'william-muir': {
    id: 'william-muir',
    name: 'Sir William Muir (1819–1905)',
    roleOrType: 'Lt. Governor of United Provinces & Founder',
    periodOrYear: '1869–1887',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Visionary British administrator and orientalist scholar whose 1869 Darbar appeal and unwavering advocacy birthed Muir Central College and the University of Allahabad.',
    quote: '"The establishment of a central college at Allahabad has been my earnest desire ever since I assumed my present office... being myself deeply impressed with the same conviction, I took occasion at the first Darbar which I held here to urge upon those present the necessity of showing that they were sincere and in earnest, by contributing to the work."',
    details: [
      'Lt. Governor of the North-Western (United) Provinces from 1868 to 1874.',
      'Addressed the historic 1869 Darbar inviting prominent citizens to fund higher education.',
      'Laid groundwork with an initial citizens\' subscription presentation in 1869.',
      'Muir Central College was named in his enduring honour upon foundation in 1873.'
    ],
    badge: 'University Founder'
  },
  'lord-northbrook': {
    id: 'lord-northbrook',
    name: 'Lord Northbrook (Viceroy of India)',
    roleOrType: 'Viceroy & Governor-General of India',
    periodOrYear: '1873',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'His Excellency the Viceroy of India who laid the foundation stone of Muir Central College on 9th December 1873.',
    details: [
      'Viceroy of India (1872–1876).',
      'Officially laid the foundation stone of the monumental Muir Central College on Dec 9, 1873.',
      'Endorsed Allahabad as the intellectual and administrative capital of Northern India.'
    ],
    badge: 'Foundation Stone (1873)'
  },
  'swinton-jacob': {
    id: 'swinton-jacob',
    name: 'Sir Samuel Swinton Jacob (1841–1917)',
    roleOrType: 'Master Architect of Indo-Saracenic Architecture',
    periodOrYear: '1909–1915',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Renowned British architect who designed the grand Senate House, the Law College, and the University Library in iconic Indo-Saracenic style with deep blue-glazed domes.',
    details: [
      'Pioneer of Indo-Saracenic architectural fusion blending Mughal arches, Rajasthani jharokhas, and Gothic halls.',
      'Approved designs for Senate House & Library in 1910; constructed at Rs. 11,67,275.',
      'Created the iconic skyline of the Senate Hall with vibrant azure tiles imported from Multan.'
    ],
    badge: 'Chief Architect'
  },
  'john-havett': {
    id: 'john-havett',
    name: 'Sir John Havett (Chancellor)',
    roleOrType: 'Chancellor & Lt. Governor of United Provinces',
    periodOrYear: '1910',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Laid the official foundation stone of the Senate House on 17th January 1910.',
    details: [
      'Officiating Chancellor who presided over the Senate Hall foundation ceremony.',
      'Championed the creation of dedicated university campuses separate from affiliate colleges.'
    ],
    badge: 'Chancellor (1910)'
  },
  'senate-house': {
    id: 'senate-house',
    name: 'The Senate House & Grand Hall',
    roleOrType: 'Architectural Crown & Administrative Center',
    periodOrYear: '1910–1915 (Cost: Rs. 11,67,275)',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200',
    shortDesc: 'The majestic blue-domed architectural masterpiece designed by Sir Swinton Jacob, housing the Senate Hall, Registrar\'s Office, and English Department.',
    details: [
      'Site finalized in 1909; foundation laid 17 Jan 1910; completed 1915.',
      'Constructed with an audited budget of Rs. 11,67,275 funded from university reserve surpluses.',
      'Features high vaulted ceilings, carved sandstone arches, and majestic ceremonial convocations.'
    ],
    badge: 'Architectural Marvel'
  },
  'indian-press': {
    id: 'indian-press',
    name: 'The Historic Indian Press Heritage Property',
    roleOrType: 'Academic Campus Acquisition (1923)',
    periodOrYear: '1923 (Cost: ~Rs. 7,00,000)',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    shortDesc: 'Acquired by the Government for the University in 1923 for Rs. 7 lakhs; provided the cradle for Philosophy, Medieval/Modern History, Political Science, and Hindi.',
    details: [
      'Birthplace of classic Hindi literature publishing (Saraswati magazine) before university conversion.',
      'Housed former Proctor\'s Office, Post Office, and multiple humanities departments.',
      'Preserved traditional tiled-roof heritage structures near the Dramatic Hall and Political Science.'
    ],
    badge: '1923 Acquisition'
  }
};

// Hover cards for every single Hostel mentioned in the history
export const historyHostelsHoverData: Record<string, HistoryHostelHoverItem> = {
  'muslim-hostel': {
    id: 'muslim-hostel',
    name: 'Muslim Boarding House (Muslim Hostel)',
    historicName: 'Muslim Boarding House (Oldest Hostel)',
    founded: '1896–1897',
    category: "Boys' Heritage",
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    tagline: 'The Oldest Hostel of the University of Allahabad (Est. 1896)',
    description: 'Constructed in 1896-97, the Muslim Boarding House stands as the very first and oldest organized hostel structure affiliated with Allahabad University.',
    historicSignificance: 'Established even before the 1904 Universities Act to house scholars arriving from across North and Central India.',
    architectureFact: 'Traditional colonial-era stone courtyard with spacious verandas, arched corridors, and central gathering lawns.',
    alumniLegacy: 'Pioneered early residential university culture in colonial India.'
  },
  'hindu-hostel': {
    id: 'hindu-hostel',
    name: 'Hindu Boarding House (Hindu Hostel)',
    historicName: 'Hindu Boarding House',
    founded: '1902–1922',
    category: "Boys' Heritage",
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    tagline: 'Evolved from a straight colonial line building (1902) to twin-winged complex (1922)',
    description: 'Constructed between 1902 and 1922, originally as a single straight line structure without lateral wings before major campus expansion.',
    historicSignificance: 'Celebrated sanctuary for freedom fighters, national leaders, and pre-eminent Hindi literary scholars.',
    architectureFact: 'Red-brick facade with long covered colonnades and wide dual wings added in the 1920s.',
    alumniLegacy: 'Cradle of nationalist debates during the Indian Independence movement.'
  },
  'muir-anj-hostel': {
    id: 'muir-anj-hostel',
    name: 'Dr. Amaranatha Jha Hostel (Muir Hostel)',
    historicName: 'Muir Hostel (Renamed to Amar Nath Jha Hostel)',
    founded: '1910–1911',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
    tagline: 'Constructed 1910-11 · Cradle of Civil Servants & Scholars',
    description: 'Built during the construction wave of the Senate House in 1910-11, later renamed after Vice-Chancellor and literary giant Dr. Amaranatha Jha.',
    historicSignificance: 'One of the first purpose-built University Hostels under the unitary residential scheme.',
    architectureFact: 'Classical quadrangle plan with 136 high-ceiling rooms, manicured inner lawns, and in-house e-library.',
    alumniLegacy: 'Produced over 100+ Union and State Civil Servants (IAS, IPS, IFS).'
  },
  'law-ssl-hostel': {
    id: 'law-ssl-hostel',
    name: 'Sir Sunder Lal Hostel (Law Hostel)',
    historicName: 'The Law Hostel (Completed 1914–15)',
    founded: '1914–1915',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    tagline: 'Named after Sir Sunder Lal, 1st Indian Vice-Chancellor · Centenary Legend',
    description: 'Constructed in 1914-15 as the dedicated Law Hostel, featuring massive sports facilities, a modern 52-room single Annex, and floodlit courts.',
    historicSignificance: 'Commemorates Sir Sunder Lal\'s contributions to Indian legal education and university autonomy.',
    architectureFact: 'Expansive colonial brick structure with floodlit basketball courts, modern fitness gym, and dining commons.',
    alumniLegacy: 'Alumni include Chief Justices of India, Supreme Court judges, and Union Ministers.'
  },
  'gn-jha-hostel': {
    id: 'gn-jha-hostel',
    name: 'Sir Ganganatha Jha Hostel',
    historicName: 'The New Hostel (Completed 1928)',
    founded: '1928',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    tagline: 'Completed 1928 · Named after MM Sir Ganganatha Jha',
    description: 'Completed in 1928 under the name "New Hostel" and subsequently dedicated to the renowned Sanskritist and Vice-Chancellor Sir Ganganatha Jha.',
    historicSignificance: 'Built during the transformative period when internal and external wings were separated.',
    architectureFact: 'Peaceful symmetrical quadrangle with 137 ventilated rooms, deep porticos, and serene reading halls.',
    alumniLegacy: 'Top civil services ranks and renowned academicians across Indian universities.'
  },
  'holland-hall': {
    id: 'holland-hall',
    name: 'Holland Hall (Oxford & Cambridge Courts)',
    historicName: 'Oxford and Cambridge Courts',
    founded: 'Circa 1920s',
    category: "Boys' Academic",
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800',
    tagline: 'Historic Oxford & Cambridge residential quadrangle design',
    description: 'Erected in the 1920s following the collegiate residential architecture of Oxford and Cambridge universities.',
    historicSignificance: 'Symbol of the "Oxford of the East" ethos, fostering close student-tutor residential relationships.',
    architectureFact: 'Two distinct architectural courts (Oxford Court and Cambridge Court) connected by stone arches.',
    alumniLegacy: 'Prominent diplomats, Rhodes scholars, and historians.'
  },
  'pc-banerji-hostel': {
    id: 'pc-banerji-hostel',
    name: 'Sir P.C. Banerjee Hostel (PCB)',
    historicName: 'P.C. Banerji Hostel',
    founded: '1920s–1930s',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800',
    tagline: 'Named after Sir Pramada Charan Banerji, eminent jurist',
    description: 'Constructed to meet surging enrollment in the 1920s-30s, named in honour of Sir Pramada Charan Banerji, High Court Judge and Vice-Chancellor.',
    historicSignificance: 'Mainstay of post-graduate humanities scholars and research fellows.',
    architectureFact: 'Two-storeyed rectangular block surrounding open central volleyball and badminton grounds.',
    alumniLegacy: 'Notable lawyers, jurists, and administrative officers.'
  },
  'diamond-jubilee-hostel': {
    id: 'diamond-jubilee-hostel',
    name: 'Diamond Jubilee Hostel (DJ Hostel)',
    historicName: 'Diamond Jubilee Hostel',
    founded: '1897 / 1930s Expansion',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1576495199011-ab4017460c70?auto=format&fit=crop&q=80&w=800',
    tagline: 'Commemorating Queen Victoria\'s Diamond Jubilee era',
    description: 'Constructed to expand university accommodation, holding over 120+ rooms with high ceilings and spacious dining facilities.',
    historicSignificance: 'One of the earliest named landmark hostels in the Chatham Lines precinct.',
    architectureFact: 'Colonial stone archways, open verandas, and expansive courtyards.',
    alumniLegacy: 'Generations of civil administrators and national scholars.'
  },
  'kp-college-hostel': {
    id: 'kp-college-hostel',
    name: 'K.P. University College Hostel',
    historicName: 'Kayastha Pathshala University College',
    founded: '1920s',
    category: "Boys' Associated",
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    tagline: 'Historic trust residence associated with early university life',
    description: 'Constructed through the philanthropic Kayastha Pathshala Trust to provide affordable scholarly housing.',
    historicSignificance: 'Pivotal institutional collaboration during the unitary university transition.',
    architectureFact: 'Classic Indo-Saracenic facade with expansive common rooms.',
    alumniLegacy: 'Eminent literary figures, advocates, and civil servants.'
  },
  'tara-chand-hostel': {
    id: 'tara-chand-hostel',
    name: 'Dr. Tara Chand Hostel (T.C. Hostel)',
    historicName: 'Dr. Tara Chand Hostel',
    founded: 'Post-Independence Expansion',
    category: "Boys' General",
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=800',
    tagline: 'Named after legendary historian & VC Dr. Tara Chand',
    description: 'Constructed to honour Dr. Tara Chand, eminent historian, author of the History of Freedom Movement, and university Vice-Chancellor.',
    historicSignificance: 'Key modern residential hub for post-graduate and research scholars.',
    architectureFact: 'Solid multi-wing modern structure with 150+ rooms and recreational sports commons.',
    alumniLegacy: 'High selection rate in UGC-NET, JRF, and provincial civil services.'
  },
  'sarojini-naidu-hostel': {
    id: 'sarojini-naidu-hostel',
    name: 'Sarojini Naidu Girls\' Hostel (S.N. Hostel)',
    historicName: 'First Dedicated Women\'s Hostel',
    founded: '1930s (Early Women\'s Fund: Rs. 66,286)',
    category: "Girls' Heritage",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    tagline: 'Pioneering Women\'s Residential Education in Northern India',
    description: 'Constructed following the University\'s early purchase of women\'s properties for Rs. 66,286; named after the Nightingale of India, Sarojini Naidu.',
    historicSignificance: 'First premier residential haven for female scholars in the United Provinces.',
    architectureFact: 'Secure walled campus with central botanical courtyard, round-the-clock security, and private dining hall.',
    alumniLegacy: 'Scores of women judges, parliamentarians, vice-chancellors, and IFS diplomats.'
  },
  'priyadarshini-hostel': {
    id: 'priyadarshini-hostel',
    name: 'Priyadarshini Girls\' Hostel',
    historicName: 'Priyadarshini Women\'s Residence',
    founded: 'Post-Independence Expansion',
    category: "Girls' General",
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    tagline: 'Dedicated Women\'s Residence for Undergraduates & Postgraduates',
    description: 'Built as the second major women\'s hostel to meet burgeoning demand from women scholars across the country.',
    historicSignificance: 'Named after Indira Priyadarshini Gandhi, alumna of Allahabad.',
    architectureFact: 'Multi-storeyed modern complex with study reading rooms and indoor recreational hall.',
    alumniLegacy: 'Top academic medalists in humanities, sciences, and languages.'
  },
  'shatabdi-girls-hostel': {
    id: 'shatabdi-girls-hostel',
    name: 'Shatabdi Girls\' Hostel',
    historicName: 'Centenary Jubilee Women\'s Hostel',
    founded: 'Centenary Era',
    category: "Girls' Modern",
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    tagline: 'Largest Modern Residential Complex for Female Scholars',
    description: 'Constructed to celebrate the University\'s centenary milestones and comfortably accommodate hundreds of boarders.',
    historicSignificance: 'Largest capacity women\'s residential hall on campus with modern amenities.',
    architectureFact: 'Contemporary multi-block facility equipped with Wi-Fi, modern dining halls, and 24/7 security surveillance.',
    alumniLegacy: 'Leading researchers, civil servants, and university professors.'
  }
};

// Complete structured handbook sections corresponding exactly to the user's text
export const completeHistorySections: HistorySectionItem[] = [
  {
    id: 'section-1-foundation',
    sectionNumber: 'Section 1',
    title: 'Foundation & Early Vision (1869–1889)',
    subtitle: 'Act XVIII, Sir William Muir\'s 1869 Appeal & The Muir Central College',
    leadParagraph: 'University of Allahabad has always occupied an esteemed place among the Universities of India for over a century. Established on 23rd September 1887 via Act XVIII, it is the fourth oldest University of India after Calcutta, Bombay, and Madras Universities.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The historic Muir Central College tower & Vizianagaram Hall, conceived by Sir William Muir and founded in 1873.',
    keyPoints: [
      { label: 'Establishment Date', value: '23rd September 1887', subtext: 'Enacted by Imperial Act XVIII of 1887' },
      { label: 'National Rank', value: '4th Oldest University', subtext: 'After Calcutta, Bombay, and Madras (1857)' },
      { label: 'Visionary Conceiver', value: 'Sir William Muir', subtext: 'Lt. Governor of United Provinces (North-Western Provinces)' },
      { label: 'College Foundation', value: '9th December 1873', subtext: 'Foundation stone laid by Viceroy Lord Northbrook' },
      { label: 'First Entrance Exam', value: 'March 1889', subtext: 'Conducted across regional examining centres' },
      { label: 'Initial Startup Loan', value: 'Rs. 5,240 /-', subtext: 'Repaid fully within two years from exam fees' }
    ],
    detailedBullets: [
      'The credit for conceiving a large Central College in Allahabad (now Prayagraj), eventually to develop into a University, goes to Sir William Muir, Lt. Governor of the United Provinces.',
      'As a result of Sir William Muir\'s initiative, the foundation stone of the Muir Central College (named after him) was laid on December 9, 1873 by His Excellency Lord Northbrook.',
      'Like the Universities of Calcutta, Bombay, and Madras, the University of Allahabad started as a degree-conferring and examining institution.',
      'The University began with a preliminary government loan of Rs. 5,240/- to meet expenses, which was prudently repaid in full within two years.',
      'Its initial revenues were generated from examination fees and the sale of official University Prospectus & Calendars.'
    ],
    historicalQuote: {
      text: 'The establishment of a central college at Allahabad (now Prayagraj) has been my earnest desire ever since I assumed my present office. Shortly after coming here I found that a strong wish prevailed among the chief people of the place for a better means of education at Allahabad; and being myself deeply impressed with the same conviction, I took occasion at the first Darbar which I held here to urge upon those present the necessity of showing that they were sincere and in earnest, by contributing to the work. The appeal was widely and liberally met, a considerable sum was subscribed and address was presented to me in 1869, praying for the establishment of the college here.',
      speaker: 'Sir William Muir',
      year: '1873 Foundation Stone Address'
    }
  },
  {
    id: 'section-2-jurisdiction',
    sectionNumber: 'Section 2',
    title: 'Jurisdiction & Structural Evolution (1887–1927)',
    subtitle: 'From 38 Affiliated Regional Colleges to a Purely Unitary & Residential University',
    leadParagraph: 'Between 1887 and 1927, the University of Allahabad exercised massive territorial reach across Northern and Central India, before deliberately restructuring into a world-class unitary, residential campus.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The sprawling Arts & Science Quadrangle during the transformative 1921-1927 unitary consolidation.',
    keyPoints: [
      { label: '1904 Universities Act', value: 'Territorial Boundary Defined', subtext: 'Agra & Awadh, Central Provinces, Berar, Ajmer, Mewar, Rajputana' },
      { label: 'Affiliation Peak', value: '38+ Colleges Affiliated', subtext: 'Institutions across northern & central Indian agencies (1887–1927)' },
      { label: '1921 University Act', value: 'Muir College Merged', subtext: 'Muir Central College lost independent status to unite with AU' },
      { label: '1922–1927 Reform', value: 'Unitary & Residential', subtext: 'Internal & external wings separated into distinct universities' }
    ],
    detailedBullets: [
      'In 1904, the Indian Universities Act was passed, formally delineating the territorial jurisdiction of the University to the United Provinces of Agra and Awadh, the Central Provinces including Berar, Ajmer, Mewar, and most states of Rajputana and Central Indian Agencies.',
      'Between 1887 and 1927, at least thirty-eight (38) different colleges and collegiate institutions across India were affiliated with Allahabad University.',
      'With the promulgation of the University of Allahabad Act in 1921, Muir Central College lost its separate independent status and merged fully into the University.',
      'Between 1922 and 1927, the internal and external wings were separated, establishing Allahabad University as a purely unitary, residential university renowned as the "Oxford of the East".'
    ]
  },
  {
    id: 'section-3-buildings',
    sectionNumber: 'Section 3',
    title: 'Financial Growth & Iconic Buildings (1892–1915)',
    subtitle: 'Reserve Funds, Sir Swinton Jacob\'s Designs & The Grand Senate Hall',
    leadParagraph: 'Through disciplined financial management of examination surpluses and investments in Government Securities, the University accumulated a robust reserve fund of Rs. 34,000 by 1899-1900, enabling it to finance its own iconic architectural skyline.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The world-famous Senate House with its Indo-Saracenic blue-glazed dome, designed by Sir Swinton Jacob (Completed 1915).',
    keyPoints: [
      { label: '1892-93 Investment', value: 'Government Securities', subtext: 'Prudent capital accumulation for permanent campus construction' },
      { label: '1899-1900 Reserve', value: 'Rs. 34,000 Surplus', subtext: 'Sufficient internal funds to begin landmark university buildings' },
      { label: 'Site Selection', value: '1909 Master Site', subtext: 'Site chosen for Library, Senate House, and Law College' },
      { label: 'Master Architect', value: 'Sir Swinton Jacob', subtext: 'Architectural designs approved in 1910' },
      { label: 'Senate Foundation', value: '17th January 1910', subtext: 'Foundation laid by Chancellor Sir John Havett' },
      { label: 'Construction Cost', value: 'Rs. 11,67,275 /-', subtext: 'Senate Hall, Law College, and former Library (completed 1915)' }
    ],
    detailedBullets: [
      'In 1892-93, the University began investing capital in Government Securities, building financial self-sufficiency.',
      'By 1899-1900, the reserve fund rose to Rs. 34,000, placing the University in a strong position to build its own bespoke campus.',
      'In 1909, the present historic site was selected for the Library, Senate House, and Law College.',
      'These monumental buildings—now housing the Registrar\'s Office, Senate Hall, and English Department—were designed by the master architect Sir Swinton Jacob.',
      'The foundation stone of the Senate House was laid on 17th January 1910 by Sir John Havett, the Chancellor.',
      'Construction commenced in 1910 and reached completion in 1915 at an audited total cost of Rs. 11,67,275/-.'
    ]
  },
  {
    id: 'section-4-campus-expansion',
    sectionNumber: 'Section 4',
    title: 'Indian Press Acquisition & Campus Expansion (1923+)',
    subtitle: '7-Lakh Rupees Purchase, Humanities Expansion & Cantonment Land',
    leadParagraph: 'In 1923, the Government acquired the historic Indian Press property for about seven lakh rupees (Rs. 7,00,000), triggering a dramatic academic expansion across both the Senate House and Muir College Campuses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The heritage courtyards of the Philosophy, History, and Hindi Bhawan academic precincts.',
    keyPoints: [
      { label: '1923 Acquisition', value: 'Rs. 7,00,000 /-', subtext: 'Historic Indian Press property acquired for University departments' },
      { label: 'Departments Housed', value: 'Philosophy, History, Hindi', subtext: 'Also Political Science, Ancient History, and former Proctor\'s Office' },
      { label: 'Senate Campus Growth', value: '12+ New Buildings', subtext: 'Union Hall, Commerce, NSS, Hindi Bhawan, Geography, Psychology' },
      { label: 'Muir Campus Additions', value: 'Applied Physics & Math', subtext: 'J.K. Institute of Applied Physics, Mathematics Dept, Gymnastic Hall' },
      { label: 'Cantonment Expansion', value: 'Law, Business & Gandhi Bhawan', subtext: 'Land from Cantonment Board & bungalow of late Dr. Bani Prasad' }
    ],
    detailedBullets: [
      'The 1923 Indian Press acquisition comprised the buildings of the Philosophy Department, the Department of Medieval/Modern History, and spacious structures formerly housing the Proctor\'s Office, Post Office, and shared department wings.',
      'The property included distinctive tiled-roof heritage structures behind the Dramatic Hall, near Political Science, and near the English Department.',
      'Senate House Campus additions since 1911 include: Union Hall, Old Guest House, Commerce Department, N.S.S. Building, Ancient History Culture & Archaeology, Political Science, Oriental Languages, Hindi Bhawan, Psychology, Education, Geography, and the New Central Library building.',
      'Muir College Campus additions include: J.K. Institute of Applied Physics, the new Gymnastic Hall, and the new Mathematics Department.',
      'To accommodate growing faculties, the University acquired land from the Cantonment Board for Business Administration (MONIRBA), the Law Faculty, and Gandhi Bhawan, along with the bungalow of the late Dr. Bani Prasad.'
    ]
  },
  {
    id: 'section-5-womens-education',
    sectionNumber: 'Section 5',
    title: 'Women\'s Education & Pioneer Hostels',
    subtitle: 'Rs. 66,286 Early Allocation, Sarojini Naidu, Priyadarshini & Shatabdi',
    leadParagraph: 'From its inception, the University of Allahabad was deeply concerned with promoting women\'s higher education, purchasing dedicated properties for Rs. 66,286 to establish women\'s collegiate classes and residential hostels.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The historic Sarojini Naidu and Priyadarshini residential halls dedicated to women scholars.',
    keyPoints: [
      { label: 'Initial Property Purchase', value: 'Rs. 66,286 /-', subtext: 'Purchased houses and adjoining buildings for Women\'s College & Hostel' },
      { label: 'First Women\'s Hostel', value: 'Sarojini Naidu Hostel', subtext: 'Named after the freedom leader and poet' },
      { label: 'Post-Independence Expansion', value: 'Priyadarshini Hostel', subtext: 'Constructed to house burgeoning women student intake' },
      { label: 'Centenary Expansion', value: 'Shatabdi Girls\' Hostel', subtext: 'Modern multi-storey facility accommodating hundreds of boarders' }
    ],
    detailedBullets: [
      'Classes for female students were first inaugurated in the historic acquired buildings adjoining the College.',
      'The legendary Sarojini Naidu Girls\' Hostel was constructed as the primary residential haven for women boarders.',
      'Later, the Priyadarshini Girls\' Hostel was built to meet increasing enrollment.',
      'Recently, the modern Shatabdi Girls\' Hostel was constructed with advanced residential infrastructure to support women pursuing undergraduate, postgraduate, and doctoral degrees.'
    ]
  },
  {
    id: 'section-6-hostels-evolution',
    sectionNumber: 'Section 6',
    title: 'Hostel Evolution & Comprehensive Timeline (1873–2000+)',
    subtitle: 'From Malaka Barracks & Lowther Castle to 15 Historic Halls of Residence',
    leadParagraph: 'Ever since the inception of the Muir Central College in 1873, constant efforts were made to accommodate students arriving from distant provinces across India, evolving through several stages before creating its iconic hostel network.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The historic courtyards of Dr. Amar Nath Jha and Sir Sunder Lal Hostels (Est. 1910–1915).',
    keyPoints: [
      { label: 'Early Boarding (Pre-1910)', value: 'Malaka Barracks', subtext: 'Barrack in Malaka near jail (now Swarup Rani Hospital) -> Lowther Castle outhouse -> Bhardwaj Ashram thatched bungalow' },
      { label: '1896–97 (Oldest)', value: 'Muslim Boarding House', subtext: 'Muslim Hostel is the oldest of all university hostels' },
      { label: '1902–1922', value: 'Hindu Boarding House', subtext: 'Originally a straight line building without two wings' },
      { label: '1910–1911', value: 'Muir Hostel (Amar Nath Jha)', subtext: 'Renamed in honour of scholar-VC Dr. Amaranatha Jha' },
      { label: '1914–1915', value: 'Law Hostel (Sir Sunder Lal)', subtext: 'Renamed after 1st Indian VC Sir Sunder Lal' },
      { label: '1928', value: 'Pandit Ganga Nath Jha Hostel', subtext: 'Initially named "New Hostel", completed 1928' },
      { label: '1920s Collegiate', value: 'Holland Hall Courts', subtext: 'Oxford and Cambridge courts constructed' },
      { label: 'Subsequent Decades', value: 'PCB, KP College & DJ', subtext: 'Sir P.C. Banerji, K.P. University College, Diamond Jubilee, and Dr. Tara Chand Hostels' }
    ],
    detailedBullets: [
      'Early Boarding Stages: Prior to dedicated hostel buildings, students were housed in a barrack in Malaka near the jail (where Swarup Rani Hospital stands today). The boarding house was then shifted to the tiled outhouse of Lowther Castle (where college classes were temporarily held), and finally to a large thatched bungalow near Bhardwaj Ashram.',
      '1896-97: Muslim Boarding House (popularly known as Muslim Hostel) was constructed, making it the oldest of all University hostels.',
      '1902-1922: The Hindu Boarding House (Hindu Hostel) was constructed, originally as a straight building without the two grand wings added in the 1920s.',
      '1910-11: Muir Hostel was completed, later renamed Dr. Amar Nath Jha Hostel.',
      '1914-15: The Law Hostel was constructed, later dedicated as Sir Sunder Lal (SSL) Hostel.',
      '1928: Pandit Ganga Nath Jha Hostel was completed (originally designated as "New Hostel").',
      'Circa 1920s: The Oxford and Cambridge courts of Holland Hall came into existence, embodying the collegiate spirit of Oxbridge.',
      'Subsequent eras saw the construction of Sir P.C. Banerji Hostel (PCB), K.P. University College Hostel, Diamond Jubilee (DJ) Hostel, and later the Dr. Tara Chand Hostel.'
    ]
  },
  {
    id: 'section-7-motto',
    sectionNumber: 'Section 7',
    title: 'University Motto: "Quot Rami Tot Arbores"',
    subtitle: '"As Many Branches, So Many Trees" · 113+ Years Millennium Legacy',
    leadParagraph: 'The official Latin motto of the University of Allahabad—"Quot Rami Tot Arbores" ("As many branches, so many trees")—embodies the expansive intellectual reach of the institution. Each academic department, affiliated hall, hostel, and scholar branches out to stand strong as an independent, towering tree of learning.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The University Crest featuring the sacred Banyan tree, symbolizing "Quot Rami Tot Arbores".',
    keyPoints: [
      { label: 'Official Motto', value: 'Quot Rami Tot Arbores', subtext: 'Latin: "As many branches, so many trees"' },
      { label: 'Philosophical Meaning', value: 'Infinite Growth of Knowledge', subtext: 'Like the sacred Banyan (Vat Vriksha), each branch takes root as a new tree' },
      { label: 'Historical Symbolism', value: '38+ Branches & Campuses', subtext: 'From Muir College to Senate House, Indian Press & 15 Hostels' },
      { label: 'Millennium Milestone', value: '113+ Years in 2000', subtext: 'Continuing into its 14th decade of national intellectual eminence' }
    ],
    detailedBullets: [
      'The University motto "Quot Rami Tot Arbores" reflects the sacred Banyan tree of Prayagraj (Akshayavat), where aerial roots grow downward to become independent supportive trunks.',
      'The mighty root system is the University established in 1887; the primary branches are its Senate House and Muir Campuses; the flowering offshoots are its 15 hostels, 38+ historical affiliates, and thousands of national leaders, jurists, Prime Ministers, and scientists.',
      'In the millennium year (2000), the University of Allahabad celebrated over 113 continuous years of academic excellence.',
      'Today, as a premier Central University, it preserves this deep Indo-Saracenic heritage while driving forward the 4-year NEP 2020 undergraduate framework.'
    ]
  }
];
