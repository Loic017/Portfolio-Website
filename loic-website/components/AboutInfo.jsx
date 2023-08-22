import React from "react";

export default function AboutInfo() {
    return (
        <section className="skills-text info-back overflow-hidden md:mt-10 md:text-left text-center md:w-[800px] w-390px w-full mx-auto text-text rounded-sm flex flex-col md:gap-2">
            <div className="h-[300px] w-full rounded-t-full bg-gradient-to-b from-primary to-transparent mx-auto text-center"></div>

            <div className="py-2">
                <h1 className="mt-2 mb-2 font-bold text-2xl w-[70%] mx-auto">
                    Hello there! Im Loic,
                </h1>
                <p className="pl-4 pr-4 md:w-full mx-auto mb-4">
                    I am a Computer Science undergraduate in my third year at
                    Cardiff University. My enthusiasm for
                    <bold className="font-bold"> problem-solving</bold> and my
                    affinity for <bold className="font-bold">creating</bold> has
                    brought me on a path of learning and programming.
                </p>
                <p className="pl-4 pr-4 md:w-full mx-auto mb-4">
                    Over the past few years I have delved down many rabbit
                    holes, improving my knowledge and skills along the way.
                </p>
                <h1 className="mt-2 mb-2 font-bold text-2xl w-[70%] mx-auto">
                    Where to find me
                </h1>
                <ul className="pl-4 pr-4 md:w-full mx-auto">
                    <li>
                        Posts/Blog: &nbsp;
                        <a
                            className="text-primary hover:text-accent"
                            href="https://blog.lorentel.com"
                        >
                            blog.lorentel.com
                        </a>
                    </li>
                    <li>
                        GitHub: &nbsp;
                        <a
                            className="text-primary hover:text-accent"
                            href="https://github.com/loic017"
                        >
                            github.com/loic017
                        </a>
                    </li>
                    <li>
                        LinkedIn: &nbsp;
                        <a
                            className="text-primary hover:text-accent"
                            href="https://www.linkedin.com/in/lemoineloic/"
                        >
                            linkedin.com/in/lemoineloic
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

// Original
// export default function AboutInfo() {
//     return (
//         <section className="mt-14 flex flex-col items-center w-[900px] mb-5 m-auto bg-gradient-to-b from-primary/40 to-transparent p-5 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold mb-5">About Me</h1>
//             <div className="flex gap-7">
//                 <div className="skills"></div>
//                 <p>
//                     A 3rd year undergraduate at Cardiff University with a
//                     passion for Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Cupiditate sint quasi sed rem dolore
//                     soluta, nulla culpa repellendus placeat quia ex corrupti.
//                     Molestias, saepe quae quis minus a numquam iste.
//                 </p>
//             </div>
//         </section>
//     );
// }
