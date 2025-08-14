import React from "react";
import { FaCuttlefish, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiNextdotjs, SiTailwindcss, SiFigma, SiR, SiAssemblyscript, SiVitest } from "react-icons/si";

export function SkillsSection() {
  const skills = [
    { name: "C", icon: <FaCuttlefish className="text-blue-500" /> },
    { name: "C++", icon: <FaCuttlefish className="text-indigo-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Python", icon:     <FaPython className="text-yellow-500" />},
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "x86 Assembly", icon: <SiAssemblyscript className="text-gray-500" /> },
    { name: "R", icon: <SiR className="text-sky-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "ShadCN UI", icon: <img src="images/shadcn-logo.png" className="w-12 h-12 mx-auto" /> }, 
    { name: "VS Code", icon: <FaGitAlt className="text-blue-500" /> },
    { name: "Vitest", icon: <SiVitest className="text-green-500" /> },
    { name: "Playwright", icon: <img src="images/playwright-logo.png" className="w-12 h-12 mx-auto" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "R Studio", icon: <SiR className="text-sky-500" /> },
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
            A list of the technologies and tools I'm proficient in.
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