'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function CareerObjectiveSection() {
  return (
    <section id="objective" className="py-20 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] text-xs font-mono mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>CAREER VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career Objective & <span className="gradient-text-accent">Interests</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#4F8CFF]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Career Goal</h3>
                  <p className="text-xs text-[#00E5A8] font-mono">Entry-Level Data Analyst Aspirations</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-[#4F8CFF] pl-4 my-4">
                "{PORTFOLIO_DATA.personal.careerObjective}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Sparkles className="w-4 h-4 text-[#00E5A8]" />
              <span>Ready to add immediate value to analytics teams</span>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#8B5CF6]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Interests</h3>
                  <p className="text-xs text-slate-400 font-mono">Professional Passions</p>
                </div>
              </div>

              <div className="space-y-2.5 my-4">
                {PORTFOLIO_DATA.interests.map((interest) => (
                  <div key={interest} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0" />
                    <span>{interest}</span>
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
