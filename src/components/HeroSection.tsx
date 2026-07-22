'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, BarChart2, Sparkles, ChevronRight, ShieldCheck, Database, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import StatCounter from './StatCounter';

const ROLES = [
  "Data Analyst",
  "Business Intelligence Specialist",
  "Power BI Dashboard Architect",
  "SQL & Python Data Engineer",
  "Data Quality & QA Specialist"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('resume');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5A8]"></span>
            </span>
            <span className="text-xs font-mono text-slate-300">
              {PORTFOLIO_DATA.personal.availability}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </motion.div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Transforming Data Into{' '}
            <span className="gradient-text-primary">
              Business Decisions.
            </span>
          </motion.h1>

          {/* Typing Ticker Sub-role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-8 flex items-center justify-center gap-2 font-mono text-sm sm:text-base text-[#4F8CFF]"
          >
            <Database className="w-4 h-4 text-[#00E5A8]" />
            <span className="text-slate-400">Focus:</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="font-semibold text-[#00E5A8] underline decoration-[#00E5A8]/40 underline-offset-4"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {PORTFOLIO_DATA.personal.subtitle}
          </motion.p>

          {/* Action Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3a7beb] hover:to-[#7949e0] rounded-xl shadow-lg shadow-[#4F8CFF]/25 transition-all duration-300 hover:scale-[1.03] group cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#resume"
              onClick={handleScrollToResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-300 hover:scale-[1.03] glass-card"
            >
              <FileText className="w-4 h-4 text-[#4F8CFF]" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Quick Tech Badge Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400"
          >
            <span className="text-slate-500 mr-1">TECH STACK:</span>
            {['Power BI', 'SQL', 'Python (Pandas)', 'Advanced Excel', 'DAX', 'Jira QA'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Key Metrics / Stat Counters Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <StatCounter value={8} suffix="+" label="Interactive Dashboards Built" />
          <StatCounter value={250} suffix="K+" label="Data Points Processed" />
          <StatCounter value={99.8} suffix="%" decimals={1} label="Data Accuracy & QA Precision" />
          <StatCounter value={12} suffix="+" label="Automated ETL Pipelines" />
        </motion.div>

      </div>
    </section>
  );
}
