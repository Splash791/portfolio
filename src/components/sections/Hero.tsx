"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/Globe";
import { Clouds } from "@/components/ui/Clouds";
import { FlightPath } from "@/components/ui/FlightPath";
import { SplitFlap } from "@/components/ui/SplitFlap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      <Globe />
      <Clouds />
      <FlightPath />
      
      <div className="container px-6 max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative shrink-0"
        >
          {/* Passport Photo Frame */}
          <div className="relative w-80 h-[400px] md:w-96 md:h-[500px] bg-sand p-3 shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 border border-navy/10 pointer-events-none" />
            <div className="w-full h-full relative overflow-hidden bg-slate-200">
              <Image 
                src="/tquach.JPG" 
                alt="Tyler Quach Passport Photo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Passport-style barcode at the bottom of the photo */}
            <div className="absolute bottom-4 left-4 right-4 h-6 flex justify-between opacity-50 mix-blend-multiply">
               {Array.from({ length: 30 }).map((_, i) => (
                 <div key={i} className="bg-navy h-full" style={{ width: Math.random() * 4 + 1 + 'px' }} />
               ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-24 bg-slate-500"></span>
            <span className="text-6xl sm:text-7xl lg:text-[5rem] font-mono text-slate-300 tracking-wider uppercase font-bold leading-none">
              Tyler Quach
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 whitespace-nowrap">
            <SplitFlap text="CS @ OREGON STATE UNIVERSITY" className="text-[clamp(1.5rem,4vw,3rem)]" />
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Third Year CS with a foucs in AI/ML
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-sand text-navy hover:bg-white font-medium group">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Departure</span> */}
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
