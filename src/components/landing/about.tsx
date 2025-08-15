import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-white px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl grey-900 font-extrabold mb-6 border-b-4 border-primary inline-block pb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I’m drawn to fields where I can combine creativity and problem-solving, especially software engineering, product management, and machine learning. I’m fascinated by how these areas can be used to create tools and experiences that make everday life easier and more enjoyable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Outside of tech, I have a big personal goal: to travel to every country in the world and immerse myself in each culture. I believe the best ideas often come from seeing the world through different perspectives, whether it’s trying new food in a small street market or having conversations with locals halfway across the globe. Currently at 6/195 🌎
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
          When I’m not coding or planning my next trip, you might find me cooking something new, lifting at the gym, or brainstorming ideas for my next side project.
          </p>
        </div>
        {/*Image*/}
      <div className="flex flex-col items-center md:items-end justify-center h-full">
          <Image
            src="/images/tq-yosemite.jpg"
            alt="Tyler Quach Headshot"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-primary"
            priority
          />
        </div>
      </div>
    </section>

      
  );
}
