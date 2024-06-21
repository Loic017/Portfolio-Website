import "./globals.css";
import React from "react";
import Image from "next/image";
import logo from "./logo.png";

import Link from "next/link";

import Navbar from "../components/Navbar";
import Providers from "./providers";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Loic",
    description: "Hello There!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.js" />
            </head>
            <body className="bg-background font-carme">
                <Providers>
                    <div class="scale-0 fixed min-[840px]:scale-100 min-[840px]:bottom-3 min-[840px]:right-3 rounded-lg overflow-hidden">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                    <div className="max-[840px]:mb-12">{children}</div>
                    <Navbar />
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
