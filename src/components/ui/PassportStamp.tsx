"use client";

import { motion } from "framer-motion";

export function PassportStamp({ type, className = "" }: { type: "industry" | "research", className?: string }) {
  const isResearch = type === "research";
  const colorClass = isResearch ? "text-blue-500/30 border-blue-500/30" : "text-red-500/30 border-red-500/30";
  
  return (
    <motion.div
      initial={{ scale: 2, opacity: 0, rotate: -20 }}
      whileInView={{ scale: 1, opacity: 0.8, rotate: isResearch ? 12 : -15 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }}
      className={`absolute w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center font-mono uppercase tracking-widest pointer-events-none mix-blend-screen z-0 ${colorClass} ${className}`}
      style={{
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
        WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"black\" mask=\"url(%23noise)\"/><mask id=\"noise\"><rect width=\"100%\" height=\"100%\" fill=\"white\"/><circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"black\" filter=\"url(%23displacementFilter)\"/></mask><filter id=\"displacementFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.5\" numOctaves=\"3\" result=\"noise\"/><feDisplacementMap in=\"SourceGraphic\" in2=\"noise\" scale=\"5\" xChannelSelector=\"R\" yChannelSelector=\"G\"/></filter></svg>')",
        maskImage: "radial-gradient(circle, transparent 20%, black 100%)", // Simple fallback mask
      }}
    >
      <div className="text-[10px] opacity-70">DEPARTED</div>
      <div className="text-xl font-bold border-y-2 border-current px-2 py-1 my-1">
        {isResearch ? "RSRCH" : "INDUS"}
      </div>
      <div className="text-[10px] opacity-70">APPROVED</div>
    </motion.div>
  );
}
