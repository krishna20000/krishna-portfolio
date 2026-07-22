'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Database,
  BarChart3,
  FileSpreadsheet,
  CheckSquare,
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Database,
  BarChart3,
  FileSpreadsheet,
  CheckSquare,
  Terminal
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = PORTFOLIO_DATA.skillsCategorized;
  const currentCategory = categories[activeTab];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical <span className="gradient-text-primary">Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Analytics tools, data visualization, spreadsheet modeling, software QA testing, and developer tools.
          </p>
        </div>

        {/* Category Tab Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(index)}
                className={`relative px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-white/5 hover:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Elevation & Hover Effects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {currentCategory.skills.map((skill) => {
              const IconComponent = ICON_MAP[currentCategory.iconName] || Database;
              return (
                <div
                  key={skill.name}
                  className="glass-card rounded-2xl p-5 border border-white/10 flex items-center justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4F8CFF]/10 hover:border-[#4F8CFF]/50"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#4F8CFF] group-hover:text-[#00E5A8] group-hover:border-[#00E5A8]/40 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-[#00E5A8] transition-colors block">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {currentCategory.title}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-1 rounded-md border border-[#00E5A8]/20 shrink-0">
                    {skill.badge}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
