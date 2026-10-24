import React, { useState } from 'react';
import { LIVE_SHOWCASE_SITES } from '../data/portfolioData';
import { ShowcaseSite } from '../types/portfolio';
import { ExternalLink, Globe, Edit2, Check, Sparkles } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [sites, setSites] = useState<ShowcaseSite[]>(LIVE_SHOWCASE_SITES);
  const [filter, setFilter] = useState<'All' | 'React.js' | 'WordPress'>('All');
  const [editingUrlId, setEditingUrlId] = useState<string | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState('');

  const filteredSites = sites.filter((site) => {
    if (filter === 'All') return true;
    return site.technology === filter;
  });

  const startEditUrl = (site: ShowcaseSite) => {
    setEditingUrlId(site.id);
    setCustomUrlInput(site.liveUrl);
  };

  const saveUrl = (id: string) => {
    setSites((prev) =>
      prev.map((s) => (s.id === id ? { ...s, liveUrl: customUrlInput } : s))
    );
    setEditingUrlId(null);
  };

  return (
    <section id="showcase" className="py-24 bg-[#0B1020] border-b border-[#232F54]/70 relative overflow-hidden">
      {/* Subtle purple ambiance glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#232F54]/70">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              05 // Web Development Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F8FAFC] mt-2">
              LIVE WEBSITE SHOWCASE<span className="text-[#A78BFA]">.</span>
            </h2>
          </div>

          {/* Technology Group Filters */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#11182E] rounded-xl border border-[#232F54] self-start md:self-auto shadow-inner">
            {(['All', 'React.js', 'WordPress'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white font-semibold shadow-[0_0_15px_rgba(124,58,237,0.35)]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#182344]'
                }`}
              >
                {tab === 'All' ? 'All Websites (9)' : `${tab} (${sites.filter(s => s.technology === tab).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => {
            const isEditing = editingUrlId === site.id;

            return (
              <div
                key={site.id}
                className="rounded-2xl bg-[#11182E]/80 backdrop-blur-md border border-[#232F54] hover:border-[#A78BFA]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(124,58,237,0.18)]"
              >
                <div>
                  {/* Thumbnail Preview Area with Midnight Gradient Aesthetic */}
                  <div className="relative h-44 bg-gradient-to-br from-[#141C38] via-[#0E1428] to-[#121934] border-b border-[#232F54] p-5 flex flex-col justify-between overflow-hidden">
                    {/* Background Subtle Wireframe Graphic */}
                    <div className="absolute inset-0 bg-midnight-dots opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#7C3AED]/15 rounded-full blur-2xl group-hover:bg-[#7C3AED]/25 transition-all" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#A78BFA] bg-[#0B1020]/80 px-2.5 py-1 rounded-md border border-[#7C3AED]/30 font-semibold shadow-xs">
                        {site.technology}
                      </span>
                      <span className="text-[11px] font-mono text-[#94A3B8] bg-[#0B1020]/80 px-2.5 py-1 rounded-md border border-[#232F54]">
                        {site.category}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
                        {site.name}
                      </h3>
                      <span className="text-xs font-mono text-[#94A3B8]">
                        Client: {site.client}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                      {site.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono text-[#64748B] block uppercase tracking-wider">Key Contributions:</span>
                      {site.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0 shadow-[0_0_6px_rgba(167,139,250,0.6)]" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link & Editable Controls */}
                <div className="p-5 pt-3 bg-[#0E1428]/90 border-t border-[#232F54] space-y-2">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={customUrlInput}
                        onChange={(e) => setCustomUrlInput(e.target.value)}
                        className="flex-1 px-2.5 py-1.5 text-xs rounded-lg bg-[#141C38] border border-[#232F54] text-white focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
                        placeholder="https://example.com"
                      />
                      <button
                        onClick={() => saveUrl(site.id)}
                        className="p-1.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white hover:brightness-110 transition-all cursor-pointer shadow-sm"
                        title="Save URL"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <a
                        href={site.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[#F8FAFC] hover:text-[#A78BFA] font-semibold transition-colors group/link cursor-pointer"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-[#94A3B8] group-hover/link:text-[#A78BFA]" />
                      </a>

                      <button
                        onClick={() => startEditUrl(site)}
                        className="text-[11px] text-[#64748B] hover:text-[#A78BFA] flex items-center gap-1 transition-colors cursor-pointer"
                        title="Edit project URL"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit URL</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
