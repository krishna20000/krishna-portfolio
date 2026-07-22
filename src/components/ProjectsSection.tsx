'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ArrowUpRight, CheckCircle2, Eye, Clock, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import ProjectChartPreview from './ProjectChartPreview';
import ProjectModal from './ProjectModal';
import ImageModal from './ImageModal';
import { GoogleDriveIcon, GithubIcon } from './SocialIcons';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedZoomImage, setSelectedZoomImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5A8]/10 border border-[#00E5A8]/20 text-[#00E5A8] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Data & BI <span className="gradient-text-accent">Project Portfolio</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Interactive dashboards and analytical reports built using Power BI, Excel, SQL, and Python.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* SVG Chart or Real Dashboard Image Preview with Click-to-Zoom */}
                <div
                  onClick={() => {
                    if (project.imageUrl) {
                      setSelectedZoomImage({ src: project.imageUrl, alt: project.title });
                    } else {
                      setActiveModalProject(project);
                    }
                  }}
                  className="cursor-pointer relative group/img"
                  title="Click to view fullscreen zoom"
                >
                  <ProjectChartPreview
                    chartType={project.chartType}
                    title={project.title}
                    badge={project.badge}
                    imageUrl={project.imageUrl}
                  />

                  {project.imageUrl && (
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-xl backdrop-blur-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 border border-white/20 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#00E5A8]" />
                        <span>Fullscreen Zoom</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title & Category */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.isUpcoming && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        <span>Upcoming</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#4F8CFF] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5A8] shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F8CFF] hover:text-[#00E5A8] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Details</span>
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-1.5">
                  {project.driveUrl && (
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 transition-colors flex items-center gap-1 text-[11px] font-medium"
                      title="View Dashboard on Google Drive"
                    >
                      <GoogleDriveIcon className="w-3.5 h-3.5" />
                      <span>Drive</span>
                    </a>
                  )}

                  {project.isUpcoming && (
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-[11px] font-medium"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Case Details Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

        {/* Fullscreen Image Zoom Modal */}
        {selectedZoomImage && (
          <ImageModal
            isOpen={!!selectedZoomImage}
            onClose={() => setSelectedZoomImage(null)}
            imageSrc={selectedZoomImage.src}
            imageAlt={selectedZoomImage.alt}
          />
        )}

      </div>
    </section>
  );
}
