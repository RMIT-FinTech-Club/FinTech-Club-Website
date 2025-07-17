import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { nextuiThemeConfig, responsiveStylingConfig, tailwindExtendedThemeConfig } from "./config/theme";
import responsiveStyling, { orientationPlugin } from "./plugins/responsiveStyling";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: tailwindExtendedThemeConfig,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '#000000',
            'bluePrimary': '#2C305F',
            'blueMidnight': '#0D1742',
            'blueSlate': '#5E5E92',
            'blueMist': '#F0EDFF',
            'blueSoft': '#97ABD6',
            'yellowPrimary': '#DCB968',
            'yellowEarth': '#A28436',
            'yellowSand': '#F7D27F',
            'yellowCream': '#FFEFCA',
            'yellowGlow': '#F8DA92'
        },
    },
    darkMode: "class",
    plugins: [
        nextui(nextuiThemeConfig),
        responsiveStyling(responsiveStylingConfig),
        orientationPlugin
    ],
};

export default config;