"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { PassportStamp } from "@/components/ui/PassportStamp";
import { Radar } from "@/components/ui/Radar";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Tech Company",
    location: "San Francisco, CA",
    date: "Jun 2025 - Sep 2025",
    description: "Architected a scalable microservice using Go and gRPC, reducing latency by 40%. Implemented an event-driven architecture with Kafka for real-time data processing.",
    type: "industry" as const,
  },
  {
    id: 2,
    role: "Undergraduate Researcher",
    company: "OSU AI Lab",
    location: "Corvallis, OR",
    date: "Jan 2024 - Present",
    description: "Developing novel reinforcement learning algorithms for robotic navigation. Co-authored a paper submitted to ICRA 2025.",
    type: "research" as const,
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Startup Inc",
    location: "Remote",
    date: "Jun 2024 - Sep 2024",
    description: "Built the core MVP using Next.js and Supabase. Integrated Stripe for payments and set up CI/CD pipelines via GitHub Actions.",
    type: "industry" as const,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-navy overflow-hidden min-h-screen flex items-center">
      <Radar />
      
      <div className="container px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Map className="size-5 text-slate-400" />
            <h2 className="text-3xl font-medium tracking-tight text-slate-50">Itinerary</h2>
          </div>
          <p className="text-slate-400 font-light">The professional journey so far.</p>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative md:flex gap-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] md:left-[195px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-navy group-hover:bg-sand transition-colors z-10" />
              
              {/* Date column (Desktop) */}
              <div className="hidden md:block w-48 shrink-0 text-right pr-8 pt-0.5">
                <span className="text-sm font-mono text-slate-500 block">{exp.date}</span>
                <span className="text-xs font-mono text-slate-600 uppercase tracking-widest block mt-1">{exp.location}</span>
              </div>

              {/* Content column */}
              <div className="pl-8 md:pl-8 pb-4 relative w-full">
                {/* Passport Stamp positioned absolutely within the content column */}
                <PassportStamp type={exp.type} className="-top-4 right-0 md:right-8" />
                
                {/* Date (Mobile) */}
                <div className="md:hidden mb-2">
                  <span className="text-xs font-mono text-slate-500 block">{exp.date} | {exp.location}</span>
                </div>
                
                <h3 className="text-xl font-medium text-slate-200 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 font-light mb-4">{exp.company}</h4>
                <p className="text-slate-400 font-light leading-relaxed mb-4 max-w-xl">
                  {exp.description}
                </p>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest px-2 py-1 bg-slate-900 rounded border border-slate-800">
                  {exp.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
