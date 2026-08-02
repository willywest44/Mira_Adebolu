import React, { useState } from 'react';
import { ProjectCategory, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { Search, ExternalLink, ArrowRight, Eye, Filter, Sparkles, FolderGit2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = ['All', 'Branding', 'Social Media', 'Posters', 'UI Design', 'Print Design'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 03 — PORTFOLIO SHOWCASE</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Selected Design Works
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Explore curated visual identity, social media campaign art, print editorial, and UI projects crafted for ambitious brands.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-900/80 p-3 rounded-2xl border border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar" id="category-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#F27D26] text-black shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="SEARCH PROJECTS OR TOOLS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#F27D26] transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-white/10">
            <p className="text-neutral-400 text-xs font-mono uppercase tracking-wider">No design projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#F27D26] text-black text-[11px] font-bold uppercase tracking-wider hover:bg-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-zinc-900 border border-white/10 hover:border-[#F27D26] overflow-hidden shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                id={`project-card-${project.id}`}
              >
                {/* Image Showcase Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/90 text-[#F27D26] border border-white/10 shadow-md uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-neutral-300 bg-black/90 border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Overlay Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-40 group-hover:opacity-85 transition-opacity duration-300 flex items-center justify-center">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-black font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full shadow-xl">
                      <Eye className="w-4 h-4 text-[#F27D26]" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-3 bg-zinc-900 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-[#F27D26] uppercase tracking-widest font-bold">{project.client}</p>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider font-display group-hover:text-[#F27D26] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs line-clamp-2 pt-1 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tools Badges & CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((tool, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-neutral-300 border border-white/5">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 2 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black text-neutral-400 border border-white/5">
                          +{project.tools.length - 2}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#F27D26] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-mono">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Drive Portfolio Link Callout */}
        <div className="mt-16 text-center bg-zinc-900/60 p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-mono text-[#F27D26] uppercase tracking-[0.2em] font-bold">// RAW PROJECT ARCHIVE</p>
          <p className="text-sm text-neutral-300 font-sans">
            Access the complete Google Drive folder containing original high-res exports, vector files, and extended brand guidelines.
          </p>
          <a
            href={DESIGNER_INFO.socials.driveFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider hover:bg-[#F27D26] hover:text-white transition-colors"
          >
            <FolderGit2 className="w-4 h-4 text-[#F27D26]" />
            <span>Open Google Drive Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
