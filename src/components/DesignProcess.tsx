import React, { useState } from 'react';
import { Compass, Search, Lightbulb, Layers, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const DesignProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-orange-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-yellow-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Compass className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// 04 — METHODOLOGY</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            The Design Process
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            A structured 5-step creative workflow that turns ambiguous ideas into memorable visual masterworks.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Timeline Desktop/Tablet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selectors Column */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-zinc-900 border-[#F27D26] shadow-xl'
                      : 'bg-black border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
                  }`}
                  id={`process-step-btn-${idx}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#F27D26] text-black'
                          : 'bg-zinc-800 text-neutral-400'
                      }`}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base uppercase tracking-wider font-display transition-colors ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-neutral-400 line-clamp-1">{step.tagline}</p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-[#F27D26] translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="lg:col-span-7 bg-zinc-900 p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black border border-white/10">
                  {getIcon(PROCESS_STEPS[activeStep].iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#F27D26] uppercase font-bold tracking-widest">
                    Step {PROCESS_STEPS[activeStep].number} of 05
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-display">{PROCESS_STEPS[activeStep].title}</h3>
                </div>
              </div>

              <span className="font-mono text-3xl font-bold text-neutral-800">
                {PROCESS_STEPS[activeStep].number}
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-bold text-[#F27D26] uppercase tracking-wider font-mono">
                "{PROCESS_STEPS[activeStep].tagline}"
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Key Deliverables/Outputs for this step */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Key Step Outputs:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCESS_STEPS[activeStep].keyOutputs.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-black border border-white/10 text-xs text-neutral-200 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Nav Control */}
            <div className="pt-4 flex items-center justify-between text-xs text-neutral-400">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-full bg-black border border-white/10 hover:bg-zinc-800 text-white font-mono uppercase text-[10px] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous Step
              </button>

              <div className="flex gap-1.5">
                {PROCESS_STEPS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeStep ? 'bg-[#F27D26] w-6' : 'bg-neutral-800 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={activeStep === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-4 py-2 rounded-full bg-white text-black font-bold font-mono uppercase text-[10px] hover:bg-[#F27D26] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Step
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
