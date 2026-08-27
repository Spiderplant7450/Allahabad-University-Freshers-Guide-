import React, { useState, useMemo } from 'react';
import { 
  allUniversityHostels, 
  allHostelsList, 
  officialHostelFees, 
  completeHostelRuleBook, 
  keyHostelRules, 
  HostelItem 
} from '../data/hostelData';
import { 
  Building2, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight, 
  DollarSign, 
  Search, 
  Filter, 
  Clock, 
  AlertTriangle, 
  Users, 
  MapPin, 
  Lock, 
  FileText, 
  Sparkles,
  Zap,
  Scale,
  Award,
  ChevronDown,
  Info
} from 'lucide-react';

type HostelTab = 'directory' | 'rulebook' | 'fees' | 'eligibility-checker' | 'girls-rules';

export const HostelSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HostelTab>('directory');
  
  // Directory state
  const [selectedHostel, setSelectedHostel] = useState<HostelItem>(allUniversityHostels[0]);
  const [hostelCategoryFilter, setHostelCategoryFilter] = useState<string>('ALL');
  const [hostelSearchQuery, setHostelSearchQuery] = useState<string>('');

  // Rulebook state
  const [ruleSearchQuery, setRuleSearchQuery] = useState<string>('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ALL');
  const [expandedRule, setExpandedRule] = useState<number | null>(10);

  // Eligibility checker state
  const [checkerDistance, setCheckerDistance] = useState<string>('gt-25');
  const [checkerCourse, setCheckerCourse] = useState<string>('ug');
  const [checkerRegular, setCheckerRegular] = useState<boolean>(true);
  const [checkerDropped, setCheckerDropped] = useState<boolean>(false);

  // Filtered Hostels
  const filteredHostels = useMemo(() => {
    return allUniversityHostels.filter((hostel) => {
      const matchesCategory = 
        hostelCategoryFilter === 'ALL' ||
        (hostelCategoryFilter === 'BOYS_GEN' && hostel.category === "Boys' General") ||
        (hostelCategoryFilter === 'BOYS_PROF' && hostel.category === "Boys' Professional") ||
        (hostelCategoryFilter === 'GIRLS_ALL' && (hostel.category === "Girls' General" || hostel.category === "Girls' Professional")) ||
        (hostelCategoryFilter === 'INTL' && hostel.category === "International");

      const query = hostelSearchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        hostel.name.toLowerCase().includes(query) ||
        hostel.shortName.toLowerCase().includes(query) ||
        hostel.sportsFacilities.toLowerCase().includes(query) ||
        hostel.keyFeatures.toLowerCase().includes(query) ||
        hostel.location.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [hostelCategoryFilter, hostelSearchQuery]);

  // Filtered Rules
  const filteredRuleChapters = useMemo(() => {
    return completeHostelRuleBook
      .map((chapter) => {
        if (selectedChapterId !== 'ALL' && chapter.id !== selectedChapterId) {
          return null;
        }
        const matchingRules = chapter.rules.filter((rule) => {
          const query = ruleSearchQuery.toLowerCase().trim();
          if (!query) return true;
          return (
            rule.title.toLowerCase().includes(query) ||
            rule.text.toLowerCase().includes(query) ||
            rule.ruleNumber.toString() === query ||
            `rule ${rule.ruleNumber}`.includes(query) ||
            (rule.penalties && rule.penalties.toLowerCase().includes(query))
          );
        });
        if (matchingRules.length === 0) return null;
        return {
          ...chapter,
          rules: matchingRules,
        };
      })
      .filter(Boolean) as typeof completeHostelRuleBook;
  }, [selectedChapterId, ruleSearchQuery]);

  // Eligibility Evaluation
  const eligibilityResult = useMemo(() => {
    if (!checkerRegular) {
      return {
        eligible: false,
        reason: 'Ineligible under Rule 9: Only regular, full-time enrolled degree students are entitled to hostel accommodation.',
        ruleRef: 'Rule 9',
      };
    }
    if (checkerDropped) {
      return {
        eligible: false,
        reason: 'Ineligible under Rule 10(ii): Students who have failed or dropped out in university examinations cannot be admitted to any hostel.',
        ruleRef: 'Rule 10(ii)',
      };
    }
    if (checkerDistance === 'lt-25') {
      return {
        eligible: false,
        reason: 'Ineligible under Rule 10(i) [25 km Boundary Clause]: Students residing within 25 km of the University territorial limits with parents or guardians cannot be allotted a hostel room.',
        ruleRef: 'Rule 10(i)',
      };
    }
    if (checkerCourse === 'diploma') {
      return {
        eligible: false,
        reason: 'Ineligible under Rule 10(iii): Students enrolled exclusively in Diploma, Certificate, or part-time courses are not entitled to hostel admission.',
        ruleRef: 'Rule 10(iii)',
      };
    }
    return {
      eligible: true,
      reason: 'Eligible for Hostel Merit List! Your admission will be determined by entrance test merit ranking under the 60:30:10 seat ratio formula (Rule 5).',
      ruleRef: 'Rules 5, 6 & 9',
    };
  }, [checkerDistance, checkerCourse, checkerRegular, checkerDropped]);

  return (
    <section id="hostels" className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div id="hostels-container" className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div id="hostels-header" className="text-center max-w-4xl mx-auto mb-10">
          <p id="hostels-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            University of Allahabad · Residential Life & Governance
          </p>
          <h2 id="hostels-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Hostels Directory, Ordinances & Official Rule Book
          </h2>
          <p id="hostels-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed font-normal">
            Complete official directory of all 15 University Hostels, the 60:30:10 admission ratio, distance eligibility (&gt;25 km), fee schedules, and the complete 67-rule University of Allahabad Hostel Rule Book.
          </p>

          {/* Navigation Tabs Bar */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 bg-white p-2 rounded-2xl border border-gray-200 shadow-xs">
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'directory'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Hostel Directory (15 Hostels)</span>
            </button>

            <button
              onClick={() => setActiveTab('rulebook')}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'rulebook'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Official Rule Book (67 Rules)</span>
            </button>

            <button
              onClick={() => setActiveTab('fees')}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'fees'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Statutory Fee Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('girls-rules')}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'girls-rules'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Girls' Hostels Protocol</span>
            </button>

            <button
              onClick={() => setActiveTab('eligibility-checker')}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'eligibility-checker'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>25km Eligibility Checker</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: HOSTELS DIRECTORY & EXPLORER */}
        {/* ========================================================================= */}
        {activeTab === 'directory' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Filter and Search Controls */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Chips */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {[
                  { id: 'ALL', label: 'All 15 Hostels' },
                  { id: 'BOYS_GEN', label: "Boys' General (6)" },
                  { id: 'BOYS_PROF', label: "Boys' Professional (2)" },
                  { id: 'GIRLS_ALL', label: "Girls' Hostels (5)" },
                  { id: 'INTL', label: 'International (2)' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setHostelCategoryFilter(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      hostelCategoryFilter === cat.id
                        ? 'bg-[#A51C30] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={hostelSearchQuery}
                  onChange={(e) => setHostelSearchQuery(e.target.value)}
                  placeholder="Search hostel name, amenities, sports..."
                  className="w-full pl-9 pr-4 py-2 text-xs md:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#A51C30] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Split Showcase Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Scrollable Hostel Selection Cards */}
              <div className="lg:col-span-5 space-y-3 max-h-[750px] overflow-y-auto pr-1">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1 mb-2">
                  Showing {filteredHostels.length} Hostels
                </div>
                {filteredHostels.map((hostel) => {
                  const isSelected = selectedHostel.id === hostel.id;
                  return (
                    <div
                      key={hostel.id}
                      id={`hostel-card-${hostel.id}`}
                      onClick={() => setSelectedHostel(hostel)}
                      className={`p-4 md:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-l-4 border-l-[#A51C30] border-gray-300 shadow-md ring-1 ring-[#A51C30]/20'
                          : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            hostel.category.includes('Girls')
                              ? 'bg-purple-100 text-purple-800'
                              : hostel.category.includes('Professional')
                              ? 'bg-blue-100 text-blue-800'
                              : hostel.category.includes('International')
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-red-50 text-[#A51C30]'
                          }`}>
                            {hostel.category}
                          </span>
                          {hostel.established && (
                            <span className="text-[10px] text-gray-500 font-medium">
                              Est. {hostel.established}
                            </span>
                          )}
                        </div>
                        <h4 className={`text-sm md:text-base font-bold ${isSelected ? 'text-[#A51C30]' : 'text-[#222222]'}`}>
                          {hostel.name}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{hostel.location}</span>
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 shrink-0 ${isSelected ? 'text-[#A51C30]' : 'text-gray-400'}`} />
                    </div>
                  );
                })}
              </div>

              {/* Right: Detailed Selected Hostel View */}
              <div id="hostel-detail-panel" className="lg:col-span-7 bg-white p-7 md:p-9 rounded-3xl border border-gray-200 shadow-md space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest bg-[#A51C30] text-white px-3.5 py-1 rounded-full inline-block">
                      {selectedHostel.category}
                    </span>
                    <h3 id="selected-hostel-title" className="text-2xl md:text-3xl font-black text-[#222222] mt-2">
                      {selectedHostel.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#A51C30]" />
                      <span>{selectedHostel.location}</span>
                      {selectedHostel.established && <span>· Founded {selectedHostel.established}</span>}
                    </p>
                  </div>
                  <div className="text-right bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-200">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Room Allocation</span>
                    <span className="text-xs md:text-sm font-black text-[#222222]">{selectedHostel.rooms}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-normal">
                  {selectedHostel.description}
                </p>

                {/* Key Amenities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Dining & Mess Setup</span>
                    <p className="text-xs md:text-sm font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Student Rotating Mess (₹45–50/meal)</span>
                    </p>
                    <span className="text-[11px] text-gray-500">Ordinance XXIII: In-room cooking prohibited</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">In-House Study / Library</span>
                    <p className="text-xs md:text-sm font-bold text-[#222222] flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#A51C30] shrink-0" />
                      <span>Dedicated Reading Hall & Wi-Fi</span>
                    </p>
                    <span className="text-[11px] text-gray-500">Equipped with academic journals & periodicals</span>
                  </div>

                  <div className="sm:col-span-2 pt-3 border-t border-gray-200 space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Sports, Fitness & Courtyard</span>
                    <p className="text-xs md:text-sm font-semibold text-gray-800">
                      {selectedHostel.sportsFacilities}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#222222] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#A51C30]" />
                    <span>Verified Facilities & Inmate Guidelines</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-gray-700">
                    {selectedHostel.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#A51C30] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Complete Hostels Registry Grid */}
            <div className="bg-white p-7 md:p-9 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-6 text-center">
                Statutory Schedule of University Hostels (Rule 1)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                  <h4 className="text-sm font-bold text-[#A51C30] uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Boys' General Hostels</span>
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-800">
                    {allHostelsList.boysGeneral.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                  <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Girls' Hostels</span>
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-800">
                    {allHostelsList.girlsGeneralAndProfessional.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Professional & International</span>
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-800">
                    {[...allHostelsList.boysProfessional, ...allHostelsList.international].map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: OFFICIAL RULE BOOK EXPLORER (67 RULES) */}
        {/* ========================================================================= */}
        {activeTab === 'rulebook' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Rule Search and Chapter Selector */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-black text-[#222222] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#A51C30]" />
                    <span>University of Allahabad (Hostel) Rules Browser</span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    Search through all 67 official statutory rules across Parts I, II, and III.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={ruleSearchQuery}
                    onChange={(e) => setRuleSearchQuery(e.target.value)}
                    placeholder="Search by rule keyword (e.g., 200W, attendance, 25km, curfew)..."
                    className="w-full pl-9 pr-4 py-2 text-xs md:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#A51C30] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Chapter Filter Chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => setSelectedChapterId('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedChapterId === 'ALL'
                      ? 'bg-[#A51C30] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Chapters (67 Rules)
                </button>
                {completeHostelRuleBook.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedChapterId === ch.id
                        ? 'bg-[#A51C30] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {ch.part}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapters & Rules List */}
            <div className="space-y-6">
              {filteredRuleChapters.map((chapter) => (
                <div key={chapter.id} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#A51C30] bg-red-50 px-2.5 py-1 rounded-md">
                      {chapter.part}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#222222] mt-2">
                      {chapter.chapterTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {chapter.summary}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {chapter.rules.map((rule) => {
                      const isExpanded = expandedRule === rule.ruleNumber;
                      return (
                        <div
                          key={rule.ruleNumber}
                          className={`rounded-2xl border transition-all ${
                            isExpanded
                              ? 'bg-gray-50/80 border-[#A51C30]/40 shadow-xs'
                              : 'bg-white border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <button
                            onClick={() => setExpandedRule(isExpanded ? null : rule.ruleNumber)}
                            className="w-full p-4 md:p-5 flex items-center justify-between text-left cursor-pointer"
                          >
                            <div className="flex items-center gap-3 pr-2">
                              <span className="text-xs font-black uppercase tracking-wider bg-[#222222] text-white px-2.5 py-1 rounded-lg shrink-0">
                                Rule {rule.ruleNumber}
                              </span>
                              <span className="text-sm md:text-base font-bold text-[#222222]">
                                {rule.title}
                              </span>
                            </div>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform shrink-0 ${
                                isExpanded ? 'rotate-180 text-[#A51C30]' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-gray-700 space-y-3 border-t border-gray-200/60 mt-1">
                              <p className="whitespace-pre-line leading-relaxed font-normal">
                                {rule.text}
                              </p>
                              {rule.penalties && (
                                <div className="p-3 bg-red-50 text-red-900 rounded-xl border border-red-200 flex items-center gap-2 font-bold text-xs">
                                  <AlertTriangle className="w-4 h-4 text-[#A51C30] shrink-0" />
                                  <span>Statutory Penalty: {rule.penalties}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: STATUTORY FEE MATRIX */}
        {/* ========================================================================= */}
        {activeTab === 'fees' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Fee Table */}
              <div className="lg:col-span-7 bg-white p-7 md:p-9 rounded-3xl border border-gray-200 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-xl font-black text-[#222222] flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-[#A51C30]" />
                      <span>Statutory Hostel Fee Structure (Rules 17 - 20)</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Payable via Bank Draft / Banker's Cheque to Hostel Superintendent</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Audited Slabs
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Prescribed Component</th>
                        <th className="p-3.5">Statutory Amount</th>
                        <th className="p-3.5">Ordinance Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {officialHostelFees.map((fee, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="p-3.5 font-bold text-gray-800">{fee.item}</td>
                          <td className="p-3.5 font-black text-[#A51C30] whitespace-nowrap">{fee.amount}</td>
                          <td className="p-3.5 text-xs text-gray-500 font-medium">{fee.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Annual Cost Estimator Breakdown */}
              <div className="lg:col-span-5 bg-[#111111] text-white p-7 md:p-8 rounded-3xl shadow-xl border-t-[8px] border-[#A51C30] space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A51C30] bg-white/10 px-3 py-1 rounded-full inline-block">
                    First-Year Resident Estimate
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">
                    Total Estimated Outlay
                  </h3>
                  <p className="text-xs text-gray-300">
                    Comprehensive 10-month academic term breakdown for new B.A. freshers.
                  </p>
                </div>

                {/* Single vs Double Breakdown */}
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-gray-200">Single-Seated Room Total:</span>
                      <span className="text-lg font-black text-[#A51C30]">~₹15,000 / year</span>
                    </div>
                    <p className="text-[11px] text-gray-300">
                      Includes Admission (₹500), Maint (₹2000), Games (₹1000), Cultural (₹500), Electricity Advance (₹8000), 10 Mo Rent (₹3000). Excludes ₹5,000 refundable caution deposit.
                    </p>
                  </div>

                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-gray-200">Double-Seated Room Total:</span>
                      <span className="text-lg font-black text-emerald-400">~₹13,000 / year</span>
                    </div>
                    <p className="text-[11px] text-gray-300">
                      Includes Admission (₹500), Maint (₹2000), Games (₹1000), Cultural (₹500), Electricity Advance (₹7000), 10 Mo Rent (₹2000). Excludes ₹5,000 refundable caution deposit.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1 text-xs text-gray-300">
                    <span className="font-bold text-white block">Mess Payment Model (Rule 53):</span>
                    <span>Meal diets are charged directly on a pay-per-diet basis (~₹45–₹50 per diet) with unlimited quantity. Billed monthly based on attendance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: GIRLS' HOSTELS REGULATIONS */}
        {/* ========================================================================= */}
        {activeTab === 'girls-rules' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-900 bg-purple-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Official Guidelines (Rules 60, 61 & 62)
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#222222]">
                  Girls' Hostels Safety, Gate Timings & Visitor Protocols
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2 font-normal leading-relaxed">
                  The University of Allahabad enforces structured residential security protocols across Sarojini Naidu, Priyadarshini, Shatabdi, Kalpana Chawla, Mahadevi Verma, and Hall of Residence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Visiting Hours Card */}
                <div className="p-6 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-800 text-white flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-purple-950">Official Visiting Days & Hours</h4>
                  <ul className="text-xs md:text-sm text-purple-900 space-y-2 leading-relaxed">
                    <li>• <strong>Wednesdays & Fridays:</strong> 4:00 PM – 7:00 PM</li>
                    <li>• <strong>Sundays:</strong> 7:00 AM – 11:00 AM & 4:00 PM – 7:00 PM</li>
                    <li>• Visitors MUST present an official Identity Card attested by the Superintendent.</li>
                    <li>• Parents also require prior permission before meeting wards.</li>
                  </ul>
                </div>

                {/* Curfew & Gate Timings */}
                <div className="p-6 bg-red-50/70 rounded-2xl border border-red-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#A51C30] text-white flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-red-950">Curfew & Gate Closure (Rule 61)</h4>
                  <ul className="text-xs md:text-sm text-red-900 space-y-2 leading-relaxed">
                    <li>• <strong>Summer In-Time:</strong> 7:00 PM</li>
                    <li>• <strong>Winter In-Time:</strong> 6:00 PM</li>
                    <li>• <strong>Late Return (up to 9:00 PM):</strong> Allowed maximum 3 evenings/month with written request from bona fide local guardian.</li>
                    <li>• Out-pass required for shopping or cinema.</li>
                  </ul>
                </div>

                {/* Overnight Stay Out */}
                <div className="p-6 bg-blue-50/70 rounded-2xl border border-blue-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-800 text-white flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-blue-950">Overnight Leave Rules (Rule 62)</h4>
                  <ul className="text-xs md:text-sm text-blue-900 space-y-2 leading-relaxed">
                    <li>• <strong>Monthly Limit:</strong> Maximum FOUR (4) nights per month.</li>
                    <li>• <strong>Gazetted Holidays:</strong> Permitted with advance written application.</li>
                    <li>• Application MUST be accompanied by written consent from parents or legal guardian.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: 25KM ELIGIBILITY CHECKER */}
        {/* ========================================================================= */}
        {activeTab === 'eligibility-checker' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Checker Form */}
              <div className="lg:col-span-6 bg-white p-7 md:p-9 rounded-3xl border border-gray-200 shadow-sm space-y-5">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-black text-[#222222] flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#A51C30]" />
                    <span>Hostel Eligibility Evaluator (Rule 10)</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Check if your residential location and academic status satisfy University Ordinances.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Distance Question */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                      1. Residential Distance from Allahabad University:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setCheckerDistance('gt-25')}
                        className={`p-3 rounded-xl border text-xs md:text-sm font-bold transition-all cursor-pointer ${
                          checkerDistance === 'gt-25'
                            ? 'bg-[#A51C30] text-white border-[#A51C30] shadow-xs'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        Greater than 25 km (&gt; 25 km)
                      </button>
                      <button
                        onClick={() => setCheckerDistance('lt-25')}
                        className={`p-3 rounded-xl border text-xs md:text-sm font-bold transition-all cursor-pointer ${
                          checkerDistance === 'lt-25'
                            ? 'bg-[#A51C30] text-white border-[#A51C30] shadow-xs'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        Within 25 km (Local Resident)
                      </button>
                    </div>
                  </div>

                  {/* Course Type Question */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                      2. Course Programme Enrolled:
                    </label>
                    <select
                      value={checkerCourse}
                      onChange={(e) => setCheckerCourse(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#A51C30]"
                    >
                      <option value="ug">Undergraduate Degree (B.A., B.Sc., B.Com - 60% Quota)</option>
                      <option value="pg">Postgraduate Degree (M.A., M.Sc. - 30% Quota)</option>
                      <option value="prof">Professional Degree (B.Tech, MBA, 5-Yr Law)</option>
                      <option value="research">D.Phil / Ph.D. / JRF Scholar (10% Quota)</option>
                      <option value="diploma">Diploma / Certificate Only</option>
                    </select>
                  </div>

                  {/* Checkbox conditions */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 text-xs md:text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkerRegular}
                        onChange={(e) => setCheckerRegular(e.target.checked)}
                        className="w-4 h-4 text-[#A51C30] rounded focus:ring-0 cursor-pointer"
                      />
                      <span>I am a regular, full-time student (Rule 9)</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs md:text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkerDropped}
                        onChange={(e) => setCheckerDropped(e.target.checked)}
                        className="w-4 h-4 text-[#A51C30] rounded focus:ring-0 cursor-pointer"
                      />
                      <span>I have previously dropped out or failed a university exam (Rule 10)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Evaluation Outcome Box */}
              <div className="lg:col-span-6 space-y-4">
                <div className={`p-7 md:p-8 rounded-3xl border shadow-sm ${
                  eligibilityResult.eligible
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-red-50 border-red-300 text-red-950'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {eligibilityResult.eligible ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-7 h-7 text-[#A51C30] shrink-0" />
                    )}
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest block opacity-75">
                        Statutory Evaluation · {eligibilityResult.ruleRef}
                      </span>
                      <h4 className="text-xl font-black">
                        {eligibilityResult.eligible ? 'Provisionally Eligible for Allotment' : 'Not Eligible for Hostel Allotment'}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed font-medium">
                    {eligibilityResult.reason}
                  </p>
                </div>

                {/* 60:30:10 Ratio Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-3">
                  <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#A51C30]" />
                    <span>Statutory Seat Ratio Formula (Rule 5)</span>
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-lg font-black text-[#A51C30] block">60%</span>
                      <span className="text-gray-600 font-semibold">UG Seats</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-lg font-black text-[#222222] block">30%</span>
                      <span className="text-gray-600 font-semibold">PG Seats</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-lg font-black text-gray-700 block">10%</span>
                      <span className="text-gray-600 font-semibold">D.Phil / M.Tech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
