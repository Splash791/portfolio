"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { SplitFlap } from "@/components/ui/SplitFlap";

const allProjects = [
  {
    id: "01",
    title: "BASTINEL",
    mission: "Detecting Hallucinations in Large Language Models.",
    tags: ["OpenRouter", "AWS", "Typescript", "React", "ShadCN UI"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "02",
    title: "EXPENSE TRACKER",
    mission: "Centralized database for tracking your daily expenses.",
    tags: ["OpenCV", "Tesseract OCR", "MongoDB", "Typescript"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "03",
    title: "AI QUIZ GEN",
    mission: "Web application for generating practice quizzes for exams.",
    tags: ["React", "Next.js", "ShadCN UI", "MongoDB", "Typescript"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "04",
    title: "SMALL SHELL",
    mission: "A custom Unix shell with I/O redirection, background processes, and signals.",
    tags: ["C", "Unix", "Systems"],
    link: "https://github.com",
    github: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-navy text-slate-300 pt-32 pb-24 font-mono relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 50% 0%, #1e293b 0%, transparent 60%)` }}>
      </div>

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group uppercase tracking-widest text-sm">
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Back to Itinerary
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-2 h-8 bg-slate-500 inline-block"></span>
            <SplitFlap text="DEPARTURES" />
          </h1>
          <p className="text-slate-400 text-sm tracking-widest uppercase max-w-2xl font-light">
            Flight manifest for all engineering expeditions.
          </p>
        </motion.div>

        {/* Departure Board Container */}
        <div className="bg-[#0B1221] p-3 md:p-6 rounded-xl border border-slate-800 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] overflow-x-auto relative">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-slate-700/50 text-slate-500 text-xs uppercase tracking-widest">
                <th className="py-4 px-4 font-normal w-64">Flight / Destination</th>
                <th className="py-4 px-4 font-normal w-96">Mission Briefing</th>
                <th className="py-4 px-4 font-normal hidden lg:table-cell">Remarks (Stack)</th>
                <th className="py-4 px-4 font-normal w-24 text-right">Terminals</th>
              </tr>
            </thead>
            <tbody className="space-y-3">
              {/* Invisible spacer row for padding */}
              <tr><td className="p-2"></td></tr>
              
              {allProjects.map((project, index) => (
                <motion.tr
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    bounce: 0.3
                  }}
                  style={{ transformOrigin: "top" }}
                  key={project.id}
                  className="bg-[#0D1526] border-y border-slate-800/80 hover:bg-[#121D33] transition-colors group shadow-md"
                >
                  <td className="py-4 px-4 h-[1px]">
                    <div className="bg-[#070B14] text-sand text-lg md:text-xl font-medium tracking-widest p-3 border border-slate-800 rounded shadow-inner relative flex items-center overflow-hidden h-full">
                      {/* Flap line */}
                      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-900 -translate-y-1/2 z-10"></div>
                      <SplitFlap text={project.title} />
                    </div>
                  </td>
                  <td className="py-4 px-4 h-[1px]">
                    <div className="text-slate-300 text-sm leading-relaxed font-sans font-light bg-[#070B14] p-3 rounded border border-slate-800 shadow-inner flex items-center h-full min-h-[60px]">
                      {project.mission}
                    </div>
                  </td>
                  <td className="py-4 px-4 hidden lg:table-cell h-[1px]">
                    <div className="flex flex-wrap items-center gap-2 bg-[#070B14] p-3 rounded border border-slate-800 shadow-inner h-full">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-slate-400 bg-[#0A101D] px-2 py-1 rounded-sm border border-slate-800 uppercase tracking-widest shadow-inner">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right h-[1px]">
                    <div className="flex justify-end items-center gap-3 bg-[#070B14] p-3 border border-slate-800 rounded shadow-inner h-full">
                      <Link href={project.github} target="_blank" className="text-slate-500 hover:text-sand transition-colors">
                        <Code2 className="size-5" />
                      </Link>
                      <Link href={project.link} target="_blank" className="text-slate-500 hover:text-sand transition-colors">
                        <ExternalLink className="size-5" />
                      </Link>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
