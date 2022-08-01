/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ['[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                lightTheme: {
                    primary: "#3b82f6",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                    error: "#F87272",
                },
            },
            {
                darkTheme: {
                    primary: "#be123c",
                    neutral: "#3D4451",
                    "base-100": "#111111",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
