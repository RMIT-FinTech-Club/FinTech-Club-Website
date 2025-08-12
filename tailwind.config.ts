import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import {
  uiThemeConfig,
  stylingConfig,
  tailwindExtendedThemeConfig,
} from "./config/theme";
import responsiveStyling, {
  orientationPlugin,
} from "./plugins/responsiveStyling";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: tailwindExtendedThemeConfig,
        backgroundImage: {
        'fintech-gradient': 'linear-gradient(to top, rgba(220, 185, 104, 0.9),  rgba(71, 74, 110, 0.8)), url("https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ClubDay.png")',
        'gradient-over-image': 'linear-gradient(to bottom, rgba(13, 23, 66, 0.75), rgba(36, 41, 70, 0.75), rgba(34, 39, 70, 0.75), rgba(219, 185, 104, 0.75)), url("https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ClubDay.png")',
        'gradient-no-image': 'linear-gradient(to bottom, rgba(13, 23, 66, 0.75), rgba(36, 41, 70, 0.75), rgba(34, 39, 70, 0.75), rgba(219, 185, 104, 0.75)))',
        },
    animation: {
      scroll: "scroll 20s linear infinite",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bluePrimary: "#2C305F",
      blueMidnight: "#0D1742",
      blueSlate: "#5E5E92",
      blueMist: "#F0EDFF",
      blueSoft: "#97ABD6",
      yellowPrimary: "#DCB968",
      yellowEarth: "#A28436",
      yellowSand: "#F7D27F",
      yellowCream: "#FFEFCA",
      yellowGlow: "#F8DA92",
    },
  },
  darkMode: "class",
  plugins: [
    heroui(uiThemeConfig),
    responsiveStyling(stylingConfig),
    orientationPlugin,
    require("tailwindcss-animate"),
  ],
};

export default config;
