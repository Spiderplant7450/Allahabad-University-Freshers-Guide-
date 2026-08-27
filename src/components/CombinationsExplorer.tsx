import React, { useState, useMemo } from 'react';
import { baSubjectCombinations } from '../data/academicData';
import { Search, Filter, BookOpen, Layers } from 'lucide-react';

export const CombinationsExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');

  const subjectsList = useMemo(() => {
    const set = new Set<string>();
    baSubjectCombinations.forEach(c => {
      set.add(c.major1);
      set.add(c.major2);
      set.add(c.minor);
    });
    return Array.from(set).sort();
  }, []);

  const filteredCombinations = useMemo(() => {
    return baSubjectCombinations.filter((comb) => {
      const matchSearch =
        comb.code.toString().includes(searchTerm) ||
        comb.major1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comb.major2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comb.minor.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSubject =
        selectedSubject === 'ALL' ||
        comb.major1 === selectedSubject ||
        comb.major2 === selectedSubject ||
        comb.minor === selectedSubject;

      return matchSearch && matchSubject;
    });
  }, [searchTerm, selectedSubject]);

  return (
    <section id="combinations" className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div id="combinations-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="combinations-header" className="text-center max-w-3xl mx-auto mb-10">
          <p id="comb-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Faculty of Arts · Approved Combinations
          </p>
          <h2 id="comb-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Explore All 81 B.A. Subject Combinations
          </h2>
          <p id="comb-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Every candidate submits 20–25 combination preferences during registration. Search below by subject code or discipline to explore all accredited Dual Major & Minor pairings (Codes 101 – 183).
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              id="comb-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search code (e.g. 130) or subject..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#A51C30] text-[#222222]"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <Filter className="w-5 h-5 text-[#A51C30] shrink-0" />
            <span className="text-xs md:text-sm font-bold text-gray-700 shrink-0">Filter by Subject:</span>
            <select
              id="comb-subject-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A51C30] cursor-pointer"
            >
              <option value="ALL">All Subjects (81 combinations)</option>
              {subjectsList.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-5 text-xs md:text-sm font-bold text-gray-600 flex items-center justify-between">
          <span>Showing {filteredCombinations.length} of 81 combinations</span>
          {(searchTerm || selectedSubject !== 'ALL') && (
            <button
              onClick={() => { setSearchTerm(''); setSelectedSubject('ALL'); }}
              className="text-[#A51C30] hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Combinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCombinations.map((comb) => (
            <div
              key={comb.code}
              id={`comb-card-${comb.code}`}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-[#A51C30] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs md:text-sm font-black text-white bg-[#222222] px-3 py-1 rounded-lg">
                    Code {comb.code}
                  </span>
                  <span className="text-xs font-bold text-[#A51C30] bg-[#A51C30]/10 px-2.5 py-1 rounded-md">
                    Dual Major + Minor
                  </span>
                </div>

                <div className="space-y-2 text-sm md:text-base text-gray-800 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase text-gray-500 w-16 shrink-0">Major 1:</span>
                    <span className="font-bold text-[#222222]">{comb.major1}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase text-gray-500 w-16 shrink-0">Major 2:</span>
                    <span className="font-bold text-[#222222]">{comb.major2}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase text-gray-500 w-16 shrink-0">Minor:</span>
                    <span className="font-semibold text-gray-700">{comb.minor}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
                <span>Faculty of Arts (Main Campus)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
