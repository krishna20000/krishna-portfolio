'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Database,
  Code,
  FileSpreadsheet,
  BarChart3,
  LayoutDashboard,
  PieChart,
  Activity,
  GitBranch,
  Terminal,
  Share2,
  CheckSquare,
  FileCheck,
  Bug,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Database,
  Code,
  FileSpreadsheet,
  BarChart3,
  LayoutDashboard,
  PieChart,
  Activity,
  GitBranch,
  Terminal,
  Share2,
  CheckSquare,
  FileCheck,
  Bug,
  ShieldCheck
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = PORTFOLIO_DATA.skillCategories;
  const currentCategory = categories[activeTab];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="gradient-text-primary">Tool Matrix</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of data querying, visualization, software tooling, and testing proficiencies.
          </p>
        </div>

        {/* Category Tab Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(index)}
                className={`relative px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
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

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentCategory.skills.map((skill, idx) => {
              const IconComponent = ICON_MAP[skill.iconName] || Database;
              return (
                <div
                  key={skill.name}
                  className="glass-card-hover rounded-2xl p-6 border border-white/5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-[#4F8CFF]/50 transition-colors">
                          <IconComponent className="w-5 h-5 text-[#4F8CFF] group-hover:text-[#00E5A8] transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-[#00E5A8] transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {skill.experience} Level
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#4F8CFF]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800/80 rounded-full h-2 mb-5 overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#4F8CFF] via-[#8B5CF6] to-[#00E5A8] rounded-full"
                      />
                    </div>

                    {/* Highlights List */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {skill.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <ChevronRight className="w-3 h-3 text-[#00E5A8] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
