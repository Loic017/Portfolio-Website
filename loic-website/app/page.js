import Image from "next/image";

import HomeHero from "../components/Home";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <Projects />
        </main>
    );
}
