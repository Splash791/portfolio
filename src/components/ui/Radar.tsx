"use client";

import { motion } from "framer-motion";

export function Radar() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10 flex items-center justify-center">
      <div className="relative w-[800px] h-[800px] rounded-full border border-slate-500/30 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-slate-500/20 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-slate-500/20 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full border border-slate-500/30" />
          </div>
        </div>
        
        {/* Crosshairs */}
        <div className="absolute w-full h-[1px] bg-slate-500/20" />
        <div className="absolute h-full w-[1px] bg-slate-500/20" />
        
        {/* Sweeping Radar Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 70%, rgba(148, 163, 184, 0.1) 100%)",
          }}
        />
      </div>
    </div>
  );
}
