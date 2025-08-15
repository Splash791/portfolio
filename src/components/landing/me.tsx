import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 md:px-20 py-12 text-left gap-40"
    >
      {/* Large image on the left */}
      <Image
        src="/images/tq-yosemite.JPG"
        alt="Tyler Quach"
        width={500} 
        height={500} 
        className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-full shadow-lg"
        priority 
      />


      {/* Text content on the right */}
      <div className="max-w-xl">
        <h1 className="text-6xl font-extrabold mb-6">
          Hi, I&apos;m Tyler Quach
        </h1>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          I&apos;m a third-year Computer Science major with a Mathematics minor at Oregon State University.
        </p>
        <div className="flex flex-wrap gap-6">
        </div>
      </div>
    </section>
  );
}
