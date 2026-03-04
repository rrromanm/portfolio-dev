import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-white/60 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="text-sm">
          © {new Date().getFullYear()} Romans Mihalonoks. All rights reserved.
        </div>

        {/* Center: Navigation */}
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
        </nav>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/rrromanm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/rrromanm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:roma.mihalonok@gmail.com"
            className="hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
