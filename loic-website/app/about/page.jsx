import Image from "next/image";
import AboutInfo from "../../components/AboutInfo";
import Skills from "../../components/Skills";

export default function About() {
    return (
        <section className="max-w-7xl mx-auto">
            <AboutInfo />
            <Skills />
        </section>
    );
}
