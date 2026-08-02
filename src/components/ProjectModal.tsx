import React, { useState } from 'react';
import { X, ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, Layers, Cpu, Award, Sparkles, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F27D26] text-black uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono uppercase hidden sm:inline">• {project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onPrevProject}
              className="p-2 rounded-full bg-zinc-800 hover:bg-[#F27D26] hover:text-black text-white transition-colors border border-white/10"
              title="Previous Project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextProject}
              className="p-2 rounded-full bg-zinc-800 hover:bg-[#F27D26] hover:text-black text-white transition-colors border border-white/10"
              title="Next Project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="w-px h-5 bg-white/10 mx-1" />

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors border border-red-500/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          
          {/* Hero Banner */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black h-[300px] sm:h-[420px]">
            <img
              src={selectedImage || project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <p className="text-[#F27D26] text-xs font-mono uppercase tracking-[0.2em] font-bold">{project.client}</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter font-display">{project.title}</h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-sans">{project.subtitle}</p>
            </div>
          </div>

          {/* Quick Details Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-black border border-white/10 text-xs font-mono">
            <div>
              <p className="text-neutral-500 uppercase font-bold tracking-widest text-[10px]">Client</p>
              <p className="font-bold text-white mt-0.5">{project.client}</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase font-bold tracking-widest text-[10px]">Year</p>
              <p className="font-bold text-white mt-0.5">{project.year}</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase font-bold tracking-widest text-[10px]">Category</p>
              <p className="font-bold text-[#F27D26] mt-0.5">{project.category}</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase font-bold tracking-widest text-[10px]">Impact</p>
              <p className="font-bold text-emerald-400 mt-0.5 line-clamp-1">{project.impact}</p>
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-black border border-white/10 space-y-3">
              <h3 className="text-xs font-mono text-[#F27D26] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> The Challenge
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-xl bg-black border border-white/10 space-y-3">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> The Solution
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">{project.solution}</p>
            </div>
          </div>

          {/* Process & Design Approach */}
          <div className="space-y-3 p-6 rounded-xl bg-black border border-white/10">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">Design Process & Execution</h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">{project.process}</p>
          </div>

          {/* Deliverables & Tools Used */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Deliverables */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Key Deliverables</h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-black border border-white/10 text-xs font-mono text-neutral-200 uppercase">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Software & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-xs font-mono text-[#F27D26] uppercase font-bold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Gallery Thumbnails */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono text-[#F27D26] uppercase tracking-[0.2em] font-bold">Project Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => setSelectedImage(project.heroImage)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all h-24 ${
                  selectedImage === project.heroImage ? 'border-[#F27D26] scale-95' : 'border-white/10 opacity-80 hover:opacity-100'
                }`}
              >
                <img src={project.heroImage} alt="Cover" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>

              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all h-24 ${
                    selectedImage === img ? 'border-[#F27D26] scale-95' : 'border-white/10 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* External Link Action */}
          {project.externalLink && (
            <div className="pt-6 border-t border-white/10 flex justify-end">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F27D26] hover:bg-white text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Full Assets on Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
