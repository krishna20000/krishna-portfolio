'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F8CFF] to-[#8B5CF6] p-[1px]">
              <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
                <Database className="w-4 h-4 text-[#4F8CFF]" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-white">Krishna Mehta</span>
              <p className="text-[11px] text-slate-400 font-mono">
                Data Analyst & BI Professional
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-[#4F8CFF]/50 transition-all"
              title="Email Krishna"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-[#00E5A8]/50 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-[#8B5CF6]/50 transition-all"
              title="GitHub Repositories"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>© {new Date().getFullYear()} Krishna Mehta. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
