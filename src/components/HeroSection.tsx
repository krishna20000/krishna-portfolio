'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ChevronRight, FileText, Download, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function HeroSection() {
  const [downloaded, setDownloaded] = useState(false);

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

    const element = document.createElement('a');
    const file = new Blob([
      `KRISHNA MEHTA - DATA ANALYST & BI PROFESSIONAL\n` +
      `Email: ${PORTFOLIO_DATA.personal.email}\n` +
      `Location: ${PORTFOLIO_DATA.personal.location}\n\n` +
      `SUMMARY:\n${PORTFOLIO_DATA.personal.subtitle}\n\n` +
      `EDUCATION:\n` +
      `- MCA (Online), Jain University (2025 - 2027)\n` +
      `- BCA, Parul University (2022 - 2025)\n\n` +
      `EXPERIENCE:\n` +
      `- Manual QA Tester @ WhatBytes (Sept 2025 - March 2026)\n` +
      `- Frontend Developer @ WhatBytes (Sept 2025 - Nov 2025)\n` +
      `- Junior Frontend Developer @ Devfrend (May 2025 - June 2025)\n` +
      `- Software Developer Trainee @ AccioJob (Oct 2024 - May 2025)\n\n` +
      `PROJECTS:\n` +
      `- Sales Performance Dashboard (Power BI)\n` +
      `  Drive Link: https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Krishna_Mehta_Data_Analyst_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5A8]"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {PORTFOLIO_DATA.personal.availability}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
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
              className="mt-4 text-sm sm:text-base font-mono text-[#00E5A8] flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="px-2.5 py-1 rounded-md bg-[#00E5A8]/10 border border-[#00E5A8]/20">
                Data Analyst
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-2.5 py-1 rounded-md bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF]">
                Business Intelligence
              </span>
              <span className="text-slate-600">•</span>
              <span className="px-2.5 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6]">
                Power BI | Excel | SQL | Python
              </span>
            </motion.div>

            {/* Subtitle / Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {PORTFOLIO_DATA.personal.subtitle}
            </motion.p>

            {/* Call-to-Action Buttons (View Projects & Download Resume) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl shadow-lg shadow-[#4F8CFF]/25 transition-all duration-300 hover:scale-[1.03] group cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-300 hover:scale-[1.03] glass-card cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#00E5A8]" />
                <span>{downloaded ? 'Resume Downloaded!' : 'Download Resume'}</span>
              </button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 mr-1">CORE TOOLS:</span>
              {['Power BI', 'Excel & Power Query', 'SQL', 'Python', 'Manual QA Testing', 'Git/GitHub'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-slate-300"
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
              {/* Animated Backdrop Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] via-[#8B5CF6] to-[#00E5A8] rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Photo Frame Container */}
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
                  
                  {/* Photo Caption Badge */}
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

      </div>
    </section>
  );
}
