import React from "react";
import Image from "next/image";

export function PortfolioSection() {
  const projects = [
    {
      title: "Bank Interface",
      tech: "JavaScript, HTML, CSS, Next.js, MongoDB",
      description:
        "Personal banking web app with icon-based navigation for accessibility, backed by a MongoDB database for secure account storage and balance tracking.",
      image: "/images/simplibank.png",
      link: "https://github.com/Splash791/SimpliBank",
    },
    {
      title: "Small Shell",
      tech: "C",
      description:
        "Custom Unix shell with command execution, I/O redirection, background process handling, built-in commands, and signal handling for process management. (Class assignment – code not publicly available.)",
      image: "/images/smallsh.png",
    },
    {
      title: "Hunt the Wumpus",
      tech: "C++",
      description:
        "Grid-based adventure game using OOP principles like encapsulation, inheritance, and polymorphism, with modular class hierarchy and dynamic event handling. (Class assignment – code not publicly available.)",
      image: "/images/wumpus.png",
    },
    {
      title: "Discord Bot",
      tech: "Python, Discord API",
      description:
        "A multifunctional Discord bot with custom commands, moderation tools, and fun utilities for server engagement.",
      image: "/images/discordbot.png",
      link: "https://github.com/Splash791/discordBot",
    },
    {
      title: "Album Finder",
      tech: "JavaScript, HTML, CSS, Spotify API",
      description:
        "Web app that searches for albums and displays details using the Spotify API, featuring a clean, responsive UI.",
      image: "/images/albumfinder.png",
      link: "https://github.com/Splash791/AlbumFinder",
    },
  ];

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  View Project →
                </a>
              ) : (
                <p className="text-gray-400 italic">Code not publicly available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
