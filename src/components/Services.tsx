import React from 'react';
import { Palette, Share2, Printer, Layout, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#F27D26]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#F27D26]" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-[#F27D26]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#F27D26]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F27D26]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 02 — EXPERTISE & SERVICES</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Tailored Creative Solutions
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            From strategic brand identities to print campaigns and digital products, I bring clarity, aesthetics, and high performance to every deliverable.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-[#F27D26] p-8 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div className="relative space-y-6">
                
                {/* Header Row: Icon + Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-3xl font-bold text-neutral-700 group-hover:text-[#F27D26] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-display group-hover:text-[#F27D26] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F27D26] font-bold uppercase tracking-widest">
                    {service.tagline}
                  </p>
                  <p className="text-neutral-300 text-xs leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Included Deliverables:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button Footer */}
              <div className="relative pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Custom quote available</span>
                
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#F27D26] transition-colors"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#F27D26]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
