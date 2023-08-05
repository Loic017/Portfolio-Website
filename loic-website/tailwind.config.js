/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#e4aa58",
                secondary: "#dde9f9",
                accent: "#606e80",
                background: "#d3e2f8",
                text: "#06101e",
            },
            fontFamily: {
                carme: ["Carme", "sans-serif"],
            },
        },
    },
    plugins: [
        require("tailwind-typewriter")({
            wordsets: {
                roles: {
                    words: ["Software Engineer", "Full Stack Developer"],
                    writeSpeed: 0.1,
                },
            },
        }),
    ],
};
