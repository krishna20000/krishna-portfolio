'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    const link = document.createElement('a');
    link.href = '/Krishna_Mehta_Resume.pdf';
    link.download = 'Krishna_Mehta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-4xl w-full glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 my-auto flex flex-col h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 flex items-center justify-center text-[#4F8CFF]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Krishna Dharmendra Mehta - Official Resume</h3>
                <p className="text-xs text-[#00E5A8] font-mono">PDF Preview & Download</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/Krishna_Mehta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-white/10"
              >
                <span>New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF View Container */}
          <div className="flex-1 w-full bg-slate-950 p-2 overflow-hidden">
            <iframe
              src="/Krishna_Mehta_Resume.pdf#toolbar=0"
              className="w-full h-full rounded-xl border border-white/10"
              title="Krishna Mehta Resume PDF"
            />
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 flex items-center justify-between gap-3 bg-slate-900/90 shrink-0">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Official PDF Resume
            </span>

            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:opacity-90 rounded-xl shadow-md shadow-[#4F8CFF]/20 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
