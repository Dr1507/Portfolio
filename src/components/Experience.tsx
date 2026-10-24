import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 relative bg-[#1B2025] border-b border-[#2D3740]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-px h-4 bg-[#00E5D4]/40" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#00E5D4] bg-[#1B2025] mb-1.5" />
          
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Experience
          </h2>
          <p className="text-xs font-mono text-[#94A3B8] text-center mt-1">
            Academic qualifications & hands-on frontend web industry training
          </p>
        </div>

        {/* 2-Column Side-by-Side Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto items-stretch">
          {EXPERIENCE_TIMELINE.map((item) => {
            const isInternship = item.type === 'internship';
            return (
              <div
                key={item.id}
                className="bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/40 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-[#2D3740]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#20272E] border border-[#2D3740] flex items-center justify-center text-[#00E5D4] shrink-0">
                        {isInternship ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-mono text-[#00E5D4]">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#94A3B8] bg-[#1B2025] px-2 py-0.5 rounded border border-[#2D3740] shrink-0">
                      {item.period}
                    </span>
                  </div>

                  {/* Highlights (Compact) */}
                  <div className="mt-2.5 space-y-1.5 text-xs text-[#94A3B8]">
                    {item.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5D4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="mt-3 pt-2.5 border-t border-[#2D3740] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B2025] text-[#CBD5E1] border border-[#2D3740]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
