"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, ExternalLink, Code2, Lock } from "lucide-react";
import Link from "next/link";
import { FlatMap } from "@/components/ui/FlatMap";

const projects = [
  {
    id: "01",
    title: "Bastinel",
    mission: "Detecting Hallucinations in Large Language Models.",
    destination: "production",
    status: "boarding",
    gate: "A12",
    seat: "01A",
    tags: ["OpenRouter", "AWS", "Typescript", "React", "ShadCN UI"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "02",
    title: "Expense Tracker",
    mission: "Centralized database for tracking your daily expenses.",
    destination: "beta",
    status: "departed",
    gate: "B04",
    seat: "14C",
    tags: ["OpenCV", "Tesseract OCR", "MongoDB", "Typescript"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "03",
    title: "Minerva AI",
    mission: "Web application for generating practice quizzes for exams.",
    destination: "live",
    status: "arrived",
    gate: "C09",
    seat: "22F",
    tags: ["React", "Next.js", "ShadCN UI", "React", "MongoDB", "Typescript"],
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    id: "04",
    title: "Small Shell",
    mission: "A custom Unix shell with I/O redirection, background processes, and signals.",
    destination: "research",
    status: "boarding",
    gate: "D01",
    seat: "05B",
    tags: ["C", "UNIX", "Systems"],
    link: "",
    github: "",
    restricted: true,
  },
];

export function Projects() {
  const handleRestrictedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This code is not publicly available due to academic integrity policies for school projects.");
  };

  return (
    <section id="projects" className="py-24 relative bg-navy-light/30 min-h-screen flex items-center">
      <FlatMap />
      <div className="container px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <PlaneTakeoff className="size-5 text-slate-400" />
                <h2 className="text-3xl font-medium tracking-tight text-slate-50">My Projects</h2>
              </div>
              <p className="text-slate-400 font-light">Select projects across systems and intelligence.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              View All Projects <ExternalLink className="size-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-navy border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Boarding pass perforated edge effect */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-navy-light/30 rounded-full border border-slate-800 group-hover:border-slate-600 transition-colors z-10 hidden sm:block"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-navy-light/30 rounded-full border border-slate-800 group-hover:border-slate-600 transition-colors z-10 hidden sm:block"></div>

              <div className="flex">
                {/* Main Pass Area */}
                <div className="p-6 flex-1 pr-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-mono text-slate-500 tracking-widest uppercase block mb-1">Flight {project.id}</span>
                      <h3 className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors">{project.title}</h3>
                    </div>
                    <PlaneTakeoff className="size-6 text-slate-700 group-hover:text-sand group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 opacity-0 group-hover:opacity-100 absolute top-6 right-32" />
                  </div>

                  <div className="flex gap-6 mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Gate</span>
                      <span className="text-lg font-mono text-slate-300">{project.gate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Seat</span>
                      <span className="text-lg font-mono text-slate-300">{project.seat}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Status</span>
                      <span className={`text-xs font-mono uppercase px-2 py-0.5 rounded border inline-block mt-1
                        ${project.status === 'arrived' ? 'border-emerald-500/30 text-emerald-400' :
                          project.status === 'boarding' ? 'border-amber-500/30 text-amber-400' :
                            'border-blue-500/30 text-blue-400'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 border-y border-dashed border-slate-800 py-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Mission Brief</span>
                    <p className="text-slate-400 font-light text-sm">{project.mission}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tear-off Stub */}
                <div className="w-24 border-l border-dashed border-slate-700 p-4 flex flex-col justify-between items-center bg-navy-light/20 relative">
                  <div className="flex gap-3 flex-col items-center pt-2">
                    {(project as any).restricted ? (
                      <div className="w-full flex justify-center py-2">
                        <button onClick={handleRestrictedClick} className="text-slate-500 hover:text-red-400 transition-colors" title="Private Repository">
                          <Lock className="size-5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        {project.github && (
                          <Link href={project.github} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Code2 className="size-5" />
                          </Link>
                        )}
                        {project.link && (
                          <Link href={project.link} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <ExternalLink className="size-5" />
                          </Link>
                        )}
                      </>
                    )}
                  </div>

                  {/* Vertical Barcode */}
                  <div className="h-24 w-full flex gap-[2px] opacity-30 mt-auto items-end rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="bg-slate-300 h-full" style={{ width: Math.random() * 3 + 1 + 'px' }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

