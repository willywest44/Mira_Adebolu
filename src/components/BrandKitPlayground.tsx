import React, { useState } from 'react';
import { Palette, Sparkles, RefreshCw, Copy, Check, Eye } from 'lucide-react';

interface PresetStyle {
  id: string;
  name: string;
  tagline: string;
  primaryBg: string;
  cardBg: string;
  accent: string;
  accentHex: string;
  textPrimary: string;
  textSecondary: string;
  headingFont: string;
  bodyFont: string;
  colors: string[];
}

export const BrandKitPlayground: React.FC = () => {
  const presets: PresetStyle[] = [
    {
      id: 'luxury-noir',
      name: 'Luxury Obsidian',
      tagline: 'Elegance for high-end skincare, fashion & spirits',
      primaryBg: '#0a0a0c',
      cardBg: '#131318',
      accent: 'text-amber-400',
      accentHex: '#fbbf24',
      textPrimary: '#ffffff',
      textSecondary: '#a1a1aa',
      headingFont: 'Playfair Display / Serif',
      bodyFont: 'Plus Jakarta Sans',
      colors: ['#0a0a0c', '#131318', '#fbbf24', '#e2e8f0']
    },
    {
      id: 'neon-cyber',
      name: 'Cyberpunk Neon',
      tagline: 'High energy for music festivals & tech events',
      primaryBg: '#09090b',
      cardBg: '#18181b',
      accent: 'text-cyan-400',
      accentHex: '#22d3ee',
      textPrimary: '#ffffff',
      textSecondary: '#94a3b8',
      headingFont: 'Space Grotesk / Display',
      bodyFont: 'Inter',
      colors: ['#09090b', '#18181b', '#22d3ee', '#f43f5e']
    },
    {
      id: 'warm-editorial',
      name: 'Artisan Terracotta',
      tagline: 'Tactile warmth for cafes, books & architecture',
      primaryBg: '#120d0a',
      cardBg: '#1c1510',
      accent: 'text-orange-400',
      accentHex: '#fb923c',
      textPrimary: '#fef3c7',
      textSecondary: '#d4d4d8',
      headingFont: 'Cinzel / Classic Serif',
      bodyFont: 'Lora',
      colors: ['#120d0a', '#1c1510', '#fb923c', '#d97706']
    },
    {
      id: 'bold-pop',
      name: 'Electric Studio',
      tagline: 'High-converting social campaigns & podcasts',
      primaryBg: '#0d1117',
      cardBg: '#161b22',
      accent: 'text-emerald-400',
      accentHex: '#34d399',
      textPrimary: '#ffffff',
      textSecondary: '#8b949e',
      headingFont: 'Syne / Bold Sans',
      bodyFont: 'DM Sans',
      colors: ['#0d1117', '#161b22', '#34d399', '#a7f3d0']
    }
  ];

  const [activePreset, setActivePreset] = useState<PresetStyle>(presets[0]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[#F27D26] font-mono text-xs uppercase tracking-[0.2em] font-bold">// INTERACTIVE STUDIO TOOL</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-display">
            Brand Palette & Aesthetic Preview
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Explore how MOCREATIVES crafts custom color harmonies, typography hierarchies, and mood presets for different brand personalities.
          </p>
          <div className="w-16 h-1 bg-[#F27D26] mx-auto mt-2" />
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setActivePreset(preset)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all border ${
                activePreset.id === preset.id
                  ? 'bg-[#F27D26] border-[#F27D26] text-black shadow-lg'
                  : 'bg-zinc-900 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              ✦ {preset.name}
            </button>
          ))}
        </div>

        {/* Interactive Preview Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Palette & Typography Breakdown */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-900 border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">{activePreset.name}</h3>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black text-[#F27D26] border border-white/10 uppercase">
                  {activePreset.id}
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                {activePreset.tagline}
              </p>

              {/* Color Swatches */}
              <div className="space-y-2">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Brand Color Palette:</p>
                <div className="grid grid-cols-4 gap-2">
                  {activePreset.colors.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => handleCopyColor(hex)}
                      className="group relative h-16 rounded-xl border border-white/20 p-2 flex flex-col justify-end text-[10px] font-mono transition-transform hover:scale-105"
                      style={{ backgroundColor: hex }}
                      title="Click to copy HEX"
                    >
                      <span className="bg-black/90 px-1.5 py-0.5 rounded text-white text-[9px] font-bold self-start border border-white/10">
                        {copiedColor === hex ? <Check className="w-2.5 h-2.5 inline text-[#F27D26]" /> : hex}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Specs */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-neutral-300">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Typography Pairings:</p>
                <div className="flex justify-between p-2.5 rounded-xl bg-black border border-white/10">
                  <span className="text-neutral-400 font-mono text-[11px]">Display / Heading:</span>
                  <span className="font-bold text-[#F27D26] font-display uppercase tracking-wider text-xs">{activePreset.headingFont}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-black border border-white/10">
                  <span className="text-neutral-400 font-mono text-[11px]">Body Copy:</span>
                  <span className="font-bold text-white text-xs">{activePreset.bodyFont}</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black border border-white/10 text-[11px] text-neutral-400 flex items-center gap-2 font-mono">
              <Sparkles className="w-4 h-4 text-[#F27D26] shrink-0" />
              <span>Miracle crafts custom palettes tailored to each client's unique market position.</span>
            </div>
          </div>

          {/* Right: Simulated Card Preview */}
          <div
            className="lg:col-span-7 p-8 rounded-2xl border transition-all duration-500 shadow-2xl flex flex-col justify-between"
            style={{
              backgroundColor: activePreset.primaryBg,
              borderColor: activePreset.accentHex + '40',
            }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-bold"
                  style={{
                    color: activePreset.accentHex,
                    borderColor: activePreset.accentHex + '50',
                    backgroundColor: activePreset.accentHex + '15',
                  }}
                >
                  Live Visual Sample
                </span>
                <span className="text-xs font-mono opacity-60" style={{ color: activePreset.textSecondary }}>
                  MOCREATIVES Mockup
                </span>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-2xl sm:text-3xl font-black tracking-tight"
                  style={{ color: activePreset.textPrimary }}
                >
                  Crafting Unforgettable Visual Stories
                </h3>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: activePreset.textSecondary }}>
                  "When visual identity, precise typography, and color psychology align, brand authority becomes effortless."
                </p>
              </div>

              {/* Sample Card Box */}
              <div
                className="p-5 rounded-xl border space-y-3"
                style={{
                  backgroundColor: activePreset.cardBg,
                  borderColor: activePreset.accentHex + '30',
                }}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span style={{ color: activePreset.accentHex }}>✦ Brand Component #01</span>
                  <span style={{ color: activePreset.textSecondary }}>2026 Edition</span>
                </div>
                <p className="text-sm font-bold" style={{ color: activePreset.textPrimary }}>
                  Premium Packaging & Digital Collateral Suite
                </p>
              </div>
            </div>

            <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: activePreset.accentHex + '20' }}>
              <span className="text-xs font-mono" style={{ color: activePreset.textSecondary }}>
                Need a custom brand palette?
              </span>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg text-xs font-bold font-mono transition-transform hover:scale-105"
                style={{
                  backgroundColor: activePreset.accentHex,
                  color: '#0a0a0c',
                }}
              >
                Request Custom Brand Kit →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
