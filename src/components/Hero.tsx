import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#00E5D4]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Large "Developer" Heading across the top - matching reference */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white inline-flex items-center gap-2">
            Developer
          </h1>
          <div className="w-12 h-1 bg-[#00E5D4] mx-auto mt-2 rounded-full shadow-[0_0_12px_#00E5D4]" />
        </div>

        {/* Multi-Panel Grid Layout: Left Profile Badge Card, Middle Intro, Right Metric Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-5xl mx-auto">
          
          {/* Panel 1: Profile ID Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[290px] bg-[#252D34] border border-[#2D3740] reference-card-shape p-5 shadow-2xl relative transition-all duration-300 hover:border-[#00E5D4]/40">
              
              {/* Profile Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-20 h-20 rounded-full p-1 border-2 border-[#00E5D4] shadow-[0_0_15px_rgba(0,229,212,0.4)] bg-[#1B2025] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#20272E] to-[#14181C] flex items-center justify-center text-white">
                      <span className="font-display font-bold text-2xl tracking-tight text-[#00E5D4]">
                        DP
                      </span>
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#00E5D4] border-2 border-[#252D34]" />
                </div>

                {/* Identity Name & Role: Frontend Developer */}
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-[#00E5D4] mt-0.5 font-medium">
                  Frontend Developer
                </p>

                {/* Email Direct Link */}
                <div className="w-full mt-3 pt-3 border-t border-[#2D3740] flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8]">
                  <Mail className="w-3.5 h-3.5 text-[#00E5D4] shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-white transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* Quick Social Badges on the Card */}
                <div className="w-full mt-3 flex items-center justify-center gap-2 pt-3 border-t border-[#2D3740]">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-xl bg-[#20272E] hover:bg-[#00E5D4] hover:text-[#14181C] text-white border border-[#2D3740] text-xs font-mono transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-xl bg-[#20272E] hover:bg-[#00E5D4] hover:text-[#14181C] text-white border border-[#2D3740] text-xs font-mono transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Center Narrative "Hey I'm Drashti, Frontend Developer" */}
          <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
            <div className="font-mono text-xs text-[#00E5D4] flex items-center justify-center lg:justify-start gap-1">
              <span>&lt;h1&gt;</span>
            </div>

            <div>
              <p className="text-sm font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                Hey
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                I&apos;m <span className="text-[#00E5D4] text-accent-glow">Drashti</span>,<br />
                Frontend Developer
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto lg:mx-0">
              I build fast, responsive, and pixel-perfect web interfaces with modern architecture. Specialized in creating interactive experiences using React, TypeScript, and Tailwind CSS.
            </p>

            <div className="font-mono text-xs text-[#00E5D4] flex items-center justify-center lg:justify-start gap-1">
              <span>&lt;/h1&gt;</span>
            </div>
          </div>

          {/* Panel 3: Right Stacked Metric Badges matching reference */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col justify-center items-center gap-2.5">
            <div className="bg-[#252D34] border border-[#2D3740] p-3 rounded-xl text-center w-28 shadow-lg">
              <span className="font-mono text-xl font-bold text-[#00E5D4] block">
                React
              </span>
              <span className="text-[11px] font-mono text-[#94A3B8] leading-tight block mt-1">
                Frontend Focus
              </span>
            </div>

            <div className="bg-[#252D34] border border-[#2D3740] p-3 rounded-xl text-center w-28 shadow-lg">
              <span className="font-mono text-xl font-bold text-[#00E5D4] block">
                6 Mos
              </span>
              <span className="text-[11px] font-mono text-[#94A3B8] leading-tight block mt-1">
                Internship
              </span>
            </div>

            <div className="bg-[#252D34] border border-[#2D3740] p-3 rounded-xl text-center w-28 shadow-lg">
              <span className="font-mono text-xl font-bold text-[#00E5D4] block">
                MSc
              </span>
              <span className="text-[11px] font-mono text-[#94A3B8] leading-tight block mt-1">
                IT Degree
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
