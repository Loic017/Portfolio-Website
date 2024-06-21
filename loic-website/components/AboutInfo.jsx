import React from "react";

import Image from "next/image";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPenAlt, FaCodepen, FaScroll } from "react-icons/fa";

import underconstruction from "../app/images/under-construction-warning-sign-vector.jpg";
import backdrop1 from "../app/images/backdrop1.jpg";

export default function AboutInfo() {
    return (
        <section className="">
            <div className="w-full h-32">
                <Image
                    className="h-full about-width md:h-full object-cover object-top backdrop-blur-sm"
                    src={backdrop1}
                />
            </div>
            <div className="md:w-full w-390px info-back overflow-hidden md:text-left text-center mx-auto text-text rounded-sm flex flex-col md:gap-2">
                <div className="text-left mb-3">
                    <h1 className="text-3xl font-bold mb-2 mt-10 text-center">
                        Hello there! Im Loic,
                    </h1>
                    <p className="mb-2 about-width">
                        I am a graduating Computer Science student at Cardiff
                        University. My enthusiasm for problem-solving and my
                        affinity for creating has brought me on a path of
                        learning and programming. Over the past few years I have
                        delved down many rabbit holes, improving my knowledge
                        and skills along the way.
                    </p>
                    <p className="about-width">
                        While having experience developing various systems from
                        web applications to software development, I have an
                        interest in researching and developing machine learning
                        solutions that can be used to improve and benefit
                        society. I hope that my work can be used to help others
                        and eventually make a positive impact on the world.
                    </p>

                    <div className="flex flex-row justify-center items-center mx-auto gap-5 my-5">
                        <a href="https://github.com/Loic017">
                            <BsGithub className="socials" />
                        </a>
                        <a href="https://www.linkedin.com/in/lemoineloic/">
                            <BsLinkedin className="socials" />
                        </a>
                        <a href="https://blog.lorentel.com">
                            <FaPenAlt className="socials" />
                        </a>
                    </div>

                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 mt-5 about-width">
                            Technologies
                        </h1>
                        <p className="mb-2 about-width">
                            I have experience working with a variety of
                            technologies for different purposes and projects.
                            This is including but not limited to:
                        </p>
                        <p className="about-width">
                            <b className="text-primary">Languages:</b> Python,
                            Java, HTML, CSS, JavaScript, MATLAB
                        </p>
                        <p className="about-width">
                            <b className="text-primary">
                                Frameworks and Libraries:
                            </b>{" "}
                            PyTorch, Django, React, Tailwind, Bootstrap
                        </p>
                    </div>
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 mt-10 about-width">
                            Links and Contact
                        </h1>
                        <p className="mb-2 about-width">
                            • I can be contacted via email at{" "}
                            <u>[email here soon]</u> or messaged on{" "}
                            <a href="https://www.linkedin.com/in/lemoineloic">
                                <u>LinkedIn</u>
                            </a>
                            .
                        </p>
                        <p className="mb-2 about-width">
                            • View posts on various projects or other topics on
                            my{" "}
                            <a href="https://blog.lorentel.com/">
                                <u>Hashnode</u>
                            </a>
                            .
                        </p>
                        <p className="mb-2 about-width">
                            • Check out some of my work and projects on my{" "}
                            <a href="https://github.com/Loic017">
                                <u>GitHub</u>
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <div className="news-light news-dark news-text-dark news-text-light py-6">
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 about-width">
                            Publications
                        </h1>
                        <div className="publication-item">
                            <p className="about-width">
                                <b className="text-primary">2024 </b>
                                <b>
                                    Epileptic seizure detection with Tiny
                                    Machine Learning
                                </b>
                            </p>
                            <p className="about-width">
                                Loic Lorente Lemoine, Nhat Pham MobiUK 2024
                            </p>
                            <p className="about-width">
                                <b>MobiUK 2024</b> - Sixth UK Mobile, Wearable
                                and Ubiquitous Systems Research Symposium.
                            </p>
                        </div>
                    </div>
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 mt-10 about-width">
                            Awards
                        </h1>
                        <div className="award-item">
                            <p className="about-width">
                                <b className="text-primary">2024 </b>
                                <b>
                                    First Prize, Student Poster Competition on
                                    “AI, Smart Healthcare, and IoT”
                                </b>
                            </p>
                            <p className="about-width">
                                Cardiff University and Vietnam National
                                University- Ho Chi Minh University of Technology
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
