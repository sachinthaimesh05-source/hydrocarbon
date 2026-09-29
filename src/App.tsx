/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNavigation } from './components/layout/TopNavigation';
import { HeroBanner } from './components/layout/HeroBanner';
import { ArchitectureJourney } from './components/layout/ArchitectureJourney';
import { MolecularModelExplorer } from './components/visualizers/MolecularModelExplorer';
import { PetroleumDistillationTower } from './components/visualizers/PetroleumDistillationTower';
import { UnsaturationBromineLab } from './components/visualizers/UnsaturationBromineLab';
import { EthyneAcetyleneLab } from './components/visualizers/EthyneAcetyleneLab';
import { CandleWaxLab } from './components/visualizers/CandleWaxLab';
import { PolymerizationLab } from './components/visualizers/PolymerizationLab';
import { RubberVulcanizationLab } from './components/visualizers/RubberVulcanizationLab';
import { PlasticsRecyclingLab } from './components/visualizers/PlasticsRecyclingLab';
import { CombustionFlameLab } from './components/visualizers/CombustionFlameLab';
import { ShortNotesSection } from './components/notes/ShortNotesSection';
import { InteractiveQuiz } from './components/quiz/InteractiveQuiz';
import { GlossarySection } from './components/glossary/GlossarySection';
import {
  Flame,
  FlaskConical,
  Layers,
  ShieldCheck,
  FileText,
  Award,
  BookOpen,
  ChevronUp,
  Filter,
  Recycle,
  Sparkles,
  Zap
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-[#F8FAFC] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white relative">
      {/* Blueprint Grid & Ambient Luminescence from fyzie-electrolysis.netlify.app */}
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true">
        <div className="orb-cyan" />
        <div className="orb-cobalt" />
      </div>

      {/* Floating Glass Codex Top Navigation */}
      <TopNavigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <div id="hero">
          <HeroBanner onExplore={scrollToSection} />
        </div>

        {/* 3-Phase Core Architecture Journey */}
        <ArchitectureJourney onSelectStep={scrollToSection} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          {/* Section 01: Hydrocarbons & 3D Model Explorer (Alkanes, Alkenes, Alkynes) */}
          <section id="hydrocarbons" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold">
                01
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  පාඩම් කොටස 14.1 · ඇල්කේන, ඇල්කීන & ඇල්කයින
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  හයිඩ්‍රොකාබන මූලික කුල 3 (3D Molecular Kit & Matrix)
                </h2>
              </div>
            </div>

            {/* 3D Ball & Stick / Structural Formula Explorer */}
            <MolecularModelExplorer />
          </section>

          {/* Section 02: Petroleum Fractional Distillation Column */}
          <section id="distillation" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono font-bold">
                02
              </div>
              <div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  කාර්මික රසායනය · සපුගස්කන්ද පිරිපහදුව
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  ඛනිජ තෙල් භාගික ආසවන කුළුණ (Fractional Distillation Column)
                </h2>
              </div>
            </div>

            {/* Fractional Distillation Lab */}
            <PetroleumDistillationTower />
          </section>

          {/* Section 03: Unsaturation & Bromine Water Test Lab */}
          <section id="bromine-lab" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold">
                03
              </div>
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  ප්‍රායෝගික පරීක්ෂණාගාරය · අසංතෘප්තතා හඳුනාගැනීම
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  සංතෘප්ත vs අසංතෘප්ත බ්‍රෝමීන් ජල පරීක්ෂාව (Bromine Water Lab)
                </h2>
              </div>
            </div>

            {/* Bromine Water Lab */}
            <UnsaturationBromineLab />
          </section>

          {/* Section 04: Ethyne / Acetylene Lab (Alkynes in Depth) */}
          <section id="ethyne-lab" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold">
                04
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  ඇල්කයින විශේෂිත විද්‍යාගාරය · CaC₂ & C₂H₂
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  එතයින් (ඇසිටලීන්) පිළියෙල කිරීම සහ ඔක්සි-ඇසිටලීන් දැල්ල (3300°C)
                </h2>
              </div>
            </div>

            {/* Ethyne Lab */}
            <EthyneAcetyleneLab />
          </section>

          {/* Section 05: Activity 14.1 Candle Wax Experiment */}
          <section id="candle-lab" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold">
                05
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  ක්‍රියාකාරකම 14.1 · පෙළපොත ප්‍රායෝගික පරීක්ෂණය
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  ඉටිවල කාබන් (C) සහ හයිඩ්‍රජන් (H) අඩංගු බව ඔප්පු කිරීම
                </h2>
              </div>
            </div>

            {/* Virtual Candle Wax Lab */}
            <CandleWaxLab />
          </section>

          {/* Section 06: Polymers & Addition Polymerization */}
          <section id="polymers" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold">
                06
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  පාඩම් කොටස 14.3 · ආකලන බහුඅවයවීකරණය
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  බහුඅවයවික සංස්ලේෂණය: පොලිතීන්, PVC සහ ටෙෆ්ලෝන්
                </h2>
              </div>
            </div>

            {/* Polymerization Simulator */}
            <PolymerizationLab />
          </section>

          {/* Section 07: Rubber Vulcanization & Cross-linking */}
          <section id="vulcanization" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-mono font-bold">
                07
              </div>
              <div>
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  රබර් තාක්ෂණය · සල්ෆර් හරස් බන්ධන
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  ස්වාභාවික රබර් වල්කනයිස් කිරීම (Rubber Vulcanization Lab)
                </h2>
              </div>
            </div>

            {/* Rubber Vulcanization Simulator */}
            <RubberVulcanizationLab />
          </section>

          {/* Section 08: Plastics Heat Response & 1-7 Resin Codes */}
          <section id="plastics-lab" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
                08
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  තාපස්ථාප්‍ය vs තාපදෘඪ · 5R කළමනාකරණය
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  ප්ලාස්ටික් තාප ප්‍රතිචාර සහ 1-7 ප්‍රතිචක්‍රීකරණ සංකේත
                </h2>
              </div>
            </div>

            {/* Plastics Lab */}
            <PlasticsRecyclingLab />
          </section>

          {/* Section 09: Hydrocarbon Combustion & Flame Simulator */}
          <section id="combustion" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-mono font-bold">
                09
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  දහන රසායනය · වායු විවර පාලනය
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  හයිඩ්‍රොකාබන දහනය: සම්පූර්ණ vs අසම්පූර්ණ (Flame Lab)
                </h2>
              </div>
            </div>

            {/* Combustion Flame Simulator */}
            <CombustionFlameLab />
          </section>

          {/* Section 10: Comprehensive Exam Short Notes */}
          <section id="notes" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  විභාග විශේෂ සාරාංශය · ඇල්කේන, ඇල්කීන, ඇල්කයින
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  හයිඩ්‍රොකාබන සම්පූර්ණ කෙටි සටහන් සංග්‍රහය (Revision Notes)
                </h2>
              </div>
            </div>

            <ShortNotesSection />
          </section>

          {/* Section 11: Textbook Exercises (MCQ & Essays) */}
          <section id="quiz" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  පෙළපොතේ අභ්‍යාස මාලාව
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  විභාග ඉලක්කගත අභ්‍යාස පෙරහුරුව (MCQs & Essays)
                </h2>
              </div>
            </div>

            <InteractiveQuiz />
          </section>

          {/* Section 12: Bilingual Glossary */}
          <section id="glossary" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block font-['Space_Grotesk']">
                  පාරිභාෂික ශබ්දකෝෂය
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Yaldevi']">
                  පාරිභාෂික වචන මාලාව (Bilingual Glossary)
                </h2>
              </div>
            </div>

            <GlossarySection />
          </section>
        </div>
      </main>

      {/* Editorial Codex Footer with FyZie & T. Sachintha Imesh Branding */}
      <footer className="mt-20 border-t border-white/[0.08] bg-[#03050A] py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                  ⚡
                </div>
                <span className="text-base font-bold text-white font-['Space_Grotesk']">
                  FyZie <span className="text-cyan-400">[T.Sachintha Imesh]</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                14 වන පරිච්ඡේදය: හයිඩ්‍රොකාබන හා ඒවායේ ව්‍යුත්පන්න (ඇල්කේන, ඇල්කීන, ඇල්කයින) — අන්තර්ක්‍රියාකාරී අධ්‍යයන සංග්‍රහය.
              </p>
              <p className="text-[11px] text-slate-500">
                ශ්‍රී ලංකා ජාතික අධ්‍යාපන විෂය නිර්දේශයේ 11 ශ්‍රේණිය විද්‍යාව (II කොටස) පාදක කරගත් නිර්මාණයකි.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-xs">
              <div className="text-slate-400 font-mono">
                © 2026 FyZie Open Education. All Rights Reserved.
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <span>Created by <strong className="text-slate-300">T. Sachintha Imesh</strong></span>
                <span>·</span>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>මුදුනට (Top)</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
