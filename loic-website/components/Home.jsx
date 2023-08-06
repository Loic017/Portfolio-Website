import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";

export default function HomeHero() {
    return (
        <section className="">
            <div className="mt-28 max-[840px]:mt-3 w-full flex flex-col mx-auto text-center">
                <div className="h-[500px] w-96 rounded-t-full bg-gradient-to-b from-primary to-transparent mx-auto text-center"></div>
                <div className="mt-14 max-[840px]:mt-1">
                    <h1 className="home-header text-text text-5xl font-extrabold  max-[640px]:text-center max-[640px]:mx-auto">
                        Loic Lorente Lemoine
                    </h1>
                    <h2 className="home-header type-roles text-text text-2xl my-3"></h2>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center mx-auto gap-5">
                <a href="https://github.com/Loic017">
                    <BsGithub className="socials" />
                </a>
                <a href="https://www.linkedin.com/in/lemoineloic/">
                    <BsLinkedin className="socials" />
                </a>
                <a href="https://codepen.io/loic017">
                    <SiCodepen className="socials" />
                </a>
            </div>
        </section>
    );
}
