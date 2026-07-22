'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="gradient-text-primary">Track Record</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Software quality assurance experience delivering high-accuracy data validation and production testing.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
            >
              {/* Top Row: Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-3 py-1 rounded-md mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-base font-medium text-[#4F8CFF] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#4F8CFF]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities Clean Cards */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-[#00E5A8] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#00E5A8]" />
                  <span>Key Impact & Accomplishments</span>
                </h4>
                <div className="space-y-2">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A8]" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Used Tags */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {exp.skillsUsed.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
