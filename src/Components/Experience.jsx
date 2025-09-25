import React from 'react'
import { BriefcaseBusiness } from 'lucide-react';

export default function Experience() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 pb-8">
        <BriefcaseBusiness className="w-10 h-10 text-white" />
        <span className="text-white text-4xl font-semibold">
          Experience
        </span>
      </div>

      <div className="relative border-l border-gray-700 ml-4">
        <div className="mb-10 ml-6">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>
          
          <p className="text-sm text-gray-400 mb-1">August 2025 - Present</p>
          <h3 className="text-xl font-semibold text-white">
            Software Developer Intern | LeanLinking
          </h3>
          <p className="mb-3 text-gray-400 text-sm">Aarhus, Denmark</p>

          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Assisted in developing and testing web applications using C# and .NET.</li>
            <li>Gained hands-on experience with PostgreSQL and Docker for database and containerized services.</li>
            <li>Contributed to cloud deployment on Google Cloud Platform (GCP).</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
