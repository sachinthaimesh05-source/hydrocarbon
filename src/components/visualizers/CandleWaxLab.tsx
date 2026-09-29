import React, { useState, useEffect } from 'react';
import candleWaxImage from '../../assets/images/candle_wax_lab_1790697162605.jpg';
import { Play, Pause, RotateCcw, CheckCircle2, Flame, Droplets, Sparkles, Info } from 'lucide-react';

export const CandleWaxLab: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(100, prev + 2));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isRunning, progress]);

  const handleReset = () => {
    setProgress(0);
    setIsRunning(true);
  };

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>ක්‍රියාකාරකම 14.1 · පෙළපොත පිටුව 152</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            ඉටිවල කාබන් (C) සහ හයිඩ්‍රජන් (H) අඩංගු බව තහවුරු කිරීම
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            ඉටිපන්දම දල්වා චූෂකය ක්‍රියාත්මක කර නිර්ජලීය කොපර් සල්ෆේට් නිල් පැහැවීම සහ හුණු දියර කිරි පැහැවීම සජීවීව නිරීක්ෂණය කරන්න.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              isRunning
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? 'විරාමය (Pause)' : 'දහනය අරඹන්න (Run)'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-full transition-colors cursor-pointer"
            title="නැවත සකසන්න"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Interactive Diagram / Apparatus */}
        <div className="lg:col-span-7 bg-[#030712] border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center relative overflow-hidden">
          {/* Reaction Progress Bar */}
          <div className="w-full flex items-center justify-between bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10 mb-4 text-xs font-mono">
            <span className="text-slate-400">දහන වායු සංසරණය:</span>
            <div className="flex items-center gap-2">
              <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-cyan-400 font-bold">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Apparatus Stage */}
          <div className="relative w-full max-w-lg h-72">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 260">
              {/* Connecting Glass Tube from Funnel to U-Tube */}
              <path d="M 90 90 L 90 40 L 200 40 L 200 80" fill="none" stroke="#60A5FA" strokeWidth="3.5" />
              {/* Connecting Glass Tube from U-Tube to Lime Water Tube */}
              <path d="M 250 80 L 250 40 L 370 40 L 370 120" fill="none" stroke="#60A5FA" strokeWidth="3.5" />
              {/* Outlet tube to suction pump */}
              <path d="M 390 100 L 430 100" fill="none" stroke="#94A3B8" strokeWidth="3" />

              {/* Suction gas flow dots */}
              {isRunning && progress < 100 && (
                <>
                  <path d="M 90 90 L 90 40 L 200 40 L 200 80" fill="none" stroke="#FFFFFF" strokeWidth="2" className="animate-electron-wire" />
                  <path d="M 250 80 L 250 40 L 370 40 L 370 120" fill="none" stroke="#FFFFFF" strokeWidth="2" className="animate-electron-wire" />
                </>
              )}
            </svg>

            {/* 1. Candle & Inverted Funnel (Left: ~80px) */}
            <div className="absolute bottom-2 left-6 flex flex-col items-center">
              {/* Inverted Funnel */}
              <div className="w-16 h-12 border-2 border-slate-400 border-b-0 rounded-t-full bg-slate-800/30 flex items-center justify-center text-[8px] font-mono text-cyan-300">
                පුනීලය
              </div>
              {/* Flame */}
              <div className="w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-white shadow-[0_0_15px_rgba(251,191,36,0.9)] animate-pulse my-1" />
              {/* Candle Body */}
              <div className="w-6 h-20 bg-amber-100 rounded-sm shadow-inner border border-amber-200/40 flex items-center justify-center">
                <span className="text-[7px] text-amber-950 font-bold rotate-90">ඉටිපන්දම</span>
              </div>
            </div>

            {/* 2. Glass U-Tube in Ice-Water Bath (Middle: ~200px) */}
            <div className="absolute bottom-2 left-44 flex flex-col items-center">
              {/* Outer Cold Water Beaker */}
              <div className="w-28 h-32 border-2 border-slate-500 rounded-b-2xl bg-cyan-950/40 relative overflow-hidden flex flex-col justify-end p-1">
                <div className="text-[7px] text-cyan-300 font-mono text-center">සිසිල් ජලය + අයිස්</div>

                {/* Glass U-Tube immersed inside */}
                <div className="absolute inset-x-3 bottom-2 h-24 border-3 border-slate-300 rounded-b-2xl bg-slate-900/60 flex flex-col justify-end p-1">
                  {/* Copper Sulfate color changing from white to blue */}
                  <div
                    className="w-full h-8 rounded-b-xl transition-all duration-700 flex items-center justify-center text-[7px] font-bold shadow-md"
                    style={{
                      backgroundColor:
                        progress === 0
                          ? '#f1f5f9' // White anhydrous CuSO4
                          : `rgb(${Math.round(241 - (progress / 100) * 230)}, ${Math.round(
                              245 - (progress / 100) * 115
                            )}, 245)`, // Shifts to deep blue #0ea5e9
                      color: progress > 40 ? '#ffffff' : '#0f172a'
                    }}
                  >
                    {progress > 50 ? 'සජල CuSO₄ (නිල්)' : 'නිර්ජල CuSO₄ (සුදු)'}
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-cyan-300 font-mono mt-1">U-නළය (H₂O හඳුනාගනී)</span>
            </div>

            {/* 3. Lime Water Test Tube (Right: ~350px) */}
            <div className="absolute bottom-2 right-8 flex flex-col items-center">
              <div className="w-14 h-36 border-2 border-slate-400 rounded-b-2xl bg-slate-900/40 relative overflow-hidden flex flex-col justify-end p-1">
                {/* Lime water turns milky white */}
                <div
                  className="w-full rounded-b-xl transition-all duration-700 flex flex-col items-center justify-center text-[7px] font-bold p-1"
                  style={{
                    height: '60%',
                    backgroundColor:
                      progress === 0
                        ? 'rgba(255, 255, 255, 0.15)' // Clear lime water
                        : `rgba(255, 255, 255, ${Math.min(0.95, 0.2 + (progress / 100) * 0.75)})`, // Milky white!
                    color: progress > 30 ? '#0f172a' : '#94a3b8'
                  }}
                >
                  {/* Bubbles */}
                  {isRunning && progress < 100 && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-bubble-fast mb-1" />
                  )}
                  <span>{progress > 40 ? 'කිරි පැහැති CaCO₃' : 'පිරිසිදු හුණු දියර'}</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-amber-300 font-mono mt-1">හුණු දියර (CO₂ හඳුනාගනී)</span>
            </div>
          </div>

          {/* Bottom Dual Findings Banner */}
          <div className="w-full grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.08]">
            <div className="p-2.5 rounded-xl bg-blue-950/50 border border-blue-500/40 text-xs">
              <span className="text-blue-300 font-bold block mb-0.5">1. හයිඩ්‍රජන් (H) තහවුරු වීම:</span>
              <p className="text-[11px] text-slate-300">
                U-නළයේ සුදු පැහැති නිර්ජල කොපර් සල්ෆේට්, ජලය (H₂O) උරාගෙන නිල් පැහැයට හැරේ.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-500/40 text-xs">
              <span className="text-amber-300 font-bold block mb-0.5">2. කාබන් (C) තහවුරු වීම:</span>
              <p className="text-[11px] text-slate-300">
                දහනයේදී පිටවන CO₂ වායුව හුණු දියර කිරි පැහැයට හෙවත් සුදු අවක්ෂේපයක් බවට හරවයි.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Chemical Equations & Rigorous Scientific Analysis */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-['Space_Grotesk'] uppercase tracking-wider text-slate-400 font-semibold">
              රසායනික ප්‍රතික්‍රියා විග්‍රහය
            </h4>

            {/* Reaction 1: Water Test */}
            <div className="p-3 bg-[#0A0F1D] border border-blue-500/30 rounded-xl space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-blue-300">ජලය (H₂O) හඳුනාගැනීම:</span>
                <span className="text-[10px] text-slate-400 font-mono">සුදු ➔ නිල්</span>
              </div>
              <div className="font-mono text-xs font-bold text-white bg-[#030712] p-2 rounded">
                CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)
              </div>
              <p className="text-[11px] text-slate-400">
                ඉටිවල ඇති හයිඩ්‍රජන් (H) වාතයේ ඔක්සිජන් සමඟ එකතු වී ජලවාෂ්ප (H₂O) සාදයි.
              </p>
            </div>

            {/* Reaction 2: CO2 Test */}
            <div className="p-3 bg-[#0A0F1D] border border-amber-500/30 rounded-xl space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-300">කාබන් ඩයොක්සයිඩ් (CO₂) හඳුනාගැනීම:</span>
                <span className="text-[10px] text-slate-400 font-mono">හුණු දියර කිරි පැහැවීම</span>
              </div>
              <div className="font-mono text-xs font-bold text-white bg-[#030712] p-2 rounded">
                Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ + H₂O(l)
              </div>
              <p className="text-[11px] text-slate-400">
                ඉටිවල ඇති කාබන් (C) වාතයේ ඔක්සිජන් සමඟ දහනය වී CO₂ වායුව සාදයි.
              </p>
            </div>
          </div>

          {/* O/L Exam Golden Takeaway */}
          <div className="p-4 bg-[#111827] border border-white/10 rounded-xl space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>විභාග නිගමනය (Exam Conclusion):</span>
            </div>
            <p className="leading-relaxed">
              ඉටිපන්දම් ඉටි දහනයෙන් ජලය (H₂O) සහ කාබන් ඩයොක්සයිඩ් (CO₂) යන ඵල පමණක් ලැබෙන බැවින්, <strong>ඉටි යනු කාබන් (C) සහ හයිඩ්‍රජන් (H) යන මූලද්‍රව්‍යවලින් පමණක් සමන්විත හයිඩ්‍රොකාබනයක්</strong> බව තහවුරු වේ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
