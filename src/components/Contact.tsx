import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#1B2025]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00E5D4]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-px h-8 bg-[#00E5D4]/40" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#00E5D4] bg-[#1B2025] mb-2" />
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] text-center mt-2">
            Get in touch directly for engineering roles or collaboration
          </p>
        </div>

        {/* Clean Contact Cards (No form, direct contact channels) */}
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Email Card with 1-click Copy & Mailto Button */}
          <div className="p-6 rounded-2xl bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/40 transition-all duration-300 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00E5D4]" />
                <span>Direct Email Inquiries</span>
              </span>
              <span className="text-[11px] font-mono text-[#00E5D4]">Available for work</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1B2025] p-3.5 rounded-xl border border-[#2D3740]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-sm font-semibold text-white hover:text-[#00E5D4] transition-colors truncate"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252D34] hover:bg-[#20272E] text-xs font-mono text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00E5D4]" />
                      <span className="text-[#00E5D4]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00E5D4] hover:bg-[#14F5E4] text-xs font-mono font-semibold text-[#14181C] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="p-6 rounded-2xl bg-[#252D34] border border-[#2D3740] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5 text-white">
              <MapPin className="w-4 h-4 text-[#00E5D4]" />
              <span>Ahmedabad / Remote, India</span>
            </div>
            <div className="flex items-center gap-2 text-[#00E5D4]">
              <span className="w-2 h-2 rounded-full bg-[#00E5D4] shadow-[0_0_8px_#00E5D4] animate-pulse" />
              <span>Full-time Roles & Contracts</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/40 text-xs font-mono text-white hover:text-[#00E5D4] transition-all group shadow-md"
            >
              <Github className="w-4 h-4 text-[#00E5D4] group-hover:scale-110 transition-transform" />
              <span>GitHub Profile</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#252D34] border border-[#2D3740] hover:border-[#00E5D4]/40 text-xs font-mono text-white hover:text-[#00E5D4] transition-all group shadow-md"
            >
              <Linkedin className="w-4 h-4 text-[#00E5D4] group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
