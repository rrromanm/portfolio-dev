import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  year,
  link,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="flex justify-center items-center p-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="bg-white rounded-lg shadow-xl p-1 rotate-[2.5deg]">
          <img
            src={image}
            alt={title}
            className="rounded-md object-cover w-[300px] h-[185px]"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-white text-xs font-bold mb-2">TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full font-medium text-black bg-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-white/60 text-sm">
          <span>{year}</span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            View Project <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
