import React from 'react';
import { ArrowRight, Sparkles, FolderGit2, CheckCircle, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO, STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-950 border-b border-neutral-900">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 shadow-inner" id="hero-availability-badge">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{DESIGNER_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#F27D26] font-mono text-xs tracking-widest uppercase font-bold">
                <span>//</span>
                <span>{DESIGNER_INFO.name} — {DESIGNER_INFO.brandName}</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.88] uppercase font-display" id="hero-headline">
                I Turn <br />
                <span className="text-[#F27D26]">Ideas</span> <br />
                Into Visual <br />
                Experiences.
              </h1>

              <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed font-normal">
                {DESIGNER_INFO.tagline}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 bg-white text-black text-[11px] font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#F27D26] hover:text-white transition-colors shadow-lg"
                id="hero-view-work-btn"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                id="hero-lets-work-btn"
              >
                <Sparkles className="w-4 h-4 text-[#F27D26]" />
                <span>Let's Talk</span>
              </button>

              <a
                href={DESIGNER_INFO.socials.driveFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-4 text-[11px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                title="Google Drive Portfolio Folder"
              >
                <FolderGit2 className="w-4 h-4 text-[#F27D26]" />
                <span>Drive Folder</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-[11px] text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Brand Identity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Print Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Global Clients</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group">
                <img
                  src={DESIGNER_INFO.heroMockup}
                  alt="Graphic Design Selected Works Mockup"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-[#F27D26] uppercase tracking-widest font-bold">Brand Showcase</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wider font-display">MOCREATIVES Collection</p>
                  </div>
                  <div className="bg-[#F27D26]/10 text-[#F27D26] text-[10px] px-2.5 py-1 rounded-full border border-[#F27D26]/30 font-mono font-bold">
                    2026 EDITION
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center font-black font-mono text-base">
                  4+
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">Years Experience</p>
                  <p className="text-[10px] text-neutral-400 font-mono">Over 100+ Projects Delivered</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Stats Ticker Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.id} className="p-5 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-[#F27D26]/50 transition-colors">
              <p className="text-3xl sm:text-4xl font-bold text-white font-mono">
                {stat.value}<span className="text-[#F27D26]">{stat.suffix}</span>
              </p>
              <p className="text-[10px] font-bold text-neutral-300 mt-1 uppercase tracking-widest font-mono">{stat.label}</p>
              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
