import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        hanken: ["--font-hanken"]
      },
      colors: {
        "dark-03": "#8D9091",
        subtleBlue: "#9999BC",
        toneBlue: "#F5F7FC",
        robinOrange: "#EA8D51",
        robinRed: "#D53120",
        robinBlue: "#4568D1"
      }
    }
  },
  plugins: []
};
export default config;
