import React, { useState } from 'react';
import { admissionWorkflow, cutoffRoundsStructure, verificationSlotsSchedule } from '../data/admissionData';
import { CheckCircle, ExternalLink, Calendar, MapPin, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const AdmissionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'cutoffs' | 'slots'>('workflow');

  return (
    <section id="admissions" className="py-12 md:py-16 bg-white">
      <div id="admissions-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="admissions-header" className="text-center max-w-3xl mx-auto mb-12">
          <p id="admissions-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            B.A. (NEP) Admission Framework · 2026–27
          </p>
          <h2 id="admissions-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Admission Process, Cut-offs & Verification
          </h2>
          <p id="admissions-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            The complete roadmap for incoming freshers at Allahabad University — from CUET results and Samarth registration to multi-round cutoffs and physical document reporting.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-gray-100 rounded-2xl max-w-xl mx-auto border border-gray-200">
            <button
              id="tab-workflow-btn"
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'workflow'
                  ? 'bg-[#A51C30] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              6-Step Workflow
            </button>
            <button
              id="tab-cutoffs-btn"
              onClick={() => setActiveTab('cutoffs')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'cutoffs'
                  ? 'bg-[#A51C30] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              Cut-off Rounds Format
            </button>
            <button
              id="tab-slots-btn"
              onClick={() => setActiveTab('slots')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'slots'
                  ? 'bg-[#A51C30] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#222222]'
              }`}
            >
              Verification Schedule
            </button>
          </div>
        </div>

        {/* Tab 1: Workflow */}
        {activeTab === 'workflow' && (
          <div id="workflow-tab-content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionWorkflow.map((step) => (
              <div
                key={step.id}
                id={`workflow-card-${step.id}`}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#A51C30] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#A51C30] bg-[#A51C30]/10 px-3.5 py-1 rounded-full">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                      {step.portal}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#222222] mb-3 group-hover:text-[#A51C30] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#6C757D] text-sm md:text-base leading-relaxed mb-4 font-normal">
                    {step.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-gray-100 pt-4 space-y-2.5">
                    {step.keyInstructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#A51C30] shrink-0 mt-0.5" />
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>

                  {step.portalUrl && (
                    <a
                      href={step.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#A51C30] hover:underline"
                    >
                      Visit Official Portal <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Cutoffs */}
        {activeTab === 'cutoffs' && (
          <div id="cutoffs-tab-content" className="max-w-5xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#222222] mb-2.5 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#A51C30]" />
                How Allahabad University Cut-off Rounds Operate
              </h3>
              <p className="text-sm md:text-base text-[#6C757D] leading-relaxed">
                The University releases cut-off marks in successive iterations. Once a round is announced, candidates who meet or exceed the cutoff score for their category have an official online window (typically 48 hours) on the Samarth Portal to submit their course admission fees.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#111111] text-white text-xs md:text-sm uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Round</th>
                    <th className="p-4">Approx. Cycle Timing</th>
                    <th className="p-4">Social Categories Covered</th>
                    <th className="p-4">Operational Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {cutoffRoundsStructure.map((round, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-black text-[#A51C30] whitespace-nowrap">{round.round}</td>
                      <td className="p-4 text-gray-800 font-semibold whitespace-nowrap">{round.timeline}</td>
                      <td className="p-4 text-[#222222] font-bold">{round.categories}</td>
                      <td className="p-4 text-[#6C757D] text-xs md:text-sm leading-relaxed">{round.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl text-xs md:text-sm text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Crucial Reminder:</strong> Failure to pay the admission fee within the allocated time window for your cut-off round results in forfeiture of that seat allotment. Always monitor the official website <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono">allduniv.ac.in</code> during counselling.
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Verification Slots */}
        {activeTab === 'slots' && (
          <div id="slots-tab-content" className="max-w-5xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#222222] mb-1.5">Physical Reporting Structure at Pravesh Bhawan</h3>
                <p className="text-sm text-[#6C757D]">
                  Reporting is structured in morning and afternoon cohorts based on your computed merit score.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-gray-800 shrink-0 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#A51C30]" />
                Pravesh Bhawan, Chatham Lines
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#111111] text-white text-xs md:text-sm uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Reporting Phase</th>
                    <th className="p-4">Morning Slot (10:00 AM – 01:00 PM)</th>
                    <th className="p-4">Afternoon Slot (02:00 PM – 05:00 PM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {verificationSlotsSchedule.map((slot, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-[#222222] whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <span className="w-3 h-3 rounded-full bg-[#A51C30]"></span>
                          <span className="font-black">{slot.dayNumber}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs font-bold text-[#A51C30] uppercase mb-0.5">{slot.morningSlot.time}</div>
                        <div className="text-base font-black text-gray-900">Score: {slot.morningSlot.scoreBand}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs font-bold text-gray-500 uppercase mb-0.5">{slot.afternoonSlot.time}</div>
                        <div className="text-base font-black text-gray-900">Score: {slot.afternoonSlot.scoreBand}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 text-sm text-[#6C757D] leading-relaxed space-y-3">
              <p className="font-bold text-base text-[#222222]">Reporting Day Instructions:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Arrive at Pravesh Bhawan at least 30 minutes prior to your allocated reporting time.</li>
                <li>Submit the completed Enrolment Form, Anti-Ragging Declaration, and original Migration/TC.</li>
                <li>Upon verification, proceed immediately to the respective department offices on the Arts Campus for final Admission Card collection.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
