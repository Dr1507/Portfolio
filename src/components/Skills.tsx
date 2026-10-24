import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  GitBranch, 
  Terminal, 
  Globe, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface TechSkill {
  name: string;
  category: string;
  color: string;
  level: string;
}

const TECH_STACK: TechSkill[] = [
  { name: 'React', category: 'Frontend', color: '#61DAFB', level: 'Advanced' },
  { name: 'JavaScript', category: 'Core Language', color: '#F7DF1E', level: 'Advanced' },
  { name: 'HTML', category: 'Frontend', color: '#E34F26', level: 'Expert' },
  { name: 'CSS', category: 'Frontend', color: '#1572B6', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#38BDF8', level: 'Advanced' },
  { name: 'Node.js', category: 'Backend', color: '#68A063', level: 'Proficient' },
  { name: 'Express.js', category: 'Backend Framework', color: '#FFFFFF', level: 'Proficient' },
  { name: 'MongoDB', category: 'Database', color: '#47A248', level: 'Proficient' },
  { name: 'Redux', category: 'State Management', color: '#764ABC', level: 'Proficient' },
  { name: 'Git', category: 'Version Control', color: '#F05032', level: 'Advanced' },
  { name: 'GitHub', category: 'Collaboration', color: '#FFFFFF', level: 'Advanced' },
];

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<TechSkill>(TECH_STACK[0]);

  return (
    <section id="skills" className="py-20 relative bg-[#1B2025] border-b border-[#2D3740]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with </ > symbol inspired by reference */}
        <div className="flex flex-col items-center mb-12">
          {/* Connector pin from top */}
          <div className="w-px h-8 bg-[#00E5D4]/40" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#00E5D4] bg-[#1B2025] mb-2" />
          
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Skills
            </h2>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#00E5D4] ml-3 tracking-tighter">
              &lt;/&gt;
            </span>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] text-center mt-2">
            I am thinking to never stop learning and improving
          </p>
        </div>

        {/* Dual Primary Specialization Cards (Web Development & Backend Architecture) matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
          
          <div className="bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/50 rounded-xl p-6 text-center transition-all duration-300 shadow-lg group">
            <div className="w-10 h-10 rounded-lg bg-[#20272E] border border-[#2D3740] mx-auto flex items-center justify-center text-[#00E5D4] group-hover:scale-110 transition-transform mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Web Development
            </h3>
            <p className="text-xs font-mono text-[#94A3B8] mt-1">
              React, Redux, Tailwind CSS & Modern Web
            </p>
          </div>

          <div className="bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/50 rounded-xl p-6 text-center transition-all duration-300 shadow-lg group">
            <div className="w-10 h-10 rounded-lg bg-[#20272E] border border-[#2D3740] mx-auto flex items-center justify-center text-[#00E5D4] group-hover:scale-110 transition-transform mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Backend & Database
            </h3>
            <p className="text-xs font-mono text-[#94A3B8] mt-1">
              Node.js, Express.js, MongoDB & RESTful APIs
            </p>
          </div>

        </div>

        {/* Minimal Visually Attractive Technology Circular / Pill Icons matching reference design */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TECH_STACK.map((tech) => {
              const isSelected = activeSkill.name === tech.name;
              return (
                <button
                  key={tech.name}
                  onClick={() => setActiveSkill(tech)}
                  className={`group relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl bg-[#252D34] border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#00E5D4] bg-[#20272E] shadow-[0_0_20px_rgba(0,229,212,0.25)] scale-105'
                      : 'border-[#2D3740] hover:border-[#00E5D4]/40 hover:-translate-y-1'
                  }`}
                >
                  {/* Circular Icon Pill with brand color badge */}
                  <div 
                    className="w-12 h-12 rounded-full bg-[#1B2025] border border-[#2D3740] flex items-center justify-center text-sm font-bold font-mono transition-transform group-hover:scale-105"
                    style={{ color: tech.color }}
                  >
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>

                  <span className="text-xs font-medium text-[#E2E8F0] group-hover:text-white">
                    {tech.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Skill Selected Details Bar */}
          <div className="mt-10 max-w-xl mx-auto p-4 rounded-xl bg-[#252D34] border border-[#2D3740] flex items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#00E5D4] shadow-[0_0_8px_#00E5D4]" />
              <div>
                <span className="font-display font-semibold text-white text-sm">
                  {activeSkill.name}
                </span>
                <span className="text-xs font-mono text-[#94A3B8] block">
                  {activeSkill.category}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-medium text-[#00E5D4] px-3 py-1 rounded bg-[#1B2025] border border-[#2D3740]">
              {activeSkill.level}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
