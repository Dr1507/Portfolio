import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Atom, 
  Code, 
  Layers, 
  Palette, 
  Layout, 
  Sparkles, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  HardDrive, 
  GitBranch, 
  Github, 
  Send, 
  Terminal,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    highlight: string;
    category: string;
  }>({
    name: 'React.js',
    level: 'Advanced',
    highlight: 'Hooks, Context API, Redux Toolkit, Custom Hooks, Component Lifecycle, Performance Optimization',
    category: 'Frontend Engineering'
  });

  return (
    <section id="skills" className="py-24 bg-[#0B1020] border-b border-[#232F54] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#232F54]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA]">
              02 // Technical Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F8FAFC] mt-2">
              SKILLS & MODERN STACK.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-sm">
            Core competencies across the Full-Stack MERN spectrum and modern engineering tools.
          </p>
        </div>

        {/* Selected Skill Inspector Highlight Bar (Glass Card) */}
        <div className="mb-12 p-5 rounded-2xl glass-card border-[#A78BFA]/30 shadow-[0_0_30px_rgba(124,58,237,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA] shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">{selectedSkill.category}</span>
                <span className="text-xs text-[#64748B]">·</span>
                <span className="text-xs font-mono text-[#A78BFA] font-semibold">{selectedSkill.level}</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">{selectedSkill.name}</h3>
            </div>
          </div>

          <div className="md:max-w-xl text-xs text-[#CBD5E1] leading-relaxed bg-[#0B0F1F] p-3.5 rounded-xl border border-[#232F54]">
            <span className="text-[#94A3B8] font-mono block mb-1">Production Applications & Strengths:</span>
            {selectedSkill.highlight}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl glass-card p-6 flex flex-col justify-between hover:border-[#A78BFA]/40 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-4 border-b border-[#232F54]">
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1 line-clamp-1">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills / Interactive Items */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill({ ...skill, category: category.title })}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          isSelected
                            ? 'bg-[#1E294B] border border-[#A78BFA] shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                            : 'bg-[#141C38]/60 border border-[#232F54] hover:border-[#A78BFA]/40 hover:bg-[#1A2548]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-1.5 rounded-lg transition-colors ${
                              isSelected
                                ? 'text-[#A78BFA] bg-[#7C3AED]/25 shadow-sm'
                                : 'text-[#94A3B8] group-hover:text-[#A78BFA] group-hover:bg-[#7C3AED]/15'
                            }`}
                          >
                            {iconMap[skill.icon] || <Code className="w-5 h-5" />}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-[#F8FAFC] block leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                            isSelected
                              ? 'text-white bg-[#7C3AED] font-semibold shadow-sm'
                              : 'text-[#94A3B8] bg-[#0E152B]'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#232F54]/60 text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* MERN Architecture Synergy Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]">M</span>
            <div className="text-xs font-semibold text-white mt-1">MongoDB</div>
            <div className="text-[11px] text-[#94A3B8]">Document Collections & Aggregations</div>
          </div>
          <div className="p-3">
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]">E</span>
            <div className="text-xs font-semibold text-white mt-1">Express.js</div>
            <div className="text-[11px] text-[#94A3B8]">RESTful Routing & Middleware</div>
          </div>
          <div className="p-3">
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]">R</span>
            <div className="text-xs font-semibold text-white mt-1">React.js</div>
            <div className="text-[11px] text-[#94A3B8]">Declarative Reactive State & UI</div>
          </div>
          <div className="p-3">
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]">N</span>
            <div className="text-xs font-semibold text-white mt-1">Node.js</div>
            <div className="text-[11px] text-[#94A3B8]">Asynchronous Server Runtime</div>
          </div>
        </div>

      </div>
    </section>
  );
};
