import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 06 — ENDORSEMENTS</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Client Testimonials
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Feedback from founders, marketing leads, and creative directors who placed their brand trust in MOCREATIVES.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Carousel Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-zinc-900 border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
            
            {/* Quote Watermark */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#F27D26]/10 pointer-events-none" />

            <div className="space-y-6">
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F27D26] text-[#F27D26]" />
                ))}
                <span className="ml-2 text-xs font-mono text-[#F27D26] font-bold uppercase tracking-wider">5.0 Star Verified Review</span>
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl font-sans text-white leading-relaxed italic">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>

              {/* Client Profile Row */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS[activeIndex].avatar}
                    alt={TESTIMONIALS[activeIndex].clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#F27D26]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">{TESTIMONIALS[activeIndex].clientName}</h3>
                    <p className="text-xs text-neutral-400 font-sans">{TESTIMONIALS[activeIndex].role} • <span className="text-[#F27D26] font-bold">{TESTIMONIALS[activeIndex].company}</span></p>
                    <span className="inline-block mt-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black text-neutral-300 border border-white/10 uppercase">
                      Project: {TESTIMONIALS[activeIndex].projectType}
                    </span>
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-black border border-white/10 hover:bg-[#F27D26] hover:text-black text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-black border border-white/10 hover:bg-[#F27D26] hover:text-black text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIndex ? 'w-8 bg-[#F27D26]' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
