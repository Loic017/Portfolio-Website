import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPenAlt, FaCodepen, FaScroll } from "react-icons/fa";

export default function HomeHero() {
    return (
        <section className="">
            <div className="mt-28 max-[840px]:mt-2 w-full flex flex-col mx-auto text-center">
                <div className="h-[510px] w-96 rounded-t-full bg-gradient-to-b from-primary to-transparent mx-auto text-center"></div>
                <div className="mt-14 max-[840px]:mt-1">
                    <h1 className="home-header text-text text-5xl font-extrabold max-[640px]:text-center max-[640px]:mx-auto">
                        Loic Lorente Lemoine
                    </h1>
                    <h2 className="home-header type-roles text-text text-2xl my-4"></h2>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center mx-auto gap-5">
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
            {/* straight line */}

            <div className="news-light news-dark news-text-dark news-text-light">
                <hr className="h-1 bottom-0 mt-10 mb-5 mx-auto opacity-100" />

                <FaScroll className=" text-2xl mx-auto mt-15" />
                <div className="flex flex-row justify-center items-center mx-auto gap-5">
                    {/* news section */}
                    {/* h1 */}
                    <h1 className="text-3xl font-extrabold mt-2">News</h1>
                </div>
                <p className=" text-lg text-start mt-2 w-[900px] mx-auto">
                    <b>June 2024 -</b> I have won the first prize award in the
                    Cardiff University and Vietnam National University-Ho Chi
                    Minh University of Technology Student Poster Competition on
                    "AI, Smart Healthcare, and IoT" in 2024.
                </p>
                <p className="x text-lg text-start mt-2 w-[900px] mx-auto">
                    <b>May 2024 -</b> My abstract on the preliminary results
                    from my study on "Epileptic seizure detection with Tiny
                    Machine Learning" has been accepted to the MobiUK 2024
                    conference.
                </p>
            </div>
        </section>
    );
}
