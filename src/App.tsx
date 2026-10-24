import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1B2025] text-[#F8FAFC] selection:bg-[#00E5D4] selection:text-[#14181C] font-sans relative flex">


      {/* Reference-Inspired Left Sidebar Vertical Name Banner (Desktop 2xl and above) */}
      <aside 
        className="hidden xl:flex w-24 shrink-0 flex-col items-center justify-between py-8 bg-[#14181C] border-r border-[#2D3740] fixed top-0 bottom-0 left-0 z-30 select-none"
        aria-hidden="true"
      >
        {/* Top Mini Brand */}
        <div className="w-10 h-10 rounded-xl bg-[#252D34] border border-[#2D3740] flex items-center justify-center text-[#00E5D4] font-mono text-xs font-bold shadow-md">
          &lt;/&gt;
        </div>

        {/* Large Vertical Rotated Name (matching reference) */}
        <div className="transform -rotate-90 whitespace-nowrap tracking-wider">
          <span className="font-display font-extrabold text-3xl tracking-widest text-[#F8FAFC]/90">
            DrashtiPatel
          </span>
        </div>

        {/* Bottom Status Dot */}
        <div className="flex flex-col items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E5D4] shadow-[0_0_8px_#00E5D4] animate-pulse" />
          <span className="text-[10px] font-mono text-[#64748B]">DEV</span>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 xl:pl-24 w-full flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* About Me Section (Integrated with Core Skills on the right) */}
          <About />

          {/* Featured Projects (Only the 2 specified projects) */}
          <Projects />

          {/* Education & Experience Timeline (Compact 2-Column Grid) */}
          <Experience />
        </main>

        {/* Compact Footer */}
        <Footer />
      </div>
    </div>
  );
}
