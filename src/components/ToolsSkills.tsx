import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, Wrench, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export const ToolsSkills: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Core Skill' | 'Specialty'>('All');

  const filteredSkills = filter === 'All' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 05 — COMPETENCIES & ARSENAL</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Tools & Design Mastery
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Combining industry-standard creative software with fundamental graphic design principles and technical execution.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap" id="skills-filter-tabs">
          {(['All', 'Software', 'Core Skill', 'Specialty'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold transition-all ${
                filter === cat
                  ? 'bg-[#F27D26] text-black shadow-md'
                  : 'bg-zinc-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-[#F27D26] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#F27D26] uppercase tracking-widest bg-[#F27D26]/10 px-2.5 py-1 rounded-full border border-[#F27D26]/30 font-bold">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display group-hover:text-[#F27D26] transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-xs font-mono font-bold text-neutral-300 bg-black border border-white/10 px-2.5 py-1 rounded-lg">
                  {skill.years}
                </span>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed mb-4 h-10 line-clamp-2">
                {skill.description}
              </p>

              {/* Progress Level Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono uppercase">
                  <span className="text-neutral-500">Proficiency</span>
                  <span className="text-[#F27D26] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black overflow-hidden border border-white/5">
                  <div
                    className="h-full rounded-full bg-[#F27D26] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Software Badges Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center space-y-4">
          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.2em] font-bold">Mastered Creative Suite</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Adobe Photoshop CC',
              'Adobe Illustrator CC',
              'Adobe InDesign CC',
              'Figma',
              'Canva Pro',
              'Adobe After Effects',
              'CorelDraw',
              'Brand Strategy'
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono font-bold text-neutral-300 hover:border-[#F27D26] hover:text-[#F27D26] transition-all uppercase tracking-wider"
              >
                ✦ {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
