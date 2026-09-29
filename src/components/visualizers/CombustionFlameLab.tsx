import React, { useState } from 'react';
import { Flame, Wind, AlertTriangle, CheckCircle2, Info, Sparkles } from 'lucide-react';

export const CombustionFlameLab: React.FC = () => {
  const [oxygenLevel, setOxygenLevel] = useState<number>(100); // 0 (closed) to 100 (fully open)

  const isComplete = oxygenLevel >= 65;
  const isSeverelyIncomplete = oxygenLevel < 35;

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>හයිඩ්‍රොකාබන දහනය · Combustion Chemistry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            හයිඩ්‍රොකාබන දහනය සහ දැල්ල පාලනය (Combustion Lab)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            ඔක්සිජන් (වායු කුහරය) සැපයුම වෙනස් කරමින් සම්පූර්ණ දහනය (නිල් දැල්ල) සහ අසම්පූර්ණ දහනය (කහ දැල්ල හා දැලි) සසඳන්න.
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono border ${
              isComplete
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                : 'bg-amber-500/20 text-amber-300 border-amber-400'
            }`}
          >
            {isComplete ? 'සම්පූර්ණ දහනය (Complete)' : 'අසම්පූර්ණ දහනය (Incomplete)'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Burner & Flame Viewport */}
        <div className="lg:col-span-7 bg-[#030712] border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center min-h-[360px] relative overflow-hidden">
          {/* Air Regulator Slider */}
          <div className="w-full flex items-center justify-between bg-slate-900/80 px-4 py-2.5 rounded-xl border border-white/10 mb-4 text-xs">
            <span className="text-slate-300 font-semibold flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-cyan-400" />
              <span>වායු කුහරය / ඔක්සිජන් සැපයුම (O₂):</span>
            </span>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="100"
                value={oxygenLevel}
                onChange={(e) => setOxygenLevel(Number(e.target.value))}
                className="w-28 sm:w-40 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="font-mono text-cyan-400 font-bold w-12 text-right">{oxygenLevel}%</span>
            </div>
          </div>

          {/* Flame Visualizer Graphic */}
          <div className="my-auto flex flex-col items-center justify-end h-56 relative">
            {/* Soot / Smoke particles if incomplete */}
            {!isComplete && (
              <div className="absolute top-2 w-12 flex flex-col items-center opacity-70 animate-pulse">
                <span className="text-[10px] text-slate-400 font-mono">කාබන් දැලි (Soot)</span>
                <div className="w-3 h-3 rounded-full bg-slate-600 blur-[2px] mt-1" />
              </div>
            )}

            {/* Dynamic Flame */}
            <div
              className="rounded-full blur-[1px] transition-all duration-500 ease-out animate-pulse"
              style={{
                width: isComplete ? '28px' : '44px',
                height: isComplete ? '90px' : '130px',
                background: isComplete
                  ? 'radial-gradient(ellipse at bottom, #38bdf8 0%, #0284c7 60%, rgba(2,132,199,0) 100%)' // Roaring blue
                  : isSeverelyIncomplete
                  ? 'radial-gradient(ellipse at bottom, #f59e0b 0%, #ea580c 50%, #dc2626 90%)' // Yellow-orange smoky
                  : 'radial-gradient(ellipse at bottom, #38bdf8 0%, #facc15 65%, #ea580c 100%)',
                boxShadow: isComplete
                  ? '0 0 35px rgba(56,189,248,0.7)'
                  : '0 0 45px rgba(245,158,11,0.8)'
              }}
            />

            {/* Burner Chimney & Base */}
            <div className="w-8 h-20 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-t-sm border border-slate-600 shadow-md relative flex items-center justify-center">
              {/* Air Hole Indicator */}
              <div
                className="w-4 h-4 rounded-full border border-slate-900 transition-colors"
                style={{
                  backgroundColor: `rgba(56, 189, 248, ${oxygenLevel / 100})`
                }}
                title="වායු කුහරය"
              />
            </div>
            <div className="w-20 h-4 bg-slate-800 rounded-b-md border border-slate-700" />
          </div>

          {/* Flame Characteristic description */}
          <div className="w-full p-3 bg-slate-900/90 rounded-xl border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span>
              {isComplete
                ? '🔵 ප්‍රභාහීන නිල් දැල්ල: අධික තාපයක් සහිතයි, දැලි නොසාදයි (ගෘහස්ථ L.P. ගෑස් ලිප බඳු).'
                : '🟡 ප්‍රභාමත් කහ දැල්ල: ඔක්සිජන් මදිවීමෙන් අසම්පූර්ණ දහනය වී කාබන් අංශු (සබන්) හා විෂ CO සාදයි.'}
            </span>
          </div>
        </div>

        {/* Right: Chemical Equations & Comparison */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-['Space_Grotesk'] uppercase tracking-wider text-slate-400 font-semibold">
              දහන රසායනික ප්‍රතික්‍රියාව
            </h4>

            {isComplete ? (
              <div className="p-3.5 bg-[#0A0F1D] border border-cyan-500/40 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-300">සම්පූර්ණ දහනය (Complete):</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">ප්‍රශස්තයි</span>
                </div>
                <div className="font-mono text-xs font-bold text-white bg-[#030712] p-2.5 rounded">
                  CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) + තාපය
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  නිපදවෙන්නේ හානිකර නොවන CO₂ සහ H₂O වාෂ්ප පමණි. උපරිම තාප ශක්තියක් නිදහස් වේ.
                </p>
              </div>
            ) : (
              <div className="p-3.5 bg-[#0A0F1D] border border-amber-500/40 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300">අසම්පූර්ණ දහනය (Incomplete):</span>
                  <span className="text-[10px] text-rose-400 font-mono font-bold">අනතුරුදායකයි</span>
                </div>
                <div className="font-mono text-xs font-bold text-white bg-[#030712] p-2.5 rounded">
                  2CH₄(g) + 3O₂(g) → 2CO(g) + 4H₂O(l) <br />
                  CH₄(g) + O₂(g) → C(s) [දැලි] + 2H₂O(l)
                </div>
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  අතිශය විෂ සහිත කාබන් මොනොක්සයිඩ් (CO) වායුව සහ කාබන් දැලි නිපදවයි. ඉන්ධන අපතේ යයි.
                </p>
              </div>
            )}
          </div>

          {/* Golden Exam Alert */}
          <div className="p-4 bg-[#111827] border border-white/10 rounded-xl space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>විභාග ප්‍රශ්නය: ගෑස් ලිපක කහ දැල්ලක් ආවොත් කුමක් කළ යුතුද?</span>
            </div>
            <p className="leading-relaxed">
              ලිපෙහි වායු නියාමක කුහරය (Air hole) සබන් හෝ කුණු මිශ්‍රණයෙන් අවහිර වී ඇත්දැයි බලා එය පිරිසිදු කර වාතය (O₂) නිසි ලෙස ඇතුළු වීමට සැලැස්විය යුතුය. එවිට කහ දැල්ල නිල් දැල්ලක් බවට පත්වී කාර්යක්ෂමතාව වැඩි වේ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
