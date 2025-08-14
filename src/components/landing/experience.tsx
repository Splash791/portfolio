import React from "react";
import { FaLaptopCode, FaHandsHelping } from "react-icons/fa";

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center px-6 py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          My Experience
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          A timeline of my professional career and leadership roles.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Work Experience */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center text-gray-800 mb-6">
              <FaLaptopCode className="text-gray-600 mr-3" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {/* Community Relations Representative */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded-full"></div>
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-500 rounded-full -translate-x-1/2 mt-1"></div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800">Community Relations Representative</h4>
                  <p className="text-gray-500 text-sm italic">Oregon State University. • May 2025 - Present</p>
                  <p className="text-gray-700 mt-2">
                  Co-planned and executed identity-based events annually, including heritage month celebrations and awareness
                  campaigns, reaching an audience of 300+ students, local businesses and campus partners.
                  </p>
                </div>
              </div>

              {/* Lifeguard */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded-full"></div>
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-500 rounded-full -translate-x-1/2 mt-1"></div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800">Lifeguard</h4>
                  <p className="text-gray-500 text-sm italic">Mt.Hood Aquatics. • June 2022 - September 2024</p>
                  <p className="text-gray-700 mt-2">
                  Ensured safety of up to 100 patrons per session by monitoring activity, enforcing rules, and responding to emergencies,
                  while collaborating with team members to maintain vigilance and a welcoming environment                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Volunteering */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center text-gray-800 mb-6">
              <FaHandsHelping className="text-gray-600 mr-3" />
              Leadership
            </h3>
            <div className="space-y-8">
              {/* Treasurer */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded-full"></div>
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-500 rounded-full -translate-x-1/2 mt-1"></div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800">Treasurer</h4>
                  <p className="text-gray-500 text-sm italic">Google Devloper Student Club • May 2025 - Present</p>
                  <p className="text-gray-700 mt-2">
                  Managed all club finances by processing reimbursement requests, tracking expenditures, preparing budget proposals, and maintaining accurate financial records to support club activities.
                  </p>
                </div>
              </div>

             {/* Community Outreach Officer */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded-full"></div>
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-500 rounded-full -translate-x-1/2 mt-1"></div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-800">Community Outreach Officer</h4>
                  <p className="text-gray-500 text-sm italic">App Development Club • February 2025 - Present</p>
                  <p className="text-gray-700 mt-2">
                    Managed the club social media by creating Instagram posts, developing content strategies, brainstorming ideas for meetings and events, and recruiting new members to boost participation and community engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}