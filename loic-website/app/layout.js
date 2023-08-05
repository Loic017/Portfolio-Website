import "./globals.css";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

export const metadata = {
    title: "Loic",
    description: "Hello There!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-background font-carme">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
