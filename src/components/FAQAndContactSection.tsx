import React, { useState } from 'react';
import { freshersFaqs, universityContacts } from '../data/faqsAndContactsData';
import { Plus, Minus, Mail, Phone, MapPin, ExternalLink, HelpCircle, Shield, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQAndContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqFilter, setFaqFilter] = useState<'ALL' | 'Admissions' | 'Academic & NEP' | 'Verification' | 'Hostels'>('ALL');

  const filteredFaqs = freshersFaqs.filter(
    (item) => faqFilter === 'ALL' || item.category === faqFilter
  );

  return (
    <section id="faqs" className="py-12 md:py-16 bg-white">
      <div id="faqs-container" className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div id="faqs-header" className="text-center max-w-3xl mx-auto mb-12">
          <p id="faqs-eyebrow" className="text-[#A51C30] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Got Questions? · Freshers Knowledgebase
          </p>
          <h2 id="faqs-title" className="text-3xl md:text-5xl font-black text-[#222222] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p id="faqs-description" className="text-[#6C757D] text-base md:text-lg leading-relaxed">
            Direct answers to essential queries regarding B.A. admissions, merit computation, DigiLocker certificates, elective selection, and hostel regulations.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-7">
            {(['ALL', 'Admissions', 'Academic & NEP', 'Verification', 'Hostels'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => { setFaqFilter(cat); setOpenFaqIndex(null); }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  faqFilter === cat
                    ? 'bg-[#A51C30] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs hover:shadow-xs transition-shadow"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-md shrink-0">
                      {faq.category}
                    </span>
                    <span className={`font-bold text-base md:text-xl transition-colors ${isOpen ? 'text-[#A51C30]' : 'text-[#222222]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <span className={`p-2.5 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-[#A51C30]/10 text-[#A51C30]' : 'bg-gray-100 text-gray-600'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-body-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-7 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 mt-1 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Official Contacts & Links Card */}
        <div id="contacts-card" className="bg-[#111111] text-white rounded-3xl p-8 md:p-12 shadow-xl border-t-[8px] border-[#A51C30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#A51C30] bg-white/10 px-4 py-2 rounded-full">
                <Landmark className="w-4 h-4" />
                Official University Helpdesk
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                {universityContacts.institution}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 font-bold uppercase tracking-wider">
                {universityContacts.tagline} · {universityContacts.naacRating}
              </p>

              <div className="space-y-4 pt-4 text-xs md:text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Admission Helpdesk Email:</span>
                    <a href={`mailto:${universityContacts.admissionHelpdeskEmail}`} className="text-gray-300 hover:text-white underline">
                      {universityContacts.admissionHelpdeskEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">B.A. Admission Grievances:</span>
                    <a href={`mailto:${universityContacts.baGrievanceEmail}`} className="text-gray-300 hover:text-white underline">
                      {universityContacts.baGrievanceEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Admission Helpline Phone:</span>
                    <span>{universityContacts.admissionHelplinePhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A51C30] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Verification Venue:</span>
                    <span>{universityContacts.verificationVenue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Portals Box */}
            <div className="lg:col-span-6 bg-white/5 p-7 md:p-8 rounded-2xl border border-white/10">
              <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-5">
                Official Web Portals & Links
              </h4>
              <div className="space-y-3.5">
                {universityContacts.officialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all text-xs md:text-sm font-bold text-gray-200 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 text-[#A51C30] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
