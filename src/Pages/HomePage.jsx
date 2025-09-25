import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProjectShowcase from "../Components/ProjectShowcase";
import Footer from "../Components/Footer";
import Experience from "../Components/Experience";

export default function HomePage() {
    return (
        <div className="relative w-screen h-screen">
            <Header />
            <Hero />
            <Experience />
            <ProjectShowcase />
            <Footer />
        </div>
    );
}
