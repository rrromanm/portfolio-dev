import React from "react";
import { BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="flex items-center gap-2 pb-8">
        <BriefcaseBusiness className="w-10 h-10 text-white" />
        <span className="text-white text-4xl font-semibold">Experience</span>
      </div>

      <div className="flex items-start gap-4 sm:gap-6 mb-4">
        <a
          href="https://leanlinking.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 mt-1"
          aria-label="Visit LeanLinking website"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/lean-linking-logo.avif`}
            alt="LeanLinking logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="w-full">
          <h3 className="text-2xl font-semibold text-white">LeanLinking</h3>
          <p className="mb-5 text-gray-400 text-sm">Aarhus, Denmark</p>

          <div className="relative border-l border-gray-700 ml-2">
            <div className="mb-5 ml-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>

              <p className="text-sm text-gray-400 mb-1">January 2026 - Present</p>
              <h4 className="text-xl font-semibold text-white">Student Software Engineer</h4>
              <p className="mb-2 text-gray-300 text-sm">
                Part-time role mainly focused on frontend development.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>
                  Frontend development using React.js and TypeScript
                </li>
                <li>
                  Build and maintain responsive UI components with Ant Design
                </li>
              </ul>
            </div>
            <div className="mb-5 ml-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>

              <p className="text-sm text-gray-400 mb-1">August 2025 - January 2026</p>
              <h4 className="text-xl font-semibold text-white">Software Developer Intern</h4>

              <p className="mb-2 text-gray-300 text-sm">
                Contributed to a SRM (Supplier Relationship Management) system by
                implementing key features and optimizing performance.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>
                  Developed frontend features with React.js and TypeScript
                </li>
                <li>Built backend services using C# and .NET</li>
                <li>
                  Implemented RESTful APIs for frontend–backend integration
                </li>
                <li>
                  Collaborated in an Agile Scrum environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 sm:gap-6">
        <a
          href="https://en.via.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 mt-1"
          aria-label="Visit VIA University College website"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/VIA-logo.jpeg`}
            alt="VIA University College logo"
            className="h-12 w-auto object-contain rounded-md"
          />
        </a>

        <div className="w-full">
          <h3 className="text-2xl font-semibold text-white">VIA University College</h3>
          <p className="mb-5 text-gray-400 text-sm">Horsens, Denmark</p>

          <div className="relative border-l border-gray-700 ml-2">
            <div className="mb-5 ml-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>

              <p className="text-sm text-gray-400 mb-1">September 2026 - Present</p>
              <h4 className="text-xl font-semibold text-white">Student Assistant - Mathematics</h4>
              <p className="mb-2 text-gray-300 text-sm">
                Supporting students in mathematics courses alongside my studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
