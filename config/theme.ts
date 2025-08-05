import { type HeroUIPluginConfig } from "@heroui/react";
import { CustomThemeConfig } from "tailwindcss/types/config";
import { ResponsiveStylingConfig } from "@/plugins/responsiveStyling";

export const uiThemeConfig = {
  prefix: "fintech",
  addCommonColors: false,
  defaultTheme: "light",
  defaultExtendTheme: "light",
  themes: {
    light: {
      colors: {
        ft: {
          background: {
            DEFAULT: "#F9FAFB",
            popup: "#979797",
          },
          text: {
            dark: "#282828", // Coal
            bright: "#EBEBEB",
          },
          primary: {
            yellow: {
              50: "#FFF9E6",
              100: "#FDF8E2",
              200: "#FBF0C6",
              300: "#F4E1A7",
              400: "#EAD08D",
              500: "#DCB968", // primary
              600: "#BD974C",
              700: "#9E7734",
              800: "#7F5A21",
              900: "#694513",
              DEFAULT: "#DCB968",
            },
            blue: {
              50: "#E9F0FF",
              100: "#DCDFF7",
              200: "#BBC0EE",
              300: "#8C92CF",
              400: "#5E649F",
              500: "#2C305F", // primary
              600: "#202351",
              700: "#161944",
              800: "#0E1037",
              900: "#080A2D",
              DEFAULT: "#2C305F",
            },
          },
          secondary: {
            yellow: "#F8DA92",
            blue: "#97ABD6",
          },

          // Semantic colors
          success: "#60D681",
          info: "#97ABD6",
          warning: "#F8DA92",
          danger: "#BB2649",

          supporting: {
            pink: "#EDCDC2",
            lightpink: "#D4CACD",
          },
        },
      },
      layout: {
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "1rem",
        },
      },
    },
    dark: {
      colors: {
        test: "#00ff00",
      },
    },
  },
} as HeroUIPluginConfig;

export const tailwindExtendedThemeConfig: Partial<CustomThemeConfig> = {
  spacing: {
    "side-margin-mobile": "1rem",
    "side-margin": "8.375rem",
  },
  // fontFamily: {
  //     sans: ['Poppins', 'system-ui', 'sans-serif'],
  // },
};

export const stylingConfig = {
  xs: {
    fontSize: {
      "ft-heading-1": ["1.75rem", { lineHeight: "2rem", fontWeight: "700" }],
      "ft-heading-2": ["1.5rem", { lineHeight: "1.75rem", fontWeight: "600" }],
      "ft-heading-3": [
        "1.375rem",
        { lineHeight: "1.625rem", fontWeight: "600" },
      ],
      "ft-heading-4": ["1.25rem", { lineHeight: "1.5rem", fontWeight: "600" }],
      "ft-heading-5": [
        "1.125rem",
        { lineHeight: "1.375rem", fontWeight: "600" },
      ],
      "ft-heading-6": ["1rem", { lineHeight: "1.25rem", fontWeight: "600" }],
      "ft-subtitle-1": ["1rem", { lineHeight: "1.25rem", fontWeight: "600" }],
      "ft-subtitle-2": [
        "0.875rem",
        { lineHeight: "1.125rem", fontWeight: "500" },
      ],
      "ft-body-1": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
      "ft-body-2": ["0.625rem", { lineHeight: "0.875rem", fontWeight: "400" }],
    },
  },
  sm: {
    fontSize: {
      "ft-heading-1": ["2rem", { lineHeight: "2.25rem", fontWeight: "700" }],
      "ft-heading-2": ["1.75rem", { lineHeight: "2rem", fontWeight: "600" }],
      "ft-heading-3": ["1.5rem", { lineHeight: "1.75rem", fontWeight: "600" }],
      "ft-heading-4": [
        "1.375rem",
        { lineHeight: "1.625rem", fontWeight: "600" },
      ],
      "ft-heading-5": ["1.25rem", { lineHeight: "1.5rem", fontWeight: "600" }],
      "ft-heading-6": [
        "1.125rem",
        { lineHeight: "1.375rem", fontWeight: "600" },
      ],
      "ft-subtitle-1": [
        "1.125rem",
        { lineHeight: "1.375rem", fontWeight: "600" },
      ],
      "ft-subtitle-2": ["1rem", { lineHeight: "1.25rem", fontWeight: "500" }],
      "ft-body-1": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
      "ft-body-2": ["0.75rem", { lineHeight: "1.125rem", fontWeight: "400" }],
    },
  },
  default: {
    fontSize: {
      "ft-heading-1": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
      "ft-heading-2": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
      "ft-heading-3": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
      "ft-heading-4": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      "ft-heading-5": [
        "1.375rem",
        { lineHeight: "1.75rem", fontWeight: "600" },
      ],
      "ft-heading-6": [
        "1.25rem",
        { lineHeight: "1.625rem", fontWeight: "600" },
      ],
      "ft-subtitle-1": [
        "1.25rem",
        { lineHeight: "1.625rem", fontWeight: "600" },
      ],
      "ft-subtitle-2": [
        "1.125rem",
        { lineHeight: "1.5rem", fontWeight: "500" },
      ],
      "ft-body-1": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
      "ft-body-2": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
    },
  },
  md: {
    fontSize: {
      "ft-heading-1": ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],
      "ft-heading-2": ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
      "ft-heading-3": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "600" }],
      "ft-heading-4": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
      "ft-heading-5": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
      "ft-heading-6": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      "ft-subtitle-1": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      "ft-subtitle-2": [
        "1.375rem",
        { lineHeight: "1.75rem", fontWeight: "500" },
      ],
      "ft-body-1": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
      "ft-body-2": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
    },
  },
  lg: {
    fontSize: {
      "ft-heading-1": ["3.5rem", { lineHeight: "4rem", fontWeight: "700" }],
      "ft-heading-2": ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }],
      "ft-heading-3": ["2.75rem", { lineHeight: "3.25rem", fontWeight: "600" }],
      "ft-heading-4": ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
      "ft-heading-5": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "600" }],
      "ft-heading-6": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
      "ft-subtitle-1": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
      "ft-subtitle-2": [
        "1.75rem",
        { lineHeight: "2.25rem", fontWeight: "500" },
      ],
      "ft-body-1": ["1.25rem", { lineHeight: "2rem", fontWeight: "400" }],
      "ft-body-2": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
    },
  },
  xl: {
    fontSize: {
      "ft-heading-1": ["4rem", { lineHeight: "4.5rem", fontWeight: "700" }],
      "ft-heading-2": ["3.5rem", { lineHeight: "4rem", fontWeight: "600" }],
      "ft-heading-3": ["3.25rem", { lineHeight: "3.75rem", fontWeight: "600" }],
      "ft-heading-4": ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }],
      "ft-heading-5": ["2.75rem", { lineHeight: "3.25rem", fontWeight: "600" }],
      "ft-heading-6": ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
      "ft-subtitle-1": ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
      "ft-subtitle-2": [
        "2.25rem",
        { lineHeight: "2.75rem", fontWeight: "500" },
      ],
      "ft-body-1": ["1.5rem", { lineHeight: "2.25rem", fontWeight: "400" }],
      "ft-body-2": ["1.375rem", { lineHeight: "2rem", fontWeight: "400" }],
    },
  },
  // fontWeight: regular 400, medium 500, semi-bold 600, bold 700
  // fontSize: 1rem = 16px
  // default: {
  //     fontSize: {
  //         'ft-heading-1': ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //         'ft-heading-2': ["1.5rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //         'ft-heading-3': ["1.25rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //         'ft-subtitle-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //         'ft-subtitle-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "500" }],
  //         'ft-body-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //         'ft-body-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //     }
  // },
  // md: {
  //     fontSize: {
  //         'ft-heading-1': ["6rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //         'ft-heading-2': ["4rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //         'ft-heading-3': ["3.5rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //         'ft-heading-4': ["3rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //         'ft-heading-5': ["2.25rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //         'ft-heading-6': ["1.5rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //         'ft-body-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //         'ft-body-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //     }
  // },
  /*
        The font size config below is more accurated in design system which fit better.
        However since the use of font size is not consistent in the project, the above config is used instead.

        Using the below config will definite break the UI of the project and requrie a lot of changes to be made.
        (Despite that, even the above config isnt perfectly tailored to the project, but at least it's require less changes to be made)

        However, for the sake of the design system, the below config should be used instead of the above config.
        Else if leave longer in the project, it might cause more issues in the future.

    */
  // default: {
  //     fontSize: {
  //       'ft-heading-1': ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  //       'ft-heading-2': ["1.5rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-3': ["1.25rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-4': ["1rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-5': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-6': ["0.75rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-subtitle-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-subtitle-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "500" }],
  //       'ft-body-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //       'ft-body-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //     }
  //   },
  //   sm: {
  //     fontSize: {
  //       'ft-heading-1': ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
  //       'ft-heading-2': ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-3': ["1.75rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-4': ["1.5rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-5': ["1.25rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-6': ["1rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-subtitle-1': ["1.25rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-subtitle-2': ["1rem", { lineHeight: "2.5rem", fontWeight: "500" }],
  //       'ft-body-1': ["1rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //       'ft-body-2': ["0.875rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //     }
  //   },
  //   md: {
  //     fontSize: {
  //       'ft-heading-1': ["4rem", { lineHeight: "4.5rem", fontWeight: "700" }],
  //       'ft-heading-2': ["3.5rem", { lineHeight: "4rem", fontWeight: "600" }],
  //       'ft-heading-3': ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }],
  //       'ft-heading-4': ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
  //       'ft-heading-5': ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-heading-6': ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
  //       'ft-subtitle-1': ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
  //       'ft-subtitle-2': ["1.75rem", { lineHeight: "2.5rem", fontWeight: "500" }],
  //       'ft-body-1': ["1.5rem", { lineHeight: "2rem", fontWeight: "400" }],
  //       'ft-body-2': ["1.25rem", { lineHeight: "1.75rem", fontWeight: "400" }],
  //     }
  //   },
  //   lg: {
  //     fontSize: {
  //       'ft-heading-1': ["6rem", { lineHeight: "6.5rem", fontWeight: "700" }],
  //       'ft-heading-2': ["5rem", { lineHeight: "5.5rem", fontWeight: "600" }],
  //       'ft-heading-3': ["4rem", { lineHeight: "4.5rem", fontWeight: "600" }],
  //       'ft-heading-4': ["3.5rem", { lineHeight: "4rem", fontWeight: "600" }],
  //       'ft-heading-5': ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }],
  //       'ft-heading-6': ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }],
  //       'ft-subtitle-1': ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }],
  //       'ft-subtitle-2': ["2.5rem", { lineHeight: "3rem", fontWeight: "500" }],
  //       'ft-body-1': ["2rem", { lineHeight: "2.5rem", fontWeight: "400" }],
  //       'ft-body-2': ["1.75rem", { lineHeight: "2rem", fontWeight: "400" }],
  //     }
  //   }
} as ResponsiveStylingConfig;
