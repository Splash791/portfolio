"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-navy overflow-hidden min-h-screen flex items-center">
      {/* Topographic line subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at center, transparent 0%, #0B1120 70%), repeating-radial-gradient(circle at 100% 0%, transparent 0, transparent 40px, #ffffff 40px, #ffffff 41px)` }}>
      </div>

      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Compass className="size-5 text-slate-400" />
            <h2 className="text-3xl font-medium tracking-tight text-slate-50">About the Engineer</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6 text-slate-400 leading-relaxed font-light text-lg">
              <p>
                My approach to software engineering mirrors how one navigates a new city: with deep curiosity, a map of fundamental principles, and an eye for how complex systems intersect. I am driven by the architecture of problem-solving—stripping away the noise to build elegant, robust solutions.
              </p>
              <p>
                As a Computer Science student at Oregon State University, my expeditions have ranged from theoretical research to practical, high-impact internships. Whether I'm optimizing database queries or designing intuitive user interfaces, I view every challenge as an opportunity to understand a new domain and map out a better path forward.
              </p>
              <p>
                I thrive in environments where technical rigor meets uncharted territory. For me, code is the ultimate passport—a tool to cross boundaries, translate ideas into reality, and continuously explore the frontiers of what's possible in technology.
              </p>
            </div>
            
            <div className="md:col-span-4 border-l border-white/10 pl-8 space-y-8">
              <div>
                <h3 className="text-sm font-mono text-slate-500 tracking-wider uppercase mb-3">Basecamp</h3>
                <p className="text-slate-300">Oregon State University</p>
                <p className="text-sm text-slate-400">B.S. Computer Science</p>
              </div>
              <div>
                <h3 className="text-sm font-mono text-slate-500 tracking-wider uppercase mb-3">Core Coordinates</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>Full-Stack Engineering</li>
                  <li>Distributed Systems</li>
                  <li>Machine Learning / AI</li>
                  <li>System Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
