import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProjectShowcase from "../Components/ProjectShowcase";

export default function HomePage() {
    return (
        <div className="relative w-screen h-screen">
            <Header />
            <Hero />
            <ProjectShowcase />
        </div>
    );
}
