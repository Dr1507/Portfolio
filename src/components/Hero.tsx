import React from 'react';
import { ArrowUpRight, Download, Sparkles, ChevronDown } from 'lucide-react';
import { MernHeroVisual } from './MernHeroVisual';

interface HeroProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreWork }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-midnight-grid bg-midnight-gradient">
      
      {/* Top Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#A78BFA]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Qualification & Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161F3B]/90 border border-[#232F54] text-xs font-mono text-[#E2E8F0] shadow-[0_0_15px_rgba(124,58,237,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_8px_#A78BFA] animate-pulse" />
              <span>MSc IT Graduate | MERN Stack Developer</span>
            </div>

            {/* Oversized Bold Headline (Space Grotesk) */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold uppercase tracking-tight text-[#F8FAFC] leading-[1.08] text-balance">
              I BUILD{' '}
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(167,139,250,0.5)]">
                DIGITAL EXPERIENCES
              </span>{' '}
              THAT MATTER.
            </h1>

            {/* Lead Description (Inter) */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              I transform ideas into modern, responsive, and scalable web applications using the MERN stack. Specialized in robust backend architectures, clean REST APIs, and high-performance React frontends.
            </p>

            {/* Availability Indicator */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#131931] border border-[#232F54] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span className="text-[#F8FAFC] font-medium">Available for Full-time Roles & Contracts</span>
              </div>
              <span className="hidden sm:inline text-[#64748B]">·</span>
              <span className="hidden sm:inline text-[#64748B]">Class of July 2026</span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onExploreWork}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] active:scale-95 transition-all duration-200 rounded-xl shadow-[0_0_25px_rgba(124,58,237,0.45)] hover:shadow-[0_0_35px_rgba(167,139,250,0.65)] cursor-pointer border border-[#A78BFA]/30"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#F8FAFC] bg-[#161F3B]/80 hover:bg-[#1E294B] border border-[#232F54] hover:border-[#A78BFA]/50 active:scale-95 transition-all duration-200 rounded-xl cursor-pointer shadow-lg backdrop-blur-md"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-[#A78BFA] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Micro Experience Proof */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#94A3B8]">
              <div>
                <span className="font-mono font-bold text-sm text-[#F8FAFC]">6 Mos</span>
                <span className="block text-[11px] text-[#64748B]">MERN Internship</span>
              </div>
              <div className="h-6 w-px bg-[#232F54]" />
              <div>
                <span className="font-mono font-bold text-sm text-[#F8FAFC]">10+</span>
                <span className="block text-[11px] text-[#64748B]">Live Projects</span>
              </div>
              <div className="h-6 w-px bg-[#232F54]" />
              <div>
                <span className="font-mono font-bold text-sm text-[#A78BFA]">MSc IT</span>
                <span className="block text-[11px] text-[#64748B]">Postgraduate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Architecture Console */}
          <div className="lg:col-span-5">
            <MernHeroVisual />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-center pt-8 pb-4">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[#64748B] hover:text-[#A78BFA] transition-colors group cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#A78BFA]" />
        </a>
      </div>

      {/* Scrolling Text Strip Marquee: BUILD • CREATE • INNOVATE • REPEAT */}
      <div className="w-full bg-[#0E152B]/90 backdrop-blur-md border-y border-[#232F54] py-3.5 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display font-bold tracking-widest text-xs uppercase text-[#94A3B8]">
          {Array.from({ length: 12 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="hover:text-[#A78BFA] transition-colors">BUILD</span>
              <span className="text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">✦</span>
              <span className="hover:text-[#A78BFA] transition-colors">CREATE</span>
              <span className="text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">✦</span>
              <span className="hover:text-[#A78BFA] transition-colors">INNOVATE</span>
              <span className="text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">✦</span>
              <span className="hover:text-[#A78BFA] transition-colors">REPEAT</span>
              <span className="text-[#A78BFA] drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};
