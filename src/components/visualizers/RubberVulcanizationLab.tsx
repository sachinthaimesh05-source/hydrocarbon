import React, { useState } from 'react';
import vulcanizationImage from '../../assets/images/polymer_vulcanization_1790697177874.jpg';
import { Layers, ShieldCheck, Sparkles, Info, Check, AlertTriangle } from 'lucide-react';

export const RubberVulcanizationLab: React.FC = () => {
  const [isVulcanized, setIsVulcanized] = useState<boolean>(true);
  const [stretchLevel, setStretchLevel] = useState<number>(0); // 0 to 100%

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>පාඩම් කොටස 14.3 · ස්වාභාවික රබර් තාක්ෂණය</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            රබර් වල්කනයිස් කිරීම සහ හරස් බන්ධන ආදර්ශකය (Vulcanization Lab)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            අමු රබර්වල රේඛීය දාම අතර සල්ෆර් (S) මඟින් හරස් බන්ධන (Cross-links) සැකසී දෘඪතාව හා ප්‍රත්‍යාස්ථතාව ලැබෙන අයුරු නිරීක්ෂණය කරන්න.
          </p>
        </div>

        {/* State Toggle Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
          <button
            onClick={() => setIsVulcanized(false)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              !isVulcanized
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            අමු ස්වාභාවික රබර් (Raw)
          </button>
          <button
            onClick={() => setIsVulcanized(true)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              isVulcanized
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            වල්කනයිස් කළ රබර් (+ Sulfur)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Chain Stretch Simulator */}
        <div className="lg:col-span-7 bg-[#030712] border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center min-h-[380px] relative overflow-hidden">
          {/* Stretch Level Controller */}
          <div className="w-full flex items-center justify-between bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10 mb-4 text-xs">
            <span className="text-slate-300 font-semibold">බාහිර ආතතිය / ඇදීම (Tension):</span>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="80"
                value={stretchLevel}
                onChange={(e) => setStretchLevel(Number(e.target.value))}
                className="w-28 sm:w-40 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="font-mono text-cyan-400 font-bold w-10 text-right">{stretchLevel}%</span>
            </div>
          </div>

          {/* Molecular Chains View */}
          <div className="my-auto py-6 w-full flex flex-col items-center justify-center gap-5">
            {/* Chain 1 */}
            <div
              className="h-4 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-[9px] font-mono font-bold text-slate-950"
              style={{
                width: `${Math.min(95, 60 + stretchLevel * 0.4)}%`,
                transform: !isVulcanized ? `translateX(${stretchLevel * 0.5}px)` : 'none'
              }}
            >
              පොලිඅයිසොප්‍රීන් රේඛීය දාමය 1
            </div>

            {/* Sulfur Bridges (Only when vulcanized!) */}
            {isVulcanized ? (
              <div className="flex justify-around w-2/3 px-4">
                <div className="flex flex-col items-center animate-pulse">
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span className="text-[10px] font-mono font-bold text-yellow-300 bg-slate-900 px-1 rounded -my-1 border border-yellow-500/40">
                    -S-S-
                  </span>
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </div>

                <div className="flex flex-col items-center animate-pulse">
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span className="text-[10px] font-mono font-bold text-yellow-300 bg-slate-900 px-1 rounded -my-1 border border-yellow-500/40">
                    -S-S-
                  </span>
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </div>

                <div className="flex flex-col items-center animate-pulse">
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span className="text-[10px] font-mono font-bold text-yellow-300 bg-slate-900 px-1 rounded -my-1 border border-yellow-500/40">
                    -S-S-
                  </span>
                  <div className="w-1.5 h-6 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </div>
              </div>
            ) : (
              <div className="h-6 flex items-center text-[10px] text-rose-400/80 font-mono italic">
                (හරස් බන්ධන නොමැත — දාම එකිනෙක මත ලිස්සා යයි)
              </div>
            )}

            {/* Chain 2 */}
            <div
              className="h-4 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-[9px] font-mono font-bold text-slate-950"
              style={{
                width: `${Math.min(95, 60 + stretchLevel * 0.4)}%`,
                transform: !isVulcanized ? `translateX(${-stretchLevel * 0.5}px)` : 'none'
              }}
            >
              පොලිඅයිසොප්‍රීන් රේඛීය දාමය 2
            </div>
          </div>

          {/* Bottom Live Behavior Description */}
          <div className="w-full p-3 bg-slate-900/90 rounded-xl border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span>
              {isVulcanized
                ? '✅ වල්කනයිස් කළ රබර්: සල්ෆර් හරස් බන්ධන මඟින් දාම එකිනෙක ලිස්සා යාම වළකා නැවත මුල් හැඩයට ගෙනෙයි (ඉහළ ප්‍රත්‍යාස්ථතාව).'
                : '⚠️ අමු රබර්: බාහිර ආතතියේදී දාම එකිනෙක මත ලිස්සා ගොස් ස්ථිරවම විරූපී වේ; රස්නයට ඇලෙනසුලු වේ.'}
            </span>
          </div>
        </div>

        {/* Right: Scientific Principles & Applications */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-5 space-y-3">
            <h4 className="text-base font-bold text-white font-['Yaldevi'] flex items-center justify-between">
              <span>වල්කනයිස් කිරීම (Vulcanization)</span>
              <span className="text-xs font-mono text-yellow-400 font-bold bg-yellow-950/80 px-2 py-0.5 rounded border border-yellow-800/50">
                + Sulfur (S)
              </span>
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              ස්වාභාවික රබර් කිරිවල ඇත්තේ <strong>අයිසොප්‍රීන් (Isoprene)</strong> ඒකඅවයවිකයෙන් සෑදුණු රේඛීය බහුඅවයවික දාමයන්ය. රබර් සල්ෆර් (Sulfur) සමඟ රත් කළ විට රේඛීය දාම අතර සල්ෆර් පරමාණු හරහා <strong>හරස් බන්ධන (Cross-links)</strong> ජාලයක් ගොඩනැගේ.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06] flex items-center justify-between">
                <span>දෘඪතාව සහ ශක්තිය:</span>
                <strong className="text-emerald-400">අතිශයින් වැඩි වේ</strong>
              </div>
              <div className="p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06] flex items-center justify-between">
                <span>තාපයට ඔරොත්තු දීම:</span>
                <strong className="text-emerald-400">ඇලෙනසුලු නොවේ</strong>
              </div>
              <div className="p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06] flex items-center justify-between">
                <span>ප්‍රත්‍යාස්ථතාව (Elasticity):</span>
                <strong className="text-emerald-400">විශිෂ්ට ලෙස පවතී</strong>
              </div>
            </div>

            <div className="p-3 bg-yellow-950/30 border border-yellow-900/40 rounded-lg text-xs text-yellow-200 leading-relaxed">
              <strong className="text-white block mb-0.5">කාර්මික යෙදවුම්:</strong>
              මෝටර් රථ ටයර්, ටියුබ්, කර්මාන්තශාලා වාහක පටි (Conveyor belts), විදුලි බැටරි ආවරණ.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
