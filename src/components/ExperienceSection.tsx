'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experienceList;

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
            Hands-on experience across manual testing, QA documentation, and frontend development building structured problem-solving discipline.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-bold text-[#4F8CFF]">
                      {exp.company}
                    </span>
                    {exp.duration && (
                      <span className="text-[11px] font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-0.5 rounded">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#4F8CFF]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="mt-4 space-y-2.5">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Competency Chips */}
              {exp.skillsGained && (
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.skillsGained.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-300 border border-white/5">
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
