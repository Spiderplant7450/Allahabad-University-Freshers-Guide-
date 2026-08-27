import React from 'react';
import { PageId } from './HomePage';
import { ArrowLeft, ChevronRight, Landmark } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  activePage,
  onNavigate,
}) => {
  return (
    <div id="page-header-wrapper" className="bg-[#111111] text-white pt-32 pb-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clean Breadcrumb & Back Action - NO duplicate menu items */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            id="back-to-home-btn"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all cursor-pointer border border-white/15 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#A51C30]" />
            <span>Back to Home Dashboard</span>
          </button>

          {/* Clean text breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">
            <span className="cursor-pointer hover:text-white" onClick={() => onNavigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-white font-bold">{badge}</span>
          </div>
        </div>

        {/* Page Identity */}
        <div>
          <span className="inline-block text-xs md:text-sm font-bold text-[#A51C30] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-4">
            {badge}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

