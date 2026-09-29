import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Flame, Layers, Atom } from 'lucide-react';
import heroImage from '../../assets/images/hero_hydrocarbons_polymers_1790697146587.jpg';

interface HeroBannerProps {
  onExplore: (section: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore }) => {
  return (
    <section className="relative pt-28 pb-16 border-b border-white/[0.08] overflow-hidden" id="hero">
      {/* Ambient Luminescence from fyzie-electrolysis.netlify.app */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="orb-cyan" />
        <div className="orb-cobalt" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>ශ්‍රී ලංකා 11 ශ්‍රේණිය විෂය නිර්දේශය · FyZie [T.Sachintha Imesh]</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] font-['Yaldevi']">
              හයිඩ්‍රොකාබන හා ව්‍යුත්පන්න <br />
              <span className="bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                අණුක මට්ටමින්
              </span>{' '}
              ප්‍රගුණ කරමු.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              11 ශ්‍රේණිය විද්‍යාව (II කොටස) 14 වන ඒකකය: කාබන්හි චතුස්සංයුජතාව, ඇල්කේන සහ ඇල්කීන, ඉටි වල C සහ H ඔප්පු කිරීම, ඛනිජ තෙල් භාගික ආසවනය, ආකලන බහුඅවයවීකරණය (පොලිතීන්, PVC, ටෙෆ්ලෝන්) සහ රබර් වල්කනයිස් කිරීම ත්‍රිමාණ අන්තර්ක්‍රියාකාරී විද්‍යාගාරයෙන් සජීවීව නිරීක්ෂණය කරන්න.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExplore('hydrocarbons')}
                className="px-6 py-3 text-sm font-bold text-[#05070E] bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)] transition-all flex items-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>3D Visual Labs අරඹන්න</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onExplore('notes')}
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.12] rounded-full transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>විභාග කෙටි සටහන්</span>
              </button>
            </div>

            {/* Telemetry Stats Grid (from fyzie-electrolysis.netlify.app) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-['Space_Grotesk']">08+</div>
                <div className="text-xs text-slate-400 mt-0.5">අන්තර්ක්‍රියාකාරී විද්‍යාගාර</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 font-['Space_Grotesk']">CₙH₂ₙ₊₂</div>
                <div className="text-xs text-slate-400 mt-0.5">ඇල්කේන සහ ඇල්කීන</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 font-['Space_Grotesk']">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">O/L විභාග ආවරණය</div>
              </div>
            </div>
          </div>

          {/* Quick Summary Card from fyzie-electrolysis.netlify.app */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
              <span className="font-['Space_Grotesk'] text-[11px] tracking-[0.15em] text-cyan-400 uppercase font-semibold block">
                Core Definition
              </span>
              <h3 className="text-lg font-bold text-white mt-2 font-['Yaldevi']">
                හයිඩ්‍රොකාබන සහ ඒවායේ ව්‍යුත්පන්න
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                කාබන් (C) සහ හයිඩ්‍රජන් (H) පරමාණු පමණක් අඩංගු සංයෝග <strong>හයිඩ්‍රොකාබන</strong> වේ. තනි බන්ධන සහිත ඇල්කේන (Alkanes) සංතෘප්ත වන අතර ද්විත්ව බන්ධන සහිත ඇල්කීන (Alkenes) අසංතෘප්ත වේ.
              </p>

              <div className="mt-4 p-3 bg-cyan-950/40 border-l-4 border-cyan-400 rounded-r-lg space-y-1">
                <strong className="text-xs text-white block">මතක තබාගන්න (Golden Rule):</strong>
                <p className="text-[11px] text-cyan-200">
                  ඇල්කේන = CₙH₂ₙ₊₂ (C-C තනි බන්ධන) <br />
                  ඇල්කීන = CₙH₂ₙ (C=C ද්විත්ව බන්ධන) <br />
                  ආකලන බහුඅවයවීකරණය = n(CH₂=CH₂) → -[CH₂-CH₂]-ₙ
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">FyZie Science Codex</span>
                <span className="text-cyan-400 font-mono font-semibold">T. Sachintha Imesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
