import React from "react";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Toolgether",
            description:
                "A community tool lending platform featuring user authentication, tool map, and tool request system. Developed with a team.",
            tools: ["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"],
            links: {
                Website: "https://example.com",
                Article: "https://example.com",
            },
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        },
        {
            title: "Post It",
            description:
                "A post note themed note taking app with Google authentication, note sharing and more.",
            tools: ["Django", "HTML", "CSS", "PostgreSQL", "Neon.tech"],
            links: {
                Website: "https://example.com",
                Article: "https://example.com",
            },
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        },
        {
            title: "This Website",
            description: "My personal portfolio website.",
            tools: ["Next.js", "TailwindCSS", "Vercel"],
            links: {
                Website: "https://example.com",
                Article: "https://example.com",
            },
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        },
        {
            title: "Programmer Card",
            description:
                "A programmer networking platform based off a business card concept. Includes GitHub user authentication and CRUD APIs for MongoDB.",
            tools: ["Next.js", "MongoDB", "Vercel"],
            links: {
                Website: "https://example.com",
                Article: "https://example.com",
            },
            image: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1",
        },
    ];

    return (
        <section className="grid gap-2 mt-5">
            <h1 className="skills-headings text-center text-3xl">Projects</h1>
            <p className="skills-headings text-center text-md">
                A collection of projects I have created and/or been a part of.
            </p>
            <div className="grid gap-4 mt-5">
                <div className="grid min-[1100px]:grid-cols-2 md:gap-3 gap-5 mx-auto">
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
        <div className="transition-all project-dark max-w-md h-72 mx-auto w-96 rounded-md shadow-lg md:text-text bg-secondary overflow-hidden md:max-w-2xl">
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
                            <p key={index} className="text-sm font-semibold">
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
