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
        <section className="skills-text text-text md:w-[80%] pt-5 pb-7 mx-auto mt-6 md:flex md:flex-col md:items-center md:justify-between border-t border-text">
            <h1 className="text-2xl text-center font-bold">
                I have experience creating with...
            </h1>
            <div className="flex flex-row text-center justify-center mt-2 gap-2">
                <div>
                    <div className="skills-rows">
                        <div className="group">
                            <DiPython className="skills text-8xl text-blue-700" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Python
                            </div>
                        </div>
                        <div className="group">
                            <DiJava className="skills text-8xl text-yellow-700" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Java
                            </div>
                        </div>
                        <div className="group">
                            <DiJavascript1 className="skills text-8xl text-yellow-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                JavaScript
                            </div>
                        </div>
                        <div className="group">
                            <DiHtml5 className="skills text-8xl text-orange-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                HTML5
                            </div>
                        </div>
                        <div className="group">
                            <DiCss3 className="skills text-8xl text-blue-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                CSS3
                            </div>
                        </div>
                        <div className="">
                            <div className="skills-break text-8x"></div>
                        </div>
                        <div className="group">
                            <DiDjango className="skills text-8xl text-green-700" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Django
                            </div>
                        </div>
                        <div className="group">
                            <BiLogoFlask className="skills text-8xl text-text" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Flask
                            </div>
                        </div>
                        <div className="group">
                            <DiReact className="skills text-8xl text-blue-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                React
                            </div>
                        </div>
                        <div className="group">
                            <TbBrandNextjs className="skills text-8xl text-text" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Next.js
                            </div>
                        </div>
                        <div className="group">
                            <BiLogoTailwindCss className="skills text-8xl text-cyan-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Tailwind CSS
                            </div>
                        </div>
                        <div className="group">
                            <FaBootstrap className="skills text-8xl text-purple-700" />
                            <div className="tech-tooltip group-hover:scale-100">
                                Bootstrap
                            </div>
                        </div>
                        <div className="group">
                            <BiLogoPostgresql className="skills text-8xl text-blue-500" />
                            <div className="tech-tooltip group-hover:scale-100">
                                PostgreSQL
                            </div>
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
