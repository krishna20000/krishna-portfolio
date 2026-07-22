'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, BookOpen, Target, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

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
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Aspiring Data Analyst & <span className="gradient-text-primary">Problem Solver</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Leveraging software testing precision to uncover patterns and create executive BI dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden space-y-4 text-slate-300 text-sm leading-relaxed"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F8CFF] to-[#8B5CF6] p-[1px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#4F8CFF]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">My Journey into Data Analytics</h3>
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

          {/* Education Card Column */}
          <motion.div
            id="education"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400 font-mono">Academic Qualifications</p>
                </div>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-0.5 rounded">
                        {edu.badge}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-[#4F8CFF] bg-[#4F8CFF]/10 px-2.5 py-0.5 rounded">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.timeline}</span>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white pt-1">{edu.degree}</h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{edu.institution}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning Banner */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Currently Expanding Skillset</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PORTFOLIO_DATA.currentlyLearning.map((item) => (
                  <span key={item} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-white/5">
                    • {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
