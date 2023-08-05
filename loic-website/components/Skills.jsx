import {
    DiDjango,
    DiPython,
    DiJava,
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiReact,
} from "react-icons/di";

import { BiLogoTailwindCss } from "react-icons/bi";

import { FaBootstrap } from "react-icons/fa";

import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
    return (
        <section class="flex flex-col gap-5 text-text items-center justify-center">
            <h1 className="text-3xl font-bold">I have experience with...</h1>
            <div>
                <h2 class="px-10 py-2">Languages</h2>
                <div className="skills-rows">
                    <DiPython className="skills text-8xl text-blue-700" />
                    <DiJava className="skills text-8xl text-yellow-700" />
                    <DiJavascript1 className="skills text-8xl text-yellow-500" />
                    <DiHtml5 className="skills text-8xl text-orange-500" />
                    <DiCss3 className="skills text-8xl text-blue-500" />
                </div>
            </div>
            <div>
                <h2 class="px-10 py-2">Frameworks</h2>
                <div className="skills-rows">
                    <DiDjango className="skills text-8xl text-green-700" />
                    <DiReact className="skills text-8xl text-blue-500" />
                    <TbBrandNextjs className="skills text-8xl text-black-700" />
                    <BiLogoTailwindCss className="skills text-8xl text-cyan-500" />
                    <FaBootstrap className="skills text-8xl text-purple-700" />
                </div>
            </div>
            <div>
                <h2>Other</h2>
            </div>
        </section>
    );
}
