'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, ExternalLink, ArrowUpRight, Send, Sparkles, Copy, FileText, Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import ResumeModal from './ResumeModal';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleDownloadResume = () => {
    try {
      confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    setDownloaded(true);

    const element = document.createElement('a');
    const file = new Blob([
      `KRISHNA MEHTA - DATA ANALYST & BI PROFESSIONAL\n` +
      `Email: ${PORTFOLIO_DATA.personal.email}\n` +
      `GitHub: ${PORTFOLIO_DATA.personal.github}\n` +
      `LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}\n` +
      `Location: ${PORTFOLIO_DATA.personal.location}\n\n` +
      `SUMMARY:\n${PORTFOLIO_DATA.personal.subtitle}\n\n` +
      `EDUCATION:\n` +
      `- MCA (Online), Jain University (2025 - 2027)\n` +
      `- BCA, Parul University (2022 - 2025)\n\n` +
      `EXPERIENCE:\n` +
      `- Manual QA Tester @ WhatBytes (Sept 2025 - March 2026)\n` +
      `- Frontend Developer @ WhatBytes (Sept 2025 - Nov 2025)\n` +
      `- Junior Frontend Developer @ Devfrend (May 2025 - June 2025)\n` +
      `- Software Developer Trainee @ AccioJob (Oct 2024 - May 2025)\n\n` +
      `PROJECTS:\n` +
      `- Sales Performance Dashboard (Power BI)\n` +
      `  Drive Link: https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Krishna_Mehta_Data_Analyst_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-[#4F8CFF] text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get In <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Interested in hiring an aspiring Data Analyst or discussing opportunities? Reach out directly below.
          </p>
        </div>

        {/* Top Action Bar: Copy Email, Preview Resume, Download Resume */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl glass-card border border-white/10 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Sparkles className="w-4 h-4 text-[#00E5A8]" />
            <span>Recruiter Quick Actions:</span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-all cursor-pointer hover:border-[#4F8CFF]/40"
            >
              <Copy className="w-3.5 h-3.5 text-[#4F8CFF]" />
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            {/* Preview Resume Button */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-all cursor-pointer hover:border-[#00E5A8]/40"
            >
              <FileText className="w-3.5 h-3.5 text-[#00E5A8]" />
              <span>Preview Resume</span>
            </button>

            {/* Resume Download Button */}
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl shadow-md shadow-[#4F8CFF]/20 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4F8CFF]/10 hover:border-[#4F8CFF]/50"
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
            className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00E5A8]/10 hover:border-[#00E5A8]/50"
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
            className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/50"
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
            className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-400/50"
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
                {PORTFOLIO_DATA.personal.availability}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-mono font-semibold text-[#00E5A8] bg-[#00E5A8]/10 rounded-xl border border-[#00E5A8]/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Hire</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Resume Preview Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

      </div>
    </section>
  );
}
