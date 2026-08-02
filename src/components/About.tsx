import React from 'react';
import { Award, Check, MapPin, Mail, Phone, ExternalLink, Sparkles, FolderGit2, Instagram, Linkedin } from 'lucide-react';
import { DESIGNER_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 01 — ABOUT THE DESIGNER</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Behind The Creative Vision
          </h2>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Designer Portrait & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group">
                <img
                  src={DESIGNER_INFO.portrait}
                  alt={DESIGNER_INFO.name}
                  className="w-full h-[450px] sm:h-[500px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Info Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider font-display">{DESIGNER_INFO.name}</h3>
                  <p className="text-xs text-[#F27D26] font-mono mt-1 font-bold">{DESIGNER_INFO.title}</p>
                  
                  <div className="flex items-center gap-2 mt-3 text-xs text-neutral-300 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                    <span>{DESIGNER_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -right-4 bg-black border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center font-bold font-mono">
                  4+
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">Years Exp</p>
                  <p className="text-[10px] text-neutral-400 font-mono">Mastering Graphic Art</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Bio, Philosophy & Stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight uppercase font-display">
                "Design isn't just how it looks — it's how effectively it communicates brand value."
              </h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {DESIGNER_INFO.bio}
              </p>
              <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm font-sans">
                Whether creating a luxury skincare packaging identity, a high-converting social media kit, or an event poster campaign for thousands of attendees, I approach every project with strategic intent, typography rigor, and visual distinction.
              </p>
            </div>

            {/* Design Philosophy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#F27D26] uppercase tracking-widest">
                  01 // STRATEGY
                </div>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider font-display">Strategic Intent</h4>
                <p className="text-xs text-neutral-400">Every color, font choice, and spatial layout serves a measurable business objective.</p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#F27D26] uppercase tracking-widest">
                  02 // TYPOGRAPHY
                </div>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider font-display">Typographic Precision</h4>
                <p className="text-xs text-neutral-400">Micro-kerning and mathematical hierarchies ensure effortless editorial readability.</p>
              </div>
            </div>

            {/* Animated Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {STATS.map((stat) => (
                <div key={stat.id} className="text-left space-y-1">
                  <p className="text-2xl font-bold text-[#F27D26] font-mono">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Direct Contact Details & Links */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-4">
              <p className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-bold">Direct Designer Channels</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-neutral-300 font-mono">
                <a href={`mailto:${DESIGNER_INFO.email}`} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/5 transition-colors">
                  <Mail className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span className="truncate">{DESIGNER_INFO.email}</span>
                </a>

                <a href={`tel:${DESIGNER_INFO.primaryPhone}`} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/5 transition-colors">
                  <Phone className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span>{DESIGNER_INFO.formattedPhones[0]}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={DESIGNER_INFO.socials.driveFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider hover:bg-[#F27D26] hover:text-white transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Drive Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-neutral-200 text-[11px] font-mono uppercase tracking-wider transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>{DESIGNER_INFO.socials.instagramHandle}</span>
                </a>

                <a
                  href={DESIGNER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-neutral-200 text-[11px] font-mono uppercase tracking-wider transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
