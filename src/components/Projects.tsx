import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack MERN' | 'React.js'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-[#0B1020] border-b border-[#232F54] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#232F54]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA]">
              03 // Featured Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F8FAFC] mt-2">
              FEATURED PROJECTS.
            </h2>
          </div>

          {/* Filter Tabs (Interactive Segmented Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#141C38] rounded-xl border border-[#232F54] self-start md:self-auto">
            {(['All', 'Full-Stack MERN', 'React.js'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab
                    ? 'bg-[#1E294B] text-[#A78BFA] font-semibold border border-[#A78BFA]/30 shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Projects' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-card hover:border-[#A78BFA]/50 transition-all duration-300 overflow-hidden shadow-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                
                {/* Left/Details Column */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Unboxed Metadata (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                    <span className="text-[#A78BFA] font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F8FAFC]">{project.metrics}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Tech List */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#94A3B8]">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-[#161F3B] border border-[#232F54] text-[#E2E8F0]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] border border-[#A78BFA]/30"
                    >
                      <span>Interactive Demo & Details</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161F3B] hover:bg-[#202B50] border border-[#232F54] text-xs font-semibold text-white transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right/Visual Mockup Column */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative rounded-2xl bg-[#0B0F1F] border border-[#232F54] p-5 cursor-pointer group-hover:border-[#A78BFA]/50 transition-all overflow-hidden shadow-inner"
                  >
                    {/* Visual Mockup Renderer based on Project */}
                    {project.id === 'quiz-management-system' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#1E2746] text-[11px] text-[#94A3B8]">
                          <span className="flex items-center gap-1.5 text-[#A78BFA]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Role-Based Exam Dashboard</span>
                          </span>
                          <span>Admin / Candidate Matrix</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#141C38] border border-[#1E2746] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[#F8FAFC] font-semibold text-xs">Full-Stack MERN Assessment</span>
                            <span className="text-[10px] text-[#A78BFA] bg-[#7C3AED]/20 border border-[#A78BFA]/30 px-2.5 py-0.5 rounded-full">Timed: 30m</span>
                          </div>
                          <div className="text-[11px] text-[#94A3B8]">
                            • Bulk CSV Ingestion: <span className="text-white">Active (120 questions)</span><br />
                            • Attempt Lockout: <span className="text-white">Strict 1 per user</span><br />
                            • Result Notifications: <span className="text-white">Automated via Nodemailer</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2.5 rounded-lg bg-[#121931] border border-[#1E2746]">
                            <span className="text-[#94A3B8] block text-[10px]">Submission State</span>
                            <span className="text-emerald-400 font-semibold">Atomic DB Write</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#121931] border border-[#1E2746]">
                            <span className="text-[#94A3B8] block text-[10px]">Auth Protocol</span>
                            <span className="text-[#A78BFA] font-semibold">JWT + Role Guard</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 'homico-service-booking' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#1E2746] text-[11px] text-[#94A3B8]">
                          <span className="flex items-center gap-1.5 text-[#A78BFA]">
                            <Layers className="w-3.5 h-3.5" />
                            <span>HOMICO Booking State Machine</span>
                          </span>
                          <span>Dual-Role Dispatch</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                          <div className="p-2 rounded-lg bg-[#141C38] border border-[#1E2746]">
                            <div className="text-[#A78BFA] font-bold">Plumbing</div>
                            <span className="text-[#94A3B8]">Verified Tech</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#141C38] border border-[#1E2746]">
                            <div className="text-[#A78BFA] font-bold">Electrical</div>
                            <span className="text-[#94A3B8]">Instant Slot</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#141C38] border border-[#1E2746]">
                            <div className="text-[#A78BFA] font-bold">Cleaning</div>
                            <span className="text-[#94A3B8]">Scheduled</span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#141C38] border border-[#1E2746] text-[11px] space-y-1">
                          <div className="flex justify-between text-[#94A3B8]">
                            <span>Workflow Pipeline:</span>
                            <span className="text-[#A78BFA]">Status: Confirmed</span>
                          </div>
                          <div className="w-full bg-[#121931] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] h-full w-3/4" />
                          </div>
                          <div className="flex justify-between text-[10px] text-[#64748B]">
                            <span>Request</span>
                            <span>Provider Assigned</span>
                            <span>In-Service</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 'location-qr-generator' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#1E2746] text-[11px] text-[#94A3B8]">
                          <span className="flex items-center gap-1.5 text-[#A78BFA]">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Dynamic Geolocation Canvas</span>
                          </span>
                          <span>Real-time Generation</span>
                        </div>
                        <div className="flex items-center gap-4 p-3.5 bg-[#141C38] rounded-xl border border-[#1E2746]">
                          <div className="w-16 h-16 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                            <div className="w-full h-full bg-[#0B1020] flex items-center justify-center text-[#A78BFA]">
                              <MapPin className="w-6 h-6 text-[#A78BFA]" />
                            </div>
                          </div>
                          <div className="text-[11px] text-[#94A3B8] space-y-0.5">
                            <span className="text-white font-semibold block text-xs">Geo-URI Deep Link</span>
                            <span>Lat: 23.0225° N · Lng: 72.5714° E</span>
                            <span className="text-[#A78BFA] block text-[10px]">Zero External Telemetry · Client Canvas</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hover Click Hint */}
                    <div className="mt-3 text-center text-[11px] font-mono text-[#64748B] group-hover:text-[#A78BFA] transition-colors">
                      Click to explore interactive sandbox & architecture →
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
