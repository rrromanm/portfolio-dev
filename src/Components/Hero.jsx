import React from "react";
import profilePic from "../Assets/profile-pic.JPG";
import SkillMarquee from "./SkillsMarquee";
import { Github, Linkedin, Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-fr gap-8">
        {/* Contact info */}
        <div className="h-[40rem] bg-white/5 backdrop-blur-md rounded-lg p-6 md:row-span-2 border border-white/10 shadow-lg flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-40 h-40 overflow-hidden rounded-full">
            <img
              src={profilePic}
              alt="Roman's portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold p-3">
              Romans Mihalonoks
            </h2>
            <p className="text-white/70 text-sm">
              Studying Software Engineering at VIA University College
            </p>
          </div>

          <div className="flex space-x-4 p-2">
            <a
              href="https://github.com/rrromanm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex text-white items-center justify-center rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/rrromanm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex text-white items-center justify-center rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="w-full text-left space-y-5 text-white text-sm pt-6">
            <div>
              <p className="text-white/40 text-xs">PHONE:</p>
              <p className="font-medium">+45 81 90 04 99</p>
            </div>
            <div>
              <p className="text-white/40 text-xs">EMAIL:</p>
              <p className="font-medium">roma.mihalonok@gmail.com</p>
            </div>
            <div>
              <p className="text-white/40 text-xs">LOCATION:</p>
              <p className="font-medium">Horsens, Denmark</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="h-[25rem] bg-white/5 backdrop-blur-md rounded-lg p-6 md:col-span-2 border border-white/10 shadow-lg"></div>

        {/* Languages */}
        <div className="h-[13rem] bg-white/5 backdrop-blur-md rounded-lg p-6 md:col-span-2 border border-white/10 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">Skills</h2>
            <div className="relative group cursor-pointer">
              <Info
                size={20}
                className="text-white/70 hover:text-white transition"
              />
              <div className="absolute right-0 top-8 w-64 bg-white/10 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Technologies I actually have experience with — not just hello
                world.
              </div>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <SkillMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
