import React from 'react';
import { 
  Calculator, 
  FileCheck, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Building2, 
  HelpCircle, 
  Landmark, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  Scroll,
  Users,
  Compass,
  CheckCircle2
} from 'lucide-react';

export type PageId = 
  | 'home'
  | 'calculator'
  | 'admissions'
  | 'documents'
  | 'academic'
  | 'combinations'
  | 'electives'
  | 'hostels'
  | 'faqs'
  | 'history';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const quickHubItems = [
    {
      id: 'calculator' as PageId,
      title: 'Merit Calculator',
      eyebrow: 'Scoring & Verification Slot',
      desc: 'Calculate composite score (Language + Domain + GAT) and check your allotted Pravesh Bhawan verification time slot.',
      icon: Calculator,
      badge: 'Scoring Tool',
      iconBg: 'bg-[#A51C30] text-white',
      accent: 'border-red-200 hover:border-[#A51C30]',
    },
    {
      id: 'combinations' as PageId,
      title: '81 Subject Combinations',
      eyebrow: 'Codes 101 to 183 Explorer',
      desc: 'Browse and filter all approved B.A. discipline combinations (Major 1, Major 2, Minor) with instant subject search.',
      icon: Layers,
      badge: '81 Subject Codes',
      iconBg: 'bg-[#A51C30] text-white',
      accent: 'border-red-200 hover:border-[#A51C30]',
    },
    {
      id: 'admissions' as PageId,
      title: 'Admissions & Cutoffs',
      eyebrow: '6-Stage Counselling Workflow',
      desc: 'Track multi-round cutoff trends, Samarth portal fee payment deadlines, and step-by-step physical reporting.',
      icon: Clock,
      badge: 'Counselling Process',
      iconBg: 'bg-[#222222] text-white',
      accent: 'border-gray-200 hover:border-[#A51C30]',
    },
    {
      id: 'documents' as PageId,
      title: 'Document Checklist',
      eyebrow: '12 Mandatory Originals Tracker',
      desc: 'Interactive tracker for original certificates, Set 1 & Set 2 photocopy binders, and enrolment form guidelines.',
      icon: FileCheck,
      badge: 'Checklist Tracker',
      iconBg: 'bg-[#A51C30] text-white',
      accent: 'border-red-200 hover:border-[#A51C30]',
    },
    {
      id: 'academic' as PageId,
      title: 'NEP 2020 Dual Major',
      eyebrow: '4-Year FYUGP Curriculum',
      desc: 'Detailed matrix for Dual Major + Minor framework, credit progression across 8 semesters, and exit options.',
      icon: GraduationCap,
      badge: 'Academic Matrix',
      iconBg: 'bg-[#222222] text-white',
      accent: 'border-gray-200 hover:border-[#A51C30]',
    },
    {
      id: 'electives' as PageId,
      title: '250+ Electives Directory',
      eyebrow: 'AEC · SEC · MDC · VAC Courses',
      desc: 'Explore electives by skill stream, fee structure, offering department, and first-come intake quotas.',
      icon: Sparkles,
      badge: '250+ Courses',
      iconBg: 'bg-[#222222] text-white',
      accent: 'border-gray-200 hover:border-[#A51C30]',
    },
    {
      id: 'hostels' as PageId,
      title: 'Hostels & 67-Rule Book',
      eyebrow: '15 Halls & Official Ordinances',
      desc: 'All 15 Boys & Girls hostels, 60:30:10 allotment ratio, >25km boundary rule, fee slabs, and conduct regulations.',
      icon: Building2,
      badge: '15 Hostels & Rules',
      iconBg: 'bg-[#A51C30] text-white',
      accent: 'border-gray-200 hover:border-[#A51C30]',
    },
    {
      id: 'faqs' as PageId,
      title: 'FAQs & Helpdesk Directory',
      eyebrow: 'Instant Answers & Contacts',
      desc: 'DigiLocker certificate validity, subject change guidelines, email helplines, and Pravesh Bhawan emergency contacts.',
      icon: HelpCircle,
      badge: 'Help & Support',
      iconBg: 'bg-[#222222] text-white',
      accent: 'border-gray-200 hover:border-[#A51C30]',
    },
  ];

  return (
    <div id="home-dashboard" className="w-full">
      {/* Sleek, Modern Hero Section */}
      <section id="hero-section" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#111111] pt-32 pb-20">
        <div id="hero-bg-wrapper" className="absolute inset-0 opacity-40">
          <img
            id="hero-bg-img"
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2560"
            alt="University Campus Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#111111]/80 to-[#111111]" />
        </div>

        <div id="hero-content" className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-6">
          {/* Official University Crest */}
          <div className="inline-flex items-center justify-center mb-5">
            <img 
              id="hero-university-seal" 
              src="https://allduniv.ac.in/public/img/home/header_logo.png" 
              alt="University of Allahabad Seal" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/20 shadow-2xl bg-white p-1.5 object-cover" 
            />
          </div>
          
          {/* Historical Tagline Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-[11px] md:text-xs font-bold text-white/90 uppercase tracking-[0.2em] bg-white/10 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              Est. 1887 · The 4th Oldest University of India
            </span>
          </div>

          <h1 
            id="hero-main-title"
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight"
          >
            Arts Campus <span id="hero-title-highlight" className="text-[#A51C30]">Freshers Guide</span>
          </h1>
          
          <p 
            id="hero-description"
            className="text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Your comprehensive, fast-navigation portal for University of Allahabad Bachelor of Arts (B.A.) admissions, CUET merit calculation, 81 subject combinations, and hostel regulations.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="hero-quick-calc"
              onClick={() => onNavigate('calculator')}
              className="bg-[#A51C30] hover:bg-[#8e1728] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Score Calculator</span>
            </button>
            <button
              id="hero-quick-comb"
              onClick={() => onNavigate('combinations')}
              className="bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>81 Combinations</span>
            </button>
            <button
              id="hero-quick-docs"
              onClick={() => onNavigate('documents')}
              className="bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>Documents</span>
            </button>
            <button
              onClick={() => onNavigate('history')}
              className="bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 px-5 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Scroll className="w-4 h-4 text-amber-300" />
              <span>History & Handbook</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modern Compact Key Stats Strip */}
      <section id="stats-banner" className="bg-[#A51C30] text-white py-5 relative z-20 shadow-md border-y border-white/10">
        <div id="stats-container" className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          <div className="flex flex-col items-center justify-center p-1">
            <h4 className="text-2xl sm:text-3xl font-black">1887</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90 font-bold">Established Year</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1">
            <h4 className="text-2xl sm:text-3xl font-black">81</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90 font-bold">B.A. Combinations</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1">
            <h4 className="text-2xl sm:text-3xl font-black">15</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90 font-bold">Hostels & Halls</p>
          </div>
          <div className="flex flex-col items-center justify-center p-1">
            <h4 className="text-2xl sm:text-3xl font-black">4th</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90 font-bold">Oldest in India</p>
          </div>
        </div>
      </section>

      {/* Verification Notification Bar */}
      <section className="bg-amber-50/80 border-b border-amber-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-amber-950 font-medium">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Physical Verification Venue:</strong> Pravesh Bhawan (Chatham Lines). Carry 12 mandatory original documents and 2 photocopy sets.
            </span>
          </div>
          <button
            onClick={() => onNavigate('documents')}
            className="text-[#A51C30] font-bold hover:underline shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span>Open Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Main Navigation Hub - Clean 8-Card Grid */}
      <section id="quick-hub" className="py-14 sm:py-16 bg-[#FFFFFF]">
        <div id="hub-container" className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#A51C30] text-xs font-bold uppercase tracking-widest mb-1.5 block">
              Quick Navigation Hub
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#222222] tracking-tight mb-2">
              Choose a Guide to Begin
            </h2>
            <p className="text-[#6C757D] text-sm md:text-base">
              Direct access to all interactive tools, search databases, and freshers resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickHubItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`hub-card-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`bg-white p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md hover:-translate-y-1 ${item.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold text-[#A51C30] uppercase tracking-wider mb-1">
                      {item.eyebrow}
                    </p>

                    <h3 className="text-lg font-black text-[#222222] mb-2 group-hover:text-[#A51C30] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-4 font-normal line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#A51C30] group-hover:underline">
                    <span>Open Dedicated Portal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sleek University Heritage & Handbook Preview Card */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 md:p-10 border-t-8 border-[#A51C30] shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#A51C30] uppercase tracking-widest">
                <Landmark className="w-3.5 h-3.5 text-[#A51C30]" />
                <span>University History & Archival Handbook</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                "Quot Rami Tot Arbores" · Heritage & Founders Record
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Explore the complete legacy of Sir William Muir, the 1873 Muir Central College foundation stone, master architect Swinton Jacob's Indo-Saracenic blue domes, and the evolution of 15 historic university hostels.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-gray-400 font-medium">
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">1869 Muir Appeal</span>
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">1910 Senate House</span>
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">1923 Indian Press</span>
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">15 Historic Hostels</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('history')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#A51C30] hover:bg-[#8e1728] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scroll className="w-4 h-4" />
                <span>Read Full History Handbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Campus Help & Verification Venues */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2.5 mb-2.5">
                <MapPin className="w-4 h-4 text-[#A51C30]" />
                <h4 className="text-base font-bold text-[#222222]">Verification Venue</h4>
              </div>
              <p className="text-xs text-[#6C757D] leading-relaxed mb-3">
                <strong>Pravesh Bhawan</strong>, Chatham Lines Campus, University of Allahabad, Prayagraj, UP – 211002.
              </p>
              <button
                onClick={() => onNavigate('admissions')}
                className="text-xs font-bold text-[#A51C30] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Reporting Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2.5 mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A51C30]" />
                <h4 className="text-base font-bold text-[#222222]">Anti-Ragging Compliance</h4>
              </div>
              <p className="text-xs text-[#6C757D] leading-relaxed mb-3">
                Zero-tolerance policy. Affidavits signed by student & parent must be produced at verification.
              </p>
              <button
                onClick={() => onNavigate('documents')}
                className="text-xs font-bold text-[#A51C30] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Mandatory Checklist</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Users className="w-4 h-4 text-[#A51C30]" />
                <h4 className="text-base font-bold text-[#222222]">Admission Helpdesk</h4>
              </div>
              <p className="text-xs text-[#6C757D] leading-relaxed mb-3">
                Email: <span className="font-semibold text-gray-800">baadminau@gmail.com</span> · Helpdesk: <span className="font-semibold text-gray-800">aupravesh@allduniv.ac.in</span>
              </p>
              <button
                onClick={() => onNavigate('faqs')}
                className="text-xs font-bold text-[#A51C30] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Helpline Contacts</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
