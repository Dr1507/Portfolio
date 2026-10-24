import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'showcase', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Showcase', id: 'showcase' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1020]/80 backdrop-blur-xl border-b border-[#232F54]/60 py-3.5 shadow-[0_4px_30px_rgba(11,16,32,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="group flex items-center text-xl font-bold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0"
            aria-label="Drashti Patel Home"
          >
            <span className="font-display font-bold text-2xl tracking-tighter">
              DP<span className="text-[#A78BFA] inline-block transition-transform duration-200 group-hover:scale-125 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">.</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F8FAFC] ${
                    isActive ? 'text-[#A78BFA] font-semibold' : 'text-[#94A3B8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Standout Let's Talk CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] active:scale-95 transition-all duration-200 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] whitespace-nowrap shrink-0 cursor-pointer border border-[#A78BFA]/30"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#94A3B8] hover:text-[#A78BFA] hover:bg-[#161F3B] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E152B]/95 backdrop-blur-2xl border-b border-[#232F54] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className={`py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-[#A78BFA] bg-[#161F3B] font-semibold'
                    : 'text-[#E2E8F0] hover:text-white hover:bg-[#161F3B]/60'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#232F54]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
