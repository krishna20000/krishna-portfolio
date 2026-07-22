'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle2, TrendingUp, Cpu, Award, Target, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bridging Software Rigor & <span className="gradient-text-primary">Data Intelligence</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            How manual testing precision evolved into business data storytelling and analytical decision frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Card Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8CFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#4F8CFF] to-[#8B5CF6] p-[1px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#4F8CFF]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Krishna Mehta</h3>
                <p className="text-xs text-slate-400 font-mono">Data & BI Professional</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5A8]" />
                  <span>Data Precision</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">QA mindset guarantees clean, validated metrics.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <TrendingUp className="w-4 h-4 text-[#4F8CFF]" />
                  <span>Business Impact</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Translating raw numbers into executive action.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Cpu className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Automated Workflows</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Python & SQL scripts for quick reporting cycles.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Continuous Learner</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Constantly mastering new BI & ML techniques.</p>
              </div>
            </div>

          </motion.div>

          {/* Evolution Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#00E5A8]" />
              <span>Career Evolution Timeline</span>
            </h3>

            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              {PORTFOLIO_DATA.aboutTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-[#4F8CFF] group-hover:border-[#00E5A8] group-hover:scale-125 transition-all" />

                  <div className="glass-card-hover rounded-xl p-5 border border-white/5">
                    <span className="text-xs font-mono font-semibold text-[#4F8CFF] bg-[#4F8CFF]/10 px-2.5 py-1 rounded-md">
                      {item.year}
                    </span>
                    <h4 className="text-base font-semibold text-white mt-2 group-hover:text-[#00E5A8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* QA to Analytics Value Proposition Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#4F8CFF]/10 via-[#8B5CF6]/10 to-transparent border border-[#4F8CFF]/20 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#00E5A8] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">The QA Advantage in Data</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Unlike pure analysts, my QA background ensures every SQL join is audited, every DAX measure handles null anomalies, and dashboards pass strict acceptance criteria before executive presentation.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
