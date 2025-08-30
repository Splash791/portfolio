import React from "react";
import Image from "next/image";

const projects = [
  {
    "title": "Expense Tracker",
    "tech": "Next.js, TypeScript, Tailwind CSS, Tesseract.js, MongoDB",
    "description": "A full-stack expense tracker with an interactive dashboard, in-browser OCR for receipt scanning, and a persistent, multi-user backend to store data in the cloud.",
    src: "/images/expenseTracker.png",
    link: "https://github.com/Splash791/expense-tracker",
  },
  {
    title: "Small Shell",
    tech: "C",
    description:
      "Custom Unix shell with command execution, I/O redirection, background process handling, built-in commands, and signal handling for process management. (Class assignment – code not publicly available.)",
    src: "/images/smallsh.png",
  },
  {
    title: "Hunt the Wumpus",
    tech: "C++",
    description:
      "Grid-based adventure game using OOP principles like encapsulation, inheritance, and polymorphism, with modular class hierarchy and dynamic event handling. (Class assignment – code not publicly available.)",
    src: "/images/wumpus.png",
  },
  {
    title: "Bank Interface",
    tech: "JavaScript, HTML, CSS, Next.js, MongoDB",
    description:
      "Personal banking web app with icon-based navigation for accessibility, backed by a MongoDB database for secure account storage and balance tracking.",
    src: "/images/simpliBank.png",
    link: "https://github.com/Splash791/SimpliBank",
  },
  {
    title: "Discord Bot",
    tech: "Python, Discord API",
    description:
      "A multifunctional Discord bot with custom commands, moderation tools, and fun utilities for server engagement.",
    src: "/images/discordBot.png",
    link: "https://github.com/Splash791/discordBot",
  },
  {
    title: "Album Finder",
    tech: "JavaScript, HTML, CSS, Spotify API",
    description:
      "Web app that searches for albums and displays details using the Spotify API, featuring a clean, responsive UI.",
    src: "/images/albumFinder.png",
    link: "https://github.com/Splash791/AlbumFinder",
  },

];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 px-6 sm:px-10 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of my recent projects, showcasing my skills in development and design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out border border-gray-200"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3} // prioritize first 3 images
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">
                    {project.title}
                  </span>
                </div> */}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3">
                  {project.tech}
                </p>
                <p className="text-gray-700 text-base mb-6">
                  {project.description}
                </p>

                {/* Project Link */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white font-semibold bg-gray-800 rounded-full shadow-lg transition-colors duration-300"
                  >
                    View Code
                  </a>
                ) : (
                  <p className="text-gray-500 italic text-sm">
                    Code not publicly available
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
