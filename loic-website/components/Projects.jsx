import React from "react";

export default function Projects() {
    return (
        <section className="grid gap-5 mt-5">
            <h1 className="skills-headings text-center text-3xl">
                My Projects
            </h1>
            <div className="grid md:grid-cols-3 md:gap-3 gap-5 mx-auto">
                <ProjectComponent
                    title="Toolgether"
                    description="Lorem"
                    tools={["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"]}
                    links={{
                        Website: "https://example.com",
                        GitHub: "https://github.com/example",
                        Blog: "https://example.com/blog",
                    }}
                    image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                />
                <ProjectComponent
                    title="Toolgether"
                    description="Lorem"
                    tools={["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"]}
                    links={{
                        Website: "https://example.com",
                        GitHub: "https://github.com/example",
                        Blog: "https://example.com/blog",
                    }}
                    image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                />
                <ProjectComponent
                    title="Toolgether"
                    description="Lorem"
                    tools={["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"]}
                    links={{
                        Website: "https://example.com",
                        GitHub: "https://github.com/example",
                        Blog: "https://example.com/blog",
                    }}
                    image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                />
                <ProjectComponent
                    title="Toolgether"
                    description="Lorem"
                    tools={["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"]}
                    links={{
                        Website: "https://example.com",
                        GitHub: "https://github.com/example",
                        Blog: "https://example.com/blog",
                    }}
                    image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"
                />
            </div>
        </section>
    );
}

function ProjectComponent(props) {
    const { title, description, tools, links, image } = props;

    return (
        <div className="max-w-md mx-auto w-96 rounded-xl shadow-lg md:text-text md:bg-secondary/50 overflow-hidden md:max-w-2xl">
            <div className="">
                <div className="relative">
                    <img className="h-32 w-full object-cover" src={image} />
                    <div className="absolute bottom-2 right-2 z-10 flex gap-3 justify-end mt-3">
                        {Object.entries(links).map(([name, url], index) => (
                            <a key={index} href={url} className="project-links">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm font-semibold">
                        {title}
                    </div>
                    <div className="flex gap-1">
                        {tools.map((tool, index) => (
                            <p key={index} className="mt-1 text-sm">
                                {tool}
                            </p>
                        ))}
                    </div>

                    <p className="mt-1">{description}</p>
                </div>
            </div>
        </div>
    );
}
