import React, { useState } from 'react';
import { mandatoryOriginalDocuments, photocopyInstructions, optionalBackupDocuments } from '../data/documentsData';
import { CheckSquare, Square, FileText, AlertTriangle, ShieldCheck, UserCheck, Layers } from 'lucide-react';

export const DocumentChecklistSection: React.FC = () => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalMandatory = mandatoryOriginalDocuments.length;
  const checkedCount = mandatoryOriginalDocuments.filter(d => checkedDocs[d.id]).length;
  const progressPercentage = Math.round((checkedCount / totalMandatory) * 100);

  return (
    <section id="documents" className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div id="documents-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="documents-header" className="text-center max-w-3xl mx-auto mb-12">
          <p id="docs-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Verification Protocol · Pravesh Bhawan
          </p>
          <h2 id="docs-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Mandatory Documents Checklist & Guidelines
          </h2>
          <p id="docs-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Ensure all original certificates, self-attested photocopies, and filled statutory forms are thoroughly assembled before reporting for physical verification.
          </p>

          {/* Progress Tracker */}
          <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-wider mb-2.5">
              <span className="text-[#222222]">Verification Readiness</span>
              <span className="text-[#A51C30] font-black">{checkedCount} of {totalMandatory} ({progressPercentage}%)</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3.5 overflow-hidden">
              <div
                className="bg-[#A51C30] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section 1: Mandatory Originals (Interactive) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-full bg-[#A51C30] text-white flex items-center justify-center text-base font-black">A</span>
            <div>
              <h3 className="text-2xl font-black text-[#222222]">Mandatory Original Documents (Carry in Transparent Folder)</h3>
              <p className="text-xs md:text-sm text-[#6C757D]">Click each item as you pack it into your physical verification folder.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mandatoryOriginalDocuments.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  id={`doc-card-${doc.id}`}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                    isChecked
                      ? 'bg-red-50/50 border-[#A51C30] shadow-sm'
                      : 'bg-white border-gray-200 hover:border-gray-400 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h4 className={`text-base md:text-lg font-bold transition-colors ${isChecked ? 'text-[#A51C30]' : 'text-[#222222]'}`}>
                        {doc.name}
                      </h4>
                      <button className="shrink-0 text-[#A51C30] mt-0.5 cursor-pointer" aria-label="Toggle item">
                        {isChecked ? <CheckSquare className="w-6 h-6 fill-[#A51C30] text-white" /> : <Square className="w-6 h-6 text-gray-400" />}
                      </button>
                    </div>
                    <p className="text-xs md:text-sm text-[#6C757D] leading-relaxed mb-4 font-normal">
                      {doc.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-600 font-medium">{doc.format}</span>
                    <span className="text-[#A51C30] font-bold">{doc.importance}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Two Photocopy Sets & Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div id="photocopy-guide-box" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-7 h-7 text-[#A51C30]" />
                <h3 className="text-xl md:text-2xl font-bold text-[#222222]">{photocopyInstructions.title}</h3>
              </div>
              <p className="text-sm md:text-base text-[#6C757D] mb-6 leading-relaxed font-medium">
                {photocopyInstructions.rule}
              </p>
              <div className="space-y-3.5">
                {photocopyInstructions.instructions.map((inst, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-800">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-[#222222] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{inst}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs md:text-sm text-gray-700 bg-gray-50 p-4 rounded-xl">
              <strong>Official Pro-Tip:</strong> Prepare Set 1 in a White Paper Folder and Set 2 in a separate pocket to facilitate quick handing-over at the verification desk.
            </div>
          </div>

          <div id="forms-instruction-box" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-7 h-7 text-[#A51C30]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#222222]">Enrolment Form & Anti-Ragging Rules</h3>
            </div>
            
            <div className="space-y-4 text-xs md:text-sm text-gray-800 leading-relaxed">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-bold text-base text-[#222222] mb-1">1. Name Consistency Rule</p>
                <p className="text-gray-600">The applicant's name entered on the form (in Hindi and English BLOCK letters) must match identically with the 10th (High School) Certificate.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-bold text-base text-[#222222] mb-1">2. Enrolment Form Signatures</p>
                <p className="text-gray-600">The applicant must sign and date the bottom section. Leave the <em>"Certified by Admission Coordinator"</em> section blank for official stamping.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-bold text-base text-[#222222] mb-1">3. Anti-Ragging Declaration (Parent / Guardian Mandatory)</p>
                <p className="text-gray-600">The Anti-Ragging undertaking requires the signatures of <strong>both the candidate and the parent/guardian</strong> with address and contact details.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Optional Documents */}
        <div id="optional-docs-section">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-full bg-[#222222] text-white flex items-center justify-center text-base font-black">B</span>
            <div>
              <h3 className="text-2xl font-black text-[#222222]">Supporting & Optional Documents (Safe to Carry)</h3>
              <p className="text-xs md:text-sm text-[#6C757D]">Keep these in a secondary pouch for contingency or scholarship processing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {optionalBackupDocuments.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#222222] mb-1.5">{doc.name}</h4>
                  <p className="text-xs md:text-sm text-[#6C757D] leading-relaxed mb-4">{doc.description}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                    {doc.importance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
