import React from 'react';

const techIcons = [
  'react.svg',
  'javascript.svg',
  'typescript.svg',
  'java.svg',
  'csharp.svg',
  'postgresql.svg',
  'docker.svg',
  'kubernetes.svg',
  'azure.svg',
  'tailwindcss.svg',
];

export default function SkillMarquee() {
  const fullList = [...techIcons, ...techIcons]; 

  return (
    <div className="overflow-hidden w-full py-4 relative">
      <div className="flex animate-scrollLTR space-x-6 items-center w-max">
        {fullList.map((icon, idx) => (
          <img
            key={idx}
            src={`/icons/${icon}`}
            alt={icon}
            className="h-24 w-24 object-contain brightness-125 hover:brightness-150 transition drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
          />
        ))}
      </div>
    </div>
  );
}
