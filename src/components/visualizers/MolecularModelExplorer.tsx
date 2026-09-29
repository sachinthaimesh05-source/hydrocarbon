import React, { useState } from 'react';
import {
  ALKANES_LIST,
  ALKENES_LIST,
  ALKYNES_LIST,
  DERIVATIVES_LIST,
  HYDROCARBON_FAMILY_COMPARISON,
  HydrocarbonMolecule
} from '../../data/hydrocarbonData';
import {
  Layers,
  RotateCcw,
  Sparkles,
  Info,
  Eye,
  Check,
  Flame,
  ArrowRight,
  TrendingUp,
  Table
} from 'lucide-react';

export const MolecularModelExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'alkane' | 'alkene' | 'alkyne' | 'derivative' | 'comparison'>('alkane');
  const [selectedMoleculeName, setSelectedMoleculeName] = useState<string>('මීතේන්');
  const [viewMode, setViewMode] = useState<'ball_stick' | 'structural' | 'isomers'>('ball_stick');
  const [selectedIsomerIdx, setSelectedIsomerIdx] = useState<number>(0);

  // Category filter
  const currentCategoryMolecules =
    activeCategory === 'alkane'
      ? ALKANES_LIST
      : activeCategory === 'alkene'
      ? ALKENES_LIST
      : activeCategory === 'alkyne'
      ? ALKYNES_LIST
      : DERIVATIVES_LIST;

  const allMolecules = [...ALKANES_LIST, ...ALKENES_LIST, ...ALKYNES_LIST, ...DERIVATIVES_LIST];

  const molecule: HydrocarbonMolecule =
    allMolecules.find((m) => m.nameSinhala === selectedMoleculeName) ||
    currentCategoryMolecules[0] ||
    ALKANES_LIST[0];

  const handleCategoryChange = (cat: 'alkane' | 'alkene' | 'alkyne' | 'derivative' | 'comparison') => {
    setActiveCategory(cat);
    if (cat === 'alkane') setSelectedMoleculeName(ALKANES_LIST[0].nameSinhala);
    else if (cat === 'alkene') setSelectedMoleculeName(ALKENES_LIST[0].nameSinhala);
    else if (cat === 'alkyne') setSelectedMoleculeName(ALKYNES_LIST[0].nameSinhala);
    else if (cat === 'derivative') setSelectedMoleculeName(DERIVATIVES_LIST[0].nameSinhala);
    setSelectedIsomerIdx(0);
  };

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>පෙළපොතේ මූලික කුල 3 · Alkanes, Alkenes & Alkynes</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            හයිඩ්‍රොකාබන අණුක ආකෘති ගවේෂකය (3D Molecular Kit)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            ඇල්කේන (C-C තනි බන්ධන), ඇල්කීන (C=C ද්විත්ව බන්ධන) සහ ඇල්කයින (C≡C ත්‍රිත්ව බන්ධන) වල ත්‍රිමාණ බෝල-කූරු ආකෘති, සූත්‍ර හා සමාවයවිකතාව.
          </p>
        </div>

        {/* View Mode Buttons */}
        {activeCategory !== 'comparison' && (
          <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
            <button
              onClick={() => setViewMode('ball_stick')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'ball_stick'
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              බෝල-කූරු ආකෘතිය (3D)
            </button>
            <button
              onClick={() => setViewMode('structural')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'structural'
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ව්‍යුහ සූත්‍රය
            </button>
            {molecule.isomers && molecule.isomers.length > 0 && (
              <button
                onClick={() => setViewMode('isomers')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  viewMode === 'isomers'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                සමාවයවික (Isomers)
              </button>
            )}
          </div>
        )}
      </div>

      {/* Primary Category Selector Tabs (Alkanes, Alkenes, Alkynes, Derivatives, Comparison) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 border-b border-white/[0.08]">
        <button
          onClick={() => handleCategoryChange('alkane')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeCategory === 'alkane'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <span>1. ඇල්කේන (Alkanes - CₙH₂ₙ₊₂)</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-cyan-400 font-mono">C-C</span>
        </button>

        <button
          onClick={() => handleCategoryChange('alkene')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeCategory === 'alkene'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <span>2. ඇල්කීන (Alkenes - CₙH₂ₙ)</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-sky-400 font-mono">C=C</span>
        </button>

        <button
          onClick={() => handleCategoryChange('alkyne')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeCategory === 'alkyne'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <span>3. ඇල්කයින (Alkynes - CₙH₂ₙ₋₂)</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-amber-400 font-mono">C≡C</span>
        </button>

        <button
          onClick={() => handleCategoryChange('derivative')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeCategory === 'derivative'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <span>4. ව්‍යුත්පන්න (PVC, Teflon)</span>
        </button>

        <button
          onClick={() => handleCategoryChange('comparison')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
            activeCategory === 'comparison'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          <span>කුල 3 සංසන්දනය (Comparison)</span>
        </button>
      </div>

      {activeCategory !== 'comparison' ? (
        <>
          {/* Molecule Selection Strip */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 border-b border-white/[0.08]">
            {currentCategoryMolecules.map((m) => (
              <button
                key={m.nameSinhala}
                onClick={() => {
                  setSelectedMoleculeName(m.nameSinhala);
                  setSelectedIsomerIdx(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedMoleculeName === m.nameSinhala
                    ? 'bg-cyan-400/20 text-white border border-cyan-400 shadow-sm'
                    : 'bg-white/[0.02] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                <span className="font-mono text-cyan-300 font-bold">{m.molecularFormula}</span>
                <span>{m.nameSinhala}</span>
              </button>
            ))}
          </div>

          {/* Main Visualizer Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left: 2D/3D Molecule Canvas */}
            <div className="lg:col-span-7 bg-[#030712] border border-white/10 rounded-2xl p-6 flex flex-col justify-between items-center min-h-[380px] relative overflow-hidden">
              {/* Top Label */}
              <div className="w-full flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
                  {molecule.molecularFormula} · {molecule.nameEnglish}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded font-semibold text-[11px] ${
                    molecule.category === 'alkane'
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                      : molecule.category === 'alkene'
                      ? 'bg-sky-950 text-sky-300 border border-sky-800'
                      : molecule.category === 'alkyne'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800'
                      : 'bg-purple-950 text-purple-300 border border-purple-800'
                  }`}
                >
                  {molecule.category === 'alkane'
                    ? 'සංතෘප්ත (Alkane: CₙH₂ₙ₊₂)'
                    : molecule.category === 'alkene'
                    ? 'අසංතෘප්ත (Alkene: CₙH₂ₙ)'
                    : molecule.category === 'alkyne'
                    ? 'අතිශය අසංතෘප්ත (Alkyne: CₙH₂ₙ₋₂)'
                    : 'එතීන ව්‍යුත්පන්නය'}
                </span>
              </div>

              {/* Molecule Drawing Viewport */}
              <div className="my-auto py-8 flex items-center justify-center w-full">
                {viewMode === 'ball_stick' ? (
                  /* Ball and Stick Simulation View */
                  <div className="flex items-center justify-center gap-2 flex-wrap max-w-md">
                    {Array.from({ length: molecule.carbonCount }).map((_, cIdx) => (
                      <div key={cIdx} className="flex items-center">
                        {/* Carbon Atom Unit with Hydrogens */}
                        <div className="flex flex-col items-center">
                          {/* Top Hydrogen (Alkynes have only 1 H at terminal carbon) */}
                          {!(molecule.category === 'alkyne' && (cIdx === 0 || cIdx === 1) && molecule.carbonCount === 2) && (
                            <>
                              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-slate-200 to-white border border-slate-300 shadow-md flex items-center justify-center text-[10px] font-bold text-slate-900">
                                H
                              </div>
                              <div className="w-1.5 h-5 bg-slate-400 rounded-full my-0.5" />
                            </>
                          )}

                          {/* Carbon Atom Core */}
                          <div
                            className={`w-12 h-12 rounded-full border-2 shadow-lg flex items-center justify-center text-xs font-mono font-bold text-white relative ${
                              molecule.category === 'alkyne'
                                ? 'bg-gradient-to-tr from-slate-950 via-amber-950 to-slate-800 border-amber-500/60 shadow-amber-500/20'
                                : 'bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700 border-slate-500'
                            }`}
                          >
                            C{cIdx + 1}
                            <div className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
                          </div>

                          {/* Bottom Vertical Bond */}
                          {!(molecule.category === 'alkyne' && (cIdx === 0 || cIdx === 1) && molecule.carbonCount === 2) && (
                            <>
                              <div className="w-1.5 h-5 bg-slate-400 rounded-full my-0.5" />
                              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-slate-200 to-white border border-slate-300 shadow-md flex items-center justify-center text-[10px] font-bold text-slate-900">
                                H
                              </div>
                            </>
                          )}
                        </div>

                        {/* Horizontal C-C Bond between Carbons */}
                        {cIdx < molecule.carbonCount - 1 && (
                          <div className="flex flex-col gap-1 mx-2">
                            {molecule.category === 'alkyne' && cIdx === 0 ? (
                              /* Triple Bond representation for Alkyne */
                              <div className="flex flex-col gap-1 py-1">
                                <div className="w-10 h-1.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                                <div className="w-10 h-1.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                                <div className="w-10 h-1.5 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                              </div>
                            ) : molecule.category === 'alkene' && cIdx === 0 ? (
                              /* Double Bond representation for Alkene */
                              <div className="flex flex-col gap-1.5 py-1">
                                <div className="w-9 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                                <div className="w-9 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                              </div>
                            ) : (
                              /* Single Bond for Alkane */
                              <div className="w-8 h-2 bg-slate-400 rounded-full" />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : viewMode === 'structural' ? (
                  /* Structural Formula View */
                  <div className="font-mono text-center space-y-3 bg-[#05070E] p-6 rounded-xl border border-white/10 shadow-inner w-full max-w-md">
                    <div className="text-xs text-slate-400 mb-1 font-sans font-semibold">සම්මත ව්‍යුහ සූත්‍රය:</div>
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-300 tracking-wider">
                      {molecule.condensedFormula}
                    </div>
                    <div className="text-xs text-slate-300 pt-3 border-t border-white/[0.08] flex items-center justify-around">
                      <span>කාබන් (C): <strong>{molecule.carbonCount}</strong></span>
                      <span>|</span>
                      <span>හයිඩ්‍රජන් (H): <strong>{molecule.hydrogenCount}</strong></span>
                      <span>|</span>
                      <span>
                        බන්ධන: <strong>{molecule.category === 'alkyne' ? 'C≡C ත්‍රිත්ව' : molecule.category === 'alkene' ? 'C=C ද්විත්ව' : 'C-C තනි'}</strong>
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Isomers View */
                  <div className="w-full space-y-4">
                    <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{molecule.nameSinhala} සතු ව්‍යුහ සමාවයවික:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {molecule.isomers?.map((iso, iIdx) => (
                        <div
                          key={iIdx}
                          onClick={() => setSelectedIsomerIdx(iIdx)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                            selectedIsomerIdx === iIdx
                              ? 'bg-amber-950/40 border-amber-400 text-white shadow-lg'
                              : 'bg-[#05070E] border-white/10 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-bold text-amber-300 block">{iso.name}</span>
                          <span className="text-[10px] text-slate-400 block font-mono mt-0.5">({iso.type})</span>
                          <p className="text-xs text-slate-300 mt-2 leading-relaxed">{iso.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Color Key Legend */}
              <div className="w-full flex items-center justify-around pt-3 border-t border-white/[0.08] text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-900 border border-slate-500" />
                  <span className="text-slate-300">කාබන් (C)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-white border border-slate-300" />
                  <span className="text-slate-300">හයිඩ්‍රජන් (H)</span>
                </div>
                {molecule.category === 'alkyne' ? (
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-2 rounded bg-amber-400 shadow-sm" />
                    <span className="text-amber-300 font-bold">ත්‍රිත්ව බන්ධනය (≡)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-1.5 rounded-full bg-cyan-400 shadow-sm" />
                    <span className="text-cyan-300 font-bold">ද්විත්ව බන්ධනය (=)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Chemical Properties & Textbook Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#111827] border border-white/10 rounded-xl p-5 space-y-3">
                <h4 className="text-base font-bold text-white font-['Yaldevi'] flex items-center justify-between">
                  <span>{molecule.nameSinhala} ({molecule.nameEnglish})</span>
                  <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                    {molecule.molecularFormula}
                  </span>
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06]">
                    <span className="text-slate-400">කාබනික කාණ්ඩය:</span>
                    <span className="text-white font-semibold">
                      {molecule.category === 'alkane'
                        ? 'ඇල්කේන (Alkanes - C-C)'
                        : molecule.category === 'alkene'
                        ? 'ඇල්කීන (Alkenes - C=C)'
                        : molecule.category === 'alkyne'
                        ? 'ඇල්කයින (Alkynes - C≡C)'
                        : 'ව්‍යුත්පන්න (Derivative)'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06]">
                    <span className="text-slate-400">තාපාංකය (Boiling Point):</span>
                    <span className="text-amber-300 font-mono font-bold">{molecule.boilingPoint}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#0A0F1D] rounded-lg border border-white/[0.06]">
                    <span className="text-slate-400">කාමර උෂ්ණත්වයේදී තත්ත්වය:</span>
                    <span className="text-cyan-300 font-semibold">{molecule.physicalState}</span>
                  </div>
                </div>

                <div className="p-3 bg-cyan-950/30 border border-cyan-900/40 rounded-lg text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cyan-300 block mb-1">ප්‍රධාන කාර්මික හා දෛනික භාවිත:</strong>
                  {molecule.commonUses}
                </div>
              </div>

              {/* Formula Derivation Card */}
              <div className="bg-[#111827] border border-white/10 rounded-xl p-4 space-y-2 text-xs">
                <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                  පොදු සූත්‍රයෙන් ව්‍යුත්පන්නය (Formula Derivation)
                </span>
                {molecule.category === 'alkane' ? (
                  <div className="p-2.5 bg-[#0A0F1D] rounded-lg font-mono text-cyan-200">
                    CₙH₂ₙ₊₂ (n = {molecule.carbonCount}) <br />
                    ➔ C{molecule.carbonCount}H{`(${molecule.carbonCount * 2} + 2)`} = <strong className="text-white">{molecule.molecularFormula}</strong>
                  </div>
                ) : molecule.category === 'alkene' ? (
                  <div className="p-2.5 bg-[#0A0F1D] rounded-lg font-mono text-sky-200">
                    CₙH₂ₙ (n = {molecule.carbonCount}) <br />
                    ➔ C{molecule.carbonCount}H{molecule.carbonCount * 2} = <strong className="text-white">{molecule.molecularFormula}</strong>
                  </div>
                ) : molecule.category === 'alkyne' ? (
                  <div className="p-2.5 bg-[#0A0F1D] rounded-lg font-mono text-amber-200">
                    CₙH₂ₙ₋₂ (n = {molecule.carbonCount}) <br />
                    ➔ C{molecule.carbonCount}H{`(${molecule.carbonCount * 2} - 2)`} = <strong className="text-white">{molecule.molecularFormula}</strong>
                  </div>
                ) : (
                  <div className="p-2.5 bg-[#0A0F1D] rounded-lg font-mono text-purple-200">
                    එතීන ව්‍යුත්පන්නය: H පරමාණු වෙනුවට Cl හෝ F ආදේශ වීම.
                  </div>
                )}
                <p className="text-[11px] text-slate-400 leading-snug">
                  කාබන් පරමාණු සංඛ්‍යාව වැඩි වන විට අණුක ස්කන්ධය වැඩි වන නිසා තාපාංකය අනුක්‍රමයෙන් ඉහළ යයි (වායුවේ සිට ද්‍රව තත්ත්වයට).
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* 3-Family Comparison Matrix View */
        <div className="mt-6 space-y-4 overflow-x-auto">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-4 sm:p-6 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-emerald-400" />
              <span>ඇල්කේන, ඇල්කීන සහ ඇල්කයින සම්පූර්ණ සංසන්දනය (Syllabus Matrix)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              ශ්‍රී ලංකා විද්‍යාව විෂය නිර්දේශයේ 14 වන ඒකකයේ සඳහන් හයිඩ්‍රොකාබන ප්‍රධාන කාණ්ඩ 3 හි ගුණ, බන්ධන, සූත්‍ර සහ රසායනික ප්‍රතික්‍රියා සැසඳීම:
            </p>

            <table className="w-full text-left border-collapse text-xs mt-3 min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="p-3">ලක්ෂණය</th>
                  <th className="p-3 text-cyan-300 font-bold bg-cyan-950/20">ඇල්කේන (Alkanes)</th>
                  <th className="p-3 text-sky-300 font-bold bg-sky-950/20">ඇල්කීන (Alkenes)</th>
                  <th className="p-3 text-amber-300 font-bold bg-amber-950/20">ඇල්කයින (Alkynes)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-300">
                <tr>
                  <td className="p-3 font-semibold text-white">පොදු අණුක සූත්‍රය</td>
                  <td className="p-3 font-mono font-bold text-cyan-300">CₙH₂ₙ₊₂ (n ≥ 1)</td>
                  <td className="p-3 font-mono font-bold text-sky-300">CₙH₂ₙ (n ≥ 2)</td>
                  <td className="p-3 font-mono font-bold text-amber-300">CₙH₂ₙ₋₂ (n ≥ 2)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">සහසංයුජ බන්ධන වර්ගය</td>
                  <td className="p-3">C-C තනි බන්ධන පමණි (තනි ඉලෙක්ට්‍රෝන යුගල)</td>
                  <td className="p-3 font-bold text-sky-300">C=C ද්විත්ව බන්ධනයක් (යුගල 2 ක්)</td>
                  <td className="p-3 font-bold text-amber-300">C≡C ත්‍රිත්ව බන්ධනයක් (යුගල 3 ක්)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">සංතෘප්තතාව</td>
                  <td className="p-3 text-cyan-300">සංතෘප්ත (Saturated)</td>
                  <td className="p-3 text-sky-300">අසංතෘප්ත (Unsaturated)</td>
                  <td className="p-3 text-amber-300">අතිශය අසංතෘප්ත (Highly Unsaturated)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">පළමු සාමාජිකයා</td>
                  <td className="p-3 font-mono">මීතේන් (CH₄)</td>
                  <td className="p-3 font-mono">එතීන් / එතිලීන් (C₂H₄)</td>
                  <td className="p-3 font-mono">එතයින් / ඇසිටලීන් (C₂H₂)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">බ්‍රෝමීන් ජලය (Br₂) සමඟ</td>
                  <td className="p-3">අඳුරේදී ප්‍රතික්‍රියා නැත (රතු-දුඹුරු පැහැය එලෙසම පවතී)</td>
                  <td className="p-3 font-semibold text-sky-300">බ්‍රෝමීන් අණු 1ක් ආකලනයෙන් ක්ෂණිකව අවපැහැ කරයි</td>
                  <td className="p-3 font-semibold text-amber-300">බ්‍රෝමීන් අණු 2ක් පියවරෙන් පියවර ආකලනය කර අවපැහැ කරයි</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">දහන දැල්ලේ ස්වභාවය</td>
                  <td className="p-3">පිරිසිදු නිල් දැල්ල (දැලි අවමයි, අඩු කාබන් %)</td>
                  <td className="p-3">දීප්තිමත් කහ දැල්ල, දැලි සහිත දුම</td>
                  <td className="p-3">වාතයේදී අධික දැලි සහිත කහ දැල්ල; O₂ සමඟ 3300°C නිල් දැල්ල</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">ප්‍රධාන භාවිත</td>
                  <td className="p-3">LPG, ස්වාභාවික වායු, පෙට්‍රල්, ඩීසල් ඉන්ධන</td>
                  <td className="p-3">පොලිතීන්, PVC, ටෙෆ්ලෝන්, පලතුරු ඉදවීම</td>
                  <td className="p-3">ඔක්සි-ඇසිටලීන් ලෝහ පෑස්සුම් දැල්ල (Welding)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
