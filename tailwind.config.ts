import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { twVariables } from "./variableOutput";
import { twUtils } from "./utilities";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        surface: twVariables.surface,
        primary: twVariables.primary,
        secondary: twVariables.secondary,
      },
      color: {
        primary: twVariables.primary,
        secondary: twVariables.secondary,
      },
      textColor: {
        primary: twVariables.primary,
        secondary: twVariables.secondary,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ...twVariables.fontFamilies,
      },
      fontSize: {
        ...twVariables.fontSize,
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({ ...twUtils });
    }),
  ],
};
export default config;
