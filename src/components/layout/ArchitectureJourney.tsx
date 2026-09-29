import React from 'react';
import { ArrowRight, Flame, Layers, ShieldCheck } from 'lucide-react';

interface ArchitectureJourneyProps {
  onSelectStep: (stepId: string) => void;
}

export const ArchitectureJourney: React.FC<ArchitectureJourneyProps> = ({ onSelectStep }) => {
  return (
    <section className="py-12 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk']">
              <span>මූලධර්ම ත්‍රිත්වය · Core Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-['Yaldevi']">
              හයිඩ්‍රොකාබන විද්‍යාවේ ප්‍රධාන ස්ථර 3
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            14 වන පරිච්ඡේදයේ අන්තර්ගතය සරල හයිඩ්‍රොකාබන, එතීන ව්‍යුත්පන්න සහ කාර්මික බහුඅවයවික ලෙස ප්‍රධාන අංශ 3 කට ගොනු කර ඇත.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01 - Cyan */}
          <div
            onClick={() => onSelectStep('hydrocarbons')}
            className="group relative bg-[#0A0F1D] hover:bg-[#111827] border border-white/[0.08] hover:border-cyan-400/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/10 border-t-4 border-t-cyan-400"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Space_Grotesk'] text-4xl font-extrabold text-white/10 group-hover:text-cyan-400/20 transition-colors">
                  01
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  සංතෘප්ත & අසංතෘප්ත
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-['Yaldevi']">
                ඇල්කේන සහ ඇල්කීන (C-C & C=C)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                තනි බන්ධන සහිත ඇල්කේන (CₙH₂ₙ₊₂: මීතේන් සිට පෙන්ටේන්), ද්විත්ව බන්ධන සහිත එතීන් (C₂H₄), සමාවයවිකතාව සහ දහන ප්‍රතික්‍රියා.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="font-mono text-cyan-300 font-semibold">CH₄ · C₂H₄ · LPG · Petrol</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Card 02 - Cobalt */}
          <div
            onClick={() => onSelectStep('derivatives')}
            className="group relative bg-[#0A0F1D] hover:bg-[#111827] border border-white/[0.08] hover:border-sky-400/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-sky-500/10 border-t-4 border-t-sky-400"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Space_Grotesk'] text-4xl font-extrabold text-white/10 group-hover:text-sky-400/20 transition-colors">
                  02
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  ප්‍රතිස්ථාපිත ඒකඅවයවික
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors font-['Yaldevi']">
                එතීනවල ව්‍යුත්පන්න (Derivatives)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                එතීනවල H පරමාණු Cl හෝ F මඟින් ප්‍රතිස්ථාපනය වී සෑදෙන ක්ලෝරෝඑතීන් (CH₂=CHCl) සහ ටෙට්‍රාෆ්ලෝරෝඑතීන් (CF₂=CF₂) සංයෝග.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="font-mono text-sky-400 font-semibold">Vinyl Chloride · TFE</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Card 03 - Amber */}
          <div
            onClick={() => onSelectStep('polymers')}
            className="group relative bg-[#0A0F1D] hover:bg-[#111827] border border-white/[0.08] hover:border-amber-400/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 border-t-4 border-t-amber-400"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Space_Grotesk'] text-4xl font-extrabold text-white/10 group-hover:text-amber-400/20 transition-colors">
                  03
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  යෝධ අණු & තාක්ෂණය
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-['Yaldevi']">
                බහුඅවයවික & රබර් වල්කනයිස් කිරීම
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                පොලිතීන්, PVC, ටෙෆ්ලෝන් ආකලන බහුඅවයවීකරණය. ස්වාභාවික රබර් සල්ෆර් සමඟ රත් කර හරස් බන්ධන සාදන වල්කනයිස් කිරීම සහ 4R මූලධර්මය.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="font-mono text-amber-400 font-semibold">Polythene · PVC · Teflon · Rubber</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
