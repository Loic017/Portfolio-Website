"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { IoShareSocialOutline } from "react-icons/io5";
import { BsBriefcase, BsProjector } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import { AiFillCloseCircle, AiOutlineRightSquare } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Navbar() {
    const [isBurger, setIsBurger] = useState(false);
    const pathName = usePathname();

    function toggleBurger() {
        setIsBurger(!isBurger);
    }

    let burgerClass = isBurger ? "block" : "hidden";

    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
    }

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <nav className="max-[840px]:right-0 fixed bottom-2 lg:bottom-8 w-36 z-50">
            <div
                className={`nav-bar-dark max-[840px]:${burgerClass} h-[500px] w-16 bg-accent/20 backdrop-blur-2xl rounded-2xl max-w-[460px] mx-auto px-5 flex flex-col justify-around text-2xl text-white/50 items-center`}
            >
                <Link
                    href="/"
                    className={
                        pathName == "/"
                            ? "menu-links-active group"
                            : "menu-links group"
                    }
                >
                    <AiOutlineRightSquare />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        Welcome
                    </span>
                </Link>
                <Link
                    href="/about"
                    className={
                        pathName == "/about"
                            ? "menu-links-active group"
                            : "menu-links group"
                    }
                >
                    <CgProfile />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        About Me
                    </span>
                </Link>
                <Link
                    href="/projects"
                    className={
                        pathName == "/projects"
                            ? "menu-links-active group"
                            : "menu-links group"
                    }
                >
                    <BsProjector />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        My Work
                    </span>
                </Link>
                <Link
                    href="/experience"
                    className={
                        pathName == "/experience"
                            ? "menu-links-active group"
                            : "menu-links group"
                    }
                >
                    <BsBriefcase />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        Experience
                    </span>
                </Link>
                {/* <Link href="/socials" className="menu-links group">
                    <IoShareSocialOutline />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        My Publications & Awards
                    </span>
                </Link> */}
                <hr />
                <button onClick={toggleTheme} className="menu-links group">
                    <MdDarkMode />
                </button>
            </div>
            <div className="max-[840px]:scale-100 min-[840px]:hidden mt-2 w-16 bg-accent/20 backdrop-blur-2xl rounded-xl max-w-[460px] mx-auto px-5 flex flex-col justify-around text-2xl text-white/50 items-center">
                <button onClick={toggleBurger} className="menu-links group">
                    {isBurger ? <AiFillCloseCircle /> : <PiHamburgerFill />}
                    <span className="max-[840px]:hidden sidebar-tooltip group-hover:scale-100">
                        Home
                    </span>
                </button>
            </div>
        </nav>
    );
}
