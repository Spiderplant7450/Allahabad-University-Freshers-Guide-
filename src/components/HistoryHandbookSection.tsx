import React, { useState } from 'react';
import { 
  historicalErasData, 
  historicalFiguresData, 
  heritageBuildingsData, 
  heritageHostelsData,
  HistoricalEra,
  HistoricalFigure,
  HeritageBuilding,
  HeritageHostelArchive
} from '../data/historyData';
import { 
  Landmark, 
  BookOpen, 
  Building2, 
  Users, 
  Scroll, 
  Shield, 
  Award, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Compass, 
  Quote, 
  Sparkles,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

interface HistoryHandbookSectionProps {
  onNavigateToHostels?: () => void;
}

// Fallback image helper component with smooth failover
const ArchivalImage: React.FC<{
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}> = ({ src, fallbackSrc, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
};

export const HistoryHandbookSection: React.FC<HistoryHandbookSectionProps> = ({ onNavigateToHostels }) => {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<'chronicle' | 'monuments' | 'visionaries' | 'hostels-roll' | 'crest-motto'>('chronicle');
  
  // Selected Era in Chronicle
  const [selectedEraId, setSelectedEraId] = useState<string>(historicalErasData[0].id);
  
  // Hostels Filter
  const [hostelCategoryFilter, setHostelCategoryFilter] = useState<'ALL' | "Men's Heritage Hall" | "Women's Heritage Hall">('ALL');
  const [hostelSearchQuery, setHostelSearchQuery] = useState('');

  // Active selected era
  const activeEra: HistoricalEra = historicalErasData.find(e => e.id === selectedEraId) || historicalErasData[0];

  // Filtered hostels
  const filteredHostels: HeritageHostelArchive[] = heritageHostelsData.filter(hostel => {
    const matchesCategory = hostelCategoryFilter === 'ALL' || hostel.category === hostelCategoryFilter;
    const matchesSearch = !hostelSearchQuery.trim() || 
      hostel.name.toLowerCase().includes(hostelSearchQuery.toLowerCase()) ||
      hostel.historicOriginalName.toLowerCase().includes(hostelSearchQuery.toLowerCase()) ||
      hostel.notableAlumniFacts.toLowerCase().includes(hostelSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="history-handbook-page" className="w-full bg-[#FFFFFF] text-[#222222]">
      
      {/* 1. IMPERIAL UNIVERSITY ARCHIVE HERO HEADER */}
      <section className="relative bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#111111] text-white border-b-8 border-[#A51C30] pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Institutional Header Line */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/15">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2.5 shadow-2xl border-2 border-[#A51C30] flex-shrink-0 flex items-center justify-center">
                <img 
                  src="https://allduniv.ac.in/public/img/home/header_logo.png" 
                  alt="Official Seal of Allahabad University"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text seal if network blocked
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A51C30]/40 border border-[#A51C30] text-[#FFD7D7] text-xs font-bold uppercase tracking-widest mb-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Imperial Act XVIII of 1887 · Central University Act 2005</span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                  University of Allahabad
                </h1>
                <p className="text-sm sm:text-base text-gray-300 font-serif italic mt-0.5">
                  "Quot Rami Tot Arbores" — As Many Branches, So Many Trees
                </p>
              </div>
            </div>

            {/* Historical Key Badge Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
              <div className="bg-white/10 border border-white/15 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#FFD7D7]">1887</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-300 font-semibold">Foundation Year</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#FFD7D7]">4th</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-300 font-semibold">Oldest in India</div>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/10 border border-white/15 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#FFD7D7]">15</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-300 font-semibold">Historic Halls</div>
              </div>
            </div>
          </div>

          {/* Hero Narrative Overview */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF9EAA] font-bold block mb-2">
                Official Archival Chronicle & Institutional Ledger
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                The Heritage, Charters & Architectural Legacy of the "Oxford of the East"
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                From Sir William Muir’s 1869 Darbar appeal and Viceroy Lord Northbrook’s foundation stone in 1873 to Sir Samuel Swinton Jacob’s Indo-Saracenic blue-domed Senate House and the 15 historic residential halls, explore the primary records that shaped India’s intellectual history.
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-[#FF9EAA] font-bold text-xs uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4" />
                <span>Institute of National Importance</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Ranked as the 4th oldest university of modern India, Allahabad University has produced Prime Ministers, Supreme Court Chief Justices, Union Cabinet Ministers, Governors, and hundreds of civil servants.
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Imperial Act: 23 Sept 1887</span>
                <span className="text-white font-semibold">Central Act 2005</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ARCHIVAL DIRECTORY NAVIGATION TABS */}
      <div className="sticky top-20 z-30 bg-[#FFFFFF] border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar py-3 gap-2 sm:gap-3">
            {[
              { id: 'chronicle', label: '1. Chronological Ledger (1869–Present)', icon: Scroll },
              { id: 'monuments', label: '2. Master Monuments (Cost & Architecture)', icon: Building2 },
              { id: 'visionaries', label: '3. Founders, Viceroys & Chancellors', icon: Users },
              { id: 'hostels-roll', label: '4. Roll of 15 Historic Halls (Est. 1896+)', icon: Landmark },
              { id: 'crest-motto', label: '5. University Seal & Latin Motto', icon: Award }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                    isActive 
                      ? 'bg-[#A51C30] text-white border-[#A51C30] shadow-md' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black border-gray-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#A51C30]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN TABBED CONTENT DISPLAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* ========================================================= */}
        {/* TAB 1: CHRONOLOGICAL LEDGER */}
        {/* ========================================================= */}
        {activeTab === 'chronicle' && (
          <div className="space-y-10">
            
            {/* Era Selection Bar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                    The Four Historical Epochs of Allahabad University
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Select an era to explore statutory acts, audited budgets, archival plates, and primary source addresses.
                  </p>
                </div>
              </div>

              {/* 4 Interactive Epoch Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {historicalErasData.map((era, index) => {
                  const isSelected = selectedEraId === era.id;
                  return (
                    <button
                      key={era.id}
                      onClick={() => setSelectedEraId(era.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#A51C30] bg-[#FFF8F8] shadow-md ring-2 ring-[#A51C30]/20' 
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#A51C30] text-white flex items-center justify-center rounded-bl-xl font-bold text-xs">
                          ✓
                        </div>
                      )}
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-[#A51C30] mb-1">
                          Epoch 0{index + 1}
                        </div>
                        <div className="text-lg font-black text-[#111111]">{era.eraRange}</div>
                        <div className="text-xs font-bold text-gray-800 line-clamp-1 mt-0.5">{era.title}</div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] text-gray-600 flex items-center justify-between">
                        <span>Milestone: <strong>{era.yearMilestone}</strong></span>
                        <span className="text-[#A51C30] font-bold">View Ledger →</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Era Detailed Archival Ledger */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              
              {/* Era Header Banner */}
              <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 border-b-4 border-[#A51C30]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#A51C30] text-white text-xs font-bold uppercase tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Historical Epoch: {activeEra.eraRange}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight">{activeEra.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 mt-1 font-serif italic">{activeEra.tagline}</p>
                  </div>
                  <div className="bg-white/10 border border-white/15 px-4 py-2.5 rounded-xl text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Statutory Authority</div>
                    <div className="text-xs sm:text-sm font-bold text-[#FFD7D7]">{activeEra.primaryAct}</div>
                  </div>
                </div>
              </div>

              {/* Era Content Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Archival Plate & Primary Source Document (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Historical Narrative */}
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-xs uppercase tracking-widest text-[#A51C30] font-bold mb-2 flex items-center gap-1.5">
                      <Info className="w-4 h-4" />
                      <span>Executive Historical Summary</span>
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {activeEra.overview}
                    </p>
                  </div>

                  {/* Archival Photograph Plate */}
                  <div className="border-4 border-gray-100 rounded-xl overflow-hidden shadow-sm bg-black relative group">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-gray-900">
                      <ArchivalImage 
                        src={activeEra.archivalImage}
                        fallbackSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
                        alt={activeEra.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 bg-[#111111] text-gray-300 text-xs border-t border-gray-800 flex items-center justify-between">
                      <span className="font-serif italic">{activeEra.imageCaption}</span>
                      <span className="text-[10px] uppercase tracking-widest text-[#FF9EAA] font-bold">Official Archival Plate</span>
                    </div>
                  </div>

                  {/* Primary Source Document Excerpt */}
                  {activeEra.originalDocumentSnippet && (
                    <div className="bg-[#FFFDF9] border-2 border-[#EADFC9] rounded-xl p-6 relative">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EADFC9]">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#A51C30]" />
                          <span className="text-xs font-black uppercase tracking-wider text-[#A51C30]">
                            Primary Record: {activeEra.originalDocumentSnippet.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-500 font-serif">
                          {activeEra.originalDocumentSnippet.date}
                        </span>
                      </div>
                      
                      <div className="relative pl-6 py-2 border-l-2 border-[#A51C30]">
                        <Quote className="w-5 h-5 text-[#A51C30]/30 absolute -top-1 left-1" />
                        <p className="text-xs sm:text-sm text-gray-800 font-serif italic leading-relaxed">
                          "{activeEra.originalDocumentSnippet.quoteText}"
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#EADFC9] flex items-center justify-between text-xs text-gray-600">
                        <span>Source: <strong className="text-gray-800">{activeEra.originalDocumentSnippet.source}</strong></span>
                        <span className="text-[#A51C30] font-bold">— {activeEra.originalDocumentSnippet.signatory}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Key Metrics & Chronological Milestones (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Era Metrics Box */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
                      Key Audited Records & Stats
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {activeEra.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                          <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
                          <div className="text-base sm:text-lg font-black text-[#A51C30] mt-0.5">{stat.value}</div>
                          {stat.note && (
                            <div className="text-[10px] text-gray-600 mt-1 line-clamp-2">{stat.note}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chronological Milestones Feed */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
                      Chronological Milestone Feed
                    </h4>
                    <div className="space-y-3">
                      {activeEra.keyEvents.map((evt, eIdx) => {
                        const badgeColor = 
                          evt.category === 'charter' ? 'bg-red-100 text-red-800 border-red-200' :
                          evt.category === 'campus' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                          evt.category === 'academic' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                          'bg-emerald-100 text-emerald-800 border-emerald-200';

                        return (
                          <div key={eIdx} className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-2xs">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm font-black text-[#111111]">{evt.year}</span>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
                                {evt.category}
                              </span>
                            </div>
                            <div className="text-xs font-bold text-gray-900 mb-1">{evt.title}</div>
                            <p className="text-xs text-gray-600 leading-relaxed">{evt.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: MASTER MONUMENTS & ARCHITECTURE */}
        {/* ========================================================= */}
        {activeTab === 'monuments' && (
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                Architectural Masterworks & Construction Audits (1873–1923)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Detailed blueprints, architectural styles, and audited expenditures of Allahabad University's heritage monuments.
              </p>
            </div>

            <div className="space-y-8">
              {heritageBuildingsData.map((monument, idx) => (
                <div key={monument.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  
                  {/* Monument Header */}
                  <div className="bg-[#1A1A1A] text-white p-5 sm:p-6 border-b-4 border-[#A51C30] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#FF9EAA] tracking-widest mb-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Monument 0{idx + 1} · {monument.heritageStatus}</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black">{monument.name}</h4>
                      <p className="text-xs text-gray-300 mt-0.5">{monument.campusLocation}</p>
                    </div>

                    {/* Cost & Construction Pill */}
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-white/10 px-3 py-1.5 rounded-lg text-right">
                        <div className="text-[10px] uppercase text-gray-400">Audited Cost</div>
                        <div className="text-xs sm:text-sm font-black text-[#FFD7D7]">{monument.originalCost}</div>
                      </div>
                      <div className="bg-white/10 px-3 py-1.5 rounded-lg text-right">
                        <div className="text-[10px] uppercase text-gray-400">Construction</div>
                        <div className="text-xs sm:text-sm font-black text-white">{monument.constructionYears}</div>
                      </div>
                    </div>
                  </div>

                  {/* Monument Specs Grid */}
                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Visual Plate (5 Cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-black">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <ArchivalImage
                            src={monument.image}
                            fallbackSrc={monument.fallbackImage}
                            alt={monument.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                        <div className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Architectural Style</div>
                        <div className="text-xs font-black text-gray-900 mt-0.5">{monument.architecturalStyle}</div>
                        <div className="text-[11px] text-gray-600 mt-2">
                          Master Architect: <strong>{monument.architect}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Specifications (7 Cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div>
                        <h5 className="text-xs uppercase tracking-widest text-[#A51C30] font-bold mb-2">
                          Historical Narrative & Significance
                        </h5>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {monument.description}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                          Architectural Highlights & Engineering Innovations
                        </h5>
                        <ul className="space-y-2.5">
                          {monument.keyFeatures.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-[#A51C30] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-500">
                        <span>Current Function: <strong>University Administration & Arts Departments</strong></span>
                        <span className="text-[#A51C30] font-bold">Protected University Asset</span>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: FOUNDERS, VICEROYS & VISIONARIES */}
        {/* ========================================================= */}
        {activeTab === 'visionaries' && (
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                Visionaries, Viceroys & The First Indian Vice-Chancellor
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Portraits, tenures, and biographical chronicles of the masterminds who founded and built the University of Allahabad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historicalFiguresData.map((figure) => (
                <div key={figure.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-gray-300 transition-all">
                  
                  <div>
                    {/* Figure Portrait Banner */}
                    <div className="relative bg-[#1A1A1A] p-6 pb-4 text-center border-b-2 border-gray-200">
                      <div className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-800 mb-3">
                        <ArchivalImage
                          src={figure.image}
                          fallbackSrc={figure.fallbackImage}
                          alt={figure.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#A51C30] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                        {figure.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-white">{figure.name}</h4>
                      <p className="text-xs text-gray-300 font-serif italic mt-0.5">{figure.role}</p>
                      <div className="text-[11px] text-[#FF9EAA] font-bold mt-1">Tenure: {figure.tenure}</div>
                    </div>

                    {/* Biography & Key Contributions */}
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-gray-700 leading-relaxed font-normal">
                        {figure.biography}
                      </p>

                      <div className="space-y-2">
                        <div className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Key Historic Contributions</div>
                        <ul className="space-y-1.5">
                          {figure.notableDeeds.map((deed, dIdx) => (
                            <li key={dIdx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-1.5 flex-shrink-0"></span>
                              <span>{deed}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {figure.historicalQuote && (
                        <div className="bg-[#FFFDF9] border-l-2 border-[#A51C30] p-3 text-[11px] text-gray-700 font-serif italic rounded-r-lg">
                          "{figure.historicalQuote}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Associated Monument Footer */}
                  <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs flex items-center justify-between text-gray-600">
                    <span className="text-[11px] text-gray-500 font-semibold">Monument:</span>
                    <span className="font-bold text-gray-800 text-right line-clamp-1">{figure.monumentAssociated}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: ROLL OF 15 HISTORIC RESIDENTIAL HALLS */}
        {/* ========================================================= */}
        {activeTab === 'hostels-roll' && (
          <div className="space-y-8">
            
            {/* Header & Hostels Filter Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                  Roll of the 15 Historic Residential Halls (Est. 1896 – Present)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  From the 1896 Muslim Boarding House and 1902 Hindu Hostel to Holland Hall Oxbridge Courts and Women's Halls.
                </p>
              </div>

              {/* Action Button to Main Hostels Page */}
              {onNavigateToHostels && (
                <button
                  onClick={onNavigateToHostels}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#A51C30] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#851626] transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <Building2 className="w-4 h-4" />
                  <span>View Live Hostels & Rule Book →</span>
                </button>
              )}
            </div>

            {/* Filter Pills & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {[
                  { id: 'ALL', label: 'All Historic Halls' },
                  { id: "Men's Heritage Hall", label: "Men's Halls" },
                  { id: "Women's Heritage Hall", label: "Women's Halls" },
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setHostelCategoryFilter(f.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer border transition-all ${
                      hostelCategoryFilter === f.id
                        ? 'bg-[#A51C30] text-white border-[#A51C30]'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search hostel name or legacy..."
                  value={hostelSearchQuery}
                  onChange={(e) => setHostelSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#A51C30]"
                />
              </div>
            </div>

            {/* Hostels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHostels.map((hostel) => (
                <div key={hostel.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-2xs hover:border-gray-300 transition-all flex flex-col justify-between">
                  <div>
                    {/* Card Top Strip */}
                    <div className="bg-[#1A1A1A] p-4 text-white flex items-center justify-between border-b-2 border-[#A51C30]">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9EAA] block">
                          {hostel.category}
                        </span>
                        <h4 className="text-base font-black text-white mt-0.5">{hostel.name}</h4>
                      </div>
                      <div className="bg-white/10 px-2.5 py-1 rounded text-right">
                        <div className="text-[9px] uppercase text-gray-400">Founded</div>
                        <div className="text-xs font-black text-[#FFD7D7]">{hostel.yearEstablished}</div>
                      </div>
                    </div>

                    {/* Image & Historic Details */}
                    <div className="p-5 space-y-3.5">
                      <div className="text-xs text-gray-500 font-serif italic">
                        Historic Name: <strong className="text-gray-800 not-italic">{hostel.historicOriginalName}</strong>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs text-gray-700 leading-relaxed">
                        {hostel.significance}
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Architecture Style</div>
                        <div className="text-gray-800 font-medium">{hostel.architecturalStyle}</div>
                      </div>

                      <div className="space-y-1 text-xs">
                        <div className="text-[11px] uppercase tracking-wider text-[#A51C30] font-bold">Alumni & Civil Service Legacy</div>
                        <p className="text-gray-700 leading-relaxed">{hostel.notableAlumniFacts}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Capacity */}
                  <div className="p-3.5 bg-gray-50 border-t border-gray-200 text-xs flex items-center justify-between text-gray-600">
                    <span>Historic Capacity: <strong>{hostel.originalCap}</strong></span>
                    <span className="text-[#A51C30] font-bold">Est. {hostel.yearEstablished}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: UNIVERSITY CREST, SEAL & LATIN MOTTO */}
        {/* ========================================================= */}
        {activeTab === 'crest-motto' && (
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                The Sacred Crest, Iconography & Latin Motto
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Philosophical and historical breakdown of "Quot Rami Tot Arbores" and the University of Allahabad Seal.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                
                {/* Left: Seal Plate */}
                <div className="lg:col-span-4 text-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-white p-4 shadow-2xl border-4 border-[#A51C30] flex items-center justify-center">
                    <img 
                      src="https://allduniv.ac.in/public/img/home/header_logo.png" 
                      alt="University of Allahabad Official Crest"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#A51C30] text-white text-xs font-black uppercase tracking-widest">
                      Official University Seal
                    </span>
                    <div className="text-xs text-gray-500 font-serif italic mt-1">
                      Designed upon incorporation in 1887
                    </div>
                  </div>
                </div>

                {/* Right: Motto Explanation */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#A51C30] font-bold mb-1">
                      Official Latin Motto
                    </div>
                    <h4 className="text-3xl sm:text-4xl font-black text-[#111111] font-serif">
                      "Quot Rami Tot Arbores"
                    </h4>
                    <p className="text-base sm:text-lg text-gray-700 font-serif italic mt-1">
                      Translation: "As many branches, so many trees."
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <p>
                      The official motto reflects the sacred Banyan tree (<strong>Akshayavat</strong>) of Prayag. In the Banyan tree, aerial roots sprout from branches, reach down to the earth, and take firm root to become independent, towering trunks of their own.
                    </p>
                    <p>
                      In the academic philosophy of the University of Allahabad:
                    </p>
                    <ul className="space-y-2 pl-4 border-l-2 border-[#A51C30]">
                      <li>
                        <strong>The Central Trunk</strong> represents the University established by Act XVIII on 23rd September 1887.
                      </li>
                      <li>
                        <strong>The Master Branches</strong> represent its premier faculties: Arts, Science, Commerce, and Law.
                      </li>
                      <li>
                        <strong>The Self-Rooting Offshoots</strong> represent its 15 residential halls, 38+ historic colleges, and hundreds of thousands of scholars who went on to lead India's judiciary, parliament, and civil services.
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div className="text-[10px] text-gray-500 uppercase font-bold">Tree Motif</div>
                      <div className="text-xs font-bold text-gray-900 mt-0.5">Sacred Banyan (Vat Vriksha)</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div className="text-[10px] text-gray-500 uppercase font-bold">First Inscribed</div>
                      <div className="text-xs font-bold text-gray-900 mt-0.5">Imperial Act XVIII (1887)</div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div className="text-[10px] text-gray-500 uppercase font-bold">Living Tradition</div>
                      <div className="text-xs font-bold text-[#A51C30] mt-0.5">138 Continuous Years</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
