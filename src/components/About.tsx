import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2 } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  color: string;
}

const SKILLS_LIST: TechItem[] = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'JavaScript', category: 'Language', color: '#F7DF1E' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#38BDF8' },
  { name: 'Redux', category: 'State', color: '#764ABC' },
  { name: 'HTML5', category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6' },
  { name: 'Node.js', category: 'Backend', color: '#68A063' },
  { name: 'Express.js', category: 'Backend', color: '#FFFFFF' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'Git & GitHub', category: 'Tools', color: '#F05032' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 relative bg-topo-pattern border-t border-b border-[#2D3740]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outlined Pill Section Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-px h-4 bg-[#00E5D4]/40" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#00E5D4] bg-[#1B2025] mb-1.5" />
          
          <div className="px-5 py-1 rounded-full border border-[#00E5D4] bg-[#252D34]/80 text-[#00E5D4] font-display font-medium text-sm tracking-wide shadow-[0_0_12px_rgba(0,229,212,0.2)]">
            About Me
          </div>
        </div>

        {/* 2-Column Layout: Left Narrative Terminal Card + Right Skills Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch max-w-5xl mx-auto">
          
          {/* Left: About Me Terminal Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#252D34]/90 border border-[#2D3740] rounded-2xl p-5 shadow-xl backdrop-blur-sm flex flex-col justify-between space-y-3">
            <div>
              {/* Window Controls */}
              <div className="flex items-center gap-2 pb-2.5 border-b border-[#2D3740] mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                <span className="text-[11px] font-mono text-[#94A3B8] ml-2">about.tsx</span>
              </div>

              <div className="font-mono text-xs text-[#00E5D4] mb-1">
                &lt;p&gt;
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1.5">
                Hello!
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                <p>
                  My name is <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong>, a <span className="text-[#00E5D4] font-medium">Frontend Developer</span> specializing in building intuitive, high-performance web applications using <span className="text-white font-medium">React, JavaScript, and modern styling solutions</span>.
                </p>

                <p>
                  I recently graduated with a <strong className="text-white font-medium">Master of Science in Information Technology (MSc IT)</strong> and completed a hands-on <strong className="text-white font-medium">six-month internship</strong>, turning UI designs into clean, responsive, and accessible code.
                </p>
              </div>

              <div className="font-mono text-xs text-[#00E5D4] mt-1.5">
                &lt;/p&gt;
              </div>
            </div>

            {/* Quick Stat Tags */}
            <div className="pt-2.5 border-t border-[#2D3740]/60 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#1B2025] text-[#00E5D4] border border-[#2D3740]">
                Frontend Developer
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#1B2025] text-[#94A3B8] border border-[#2D3740]">
                MSc IT Graduate
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#1B2025] text-[#94A3B8] border border-[#2D3740]">
                React & UI Architecture
              </span>
            </div>
          </div>

          {/* Right: Technical Skills Overview Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#252D34]/90 border border-[#2D3740] rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#2D3740] mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#00E5D4]" />
                  <h4 className="font-display font-bold text-white text-sm">
                    Core Skills
                  </h4>
                </div>
                <span className="font-mono text-[11px] text-[#00E5D4] bg-[#1B2025] px-2 py-0.5 rounded border border-[#2D3740]">
                  &lt;/&gt;
                </span>
              </div>

              {/* Grid of skill pills */}
              <div className="grid grid-cols-2 gap-1.5">
                {SKILLS_LIST.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-1.5 rounded-lg bg-[#1B2025] border border-[#2D3740] flex items-center gap-2 hover:border-[#00E5D4]/40 transition-colors"
                  >
                    <div 
                      className="w-5 h-5 rounded bg-[#20272E] border border-[#2D3740] flex items-center justify-center text-[9px] font-bold font-mono shrink-0"
                      style={{ color: skill.color }}
                    >
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-medium text-white truncate">
                        {skill.name}
                      </span>
                      <span className="block text-[9px] font-mono text-[#64748B] truncate">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="pt-2 border-t border-[#2D3740]/60 flex items-center justify-between text-[11px] text-[#94A3B8]">
              <span className="font-mono">Pixel-Perfect UI</span>
              <span className="font-mono text-[#00E5D4] font-medium">Modern Web Apps</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
