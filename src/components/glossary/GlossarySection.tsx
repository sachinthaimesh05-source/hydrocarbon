import React, { useState } from 'react';
import { GLOSSARY, GlossaryItem } from '../../data/hydrocarbonData';
import { Search, BookOpen } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = GLOSSARY.filter((item) => {
    const matchesSearch =
      item.sinhala.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#0A0F1D] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
            පාරිභාෂික වචන මාලාව · පෙළපොත පිටුව 166
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Yaldevi']">
            හයිඩ්‍රොකාබන සහ බහුඅවයවික ශබ්දකෝෂය (Glossary)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            සිංහල හා ඉංග්‍රීසි පාරිභාෂික වචන සහ නිල විද්‍යාත්මක අර්ථ දැක්වීම් පහසුවෙන් සොයාගන්න.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="වචනයක් සොයන්න (Sinhala / English)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#030712] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-cyan-400 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white bg-white/[0.04]'
          }`}
        >
          සියලුම වචන ({GLOSSARY.length})
        </button>
        <button
          onClick={() => setSelectedCategory('hydrocarbon')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === 'hydrocarbon'
              ? 'bg-cyan-400 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white bg-white/[0.04]'
          }`}
        >
          හයිඩ්‍රොකාබන
        </button>
        <button
          onClick={() => setSelectedCategory('polymer')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === 'polymer'
              ? 'bg-cyan-400 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white bg-white/[0.04]'
          }`}
        >
          බහුඅවයවික
        </button>
        <button
          onClick={() => setSelectedCategory('combustion')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            selectedCategory === 'combustion'
              ? 'bg-cyan-400 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white bg-white/[0.04]'
          }`}
        >
          දහනය
        </button>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#05070E] border border-white/10 hover:border-cyan-500/40 rounded-xl p-4 space-y-2 transition-all group shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-['Yaldevi']">
                {item.sinhala}
              </h4>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/50 shrink-0">
                {item.english}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-['Noto_Sans_Sinhala']">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-xs">
          සොයන වචනය හමු නොවීය. කරුණාකර වෙනත් වචනයක් යොදා සොයන්න.
        </div>
      )}
    </div>
  );
};
