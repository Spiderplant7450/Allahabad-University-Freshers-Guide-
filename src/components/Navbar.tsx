import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, Home, ChevronRight, BookOpen } from 'lucide-react';
import { PageId } from './HomePage';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; shortLabel: string }[] = [
    { id: 'home', label: 'Home Dashboard', shortLabel: 'Home' },
    { id: 'calculator', label: 'CUET Calculator', shortLabel: 'Merit Calculator' },
    { id: 'admissions', label: 'Admission & Cutoffs', shortLabel: 'Admissions' },
    { id: 'documents', label: 'Document Checklist', shortLabel: 'Documents' },
    { id: 'academic', label: 'NEP Dual Major', shortLabel: 'NEP Structure' },
    { id: 'combinations', label: '81 Combinations', shortLabel: '81 Combinations' },
    { id: 'electives', label: '250+ Electives', shortLabel: '250+ Electives' },
    { id: 'hostels', label: 'Hostels & Rule Book', shortLabel: 'Hostels & Rules' },
    { id: 'history', label: 'History & Heritage', shortLabel: 'History & Heritage' },
    { id: 'faqs', label: 'FAQs & Contacts', shortLabel: 'FAQs & Helpdesk' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/98 shadow-md border-b border-gray-200'
          : 'bg-[#111111]/98 border-b border-white/10'
      } backdrop-blur-md`}
    >
      {/* TIER 1: BRAND IDENTITY & UTILITY ROW */}
      <div
        id="header-top-tier"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4"
      >
        {/* Brand Logo & Institution Info */}
        <button
          id="header-logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left cursor-pointer select-none focus:outline-none"
        >
          {/* Official AU Logo with exact 826px x 121px aspect ratio */}
          <div className="relative shrink-0 flex items-center">
            <img
              id="university-main-logo"
              src="https://allduniv.ac.in/assets/frontend/img/home/au_logo.png"
              alt="University of Allahabad (इलाहाबाद विश्वविद्यालय) Logo"
              style={{ aspectRatio: '826 / 121' }}
              className={`h-8 sm:h-9 md:h-10 w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] object-contain transition-all duration-200 ${
                !scrolled ? 'brightness-110 drop-shadow-sm' : ''
              }`}
            />
          </div>

          {/* Subtitle / Department Identifier */}
          <div className="hidden sm:flex flex-col border-l border-gray-300/40 dark:border-white/20 pl-3">
            <span
              className={`text-[11px] md:text-xs font-black tracking-widest uppercase transition-colors leading-tight ${
                scrolled ? 'text-[#222222]' : 'text-white'
              }`}
            >
              Faculty of Arts
            </span>
            <span className="text-[10px] md:text-[11px] font-bold text-[#A51C30] tracking-wider leading-tight">
              B.A. (NEP) Freshers Handbook
            </span>
          </div>
        </button>

        {/* Right Actions: Quick Jump & Mobile Menu */}
        <div className="flex items-center gap-2.5">
          {/* Quick Calculator Action CTA */}
          {activePage !== 'calculator' ? (
            <button
              id="nav-top-calc-btn"
              onClick={() => {
                onNavigate('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs md:text-sm font-bold uppercase tracking-wider bg-[#A51C30] hover:bg-[#8e1728] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Score Calculator</span>
            </button>
          ) : (
            <button
              id="nav-top-home-btn"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs md:text-sm font-bold uppercase tracking-wider px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                scrolled
                  ? 'bg-gray-100 text-[#222222] border-gray-300 hover:bg-gray-200'
                  : 'bg-white/15 text-white border-white/20 hover:bg-white/25'
              }`}
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Home Hub</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-1.5 sm:p-2 rounded-xl transition-colors cursor-pointer ${
              scrolled ? 'text-[#222222] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* TIER 2: DEDICATED LINE-LIKE SECTION FOR MENU ITEMS (DESKTOP) */}
      <div
        id="header-menu-line-section"
        className={`hidden xl:block w-full border-t transition-colors ${
          scrolled
            ? 'bg-gray-50/95 border-gray-200/90'
            : 'bg-black/50 border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            id="desktop-nav-menu-bar"
            aria-label="Main Navigation Menu"
            className="flex items-center justify-between gap-1 py-1.5 overflow-x-hidden"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-menu-line-item-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative text-[11px] xl:text-xs font-bold uppercase tracking-wider px-2.5 xl:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#A51C30] text-white shadow-xs font-black'
                      : scrolled
                      ? 'text-gray-700 hover:text-[#A51C30] hover:bg-gray-200/70'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.shortLabel}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* MOBILE EXPANDABLE DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-white border-t border-gray-200 shadow-2xl px-5 py-4 flex flex-col gap-1.5 max-h-[80vh] overflow-y-auto"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-[#A51C30] px-2 py-1 flex items-center justify-between">
            <span>Navigation Menu</span>
            <span className="text-[10px] text-gray-400 font-normal">Select a guide to open</span>
          </div>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left text-sm font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#A51C30] text-white shadow-xs'
                    : 'text-[#222222] hover:bg-gray-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
