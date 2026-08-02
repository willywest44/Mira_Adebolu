import React from 'react';
import { CLIENT_BRANDS } from '../data/portfolioData';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-xs font-mono text-neutral-400 uppercase tracking-[0.2em] font-bold mb-8">
          // TRUSTED BY AMBITIOUS BRANDS & CREATIVE VENTURES
        </p>

        {/* Grayscale Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center">
          {CLIENT_BRANDS.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#F27D26] text-center transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform text-[#F27D26]">
                {client.symbol || '✦'}
              </div>
              <p className="text-xs font-bold text-neutral-300 group-hover:text-[#F27D26] transition-colors uppercase font-mono tracking-wider">
                {client.logoText}
              </p>
              <p className="text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors mt-0.5 uppercase font-mono">
                {client.industry}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
