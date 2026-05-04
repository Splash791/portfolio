"use client";

import { motion } from "framer-motion";

export function FlightPath() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <motion.path
          d="M -100 400 Q 300 200 500 100 T 1100 50"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="10 10"
          className="text-slate-400"
        />
        <motion.path
          d="M -100 400 Q 300 200 500 100 T 1100 50"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          className="text-sand"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Airplane symbol following the path */}
        <motion.g
          initial={{ offsetDistance: "0%" } as any}
          animate={{ offsetDistance: "100%" } as any}
          transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
          style={{ offsetPath: 'path("M -100 400 Q 300 200 500 100 T 1100 50")' }}
          className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(90deg)" }}>
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3.5 3.5L3.3 15 2 15.5l1.5 3 3 1.5.5-1.3-.5-2.2L10 13l4 6c.4.2.8-.2.6-.7z"/>
          </svg>
        </motion.g>
      </svg>
    </div>
  );
}
