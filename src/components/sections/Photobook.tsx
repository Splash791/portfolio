"use client";

import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

const photos = [
  { id: 1, lat: "37°46'39\"N", lng: "122°24'59\"W", city: "San Francisco", style: { background: "linear-gradient(45deg, #1e293b, #0f172a)" } },
  { id: 2, lat: "35°39'10\"N", lng: "139°41'53\"E", city: "Tokyo", style: { background: "linear-gradient(45deg, #334155, #1e293b)" } },
  { id: 3, lat: "51°30'26\"N", lng: "0°07'39\"W", city: "London", style: { background: "linear-gradient(45deg, #0f172a, #020617)" } },
  { id: 4, lat: "40°42'46\"N", lng: "74°00'21\"W", city: "New York", style: { background: "linear-gradient(45deg, #475569, #334155)" } },
  { id: 5, lat: "48°51'24\"N", lng: "2°21'08\"E", city: "Paris", style: { background: "linear-gradient(45deg, #1e293b, #0f172a)" } },
  { id: 6, lat: "1°17'24\"N", lng: "103°51'00\"E", city: "Singapore", style: { background: "linear-gradient(45deg, #0f172a, #020617)" } },
];

export function Photobook() {
  return (
    <section id="photobook" className="py-24 relative bg-navy min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Camera className="size-5 text-slate-400" />
            <h2 className="text-3xl font-medium tracking-tight text-slate-50">Coordinates</h2>
          </div>
          <p className="text-slate-400 font-light">Documented telemetry from various expeditions.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-xl group cursor-pointer border border-slate-800"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" style={photo.style}>
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)`, backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}>
                </div>
              </div>
              
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy via-navy/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-6">
                
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-xl font-medium mb-1 tracking-wide">{photo.city}</h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-mono text-sand/80 tracking-widest">{photo.lat}</span>
                      <span className="text-xs font-mono text-sand/80 tracking-widest">{photo.lng}</span>
                    </div>
                  </div>
                  
                  {/* Passport Stamp Graphic */}
                  <div className="w-12 h-12 rounded-full border-2 border-red-500/40 flex items-center justify-center -rotate-12 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    <span className="text-[8px] font-bold text-red-500/60 uppercase">Visé</span>
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
