import React, { useState } from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Edit3, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  const [items, setItems] = useState(EXPERIENCE_TIMELINE);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdateField = (id: string, field: 'company' | 'period' | 'role', val: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <section id="experience" className="py-24 bg-[#0B1020] border-b border-[#232F54] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#232F54]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA]">
              04 // Career Milestones
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F8FAFC] mt-2">
              EXPERIENCE & EDUCATION.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-sm">
            Professional full-stack internship and advanced academic qualification.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-[#232F54] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {items.map((item) => {
            const isInternship = item.type === 'internship';
            const isEditing = editingId === item.id;

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isInternship
                      ? 'bg-[#0B1020] border-[#A78BFA] shadow-[0_0_15px_rgba(167,139,250,0.6)]'
                      : 'bg-[#0B1020] border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isInternship ? 'bg-[#A78BFA]' : 'bg-[#7C3AED]'}`} />
                </div>

                {/* Card Container (Glass Card) */}
                <div className="p-6 sm:p-8 rounded-2xl glass-card hover:border-[#A78BFA]/50 transition-all duration-300 shadow-xl space-y-4">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-[#7C3AED]/20 text-[#A78BFA] border border-[#A78BFA]/20">
                        {isInternship ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] font-semibold">
                        {item.duration}
                      </span>
                    </div>

                    {/* Quick Edit Toggle for personalization */}
                    <button
                      onClick={() => setEditingId(isEditing ? null : item.id)}
                      className="self-start sm:self-auto flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
                      title="Customize details"
                    >
                      {isEditing ? <Check className="w-3.5 h-3.5 text-[#A78BFA]" /> : <Edit3 className="w-3.5 h-3.5" />}
                      <span>{isEditing ? 'Done Editing' : 'Customize Info'}</span>
                    </button>
                  </div>

                  {/* Role & Company Details */}
                  <div>
                    {isEditing ? (
                      <div className="space-y-2 pt-1">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateField(item.id, 'role', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#141C38] border border-[#232F54] text-sm text-white focus:outline-none focus:border-[#A78BFA]"
                          placeholder="Title / Role"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={item.company}
                            onChange={(e) => handleUpdateField(item.id, 'company', e.target.value)}
                            className="px-3 py-1.5 rounded-lg bg-[#141C38] border border-[#232F54] text-xs text-white focus:outline-none focus:border-[#A78BFA]"
                            placeholder="Company / Institution"
                          />
                          <input
                            type="text"
                            value={item.period}
                            onChange={(e) => handleUpdateField(item.id, 'period', e.target.value)}
                            className="px-3 py-1.5 rounded-lg bg-[#141C38] border border-[#232F54] text-xs text-white focus:outline-none focus:border-[#A78BFA]"
                            placeholder="Period / Dates"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#94A3B8] font-mono mt-1">
                          <span className="text-[#F8FAFC] font-semibold">{item.company}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#A78BFA]" />
                            {item.period}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies footer */}
                  {item.technologies && (
                    <div className="pt-3 border-t border-[#232F54] flex flex-wrap gap-2 text-xs font-mono">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-[#161F3B] border border-[#232F54] text-[#E2E8F0]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
