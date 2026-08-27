import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage, PageId } from './components/HomePage';
import { PageHeader } from './components/PageHeader';
import { Footer } from './components/Footer';
import { MeritScoreCalculator } from './components/MeritScoreCalculator';
import { AdmissionSection } from './components/AdmissionSection';
import { DocumentChecklistSection } from './components/DocumentChecklistSection';
import { AcademicNEPSection } from './components/AcademicNEPSection';
import { CombinationsExplorer } from './components/CombinationsExplorer';
import { ElectiveCoursesExplorer } from './components/ElectiveCoursesExplorer';
import { HostelSection } from './components/HostelSection';
import { FAQAndContactSection } from './components/FAQAndContactSection';
import { HistoryHandbookSection } from './components/HistoryHandbookSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim() as PageId;
      const validPages: PageId[] = [
        'home',
        'calculator',
        'admissions',
        'documents',
        'academic',
        'combinations',
        'electives',
        'hostels',
        'faqs',
        'history',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageDetails = (page: PageId) => {
    switch (page) {
      case 'calculator':
        return {
          title: 'CUET Score & Verification Slot Calculator',
          subtitle: 'Calculate your composite merit score (Language + Domain + GAT) and check your allotted Pravesh Bhawan physical verification time slot.',
          badge: 'Interactive Scoring Tool',
        };
      case 'admissions':
        return {
          title: 'Admission Workflow & Cut-offs',
          subtitle: 'Step-by-step 6-stage counselling process, multi-round cutoff structure, fee deposit window, and reporting procedures.',
          badge: 'Official Counselling Process',
        };
      case 'documents':
        return {
          title: 'Document Verification Checklist',
          subtitle: 'Interactive 12-point mandatory originals tracker, Set 1 & Set 2 photocopy rules, and Enrolment form guidelines.',
          badge: 'Physical Verification Ready',
        };
      case 'academic':
        return {
          title: 'NEP 2020 Dual Major Academic Structure',
          subtitle: 'Detailed breakdown of the 4-Year Undergraduate Programme (FYUGP), Dual Major + Minor framework, and semester progression.',
          badge: 'Curriculum & Credit Matrix',
        };
      case 'combinations':
        return {
          title: 'Approved 81 B.A. Subject Combinations',
          subtitle: 'Complete catalogue of combinations (Subject Codes 101 to 183) with instant search and filter for Major 1, Major 2, and Minor choices.',
          badge: '81 Subject Codes',
        };
      case 'electives':
        return {
          title: 'Complete 250+ Electives Directory',
          subtitle: 'Explore Ability Enhancement (AEC), Skill Enhancement (SEC), Multidisciplinary (MDC), and Value Addition (VAC) course offerings.',
          badge: '250+ Course Catalogue',
        };
      case 'hostels':
        return {
          title: 'Hostels Directory, Ordinances & Official Rule Book',
          subtitle: 'Comprehensive 15-hostel registry, the 60:30:10 seat formula, >25 km boundary eligibility, statutory fees, and full 67-rule University Hostel Rule Book.',
          badge: '15 Hostels & 67 Rules',
        };
      case 'history':
        return {
          title: 'Heritage, History & University Handbook',
          subtitle: 'Historical narrative from 1869 Muir Appeal and 1887 Act to Swinton Jacob Indo-Saracenic architectural monuments and 15 historic residential halls.',
          badge: 'Heritage & Archives · Est. 1887',
        };
      case 'faqs':
        return {
          title: 'Freshers FAQs & Helpdesk Directory',
          subtitle: 'Direct answers to critical freshers questions, DigiLocker validity, grievance cell emails, and Pravesh Bhawan helpline contacts.',
          badge: 'Help & Support Desk',
        };
      default:
        return { title: '', subtitle: '', badge: '' };
    }
  };

  const pageInfo = getPageDetails(currentPage);

  return (
    <div id="app-root" className="min-h-screen bg-[#FFFFFF] font-sans text-[#222222] selection:bg-[#A51C30]/20 flex flex-col justify-between">
      {/* Top Sticky Navigation */}
      <Navbar activePage={currentPage} onNavigate={navigateToPage} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' ? (
          <HomePage onNavigate={navigateToPage} />
        ) : (
          <div>
            <PageHeader
              title={pageInfo.title}
              subtitle={pageInfo.subtitle}
              badge={pageInfo.badge}
              activePage={currentPage}
              onNavigate={navigateToPage}
            />

            <div className="w-full">
              {currentPage === 'calculator' && <MeritScoreCalculator />}
              {currentPage === 'admissions' && <AdmissionSection />}
              {currentPage === 'documents' && <DocumentChecklistSection />}
              {currentPage === 'academic' && <AcademicNEPSection />}
              {currentPage === 'combinations' && <CombinationsExplorer />}
              {currentPage === 'electives' && <ElectiveCoursesExplorer />}
              {currentPage === 'hostels' && <HostelSection />}
              {currentPage === 'history' && <HistoryHandbookSection onNavigateToHostels={() => navigateToPage('hostels')} />}
              {currentPage === 'faqs' && <FAQAndContactSection />}
            </div>
          </div>
        )}
      </main>

      {/* University Footer with Comprehensive Quick Links */}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
