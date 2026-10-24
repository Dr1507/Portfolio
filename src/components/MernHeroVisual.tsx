import React, { useState } from 'react';
import { Database, Server, Cpu, Atom, Play, CheckCircle2, Copy, Check } from 'lucide-react';

export const MernHeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'react' | 'express' | 'mongo'>('architecture');
  const [isSimulating, setIsSimulating] = useState(false);
  const [reqStatus, setReqStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const simulateRequest = () => {
    setIsSimulating(true);
    setReqStatus('Dispatching HTTP POST /api/v1/auth/verify...');
    setTimeout(() => {
      setReqStatus('Middleware passed · Token validated · MongoDB query 1.2ms');
    }, 400);
    setTimeout(() => {
      setReqStatus('200 OK · Payload delivered in 14ms');
      setIsSimulating(false);
    }, 900);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    react: `// Client-Side Custom Hook
export function useQuizSession(quizId: string) {
  const [session, setSession] = useState<QuizState | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    api.get(\`/quizzes/\${quizId}/session\`, {
      headers: { Authorization: \`Bearer \${token}\` }
    }).then(res => setSession(res.data));
  }, [quizId, token]);

  return { session, isLocked: session?.isLocked };
}`,
    express: `// REST Controller & Auth Middleware
router.post('/quizzes/:id/submit',
  verifyJWT,
  checkAttemptLimit,
  async (req: AuthRequest, res: Response) => {
    const { answers, timeSpent } = req.body;
    const score = await gradeQuizAtomic(req.params.id, answers);
    
    await StudentRecord.create({
      userId: req.user.id,
      score,
      timeSpent,
      verifiedAt: new Date()
    });

    return res.status(200).json({ success: true, score });
  }
);`,
    mongo: `// MongoDB Aggregation & Mongoose Schema
const QuizSchema = new Schema({
  title: { type: String, required: true, trim: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'User' },
  questions: [{
    text: String,
    options: [String],
    correctIdx: Number,
    points: { type: Number, default: 1 }
  }],
  settings: {
    durationMinutes: Number,
    maxAttempts: { type: Number, default: 1 }
  }
}, { timestamps: true });

QuizSchema.index({ creatorId: 1, createdAt: -1 });`
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient Midnight Glow Backdrop */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#A78BFA]/10 rounded-full blur-[70px] pointer-events-none" />

      {/* Main Glass Console Card */}
      <div className="relative rounded-2xl bg-[#11182E]/80 border border-[#232F54] shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#A78BFA]/50 transition-all duration-300">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161F3B] border-b border-[#232F54]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 font-mono text-xs text-[#94A3B8] tracking-tight">mern-stack-engine.tsx</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#A78BFA] bg-[#7C3AED]/15 px-2.5 py-0.5 rounded-full border border-[#A78BFA]/30 shadow-[0_0_10px_rgba(124,58,237,0.25)]">
              MERN • Production Grade
            </span>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-1 px-3 pt-2 bg-[#121931] border-b border-[#232F54] overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-[#11182E] text-[#A78BFA] border-t-2 border-[#A78BFA] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'react'
                ? 'bg-[#11182E] text-[#A78BFA] border-t-2 border-[#A78BFA] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Atom className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>React.js</span>
          </button>
          <button
            onClick={() => setActiveTab('express')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'express'
                ? 'bg-[#11182E] text-[#A78BFA] border-t-2 border-[#A78BFA] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Express / API</span>
          </button>
          <button
            onClick={() => setActiveTab('mongo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'mongo'
                ? 'bg-[#11182E] text-[#A78BFA] border-t-2 border-[#A78BFA] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>MongoDB</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 font-mono text-xs">
          {activeTab === 'architecture' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[#94A3B8] text-[11px] pb-2 border-b border-[#232F54]">
                <span>MERN PIPELINE ORCHESTRATION</span>
                <span className="text-[#A78BFA]">Full Stack Verified</span>
              </div>

              {/* Visual Architecture Flow Grid */}
              <div className="grid grid-cols-3 gap-3">
                {/* Client Box */}
                <div className="p-3 rounded-xl bg-[#161F3B]/80 border border-[#232F54] text-center hover:border-[#A78BFA]/50 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#7C3AED]/20 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA]">
                    <Atom className="w-4 h-4" />
                  </div>
                  <div className="text-[#F8FAFC] font-semibold text-xs">React UI</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Redux + Tailwind</div>
                </div>

                {/* Server Box */}
                <div className="p-3 rounded-xl bg-[#161F3B]/80 border border-[#232F54] text-center hover:border-[#A78BFA]/50 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#7C3AED]/20 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA]">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="text-[#F8FAFC] font-semibold text-xs">Node & Express</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">REST + JWT Auth</div>
                </div>

                {/* Database Box */}
                <div className="p-3 rounded-xl bg-[#161F3B]/80 border border-[#232F54] text-center hover:border-[#A78BFA]/50 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#7C3AED]/20 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA]">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-[#F8FAFC] font-semibold text-xs">MongoDB</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Mongoose Models</div>
                </div>
              </div>

              {/* Interactive Request Simulator */}
              <div className="p-3.5 rounded-xl bg-[#131931] border border-[#232F54] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#94A3B8]">Interactive Pipeline Simulator</span>
                  <button
                    onClick={simulateRequest}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-sans font-medium text-white bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] active:scale-95 disabled:opacity-50 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.35)]"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isSimulating ? 'Processing...' : 'Test Request'}</span>
                  </button>
                </div>

                <div className="p-2.5 rounded bg-[#0A0E1D] border border-[#1D2746] text-[11px] leading-relaxed">
                  <div className="text-[#94A3B8]">
                    <span className="text-[#A78BFA] font-semibold">POST</span> /api/v1/projects/query
                  </div>
                  <div className="text-emerald-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#A78BFA]" />
                    <span>{reqStatus || 'System Ready · Zero bottlenecks detected'}</span>
                  </div>
                </div>
              </div>

              {/* Key Competency Metric Row */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#161F3B]/90 border border-[#232F54]">
                  <span className="text-[#94A3B8] block text-[10px]">Degree</span>
                  <span className="text-[#F8FAFC] font-semibold">MSc IT (2026)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#161F3B]/90 border border-[#232F54]">
                  <span className="text-[#94A3B8] block text-[10px]">Internship</span>
                  <span className="text-[#A78BFA] font-semibold">6 Mos MERN</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#161F3B]/90 border border-[#232F54]">
                  <span className="text-[#94A3B8] block text-[10px]">Work Stacks</span>
                  <span className="text-[#F8FAFC] font-semibold">React + Node</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#94A3B8] text-[11px]">
                <span>REAL PRODUCTION LOGIC</span>
                <button
                  onClick={() => handleCopy(codeSnippets[activeTab])}
                  className="flex items-center gap-1 text-[#A78BFA] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#090D1A] border border-[#1D2746] overflow-x-auto text-[#E2E8F0] leading-relaxed text-[11px] max-h-56">
                <pre>{codeSnippets[activeTab]}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Console Status Bar */}
        <div className="px-4 py-2.5 bg-[#141C38] border-t border-[#232F54] flex items-center justify-between text-[11px] text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_8px_#A78BFA] animate-pulse" />
            <span className="text-[#E2E8F0]">Drashti Patel · Available for Hire</span>
          </div>
          <span className="font-mono text-[#94A3B8]">v2.6 MERN Release</span>
        </div>
      </div>
    </div>
  );
};
