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
import tailwindcssAnimate from "tailwindcss-animate";

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
    extend: {
      ...tailwindExtendedThemeConfig,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'fintech-gradient': 'linear-gradient(to top, rgba(220, 185, 104, 0.9),  rgba(71, 74, 110, 0.8)), url("https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ClubDay.png")',
        'gradient-over-image': 'linear-gradient(to bottom, rgba(13, 23, 66, 0.75), rgba(36, 41, 70, 0.75), rgba(34, 39, 70, 0.75), rgba(219, 185, 104, 0.75)), url("https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ClubDay.png")',
        'gradient-no-image': 'linear-gradient(to bottom, rgba(13, 23, 66, 0.75), rgba(36, 41, 70, 0.75), rgba(34, 39, 70, 0.75), rgba(219, 185, 104, 0.75)))',
      }
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
    }
  },
  darkMode: ["class", "class"],
  plugins: [
    heroui(uiThemeConfig),
    responsiveStyling(stylingConfig),
    orientationPlugin,
    tailwindcssAnimate,
  ],
};

export default config;
