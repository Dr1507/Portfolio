import React, { useState } from 'react';
import { ShieldCheck, UserCheck, FileSpreadsheet, Clock, Award, CheckCircle2, RotateCcw } from 'lucide-react';

export const InteractiveQuizDemo: React.FC = () => {
  const [role, setRole] = useState<'candidate' | 'admin'>('candidate');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [importedCount, setImportedCount] = useState(45);
  const [isSimulatingImport, setIsSimulatingImport] = useState(false);

  const sampleQuestion = {
    title: 'MERN Stack & MongoDB Aggregation',
    question: 'In MongoDB, which pipeline operator is used to perform a left outer join to an unsharded collection in the same database?',
    options: [
      '$mergeWith',
      '$lookup',
      '$unwind',
      '$project'
    ],
    correctIdx: 1,
    explanation: '$lookup performs an equality match between a field from the input documents with a field from the documents of the "joined" collection.'
  };

  const handleImportSample = () => {
    setIsSimulatingImport(true);
    setTimeout(() => {
      setImportedCount((prev) => prev + 15);
      setIsSimulatingImport(false);
    }, 600);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
  };

  return (
    <div className="p-6 rounded-2xl glass-card border-[#232F54] space-y-6">
      {/* Role Switcher Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#232F54]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#A78BFA]" />
          <span className="font-display font-bold text-white text-base">
            Role-Based Quiz System Simulator
          </span>
        </div>

        {/* Role Toggle Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#141C38] rounded-xl border border-[#232F54] self-start sm:self-auto">
          <button
            onClick={() => setRole('candidate')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              role === 'candidate'
                ? 'bg-[#1E294B] text-[#A78BFA] border border-[#A78BFA]/30 shadow-sm font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Candidate View</span>
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              role === 'admin'
                ? 'bg-[#1E294B] text-[#A78BFA] border border-[#A78BFA]/30 shadow-sm font-semibold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Admin / Excel Ingestion</span>
          </button>
        </div>
      </div>

      {role === 'candidate' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Time Remaining: 14:32 min</span>
            </span>
            <span className="text-[#A78BFA] bg-[#7C3AED]/20 border border-[#A78BFA]/30 px-2.5 py-0.5 rounded-full">
              Attempt 1 of 1 (Strict Lockout)
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#141C38] border border-[#232F54]">
            <span className="text-[11px] font-mono text-[#A78BFA] uppercase block mb-1">
              {sampleQuestion.title}
            </span>
            <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              {sampleQuestion.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {sampleQuestion.options.map((opt, idx) => {
              let btnClass = 'bg-[#141C38]/80 border-[#232F54] text-[#E2E8F0] hover:border-[#A78BFA]/40';
              if (selectedOption === idx && !submitted) {
                btnClass = 'bg-[#1E294B] border-[#A78BFA] text-white shadow-[0_0_15px_rgba(124,58,237,0.25)]';
              } else if (submitted) {
                if (idx === sampleQuestion.correctIdx) {
                  btnClass = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                } else if (selectedOption === idx) {
                  btnClass = 'bg-rose-950/40 border-rose-500 text-rose-200';
                }
              }

              return (
                <button
                  key={opt}
                  disabled={submitted}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px] font-mono shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {submitted && idx === sampleQuestion.correctIdx && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            {submitted ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-xs">
                  <Award className="w-4 h-4 text-[#A78BFA]" />
                  <span className="font-semibold text-white">
                    {selectedOption === sampleQuestion.correctIdx ? 'Score: +1.0 (Correct!)' : 'Score: 0.0 (Incorrect)'}
                  </span>
                  <span className="text-[#94A3B8] hidden sm:inline">· Instant Email Notification Queued</span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-[#A78BFA] hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] text-[#94A3B8]">
                  Select an answer to evaluate backend scoring
                </span>
                <button
                  disabled={selectedOption === null}
                  onClick={() => setSubmitted(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer"
                >
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Admin Ingestion View */
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#141C38] border border-[#232F54] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#A78BFA] block mb-1">
                CSV / Excel Ingestion Pipeline
              </span>
              <h4 className="text-sm font-semibold text-white font-display">
                Bulk Question Parser (NPM xlsx & fast-csv)
              </h4>
              <p className="text-xs text-[#94A3B8] mt-1">
                Currently loaded in database: <strong className="text-white">{importedCount} questions</strong> across 3 categories.
              </p>
            </div>

            <button
              onClick={handleImportSample}
              disabled={isSimulatingImport}
              className="px-3.5 py-2 rounded-xl bg-[#1A2548] hover:bg-[#223160] border border-[#2B3B6B] text-xs font-medium text-[#F8FAFC] flex items-center gap-2 cursor-pointer transition-colors self-start sm:self-auto shrink-0"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#A78BFA]" />
              <span>{isSimulatingImport ? 'Parsing Sheets...' : '+ Import 15 Questions (.xlsx)'}</span>
            </button>
          </div>

          {/* Sample Database Ingestion Rows */}
          <div className="border border-[#232F54] rounded-xl overflow-hidden text-xs">
            <div className="bg-[#141C38] px-4 py-2 text-[#94A3B8] font-mono grid grid-cols-12 gap-2 text-[11px]">
              <span className="col-span-1">ID</span>
              <span className="col-span-6">Question Text</span>
              <span className="col-span-3">Category</span>
              <span className="col-span-2 text-right">Difficulty</span>
            </div>
            <div className="divide-y divide-[#232F54] bg-[#0E152B]">
              <div className="px-4 py-2.5 grid grid-cols-12 gap-2 text-white items-center">
                <span className="col-span-1 font-mono text-[#94A3B8]">#101</span>
                <span className="col-span-6 truncate">In MongoDB, which pipeline operator joins collections?</span>
                <span className="col-span-3 text-[#94A3B8]">Database</span>
                <span className="col-span-2 text-right text-[#A78BFA] font-mono">Medium</span>
              </div>
              <div className="px-4 py-2.5 grid grid-cols-12 gap-2 text-white items-center">
                <span className="col-span-1 font-mono text-[#94A3B8]">#102</span>
                <span className="col-span-6 truncate">What does useEffect with empty dependency array signify?</span>
                <span className="col-span-3 text-[#94A3B8]">React.js</span>
                <span className="col-span-2 text-right text-emerald-400 font-mono">Easy</span>
              </div>
              <div className="px-4 py-2.5 grid grid-cols-12 gap-2 text-white items-center">
                <span className="col-span-1 font-mono text-[#94A3B8]">#103</span>
                <span className="col-span-6 truncate">Explain the difference between process.nextTick and setImmediate</span>
                <span className="col-span-3 text-[#94A3B8]">Node.js</span>
                <span className="col-span-2 text-right text-amber-400 font-mono">Hard</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
