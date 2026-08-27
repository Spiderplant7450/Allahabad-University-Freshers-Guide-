import React, { useState } from 'react';
import { 
  historicalEntitiesData, 
  historyHostelsHoverData, 
  completeHistorySections 
} from '../data/historyData';
import { 
  Landmark, 
  BookOpen, 
  Building2, 
  Calendar, 
  Search, 
  Users, 
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  MapPin,
  FileText,
  Clock,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface HistoryHandbookSectionProps {
  onNavigateToHostels?: () => void;
}

export const HistoryHandbookSection: React.FC<HistoryHandbookSectionProps> = ({ onNavigateToHostels }) => {
  const [activeTab, setActiveTab] = useState<'chronology' | 'founders' | 'hostels' | 'landmarks'>('chronology');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState(completeHistorySections[0].id);

  const selectedSection = completeHistorySections.find(s => s.id === selectedSectionId) || completeHistorySections[0];

  // Search filtered sections
  const filteredSections = completeHistorySections.filter(s => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.leadParagraph.toLowerCase().includes(q) ||
      s.detailedBullets.some(b => b.toLowerCase().includes(q))
    );
  });

  const foundersList = Object.values(historicalEntitiesData);
  const hostelsList = Object.values(historyHostelsHoverData);

  return (
    <div id="history-handbook-page" className="w-full bg-[#FFFFFF] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Top Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A51C30] uppercase tracking-[0.2em] mb-3 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full">
            <Landmark className="w-3.5 h-3.5" />
            <span>Est. 1887 · The Fourth Oldest University of India</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#222222] tracking-tight mb-3">
            Heritage & Historical Handbook
          </h1>
          <p className="text-sm sm:text-base text-[#6C757D] font-normal leading-relaxed">
            The authentic documentation of the University of Allahabad — from the 1869 Muir Appeal and 1873 foundation stone to the 1887 Act of Incorporation, master architect Swinton Jacob's Indo-Saracenic buildings, and the complete 15-hostel evolution.
          </p>
        </div>

        {/* Top Key Era Milestones Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { year: '1869', title: 'The Muir Appeal', desc: 'Darbar address urging citizen contributions' },
            { year: '1873', title: 'Muir College Stone', desc: 'Laid by Viceroy Lord Northbrook on Dec 9' },
            { year: '1887', title: 'Act XVIII of 1887', desc: 'Passed into law on 23rd September 1887' },
            { year: '1910', title: 'Senate House Era', desc: 'Swinton Jacob Indo-Saracenic blue domes' },
          ].map((m, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-2xl">
              <span className="text-lg sm:text-xl font-black text-[#A51C30] block mb-0.5">{m.year}</span>
              <h4 className="text-xs sm:text-sm font-bold text-[#222222] mb-1">{m.title}</h4>
              <p className="text-[11px] text-[#6C757D] leading-tight">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Clean Main Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('chronology')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'chronology'
                ? 'bg-[#A51C30] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Chronology & Archival Chapters ({completeHistorySections.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('founders')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'founders'
                ? 'bg-[#A51C30] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Founders & Architects ({foundersList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hostels')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'hostels'
                ? 'bg-[#A51C30] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Historic Halls & Hostels ({hostelsList.length})</span>
          </button>
        </div>

        {/* TAB 1: CHRONOLOGY & CHAPTERS (Two-Column Master-Detail Layout) */}
        {activeTab === 'chronology' && (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search history by topic, year, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#A51C30] focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Chapters Navigation List */}
              <div className="lg:col-span-4 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block px-1">
                  Historical Records Index
                </span>
                {filteredSections.map((sec) => {
                  const isSelected = sec.id === selectedSectionId;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setSelectedSectionId(sec.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#A51C30] text-white border-[#A51C30] shadow-md'
                          : 'bg-white text-[#222222] border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-red-100' : 'text-[#A51C30]'}`}>
                          {sec.sectionNumber}
                        </span>
                        {isSelected && <ChevronRight className="w-4 h-4 text-white" />}
                      </div>
                      <h4 className="text-sm font-bold leading-snug mb-1">
                        {sec.title}
                      </h4>
                      <p className={`text-xs line-clamp-1 ${isSelected ? 'text-red-100' : 'text-gray-500'}`}>
                        {sec.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Full Selected Chapter View */}
              <div className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs space-y-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#A51C30] bg-red-50 border border-red-200 px-3.5 py-1 rounded-md inline-block mb-2">
                    {selectedSection.sectionNumber} · Official Record
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#222222] tracking-tight mb-2">
                    {selectedSection.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 font-semibold">
                    {selectedSection.subtitle}
                  </p>
                </div>

                {/* Chapter Image & Caption */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                  <img
                    src={selectedSection.image}
                    alt={selectedSection.title}
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                  <div className="p-3 bg-gray-900 text-white text-xs font-normal">
                    {selectedSection.imageCaption}
                  </div>
                </div>

                {/* Lead Text */}
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#222222] leading-relaxed font-normal">
                    {selectedSection.leadParagraph}
                  </p>

                  {/* Historical Quote Box if available */}
                  {selectedSection.historicalQuote && (
                    <div className="p-5 bg-red-50/60 rounded-2xl border-l-4 border-[#A51C30] space-y-2">
                      <span className="text-xs font-black uppercase tracking-wider text-[#A51C30] block">
                        Address by {selectedSection.historicalQuote.speaker} ({selectedSection.historicalQuote.year})
                      </span>
                      <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed">
                        "{selectedSection.historicalQuote.text}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Key Facts Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                  {selectedSection.keyPoints.map((kp, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                        {kp.label}
                      </span>
                      <h5 className="text-sm sm:text-base font-black text-[#A51C30]">
                        {kp.value}
                      </h5>
                      {kp.subtext && (
                        <p className="text-[10px] text-gray-500 leading-tight">
                          {kp.subtext}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Detailed Chronology Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#A51C30]" />
                    <span>Archival Details & Chronology</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedSection.detailedBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                        <span className="w-2 h-2 rounded-full bg-[#A51C30] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section Specific Action */}
                {selectedSection.id === 'section-6-hostels-evolution' && onNavigateToHostels && (
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium">Looking for room allocations & 67-rule hostel ordinance?</span>
                    <button
                      onClick={onNavigateToHostels}
                      className="px-4 py-2 bg-[#A51C30] hover:bg-[#8e1728] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Open Hostels Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FOUNDERS & ARCHITECTS (Clean 3-Column Card Grid) */}
        {activeTab === 'founders' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundersList.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-gray-300 transition-all"
              >
                <div>
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-100">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-[#111111]/90 text-white px-2.5 py-1 rounded-md">
                      {person.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#A51C30] uppercase tracking-wider block mb-1">
                    {person.periodOrYear}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#222222] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mb-3">
                    {person.roleOrType}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {person.shortDesc}
                  </p>

                  {person.quote && (
                    <div className="p-3.5 bg-gray-50 rounded-xl border-l-3 border-[#A51C30] text-xs text-gray-700 italic mb-4 leading-relaxed">
                      "{person.quote}"
                    </div>
                  )}

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Key Historical Accomplishments
                    </span>
                    {person.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: HISTORIC HALLS & HOSTELS (Clean 3-Column Grid) */}
        {activeTab === 'hostels' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
              <div className="text-xs text-gray-600">
                <strong className="text-gray-900">15 Historic Residential Halls:</strong> Established between 1873 and 2007, serving generations of scholars, statesmen, and scientists.
              </div>
              {onNavigateToHostels && (
                <button
                  onClick={onNavigateToHostels}
                  className="px-4 py-2 bg-[#A51C30] hover:bg-[#8e1728] text-white text-xs font-bold rounded-xl shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>View All 15 Hostels & 67 Rules</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostelsList.map((hostel) => (
                <div
                  key={hostel.id}
                  className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-gray-300 transition-all"
                >
                  <div>
                    <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-100">
                      <img
                        src={hostel.image}
                        alt={hostel.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-[#A51C30] text-white px-2.5 py-1 rounded-md">
                        Founded {hostel.founded}
                      </span>
                      <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#111111]/80 text-white px-2 py-0.5 rounded">
                        {hostel.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#222222] mb-1">
                      {hostel.name}
                    </h3>
                    {hostel.historicName && (
                      <p className="text-xs font-semibold text-gray-500 mb-2.5">
                        Historic Name: {hostel.historicName}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {hostel.description}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-gray-100 text-xs">
                      <div className="bg-gray-50 p-2.5 rounded-xl">
                        <strong className="text-gray-900 block text-[11px] mb-0.5">Historical Significance:</strong>
                        <span className="text-gray-600">{hostel.historicSignificance}</span>
                      </div>
                      <div className="bg-gray-50 p-2.5 rounded-xl">
                        <strong className="text-gray-900 block text-[11px] mb-0.5">Architecture:</strong>
                        <span className="text-gray-600">{hostel.architectureFact}</span>
                      </div>
                      <div className="bg-red-50/50 p-2.5 rounded-xl border border-red-100">
                        <strong className="text-[#A51C30] block text-[11px] mb-0.5">Alumni Legacy:</strong>
                        <span className="text-gray-700">{hostel.alumniLegacy}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
