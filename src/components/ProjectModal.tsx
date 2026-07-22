'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, TrendingUp, AlertCircle, Cpu, Layers } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-slate-900/60">
            <div>
              <span className="text-xs font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-1 rounded-md">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content scrollable */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 border border-white/10 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
              <p>{project.fullDescription}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/60 border border-white/5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-bold font-mono text-[#4F8CFF]">{m.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Business Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Business Problem</span>
                </div>
                <p className="text-xs text-slate-300">{project.businessProblem}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>Analytical Solution</span>
                </div>
                <p className="text-xs text-slate-300">{project.solution}</p>
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00E5A8]" />
                <span>Key Business Insights Delivered</span>
              </h4>
              <div className="space-y-2">
                {project.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] rounded-lg hover:opacity-90 transition-all cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
