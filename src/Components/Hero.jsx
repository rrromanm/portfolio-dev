import React from "react";
import profilePic from "../Assets/profile-pic.JPG";
import CV from "../Assets/CV.pdf";
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
              Software Engineering student at VIA University College
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
        <div className="h-[25rem] bg-white/5 backdrop-blur-md rounded-lg p-6 md:col-span-2 border border-white/10 shadow-lg">
          <p className="text-white/40 text-sm md:text-base">
            WELCOME!
          </p>
          <h1 className="text-white font-semibold text-3xl lg:text-4xl xl:text-6xl pt-2 pb-1 md:pt-4 md:pb-4">
            I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%] bg-clip-text text-transparent animate-gradient">
              Romans Mihalonoks
            </span>
          </h1>
          <p className="text-white/70 text-sm md:text-lg lg:text-xl leading-relaxed mt-2">
            Aspiring Full-Stack Developer based in Denmark. Originally from
            Latvia and raised in Spain. Focused on Frontend, Backend, and Cloud
            development. Currently pursuing a Software Engineering degree at VIA
            University College.
          </p>

          <div className="mt-10 lg:mt-16 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-auto">
              <a
                href={CV}
                download
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg hover:from-blue-400 hover:to-blue-600 transition font-medium shadow-sm text-center block"
              >
                Download CV
              </a>
            </div>

            <div className="w-full sm:w-auto">
              <a
                href="mailto:roma.mihalonok@gmail.com"
                className="w-full border border-white/20 text-white px-5 py-2 rounded-lg hover:bg-white/10 transition font-medium shadow-sm text-center block"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="h-[13rem] bg-white/5 backdrop-blur-md rounded-lg p-6 md:col-span-2 border border-white/10 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">Skills</h2>
            <div className="relative group cursor-pointer">
              <Info
                size={20}
                className="text-white/70 hover:text-white transition"
              />
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 w-64 bg-white/10 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
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
