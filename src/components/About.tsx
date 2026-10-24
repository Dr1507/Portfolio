import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1020] border-b border-[#232F54] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#232F54]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA]">
              01 // Background & Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F8FAFC] mt-2">
              ENGINEERING RESILIENT <br className="hidden sm:inline" />
              FULL-STACK SYSTEMS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-xs">
            MSc IT Graduate · 6-Month MERN Stack Intern · Frontend & API Specialist
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#CBD5E1] text-base leading-relaxed">
            <p className="text-xl sm:text-2xl font-light text-[#F8FAFC] leading-snug">
              Hello! I&apos;m <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>, a passionate{' '}
              <span className="text-[#A78BFA] font-medium">Full Stack MERN Developer</span> with a strong foundation in modern frontend architecture and scalable backend services.
            </p>

            <p>
              I recently completed my <strong className="text-white font-medium">Master of Science in Information Technology (MSc IT) in July 2026</strong>, complementing academic rigor with a hands-on <strong className="text-white font-medium">six-month full-time MERN Stack internship</strong>. During my internship, I developed and shipped real-world features across production codebases, mastering the interplay between responsive client interfaces, RESTful API controllers, and resilient database schemas.
            </p>

            <p>
              My development philosophy focuses on crafting intuitive, high-performance web applications that eliminate user friction. Whether designing stateful React components with Redux Toolkit, crafting responsive layouts with Tailwind CSS, or writing atomic MongoDB aggregation pipelines in Node.js and Express, I take pride in clean code structure and real-world reliability.
            </p>

            {/* Core Commitments (Glass Cards) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white font-display">Clean Code & Architecture</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">Modular components, reusable custom hooks, and well-structured MVC backend patterns.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white font-display">Pixel-Perfect Responsiveness</h4>
                  <p className="text-xs text-[#94A3B8] mt-1">Flawless behavior across mobile screens, tablets, laptops, and ultra-wide desktops.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats & Focus Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Animated Stat Grid (Glassmorphism & Tabular Numerals) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-card-interactive">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#A78BFA] tabular-nums drop-shadow-[0_0_12px_rgba(167,139,250,0.4)]">
                  06
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] mt-1">
                  Months MERN Internship
                </div>
                <div className="text-[11px] text-[#64748B] mt-1">Full-stack production work</div>
              </div>

              <div className="p-5 rounded-2xl glass-card-interactive">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tabular-nums">
                  Jul 2026
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] mt-1">
                  MSc IT Degree
                </div>
                <div className="text-[11px] text-[#64748B] mt-1">Postgraduate completed</div>
              </div>

              <div className="p-5 rounded-2xl glass-card-interactive">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tabular-nums">
                  10+
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] mt-1">
                  Web Applications
                </div>
                <div className="text-[11px] text-[#64748B] mt-1">Production & client sites</div>
              </div>

              <div className="p-5 rounded-2xl glass-card-interactive">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#A78BFA] tabular-nums drop-shadow-[0_0_12px_rgba(167,139,250,0.4)]">
                  100%
                </div>
                <div className="text-xs uppercase font-medium tracking-wider text-[#94A3B8] mt-1">
                  Responsive UI
                </div>
                <div className="text-[11px] text-[#64748B] mt-1">Semantic & accessible</div>
              </div>
            </div>

            {/* Technical Focus Pillar Box */}
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                Primary Engineering Focus
              </h3>
              
              <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Full-Stack Web Development with React, Node, Express & MongoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Stateful single-page applications using Redux Toolkit and Context</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Secure JWT Authentication, Password Hashing & Role-Based Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Responsive UI Design, CSS Grid/Flexbox, and Tailwind systems</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
