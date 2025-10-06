import React from "react";
import { techStack } from "../Data/techStack";

export default function TechStack() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl font-semibold text-white mb-4">Skills</h2>
      <p className="text-gray-400 max-w-2xl mb-10">
        From frontend frameworks to backend systems, databases, DevOps, and tools — this is my tech toolkit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map(({ category, description, icon: CatIcon, items }, idx) => (
          <div
            key={idx}
            className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              <CatIcon className="w-6 h-6 text-gray-300" />
              <h3 className="text-lg font-semibold text-white">{category}</h3>
            </div>

            <p className="text-gray-400 text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
              {items.map(({ name, Icon, color }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/70 px-3 py-1.5 text-gray-200"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-sm">{name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
