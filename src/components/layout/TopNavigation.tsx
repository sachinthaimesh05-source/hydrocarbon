import React, { useState, useEffect } from 'react';
import {
  FlaskConical,
  Flame,
  Layers,
  ShieldCheck,
  Award,
  FileText,
  BookOpen,
  Filter,
  Recycle,
  Sparkles
} from 'lucide-react';

interface TopNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ activeSection, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(Math.max(scrollY / maxScroll, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-6xl z-50">
      <nav
        className="relative flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#0A0F1D]/85 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
        aria-label="FyZie Navigation"
      >
        {/* Dynamic Reading / Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-400 origin-left transition-transform duration-100 ease-out pointer-events-none"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />

        {/* Brand Logo Zone */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-sm group-hover:scale-105 transition-transform">
            <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white font-['Space_Grotesk']">
                FyZie <span className="text-cyan-400 font-semibold">Science</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 font-semibold bg-cyan-950/70 border border-cyan-800/50 px-1.5 py-0.5 rounded">
                T.Sachintha Imesh
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 hidden xs:block">
              11 ශ්‍රේණිය විද්‍යාව · 14. හයිඩ්‍රොකාබන හා ව්‍යුත්පන්න
            </p>
          </div>
        </button>

        {/* Nav Tabs Group */}
        <div className="hidden lg:flex items-center gap-1 text-xs font-medium">
          <button
            onClick={() => onNavigate('hydrocarbons')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'hydrocarbons'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>හයිඩ්‍රොකාබන</span>
          </button>

          <button
            onClick={() => onNavigate('distillation')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'distillation'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Filter className="w-3 h-3" />
            <span>භාගික ආසවනය</span>
          </button>

          <button
            onClick={() => onNavigate('bromine-lab')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'bromine-lab'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FlaskConical className="w-3 h-3" />
            <span>බ්‍රෝමීන් පරීක්ෂාව</span>
          </button>

          <button
            onClick={() => onNavigate('ethyne-lab')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'ethyne-lab'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-3 h-3 text-amber-400" />
            <span>එතයින් (ඇල්කයින)</span>
          </button>

          <button
            onClick={() => onNavigate('candle-lab')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'candle-lab'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>ඉටි (14.1)</span>
          </button>

          <button
            onClick={() => onNavigate('polymers')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'polymers'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>බහුඅවයවික</span>
          </button>

          <button
            onClick={() => onNavigate('plastics-lab')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'plastics-lab'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Recycle className="w-3 h-3" />
            <span>කේත 1-7</span>
          </button>

          <button
            onClick={() => onNavigate('notes')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'notes'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>කෙටි සටහන්</span>
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeSection === 'quiz'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3 h-3" />
            <span>MCQ 10</span>
          </button>
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('distillation')}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-[#05070E] bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 active:scale-95"
          >
            <span>Virtual Lab</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-950 animate-ping" />
          </button>
        </div>
      </nav>

      {/* Mobile Sub Navigation bar */}
      <div className="lg:hidden flex items-center overflow-x-auto no-scrollbar mt-2 px-3 py-1.5 bg-[#0A0F1D]/90 backdrop-blur-md border border-white/10 rounded-full gap-1.5 shadow-lg">
        <button
          onClick={() => onNavigate('hydrocarbons')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          හයිඩ්‍රොකාබන
        </button>
        <button
          onClick={() => onNavigate('distillation')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-cyan-300 hover:text-white whitespace-nowrap bg-cyan-950/50 border border-cyan-500/30"
        >
          ආසවන කුළුණ
        </button>
        <button
          onClick={() => onNavigate('bromine-lab')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          බ්‍රෝමීන් පරීක්ෂාව
        </button>
        <button
          onClick={() => onNavigate('ethyne-lab')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-300 hover:text-white whitespace-nowrap bg-amber-950/50 border border-amber-500/30"
        >
          එතයින් (CaC₂)
        </button>
        <button
          onClick={() => onNavigate('candle-lab')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          ඉටි (14.1)
        </button>
        <button
          onClick={() => onNavigate('polymers')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          බහුඅවයවික
        </button>
        <button
          onClick={() => onNavigate('plastics-lab')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          කේත 1-7
        </button>
        <button
          onClick={() => onNavigate('notes')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap bg-white/5"
        >
          කෙටි සටහන්
        </button>
        <button
          onClick={() => onNavigate('quiz')}
          className="px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-300 hover:text-white whitespace-nowrap bg-amber-950/40 border border-amber-500/30"
        >
          MCQ 10
        </button>
      </div>
    </header>
  );
};
