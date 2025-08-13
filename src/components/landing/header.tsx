import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Tyler Quach’s Portfolio</div>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="hover:underline">Experience</a></li>
          <li><a href="#contact" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
