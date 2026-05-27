import { useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";

        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    return (
        <main className="bg-black min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black">
            <CustomCursor />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 md:px-16 lg:px-24 flex justify-between items-center z-40 mix-blend-difference text-white">
        <span className="font-bold text-xl tracking-tighter uppercase">
          SP.
        </span>

                <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
                    <a
                        href="#projects"
                        className="hover-target cursor-pointer hover:text-white transition"
                    >
                        Work
                    </a>

                    <a
                        href="#about"
                        className="hover-target cursor-pointer hover:text-white transition"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="hover-target cursor-pointer hover:text-white transition"
                    >
                        Connect
                    </a>
                </div>

                <button className="md:hidden text-sm uppercase tracking-widest font-bold hover-target">
                    Menu
                </button>
            </nav>

            <Hero />
            <About />
            <Projects />
            <Footer />
        </main>
    );
}