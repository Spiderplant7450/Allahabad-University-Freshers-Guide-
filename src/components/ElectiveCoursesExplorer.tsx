import React, { useState, useMemo } from 'react';
import { aecCourses, secCourses, mdcCourses, vacCourses, ElectiveCourse } from '../data/coursesData';
import { Search, Sparkles, Filter, BookOpen, Layers, DollarSign, CheckCircle } from 'lucide-react';

export const ElectiveCoursesExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'AEC' | 'SEC' | 'MDC' | 'VAC'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [feeFilter, setFeeFilter] = useState('ALL');

  const allCourses: ElectiveCourse[] = useMemo(() => {
    return [...aecCourses, ...secCourses, ...mdcCourses, ...vacCourses];
  }, []);

  const displayedCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchCat = activeCategory === 'ALL' || course.category === activeCategory;
      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchFee =
        feeFilter === 'ALL' ||
        (feeFilter === 'FREE' && course.fee.toLowerCase() === 'free') ||
        (feeFilter === '500' && course.fee === '₹500') ||
        (feeFilter === '1000+' && (course.fee === '₹1,000' || course.fee === '₹1,500' || course.fee === '₹2,000'));

      return matchCat && matchSearch && matchFee;
    });
  }, [allCourses, activeCategory, searchQuery, feeFilter]);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'AEC':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'SEC':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'MDC':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'VAC':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="electives" className="py-12 md:py-16 bg-white">
      <div id="electives-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="electives-header" className="text-center max-w-3xl mx-auto mb-12">
          <p id="electives-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Over 250+ Multidisciplinary & Skill Offerings
          </p>
          <h2 id="electives-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Complete Elective Courses Catalogue
          </h2>
          <p id="electives-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Under NEP regulations, every B.A. student completes <strong>one 2-credit course per semester</strong> in the first two years (AEC/SEC in Sem I & II, MDC/VAC in Sem III & IV). Browse all verified courses with fees, departments, and course objectives below.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-gray-100 rounded-2xl max-w-3xl mx-auto border border-gray-200">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'ALL' ? 'bg-[#A51C30] text-white shadow-sm' : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              All ({allCourses.length})
            </button>
            <button
              onClick={() => setActiveCategory('AEC')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'AEC' ? 'bg-[#A51C30] text-white shadow-sm' : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              AEC ({aecCourses.length}) · Sem I-II
            </button>
            <button
              onClick={() => setActiveCategory('SEC')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'SEC' ? 'bg-[#A51C30] text-white shadow-sm' : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              SEC ({secCourses.length}) · Sem I-II
            </button>
            <button
              onClick={() => setActiveCategory('MDC')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'MDC' ? 'bg-[#A51C30] text-white shadow-sm' : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              MDC ({mdcCourses.length}) · Sem III-IV
            </button>
            <button
              onClick={() => setActiveCategory('VAC')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'VAC' ? 'bg-[#A51C30] text-white shadow-sm' : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              VAC ({vacCourses.length}) · Sem III-IV
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              id="course-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course title, department, or keyword..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#A51C30] text-[#222222]"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-xs md:text-sm font-bold text-gray-700 shrink-0">Fee Filter:</span>
            <select
              id="course-fee-select"
              value={feeFilter}
              onChange={(e) => setFeeFilter(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A51C30] cursor-pointer"
            >
              <option value="ALL">All Fees</option>
              <option value="FREE">Free Courses (₹0)</option>
              <option value="500">Standard ₹500</option>
              <option value="1000+">Specialized (₹1,000 to ₹2,000)</option>
            </select>
          </div>
        </div>

        {/* Quick Rules Banner */}
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-8 text-xs md:text-sm text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-blue-700 shrink-0" />
            <span>
              <strong>Registration Protocol:</strong> Elective course selection takes place online via the <strong>Samarth Portal</strong> on a first-come, first-served basis (intake 20–50 seats per course).
            </span>
          </div>
          <span className="text-xs md:text-sm font-bold bg-white text-blue-900 px-3.5 py-1.5 rounded-full border border-blue-200 shrink-0 shadow-2xs">
            Showing {displayedCourses.length} Courses
          </span>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course, idx) => (
            <div
              key={`${course.category}-${course.id}-${idx}`}
              id={`course-card-${course.category}-${course.id}`}
              className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:border-[#A51C30] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`text-xs font-black px-3 py-1 rounded-full border ${getCategoryBadgeClass(course.category)}`}>
                    {course.category}
                  </span>
                  <span className={`text-xs md:text-sm font-bold px-3 py-1 rounded-md ${
                    course.fee.toLowerCase() === 'free' ? 'bg-emerald-50 text-emerald-800 font-black border border-emerald-200' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {course.fee}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#222222] mb-2 group-hover:text-[#A51C30] transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs md:text-sm text-[#A51C30] font-bold mb-3">
                  Dept: {course.department}
                </p>

                <p className="text-xs md:text-sm text-[#6C757D] leading-relaxed mb-5">
                  {course.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs md:text-sm text-gray-500">
                <span>2 Credits (3-Month Duration)</span>
                <span className="font-semibold text-gray-800">Intake: 20–50 seats</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
