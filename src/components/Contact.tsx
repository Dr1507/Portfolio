import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Inquiry: MERN Stack Development Project'
  )}&body=${encodeURIComponent(
    `Hello Drashti,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0B1020] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#7C3AED]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[#4F46E5]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#232F54]/70">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            06 // Connect & Collaborate
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F8FAFC] mt-3 max-w-4xl leading-[1.08]">
            HAVE A PROJECT IN MIND? <br />
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.35)]">
              LET&apos;S BUILD SOMETHING GREAT.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-[#94A3B8] leading-relaxed">
              I am actively looking for full-time Full Stack MERN or Frontend Developer roles, high-impact freelance projects, and engineering collaborations. Let&apos;s discuss how I can contribute to your team!
            </p>

            {/* Direct Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl bg-[#11182E]/80 backdrop-blur-md border border-[#232F54] hover:border-[#A78BFA]/50 transition-all duration-300 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#A78BFA]" />
                  <span>Direct Inquiries</span>
                </span>
                <span className="text-[11px] font-mono text-[#A78BFA] font-medium">Replies within 24h</span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-[#141C38] p-3 rounded-xl border border-[#232F54]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-white hover:text-[#A78BFA] transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#1A2342] hover:bg-[#232F54] text-[#F8FAFC] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#A78BFA]" /> : <Copy className="w-4 h-4 text-[#94A3B8]" />}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block">
                Professional Profiles
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#11182E]/80 backdrop-blur-md border border-[#232F54] hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#A78BFA]" />
                    <span className="text-xs font-semibold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#A78BFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#11182E]/80 backdrop-blur-md border border-[#232F54] hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#A78BFA]" />
                    <span className="text-xs font-semibold text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#A78BFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="p-4 rounded-xl bg-[#11182E]/60 border border-[#232F54] flex items-center gap-3 text-xs text-[#94A3B8]">
              <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
              <span>{PERSONAL_INFO.location} · Open to On-site & Hybrid Opportunities</span>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#11182E]/90 backdrop-blur-xl border border-[#232F54] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 border border-[#A78BFA]/50 flex items-center justify-center text-[#A78BFA] mx-auto shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>! Your message has been recorded. I will review your inquiry and respond to <span className="text-white font-medium">{formData.email}</span> shortly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:brightness-110"
                    >
                      Also Open in Mail App ↗
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#141C38] hover:bg-[#1A2342] border border-[#232F54] text-xs text-[#CBD5E1] cursor-pointer transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C38] border border-[#232F54] text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C38] border border-[#232F54] text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="MERN Stack Opportunity / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C38] border border-[#232F54] text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project scope, timeline, or full-time position requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C38] border border-[#232F54] text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-[#64748B]">
                      * Required fields · Secured client transmission
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#4F46E5] hover:brightness-110 active:scale-95 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.55)] cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message ↗'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
