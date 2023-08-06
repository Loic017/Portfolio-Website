import React from "react";

export default function AboutInfo() {
    return (
        <section className="skills-text info-back overflow-hidden md:mt-10 md:text-left text-center md:w-[800px] w-390px shadow-xl w-full mx-auto text-text bg-secondary/50 rounded-2xl flex md:flex-row flex-col md:gap-2">
            <img
                className="md:h-auto md:w-[300px] object-cover h-[100px] w-full"
                src="https://images.unsplash.com/photo-1658409524023-5c835864baf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80"
                alt=""
            />

            <div className="">
                <h1 className="mt-2 mb-2 font-bold text-2xl w-[70%] mx-auto">
                    Hello there! Im Loic,
                </h1>
                <p className="pl-4 pr-4 md:w-96 mx-auto mb-4">
                    I am a Computer Science undergraduate in my third year at
                    Cardiff University. My enthusiasm for
                    <bold className="font-bold"> problem-solving</bold> and my
                    affinity for <bold className="font-bold">creating</bold> has
                    brought me on a path of learning and programming.
                </p>
                <p className="pl-4 pr-4 md:w-96 mx-auto mb-4">
                    Over the past few years I have delved down many programming
                    rabit holes, improving my knowledge and skills along the
                    way.
                </p>
                <p className="pl-4 pr-4 md:w-96 mx-auto mb-4">
                    When I am not typing away, I sometimes become a manager on
                    Football Manager or I am enjoying some time with my dog.
                </p>
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
