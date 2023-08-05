import Image from "next/image";

import { BiHomeAlt2 } from "react-icons/bi";
import { IoShareSocialOutline, IoPersonOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import Link from "next/link";

// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Navbar() {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-28 z-50">
            <div className="h-96 w-16 bg-accent/20 backdrop-blur-2xl rounded-xl max-w-[460px] mx-auto px-5 flex flex-col justify-around text-2xl text-white/50 items-center">
                <Link href="/home" className="menu-links group">
                    <BiHomeAlt2 />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        Home
                    </span>
                </Link>
                <Link href="#" className="menu-links group">
                    <IoPersonOutline />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        About
                    </span>
                </Link>
                <Link href="#" className="menu-links group">
                    <BsBriefcase />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        Projects & Experience
                    </span>
                </Link>
                <Link href="#" className="menu-links group">
                    <IoShareSocialOutline />
                    <span className="sidebar-tooltip group-hover:scale-100">
                        Blog & Socials
                    </span>
                </Link>
            </div>
        </nav>
    );
}
