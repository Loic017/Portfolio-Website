"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";

import backdrop1 from "../app/images/backdrop1.jpg";

import postit from "../app/images/postit.png";
import fmimporter from "../app/images/fmimporter.png";
import toolgether from "../app/images/toolgether.png";
import website from "../app/images/website.png";
import programmercard from "../app/images/programmercard.png";
import github from "../app/images/github.png";
import food from "../app/images/food.jpg";
import tiny from "../app/images/tiny.png";
import devices from "../app/images/devices.png";

import { BsLink45Deg } from "react-icons/bs";

const research = [
    {
        index: 0,
        title: "Epileptic seizure detection with Tiny Machine Learning",
        description: (
            <div>
                A study exploring the development and implementation of
                efficient Tiny Machine Learning models for the detection of
                epileptic seizures on an Arduino Platform.
                <div style={{ marginTop: "0.5em" }}>
                    Supervised by Nhat Pham for my BSc Computer Science
                    Dissertation &apos;Design a tiny machine learning model to
                    detect epileptic seizures on wearables&apos;.
                </div>
            </div>
        ),
        tools: [
            "Tiny Machine Learning",
            "PyTorch",
            "TensorFlow",
            "MNE/EEG Data",
            "Arduino",
        ],
        links: {
            More_Info: "https://blog.lorentel.com/tinyml-seizure-detection",
            Github_Repo:
                "https://github.com/Loic017/Epileptic-seizure-detection-with-Tiny-Machine-Learning",
        },
        image: devices,
    },
];

const projects = [
    {
        index: 7,
        title: "Toolgether",
        description:
            "A community tool lending platform featuring user authentication, tool proximity map, and a tool request system. Developed within a team for a group project.",
        tools: ["Django", "HTML", "CSS", "Bootstrap", "Leaflet.js"],
        links: {
            "Info Coming Soon": "https://blog.lorentel.com",
        },
        image: toolgether,
    },
    {
        index: 6,
        title: "Post It",
        description:
            "A post it note themed note taking app with Google authentication, note sharing and more utilising CRUD operations.",
        tools: ["Django", "HTML", "CSS", "PostgreSQL", "Neon.tech"],
        links: {
            GitHub: "https://github.com/Loic017/Post-It-Board",
            Link: "https://post-it-host.vercel.app",
        },
        image: postit,
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
            "Info Coming Soon": "https://blog.lorentel.com",
        },
        image: programmercard,
    },
    {
        index: 1,
        title: "GitHub Profile",
        description:
            "For other small creations such as other python scripts or HTML + CSS static websites, check out my GitHub.",
        tools: ["github.com/Loic017"],
        links: {
            GitHub: "https://github.com/Loic017",
        },
        image: github,
    },
];

export default function Projects() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <section className="grid gap-2 mb-5">
            <div className="w-full h-32 mb-5">
                <Image
                    className="h-full about-width md:h-full object-cover object-top backdrop-blur-sm"
                    src={backdrop1}
                />
            </div>
            <h1 className="skills-headings text-center text-3xl">My Work</h1>
            <p className="pa-2 text-md max-[710px]:w-96 min-[710px]:w-[900px] mx-auto">
                A collection of projects I have developed and/or been a part of.
                This includes research work alongside other personal projects. A
                complete collection alongside any smaller projects can be found
                on my GitHub.
            </p>
            <p className="pa-2 text-md max-[710px]:w-96 min-[710px]:w-[900px] mx-auto">
                For more information on each piece of work, follow the attached
                links.
            </p>
            <h2 className="skills-headings text-2xl mt-5 about-width">
                Research Projects
            </h2>
            <div className="grid gap-4">
                <div className="grid min-[1100px]:grid-cols-1 md:gap-x-10 mx-auto">
                    {research.map((research, index) => (
                        <ProjectComponent key={index} {...research} />
                    ))}
                </div>
            </div>
            <h2 className="skills-headings text-2xl about-width">
                Other Projects
            </h2>
            <div className="flex flex-row min-[710px]:w-[900px] mx-auto">
                <p className="pa-2 text-md max-[710px]:w-96 min-[710px]:w-[900px] mx-auto mb-2">
                    Other more informal, personal or practice projectes I have
                    worked on.
                </p>
                <button
                    onClick={toggleVisibility}
                    className="bg-background text-text font-bold py-2 px-4 rounded text-center w-20 transition-all border mx-auto"
                    style={{
                        backgroundColor: isVisible ? "#d3e2f8" : "#2d3748",
                        color: isVisible ? "#2d3748" : "#d3e2f8",
                        borderColor: isVisible ? "#2d3748" : "#d3e2f8",
                    }}
                >
                    {!isVisible ? "Hide" : "Show"}
                </button>
            </div>

            {!isVisible && (
                <div className="grid gap-4">
                    <div className="grid max-[1350px]:grid-cols-1 min-[1350px]:grid-cols-2 md:gap-x-10 mx-auto">
                        {projects.map((project, index) => (
                            <ProjectComponent2 key={index} {...project} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

function ProjectComponent(props) {
    const { index, title, description, tools, links, image } = props;

    return (
        <div className="flex-col">
            <div className="m-5 transition-all project-dark rounded-md max-[748px]:w-96 max-[1100px]:h-[500px] max-[1350px]:h-[300px] min-[1350px]:h-96 mx-auto w-[800px] max-[1100px]:w-[600px] min-[1350px]:w-[900px] rounded-r-2xl md:text-text shadow-lg bg-secondary overflow-hidden md:flex">
                <div className="relative">
                    <Image
                        className="h-32 w-full md:h-full md:w-[500px] object-cover backdrop-blur-sm"
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
                <div className="p-3 pl-5 pr-5 md:w-full md:h-96 md:p-7 md:py-5 md:flex md:flex-col justify-between">
                    <div className="md:flex md:flex-col md:gap-2">
                        <div className="uppercase tracking-wide text-2xl font-bold mt-1">
                            {title}
                        </div>
                        <div className="flex gap-2 md:gap-2 opacity-40">
                            <p className="text-[13.5px] font-semibold">
                                Key Features:
                            </p>
                            {tools.map((tool, index) => (
                                <p key={index} className="text-[13.5px]">
                                    {tool}
                                </p>
                            ))}
                        </div>
                        <p className="mt-1 text-[15px] desc-dark">
                            {description}
                        </p>
                    </div>
                    <div className="hidden md:flex gap-3 mt-3 items-center self-end">
                        <BsLink45Deg className="text-2xl" />
                        {Object.entries(links).map(([name, url], index) => (
                            <a
                                key={index}
                                href={url}
                                className="project-links-2 font-bold flex items-center"
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectComponent2(props) {
    const { index, title, description, tools, links, image } = props;

    return (
        <div className="flex-col">
            <div className="m-5 transition-all project-dark h-80 md:h-60 mx-auto w-96 rounded-md md:text-text shadow-md bg-secondary overflow-hidden md:w-[600px] md:flex">
                <div className="relative">
                    <Image
                        className="h-32 w-full md:h-full md:w-64 object-cover backdrop-blur-sm"
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
                                className="project-links font-semibold text-center"
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
