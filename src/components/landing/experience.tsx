import React from "react";

export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid gap-12 md:grid-cols-2">
        {/* Jobs */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Jobs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">Community Relations Representative</h4>
              <p className="text-gray-600 italic">Oregon State University - APCC </p>
              <p className="text-gray-600 italic">May 2025 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Developed new features using React and TypeScript.</li>
                <li>Improved application performance by 15% through code optimization.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Lifeguard</h4>
              <p className="text-gray-600 italic">Mt. Hood Aquatics - Reynolds Pool</p>
              <p className="text-gray-600 italic">June 2022 - September 2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Provided excellent customer service and managed inventory.</li>
                <li>Trained new employees on store operations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Campus Involvement - now on the right */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Campus Involvement</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">Google Developer Student Club</h4>
              <p className="text-gray-600 italic">Treasurer • 2023 - Present</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">App Development Club</h4>
              <p className="text-gray-600 italic">Community Outreach Officer • 2023 - Present</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Society of Asian Scientist & Engineers</h4>
              <p className="text-gray-600 italic">Member • 2024 - Present</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Associationf for Computing Machinery</h4>
              <p className="text-gray-600 italic">Member • 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
