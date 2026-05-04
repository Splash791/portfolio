"use client";

import { motion } from "framer-motion";

export function Clouds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-0 w-[200%] h-64 flex"
      >
        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] blur-2xl" style={{ borderRadius: '50% 50% 0 0' }} />
        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] blur-2xl" style={{ borderRadius: '50% 50% 0 0' }} />
      </motion.div>
      <motion.div
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-0 w-[200%] h-96 flex opacity-50"
      >
        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)] blur-3xl scale-150" />
        <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)] blur-3xl scale-150" />
      </motion.div>
    </div>
  );
}
