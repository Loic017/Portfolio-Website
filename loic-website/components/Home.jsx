import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPenAlt, FaCodepen, FaScroll } from "react-icons/fa";

const news = [
    {
        date: "June 2024",
        text: "I have won the first prize award in the Cardiff University and VietnamNational University-Ho Chi Minh University of Technology Student Poster Competition on 'AI, Smart Healthcare, and' in 2024.",
    },
    {
        date: "May 2024",
        text: "My abstract on the preliminary results from my study on 'Epileptic seizure detection with Tiny Machine Learning' has been accepted to the MobiUK 2024 conference.",
    },
    {
        date: "May 2024",
        text: (
            <>
                I have submitted my BSc Computer Science dissertation
                &apos;Design a tiny machine learning model to detect epileptic
                seizures on wearables&apos;. Information and results will be
                available soon with available information displayed in{" "}
                <a
                    href="https://blog.lorentel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <u>a blog article</u>
                </a>{" "}
                and in the{" "}
                <a href="https://lorentel.com/projects">
                    <u>projects section</u>
                </a>
                .
            </>
        ),
    },
];

export default function HomeHero() {
    return (
        <section className="">
            <div className="mt-24 max-[840px]:mt-2 w-full flex flex-col mx-auto text-center">
                <div className="home-design-dark home-design-light"></div>
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

            <div className="news-light news-dark news-text-dark news-text-light w-full pb-10">
                <hr className="h-1 bottom-0 mt-16 mb-5 mx-auto opacity-0" />

                <div className="flex items-center justify-center gap-x-3">
                    <FaScroll className="text-3xl mt-1" />
                    <h1 className="text-3xl font-extrabold">Highlights</h1>
                </div>
                <h2 className="text-center text-2xl font-bold">. . .</h2>
                {news.map((newsItem, index) => (
                    <p
                        key={index}
                        className="text-lg text-start mt-3 w-[900px] max-[1200px]:w-[700px] max-[960px]:w-[600px] max-[630px]:w-[450px] max-[470px]:w-[300px] mx-auto"
                    >
                        <b className="text-primary">{newsItem.date}</b>{" "}
                        {newsItem.text}
                    </p>
                ))}
            </div>
        </section>
    );
}
