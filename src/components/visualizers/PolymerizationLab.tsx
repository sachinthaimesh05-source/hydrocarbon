import React, { useState } from 'react';
import { POLYMERS_LIST, PolymerData } from '../../data/hydrocarbonData';
import { Play, RotateCcw, CheckCircle2, Shield, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const PolymerizationLab: React.FC = () => {
  const [selectedPolymerId, setSelectedPolymerId] = useState<string>('polythene');
  const [isPolymerized, setIsPolymerized] = useState<boolean>(false);
  const [monomerCount, setMonomerCount] = useState<number>(4);

  const polymer = POLYMERS_LIST.find((p) => p.id === selectedPolymerId) || POLYMERS_LIST[0];

  const handleToggle = () => {
    setIsPolymerized(!isPolymerized);
  };

  const handleReset = () => {
    setIsPolymerized(false);
  };

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>පාඩම් කොටස 14.3 · ආකලන බහුඅවයවීකරණය (Addition Polymerization)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            බහුඅවයවීකරණ ප්‍රතික්‍රියා අනුකරණය (Polymerization Lab)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            ද්විත්ව බන්ධන බිඳී ඒකඅවයවික (Monomers) දහස් ගණනක් එකිනෙක ඈඳී යෝධ බහුඅවයවික දාමයක් (Polymer) සෑදෙන ආකාරය නිරීක්ෂණය කරන්න.
          </p>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggle}
            className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              isPolymerized
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPolymerized ? 'ඒකඅවයවික තත්ත්වයට (Reset)' : 'බහුඅවයවීකරණය කරන්න (Polymerize)'}</span>
          </button>
        </div>
      </div>

      {/* Polymer Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-4 border-b border-white/[0.08]">
        <button
          onClick={() => {
            setSelectedPolymerId('polythene');
            handleReset();
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            selectedPolymerId === 'polythene'
              ? 'bg-cyan-400/20 text-white border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          1. පොලිතීන් (එතීන් ➔ පොලිඑතීන්)
        </button>

        <button
          onClick={() => {
            setSelectedPolymerId('pvc');
            handleReset();
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            selectedPolymerId === 'pvc'
              ? 'bg-cyan-400/20 text-white border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          2. PVC (ක්ලෝරෝඑතීන් ➔ පොලික්ලෝරෝඑතීන්)
        </button>

        <button
          onClick={() => {
            setSelectedPolymerId('teflon');
            handleReset();
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            selectedPolymerId === 'teflon'
              ? 'bg-cyan-400/20 text-white border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          3. ටෙෆ්ලෝන් (ටෙට්‍රාෆ්ලෝරෝඑතීන් ➔ PTFE)
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Reaction Animation Canvas */}
        <div className="lg:col-span-7 bg-[#030712] border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center min-h-[380px] relative overflow-hidden">
          {/* Status banner */}
          <div className="w-full flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-bold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
              {isPolymerized ? 'බහුඅවයවික දාමය (Macromolecule)' : `ස්වාධීන ඒකඅවයවික ${monomerCount} ක් (Monomers)`}
            </span>
            <span className="text-slate-400 font-sans">
              {isPolymerized ? 'තනි බන්ධන සහිතයි (C-C)' : 'ද්විත්ව බන්ධන සහිතයි (C=C)'}
            </span>
          </div>

          {/* Molecular Reaction Chain View */}
          <div className="my-auto py-8 w-full flex items-center justify-center overflow-x-auto no-scrollbar">
            {!isPolymerized ? (
              /* Monomers with double bonds separated */
              <div className="flex items-center gap-6">
                {Array.from({ length: monomerCount }).map((_, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex flex-col items-center shadow-lg transition-transform hover:scale-105"
                  >
                    <span className="text-[10px] text-cyan-400 font-mono font-bold mb-1">
                      ඒකඅවයවිකය #{mIdx + 1}
                    </span>
                    <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                        <span>C</span>
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-lg">=</span>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                        <span>C</span>
                        <span className="text-xs text-amber-300 font-bold">
                          {selectedPolymerId === 'pvc' ? 'Cl' : selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Continuous Polymer Chain with Brackets and subscript n */
              <div className="relative flex items-center bg-cyan-950/20 border-2 border-cyan-400/40 rounded-2xl p-4 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                {/* Left Bracket */}
                <span className="text-4xl text-cyan-400 font-thin select-none mr-2">[</span>

                <div className="flex items-center">
                  {Array.from({ length: monomerCount }).map((_, mIdx) => (
                    <div key={mIdx} className="flex items-center">
                      <div className="flex flex-col items-center font-mono font-bold text-white px-2">
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                        <span>C</span>
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                      </div>
                      <span className="text-slate-400 text-sm">-</span>
                      <div className="flex flex-col items-center font-mono font-bold text-white px-2">
                        <span className="text-xs text-slate-300">
                          {selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                        <span>C</span>
                        <span className="text-xs text-amber-300 font-bold">
                          {selectedPolymerId === 'pvc' ? 'Cl' : selectedPolymerId === 'teflon' ? 'F' : 'H'}
                        </span>
                      </div>
                      {mIdx < monomerCount - 1 && (
                        <span className="text-cyan-400 text-sm font-extrabold mx-1">-</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Bracket & subscript n */}
                <span className="text-4xl text-cyan-400 font-thin select-none ml-2">]</span>
                <span className="text-base font-mono font-bold text-cyan-300 -mt-4 ml-1">n</span>
              </div>
            )}
          </div>

          {/* Explanation Callout */}
          <div className="w-full p-3 bg-slate-900/90 rounded-xl border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span>
              {isPolymerized
                ? '✅ ආකලන බහුඅවයවීකරණය සම්පූර්ණයි: ද්විත්ව බන්ධන බිඳී කාබන්-කාබන් තනි බන්ධන මඟින් අණු එකිනෙක බැඳී ඇත.'
                : '💡 "බහුඅවයවීකරණය කරන්න" බොත්තම ක්ලික් කර ද්විත්ව බන්ධන බිඳී දාමය සෑදෙන අයුරු බලන්න.'}
            </span>
            <span className="font-mono text-cyan-400 font-bold shrink-0 ml-2">
              {isPolymerized ? polymer.repeatingUnit : polymer.monomerFormula}
            </span>
          </div>
        </div>

        {/* Right: Technical Attributes & Real-World Profile */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-['Space_Grotesk'] text-slate-400 uppercase tracking-wider font-semibold">
                බහුඅවයවික පැතිකඩ (Profile)
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50">
                {polymer.nameEnglish}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white font-['Yaldevi']">{polymer.nameSinhala}</h4>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-[#0A0F1D] rounded-lg border border-white/[0.06] flex items-center justify-between">
                <span className="text-slate-400">ඒකඅවයවිකය (Monomer):</span>
                <span className="text-cyan-300 font-semibold font-mono">{polymer.monomerSinhala} ({polymer.monomerFormula})</span>
              </div>
              <div className="p-2.5 bg-[#0A0F1D] rounded-lg border border-white/[0.06] flex items-center justify-between">
                <span className="text-slate-400">පුනරාවර්තන ඒකකය:</span>
                <span className="text-white font-bold font-mono">{polymer.repeatingUnit}</span>
              </div>
            </div>

            {/* Properties */}
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-1.5">විශේෂ ලක්ෂණ:</span>
              <ul className="space-y-1 text-xs text-slate-400">
                {polymer.properties.map((prop, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uses */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-semibold text-slate-300 block mb-1.5">දෛනික භාවිත:</span>
              <div className="flex flex-wrap gap-1.5">
                {polymer.uses.map((use, uIdx) => (
                  <span
                    key={uIdx}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
