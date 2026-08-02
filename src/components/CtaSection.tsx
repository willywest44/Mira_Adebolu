import React from 'react';
import { Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface CtaSectionProps {
  onOpenPlanner: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenPlanner }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[11px] font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready To Upgrade Your Brand Aesthetics?</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight uppercase font-display">
          Have an idea? <br />
          <span className="text-[#F27D26]">
            Let's bring it to life.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you need a new brand identity, social media visuals, or a complete creative direction, let's create something memorable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenPlanner}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs font-mono uppercase tracking-wider bg-[#F27D26] hover:bg-white text-black hover:scale-105 transition-all duration-200 shadow-xl"
            id="cta-start-project-btn"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start a Project</span>
          </button>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs font-mono uppercase tracking-wider bg-black hover:bg-zinc-800 text-white border border-white/20 hover:scale-105 transition-all duration-200"
            id="cta-contact-me-btn"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 text-[#F27D26]" />
          </a>
        </div>

        {/* Quick Contact Ticker */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono uppercase tracking-wider">
          <a href={`tel:${DESIGNER_INFO.primaryPhone}`} className="hover:text-[#F27D26] transition-colors flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>{DESIGNER_INFO.formattedPhones[0]}</span>
          </a>
          <span>•</span>
          <a href={`mailto:${DESIGNER_INFO.email}`} className="hover:text-[#F27D26] transition-colors flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>{DESIGNER_INFO.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
