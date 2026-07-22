'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function CertificationsSection() {
  const certifications = PORTFOLIO_DATA.certifications;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry <span className="gradient-text-primary">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal certifications validating analytical frameworks, BI tools, database languages, and software methodologies.
          </p>
        </div>

        {/* Certifications Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Badge Top Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center p-2 group-hover:border-[#4F8CFF]/50 transition-colors">
                    <Award
                      className="w-6 h-6"
                      style={{ color: cert.badgeColor || '#4F8CFF' }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/5">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white group-hover:text-[#4F8CFF] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mt-1">
                  Issued by <span className="text-slate-200">{cert.issuer}</span>
                </div>

                {/* Credential ID */}
                <div className="text-[11px] font-mono text-slate-400 mt-3 pt-3 border-t border-white/5">
                  ID: <span className="text-slate-300">{cert.credentialId}</span>
                </div>

                {/* Skills Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-[#00E5A8] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Badge</span>
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
