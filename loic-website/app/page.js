import React from "react";

import HomeHero from "../components/Home";
import Projects from "../components/Projects";
import AboutInfo from "../components/AboutInfo";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <main className="font-poppins">
            <section id="home" className="mb-28">
                <HomeHero />
            </section>
            <section
                id="about"
                className="p-1 md:text-text md:bg-secondary/50 md:w-[70%] md:mx-auto md:shadow-lg md:rounded-xl"
            >
                <AboutInfo />
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
        </main>
    );
}
