import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Experience from "../Components/Experience";
import ProjectShowcase from "../Components/ProjectShowcase";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";
import Particles from "../Components/reactbits/Particles";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-20 bg-[#1E1E1E]" />

      <div className="fixed inset-0 -z-10">
        <Particles
          particleCount={500}
          particleSpread={12}
          speed={0.1}
          particleColors={["#ffffff"]}
          alphaParticles={true}
          particleBaseSize={90}
          sizeRandomness={1}
        />
      </div>

      <Header />
      <Hero />
      <Experience />
      <ProjectShowcase />
      <Skills />
      <Footer />
    </div>
  );
}

