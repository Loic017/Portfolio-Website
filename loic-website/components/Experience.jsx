import React from "react";
import Image from "next/image";

import blacksquare from "../app/images/blacksquare.png";

import backdrop1 from "../app/images/backdrop1.jpg";

import cityofwestminstercollege from "../app/images/cityofwestminstercollege.png";

const projects = [
    {
        index: 2,
        title: "???",
        role: "???",
        tools: ["???"],
        info: <></>,
        links: {
            Website: "https://example.com",
            Article: "https://example.com",
        },
        image: blacksquare,
        dates: "???",
    },
    {
        index: 1,
        title: "BSc Computer Science",
        role: "First Class Honours",
        tools: ["Cardiff University"],
        info: (
            <>
                <b>Dissertation:</b> Design tiny machine learning models to
                detect epileptic seizures on wearables
                <br />
                <b>Awards:</b> Best Computer Science Final Year Project
            </>
        ),
        links: {
            Website: "https://example.com",
            Article: "https://example.com",
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cardiff_University_%28logo%29.svg/1200px-Cardiff_University_%28logo%29.svg.png",
        dates: "2021 - 2024",
    },
];

export default function Experiences() {
    return (
        <section className="grid gap-2">
            <div className="w-full h-32 mb-5">
                <Image
                    className="h-full about-width md:h-full object-cover object-top backdrop-blur-sm rounded-b-md"
                    src={backdrop1}
                />
            </div>
            <h1 className="skills-headings text-center text-3xl">Experience</h1>
            <p className="skills-headings text-center text-md">
                A timeline of my education and work experience.
            </p>
            <div className="grid gap-4 mt-7 mb-6">
                <div className="grid min-[1100px]:grid-cols-1 md:gap-0 mx-auto">
                    {projects.map((project, index) => (
                        <ExperienceComponent key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceComponent(props) {
    const { index, title, role, tools, info, links, image, dates } = props;

    return (
        <div>
            {index === projects.length ? (
                <div>
                    <div>
                        <div className="w-6 h-6 border-4 border-accent mx-auto rotate-45"></div>
                        <div className="w-1 h-10 bg-accent mx-auto"></div>
                    </div>
                </div>
            ) : null}
            <div className="ml-2 mr-2 transition-all md:h-52 project-dark h-auto mx-auto w-72 md:w-[900px] rounded-md shadow-lg overflow-hidden">
                <div className="flex md:flex-row flex-col mx-auto">
                    <div className="relative ">
                        <Image
                            className="w-full h-auto md:h-52 md:w-72 object-cover backdrop-blur-sm"
                            src={image}
                            width={500}
                            height={500}
                            alt={`Picture of ${title}`}
                        />
                        {/* <div className="absolute bottom-2 right-2 z-10 flex gap-3 justify-end mt-3">
                            {Object.entries(links).map(([name, url], index) => (
                                <a
                                    key={index}
                                    href={url}
                                    className="project-links font-semibold"
                                >
                                    {name}
                                </a>
                            ))}
                        </div> */}
                    </div>
                    <div className="pb-10 pt-3 pl-5 pr-3 md:w-full project-content-dark">
                        <div className="grid grid-cols-1 gap-x-3 md:flex md:flex-col md:justify-between md:h-full">
                            <div className="md:flex md:flex-col md:gap-2">
                                <div className="flex flex-row justify-between items-center my-auto text-sm font-semibold opacity-80">
                                    {tools.map((tool, index) => (
                                        <p key={index} className="">
                                            {tool}
                                        </p>
                                    ))}
                                    <p className="desc-dark text-end">
                                        {dates}
                                    </p>
                                </div>

                                <div className=" tracking-wide text-md font-bold">
                                    {title} - {role}
                                </div>
                                <p className="desc-dark">{info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {index === 1 ? (
                <div>
                    <div className="w-1 h-10 bg-accent mx-auto"></div>
                    <div className="w-6 h-6 border-4 border-accent mx-auto rounded-full"></div>
                </div>
            ) : null}
            {index !== 1 ? (
                <div className="w-1 h-10 bg-accent mx-auto"></div>
            ) : null}
        </div>
    );
}
