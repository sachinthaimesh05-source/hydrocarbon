import React, { useState } from 'react';
import distillationImage from '../../assets/images/petroleum_distillation_tower_1790697662066.jpg';
import { PETROLEUM_FRACTIONS, PetroleumFraction } from '../../data/hydrocarbonData';
import {
  Layers,
  Thermometer,
  Flame,
  Droplets,
  Zap,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const PetroleumDistillationTower: React.FC = () => {
  const [selectedFractionId, setSelectedFractionId] = useState<string>('petrol');
  const [activeTab, setActiveTab] = useState<'tower' | 'trends' | 'applications'>('tower');

  const selectedFraction: PetroleumFraction =
    PETROLEUM_FRACTIONS.find((f) => f.id === selectedFractionId) || PETROLEUM_FRACTIONS[1];

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>කාර්මික ක්‍රියාවලිය · සපුගස්කන්ද පිරිපහදුව හා O/L විභාග ප්‍රශ්න</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            ඛනිජ තෙල් භාගික ආසවන කුළුණ (Fractional Distillation Column)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            අමු ඛනිජ තෙල්වල සංඝටකවල තාපාංක වෙනස පාදක කරගෙන භාග වෙන් කරන ආකාරය, කාබන් දාම දිග සහ භෞතික ගුණ සජීවීව ගවේෂණය කරන්න.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
          <button
            onClick={() => setActiveTab('tower')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'tower'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ආසවන කුළුණ (3D Column)
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'trends'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ගුණ විචලන ප්‍රවණතා (Trends)
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ශ්‍රී ලංකාවේ භාවිත
          </button>
        </div>
      </div>

      {activeTab === 'tower' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Interactive Fractional Column Visualization */}
          <div className="lg:col-span-7 bg-[#05070E] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            {/* Top Gas Output */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
              <div className="flex items-center gap-2 text-cyan-300 font-mono">
                <Thermometer className="w-4 h-4 text-cyan-400" />
                <span>කුළුණේ මුදුන: 20 °C (අඩුම තාපාංක වාෂ්ප)</span>
              </div>
              <span className="text-[11px] bg-cyan-950/70 border border-cyan-800 text-cyan-400 px-2 py-0.5 rounded font-mono">
                C₁ - C₄
              </span>
            </div>

            {/* Visual Column Trays */}
            <div className="my-4 space-y-2">
              {PETROLEUM_FRACTIONS.map((fraction, index) => {
                const isSelected = selectedFractionId === fraction.id;
                // color styling depending on fraction temperature
                const colors = [
                  'border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/20 text-cyan-300',
                  'border-sky-500/40 hover:border-sky-400 bg-sky-950/20 text-sky-300',
                  'border-teal-500/40 hover:border-teal-400 bg-teal-950/20 text-teal-300',
                  'border-amber-500/40 hover:border-amber-400 bg-amber-950/20 text-amber-300',
                  'border-orange-500/40 hover:border-orange-400 bg-orange-950/20 text-orange-300',
                  'border-rose-500/40 hover:border-rose-400 bg-rose-950/20 text-rose-300',
                  'border-purple-500/40 hover:border-purple-400 bg-purple-950/20 text-purple-300',
                ];

                return (
                  <div
                    key={fraction.id}
                    onClick={() => setSelectedFractionId(fraction.id)}
                    className={`relative p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-500/15 ring-2 ring-cyan-400/40 shadow-lg'
                        : `${colors[index % colors.length]} hover:bg-white/[0.04]`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                          <span>{fraction.nameSinhala}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {fraction.nameEnglish} · {fraction.carbonRange}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-white block">
                        {fraction.boilingPointRange}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {fraction.volatility === 'ඉතා ඉහළ' ? 'අධි වාෂ්පශීලී' : fraction.volatility}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Furnace / Crude Oil Feed */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs bg-rose-950/20 p-3 rounded-lg border border-rose-500/30">
              <div className="flex items-center gap-2 text-rose-300 font-mono">
                <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>කුළුණේ පතුල: 400 °C රත් කළ උදුන (Crude Oil Furnace)</span>
              </div>
              <span className="text-[11px] bg-rose-950/70 border border-rose-800 text-rose-400 px-2 py-0.5 rounded font-mono">
                &gt; C₅₀ (තාර)
              </span>
            </div>
          </div>

          {/* Fraction Details Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#05070E] border border-cyan-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  තෝරාගත් භාගයේ සවිස්තර දත්ත
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                  {selectedFraction.carbonRange}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mt-3 font-['Yaldevi']">
                {selectedFraction.nameSinhala}
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                {selectedFraction.nameEnglish} · තාපාංකය: {selectedFraction.boilingPointRange}
              </p>

              {/* Physical Property Badges */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">දුස්ස්‍රාවිතාව (Viscosity):</span>
                  <span className="font-semibold text-white mt-0.5 block">{selectedFraction.viscosity}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">වාෂ්පශීලීතාව (Volatility):</span>
                  <span className="font-semibold text-cyan-300 mt-0.5 block">{selectedFraction.volatility}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">දැල්වීමේ පහසුව:</span>
                  <span className="font-semibold text-amber-300 mt-0.5 block">{selectedFraction.flammability}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">දැල්ලේ ස්වභාවය:</span>
                  <span className="font-semibold text-slate-200 mt-0.5 block">{selectedFraction.sootiness}</span>
                </div>
              </div>

              {/* Uses */}
              <div className="mt-4 pt-4 border-t border-white/[0.08]">
                <span className="text-xs font-semibold text-white block mb-2">ප්‍රධාන ප්‍රායෝගික භාවිත:</span>
                <ul className="space-y-1.5">
                  {selectedFraction.uses.map((use, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industrial Diagram Card */}
            <div className="bg-[#05070E] border border-white/10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={distillationImage}
                alt="Petroleum Distillation Tower"
                className="w-full h-36 object-cover object-center brightness-90 contrast-110"
              />
              <div className="p-3 bg-[#0A0F1D] text-[11px] text-slate-400 flex items-center justify-between">
                <span>ඛනිජ තෙල් පිරිපහදු කුළුණේ අභ්‍යන්තර ආකෘතිය</span>
                <span className="text-cyan-400 font-mono">FyZie Industry Codex</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'trends' && (
        <div className="mt-6 space-y-6">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>කුළුණේ ඉහළ සිට පහළට යනවිට (කාබන් පරමාණු ගණන වැඩි වන විට) ගුණ විචලනය</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              හයිඩ්‍රොකාබන අණුවල කාබන් පරමාණු සංඛ්‍යාව වැඩි වන විට අණුක ස්කන්ධය වැඩිවීම නිසා අන්තර් අණුක ආකර්ෂණ බල (වෑන්ඩවාල්ස් බල) ප්‍රබල වේ. එමඟින් පහත විචලනයන් ඇතිවේ:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">1. තාපාංකය (Boiling Point)</span>
                <div className="text-xl font-bold text-white flex items-center gap-1">
                  <span>ඉහළ යයි</span>
                  <span className="text-cyan-400 font-bold">↑</span>
                </div>
                <p className="text-xs text-slate-400">
                  අණු විශාල වත්ම ඒවා වෙන් කිරීමට වැඩි තාප ශක්තියක් අවශ්‍ය වේ. C₁-C₄ වායු වන අතර C₅-C₁₉ ද්‍රව ද, &gt;C₂₀ ඝන ද වේ.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-2">
                <span className="text-xs font-mono text-sky-400 uppercase font-semibold">2. දුස්ස්‍රාවිතාව (Viscosity)</span>
                <div className="text-xl font-bold text-white flex items-center gap-1">
                  <span>ඉහළ යයි</span>
                  <span className="text-sky-400 font-bold">↑</span>
                </div>
                <p className="text-xs text-slate-400">
                  ගලා යාමට ඇති ප්‍රතිරෝධය වැඩි වේ. පෙට්‍රල් ක්ෂණිකව ගලා යන නමුත් ලිහිසි තෙල් සහ තාර අතිශය දුස්ස්‍රාවී වේ.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold">3. වාෂ්පශීලීතාව (Volatility)</span>
                <div className="text-xl font-bold text-white flex items-center gap-1">
                  <span>අඩු වේ</span>
                  <span className="text-amber-400 font-bold">↓</span>
                </div>
                <p className="text-xs text-slate-400">
                  වාෂ්ප බවට පත්වීමේ හැකියාව අඩු වේ. පෙට්‍රල් විවෘත බඳුනක තැබූ විට පහසුවෙන් වාෂ්ප වුවද ඩීසල් පහසුවෙන් වාෂ්ප නොවේ.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-2">
                <span className="text-xs font-mono text-rose-400 uppercase font-semibold">4. දැල්වීමේ පහසුව</span>
                <div className="text-xl font-bold text-white flex items-center gap-1">
                  <span>අඩු වේ (දැලි ↑)</span>
                  <span className="text-rose-400 font-bold">↓</span>
                </div>
                <p className="text-xs text-slate-400">
                  කාබන් ප්‍රතිශතය වැඩි නිසා සම්පූර්ණ දහනය අපහසු වේ. දැල්ලේ දැලි (Soot) ප්‍රමාණය වැඩි වී කහ දුම් දැල්ලක් දෙයි.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'applications' && (
        <div className="mt-6 space-y-4">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white font-['Yaldevi']">
              ශ්‍රී ලංකාවේ සපුගස්කන්ද ඛනිජ තෙල් පිරිපහදුව සහ ප්‍රායෝගික වැදගත්කම
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ශ්‍රී ලංකාවට ආනයනය කරනු ලබන බොරතෙල් (Crude oil) සපුගස්කන්ද තෙල් පිරිපහදුවේදී (Sapugaskanda Refinery) භාගික ආසවනයට ලක් කර ප්‍රධාන ඵල ලබා ගනී:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                <span className="text-xs font-bold text-cyan-400 font-mono">1. ප්‍රවාහන ඉන්ධන</span>
                <p className="text-xs text-slate-300">
                  ලංකාවේ දෛනික ධාවනය වන සියලුම මෝටර් රථ, බස්, ලොරි සඳහා පෙට්‍රල් සහ ඔටෝ ඩීසල් සැපයීම.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                <span className="text-xs font-bold text-sky-400 font-mono">2. ගුවන් සේවා & ගෘහස්ථ</span>
                <p className="text-xs text-slate-300">
                  කටුනායක ගුවන් තොටුපළ සඳහා ජෙට් ඉන්ධන (Aviation Turbine Fuel - Kerosene) සහ ගෘහස්ථ භාවිතය.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                <span className="text-xs font-bold text-amber-400 font-mono">3. මාර්ග සංවර්ධනය</span>
                <p className="text-xs text-slate-300">
                  අවශේෂ තාර (Bitumen) මඟින් දිවයින පුරා මහාමාර්ග හා අධිවේගී මාර්ග කාපට් කිරීම.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
