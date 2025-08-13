// import React from "react";
// import { Button } from "../../components/ui/button";

// export function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 text-center"
//     >
//       <h1 className="text-5xl font-extrabold mb-4">
//         Hi, I’m Tyler Quach
//       </h1>
//       <p className="max-w-xl text-gray-700 mb-8">
//       I’m a third-year Computer Science major with a Mathematics minor at Oregon State University.

// </p>
//       <div className="flex gap-4">
//         <Button>Contact Me</Button>
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
//         >
//           Download Resume
//         </a>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Button } from "../../components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 md:px-20 py-12 text-left gap-40"
    >
      {/* Large image on the left */}
      <img
        src="/images/.jpg" // add a picture here 
        alt="Tyler Quach"
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg"
      />

      {/* Text content on the right */}
      <div className="max-w-xl">
        <h1 className="text-6xl font-extrabold mb-6">
          Hi, I’m Tyler Quach
        </h1>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          I’m a third-year Computer Science major with a Mathematics minor at Oregon State University.
        </p>
        <div className="flex flex-wrap gap-6">
          <Button className="px-10 py-4 text-lg">Contact Me</Button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-10 py-4 text-white text-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
