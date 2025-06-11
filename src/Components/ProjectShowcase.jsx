import { CodeXml } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 pb-8">
        <CodeXml className="w-10 h-10 text-white" />
        <span className="text-white text-4xl font-semibold">
          Featured Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/growmate.png`}
          title="GrowMate"
          description="Multi-sensor greenhouse where the plant care process is automated and monitored through a website."
          tech={["C#", ".NET", "PostgreSQL", "Docker", "GCloud"]}
          year="2025"
          link="https://github.com/SEP4-2025"
        />

        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/pokedex.png`}
          title="Pokedex"
          description="A web application that allows users to search and view information about various Pokémon."
          tech={["React", "JavaScript", "Bootstrap", "Rest API"]}
          year="2025"
          link="https://github.com/rrromanm/YapperWebApp"
        />

        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/yapper-web-app.png`}
          title="Yapper web app"
          description="Yapper intends to provide a simple, ad-free and data collection-free social media platform."
          tech={["Java", "gRPC","RabbitMQ", "C#", ".NET", "PostgreSQL"]}
          year="2024"
          link="https://github.com/rrromanm/YapperWebApp"
        />

        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/krn-portfolio.png`}
          title="KRN Portfolio"
          description="A personal portfolio website for a photographer, showcasing their work and providing contact information."
          tech={["React", "JavaScript", "Bootstrap"]}
          year="2024"
          link="https://github.com/rrromanm/krn-portfolio"
        />

        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/project-management.png`}
          title="Project Management System"
          description="A system designed to help Bob manage construction projects and showcase his work through a simple website."
          tech={["Java", "JavaFX", "HTML", "CSS", "JavaScript"]}
          year="2023"
          link="https://github.com/rrromanm/ProjectManagmentSystem"
        />

        <ProjectCard
          image={`${process.env.PUBLIC_URL}/images/flag-game.png`}
          title="Flag Game"
          description="Simple flag game application, where the user guesses the country flag. The application keeps up the score and automatically sets up the next flag to guess after submitting the answer."
          tech={["React", "JavaScript", "Rest API"]}
          year="2023"
          link="https://github.com/rrromanm/flag-game"
        />

      </div>
    </section>
  );
}
