import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center max-w-3xl mx-auto px-6 py-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I’m a first generation Vietnamse American student at Oregon State University, pursuing a degree in Computer Science with a minor in Mathematics.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I’m interested in building scalable web applications that solve real-world problems as well as learning more about Machine Learning.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Outside of school I have a passion for traveling, cooking and fitness. 
      </p>
        

    </section>
  );
}
