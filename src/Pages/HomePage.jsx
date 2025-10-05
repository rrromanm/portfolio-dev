import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Experience from "../Components/Experience";
import ProjectShowcase from "../Components/ProjectShowcase";
import TechStack from "../Components/TechStack";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <div className="relative w-full min-h-screen">
            <Header />
            <Hero />
            <Experience />
            <ProjectShowcase />
            <TechStack />
            <Footer />
        </div>
    );
}
