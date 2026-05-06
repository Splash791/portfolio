"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { Radar } from "@/components/ui/Radar";

const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Deloitte",
    location: "Portland, OR",
    date: "Jun 2026 - Present",
    description: [
      "Incoming Summer 2026."
    ],
  },
  {
    id: 2,
    role: "Machine Learning Research Assistant",
    company: "Oregon State University",
    location: "Corvallis, OR",
    date: "Dec 2025 - Present",
    description: [
      "Creating data validation and transformation workflows to ensure high-quality, consistent datasets, improving reliability and efficiency for large-scale machine learning experiments on HPC infrastructure.",
      "Applying automated data pipelines to support large-scale AI model training and machine learning experiments, improving efficiency, performance, scalability, and overall research outcomes."
    ],
  },
  {
    id: 3,
    role: "Community Relations Representative",
    company: "Oregon State University - APCC",
    location: "Corvallis, OR",
    date: "May 2025 - Present",
    description: [
      "Co-planned and executed annual identity-based events reaching 300+ students, local businesses, and campus partners.",
      "Engaged with peers and visitors to create a welcoming atmosphere for underrepresented communities."
    ],
  },
  {
    id: 4,
    role: "Mobile Development Intern",
    company: "COORDINATOR",
    location: "Portland, OR",
    date: "Jan 2026 - Apr 2026",
    description: [
      "Leading the migration of an existing web application to a cross-platform mobile app using React Native and Expo, ensuring functionality and performance across iOS and Android while maintaining feature parity with the web product.",
      "Integrating and managing backend connectivity with Better Auth and TanStack Query, implementing secure authentication flows, efficient API communication, and reliable client-side data caching tailored for mobile architecture."
    ],
  },
  {
    id: 5,
    role: "Undergraduate Learning Assistant",
    company: "Oregon State University",
    location: "Corvallis, OR",
    date: "Dec 2026 - Mar 2026",
    description: [
      "Leading weekly recitations of 30+ students and holding office hours for CS162: Introduction to Computer Science II.",
      "Evaluating student progress and providing constructive feedback through comprehensive grading of assignments."
    ],
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
            <h2 className="text-3xl font-medium tracking-tight text-slate-50">Experience</h2>
          </div>
          <p className="text-slate-400 font-light">My professional journey so far.</p>
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
                
                {/* Date (Mobile) */}
                <div className="md:hidden mb-2">
                  <span className="text-xs font-mono text-slate-500 block">{exp.date} | {exp.location}</span>
                </div>
                
                <h3 className="text-xl font-medium text-slate-200 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 font-light mb-4">{exp.company}</h4>
                <ul className="text-slate-400 font-light leading-relaxed mb-4 max-w-xl list-disc pl-4 space-y-2">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((point, i) => <li key={i}>{point}</li>)
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
