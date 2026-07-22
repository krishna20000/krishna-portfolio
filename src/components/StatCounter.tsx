'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export default function StatCounter({ value, suffix = '', decimals = 0, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <div ref={ref} className="text-center p-4 rounded-xl glass-card border border-white/5 hover:border-[#4F8CFF]/30 transition-all">
      <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#4F8CFF] to-[#00E5A8]">
        {formattedCount}
        {suffix}
      </div>
      <div className="text-xs text-slate-400 mt-1 font-medium leading-snug">{label}</div>
    </div>
  );
}
