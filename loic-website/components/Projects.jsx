import React from "react";
import Image from "next/image";

import postit from "../app/images/postit.png";
import fmimporter from "../app/images/fmimporter.png";
import website from "../app/images/website.png";
import programmercard from "../app/images/programmercard.png";
import github from "../app/images/github.png";

export default function Projects() {
    const projects = [
        {
            title: "Toolgether",
            description:
                "A community tool lending platform featuring user authentication, tool map, and tool request system. Developed with a team.",
            tools: ["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"],
            links: {
                "Project's hosting will be setup soon":
                    "https://www.lorentel.com",
            },
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        },
        {
            title: "Post It",
            description:
                "A post note themed note taking app with Google authentication, note sharing and more.",
            tools: ["Django", "HTML", "CSS", "PostgreSQL", "Neon.tech"],
            links: {
                GitHub: "https://github.com/Loic017/Post-It-Board",
                Website: "https://post-it-host.vercel.app",
            },
            image: postit,
        },
        {
            title: "Football Manager Image Importer",
            description:
                "Football Manager Face and Logo Importer. A Python GUI app. Add player faces or logos into Football Manager with ease.",
            tools: [
                "Python",
                "Customtkinter",
                "ElementTree XML",
                "PyInstaller",
            ],
            links: {
                GitHub: "https://github.com/Loic017/Football-Manager-Face-and-Logo-Importer",
            },
            image: fmimporter,
        },
        {
            title: "My Portfolio Website",
            description: "This website :)",
            tools: ["Next.js", "TailwindCSS", "Vercel"],
            links: {
                GitHub: "https://github.com/Loic017/Portfolio-Website",
            },
            image: website,
        },
        {
            title: "Programmer Card",
            description:
                "A programmer networking platform based off a business card concept. Includes GitHub user authentication and CRUD APIs for MongoDB.",
            tools: ["Next.js", "MongoDB", "Vercel"],
            links: {
                GitHub: "https://github.com/Loic017/MLH-Hacks-For-Hackers-Hackathon",
                "Project's hosting will be setup soon":
                    "https://www.lorentel.com",
            },
            image: programmercard,
        },
        {
            title: "Other",
            description:
                "For other small creations such other python scripts or HTML + CSS static websites, check out my GitHub.",
            tools: ["github.com/Loic017"],
            links: {
                GitHub: "https://github.com/Loic017",
            },
            image: github,
        },
    ];

    return (
        <section className="grid gap-2 mt-5 mb-5">
            <h1 className="skills-headings text-center text-3xl">Projects</h1>
            <p className="skills-headings text-center text-md">
                A collection of projects I have created and/or been a part of.
            </p>
            <div className="grid gap-4 mt-5">
                <div className="grid min-[1100px]:grid-cols-3 md:gap-3 gap-5 mx-auto">
                    {projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectComponent(props) {
    const { title, description, tools, links, image } = props;

    return (
        <div className="transition-all project-dark max-w-md h-72 mx-auto w-96 rounded-md md:text-text bg-accent/30 overflow-hidden">
            <div className="">
                <div className="relative">
                    <Image
                        className="h-32 w-full object-cover backdrop-blur-sm"
                        src={image}
                        width={500}
                        height={500}
                        alt={`Picture of ${title}`}
                    />
                    <div className="absolute bottom-2 right-2 z-10 flex gap-3 justify-end mt-3">
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
                <div className="p-3 pl-5 pr-5">
                    <div className="flex gap-3 opacity-40">
                        {tools.map((tool, index) => (
                            <p
                                key={index}
                                className="text-[13.5px] font-semibold"
                            >
                                {tool}
                            </p>
                        ))}
                    </div>
                    <div className="uppercase tracking-wide text-md font-bold mt-1">
                        {title}
                    </div>

                    <p className="mt-1 desc-dark">{description}</p>
                </div>
            </div>
        </div>
    );
}
