import React from 'react';
import { nepProgrammeStructure, suggestedPathways } from '../data/academicData';
import { BookOpen, GraduationCap, Award, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AcademicNEPSection: React.FC = () => {
  return (
    <section id="academic" className="py-12 md:py-16 bg-white">
      <div id="academic-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="academic-header" className="text-center max-w-3xl mx-auto mb-12">
          <p id="academic-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            National Education Policy (NEP 2020) Framework
          </p>
          <h2 id="academic-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Four-Year Dual Major Academic Structure
          </h2>
          <p id="academic-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Transitioning from the traditional single-subject annual setup to a modern, flexible four-year semester curriculum with dual majors, multidisciplinary minors, and multiple entry/exit credentials.
          </p>
        </div>

        {/* 4-Year Hierarchy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nepProgrammeStructure.map((stage, idx) => (
            <div
              key={idx}
              id={`nep-stage-card-${idx}`}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-7 flex flex-col justify-between hover:border-[#A51C30] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest text-white bg-[#A51C30] px-3.5 py-1 rounded-full">
                    {stage.year}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-2xs">
                    {stage.semesters}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#222222] mb-2.5 group-hover:text-[#A51C30] transition-colors">
                  {stage.qualification}
                </h3>

                <div className="mb-4 inline-block text-xs md:text-sm font-bold text-[#A51C30] bg-[#A51C30]/10 px-3 py-1.5 rounded-lg border border-[#A51C30]/20">
                  Cumulative Credits: {stage.totalCredits}
                </div>

                <p className="text-sm text-gray-800 leading-relaxed mb-4 font-normal">
                  {stage.coreBreakdown}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 text-xs md:text-sm text-[#6C757D] leading-relaxed">
                {stage.additionalRequirement}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Major Architecture Visual Explanation */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl border-t-[8px] border-[#A51C30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#A51C30] bg-white/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                The Dual Major Advantage
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
                Why Allahabad University Chose the Dual Major Model
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Unlike single-major institutions, the University of Allahabad enables students to pursue rigorous mastery in two core disciplines simultaneously throughout their first three years, accompanied by a supporting Minor and hands-on skill electives.
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A51C30] shrink-0" />
                  <span>Equal credit weightage and academic depth in both Major 1 and Major 2</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A51C30] shrink-0" />
                  <span>Minor subject provides an interdisciplinary edge for competitive careers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A51C30] shrink-0" />
                  <span>Direct eligibility for 2-Year PG Entrance tests in either major discipline</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-white/5 p-7 rounded-2xl border border-white/10 space-y-5 text-sm">
              <div className="border-b border-white/10 pb-4">
                <p className="font-bold text-white uppercase tracking-wider text-xs md:text-sm mb-1.5">Years 1 & 2 (Semesters I to IV)</p>
                <p className="text-gray-300 leading-relaxed">Major 1 (8 Cr) + Major 2 (8 Cr) + Minor (4 Cr) + 1 Elective AEC/SEC/MDC/VAC (2 Cr) = 22 Credits/Semester</p>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="font-bold text-white uppercase tracking-wider text-xs md:text-sm mb-1.5">Year 3 (Semesters V & VI)</p>
                <p className="text-gray-300 leading-relaxed">Major 1 Core + Electives (12 Cr) + Major 2 Core + Electives (12 Cr) = 24 Credits/Semester (Dual Major UG Degree: 136 Cr)</p>
              </div>
              <div>
                <p className="font-bold text-white uppercase tracking-wider text-xs md:text-sm mb-1.5">Year 4 (Semesters VII & VIII)</p>
                <p className="text-gray-300 leading-relaxed">Specialized single major Honours (24 Cr/sem) OR Honours with Research (12 Cr Core + 12 Cr Dissertation = 184 Cr Total)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Career Pathways */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-[#222222] mb-2">Recommended Academic Pathways</h3>
            <p className="text-xs md:text-sm text-[#6C757D]">How strategic subject combinations align with future civil services, corporate, and research pathways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedPathways.map((pathway, idx) => (
              <div
                key={idx}
                id={`pathway-card-${idx}`}
                className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:border-[#A51C30] transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-[#A51C30] mb-2">{pathway.title}</h4>
                  <div className="text-xs md:text-sm font-bold text-[#222222] bg-gray-50 p-3 rounded-xl mb-3.5 border border-gray-100 space-y-1">
                    <div><span className="text-gray-500 font-semibold">Majors:</span> {pathway.majors}</div>
                    <div><span className="text-gray-500 font-semibold">Minor:</span> {pathway.minor}</div>
                  </div>
                  <p className="text-xs md:text-sm text-[#6C757D] leading-relaxed mb-4">
                    {pathway.focus}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs md:text-sm text-gray-800">
                  <strong className="text-[#222222]">Outcomes:</strong> {pathway.careerOutcomes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
