'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, BookOpen, Target, Calendar, ArrowDown, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const TIMELINE_FLOW = [
  {
    role: "Software Developer Trainee",
    company: "AccioJob",
    period: "Oct 2024 — May 2025",
    color: "#4F8CFF",
    desc: "Built full-stack web projects & structured problem-solving foundation."
  },
  {
    role: "Junior Frontend Developer",
    company: "Devfrend Web Solutions",
    period: "May 2025 — June 2025",
    color: "#8B5CF6",
    desc: "Translated wireframes into responsive code with reduced UI rework."
  },
  {
    role: "Frontend Developer",
    company: "WhatBytes",
    period: "Sept 2025 — Nov 2025",
    color: "#4F8CFF",
    desc: "Built responsive UI components & self-tested code before QA handoff."
  },
  {
    role: "Manual QA Tester",
    company: "WhatBytes",
    period: "Sept 2025 — March 2026",
    color: "#00E5A8",
    desc: "Analyzed functional behavior, defect tracking & structured data reports."
  },
  {
    role: "Data Analytics & Business Intelligence",
    company: "Current Focus",
    period: "2026 — Present",
    color: "#00E5A8",
    desc: "Building interactive Power BI dashboards, SQL queries, and Excel models."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Aspiring Data Analyst & <span className="gradient-text-primary">Problem Solver</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Leveraging software testing precision to uncover patterns and create executive BI dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Story Card (Increased line height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-5 text-slate-300 text-sm leading-relaxed sm:leading-7"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F8CFF] to-[#8B5CF6] p-[1px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#4F8CFF]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">My Analytics Journey</h3>
                <p className="text-xs text-[#00E5A8] font-mono">Software Quality Assurance ➔ Data Analytics</p>
              </div>
            </div>

            {PORTFOLIO_DATA.personal.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {/* Core Strengths Highlights */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Strengths & Mindset
              </h4>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.coreStrengths.map((strength) => (
                  <span key={strength} className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-white/10 text-slate-200">
                    ✓ {strength}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Career Evolution Flow Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00E5A8]" />
                <span>Career Evolution Path</span>
              </h3>

              {/* Node Flow Timeline */}
              <div className="space-y-3">
                {TIMELINE_FLOW.map((node, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-[#4F8CFF]/40 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: node.color }}
                        />
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#4F8CFF] transition-colors">
                            {node.role}
                          </div>
                          <div className="text-xs text-slate-400">
                            {node.company} <span className="text-slate-600">•</span> <span className="text-[11px] font-mono text-slate-400">{node.desc}</span>
                          </div>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded shrink-0">
                        {node.period}
                      </span>
                    </motion.div>

                    {/* Arrow Node Separator */}
                    {index < TIMELINE_FLOW.length - 1 && (
                      <div className="flex justify-center my-1">
                        <ArrowDown className="w-4 h-4 text-slate-600 animate-bounce" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div id="education" className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Education Timeline</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2 py-0.5 rounded">
                        {edu.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#4F8CFF]">{edu.timeline}</span>
                    </div>
                    <div className="text-xs font-bold text-white pt-1">{edu.degree}</div>
                    <div className="text-[11px] text-slate-400">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
