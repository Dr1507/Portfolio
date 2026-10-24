import React from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { InteractiveQrDemo } from './InteractiveQrDemo';
import { InteractiveQuizDemo } from './InteractiveQuizDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B1020]/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0E152B] border border-[#232F54] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#141C38] border-b border-[#232F54] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-[#64748B]">·</span>
              <span className="text-xs font-mono text-[#94A3B8]">{project.role}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1A2548] text-[#94A3B8] hover:text-white hover:bg-[#23315D] transition-colors cursor-pointer border border-[#2B3B6B]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Interactive Live Feature Demo Embed */}
          {project.id === 'location-qr-generator' && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-3">
                Live Interactive Sandbox
              </h4>
              <InteractiveQrDemo />
            </div>
          )}

          {project.id === 'quiz-management-system' && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-3">
                Live Interactive Sandbox
              </h4>
              <InteractiveQuizDemo />
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#141C38] border border-[#232F54]">
              <span className="text-xs font-mono uppercase text-rose-400 font-semibold block mb-2">
                Problem Statement
              </span>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141C38] border border-[#232F54]">
              <span className="text-xs font-mono uppercase text-[#A78BFA] font-semibold block mb-2">
                Architectural Solution
              </span>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2 font-display">
              <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#121931] border border-[#232F54] text-xs text-[#CBD5E1] flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2 font-display">
              <Cpu className="w-4 h-4 text-[#A78BFA]" />
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#161F3B] border border-[#232F54] text-xs font-mono text-[#E2E8F0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics / Proof Adjacency */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-[#141C38] border border-[#A78BFA]/30 text-xs flex items-center justify-between">
              <span className="text-[#94A3B8] font-mono">Performance Metric</span>
              <span className="text-[#A78BFA] font-mono font-semibold">{project.metrics}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#141C38] border-t border-[#232F54] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A2548] hover:bg-[#23315D] border border-[#2B3B6B] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.35)]"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
