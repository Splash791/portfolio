import React from "react";
import { FaGitAlt, FaGithub} from "react-icons/fa";
import { SiNextdotjs} from "react-icons/si";

export function SkillsSection() {
  const skills = [
    { name: "C", icon: <img src="images/c.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "C++", icon: <img src="images/cpp.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "JavaScript", icon: <img src="images/js.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "HTML", icon: <img src="images/html.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "CSS", icon: <img src="images/css.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "Python", icon:<img src="images/py.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "TypeScript", icon: <img src="images/ts.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "R", icon: <img src="images/r.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "MongoDB", icon: <img src="images/mongodb.svg" className="w-12 h-12 mx-auto" /> }, 
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <img src="images/tailwind.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "ShadCN UI", icon: <img src="images/shadcn-logo.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "VS Code", icon: <img src="images/vsCode.jpeg" className="w-12 h-12 mx-auto" /> }, 
    { name: "Vitest", icon: <img src="images/vitest.svg" className="w-12 h-12 mx-auto" /> }, 
    { name: "Playwright", icon: <img src="images/playwright.webp" className="w-12 h-12 mx-auto" /> },
    { name: "Figma", icon: <img src="images/figma.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20 px-6 sm:px-10 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A list of the technologies and tools I&apos;m proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}