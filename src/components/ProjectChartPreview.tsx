'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectChartPreviewProps {
  chartType: 'bar' | 'line' | 'pie' | 'donut' | 'waterfall';
  title: string;
  badge: string;
  imageUrl?: string;
}

export default function ProjectChartPreview({ chartType, title, badge, imageUrl }: ProjectChartPreviewProps) {
  return (
    <div className="relative w-full h-48 sm:h-52 bg-slate-950/90 rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between group-hover:border-[#4F8CFF]/40 transition-colors">
      
      {/* Top Header Mockup Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10 bg-slate-950/60 backdrop-blur-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[10px] font-mono text-slate-300 truncate max-w-[150px]">{title}</span>
        </div>
        <span className="text-[10px] font-mono font-semibold text-[#00E5A8] bg-[#00E5A8]/10 px-2 py-0.5 rounded">
          {badge}
        </span>
      </div>

      {/* Real Image Render if available */}
      {imageUrl ? (
        <div className="relative w-full h-36 rounded-lg overflow-hidden my-auto border border-white/10 group-hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        /* SVG Vector Graphic Fallback for Upcoming Dashboards */
        <div className="my-auto py-2 flex items-center justify-center">
          {chartType === 'bar' && (
            <svg className="w-full h-24 text-[#4F8CFF]" viewBox="0 0 300 100">
              <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
              <rect x="20" y="30" width="28" height="55" rx="4" fill="url(#barGrad1)" />
              <rect x="75" y="15" width="28" height="70" rx="4" fill="url(#barGrad2)" />
              <rect x="130" y="45" width="28" height="40" rx="4" fill="url(#barGrad1)" />
              <rect x="185" y="10" width="28" height="75" rx="4" fill="url(#barGrad2)" />
              <rect x="240" y="35" width="28" height="50" rx="4" fill="url(#barGrad1)" />
              <defs>
                <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F8CFF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5A8" />
                  <stop offset="100%" stopColor="#4F8CFF" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {chartType === 'line' && (
            <svg className="w-full h-24" viewBox="0 0 300 100">
              <path
                d="M 10,75 Q 60,20 110,50 T 210,30 T 290,15"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3"
              />
              <path
                d="M 10,75 Q 60,20 110,50 T 210,30 T 290,15 L 290,90 L 10,90 Z"
                fill="url(#areaGrad)"
                opacity="0.25"
              />
              <circle cx="110" cy="50" r="4" fill="#00E5A8" />
              <circle cx="210" cy="30" r="4" fill="#4F8CFF" />
              <circle cx="290" cy="15" r="4" fill="#8B5CF6" />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F8CFF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#00E5A8" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F8CFF" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {chartType === 'pie' || chartType === 'donut' ? (
            <svg className="w-full h-24" viewBox="0 0 200 100">
              <circle cx="80" cy="50" r="35" fill="none" stroke="#4F8CFF" strokeWidth="14" strokeDasharray="140 220" />
              <circle cx="80" cy="50" r="35" fill="none" stroke="#8B5CF6" strokeWidth="14" strokeDasharray="50 220" strokeDashoffset="-140" />
              <circle cx="80" cy="50" r="35" fill="none" stroke="#00E5A8" strokeWidth="14" strokeDasharray="30 220" strokeDashoffset="-190" />
              <g transform="translate(130, 25)">
                <rect x="0" y="0" width="8" height="8" rx="2" fill="#4F8CFF" />
                <text x="12" y="8" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Core</text>
                <rect x="0" y="16" width="8" height="8" rx="2" fill="#8B5CF6" />
                <text x="12" y="24" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Dept</text>
                <rect x="0" y="32" width="8" height="8" rx="2" fill="#00E5A8" />
                <text x="12" y="40" fill="#cbd5e1" fontSize="9" fontFamily="monospace">KPI</text>
              </g>
            </svg>
          ) : null}

          {chartType === 'waterfall' && (
            <svg className="w-full h-24" viewBox="0 0 300 100">
              <rect x="15" y="20" width="22" height="65" rx="3" fill="#4F8CFF" />
              <rect x="55" y="20" width="22" height="25" rx="3" fill="#00E5A8" />
              <rect x="95" y="35" width="22" height="15" rx="3" fill="#ef4444" />
              <rect x="135" y="25" width="22" height="30" rx="3" fill="#00E5A8" />
              <rect x="175" y="40" width="22" height="20" rx="3" fill="#ef4444" />
              <rect x="215" y="15" width="22" height="70" rx="3" fill="#8B5CF6" />
              <line x1="0" y1="85" x2="300" y2="85" stroke="rgba(255,255,255,0.1)" />
            </svg>
          )}
        </div>
      )}

      {/* Bottom KPI Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5 z-10 bg-slate-950/60 backdrop-blur-xs">
        <span className="text-[#00E5A8]">● POWER BI DASHBOARD</span>
        <span>SUPERMARKET SALES</span>
      </div>
    </div>
  );
}
