import React from "react";
import Image from "next/image";

import postit from "../app/images/postit.png";
import fmimporter from "../app/images/fmimporter.png";
import website from "../app/images/website.png";
import programmercard from "../app/images/programmercard.png";
import github from "../app/images/github.png";
import food from "../app/images/food.jpg";

import { BsLink45Deg } from "react-icons/bs";

const projects = [
    {
        index: 7,
        title: "Toolgether",
        description:
            "A community tool lending platform featuring user authentication, area tool map, and a tool request system. Developed within a team.",
        tools: ["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"],
        links: {
            "Blog Post": "https://blog.lorentel.com",
        },
        image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
    },
    {
        index: 6,
        title: "Post It",
        description:
            "A post it note themed note taking app with Google authentication, note sharing and more utilising CRUD operations.",
        tools: ["Django", "HTML", "CSS", "PostgreSQL", "Neon.tech"],
        links: {
            GitHub: "https://github.com/Loic017/Post-It-Board",
            Website: "https://post-it-host.vercel.app",
        },
        image: postit,
    },
    {
        index: 5,
        title: "More Meals",
        description:
            "A meal planning app with recipes and auto-shopping lists.",
        tools: [
            "Django",
            "Django Rest",
            "Next.js",
            "Tailwind",
            "PostgreSQL",
            "Neon.tech",
        ],
        links: {
            GitHub: "https://github.com/Loic017/More-Meals-v2",
            "Blog Post": "https://blog.lorentel.com",
        },
        image: food,
    },
    {
        index: 4,
        title: "Football Manager Image Importer",
        description:
            "A user-friendly python GUI application featuring file uploads and XML configuration file generation. Add player faces or logos into Football Manager with ease.",
        tools: ["Python", "Customtkinter", "ElementTree XML", "PyInstaller"],
        links: {
            GitHub: "https://github.com/Loic017/Football-Manager-Face-and-Logo-Importer",
        },
        image: fmimporter,
    },
    {
        index: 3,
        title: "My Portfolio Website",
        description:
            "A modern and responsive portfolio website built with Next.js and TailwindCSS.",
        tools: ["Next.js", "TailwindCSS", "Vercel"],
        links: {
            GitHub: "https://github.com/Loic017/Portfolio-Website",
        },
        image: website,
    },
    {
        index: 2,
        title: "Programmer Card",
        description:
            "A programmer networking platform based off a business card concept. Includes GitHub user authentication and CRUD APIs for MongoDB. Developed for the MLH Hacks for Hackers hackathon.",
        tools: ["Next.js", "MongoDB", "Vercel"],
        links: {
            GitHub: "https://github.com/Loic017/MLH-Hacks-For-Hackers-Hackathon",
            "Blog Post": "https://blog.lorentel.com",
        },
        image: programmercard,
    },
    {
        index: 1,
        title: "GitHub Profile",
        description:
            "For other small creations such other python scripts or HTML + CSS static websites, check out my GitHub.",
        tools: ["github.com/Loic017"],
        links: {
            GitHub: "https://github.com/Loic017",
        },
        image: github,
    },
];

export default function Projects() {
    return (
        <section className="grid gap-2 mt-5 mb-5">
            <h1 className="skills-headings text-center text-3xl">Projects</h1>
            <p className="skills-headings text-center text-md">
                A collection of projects I have created and/or been a part of.
            </p>
            <div className="grid gap-4 mt-5">
                <div className="grid min-[1100px]:grid-cols-1 md:gap-x-10 mx-auto">
                    {projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectComponent(props) {
    const { index, title, description, tools, links, image } = props;

    return (
        <div className="flex-col">
            {index === projects.length ? (
                <div>
                    <div>
                        <div className="w-6 h-6 border-4 border-accent mx-auto rotate-45"></div>
                        <div className="w-1 h-10 bg-accent mx-auto"></div>
                    </div>
                </div>
            ) : null}
            <div className="transition-all project-dark h-72 md:h-60 mx-auto w-96 rounded-md md:text-text shadow-md bg-secondary overflow-hidden md:w-[800px] md:flex">
                <div className="relative">
                    <Image
                        className="h-32 w-full md:h-full md:w-80 object-cover backdrop-blur-sm"
                        src={image}
                        width={500}
                        height={500}
                        alt={`Picture of ${title}`}
                    />
                    <div className="md:hidden absolute bottom-2 right-2 z-10 flex gap-3 justify-end mt-3">
                        {Object.entries(links).map(([name, url], index) => (
                            <a
                                key={index}
                                href={url}
                                className="project-links font-semibold"
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="p-3 pl-5 pr-5 md:w-full md:h-60 md:p-7 md:py-5 md:flex md:flex-col md:justify-between">
                    <div className="flex gap-3 md:gap-5 opacity-40">
                        {tools.map((tool, index) => (
                            <p
                                key={index}
                                className="text-[13.5px] font-semibold"
                            >
                                {tool}
                            </p>
                        ))}
                    </div>
                    <div className="uppercase tracking-wide text-2xl font-bold mt-1">
                        {title}
                    </div>
                    <p className="mt-1 text-[15px] desc-dark ">{description}</p>
                    <div className="hidden md:flex gap-2 mt-3 items-center self-end">
                        <BsLink45Deg />
                        {Object.entries(links).map(([name, url], index) => (
                            <a
                                key={index}
                                href={url}
                                className="project-links font-semibold flex items-center"
                            >
                                {name}
                            </a>
                        ))}
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
