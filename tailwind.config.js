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
                    primary: "#10b981",
                    secondary: "#059669",
                    accent: "#10b981",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
            {
                darkTheme: {
                    primary: "#10b981",
                    secondary: "#059669",
                    accent: "#10b981",
                    neutral: "#3D4451",
                    "base-100": "#111111",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
