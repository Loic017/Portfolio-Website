import React from "react";

import Image from "next/image";

import underconstruction from "../app/images/under-construction-warning-sign-vector.jpg";
import backdrop1 from "../app/images/backdrop1.jpg";

export default function AboutInfo() {
    return (
        <section className="">
            <div className="w-full h-44 bg-accent relative">
                <Image
                    className="h-full w-full md:h-full md:w-full object-cover backdrop-blur-sm object-top"
                    src={backdrop1}
                />
            </div>
            <div className="md:w-[900px] w-390px skills-text info-back overflow-hidden md:text-left text-center w-full mx-auto text-text rounded-sm flex flex-col md:gap-2">
                <div className="text-left">
                    <h1 className="text-3xl font-bold mb-5 mt-10 text-center">
                        Hello there! Im Loic,
                    </h1>
                    <p className="mb-2">
                        I am a graduating Computer Science student at Cardiff
                        University. My enthusiasm for problem-solving and my
                        affinity for creating has brought me on a path of
                        learning and programming. Over the past few years I have
                        delved down many rabbit holes, improving my knowledge
                        and skills along the way.
                    </p>
                    <p className="">
                        While having experience developing various systems from
                        web applications to software development, I have an
                        interest in researching and developing machine learning
                        solutions that can be used to improve and benefit
                        society. I hope that my work can be used to help others
                        and eventually make a positive impact on the world.
                    </p>
                    <hr className="bg-background h-1 my-10 rounded" />
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-5 mt-10 text-center">
                            Publications
                        </h1>
                        <div className="publication-item">
                            <p>
                                <b className="text-primary">2024 </b>
                                <b>
                                    Epileptic seizure detection with Tiny
                                    Machine Learning
                                </b>
                            </p>
                            <p>Loic Lorente Lemoine, Nhat Pham MobiUK 2024</p>
                            <p>
                                <b>MobiUK 2024</b> - Sixth UK Mobile, Wearable
                                and Ubiquitous Systems Research Symposium.
                            </p>
                        </div>
                    </div>
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-5 mt-10 text-center">
                            Awards
                        </h1>
                        <div className="award-item">
                            <p>
                                <b className="text-primary">2024 </b>
                                <b>
                                    First Prize, Student Poster Competition on
                                    “AI, Smart Healthcare, and IoT”
                                </b>
                            </p>
                            <p>
                                Cardiff University and Vietnam National
                                University- Ho Chi Minh University of Technology
                            </p>
                        </div>
                    </div>
                    <hr className="bg-background h-1 my-10 rounded" />
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-5 mt-10 text-center">
                            Technologies
                        </h1>
                        <p className="mb-2">
                            I have experience working with a variety of
                            technologies for different purposes and projects.
                            This is including but not limited to:
                        </p>
                        <p>
                            <b className="text-primary">Languages:</b> Python,
                            Java, HTML, CSS, JavaScript, MATLAB
                        </p>
                        <p>
                            <b className="text-primary">
                                Frameworks and Libraries:
                            </b>{" "}
                            PyTorch, Django, React, Tailwind, Bootstrap
                        </p>
                    </div>
                </div>
                <hr className="bg-background h-1 mt-5 mb-5 rounded" />

                <div className="text-center">
                    <h1 className="text-sm font-bold mb-1 mt-5">
                        Bare with me as I update this page.
                    </h1>
                    <Image
                        className="md:h-full w-full h-auto md:w-40 object-cover backdrop-blur-sm m-auto mt-1"
                        src={underconstruction}
                        width={500}
                        height={500}
                    />
                </div>
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
