"use client";
import Image from "next/image";
import { useState } from "react";

import { BiHomeAlt2 } from "react-icons/bi";
import { IoShareSocialOutline, IoPersonOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Navbar() {
    const [isBurger, setIsBurger] = useState(false);

    function toggleBurger() {
        setIsBurger(!isBurger);
    }

    let burgerClass = isBurger ? "scale-100" : "scale-0";

    return (
        <nav className="max-[840px]:right-0 fixed bottom-2 lg:bottom-8 w-28 z-50">
            <div
                className={`max-[840px]:${burgerClass} h-96 w-16 bg-accent/20 backdrop-blur-2xl rounded-xl max-w-[460px] mx-auto px-5 flex flex-col justify-around text-2xl text-white/50 items-center`}
            >
                <Link href="/home" className="menu-links group">
                    <BiHomeAlt2 />
                    <span className="max-[840px]:hidden sidebar-tooltip group-hover:scale-100">
                        Home
                    </span>
                </Link>
                <Link href="/about" className="menu-links group">
                    <IoPersonOutline />
                    <span className="max-[840px]:hidden sidebar-tooltip group-hover:scale-100">
                        About
                    </span>
                </Link>
                <Link href="#" className="menu-links group">
                    <BsBriefcase />
                    <span className="max-[840px]:hidden sidebar-tooltip group-hover:scale-100">
                        Projects & Experience
                    </span>
                </Link>
                <Link href="#" className="menu-links group">
                    <IoShareSocialOutline />
                    <span className="max-[840px]:hidden sidebar-tooltip group-hover:scale-100">
                        Blog & Socials
                    </span>
                </Link>
                <hr />
                <button className="menu-links group">
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
