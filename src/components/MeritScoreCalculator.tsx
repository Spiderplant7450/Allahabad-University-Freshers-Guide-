import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertCircle, Calendar, Clock, MapPin } from 'lucide-react';

export const MeritScoreCalculator: React.FC = () => {
  const [langScore, setLangScore] = useState<string>('125.00');
  const [domainScore, setDomainScore] = useState<string>('185.50');
  const [gatScore, setGatScore] = useState<string>('160.25');

  const lNum = parseFloat(langScore) || 0;
  const dNum = parseFloat(domainScore) || 0;
  const gNum = parseFloat(gatScore) || 0;
  const totalComputedScore = (lNum + dNum + gNum).toFixed(3);
  const totalNum = parseFloat(totalComputedScore);

  const getSlotInfo = (score: number) => {
    if (score >= 510) {
      return { day: "Phase I (Day 1)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "510 & above", status: "Top Tier Merit" };
    } else if (score >= 486) {
      return { day: "Phase I (Day 1)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "509 – 486", status: "Very High Merit" };
    } else if (score >= 473) {
      return { day: "Phase I (Day 2)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "485 – 473", status: "High Merit (Round 1–2 Cutoff Band)" };
    } else if (score >= 462) {
      return { day: "Phase I (Day 2)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "472 – 462", status: "Round 2–3 Cutoff Band" };
    } else if (score >= 451) {
      return { day: "Phase I (Day 3)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "461 – 451", status: "Round 3–4 Cutoff Band" };
    } else if (score >= 441) {
      return { day: "Phase I (Day 3)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "450 – 441", status: "Round 4 Cutoff Band" };
    } else if (score >= 428) {
      return { day: "Phase I (Day 4)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "440 – 428", status: "Round 5 Cutoff Band" };
    } else if (score >= 419) {
      return { day: "Phase I (Day 4)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "427 – 419", status: "Round 5 Category Band" };
    } else if (score >= 412) {
      return { day: "Phase I (Day 5)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "418 – 412", status: "Round 6 Category Band" };
    } else if (score >= 399) {
      return { day: "Phase I (Day 5)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "411 – 399", status: "Round 6 Category Band" };
    } else if (score >= 369) {
      return { day: "Phase I (Day 6)", time: "10:00 AM – 01:00 PM (Morning Slot)", band: "398 – 369", status: "Subsequent Rounds Band" };
    } else {
      return { day: "Phase I (Day 6)", time: "02:00 PM – 05:00 PM (Afternoon Slot)", band: "368 & below", status: "Concluding Phase Band" };
    }
  };

  const currentSlot = getSlotInfo(totalNum);

  return (
    <section id="calculator" className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div id="calculator-container" className="max-w-7xl mx-auto px-6">
        <div id="calc-header" className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#A51C30]/10 text-[#A51C30] px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-4 h-4" />
            Official Scoring Logic
          </div>
          <h2 id="calc-heading" className="text-3xl md:text-4xl font-black text-[#222222] mb-3 tracking-tight">
            Self-Calculate Your B.A. Computed Merit Score
          </h2>
          <p id="calc-subtitle" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Under University of Allahabad B.A. guidelines, your total admission merit score is calculated strictly by summing three components:
            <strong className="text-[#222222]"> Best Language + Best Domain Subject + General Aptitude Test</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div id="calc-inputs-card" className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#222222] mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#A51C30] text-white flex items-center justify-center text-sm font-bold">1</span>
              Enter Your CUET Score Components
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                  Best of Language Score (English or Hindi)
                </label>
                <div className="relative">
                  <input
                    id="calc-input-language"
                    type="number"
                    step="0.01"
                    min="0"
                    max="250"
                    value={langScore}
                    onChange={(e) => setLangScore(e.target.value)}
                    placeholder="e.g. 122.37"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A51C30] focus:border-transparent outline-none text-lg font-bold text-[#222222]"
                  />
                  <span className="absolute right-4 top-3.5 text-sm text-gray-500 font-bold">/ 250</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5">Select the higher score between your English or Hindi language paper.</p>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                  Best Domain Subject Score
                </label>
                <div className="relative">
                  <input
                    id="calc-input-domain"
                    type="number"
                    step="0.01"
                    min="0"
                    max="250"
                    value={domainScore}
                    onChange={(e) => setDomainScore(e.target.value)}
                    placeholder="e.g. 193.26"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A51C30] focus:border-transparent outline-none text-lg font-bold text-[#222222]"
                  />
                  <span className="absolute right-4 top-3.5 text-sm text-gray-500 font-bold">/ 250</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5">Your highest scoring domain subject (e.g. Geography, History, Pol. Science, Economics, etc.).</p>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                  General Aptitude Test (GAT) Score
                </label>
                <div className="relative">
                  <input
                    id="calc-input-gat"
                    type="number"
                    step="0.01"
                    min="0"
                    max="250"
                    value={gatScore}
                    onChange={(e) => setGatScore(e.target.value)}
                    placeholder="e.g. 164.13"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#A51C30] focus:border-transparent outline-none text-lg font-bold text-[#222222]"
                  />
                  <span className="absolute right-4 top-3.5 text-sm text-gray-500 font-bold">/ 250</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5">Mandatory General Test paper score as conducted by NTA.</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-xs md:text-sm text-gray-600">
              <span className="font-semibold">Formula: Language + Domain + GAT</span>
              <button
                onClick={() => { setLangScore('140.00'); setDomainScore('190.00'); setGatScore('170.00'); }}
                className="text-[#A51C30] font-bold hover:underline cursor-pointer"
              >
                Reset Example
              </button>
            </div>
          </div>

          {/* Results Column */}
          <div id="calc-result-card" className="lg:col-span-6 bg-white p-8 rounded-2xl border-2 border-[#A51C30]/20 shadow-md">
            <h3 className="text-xl font-bold text-[#222222] mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center text-sm font-bold">2</span>
              Computed Score & Verification Slot
            </h3>

            {/* Big Total Box */}
            <div id="calc-total-box" className="bg-[#A51C30] text-white p-6 rounded-xl text-center mb-6 shadow-sm">
              <p className="text-xs md:text-sm uppercase tracking-widest font-bold text-white/80 mb-1">Your Total Computed Merit Score</p>
              <div id="calc-total-number" className="text-5xl md:text-6xl font-black tracking-tight my-1">{totalComputedScore}</div>
              <p className="text-xs md:text-sm text-white/90 font-medium">Out of approx. 750 maximum marks</p>
            </div>

            {/* Slot Card */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-700">Verification Schedule Band</span>
                <span className="text-xs md:text-sm font-bold bg-[#A51C30]/10 text-[#A51C30] px-3.5 py-1.5 rounded-full border border-[#A51C30]/20">
                  {currentSlot.band}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Scheduled Phase</p>
                    <p className="text-sm md:text-base font-bold text-[#222222]">{currentSlot.day}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Assigned Time Slot</p>
                    <p className="text-sm md:text-base font-bold text-[#222222]">{currentSlot.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                <MapPin className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Physical Verification Venue</p>
                  <p className="text-sm md:text-base font-bold text-[#222222]">Pravesh Bhawan, Chatham Lines Campus</p>
                  <p className="text-xs md:text-sm text-gray-600">University of Allahabad, Prayagraj – 211002</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2.5 text-xs md:text-sm text-amber-900 bg-amber-50 p-4 rounded-xl border border-amber-200">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <span><strong>Strict Protocol:</strong> Physical reporting time is strict. Candidates must report only within their designated score band slot with all original documents and photocopies.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
