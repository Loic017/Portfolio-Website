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
        <section className="px-5 md:w-auto mx-auto mt-5 mb-10 p-57 md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="text-3xl text-center font-bold">
                I have experience with...
            </h1>
            <div className="flex flex-row justify-center mt-2 gap-2 md:flex-col">
                <div>
                    <h2 className="skills-headings">Languages</h2>
                    <div class="hidden md:bg-accent/20 md:rounded-full md:h-1"></div>
                    <div className="skills-rows">
                        <DiPython className="skills text-8xl text-blue-700" />
                        <DiJava className="skills text-8xl text-yellow-700" />
                        <DiJavascript1 className="skills text-8xl text-yellow-500" />
                        <DiHtml5 className="skills text-8xl text-orange-500" />
                        <DiCss3 className="skills text-8xl text-blue-500" />
                    </div>
                </div>
                <div>
                    <h2 className="skills-headings">Frameworks</h2>
                    <div class="hidden md:bg-accent/20 md:rounded-full md:h-1"></div>
                    <div className="skills-rows">
                        <DiDjango className="skills text-8xl text-green-700" />
                        <BiLogoFlask className="skills text-8xl text-black-700" />
                        <DiReact className="skills text-8xl text-blue-500" />
                        <TbBrandNextjs className="skills text-8xl text-black-700" />
                        <BiLogoTailwindCss className="skills text-8xl text-cyan-500" />
                        <FaBootstrap className="skills text-8xl text-purple-700" />
                    </div>
                </div>
                <div>
                    <h2 className="skills-headings">Other</h2>
                    <div class="hidden md:bg-accent/20 md:rounded-full md:h-1"></div>
                    <div className="skills-rows">
                        <BiLogoPostgresql className="skills text-8xl text-blue-500" />
                    </div>
                </div>
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
