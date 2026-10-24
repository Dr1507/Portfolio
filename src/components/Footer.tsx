import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14181C] border-t border-[#2D3740] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Logo Wordmark */}
          <div className="flex items-center gap-1">
            <span className="font-mono text-[#00E5D4] font-semibold text-sm">
              &lt;C/&gt;
            </span>
            <span className="font-display font-medium text-white">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[#64748B] font-mono text-[11px]">
              · Frontend Developer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-[#94A3B8]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 hover:text-[#00E5D4] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 hover:text-[#00E5D4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1 hover:text-[#00E5D4] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
