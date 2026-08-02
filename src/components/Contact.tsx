import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Linkedin, FolderGit2, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = 'Brand Identity' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialService,
    budget: '$1k — $3k',
    timeline: '2 — 4 Weeks',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Brand Identity',
    'Social Media Design',
    'Print Design',
    'UI / Visual Design',
    'Full Creative Retainer',
    'Other / Custom'
  ];

  const budgetRanges = [
    '< $500',
    '$500 — $1,000',
    '$1,000 — $3,000',
    '$3,000 — $5,000',
    '$5,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.details) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 07 — CONTACT & INQUIRIES</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Let's Build Something Great Together
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Fill out the project brief below or reach out directly through phone, email, or social media.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider font-display">Direct Communication</h3>
              
              <div className="space-y-4 text-sm text-neutral-300">
                
                {/* Email */}
                <a href={`mailto:${DESIGNER_INFO.email}`} className="flex items-start gap-3 p-3.5 rounded-xl bg-black border border-white/10 hover:border-[#F27D26] transition-colors group">
                  <div className="p-2 rounded-lg bg-[#F27D26]/10 text-[#F27D26] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Email Address</p>
                    <p className="font-bold text-white group-hover:text-[#F27D26] transition-colors font-mono text-xs">{DESIGNER_INFO.email}</p>
                  </div>
                </a>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black border border-white/10">
                  <div className="p-2 rounded-lg bg-[#F27D26]/10 text-[#F27D26] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Phone & WhatsApp</p>
                    <div className="flex flex-col gap-0.5 mt-0.5 font-mono text-xs">
                      <a href={`tel:${DESIGNER_INFO.primaryPhone}`} className="font-bold text-white hover:text-[#F27D26] transition-colors">
                        {DESIGNER_INFO.formattedPhones[0]}
                      </a>
                      <a href={`tel:${DESIGNER_INFO.secondaryPhone}`} className="font-bold text-neutral-300 hover:text-[#F27D26] transition-colors">
                        {DESIGNER_INFO.formattedPhones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black border border-white/10">
                  <div className="p-2 rounded-lg bg-[#F27D26]/10 text-[#F27D26] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Location</p>
                    <p className="font-bold text-white mt-0.5 font-mono text-xs">{DESIGNER_INFO.location}</p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Instant Chat Button */}
              <a
                href={DESIGNER_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Connect Across Socials</p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={DESIGNER_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-black border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-white transition-colors font-mono text-[11px]"
                  >
                    <Instagram className="w-4 h-4 text-[#F27D26]" />
                    <span className="truncate">{DESIGNER_INFO.socials.instagramHandle}</span>
                  </a>

                  <a
                    href={DESIGNER_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-black border border-white/10 hover:border-[#F27D26] text-neutral-300 hover:text-white transition-colors font-mono text-[11px]"
                  >
                    <Linkedin className="w-4 h-4 text-[#F27D26]" />
                    <span className="truncate">{DESIGNER_INFO.socials.linkedinHandle}</span>
                  </a>
                </div>

                <a
                  href={DESIGNER_INFO.socials.driveFolder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-full bg-black border border-white/10 text-neutral-300 hover:text-[#F27D26] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 text-[#F27D26]" />
                  <span>Google Drive Portfolio Folder</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

              </div>

            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-zinc-900 p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-display">Project Brief Submitted!</h3>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you, <span className="text-[#F27D26] font-bold">{formData.fullName}</span>. Miracle will review your project requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        projectType: 'Brand Identity',
                        budget: '$1k — $3k',
                        timeline: '2 — 4 Weeks',
                        details: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#F27D26] text-black text-xs font-bold uppercase tracking-wider font-mono hover:bg-white transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider font-display">Project Inquiry Form</h3>
                  <span className="text-[10px] font-mono text-[#F27D26] uppercase font-bold tracking-widest">★ Fast Response</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Olamide Williams"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#F27D26] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. olamide@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#F27D26] transition-colors"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +234 901 752 2702"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#F27D26] transition-colors"
                  />
                </div>

                {/* Project Type Selector */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Service Required</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-mono transition-all text-left truncate border uppercase tracking-wider ${
                          formData.projectType === type
                            ? 'bg-[#F27D26] text-black font-bold border-[#F27D26]'
                            : 'bg-black text-neutral-400 border-white/10 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Estimated Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all border ${
                          formData.budget === range
                            ? 'bg-[#F27D26] border-[#F27D26] text-black'
                            : 'bg-black border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">Project Details & Vision *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business goals, target audience, deliverables needed, and any timeline constraints..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#F27D26] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#F27D26] hover:bg-white text-black font-bold text-xs font-mono uppercase tracking-wider shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  id="submit-contact-brief-btn"
                >
                  {isSubmitting ? (
                    <span>Processing Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
