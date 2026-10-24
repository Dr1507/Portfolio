import React from 'react';
import { QrCode, Layers, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'quiz-management-system',
    title: 'Role-Based Quiz Management System',
    badge: 'Full-Stack MERN',
    shortDescription:
      'A responsive assessment and quiz management platform featuring drag-and-drop question ordering, bulk CSV/Excel parsing, timer attempt limits, instant auto-scoring, and JWT-authenticated dashboards.',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: PERSONAL_INFO.github,
  },
  {
    id: 'location-qr',
    title: 'Location QR Generator',
    badge: 'React.JS',
    shortDescription:
      'A responsive React application that turns any address or Google Maps link into a scannable, downloadable QR code. Features glassmorphic styling, instant dynamic QR encoding, and a native Save As PNG export flow.',
    technologies: ['React.JS', 'JavaScript', 'qrcode.react', 'Tailwind CSS', 'Canvas API'],
    githubUrl: PERSONAL_INFO.github,
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 relative bg-[#1B2025] border-b border-[#2D3740]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-px h-4 bg-[#00E5D4]/40" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#00E5D4] bg-[#1B2025] mb-1.5" />
          
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Work
            </h2>
            <span className="font-mono text-xl font-bold text-[#00E5D4] ml-2 tracking-tighter">
              &lt;/&gt;
            </span>
          </div>

          <p className="text-xs font-mono text-[#94A3B8] text-center mt-1">
            Selected development projects highlighting modern architecture and clean code
          </p>
        </div>

        {/* 2 Focused Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 shadow-lg group hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                {/* Top Badge & Code Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1B2025] text-[#00E5D4] border border-[#2D3740]">
                    {project.badge}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#20272E] border border-[#2D3740] flex items-center justify-center text-[#00E5D4] group-hover:bg-[#00E5D4] group-hover:text-[#14181C] transition-colors">
                    {project.id === 'location-qr' ? (
                      <QrCode className="w-3.5 h-3.5" />
                    ) : (
                      <Layers className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#00E5D4] transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies & Links Footer */}
              <div className="mt-4 pt-3 border-t border-[#2D3740] flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B2025] text-[#CBD5E1] border border-[#2D3740]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00E5D4] hover:underline shrink-0"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
