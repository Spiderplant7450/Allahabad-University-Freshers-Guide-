import React from 'react';
import { PageId } from './HomePage';
import { Landmark, Mail, Phone, MapPin, ExternalLink, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-[#111111] text-white pt-16 pb-12 border-t-[12px] border-[#A51C30]">
      <div id="footer-container" className="max-w-7xl mx-auto px-6">
        {/* Main Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Crest */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                id="footer-university-seal" 
                src="https://allduniv.ac.in/public/img/home/header_logo.png" 
                alt="University of Allahabad Seal" 
                className="w-16 h-16 rounded-full bg-white p-1.5 shadow-md object-cover" 
              />
              <div>
                <h3 className="text-xl font-black uppercase tracking-widest text-white leading-tight">
                  University of Allahabad
                </h3>
                <p className="text-xs md:text-sm font-bold text-[#A51C30] uppercase tracking-wider">
                  Faculty of Arts · B.A. (NEP) Guide
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              Established in 1887, the University of Allahabad is the fourth oldest university in India. This handbook provides official, verified guidance for incoming undergraduate students navigating the Four-Year Dual Major NEP curriculum.
            </p>

            <div className="text-xs md:text-sm text-gray-300 space-y-2 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A51C30] shrink-0" />
                <span>Senate House Campus, Prayagraj, UP – 211002</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A51C30] shrink-0" />
                <span>aupravesh@allduniv.ac.in | baadminau@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Column 2: Admissions & Scores */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Admissions & Scoring
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> CUET Merit Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> 6-Step Admission Flow
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Cut-off Rounds Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Pravesh Bhawan Venue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Mandatory Documents
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics & Electives */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Academics & NEP
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('academic')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Dual Major Structure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('combinations')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> 81 B.A. Combinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('electives')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> 250+ Electives Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academic')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> 4-Year Honours Track
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academic')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Career Pathways
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Life & Official Portals */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Hostels & Official Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('hostels')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Boys & Girls Hostels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hostels')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Hostel Fees & Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-white transition-colors hover:underline text-left cursor-pointer flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#A51C30]" /> Freshers FAQs
                </button>
              </li>
              <li>
                <a
                  href="https://allduniv.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A51C30]" /> allduniv.ac.in
                </a>
              </li>
              <li>
                <a
                  href="https://alldunivcuet.samarth.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A51C30]" /> Samarth Admission Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Page Jump Pills Strip */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-2.5 border-b border-white/10">
          <span className="text-gray-300 font-bold uppercase tracking-wider text-xs mr-2">Quick Jump:</span>
          {[
            { id: 'home' as PageId, label: 'Home Dashboard' },
            { id: 'calculator' as PageId, label: 'Merit Calculator' },
            { id: 'admissions' as PageId, label: 'Admissions' },
            { id: 'documents' as PageId, label: 'Documents' },
            { id: 'academic' as PageId, label: 'NEP Structure' },
            { id: 'combinations' as PageId, label: '81 Combinations' },
            { id: 'electives' as PageId, label: '250+ Electives' },
            { id: 'hostels' as PageId, label: 'Hostels' },
            { id: 'history' as PageId, label: 'History & Heritage' },
            { id: 'faqs' as PageId, label: 'FAQs & Contacts' },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => onNavigate(p.id)}
              className="bg-white/10 hover:bg-[#A51C30] text-gray-200 hover:text-white px-3.5 py-1.5 rounded-full font-semibold transition-colors cursor-pointer text-xs md:text-sm"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Bottom Tagline & University Note */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} University of Allahabad · Faculty of Arts Freshers Guide. Est. 1887.
          </p>
          <p className="text-gray-400">
            A fast, structured guide for undergraduate candidates. All guidelines conform to official university bulletins and NEP 2020 frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
};

