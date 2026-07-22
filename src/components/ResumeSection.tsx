'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, Eye, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Trigger festive celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback
    }

    setDownloaded(true);

    // Simulated download payload
    const element = document.createElement('a');
    const file = new Blob([
      `KRISHNA MEHTA - DATA ANALYST & BI PROFESSIONAL\n` +
      `Email: ${PORTFOLIO_DATA.personal.email}\n` +
      `Location: ${PORTFOLIO_DATA.personal.location}\n\n` +
      `SUMMARY:\n${PORTFOLIO_DATA.personal.subtitle}\n\n` +
      `TECHNICAL SKILLS:\nPower BI, SQL, Python (Pandas), Advanced Excel, DAX, Quality Assurance, Manual Testing\n\n` +
      `EXPERIENCE:\nManual QA Tester @ Whatbytes Technologies (2022 - Present)\n\n` +
      `CERTIFICATIONS:\nGoogle Data Analytics, Power BI Associate PL-300, Excel Expert, SQL Master`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Krishna_Mehta_Data_Analyst_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="resume" className="py-20 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Resume & <span className="gradient-text-accent">Professional Summary</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Download or view a complete overview of qualifications, data projects, technical stack, and software QA experience.
          </p>
        </div>

        {/* Large Premium Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F8CFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Resume Document Preview Visual */}
            <div className="md:col-span-5 bg-slate-900/90 rounded-2xl p-5 border border-white/10 shadow-inner flex flex-col justify-between h-80 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4F8CFF]" />
                  <span className="font-bold text-white">KM_Resume.pdf</span>
                </div>
                <span className="text-[10px] text-[#00E5A8] bg-[#00E5A8]/10 px-2 py-0.5 rounded">PDF 2026</span>
              </div>

              <div className="space-y-2.5 my-auto text-[11px] text-slate-400 leading-tight">
                <div className="font-bold text-slate-200 text-xs">KRISHNA MEHTA</div>
                <div className="text-[#4F8CFF]">Data Analyst | BI | Power BI | SQL | Python</div>
                <div className="h-[1px] bg-slate-800 my-2" />
                <div>▶ QA Tester @ Whatbytes Technologies (2022-Present)</div>
                <div>▶ Google Data Analytics & Power BI PL-300 Certified</div>
                <div>▶ 5+ Executive KPI Dashboards Engineered</div>
                <div>▶ 250K+ Transaction Rows Analyzed</div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                <span>Verified Clean Format</span>
                <span>Ready for ATS</span>
              </div>
            </div>

            {/* Right Information & Actions */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Executive Resume Package
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Tailored for Data Analyst, Business Intelligence, Data Engineering, and Analytics Specialist roles at technology and corporate enterprises.
                </p>
              </div>

              {/* Highlights Bullet Matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0" />
                  <span>ATS-Optimized Layout</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#4F8CFF] shrink-0" />
                  <span>Verified QA Accomplishments</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span>Project GitHub Links Included</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0" />
                  <span>Detailed Technical Toolkit</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl shadow-lg shadow-[#4F8CFF]/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloaded ? 'Resume Downloaded!' : 'Download Resume'}</span>
                </button>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#00E5A8]" />
                  <span>Request Full Dossier</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
