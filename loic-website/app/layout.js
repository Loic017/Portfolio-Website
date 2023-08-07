import "./globals.css";
import React from "react";
import Image from "next/image";
import logo from "./logo.png";

import Link from "next/link";

import Navbar from "../components/Navbar";
import Providers from "./providers";

export const metadata = {
    title: "Loic",
    description: "Hello There!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-background font-carme">
                <Providers>
                    <div class="scale-0 fixed md:scale-100 md:bottom-3 md:right-3 rounded-lg overflow-hidden">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
