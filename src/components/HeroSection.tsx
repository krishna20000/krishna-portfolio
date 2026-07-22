'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ChevronRight, Download, ShieldCheck, FileText, Eye } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import ResumeModal from './ResumeModal';

export default function HeroSection() {
  const [downloaded, setDownloaded] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    try {
      confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    setDownloaded(true);

    const link = document.createElement('a');
    link.href = '/Krishna_Mehta_Resume.pdf';
    link.download = 'Krishna_Mehta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden min-h-[85vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5A8]"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {PORTFOLIO_DATA.personal.availability}
              </span>
            </motion.div>

            {/* Name & Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Transforming Data Into{' '}
              <span className="gradient-text-primary">
                Business Decisions.
              </span>
            </motion.h1>

            {/* Role Title Subheader */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-1 text-sm sm:text-base font-mono text-[#00E5A8] flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="px-3 py-1 rounded-md bg-[#00E5A8]/10 border border-[#00E5A8]/20 font-semibold">
                Data Analyst
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-md bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] font-semibold">
                Business Intelligence
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] font-semibold">
                Power BI | Excel | SQL | Python
              </span>
            </motion.div>

            {/* Subtitle / Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal pt-1"
            >
              {PORTFOLIO_DATA.personal.subtitle}
            </motion.p>

            {/* BOTH Preview Resume & Download Resume Buttons Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl shadow-lg shadow-[#4F8CFF]/25 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#00E5A8]/50 rounded-xl transition-all duration-300 hover:scale-[1.02] glass-card cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00E5A8]" />
                <span>Preview Resume</span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#4F8CFF]/50 rounded-xl transition-all duration-300 hover:scale-[1.02] glass-card cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#4F8CFF]" />
                <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
              </button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 mr-1">CORE TOOLS:</span>
              {['Power BI', 'Excel & Power Query', 'SQL', 'Python', 'Manual QA Testing', 'Git/GitHub'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-md bg-slate-800/80 border border-white/5 text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Photo Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] via-[#8B5CF6] to-[#00E5A8] rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />

              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden glass-card border-2 border-white/20 p-2 shadow-2xl">
                <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={PORTFOLIO_DATA.personal.photoUrl}
                    alt="Krishna Mehta - Data Analyst"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Krishna Mehta</div>
                      <div className="text-[10px] font-mono text-[#00E5A8]">QA Background ➔ Data Analytics</div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-[#4F8CFF]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Resume Preview Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

      </div>
    </section>
  );
}
