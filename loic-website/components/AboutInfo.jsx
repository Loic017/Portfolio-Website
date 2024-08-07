import React from "react";

import Image from "next/image";
import Experience from "../components/Experience";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPenAlt, FaCodepen, FaScroll } from "react-icons/fa";
import { BsEnvelopePaperFill } from "react-icons/bs";

import underconstruction from "../app/images/under-construction-warning-sign-vector.jpg";
import backdrop1 from "../app/images/backdrop1.jpg";
import frontpage from "../app/images/frontpage.png";

export default function AboutInfo() {
    return (
        <section className="">
            <div className="w-full h-32">
                <Image
                    className="h-full about-width md:h-full object-cover object-top backdrop-blur-sm rounded-b-md"
                    src={backdrop1}
                />
            </div>
            <div className="md:w-full info-back overflow-hidden md:text-left text-center mx-auto text-text rounded-sm flex flex-col md:gap-2">
                <div className="text-left mb-3">
                    <div className="flex min-[1000px]:flex-row flex-col about-width mt-10">
                        <Image
                            className="mx-auto w-80 h-full min-[1000px]:rounded-l-md rounded-md"
                            src={frontpage}
                        />
                        <div className="w-auto pl-5 mt-5">
                            <h1 className="text-3xl font-bold mb-4 text-left">
                                Hello there! Im Loic,
                            </h1>
                            <p className="mb-2">
                                I am a graduating Computer Science student at
                                Cardiff University.
                            </p>
                            <p className="mb-2">
                                While I have experience with different systems,
                                from web applications to software development, I
                                have an interest in researching and developing
                                machine learning systems and applications.
                            </p>
                            <p className="mb-2">
                                I hope that my work can be used to help others
                                and eventually make a positive impact on the
                                world.
                            </p>
                            <p className="">
                                <b>. . .</b>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold about-width text-center mb-1">
                        Links
                    </h2>
                    <div className="flex flex-row justify-center items-center mx-auto gap-5 mb-5 text-center">
                        <a className="" href="https://github.com/Loic017">
                            <BsGithub className="socials mx-auto" />
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/lemoineloic/">
                            <BsLinkedin className="socials mx-auto" />
                            LinkedIn
                        </a>
                        <a href="https://blog.lorentel.com">
                            <FaPenAlt className="socials mx-auto" />
                            Hashnode
                        </a>
                        <a href="https://www.lorentel.com/about">
                            <BsEnvelopePaperFill className="socials mx-auto" />
                            Resume
                        </a>
                    </div>

                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 mt-5 about-width">
                            Technologies
                        </h1>
                        <p className="mb-2 about-width">
                            I have experience with different languages and
                            technologies. In no particular order, this includes
                            but is not limited to:
                        </p>
                        <p className="about-width">
                            <b className="text-primary">Languages:</b> Python,
                            Java, HTML, CSS, JavaScript, MATLAB
                        </p>
                        <p className="about-width">
                            <b className="text-primary">
                                Frameworks and Libraries:
                            </b>{" "}
                            PyTorch, Django, React, Next.js, Tailwind
                        </p>
                        <p className="about-width">
                            <b className="text-primary">Hardware:</b> Arduino
                        </p>
                    </div>
                    <div className="about-mini-section">
                        <h1 className="text-3xl font-bold mb-2 mt-10 about-width">
                            Links and Contact
                        </h1>
                        <p className="mb-2 about-width">
                            • I can be contacted via email at{" "}
                            <i>&quot;reachloic@gmail.com&quot;</i> or messaged
                            on{" "}
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
                        <div className="award-item my-3">
                            <p className="about-width">
                                <b className="text-primary">July 2024 </b>
                                <b>
                                    Best Final Year Project, BSc Computer
                                    Science and Variants
                                </b>
                            </p>
                            <p className="about-width">Cardiff University</p>
                        </div>
                        <div className="award-item my-3">
                            <p className="about-width">
                                <b className="text-primary">June 2024 </b>
                                <b>
                                    First Prize, Student Poster Competition on
                                    “AI, Smart Healthcare, and IoT”
                                </b>
                            </p>
                            <p className="about-width">
                                Global Wales, Cardiff University and Vietnam
                                National University - Ho Chi Minh University of
                                Technology
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Experience className="" /> */}
            </div>
        </section>
    );
}
