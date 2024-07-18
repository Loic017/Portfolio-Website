import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPenAlt, FaCodepen, FaScroll } from "react-icons/fa";

const news = [
    {
        date: "July 2024",
        text: (
            <>
                I have been awarded the{" "}
                <c className="text-primary">
                    "Best Final Year Project, BSc Computer Science and Variants"
                </c>{" "}
                prize from the School of Computer Science and Informatics at
                Cardiff University for my study on{" "}
                <a
                    href="https://blog.lorentel.com/tinyml-seizure-detection"
                    className="underline italic"
                >
                    TinyML for Epileptic Seizures.
                </a>
            </>
        ),
    },
    {
        date: "July 2024",
        text: (
            <>
                I have graduated from Cardiff University with{" "}
                <c className="text-primary">First Class Honours</c> in BSc
                Computer Science.
            </>
        ),
    },
    {
        date: "June 2024",
        text: (
            <>
                I have won <c className="text-primary">first prize</c> in the{" "}
                <a
                    href="https://www.agilecps.org/activities/2024-cardiff-vnu-competition"
                    className="underline italic"
                >
                    Global Wales&apos; Cardiff-VNU student poster competition
                </a>{" "}
                on &quot;AI, Smart Healthcare, and IoT&quot; in 2024.
            </>
        ),
    },
    {
        date: "May 2024",
        text: (
            <>
                My extended abstract on{" "}
                <a
                    href="https://blog.lorentel.com/tinyml-seizure-detection"
                    className="underline italic"
                >
                    &apos;Epileptic seizure detection with Tiny Machine
                    Learning&apos;
                </a>{" "}
                has been accepted to the{" "}
                <a
                    href="https://www.mobiuk.org/2024/programme.html"
                    className="underline italic"
                >
                    MobiUK 2024 Symposium
                </a>
                .
            </>
        ),
    },
];

export default function HomeHero() {
    return (
        <section className="">
            <div className="mt-28 max-[840px]:mt-2 w-full flex flex-col mx-auto text-center">
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
                <hr className="h-1 bottom-0 mt-10 mb-5 mx-auto opacity-0" />

                <div className="flex items-center justify-center gap-x-3">
                    <FaScroll className="text-3xl mt-1" />
                    <h1 className="text-3xl font-extrabold">Highlights</h1>
                </div>
                <h2 className="text-center text-2xl font-bold">. . .</h2>
                {news.map((newsItem, index) => (
                    <div
                        key={index}
                        className="text-lg text-start my-4 w-[1000px] max-[1200px]:w-[700px] max-[960px]:w-[600px] max-[630px]:w-[450px] max-[470px]:w-[300px] mx-auto"
                    >
                        <p>
                            <b className="text-primary w-10">{newsItem.date}</b>{" "}
                        </p>
                        <p className="">{newsItem.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
