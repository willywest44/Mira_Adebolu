import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ProjectPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectPlannerModal: React.FC<ProjectPlannerModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Brand Identity',
}) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [selectedBudget, setSelectedBudget] = useState('$1,000 — $3,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    'Brand Identity & Guidelines',
    'Social Media Graphics & Campaign',
    'Print Design & Posters',
    'UI / Visual Product Design',
    'Full Brand Retainer'
  ];

  const budgets = [
    '< $500',
    '$500 — $1,000',
    '$1,000 — $3,000',
    '$3,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#F27D26]/10 text-[#F27D26]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">Start a Project with Miracle</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white bg-black hover:bg-zinc-800 transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white uppercase tracking-wider font-display">Inquiry Received!</h4>
            <p className="text-xs text-neutral-300 font-sans">
              Thanks {name}! Miracle will reach out to you directly at <span className="text-[#F27D26] font-bold">{email}</span> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#F27D26] text-black font-bold text-xs uppercase font-mono tracking-wider hover:bg-white transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Step 1: Service */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">1. Select Service Needed</label>
              <div className="space-y-1.5">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider border transition-colors ${
                      selectedService === s
                        ? 'bg-[#F27D26] text-black border-[#F27D26] font-bold'
                        : 'bg-black text-neutral-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-neutral-300 uppercase font-bold tracking-widest">2. Target Budget</label>
              <div className="grid grid-cols-2 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-3 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-colors ${
                      selectedBudget === b
                        ? 'bg-[#F27D26] border-[#F27D26] text-black'
                        : 'bg-black border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#F27D26]"
              />

              <input
                type="email"
                required
                placeholder="Your Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#F27D26]"
              />

              <textarea
                rows={3}
                placeholder="Brief description of goals/vision..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#F27D26]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#F27D26] hover:bg-white text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Submit Project Brief</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
