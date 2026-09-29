import React, { useState } from 'react';
import ethyneLabImage from '../../assets/images/ethyne_oxy_acetylene_lab_1790698226919.jpg';
import {
  Flame,
  Droplets,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Info,
  Layers,
  Zap,
  Thermometer
} from 'lucide-react';

export const EthyneAcetyleneLab: React.FC = () => {
  const [waterAdded, setWaterAdded] = useState<boolean>(false);
  const [gasCollected, setGasCollected] = useState<number>(0);
  const [flameMode, setFlameMode] = useState<'air' | 'oxygen'>('air');
  const [activeTab, setActiveTab] = useState<'prep' | 'welding' | 'bromine'>('prep');

  const handleAddWater = () => {
    setWaterAdded(true);
    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      setGasCollected(count);
      if (count >= 100) clearInterval(interval);
    }, 200);
  };

  const handleReset = () => {
    setWaterAdded(false);
    setGasCollected(0);
    setFlameMode('air');
  };

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>ඇල්කයින විශේෂිත විද්‍යාගාරය · Alkynes & Acetylene Lab</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            එතයින් (ඇසිටලීන් - C₂H₂) පිළියෙල කිරීම සහ ඔක්සි-ඇසිටලීන් දැල්ල
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            කැල්සියම් කාබයිඩ් (CaC₂) මඟින් එතයින් නිපදවීම, 3300°C ඔක්සි-ඇසිටලීන් ලෝහ පෑස්සුම් දැල්ල සහ ත්‍රිත්ව බන්ධන ප්‍රතික්‍රියා.
          </p>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
            <button
              onClick={() => setActiveTab('prep')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'prep'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              එතයින් පිළියෙල කිරීම
            </button>
            <button
              onClick={() => setActiveTab('welding')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'welding'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ඔක්සි-ඇසිටලීන් දැල්ල
            </button>
            <button
              onClick={() => setActiveTab('bromine')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'bromine'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              පියවර 2 ක ආකලනය
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-full transition-colors cursor-pointer"
            title="නැවත සකසන්න"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeTab === 'prep' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Reaction Simulator Canvas */}
          <div className="lg:col-span-7 bg-[#05070E] border border-white/10 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-amber-400 font-semibold">
                CaC₂(s) + 2H₂O(l) → Ca(OH)₂(aq) + C₂H₂(g)↑
              </span>

              <button
                onClick={handleAddWater}
                disabled={waterAdded}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  waterAdded
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:brightness-110 active:scale-95'
                }`}
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>{waterAdded ? 'ප්‍රතික්‍රියාව සිදුවෙමින් පවතී...' : 'ජලය බිංදු එක් කරන්න (Add Water)'}</span>
              </button>
            </div>

            {/* Visual Reaction Apparatus */}
            <div className="my-8 flex flex-col sm:flex-row items-center justify-around gap-6 px-4">
              {/* Conical Flask */}
              <div className="flex flex-col items-center space-y-2">
                <span className="text-xs font-bold text-white font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  කේතුක ප්ලාස්කුව
                </span>

                <div className="w-36 h-44 relative bg-white/[0.04] border-2 border-white/30 rounded-b-3xl flex flex-col justify-end p-2 overflow-hidden shadow-inner">
                  {/* Water dripping animation */}
                  {waterAdded && gasCollected < 100 && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-cyan-400 rounded-full animate-bounce" />
                  )}

                  {/* Bubbles */}
                  {waterAdded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-3 h-3 rounded-full bg-amber-400/60 animate-ping" />
                    </div>
                  )}

                  {/* Calcium Carbide Lumps */}
                  <div className="h-16 w-full bg-slate-800/80 rounded-b-2xl border-t border-slate-600 flex items-center justify-center relative overflow-hidden">
                    <div className="flex gap-1.5">
                      <div className="w-6 h-5 rounded-md bg-stone-600 border border-stone-500" />
                      <div className="w-8 h-6 rounded-md bg-stone-700 border border-stone-500" />
                      <div className="w-7 h-5 rounded-md bg-stone-600 border border-stone-500" />
                    </div>
                    {waterAdded && (
                      <span className="absolute text-[10px] text-amber-300 font-mono font-bold animate-pulse">
                        C₂H₂ වායුව පිටවේ!
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-[11px] text-slate-400">කැල්සියම් කාබයිඩ් (CaC₂) කැට</span>
              </div>

              {/* Gas Jar over Water */}
              <div className="flex flex-col items-center space-y-2">
                <span className="text-xs font-bold text-cyan-300 font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800">
                  වායු ජාරාව (ජලයේ පහළ විස්ථාපනය)
                </span>

                <div className="w-28 h-44 relative bg-cyan-950/20 border-2 border-cyan-400/40 rounded-t-2xl flex flex-col justify-end p-1.5 overflow-hidden">
                  {/* Gas space */}
                  <div
                    className="w-full bg-gradient-to-b from-amber-500/30 to-amber-500/10 rounded-t-xl transition-all duration-300 flex items-center justify-center"
                    style={{ height: `${gasCollected}%` }}
                  >
                    {gasCollected > 20 && (
                      <span className="text-[10px] text-amber-300 font-mono font-bold">
                        C₂H₂: {gasCollected}%
                      </span>
                    )}
                  </div>

                  {/* Water below */}
                  <div
                    className="w-full bg-cyan-400/30 border-t border-cyan-400/50 transition-all duration-300"
                    style={{ height: `${100 - gasCollected}%` }}
                  />
                </div>

                <span className="text-[11px] text-slate-400">ජලයේ අද්‍රාව්‍ය බැවින් ජලය මත එකතු වේ</span>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs flex items-center justify-between text-slate-300">
              <span>එතයින් ජලයේ නොදියෙන බැවින් <strong>ජලයේ පහළ විස්ථාපනයෙන්</strong> රැස් කරගනු ලැබේ.</span>
              <span className="text-amber-400 font-mono font-semibold">Ca(OH)₂ කිරි පැහැ දියරය</span>
            </div>
          </div>

          {/* Theory Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#05070E] border border-amber-500/30 rounded-xl p-5 shadow-lg space-y-3">
              <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider block">
                පෙළපොතේ ප්‍රධාන විභාග කරුණු
              </span>
              <h4 className="text-lg font-bold text-white font-['Yaldevi']">
                කැල්සියම් කාබයිඩ්වලින් එතයින් සෑදීම
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                කැල්සියම් කාබයිඩ් (CaC₂) අළු-දුඹුරු පැහැති ඝන ද්‍රව්‍යයකි. එය මතට ජලය වැටුණු වහාම අධික තාපදායක ප්‍රතික්‍රියාවක් සිදුවෙමින් <strong>එතයින් හෙවත් ඇසිටලීන් (C₂H₂)</strong> වායුව සහ කැල්සියම් හයිඩ්‍රොක්සයිඩ් (Ca(OH)₂) හුණු දියරය නිපදවේ.
              </p>

              <div className="p-3 rounded-lg bg-amber-950/40 border-l-4 border-amber-400 space-y-1 text-xs">
                <strong className="text-amber-200 block">පලතුරු කෘත්‍රිමව ඉදවීම (Fruit Ripening):</strong>
                <p className="text-slate-300">
                  අතීතයේදී කෙසෙල් සහ අඹ ඉදවීම සඳහා CaC₂ යොදාගනු ලැබුවේ එයින් පිටවන එතයින් වායුව මඟිනි. එහෙත් කාබයිඩ්වල ආසනික් හා පොස්පරස් විෂ අපද්‍රව්‍ය ඇති බැවින් ආහාර සඳහා භාවිතය නීතියෙන් තහනම් කර ඇත.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="bg-[#05070E] border border-white/10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={ethyneLabImage}
                alt="Ethyne and Oxy-Acetylene Lab"
                className="w-full h-36 object-cover object-center brightness-95"
              />
              <div className="p-3 bg-[#0A0F1D] text-[11px] text-slate-400 flex items-center justify-between">
                <span>එතයින් පිළියෙල කිරීම & ඔක්සි-ඇසිටලීන් දැල්ල</span>
                <span className="text-amber-400 font-mono">FyZie Alkynes Studio</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'welding' && (
        <div className="mt-6 space-y-6">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <span>ඔක්සි-ඇසිටලීන් ලෝහ පෑස්සුම් දැල්ල (Oxy-Acetylene Welding Torch)</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  වාතයේ දහනය vs පිරිසිදු ඔක්සිජන් සමඟ දහනය සැසඳීම.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFlameMode('air')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    flameMode === 'air'
                      ? 'bg-amber-400 text-slate-950 font-bold shadow'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  වාතයේ දහනය (කහ දුම් දැල්ල)
                </button>
                <button
                  onClick={() => setFlameMode('oxygen')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    flameMode === 'oxygen'
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  O₂ මිශ්‍ර දැල්ල (3300°C නිල් දැල්ල)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Flame Display Canvas */}
              <div className="p-5 rounded-xl bg-slate-950 border border-white/10 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
                {flameMode === 'air' ? (
                  <div className="text-center space-y-3">
                    <div className="w-12 h-24 bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-200 rounded-full blur-[2px] mx-auto animate-pulse" />
                    <div className="text-xs font-mono font-bold text-amber-300">
                      උෂ්ණත්වය: ~1200 °C (අසම්පූර්ණ දහනය)
                    </div>
                    <span className="text-[11px] text-slate-400 block max-w-xs">
                      කාබන් ප්‍රතිශතය ඉතා ඉහළ (92.3%) බැවින් වාතයේ ඔක්සිජන් ප්‍රමාණවත් නොවීම නිසා දැඩි කලු දුම (දැලි) පිටවේ.
                    </span>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <div className="relative mx-auto flex items-center justify-center">
                      <div className="w-14 h-28 bg-gradient-to-t from-cyan-600 via-sky-400 to-transparent rounded-full blur-[3px]" />
                      <div className="absolute bottom-2 w-6 h-12 bg-white rounded-full blur-[1px] shadow-[0_0_20px_white]" />
                    </div>
                    <div className="text-xs font-mono font-bold text-cyan-300">
                      උෂ්ණත්වය: 3000 °C - 3300 °C (ඔක්සි-ඇසිටලීන් දැල්ල)
                    </div>
                    <span className="text-[11px] text-cyan-200 block max-w-xs">
                      පිරිසිදු ඔක්සිජන් හමුවේ සම්පූර්ණ දහනය වී අතිශය අධික තාපයක් නිපදවයි. වානේ තහඩු ක්ෂණිකව උණු කර පෑස්සීමට හෝ කැපීමට යොදාගනී.
                    </span>
                  </div>
                )}
              </div>

              {/* Chemical Equation & Details */}
              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  සම්පූර්ණ දහන තුලිත සමීකරණය
                </span>
                <div className="p-3 bg-[#05070E] rounded-lg font-mono text-xs text-cyan-200 border border-white/10">
                  2C₂H₂(g) + 5O₂(g) → 4CO₂(g) + 2H₂O(l) + අධික තාපය
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>එතයින් (ඇසිටලීන්) අණුවේ කාබන් ප්‍රතිශතය = (24 / 26) × 100% = <strong>92.3%</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>එතේන්හි 80% ක් සහ එතීන්හි 85.7% ක් කාබන් අඩංගු වන අතර, එතයින් සතුව උපරිම කාබන් ප්‍රතිශතයක් පවතී.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>ඔක්සිජන් සිලින්ඩරයක් සහ ඇසිටලීන් සිලින්ඩරයක් බට මඟින් පෑස්සුම් පන්දම වෙත සවි කර නියාමනය කරනු ලැබේ.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bromine' && (
        <div className="mt-6 space-y-4">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>එතයින්වල ත්‍රිත්ව බන්ධනය (C≡C) බ්‍රෝමීන් සමඟ පියවර 2 කින් ආකලනය වීම</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ඇල්කීන (Alkenes) මෙන් නොව, ඇල්කයින (Alkynes) සතුව ත්‍රිත්ව සහසංයුජ බන්ධනයක් ඇති බැවින් එය සම්පූර්ණයෙන්ම සංතෘප්ත කිරීමට බ්‍රෝමීන් අණු 2 ක් (2 moles of Br₂) අවශ්‍ය වේ:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400">1 වන පියවර: ත්‍රිත්ව බන්ධනය ද්විත්ව බන්ධනයක් වීම</span>
                <div className="p-2.5 bg-[#0A0F1D] rounded font-mono text-xs text-amber-200">
                  CH≡CH + Br₂ → CHBr=CHBr
                </div>
                <p className="text-xs text-slate-400">
                  1 වන බ්‍රෝමීන් අණුව ආකලනය වී 1,2-ඩයිබ්‍රෝමෝඑතීන් සාදයි.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400">2 වන පියවර: ද්විත්ව බන්ධනය තනි බන්ධනයක් වීම</span>
                <div className="p-2.5 bg-[#0A0F1D] rounded font-mono text-xs text-cyan-200">
                  CHBr=CHBr + Br₂ → CHBr₂-CHBr₂
                </div>
                <p className="text-xs text-slate-400">
                  2 වන බ්‍රෝමීන් අණුවද ආකලනය වී 1,1,2,2-ටෙට්‍රාබ්‍රෝමෝඑතේන් සාදමින් සම්පූර්ණයෙන් සංතෘප්ත වේ.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
