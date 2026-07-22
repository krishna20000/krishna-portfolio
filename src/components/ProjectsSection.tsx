'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, BarChart2, CheckCircle, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import ProjectChartPreview from './ProjectChartPreview';
import ProjectModal from './ProjectModal';

const FILTER_TAGS = ['All', 'Power BI', 'Python', 'SQL & Excel'];

export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = projects.filter((project) => {
    if (selectedTag === 'All') return true;
    if (selectedTag === 'Power BI') return project.technologies.includes('Power BI');
    if (selectedTag === 'Python') return project.technologies.includes('Python');
    if (selectedTag === 'SQL & Excel')
      return project.technologies.includes('SQL') || project.technologies.includes('Advanced Excel');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text-accent">Data & BI Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world analytics solutions addressing sales forecasting, HR retention, financial health, customer segmentation, and inventory logistics.
          </p>
        </div>

        {/* Filter Badges Bar */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#4F8CFF] text-white shadow-md shadow-[#4F8CFF]/20 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover rounded-2xl p-5 border border-white/5 flex flex-col justify-between group"
              >
                <div>
                  {/* SVG Chart Preview */}
                  <ProjectChartPreview
                    chartType={project.chartType}
                    title={project.title}
                    badge={project.badge}
                  />

                  {/* Title & Category */}
                  <div className="mt-4">
                    <span className="text-[11px] font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#4F8CFF] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-3 gap-1">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-2 rounded-lg text-center border border-white/5">
                        <div className="text-xs font-bold font-mono text-[#4F8CFF]">{m.value}</div>
                        <div className="text-[9px] text-slate-400 truncate mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F8CFF] hover:text-[#00E5A8] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-lg bg-[#4F8CFF]/20 hover:bg-[#4F8CFF]/30 text-[#4F8CFF] transition-colors cursor-pointer"
                      title="Live Interactive View"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
