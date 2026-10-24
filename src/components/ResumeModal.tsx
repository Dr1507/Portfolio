import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { X, Printer, Download, Mail, Github, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#1B2025] border border-[#2D3740] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-[#252D34] border-b border-[#2D3740] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5D4] shadow-[0_0_8px_#00E5D4]" />
            <span className="font-mono text-xs text-white font-semibold">
              Resume // Drashti Patel — MERN Stack Developer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00E5D4] text-[#14181C] hover:bg-[#14F5E4] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,212,0.3)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#20272E] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#1B2025] text-[#CBD5E1] text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-[#2D3740] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-black text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-mono text-xs text-[#00E5D4] mt-1 font-semibold uppercase tracking-wider">
                  {PERSONAL_INFO.title} · MSc IT Graduate
                </p>
                <p className="text-xs text-[#94A3B8] mt-2 max-w-xl leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="space-y-1 font-mono text-xs text-[#94A3B8] sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00E5D4]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#00E5D4]">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00E5D4]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Internship Section */}
          <div className="space-y-4">
            <h2 className="font-display text-base font-bold text-white uppercase tracking-wider border-b border-[#2D3740] pb-2 text-[#00E5D4]">
              Experience & Education
            </h2>

            <div className="space-y-6">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display font-bold text-white text-sm">
                      {item.title} <span className="font-normal text-[#94A3B8]">| {item.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-[#00E5D4]">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-[#94A3B8]">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-4">
            <h2 className="font-display text-base font-bold text-white uppercase tracking-wider border-b border-[#2D3740] pb-2 text-[#00E5D4]">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-xl bg-[#252D34] border border-[#2D3740]">
                  <h4 className="font-display font-semibold text-white text-xs mb-2">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B2025] text-[#CBD5E1] border border-[#2D3740]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
