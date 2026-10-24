import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B16] border-t border-[#1C2644] py-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C2644]">
          
          {/* Brand & Personal Signature */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-extrabold text-xl text-white tracking-tight">
              {PERSONAL_INFO.name}
              <span className="text-[#A78BFA]">.</span>
            </div>
            <p className="text-xs text-[#94A3B8] italic">
              &ldquo;Designed with curiosity. Built with code.&rdquo;
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#11182E] hover:bg-[#1A2342] hover:text-[#A78BFA] border border-[#232F54] transition-colors shadow-xs"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#11182E] hover:bg-[#1A2342] hover:text-[#A78BFA] border border-[#232F54] transition-colors shadow-xs"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-[#11182E] hover:bg-[#1A2342] hover:text-[#A78BFA] border border-[#232F54] transition-colors shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#11182E] hover:bg-[#1A2342] hover:text-[#A78BFA] border border-[#232F54] text-xs transition-colors cursor-pointer ml-2 shadow-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>MSc IT Graduate (July 2026)</span>
            <span>·</span>
            <span className="text-[#A78BFA] font-medium">MERN Stack Developer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
