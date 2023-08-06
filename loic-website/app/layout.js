import "./globals.css";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
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
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
