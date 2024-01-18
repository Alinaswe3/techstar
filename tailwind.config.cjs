/** @type {import('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                custom: {
                    "primary": "#00e472",
                    "secondary": "#252829",
                    "accent": "#abaeb0",
                    "neutral": "#ffffff",
                    "base-100": "#313536",
                    "base-200": "#252829",
                }
            }, "cupcake", "retro"
        ],
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};

module.exports = config;
