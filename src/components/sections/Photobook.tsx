"use client";

import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";
import Image from "next/image";

const photos = [
  { id: 1, lat: "22°16'01\"N", lng: "114°11'17\"E", city: "Hong Kong, SAR", img: "/hongkong.jpg", orientation: "vertical", style: { background: "linear-gradient(45deg, #1e293b, #0f172a)" } },
  { id: 2, lat: "36°51'14\"S", lng: "174°45'52\"E", city: "Auckland, New Zealand", img: "/nz.jpg", orientation: "horizontal", style: { background: "linear-gradient(45deg, #334155, #1e293b)" } },  
  { id: 3, lat: "48°51'24\"N", lng: "2°21'08\"E", city: "Paris, France", img: "/paris.jpg", orientation: "vertical", style: { background: "linear-gradient(45deg, #0f172a, #020617)" } },
  { id: 4, lat: "40°42'46\"N", lng: "74°00'21\"W", city: "New York City, USA", img: "/nyc.jpg", orientation: "horizontal", style: { background: "linear-gradient(45deg, #475569, #334155)" } },
  { id: 5, lat: "41°54'09\"N", lng: "12°27'11\"E", city: "Vatican City", img: "/vatican.jpg", orientation: "vertical", style: { background: "linear-gradient(45deg, #1e293b, #0f172a)" } },
  { id: 6, lat: "1°17'24\"N", lng: "103°51'00\"E", city: "Sentosa, Singapore", img: "/singapore.jpg", orientation: "vertical", style: { background: "linear-gradient(45deg, #0f172a, #020617)" } },
  { id: 7, lat: "22°49'30\"N", lng: "104°58'00\"E", city: "Ha Giang, Vietnam", img: "/hagiang.jpg", orientation: "horizontal", style: { background: "linear-gradient(45deg, #334155, #1e293b)" } }, 
  { id: 8, lat: "21°18'25\"N", lng: "157°51'30\"W", city: "Honolulu, USA", img: "/hnl.jpg", orientation: "horizontal", style: { background: "linear-gradient(45deg, #334155, #1e293b)" } },  
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
          <p className="text-slate-400 font-light">Documented telemetry from various adventures.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
          {photos.map((photo, i) => {
            // Determine grid spans based on orientation
            const spanClass = photo.orientation === "horizontal" 
              ? "col-span-2 row-span-1" 
              : "col-span-1 row-span-2";

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer border border-slate-800 shadow-xl ${spanClass}`}
              >
                {/* Image / Placeholder */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" style={photo.style}>
                  {photo.img ? (
                    <Image src={photo.img} alt={photo.city} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 opacity-10"
                         style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)`, backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}>
                    </div>
                  )}
                </div>
                
                {/* Glassmorphic Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy via-navy/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-6">
                
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
