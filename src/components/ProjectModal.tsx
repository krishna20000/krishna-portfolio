'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Clock, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { GoogleDriveIcon, GithubIcon } from './SocialIcons';

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
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-1 rounded-md">
                  {project.category}
                </span>
                {project.isUpcoming && (
                  <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Upcoming Project</span>
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content scrollable */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
            
            {/* Real Image Render if available */}
            {project.imageUrl && (
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-top"
                />
              </div>
            )}

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
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Overview & Scope</h4>
              <p>{project.fullDescription}</p>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00E5A8]" />
                <span>Dashboard Metrics & Key Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5A8] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
            <div className="flex items-center gap-3 flex-wrap">
              {project.driveUrl && (
                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#00E5A8] bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/30 rounded-lg transition-colors"
                >
                  <GoogleDriveIcon className="w-4 h-4" />
                  <span>Open Drive View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.isUpcoming && (
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

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
