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
            fontFamily: {},
        },
    },
    plugins: [
        require("tailwind-typewriter")({
            wordsets: {
                roles: {
                    words: [
                        "Welcome!",
                        "Bem-vindo!",
                        "Bienvenido!",
                        "Benvenuto!",
                        "Bienvenue!",
                    ],
                    writeSpeed: 0.1,
                },
            },
        }),
    ],
};
