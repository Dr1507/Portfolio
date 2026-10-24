import React from 'react';
import { PERSONAL_INFO, FEATURED_PROJECTS, SKILL_CATEGORIES, EXPERIENCE_TIMELINE } from '../data/portfolioData';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070B16]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B1020] border border-[#232F54] rounded-2xl shadow-[0_0_50px_rgba(124,58,237,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-[#11182E] border-b border-[#232F54] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="font-mono text-xs text-[#F8FAFC] font-semibold">
              Resume // Drashti Patel — Full Stack MERN Developer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:brightness-110 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.4)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1A2342] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B1020] text-[#CBD5E1] text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-[#232F54] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-black text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-mono text-xs text-[#A78BFA] mt-1 font-semibold uppercase tracking-wider">
                  {PERSONAL_INFO.title} · Frontend Specialist
                </p>
              </div>

              <div className="text-left sm:text-right space-y-1 font-mono text-xs text-[#94A3B8]">
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.location}</div>
                <div>github.com/drashtipatel · linkedin.com/in/drashtipatel</div>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#94A3B8] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold border-b border-[#232F54] pb-1.5">
              Education
            </h2>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-white text-sm">
                  Master of Science in Information Technology (MSc IT)
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Gujarat, India · Specialized in Advanced Web Architectures & Database Systems
                </p>
              </div>
              <span className="font-mono text-xs text-[#A78BFA] font-semibold whitespace-nowrap">
                Graduated: July 2026
              </span>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold border-b border-[#232F54] pb-1.5">
              Professional Experience
            </h2>

            {EXPERIENCE_TIMELINE.filter(e => e.type === 'internship').map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    {exp.period} ({exp.duration})
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-[#CBD5E1] list-disc list-inside">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Key Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold border-b border-[#232F54] pb-1.5">
              Key Engineering Projects
            </h2>

            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-white text-sm">
                      {proj.title} <span className="font-normal text-xs text-[#94A3B8]">({proj.category})</span>
                    </h3>
                    <span className="font-mono text-[11px] text-[#A78BFA]">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold border-b border-[#232F54] pb-1.5">
              Technical Core Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#11182E] border border-[#232F54]">
                <strong className="text-white block mb-1">Frontend:</strong>
                <span className="text-[#94A3B8]">React.js, JavaScript (ES6+), Redux Toolkit, Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-[#11182E] border border-[#232F54]">
                <strong className="text-white block mb-1">Backend:</strong>
                <span className="text-[#94A3B8]">Node.js, Express.js, RESTful APIs, JWT Authentication, MVC Pattern</span>
              </div>
              <div className="p-3 rounded-xl bg-[#11182E] border border-[#232F54]">
                <strong className="text-white block mb-1">Databases:</strong>
                <span className="text-[#94A3B8]">MongoDB, Mongoose ODM, Document Modeling, Aggregations</span>
              </div>
              <div className="p-3 rounded-xl bg-[#11182E] border border-[#232F54]">
                <strong className="text-white block mb-1">Developer Tools:</strong>
                <span className="text-[#94A3B8]">Git, GitHub, npm, Postman, VS Code, Vite</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
