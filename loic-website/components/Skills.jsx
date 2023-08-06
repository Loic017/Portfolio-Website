import React from "react";
import {
    DiDjango,
    DiPython,
    DiJava,
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiReact,
} from "react-icons/di";

import {
    BiLogoTailwindCss,
    BiLogoFlask,
    BiLogoPostgresql,
} from "react-icons/bi";

import { FaBootstrap } from "react-icons/fa";

import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
    return (
        <section className="skills-text text-text md:w-[80%] rounded-2xl pt-5 pb-7 mx-auto mt-5 md:flex md:flex-col md:justify-center md:items-center">
            <p className="text-center">Time to get technical</p>
            <h1 className="text-2xl text-center font-bold">
                I have experience with...
            </h1>
            <div className="flex flex-row text-center justify-center mt-2 gap-2 md:flex-col">
                <div>
                    <h2 className="skills-headings">Languages</h2>
                    <h3 className="skills-headings text-sm">~</h3>
                    <div className="skills-rows">
                        <div className="group">
                            <DiPython className="skills text-8xl text-blue-700" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Python
                            </span>
                        </div>
                        <div className="group">
                            <DiJava className="skills text-8xl text-yellow-700" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Java
                            </span>
                        </div>
                        <div className="group">
                            <DiJavascript1 className="skills text-8xl text-yellow-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                JavaScript
                            </span>
                        </div>
                        <div className="group">
                            <DiHtml5 className="skills text-8xl text-orange-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                HTML5
                            </span>
                        </div>
                        <div className="group">
                            <DiCss3 className="skills text-8xl text-blue-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                CSS3
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="skills-headings">Frameworks</h2>
                    <h3 className="skills-headings text-sm">& More</h3>
                    <div className="skills-rows">
                        <div className="group">
                            <DiDjango className="skills text-8xl text-green-700" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Django
                            </span>
                        </div>
                        <div className="group">
                            <BiLogoFlask className="skills text-8xl text-text" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Flask
                            </span>
                        </div>
                        <div className="group">
                            <DiReact className="skills text-8xl text-blue-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                React
                            </span>
                        </div>
                        <div className="group">
                            <TbBrandNextjs className="skills text-8xl text-text" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Next.js
                            </span>
                        </div>
                        <div className="group">
                            <BiLogoTailwindCss className="skills text-8xl text-cyan-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Tailwind CSS
                            </span>
                        </div>
                        <div className="group">
                            <FaBootstrap className="skills text-8xl text-purple-700" />
                            <span className="tech-tooltip group-hover:scale-100">
                                Bootstrap
                            </span>
                        </div>
                        <div className="group">
                            <BiLogoPostgresql className="skills text-8xl text-blue-500" />
                            <span className="tech-tooltip group-hover:scale-100">
                                PostgreSQL
                            </span>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}

// Original
// export default function Skills() {
//     return (
//         <section className="flex flex-col gap-5 text-text items-center justify-center w-[900px] mx-auto p-7 rounded-lg">
//             <h1 className="text-3xl font-bold">I have experience with...</h1>
//             <div>
//                 <h2 className="px-10 py-2 font-semibold">Languages</h2>
//                 <div className="skills-rows">
//                     <DiPython className="skills text-8xl text-blue-700" />
//                     <DiJava className="skills text-8xl text-yellow-700" />
//                     <DiJavascript1 className="skills text-8xl text-yellow-500" />
//                     <DiHtml5 className="skills text-8xl text-orange-500" />
//                     <DiCss3 className="skills text-8xl text-blue-500" />
//                 </div>
//             </div>
//             <div>
//                 <h2 className="px-10 py-2 font-semibold">Frameworks</h2>
//                 <div className="skills-rows">
//                     <DiDjango className="skills text-8xl text-green-700" />
//                     <BiLogoFlask className="skills text-8xl text-black-700" />
//                     <DiReact className="skills text-8xl text-blue-500" />
//                     <TbBrandNextjs className="skills text-8xl text-black-700" />
//                     <BiLogoTailwindCss className="skills text-8xl text-cyan-500" />
//                     <FaBootstrap className="skills text-8xl text-purple-700" />
//                 </div>
//             </div>
//             <div>
//                 <h2 className="text-center py-2 font-semibold">Other</h2>
//                 <div className="skills-rows">
//                     <BiLogoPostgresql className="skills text-8xl text-blue-500" />
//                 </div>
//             </div>
//         </section>
//     );
// }
