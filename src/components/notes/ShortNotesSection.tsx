import React, { useState } from 'react';
import {
  FileText,
  Search,
  Sparkles,
  Check,
  Flame,
  Layers,
  ShieldCheck,
  AlertTriangle,
  Filter,
  Recycle,
  CheckCircle2,
  Atom
} from 'lucide-react';
import { HYDROCARBON_FAMILY_COMPARISON } from '../../data/hydrocarbonData';

export const ShortNotesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'alkanes' | 'alkenes' | 'alkynes' | 'distillation' | 'polymers'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-[#0A0F1D] border border-white/10 rounded-2xl">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            සියලුම සටහන් (All)
          </button>
          <button
            onClick={() => setActiveCategory('alkanes')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'alkanes'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            1. ඇල්කේන (Alkanes)
          </button>
          <button
            onClick={() => setActiveCategory('alkenes')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'alkenes'
                ? 'bg-sky-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            2. ඇල්කීන (Alkenes)
          </button>
          <button
            onClick={() => setActiveCategory('alkynes')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'alkynes'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            3. ඇල්කයින (Alkynes)
          </button>
          <button
            onClick={() => setActiveCategory('distillation')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'distillation'
                ? 'bg-teal-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            4. භාගික ආසවනය
          </button>
          <button
            onClick={() => setActiveCategory('polymers')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'polymers'
                ? 'bg-purple-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white bg-white/[0.04]'
            }`}
          >
            5. බහුඅවයවික & රෙසින් 1-7
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="සංකල්පයක් සොයන්න..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#030712] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* 3-Family Comparison Matrix: Alkanes vs Alkenes vs Alkynes */}
      {(activeCategory === 'all' || activeCategory === 'alkanes' || activeCategory === 'alkenes' || activeCategory === 'alkynes') && (
        <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 space-y-4 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider font-['Space_Grotesk']">
            <Sparkles className="w-4 h-4" />
            <span>විභාග විශේෂ සංසන්දනාත්මක සාරාංශය (O/L Golden Matrix)</span>
          </div>
          <h3 className="text-xl font-bold text-white font-['Yaldevi']">
            ඇල්කේන (Alkanes) vs ඇල්කීන (Alkenes) vs ඇල්කයින (Alkynes)
          </h3>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full text-left text-xs text-slate-300 min-w-[720px]">
              <thead className="bg-[#030712] text-slate-200 border-b border-white/[0.08] font-bold uppercase text-[11px] font-['Space_Grotesk']">
                <tr>
                  <th className="p-3.5">ලක්ෂණය</th>
                  <th className="p-3.5 text-cyan-300 bg-cyan-950/20">ඇල්කේන (Alkanes)</th>
                  <th className="p-3.5 text-sky-300 bg-sky-950/20">ඇල්කීන (Alkenes)</th>
                  <th className="p-3.5 text-amber-300 bg-amber-950/20">ඇල්කයින (Alkynes)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">පොදු අණුක සූත්‍රය</td>
                  <td className="p-3.5 font-mono text-cyan-300 font-bold">CₙH₂ₙ₊₂ (n ≥ 1)</td>
                  <td className="p-3.5 font-mono text-sky-300 font-bold">CₙH₂ₙ (n ≥ 2)</td>
                  <td className="p-3.5 font-mono text-amber-300 font-bold">CₙH₂ₙ₋₂ (n ≥ 2)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">සහසංයුජ බන්ධන ස්වභාවය</td>
                  <td className="p-3.5">C-C තනි බන්ධන පමණි (තනි ඉලෙක්ට්‍රෝන යුගල)</td>
                  <td className="p-3.5 text-sky-300">C=C ද්විත්ව බන්ධනයක් (යුගල 2ක්)</td>
                  <td className="p-3.5 text-amber-300">C≡C ත්‍රිත්ව බන්ධනයක් (යුගල 3ක්)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">සංතෘප්තතාව</td>
                  <td className="p-3.5 text-cyan-300">සංතෘප්ත (Saturated)</td>
                  <td className="p-3.5 text-sky-300">අසංතෘප්ත (Unsaturated)</td>
                  <td className="p-3.5 text-amber-300">අතිශය අසංතෘප්ත (Highly Unsaturated)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">පළමු සාමාජිකයා</td>
                  <td className="p-3.5 font-mono">මීතේන් (CH₄)</td>
                  <td className="p-3.5 font-mono">එතීන් / එතිලීන් (C₂H₄)</td>
                  <td className="p-3.5 font-mono">එතයින් / ඇසිටලීන් (C₂H₂)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">බ්‍රෝමීන් ජල පරීක්ෂාව</td>
                  <td className="p-3.5">අඳුරේදී ප්‍රතික්‍රියා නැත (රතු-දුඹුරු පැහැය පවතී)</td>
                  <td className="p-3.5 text-sky-300">බ්‍රෝමීන් අණු 1ක් ආකලනයෙන් ක්ෂණිකව අවපැහැ වේ</td>
                  <td className="p-3.5 text-amber-300">බ්‍රෝමීන් අණු 2ක් පියවරෙන් පියවර ආකලනයෙන් අවපැහැ වේ</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">දහන දැල්ලේ ස්වභාවය</td>
                  <td className="p-3.5">පිරිසිදු නිල් දැල්ල (දැලි අවමයි, C % අඩුයි)</td>
                  <td className="p-3.5">දීප්තිමත් කහ දැල්ල, දැලි සහිත දුම</td>
                  <td className="p-3.5">වාතයේදී අධික දැලි සහිත දැඩි කහ දැල්ල; O₂ සමඟ 3300°C නිල් දැල්ල</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3.5 font-semibold text-white">ප්‍රධාන කාර්මික භාවිත</td>
                  <td className="p-3.5">LPG (ප්‍රොපේන්+බියුටේන්), පෙට්‍රල්, ඩීසල්</td>
                  <td className="p-3.5">පොලිතීන්, PVC, ටෙෆ්ලෝන්, පලතුරු ඉදවීම</td>
                  <td className="p-3.5">ඔක්සි-ඇසිටලීන් ලෝහ පෑස්සුම් දැල්ල (3300°C)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detailed Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Alkanes */}
        {(activeCategory === 'all' || activeCategory === 'alkanes') && (
          <div className="bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl p-6 space-y-4 shadow-md border-t-4 border-t-cyan-400">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">14.1 ඇල්කේන (Alkanes)</span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                CₙH₂ₙ₊₂
              </span>
            </div>
            <h4 className="text-lg font-bold text-white font-['Yaldevi']">
              සංතෘප්ත හයිඩ්‍රොකාබන සහ සමාවයවිකතාව
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>කාබන් පරමාණු අතර තනි සහසංයුජ බන්ධන (C-C) පමණක් ඇති හයිඩ්‍රොකාබන ඇල්කේන වේ.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>මීතේන් (CH₄) සරලම සාමාජිකයා වන අතර එය ජෛව වායුවේ (Biogas) ප්‍රධාන සංඝටකයයි.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>එල්.පී. ගෑස් (LPG) යනු ප්‍රොපේන් (C₃H₈) සහ බියුටේන් (C₄H₁₀) වල ද්‍රවීකෘත මිශ්‍රණයකි.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>සමාවයවිකතාව (Isomerism):</strong> එකම අණුක සූත්‍රය තිබුණද ව්‍යුහය වෙනස් සංයෝග. බියුටේන් (C₄H₁₀) සඳහා සමාවයවික 2 ක් ඇත (n-බියුටේන් සහ 2-මෙතිල්ප්‍රොපේන්).</span>
              </li>
            </ul>
          </div>
        )}

        {/* Card 2: Alkenes & Derivatives */}
        {(activeCategory === 'all' || activeCategory === 'alkenes') && (
          <div className="bg-[#0A0F1D] border border-sky-500/30 rounded-2xl p-6 space-y-4 shadow-md border-t-4 border-t-sky-400">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase">14.2 ඇල්කීන & එතීන ව්‍යුත්පන්න</span>
              <span className="text-xs font-mono text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                CₙH₂ₙ
              </span>
            </div>
            <h4 className="text-lg font-bold text-white font-['Yaldevi']">
              ද්විත්ව බන්ධන සහ ආකලන ප්‍රතික්‍රියා
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>කාබන් පරමාණු අතර අවම එක් C=C ද්විත්ව බන්ධනයක් ඇති අසංතෘප්ත හයිඩ්‍රොකාබන වේ.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>ද්විත්ව බන්ධනය බිඳී වෙනත් පරමාණු එකතු වන බැවින් <strong>ආකලන ප්‍රතික්‍රියා (Addition reactions)</strong> දක්වයි.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>බ්‍රෝමීන් ජලයේ රතු-දුඹුරු පැහැය ක්ෂණිකව අවපැහැ කරයි (CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>එතීනවල H වෙනුවට Cl ආදේශ වීමෙන් ක්ලෝරෝඑතීන් (PVC ඒකඅවයවිකය) ද, F ආදේශ වීමෙන් ටෙට්‍රාෆ්ලෝරෝඑතීන් (ටෙෆ්ලෝන් ඒකඅවයවිකය) ද සෑදේ.</span>
              </li>
            </ul>
          </div>
        )}

        {/* Card 3: Alkynes */}
        {(activeCategory === 'all' || activeCategory === 'alkynes') && (
          <div className="bg-[#0A0F1D] border border-amber-500/30 rounded-2xl p-6 space-y-4 shadow-md border-t-4 border-t-amber-400">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">14.3 ඇල්කයින (Alkynes - C≡C)</span>
              <span className="text-xs font-mono text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                CₙH₂ₙ₋₂
              </span>
            </div>
            <h4 className="text-lg font-bold text-white font-['Yaldevi']">
              ත්‍රිත්ව බන්ධන, CaC₂ සහ ඔක්සි-ඇසිටලීන් දැල්ල
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>කාබන් පරමාණු අතර අවම එක් ත්‍රිත්ව සහසංයුජ බන්ධනයක් (C≡C) ඇති අතිශය අසංතෘප්ත හයිඩ්‍රොකාබන වේ.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>විද්‍යාගාර පිළියෙල කිරීම:</strong> කැල්සියම් කාබයිඩ් (CaC₂) මතට ජලය දැමීමෙනි: <br />
                <span className="font-mono text-amber-300">CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑</span></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>එතයින් ජලයේ නොදියෙන බැවින් <strong>ජලයේ පහළ විස්ථාපනයෙන්</strong> රැස් කරයි.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>ඔක්සි-ඇසිටලීන් දැල්ල (3300°C):</strong> පිරිසිදු O₂ සමඟ සම්පූර්ණ දහනයෙන් ලෝහ පෑස්සීමට හා වානේ කැපීමට යොදාගනී. වාතයේදී දැඩි කහ දුම් දැල්ලකින් දැවේ (92.3% C).</span>
              </li>
            </ul>
          </div>
        )}

        {/* Card 4: Distillation */}
        {(activeCategory === 'all' || activeCategory === 'distillation') && (
          <div className="bg-[#0A0F1D] border border-teal-500/30 rounded-2xl p-6 space-y-4 shadow-md border-t-4 border-t-teal-400">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase">14.4 ඛනිජ තෙල් භාගික ආසවනය</span>
              <span className="text-xs font-mono text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                20°C ➔ 400°C
              </span>
            </div>
            <h4 className="text-lg font-bold text-white font-['Yaldevi']">
              තාපාංක වෙනස පාදක කරගත් භාග වෙන් කිරීම
            </h4>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>ඛනිජ තෙල් (Crude oil) යනු විවිධ කාබන් දාම දිග සහිත හයිඩ්‍රොකාබන මිශ්‍රණයකි.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>ප්‍රධාන භාග:</strong> පෙට්‍රෝලියම් වායු (&lt;20°C), පෙට්‍රල් (40-150°C), නැප්තා, කෙරොසීන්/භූමිතෙල් (ජෙට් ඉන්ධන), ඩීසල්, ලිහිසි තෙල්/ඉටි, තාර/බිටුමන් (&gt;C₅₀).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>කාබන් දාමය දිගු වන විට තාපාංකය ↑, දුස්ස්‍රාවිතාව ↑, වාෂ්පශීලීතාව ↓, දැල්ලේ දැලි ප්‍රමාණය ↑ වේ.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>ශ්‍රී ලංකාවේ සපුගස්කන්ද පිරිපහදුවේදී බොරතෙල් භාගික ආසවනය කරනු ලැබේ.</span>
              </li>
            </ul>
          </div>
        )}

        {/* Card 5: Polymers & Plastics */}
        {(activeCategory === 'all' || activeCategory === 'polymers') && (
          <div className="bg-[#0A0F1D] border border-purple-500/30 rounded-2xl p-6 space-y-4 shadow-md border-t-4 border-t-purple-400 md:col-span-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase">14.5 බහුඅවයවික, රබර් වල්කනයිස් & ප්ලාස්ටික් 5R</span>
              <span className="text-xs font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                Monomer ➔ Polymer
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <strong className="text-purple-300 block">1. ආකලන බහුඅවයවික:</strong>
                <p>• පොලිතීන්: ඒකඅවයවිකය එතීන් (CH₂=CH₂)</p>
                <p>• PVC: ඒකඅවයවිකය ක්ලෝරෝඑතීන් (CH₂=CHCl)</p>
                <p>• ටෙෆ්ලෝන්: ඒකඅවයවිකය ටෙට්‍රාෆ්ලෝරෝඑතීන් (CF₂=CF₂)</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <strong className="text-amber-300 block">2. රබර් වල්කනයිස් කිරීම:</strong>
                <p>• ස්වාභාවික රබර්වල ඒකඅවයවිකය අයිසොප්‍රීන් වේ.</p>
                <p>• සල්ෆර් (ගෙන්දගම්) සමඟ රත් කළ විට රේඛීය දාම අතර සල්ෆර් හරස් බන්ධන සෑදී ශක්තිය හා ප්‍රත්‍යාස්ථතාව වැඩි වේ.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <strong className="text-emerald-300 block">3. තාප ප්‍රතිචාර & 5R:</strong>
                <p>• තාපස්ථාප්‍ය (Thermoplastic): රත් කළ විට දියවේ (පොලිතීන්, PVC).</p>
                <p>• තාපදෘඪ (Thermosetting): දිය නොවේ, අඟුරු වේ (බේකලයිට්).</p>
                <p>• 5R: Refuse, Reduce, Reuse, Repurpose, Recycle.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
