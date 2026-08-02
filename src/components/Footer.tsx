import React from 'react';
import { ArrowUp, Instagram, Linkedin, FolderGit2, Mail, Phone, Heart } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-16 border-t border-white/10 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F27D26] flex items-center justify-center text-black font-black text-base shadow-lg font-mono">
                M
              </div>
              <span className="text-white font-bold text-lg uppercase tracking-wider font-display">{DESIGNER_INFO.brandName}</span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-sans">
              {DESIGNER_INFO.tagline}
            </p>

            <p className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
              Based in {DESIGNER_INFO.location}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-white uppercase tracking-[0.2em] font-bold">// QUICK NAV</p>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><a href="#home" className="hover:text-[#F27D26] transition-colors">Home & Intro</a></li>
              <li><a href="#about" className="hover:text-[#F27D26] transition-colors">About Miracle</a></li>
              <li><a href="#services" className="hover:text-[#F27D26] transition-colors">Design Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#F27D26] transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-[#F27D26] transition-colors">Design Process</a></li>
              <li><a href="#skills" className="hover:text-[#F27D26] transition-colors">Tools & Skills</a></li>
              <li><a href="#contact" className="hover:text-[#F27D26] transition-colors">Contact Brief</a></li>
            </ul>
          </div>

          {/* Connect & Drive Archive */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-white uppercase tracking-[0.2em] font-bold">// DIRECT CONTACTS</p>
            
            <div className="space-y-2 text-xs">
              <p className="text-neutral-300 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F27D26]" />
                <a href={`mailto:${DESIGNER_INFO.email}`} className="hover:text-[#F27D26] transition-colors">{DESIGNER_INFO.email}</a>
              </p>
              
              <p className="text-neutral-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                <a href={`tel:${DESIGNER_INFO.primaryPhone}`} className="hover:text-[#F27D26] transition-colors">{DESIGNER_INFO.formattedPhones[0]}</a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={DESIGNER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-white transition-colors"
                title="Instagram @mocrea_tives"
              >
                <Instagram className="w-4 h-4 text-[#F27D26]" />
              </a>

              <a
                href={DESIGNER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-white transition-colors"
                title="LinkedIn Miracle Adebolu"
              >
                <Linkedin className="w-4 h-4 text-[#F27D26]" />
              </a>

              <a
                href={DESIGNER_INFO.socials.driveFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-white transition-colors"
                title="Google Drive Folder"
              >
                <FolderGit2 className="w-4 h-4 text-[#F27D26]" />
              </a>
            </div>

          </div>

        </div>

        {/* Footer Bottom Copyright & Scroll Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
          <p>© 2026 {DESIGNER_INFO.name} ({DESIGNER_INFO.brandName}). All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-[#F27D26] transition-all uppercase"
            id="back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
