import { ChevronRight} from "lucide-react";
import TypeWriter from "typewriter-effect";

export default function Header() {
    const fullText = "rrromanm";

  return (
    <header className="shadow-md px-6 py-4 bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="text-xl font-bold flex items-center">
          <ChevronRight className="w-6 h-6 mr-1 text-white" />
          <span className="relative font-mono">
            <TypeWriter
              onInit={typewriter => {
                typewriter
                  .typeString(fullText)
                  .start();
              }}
              options={{
                cursor: "_",
                delay: 200,
              }}
            />
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About Me</a>
          <a href="#services" className="hover:text-white">Education</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        </div>
    </header>
  );
}
