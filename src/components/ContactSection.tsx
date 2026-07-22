'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, ExternalLink, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Interested in hiring a Data Analyst or exploring opportunities? Connect directly via email, LinkedIn, or GitHub below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#4F8CFF] mb-4 group-hover:border-[#4F8CFF]/50 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#4F8CFF] transition-colors break-all">
                {PORTFOLIO_DATA.personal.email}
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Send an email for inquiries or job opportunities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl transition-all shadow-md shadow-[#4F8CFF]/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#00E5A8] mb-4 group-hover:border-[#00E5A8]/50 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">LinkedIn</div>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#00E5A8] transition-colors">
                Krishna Mehta
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Connect professionally on LinkedIn.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl transition-all"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:border-[#8B5CF6]/50 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">GitHub</div>
              <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#8B5CF6] transition-colors">
                krishna20000
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Explore project repositories & code.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl transition-all"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-400 mb-4 group-hover:border-amber-400/50 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</div>
              <h3 className="text-base font-bold text-white mt-1">
                India
              </h3>
              <p className="text-xs text-slate-400 mt-2">
                Open to Remote & On-Site Roles in India.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-mono font-semibold text-[#00E5A8] bg-[#00E5A8]/10 rounded-xl">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Hire</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
