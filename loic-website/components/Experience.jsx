import React from "react";
import Image from "next/image";

import blacksquare from "../app/images/blacksquare.png";

import cityofwestminstercollege from "../app/images/cityofwestminstercollege.png";

const projects = [
    {
        index: 2,
        title: "???",
        role: "???",
        tools: ["???"],
        links: {
            Website: "https://example.com",
            Article: "https://example.com",
        },
        image: blacksquare,
        dates: "???",
    },
    {
        index: 1,
        title: "Cardiff University",
        role: "BSc Computer Science - [Final Grade Soon]",
        tools: [
            "Artificial Intelligence, Computer Vision, Large-Scale Databases, Robotics, etc",
        ],
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
        <section className="grid gap-2 mt-5">
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
    const { index, title, role, tools, links, image, dates } = props;

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
            <div className="ml-2 mr-2 transition-all md:max-h-40 project-dark max-w-lg h-auto mx-auto w-72 md:w-[800px] rounded-md shadow-lg md:text-text bg-secondary overflow-hidden md:max-w-2xl">
                <div className="flex md:flex-row flex-col">
                    <div className="relative">
                        <Image
                            className="md:h-full w-full h-auto md:w-40 object-cover backdrop-blur-sm"
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
                    <div className="p-3 pl-5 pr-5 md:w-full project-content-dark">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:flex md:gap-x-0 opacity-40">
                            {tools.map((tool, index) => (
                                <p
                                    key={index}
                                    className="text-sm font-semibold"
                                >
                                    {tool}
                                </p>
                            ))}
                        </div>
                        <div className="uppercase tracking-wide text-md font-bold mt-1">
                            {title}
                        </div>
                        <p className="mt-1 desc-dark">{role}</p>
                        <p className="mt-1 desc-dark text-end">{dates}</p>
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
