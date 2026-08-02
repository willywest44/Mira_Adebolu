import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FolderGit2, Instagram, Linkedin, PhoneCall, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-[#F27D26] rounded-lg p-1"
            id="brand-logo-link"
          >
            <div className="w-8 h-8 rounded-lg bg-[#F27D26] flex items-center justify-center text-black font-black text-base shadow-md group-hover:scale-105 transition-transform duration-300">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tighter text-lg uppercase font-display group-hover:text-[#F27D26] transition-colors">
                Adebolu<span className="text-[#F27D26]">.</span>
              </span>
              <span className="text-neutral-400 text-[10px] font-mono tracking-widest uppercase">
                {DESIGNER_INFO.shortName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-sm" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-[#F27D26] text-black shadow-md font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Status Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-[10px] uppercase font-mono tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Projects</span>
            </div>

            <a
              href={DESIGNER_INFO.socials.driveFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              title="View Google Drive Archive"
              id="drive-nav-btn"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>Drive Folder</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-black hover:bg-[#F27D26] hover:text-white transition-colors duration-200"
              id="start-project-nav-btn"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Project</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200" id="mobile-drawer">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-amber-500 text-neutral-950 font-semibold'
                    : 'text-neutral-300 bg-neutral-900/60 hover:bg-neutral-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-neutral-950"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project</span>
            </button>

            <a
              href={DESIGNER_INFO.socials.driveFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800"
            >
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              <span>Google Drive Portfolio Folder</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-neutral-400">
              <a href={`tel:${DESIGNER_INFO.primaryPhone}`} className="hover:text-amber-400 text-xs flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{DESIGNER_INFO.primaryPhone}</span>
              </a>
              <span>•</span>
              <a href={DESIGNER_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-xs flex items-center gap-1">
                <Instagram className="w-3.5 h-3.5" />
                <span>{DESIGNER_INFO.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
