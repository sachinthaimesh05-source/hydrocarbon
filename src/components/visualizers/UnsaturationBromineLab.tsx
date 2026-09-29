import React, { useState } from 'react';
import bromineTestImage from '../../assets/images/bromine_unsaturation_test_1790697678903.jpg';
import {
  FlaskConical,
  Droplets,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Flame,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

export const UnsaturationBromineLab: React.FC = () => {
  const [bromineAdded, setBromineAdded] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [activeTest, setActiveTest] = useState<'bromine' | 'flame'>('bromine');

  const handleAddBromine = () => {
    setIsShaking(true);
    setTimeout(() => {
      setBromineAdded(true);
      setIsShaking(false);
    }, 800);
  };

  const handleReset = () => {
    setBromineAdded(false);
    setIsShaking(false);
  };

  return (
    <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.1)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] mb-1">
            <span>ප්‍රායෝගික පරීක්ෂණාගාරය · අසංතෘප්තතා පරීක්ෂාව</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Yaldevi']">
            සංතෘප්ත හා අසංතෘප්ත හයිඩ්‍රොකාබන වෙන්කර හඳුනාගැනීම
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            බ්‍රෝමීන් ජලය (Bromine Water Test) සහ දැල්ලේ ස්වභාවය පරීක්ෂා කිරීමෙන් ඇල්කේන (Alkanes) සහ ඇල්කීන (Alkenes) නිශ්චිතව හඳුනාගනිමු.
          </p>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-[#05070E] border border-white/10 rounded-full">
            <button
              onClick={() => setActiveTest('bromine')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTest === 'bromine'
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              බ්‍රෝමීන් ජල පරීක්ෂාව
            </button>
            <button
              onClick={() => setActiveTest('flame')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTest === 'flame'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              දැල්ලේ ස්වභාවය (Soot Test)
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

      {activeTest === 'bromine' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Simulated Lab Stand */}
          <div className="lg:col-span-7 bg-[#05070E] border border-white/10 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                පරීක්ෂණ නළ 2 ක සැසඳීම (Comparative Test Tubes)
              </span>
              <button
                onClick={handleAddBromine}
                disabled={bromineAdded || isShaking}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  bromineAdded
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md hover:brightness-110 active:scale-95'
                }`}
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>{bromineAdded ? 'බ්‍රෝමීන් ජලය එක් කර ඇත' : 'බ්‍රෝමීන් ජලය බිංදු 3 ක් එක් කරන්න'}</span>
              </button>
            </div>

            {/* Test Tubes Visual Rack */}
            <div className="grid grid-cols-2 gap-6 my-8 px-4 sm:px-12">
              {/* Tube 1: Alkane (Hexane / Methane) */}
              <div
                className={`flex flex-col items-center space-y-3 transition-transform duration-300 ${
                  isShaking ? 'translate-y-1' : ''
                }`}
              >
                <span className="text-xs font-bold text-white font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                  පරීක්ෂණ නළය A
                </span>
                <span className="text-[11px] text-cyan-300 font-medium">ඇල්කේනයක් (Hexane)</span>

                {/* SVG Tube */}
                <div className="w-20 h-52 relative rounded-b-3xl border-2 border-white/30 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-end p-1.5 overflow-hidden shadow-inner">
                  {/* Liquid inside */}
                  <div
                    className={`w-full rounded-b-2xl transition-colors duration-700 ${
                      !bromineAdded
                        ? 'h-24 bg-cyan-400/20'
                        : 'h-28 bg-gradient-to-t from-amber-600/80 to-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    }`}
                  >
                    {bromineAdded && (
                      <div className="text-[10px] text-amber-100 font-mono text-center pt-2 font-bold animate-pulse">
                        දුඹුරු පැහැය පවතී
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center space-y-1 mt-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    {bromineAdded ? 'ප්‍රතික්‍රියාවක් නැත (No Reaction)' : 'වර්ණ රහිත ද්‍රවය'}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {bromineAdded ? 'රතු-දුඹුරු පැහැය එලෙසම පවතී' : 'C-C තනි බන්ධන පමණි'}
                  </span>
                </div>
              </div>

              {/* Tube 2: Alkene (Ethene) */}
              <div
                className={`flex flex-col items-center space-y-3 transition-transform duration-300 ${
                  isShaking ? '-translate-y-1' : ''
                }`}
              >
                <span className="text-xs font-bold text-white font-mono px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  පරීක්ෂණ නළය B
                </span>
                <span className="text-[11px] text-cyan-300 font-medium">ඇල්කීනයක් (Ethene)</span>

                {/* SVG Tube */}
                <div className="w-20 h-52 relative rounded-b-3xl border-2 border-cyan-400/50 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-end p-1.5 overflow-hidden shadow-inner">
                  {/* Liquid inside */}
                  <div
                    className={`w-full rounded-b-2xl transition-all duration-700 ${
                      !bromineAdded
                        ? 'h-24 bg-cyan-400/20'
                        : 'h-28 bg-cyan-200/20 border-t border-cyan-300/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                    }`}
                  >
                    {bromineAdded && (
                      <div className="text-[10px] text-cyan-300 font-mono text-center pt-2 font-bold animate-pulse">
                        ක්ෂණිකව අවපැහැ විය!
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center space-y-1 mt-2">
                  <span className="text-xs font-semibold text-cyan-300 block">
                    {bromineAdded ? 'ආකලන ප්‍රතික්‍රියාව සිදුවිය' : 'වර්ණ රහිත ද්‍රවය'}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {bromineAdded ? 'බ්‍රෝමීන් රතු-දුඹුරු පැහැය පහව යයි' : 'C=C ද්විත්ව බන්ධනයක් ඇත'}
                  </span>
                </div>
              </div>
            </div>

            {/* Reaction Note */}
            <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs flex items-center justify-between text-slate-300">
              <span className="font-mono text-cyan-300">
                CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br (1,2-ඩයිබ්‍රෝමෝඑතේන්)
              </span>
              <span className="text-[11px] text-amber-400 font-semibold">ආකලන ප්‍රතික්‍රියාවකි</span>
            </div>
          </div>

          {/* Theory & Explanation Side Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#05070E] border border-cyan-500/30 rounded-xl p-5 shadow-lg space-y-3">
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
                විභාග විශේෂ පැහැදිලි කිරීම
              </span>
              <h4 className="text-lg font-bold text-white font-['Yaldevi']">
                බ්‍රෝමීන් ජලය අවපැහැ වීමේ යාන්ත්‍රණය
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                ඇල්කීනවල පවතින <strong>කාබන්-කාබන් ද්විත්ව බන්ධනය (C=C)</strong> රසායනිකව ඉතා ප්‍රතික්‍රියාශීලී වේ. රතු-දුඹුරු පැහැති බ්‍රෝමීන් ජලය එකතු කළ විට, ද්විත්ව බන්ධනයේ එක් බන්ධනයක් බිඳී එක් එක් කාබන් පරමාණුවට බ්‍රෝමීන් පරමාණු බැඳී වර්ණ රහිත <strong>1,2-ඩයිබ්‍රෝමෝඑතේන්</strong> සාදයි.
              </p>

              <div className="p-3 rounded-lg bg-cyan-950/40 border-l-4 border-cyan-400 space-y-1 text-xs">
                <strong className="text-white block">ඇල්කේන (Alkanes) ප්‍රතික්‍රියා නොකරන්නේ ඇයි?</strong>
                <p className="text-slate-300">
                  ඇල්කේනවල පවතින්නේ ශක්තිමත් තනි සහසංයුජ බන්ධන (C-C) පමණි (සංතෘප්තයි). එබැවින් අඳුරේදී හෝ සාමාන්‍ය කාමර උෂ්ණත්වයේදී බ්‍රෝමීන් සමඟ ආකලන ප්‍රතික්‍රියා නොදක්වයි.
                </p>
              </div>
            </div>

            {/* Scientific Image */}
            <div className="bg-[#05070E] border border-white/10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={bromineTestImage}
                alt="Bromine Unsaturation Test"
                className="w-full h-36 object-cover object-center brightness-95"
              />
              <div className="p-3 bg-[#0A0F1D] text-[11px] text-slate-400 flex items-center justify-between">
                <span>රසායනාගාර බ්‍රෝමීන් ජල අසංතෘප්තතා පරීක්ෂාව</span>
                <span className="text-cyan-400 font-mono">FyZie Chemistry Lab</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTest === 'flame' && (
        <div className="mt-6 space-y-6">
          <div className="bg-[#05070E] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>දහනයේදී දැල්ලේ ස්වභාවය සහ දැලි (Soot) පිටවීම</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              සංතෘප්ත හා අසංතෘප්ත හයිඩ්‍රොකාබන දහනය කිරීමේදී ඒවායේ කාබන් සහ හයිඩ්‍රජන් පරමාණුක අනුපාතය අනුව දැල්ලේ ස්වභාවය වෙනස් වේ:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Alkane Flame */}
              <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">ඇල්කේනයක දැල්ල (උදා: CH₄, C₄H₁₀)</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">නිල් දැල්ල</span>
                </div>
                <div className="h-28 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 relative overflow-hidden">
                  <div className="w-8 h-16 bg-gradient-to-t from-cyan-600 via-sky-400 to-transparent rounded-full blur-[2px] animate-pulse" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• කාබන් ප්‍රතිශතය සාපේක්ෂව අඩුය.</li>
                  <li>• ප්‍රමාණවත් ඔක්සිජන් සමඟ පහසුවෙන් සම්පූර්ණ දහනය වේ.</li>
                  <li>• දැලි හෝ කලු දුම පිට නොවේ; පිරිසිදු නිල් දැල්ලකින් දැවේ.</li>
                </ul>
              </div>

              {/* Alkene / Aromatic Flame */}
              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">ඇල්කීනයක දැල්ල (උදා: C₂H₄)</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">කහ දුම් දැල්ල</span>
                </div>
                <div className="h-28 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 relative overflow-hidden">
                  <div className="w-10 h-20 bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-200 rounded-full blur-[2px] animate-pulse" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• කාබන් ප්‍රතිශතය සාපේක්ෂව ඉහළය.</li>
                  <li>• සම්පූර්ණ දහනය අපහසු වන අතර නොදැවුණු කාබන් අංශු (දැලි) නිපදවේ.</li>
                  <li>• කාබන් අංශු තාපයෙන් රත් වී දිදුලන බැවින් දීප්තිමත් කහ දැල්ලක් හා දැලි සහිත දුමක් නිකුත් වේ.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
