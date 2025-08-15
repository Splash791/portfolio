import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className=" min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-24 font-sans">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          I&apos;m always open to new opportunities, collaborations, and conversations. Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Email Card */}
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center w-full md:w-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl text-blue-500">
                { <FaEnvelope /> }
              </span>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">tylerquach17@gmail.com</p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/tyler-quach-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl text-blue-700">
                {<FaLinkedin />}
              </span>
              <div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">My LinkedIn</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}