import React, { useState } from 'react';
import { PLASTIC_RECYCLING_CODES, PlasticCodeData } from '../../data/hydrocarbonData';
import {
  Flame,
  ShieldCheck,
  Recycle,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Info,
  Layers,
  Thermometer
} from 'lucide-react';

export const PlasticsRecyclingLab: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<number>(1);
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [plasticTab, setPlasticTab] = useState<'resin_codes' | 'thermal_response' | '5r_concept'>('resin_codes');

  const currentPlastic: PlasticCodeData =
    PLASTIC_RECYCLING_CODES.find((p) => p.code === selectedCode) || PLASTIC_RECYCLING_CODES[0];

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>පරිසර හිතකාමී භාවිත · ප්ලාස්ටික් කේත සහ තාප ප්‍රතිචාර</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            ප්ලාස්ටික් තාප ප්‍රතිචාර සහ 1-7 ප්‍රතිචක්‍රීකරණ සංකේත
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            තාපස්ථාප්‍ය vs තාපදෘඪ ප්ලාස්ටික්වල වෙනස, ජාත්‍යන්තර ත්‍රිකෝණාකාර රෙසින් කේත 1-7 සහ 5R සංකල්පය අන්තර්ක්‍රියාකාරීව ඉගෙන ගන්න.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
          <button
            onClick={() => setPlasticTab('resin_codes')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              plasticTab === 'resin_codes'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            රෙසින් කේත (1 - 7)
          </button>
          <button
            onClick={() => setPlasticTab('thermal_response')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              plasticTab === 'thermal_response'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            තාප ප්‍රතිචාර සිමියුලේටරය
          </button>
          <button
            onClick={() => setPlasticTab('5r_concept')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              plasticTab === '5r_concept'
                ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            5R කළමනාකරණය
          </button>
        </div>
      </div>

      {plasticTab === 'resin_codes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Numbers 1-7 Grid */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono font-semibold text-slate-400 block mb-2">
              ප්ලාස්ටික් නිෂ්පාදනවල සඳහන් ත්‍රිකෝණාකාර අංකය තෝරන්න:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PLASTIC_RECYCLING_CODES.map((item) => {
                const isSelected = selectedCode === item.code;
                return (
                  <div
                    key={item.code}
                    onClick={() => setSelectedCode(item.code)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-500/15 ring-2 ring-cyan-400/40 shadow-lg'
                        : 'border-white/10 bg-[#05070E] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Recycling triangle symbol badge */}
                    <div className="w-9 h-9 rounded-lg bg-black/40 border border-cyan-400/30 flex items-center justify-center relative shrink-0">
                      <Recycle className="w-5 h-5 text-cyan-400" />
                      <span className="absolute inset-0 flex items-center justify-center font-mono font-black text-[11px] text-white">
                        {item.code}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{item.acronym}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[170px]">
                        {item.nameSinhala}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Info Card */}
          <div className="lg:col-span-6 bg-[#05070E] border border-cyan-500/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-mono font-bold text-sm">
                    {currentPlastic.code}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-mono">
                      {currentPlastic.acronym}
                    </h4>
                    <span className="text-[11px] text-slate-400">{currentPlastic.nameEnglish}</span>
                  </div>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono">
                  ඝනත්වය: {currentPlastic.density}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <span className="text-xs text-slate-400 block">සිංහල නම:</span>
                  <span className="text-sm font-semibold text-white font-['Yaldevi']">
                    {currentPlastic.nameSinhala}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <span className="text-xs font-semibold text-cyan-300 block">ප්‍රතිචක්‍රීකරණය කළ හැකි බව:</span>
                  <p className="text-xs text-slate-300">{currentPlastic.recyclability}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-white block mb-1.5">ශ්‍රී ලංකාවේ බහුලව භාවිත වන ද්‍රව්‍ය:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPlastic.examples.map((ex, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs space-y-1">
                  <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>සෞඛ්‍ය හා ආරක්ෂණ උපදෙස්:</span>
                  </span>
                  <p className="text-slate-300">{currentPlastic.healthImpact}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-500">
              <span>ජාත්‍යන්තර රෙසින් කේතීකරණ පද්ධතිය (SPI Resin Codes)</span>
              <span className="text-cyan-400 font-mono">Grade 11 Science Unit 14</span>
            </div>
          </div>
        </div>
      )}

      {plasticTab === 'thermal_response' && (
        <div className="mt-6 space-y-6">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-cyan-400" />
                  <span>තාපස්ථාප්‍ය ප්ලාස්ටික් vs තාපදෘඪ ප්ලාස්ටික් (Thermoplastics vs Thermosetting)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  තාපයට ලක් කළ විට අණුක දාම හැසිරෙන ආකාරය අත්හදා බලන්න.
                </p>
              </div>

              <button
                onClick={() => setIsHeating(!isHeating)}
                className={`px-4 py-2 text-xs font-bold rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                  isHeating
                    ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow hover:brightness-110 active:scale-95'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>{isHeating ? 'තාපනය නවත්වන්න (Stop Heat)' : 'තාපය යොදන්න (Apply 200°C Heat)'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Thermoplastic */}
              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    1. තාපස්ථාප්‍ය ප්ලාස්ටික් (Thermoplastics)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    නැවත උණු කළ හැක
                  </span>
                </div>

                <div className="h-32 rounded-lg bg-slate-950 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden p-3">
                  {isHeating ? (
                    <div className="text-center space-y-1.5 animate-pulse">
                      <div className="w-32 h-6 bg-cyan-400/40 rounded-full blur-[1px] mx-auto" />
                      <span className="text-xs font-bold text-cyan-300 font-mono">
                        ද්‍රවාංකයේදී මෘදු වී දිය වේ (Melting & Flowing)
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        දුර්වල අන්තර් අණුක බල බිඳී දාම එකිනෙක ලිස්සා යයි.
                      </span>
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-2 bg-cyan-400 rounded-full" />
                        <div className="w-8 h-2 bg-cyan-400 rounded-full" />
                        <div className="w-8 h-2 bg-cyan-400 rounded-full" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 block mt-2">
                        රේඛීය හෝ අතු බෙදුණු දාම (Linear / Branched Chains)
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        සාමාන්‍ය උෂ්ණත්වයේදී ඝන තත්වය
                      </span>
                    </div>
                  )}
                </div>

                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• රත් කළ විට මෘදු වී විලයනය වේ; සිසිල් කළ විට නැවත දැඩි වේ.</li>
                  <li>• නැවත නැවත උණු කර විවිධ හැඩවලට සකස් කළ හැක (ප්‍රතිචක්‍රීකරණය කළ හැක).</li>
                  <li>• උදාහරණ: පොලිතීන් (Polythene), PVC, පොලිස්ටයිරීන්.</li>
                </ul>
              </div>

              {/* Thermosetting */}
              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    2. තාපදෘඪ ප්ලාස්ටික් (Thermosetting Plastics)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                    නැවත උණු කළ නොහැක
                  </span>
                </div>

                <div className="h-32 rounded-lg bg-slate-950 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden p-3">
                  {isHeating ? (
                    <div className="text-center space-y-1.5">
                      <div className="w-32 h-6 bg-rose-500/30 border border-rose-500/50 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-[10px] text-rose-300 font-mono">හැඩය වෙනස් නොවේ</span>
                      </div>
                      <span className="text-xs font-bold text-amber-300 font-mono">
                        දිරාපත් වේ / දැවේ (Chars / Decomposes)
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        ශක්තිමත් සහසංයුජ හරස් බන්ධන නිසා දිය නොවේ.
                      </span>
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <div className="grid grid-cols-3 gap-1 w-24 mx-auto">
                        <div className="h-2 bg-amber-400 rounded" />
                        <div className="h-2 bg-amber-400 rounded" />
                        <div className="h-2 bg-amber-400 rounded" />
                        <div className="h-2 bg-amber-400 rounded" />
                        <div className="h-2 bg-amber-400 rounded" />
                        <div className="h-2 bg-amber-400 rounded" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 block mt-2">
                        ත්‍රිමාණ දැලිස් හරස් බන්ධන (3D Cross-linked Network)
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        ස්ථීරවම තනි දැවැන්ත අණුවක් ලෙස ක්‍රියා කරයි.
                      </span>
                    </div>
                  )}
                </div>

                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• රත් කළ විට මෘදු වීමක් හෝ විලයනය වීමක් සිදු නොවේ.</li>
                  <li>• අධික තාපයේදී දිරාපත් වී අඟුරු බවට පත් වේ; නැවත හැඩගැස්විය නොහැක.</li>
                  <li>• උදාහරණ: බේකලයිට් (Bakelite - විදුලි ස්විච් හා ප්ලග්), මෙලමයින් (Melamine).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {plasticTab === '5r_concept' && (
        <div className="mt-6 space-y-4">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Recycle className="w-5 h-5 text-emerald-400" />
              <span>ප්ලාස්ටික් අපද්‍රව්‍ය කළමනාකරණය සඳහා 5R සංකල්පය</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ප්ලාස්ටික් දිරාපත් වීමට වසර සිය ගණනක් ගත වන බැවින් සහ දහනයේදී ඩයොක්සින් වැනි විෂ වායු පිටවන බැවින් පරිසරය රැකගැනීමට 5R පිළිවෙත ක්‍රියාවට නංවමු:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400">1. Refuse (ප්‍රතික්ෂේපය)</span>
                <p className="text-xs text-slate-300">
                  අත්‍යවශ්‍ය නොවන එක් වරක් පමණක් භාවිත කරන (Single-use) ලන්ච් ෂීට්, ස්ට්‍රෝ සහ ෂොපින් බෑග් භාවිතය ප්‍රතික්ෂේප කිරීම.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono font-bold text-sky-400">2. Reduce (අවම කිරීම)</span>
                <p className="text-xs text-slate-300">
                  ප්ලාස්ටික් බඩු භාණ්ඩ මිලදී ගැනීම අවම කර රෙදි බෑග් හෝ ස්වාභාවික ඇසුරුම් භාවිතයට හුරුවීම.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono font-bold text-teal-400">3. Reuse (නැවත භාවිතය)</span>
                <p className="text-xs text-slate-300">
                  භාවිත කළ ප්ලාස්ටික් බඳුන් හා බෝතල් ඉවත නොදමා වෙනත් ගබඩා කටයුතු සඳහා නැවත නැවත ප්‍රයෝජනයට ගැනීම.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono font-bold text-amber-400">4. Repurpose (වෙනත් කාර්යය)</span>
                <p className="text-xs text-slate-300">
                  ඉවතලන ප්ලාස්ටික් බෝතල් මල් පෝච්චි, පෑන් රඳවන හෝ නිර්මාණාත්මක දෑ ලෙස වෙනස් කාර්යයක් සඳහා යොදාගැනීම.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400">5. Recycle (ප්‍රතිචක්‍රීකරණය)</span>
                <p className="text-xs text-slate-300">
                  ප්‍රතිචක්‍රීකරණය කළ හැකි ප්ලාස්ටික් වෙනම එකතු කර නැවත නව නිෂ්පාදන සඳහා අමුද්‍රව්‍ය ලෙස යොමු කිරීම.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
