'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoom(1);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white truncate max-w-xs sm:max-w-md">
                {imageAlt}
              </span>
              <span className="text-[10px] font-mono text-[#00E5A8] bg-[#00E5A8]/10 px-2 py-0.5 rounded">
                Interactive View ({Math.round(zoom * 100)}%)
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-5 bg-white/10 mx-1" />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Container with Scroll & Zoom */}
          <div className="p-4 overflow-auto flex items-center justify-center min-h-[400px] max-h-[75vh] bg-slate-950">
            <div
              className="transition-transform duration-200 ease-out origin-center"
              style={{ transform: `scale(${zoom})` }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1100}
                height={750}
                priority
                className="rounded-xl border border-white/10 object-contain shadow-2xl max-w-full"
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/80">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-white/10">Esc</kbd> or click outside to exit</span>
            <span className="text-[#00E5A8]">Supermarket Sales Dashboard — Power BI</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
