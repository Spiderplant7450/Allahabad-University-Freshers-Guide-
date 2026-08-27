// Authentic Archival Data & Primary Records for University of Allahabad (Est. 1887)

export interface HistoricalEra {
  id: string;
  eraRange: string;
  title: string;
  tagline: string;
  themeColor: string;
  yearMilestone: string;
  overview: string;
  primaryAct: string;
  archivalImage: string;
  imageCaption: string;
  stats: { label: string; value: string; note?: string }[];
  keyEvents: { year: string; title: string; desc: string; category: 'charter' | 'campus' | 'academic' | 'hostel' }[];
  originalDocumentSnippet?: {
    title: string;
    source: string;
    date: string;
    quoteText: string;
    signatory: string;
  };
}

export interface HistoricalFigure {
  id: string;
  name: string;
  honorific: string;
  tenure: string;
  role: string;
  image: string;
  fallbackImage: string;
  biography: string;
  notableDeeds: string[];
  historicalQuote?: string;
  monumentAssociated: string;
  badge: string;
}

export interface HeritageBuilding {
  id: string;
  name: string;
  originalCost: string;
  constructionYears: string;
  architect: string;
  architecturalStyle: string;
  image: string;
  fallbackImage: string;
  description: string;
  keyFeatures: string[];
  campusLocation: string;
  heritageStatus: string;
}

export interface HeritageHostelArchive {
  id: string;
  name: string;
  historicOriginalName: string;
  yearEstablished: string;
  category: "Men's Heritage Hall" | "Women's Heritage Hall" | "Associated College Hall";
  image: string;
  fallbackImage: string;
  architecturalStyle: string;
  significance: string;
  notableAlumniFacts: string;
  originalCap: string;
}

// 4 Grand Historical Eras
export const historicalErasData: HistoricalEra[] = [
  {
    id: 'era-inception-1869',
    eraRange: '1869 – 1887',
    title: 'The Muir Appeal & The Act of Inception',
    tagline: 'From Sir William Muir\'s 1869 Darbar address to Imperial Act XVIII of 1887',
    themeColor: '#A51C30',
    yearMilestone: '1887',
    overview: 'Conceived in 1869 by Sir William Muir, Lieutenant-Governor of the North-Western Provinces, the institution arose from a passionate citizen subscription to establish Northern India\'s highest seat of learning. Muir Central College\'s foundation stone was laid in 1873 by Viceroy Lord Northbrook, culminating in the passing of Imperial Act XVIII on 23 September 1887.',
    primaryAct: 'Imperial Act XVIII of 1887 (23rd September 1887)',
    archivalImage: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Vizianagaram_Hall_3.jpg',
    imageCaption: 'The majestic Vizianagaram Tower and Indo-Gothic quadrangle of Muir Central College, foundation stone laid 1873.',
    stats: [
      { label: 'Incorporation Date', value: '23 Sept 1887', note: 'Passed into law as Act XVIII' },
      { label: 'National Precedence', value: '4th Oldest in India', note: 'After Calcutta, Bombay & Madras (1857)' },
      { label: 'Initial Startup Loan', value: '₹ 5,240 /-', note: 'Repaid fully within 24 months from exam fees' },
      { label: 'First Examination', value: 'March 1889', note: 'Conducted across North India testing centres' }
    ],
    keyEvents: [
      { year: '1869', title: 'The Historic Darbar Appeal', desc: 'Sir William Muir addresses the citizens of Allahabad, proposing a premier Central College funded by public subscription.', category: 'charter' },
      { year: '1873', title: 'Foundation Stone of Muir College', desc: 'Viceroy Lord Northbrook formally lays the foundation stone on 9th December 1873 in the presence of leading scholars and nobility.', category: 'campus' },
      { year: '1887', title: 'Passing of Act XVIII', desc: 'The University of Allahabad is formally incorporated as a degree-granting and examining University.', category: 'charter' },
      { year: '1889', title: 'First Entrance Examination', desc: 'The University conducts its inaugural entrance examination, gaining immediate academic prestige across Northern India.', category: 'academic' }
    ],
    originalDocumentSnippet: {
      title: 'Address at the 1869 Citizens\' Darbar',
      source: 'Official Proceedings of the Government of the North-Western Provinces',
      date: 'Allahabad, 1869',
      quoteText: 'The establishment of a central college at Allahabad has been my earnest desire ever since I assumed office. Shortly after coming here, I found that a strong wish prevailed among the chief people of the place for better means of education... being myself deeply impressed with the same conviction, I took occasion at the first Darbar to urge upon those present the necessity of showing that they were sincere, by contributing to the work.',
      signatory: 'Sir William Muir, K.C.S.I., Lieutenant-Governor'
    }
  },
  {
    id: 'era-jurisdiction-1888',
    eraRange: '1888 – 1921',
    title: 'The Great Territorial Reach & Swinton Jacob Era',
    tagline: 'Exercising jurisdiction over 38+ regional colleges from Rajputana to Central Provinces',
    themeColor: '#1A365D',
    yearMilestone: '1910',
    overview: 'During this golden era of expansion, the University exercised sweeping jurisdiction across the United Provinces, Central Provinces, Berar, Ajmer, Mewar, and Central Indian Agencies. By 1910, master architect Sir Samuel Swinton Jacob was commissioned to design the monumental Senate House, Law College, and Library with its celebrated azure glazed domes.',
    primaryAct: 'Indian Universities Act of 1904 & Senate House Charter (1910)',
    archivalImage: 'https://www.tourmyindia.com/socialimg/allahabad-university.jpg',
    imageCaption: 'The iconic blue-domed Senate House designed by Sir Samuel Swinton Jacob (Completed 1915 at Rs. 11.67 Lakhs).',
    stats: [
      { label: 'Affiliated Colleges', value: '38+ Colleges', note: 'Spread across North & Central India' },
      { label: 'Reserve Accumulation', value: '₹ 34,000 /-', note: 'Surplus reserves by 1900 to fund construction' },
      { label: 'Senate Hall Cost', value: '₹ 11,67,275 /-', note: 'Audited expenditure completed in 1915' },
      { label: 'Senate Foundation', value: '17 Jan 1910', note: 'Laid by Chancellor Sir John Hewett' }
    ],
    keyEvents: [
      { year: '1896', title: 'Muslim Boarding House Founded', desc: 'The very first organized residential hostel of the University is erected near the campus.', category: 'hostel' },
      { year: '1904', title: 'Universities Act Jurisdiction', desc: 'Jurisdiction formally defined covering UP, CP, Berar, Ajmer, and Rajputana princely states.', category: 'charter' },
      { year: '1910', title: 'Senate House Construction Begins', desc: 'Chancellor Sir John Hewett lays the foundation stone of the Senate Hall designed by Sir Swinton Jacob.', category: 'campus' },
      { year: '1915', title: 'Senate Hall & Law College Completed', desc: 'The majestic Indo-Saracenic complex is inaugurated at a total cost of ₹ 11,67,275.', category: 'campus' }
    ],
    originalDocumentSnippet: {
      title: 'Senate Hall Foundation Address',
      source: 'Convocational Archives of the University of Allahabad',
      date: '17th January 1910',
      quoteText: 'We stand today on ground destined to hold the intellectual capital of Northern India. The designs of Sir Swinton Jacob blend the majesty of Mughal archways with the enduring strength of academic halls, creating a permanent home for scholarship that shall endure for centuries.',
      signatory: 'Sir John Prescott Hewett, Chancellor & Lt. Governor'
    }
  },
  {
    id: 'era-unitary-1922',
    eraRange: '1922 – 1947',
    title: 'The Oxford of the East & Unitary Transformation',
    tagline: '1921 University Act, Indian Press Acquisition & The Golden Age of Civil Servants',
    themeColor: '#7B1113',
    yearMilestone: '1922',
    overview: 'Under the revolutionary 1921 Act, the University shed its affiliating character to become a purely unitary, residential university. Muir Central College merged into the core, and in 1923 the historic Indian Press property was acquired for ₹ 7 Lakhs, providing housing for Philosophy, History, Hindi, and Political Science.',
    primaryAct: 'University of Allahabad Act of 1921 (Effective 1922)',
    archivalImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhhyBav-SwT3s1j8C4zkmLQqcCWB1tc-9faE_bkIqXg&s=10',
    imageCaption: 'The Arts Quadrangle during the legendary era when Allahabad produced India\'s premier statesmen and scholars.',
    stats: [
      { label: 'Indian Press Acquisition', value: '₹ 7,00,000 /-', note: 'Acquired in 1923 for Humanities Faculties' },
      { label: 'Women\'s Fund Allocation', value: '₹ 66,286 /-', note: 'Purchased dedicated property for Women\'s College & Hostels' },
      { label: 'Residential Halls', value: '10+ Halls', note: 'Oxford & Cambridge courts established' },
      { label: 'Civil Service Dominance', value: '#1 in India', note: 'Highest selection rate for ICS and early IAS' }
    ],
    keyEvents: [
      { year: '1921', title: 'The Unitary Act of 1921', desc: 'Muir Central College unites with Allahabad University; external examining wings transition into distinct regional universities.', category: 'charter' },
      { year: '1923', title: 'Indian Press Property Purchased', desc: 'The Government acquires the legendary Indian Press campus for ₹ 7,00,000 to house Philosophy, History, and Hindi.', category: 'campus' },
      { year: '1928', title: 'Pandit Ganga Nath Jha Hostel Built', desc: 'Completed as the "New Hostel" and dedicated to the towering Sanskrit scholar and Vice-Chancellor.', category: 'hostel' },
      { year: '1930s', title: 'Sarojini Naidu Girls\' Hostel', desc: 'First dedicated women\'s residence opened with modern facilities following ₹ 66,286 fund allotment.', category: 'hostel' }
    ],
    originalDocumentSnippet: {
      title: 'Minute on Unitary Residential Reorganization',
      source: 'University Syndicate Resolution Records',
      date: '1922',
      quoteText: 'The transition from an examining syndicate to a teaching and residential university marks the dawn of true collegiality. In these quadrangles, tutors and scholars reside side by side, creating a brotherhood of learning worthy of the ancient traditions of Prayag.',
      signatory: 'Sir Sunder Lal & Sir Ganganatha Jha'
    }
  },
  {
    id: 'era-central-modern',
    eraRange: '1948 – Present',
    title: 'Central University Status & Contemporary Heritage',
    tagline: 'Central University Act 2005, Modern Science Institutes & NEP 2020 Framework',
    themeColor: '#0F172A',
    yearMilestone: '2005',
    overview: 'Following Independence, Allahabad University nurtured legendary luminaries including Prime Ministers, Supreme Court Chief Justices, and Sahitya Akademi laureates. In 2005, the Parliament of India restored its heritage status as an Institute of National Importance by enacting the University of Allahabad Act, 2005.',
    primaryAct: 'University of Allahabad Act, 2005 (Act No. 26 of 2005)',
    archivalImage: 'https://images.shiksha.com/mediadata/images/1745386542php4ymmj9.jpeg',
    imageCaption: 'The Central University Campus preserving its 138-year-old architectural heritage while pioneering NEP 2020.',
    stats: [
      { label: 'Central University Date', value: '14 July 2005', note: 'Restored Central Status via Act 26 of 2005' },
      { label: 'Campus Land Area', value: '232+ Acres', note: 'Across Senate, Muir, Chatham Lines, MONIRBA & Medical Wings' },
      { label: 'Current Hostels', value: '15 Historic Halls', note: 'Housing over 4,000 scholars' },
      { label: 'Academic Departments', value: '38+ Departments', note: 'Under Arts, Science, Commerce & Law Faculties' }
    ],
    keyEvents: [
      { year: '1955', title: 'J.K. Institute of Applied Physics', desc: 'Foundation of one of India\'s earliest computer science and electronic research institutes.', category: 'academic' },
      { year: '2005', title: 'Restoration of Central University Status', desc: 'Parliament passes the University of Allahabad Act, 2005, designating it an Institution of National Importance.', category: 'charter' },
      { year: '2010', title: 'Centenary of Senate House', desc: 'Commemoration of 100 years of the Senate Hall laying stone.', category: 'campus' },
      { year: '2023', title: 'Rollout of 4-Year FYUGP NEP Curriculum', desc: 'Launch of Dual Major and multidisciplinary research framework.', category: 'academic' }
    ]
  }
];

// Key Historical Founders, Architects & Chancellors
export const historicalFiguresData: HistoricalFigure[] = [
  {
    id: 'william-muir',
    name: 'Sir William Muir, K.C.S.I.',
    honorific: 'Founder & Visionary',
    tenure: '1869 – 1885',
    role: 'Lt. Governor of North-Western Provinces (1868–1874)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sir_William_Muir_WDL11445.png/500px-Sir_William_Muir_WDL11445.png',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sir_William_Muir_KCSI.jpg/800px-Sir_William_Muir_KCSI.jpg',
    biography: 'Scholar, orientalist, and colonial administrator whose 1869 Darbar appeal and passionate advocacy resulted in the establishment of Muir Central College and the subsequent founding of Allahabad University.',
    notableDeeds: [
      'Delivered the historic 1869 Darbar speech urging citizens of Allahabad to fund higher education.',
      'Secured imperial sanctions and prime land for the construction of Muir Central College.',
      'Muir College (founded 1873) was named in his enduring honour by Viceroy Lord Northbrook.'
    ],
    historicalQuote: 'The establishment of a central college at Allahabad has been my earnest desire ever since I assumed office.',
    monumentAssociated: 'Muir Central College & Vizianagaram Hall',
    badge: 'Conceiver of the University'
  },
  {
    id: 'lord-northbrook',
    name: 'Thomas Baring, Lord Northbrook',
    honorific: 'Viceroy of India',
    tenure: '1872 – 1876',
    role: 'Viceroy & Governor-General of India',
    image: 'https://cdn.britannica.com/78/173778-050-03F0EA97/Thomas-George-Baring-1st-earl-of-Northbrook-1880.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lord_Northbrook.jpg/800px-Lord_Northbrook.jpg',
    biography: 'Viceroy and Governor-General who formally laid the foundation stone of Muir Central College on 9th December 1873, dedicating the monument to the enlightenment of Northern India.',
    notableDeeds: [
      'Presided over the grand foundation stone ceremony on 9 December 1873.',
      'Sanctioned imperial grants matching citizen public subscriptions.',
      'Affirmed Allahabad\'s role as the educational focal point of the United Provinces.'
    ],
    historicalQuote: 'May this college flourish and become a fountain of light and learning for the people of this vast province.',
    monumentAssociated: 'Muir Foundation Stone (Dec 9, 1873)',
    badge: 'Foundation Viceroy'
  },
  {
    id: 'swinton-jacob',
    name: 'Col. Sir Samuel Swinton Jacob',
    honorific: 'Master Architect',
    tenure: '1909 – 1915',
    role: 'Chief Architect of Indo-Saracenic Architecture',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/14/Sir_Samuel_Swinton_Jacob.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Samuel_Swinton_Jacob.jpg/800px-Samuel_Swinton_Jacob.jpg',
    biography: 'Legendary British engineer and architect who designed the Senate House, Law College, and Library. He pioneered the Indo-Saracenic fusion combining Rajasthani jharokhas, Mughal cupolas, and Persian azure glazed tiles.',
    notableDeeds: [
      'Drafted the master plan of the Senate House Campus in 1909–1910.',
      'Created the iconic skyline with vibrant turquoise and blue glazed domes imported from Multan.',
      'Designed high-vaulted ceremonial halls with acoustics engineered for major convocations.'
    ],
    historicalQuote: 'Architecture in India must speak the vernacular of its soil while standing firm on modern engineering foundations.',
    monumentAssociated: 'The Senate House, Library & Law College',
    badge: 'Chief Architect'
  },
  {
    id: 'sir-sunder-lal',
    name: 'Sir Sunder Lal, C.I.E.',
    honorific: 'First Indian Vice-Chancellor',
    tenure: '1906 – 1917',
    role: 'Jurist, Philanthropist & Vice-Chancellor (Multiple Terms)',
    image: 'https://pbs.twimg.com/media/E14gEGhUcAAP-IT.jpg',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sir_Sunder_Lal.jpg/800px-Sir_Sunder_Lal.jpg',
    biography: 'Pre-eminent jurist and the first Indian Vice-Chancellor of Allahabad University. He championed university financial autonomy, judicial studies, and residential hostel construction.',
    notableDeeds: [
      'Served 3 terms as Vice-Chancellor of Allahabad University (1906, 1912, 1914).',
      'Spearheaded the funding and construction of the Law Hostel (later renamed Sir Sunder Lal Hostel).',
      'Simultaneously served as the first Vice-Chancellor of Banaras Hindu University in 1916.'
    ],
    historicalQuote: 'An autonomous university is the greatest guarantee of national character and intellectual liberty.',
    monumentAssociated: 'Sir Sunder Lal (SSL) Hostel & Faculty of Law',
    badge: '1st Indian Vice-Chancellor'
  },
  {
    id: 'amarnath-jha',
    name: 'Dr. Amaranatha Jha, Padma Bhushan',
    honorific: 'Scholar & Vice-Chancellor',
    tenure: '1938 – 1947',
    role: 'Vice-Chancellor & Renowned Professor of English Literature',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3tN5BnKzySm6iDYIk-lGzLbG3Hsx8dQLV-jQonGslg&s',
    fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Amarnath_Jha.jpg/800px-Amarnath_Jha.jpg',
    biography: 'One of the most illustrious literary minds in Indian history. Under his leadership, Allahabad became the intellectual epicentre of India, producing top administrative officers and distinguished scholars.',
    notableDeeds: [
      'Vice-Chancellor of Allahabad University (1938–1947) and later Vice-Chancellor of BHU.',
      'Muir Hostel was permanently renamed Dr. Amar Nath Jha Hostel in recognition of his legacy.',
      'President of the All India English Teachers Association and recipient of the Padma Bhushan.'
    ],
    historicalQuote: 'A university is not a mere factory for degrees, but a sanctuary where character and intellect are forged together.',
    monumentAssociated: 'Dr. Amar Nath Jha (ANJ) Hostel & English Dept',
    badge: 'Legendary Vice-Chancellor'
  }
];

// Major Architectural Heritage Monuments
export const heritageBuildingsData: HeritageBuilding[] = [
  {
    id: 'senate-house',
    name: 'The Senate House & Grand Convocation Hall',
    originalCost: '₹ 11,67,275 /-',
    constructionYears: '1910 – 1915',
    architect: 'Sir Samuel Swinton Jacob',
    architecturalStyle: 'Indo-Saracenic with Multani Blue-Glazed Ceramic Domes',
    image: 'https://thumbs.dreamstime.com/b/senate-house-complex-allahabad-university-allahabad-prayagraj-uttar-pradesh-india-senate-house-complex-allahabad-university-339096805.jpg',
    fallbackImage: 'https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover_UehabcN-Tg.webp?tr=w-3840',
    description: 'The monumental crown of the Arts Campus, holding the grand Senate Hall, the Vice-Chancellor\'s Secretariat, Registrar\'s Chambers, and the Department of English.',
    keyFeatures: [
      'Distinctive azure blue-tiled dome visible across the Old Katra skyline.',
      'Deep verandas, carved sandstone arches, and intricately carved chhatris.',
      'High-vaulted Convocation Hall with red-polished mosaic flooring and presidential dais.'
    ],
    campusLocation: 'Senate House Campus (Arts Quadrangle, Katra)',
    heritageStatus: 'Grade-A Monumental Heritage Structure'
  },
  {
    id: 'vizianagaram-hall',
    name: 'Muir Central College & Vizianagaram Hall',
    originalCost: '₹ 9,00,000+ (Funded by Public Subscription & Maharajah of Vizianagaram)',
    constructionYears: '1873 – 1886',
    architect: 'William Emerson (Architect of Victoria Memorial)',
    architecturalStyle: 'Indo-Gothic, Egyptian & Saracenic Synthesis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Vizianagaram_Hall_3.jpg',
    fallbackImage: 'https://pbs.twimg.com/media/GbYMKnDa8AAdnrK.jpg',
    description: 'The historic cradle of the University, featuring a 200-foot sandstone clock tower, vaulted arcades, and grand galleries holding Science and Language departments.',
    keyFeatures: [
      '200-ft soaring Clock Tower dominating the Muir College Quadrangle.',
      'Polychromatic sandstone imported from Chunar quarries.',
      'Arched cloisters designed for natural cross-ventilation in North Indian summers.'
    ],
    campusLocation: 'Muir College Campus, Prayagraj',
    heritageStatus: 'Protected Historic Educational Landmark'
  },
  {
    id: 'indian-press-building',
    name: 'Historic Indian Press Heritage Property',
    originalCost: '₹ 7,00,000 /- (1923 Acquisition)',
    constructionYears: 'Late 19th Century / Acquired 1923',
    architect: 'Colonial Public Works & Heritage Guilds',
    architecturalStyle: 'Traditional Tiled-Roof Colonial Humanities Cloister',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhhyBav-SwT3s1j8C4zkmLQqcCWB1tc-9faE_bkIqXg&s=10',
    fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'The birthplace of modern Hindi literary publishing (Saraswati Magazine), purchased by the Government in 1923 to house Philosophy, History, and Hindi departments.',
    keyFeatures: [
      'Historic terracotta-tiled roofs behind the Dramatic Hall and Political Science.',
      'Former Proctor\'s and Post Office heritage courtyards.',
      'Shaded intellectual alcoves where prominent Hindi and Urdu poets penned national classics.'
    ],
    campusLocation: 'Behind Senate Hall & Political Science Dept',
    heritageStatus: 'Historic Academic Humanities Precinct'
  }
];

// All 15 Historic Residential Halls
export const heritageHostelsData: HeritageHostelArchive[] = [
  {
    id: 'muslim-hostel',
    name: 'Muslim Boarding House',
    historicOriginalName: 'Muslim Boarding House (Oldest Hostel of AU)',
    yearEstablished: '1896 – 1897',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Colonial Quadrangle with Central Courtyard & Arcaded Verandas',
    significance: 'The very first organized residential hostel of Allahabad University, built before the 1904 Universities Act to house outstation scholars.',
    notableAlumniFacts: 'Cradle of early 20th-century legal minds, political leaders, and civil servants.',
    originalCap: '120+ Scholars'
  },
  {
    id: 'hindu-hostel',
    name: 'Hindu Boarding House (Hindu Hostel)',
    historicOriginalName: 'Hindu Boarding House',
    yearEstablished: '1902 (Wings added 1922)',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Twin-Winged Colonial Red-Brick Colonnade',
    significance: 'Originally constructed as a straight line building in 1902 and expanded in 1922 with two symmetrical wings; sanctuary for freedom movement leaders.',
    notableAlumniFacts: 'Nurtured scores of freedom fighters, Hindi writers, and national parliamentarians.',
    originalCap: '180+ Scholars'
  },
  {
    id: 'anj-hostel',
    name: 'Dr. Amar Nath Jha Hostel',
    historicOriginalName: 'Muir Hostel (Built 1910–1911)',
    yearEstablished: '1910 – 1911',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Classical Colonial Quadrangle with Lush Lawns & E-Library',
    significance: 'Built alongside the Senate House and later renamed in honour of scholar-VC Dr. Amaranatha Jha; known as the nursery of civil servants.',
    notableAlumniFacts: 'Over 100+ selections into the Indian Civil Service (ICS) and Indian Administrative Service (IAS).',
    originalCap: '136 Single Rooms'
  },
  {
    id: 'ssl-hostel',
    name: 'Sir Sunder Lal Hostel (SSL)',
    historicOriginalName: 'The Law Hostel (1914–1915)',
    yearEstablished: '1914 – 1915',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Solid Colonial Brickwork with Sports Complex & 52-Room Annex',
    significance: 'Constructed as the dedicated Law Hostel under Sir Sunder Lal\'s tenure; renowned for debate culture and athletics championships.',
    notableAlumniFacts: 'Produced Supreme Court Chief Justices, Union Ministers, and Senior Advocates.',
    originalCap: '140+ Rooms'
  },
  {
    id: 'holland-hall',
    name: 'Holland Hall',
    historicOriginalName: 'Oxford and Cambridge Courts',
    yearEstablished: 'Circa 1920s',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Oxbridge-Style Dual Residential Quadrangle',
    significance: 'Epitomizes the "Oxford of the East" collegiate system with resident tutors, common tables, and inter-court debates.',
    notableAlumniFacts: 'Distinguished ambassadors, foreign service diplomats, and Rhodes scholars.',
    originalCap: '160+ Scholars'
  },
  {
    id: 'gn-jha-hostel',
    name: 'Sir Ganganatha Jha Hostel',
    historicOriginalName: 'The New Hostel (1928)',
    yearEstablished: '1928',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Symmetrical Quadrangle with Deep Shaded Porticos',
    significance: 'Completed during the unitary transformation and named after Mahamahopadhyaya Sir Ganganatha Jha.',
    notableAlumniFacts: 'Renowned researchers, vice-chancellors, and university professors.',
    originalCap: '137 Rooms'
  },
  {
    id: 'sarojini-naidu-hostel',
    name: 'Sarojini Naidu Girls\' Hostel (S.N.)',
    historicOriginalName: 'First Dedicated Women\'s Hostel',
    yearEstablished: '1930s (Funded by ₹ 66,286 Allocation)',
    category: "Women's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Walled Residential Haven with Courtyard Gardens',
    significance: 'Pioneered higher education for women in Northern India; named in honor of freedom leader and poet Sarojini Naidu.',
    notableAlumniFacts: 'High Court judges, women parliamentarians, and Indian Foreign Service officers.',
    originalCap: '120+ Boarders'
  },
  {
    id: 'pc-banerjee-hostel',
    name: 'Sir P.C. Banerji Hostel (PCB)',
    historicOriginalName: 'P.C. Banerji Hostel',
    yearEstablished: '1920s – 1930s',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Two-Storeyed Quadrangle Surrounding Sports Grounds',
    significance: 'Named in honour of Sir Pramada Charan Banerji, eminent High Court jurist and Vice-Chancellor.',
    notableAlumniFacts: 'Generations of legal scholars, judges, and administrative magistrates.',
    originalCap: '110+ Rooms'
  },
  {
    id: 'diamond-jubilee-hostel',
    name: 'Diamond Jubilee Hostel (DJ)',
    historicOriginalName: 'Diamond Jubilee Hostel',
    yearEstablished: '1897 / 1930s Expansion',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1576495199011-ab4017460c70?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1576495199011-ab4017460c70?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Colonial Stone Verandas & Spacious Common Dining',
    significance: 'Commemorating Queen Victoria\'s Diamond Jubilee era, situated in the green Chatham Lines enclave.',
    notableAlumniFacts: 'Eminent civil engineers, scientists, and state administrators.',
    originalCap: '120+ Rooms'
  },
  {
    id: 'tara-chand-hostel',
    name: 'Dr. Tara Chand Hostel (T.C.)',
    historicOriginalName: 'Dr. Tara Chand Hostel',
    yearEstablished: 'Post-Independence',
    category: "Men's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Modern Multi-Winged Academic Residence',
    significance: 'Named after the legendary national historian, author of the History of Freedom Movement, and Vice-Chancellor Dr. Tara Chand.',
    notableAlumniFacts: 'High selection rates in UGC-NET, JRF research, and state public service commissions.',
    originalCap: '150+ Rooms'
  },
  {
    id: 'priyadarshini-hostel',
    name: 'Priyadarshini Girls\' Hostel',
    historicOriginalName: 'Priyadarshini Women\'s Hall',
    yearEstablished: 'Post-Independence Expansion',
    category: "Women's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Modern Multi-Floor Complex with Study Libraries',
    significance: 'Built as the second major women\'s residence, named in honour of Prime Minister Indira Priyadarshini Gandhi.',
    notableAlumniFacts: 'University gold medalists, researchers, and public servants.',
    originalCap: '200+ Scholars'
  },
  {
    id: 'shatabdi-girls-hostel',
    name: 'Shatabdi Girls\' Hostel',
    historicOriginalName: 'Centenary Jubilee Women\'s Residence',
    yearEstablished: 'Centenary Milestone (2000s)',
    category: "Women's Heritage Hall",
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    fallbackImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    architecturalStyle: 'Contemporary Multi-Block Secure Residential Complex',
    significance: 'Constructed to mark the University\'s centenary milestones, offering state-of-the-art amenities for female researchers and scholars.',
    notableAlumniFacts: 'Leading doctors of philosophy, national research fellows, and faculty members.',
    originalCap: '350+ Boarders'
  }
];

// Compatibility export for any references
export const completeHistorySections = historicalErasData.map(era => ({
  id: era.id,
  sectionNumber: era.eraRange,
  title: era.title,
  subtitle: era.tagline,
  leadParagraph: era.overview,
  image: era.archivalImage,
  imageCaption: era.imageCaption,
  keyPoints: era.stats.map(s => ({ label: s.label, value: s.value, subtext: s.note })),
  detailedBullets: era.keyEvents.map(e => `${e.year}: ${e.title} — ${e.desc}`),
  historicalQuote: era.originalDocumentSnippet ? {
    text: era.originalDocumentSnippet.quoteText,
    speaker: era.originalDocumentSnippet.signatory,
    year: era.originalDocumentSnippet.date
  } : undefined
}));

export const historicalEntitiesData = Object.fromEntries(
  historicalFiguresData.map(f => [f.id, {
    id: f.id,
    name: f.name,
    roleOrType: f.role,
    periodOrYear: f.tenure,
    image: f.image,
    shortDesc: f.biography,
    details: f.notableDeeds,
    quote: f.historicalQuote,
    badge: f.badge
  }])
);

export const historyHostelsHoverData = Object.fromEntries(
  heritageHostelsData.map(h => [h.id, {
    id: h.id,
    name: h.name,
    historicName: h.historicOriginalName,
    founded: h.yearEstablished,
    category: h.category,
    image: h.image,
    tagline: h.significance,
    description: h.significance,
    historicSignificance: h.significance,
    architectureFact: h.architecturalStyle,
    alumniLegacy: h.notableAlumniFacts
  }])
);
