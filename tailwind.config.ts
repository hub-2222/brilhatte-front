import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      "primary": "#445869",
      "pastelgreen-50": "#f4f9f4",
      "pastelgreen-100":"#e7f1e7",
      "pastelgreen-200": "#cfe3cf",
      "pastelgreen-300": "#a9ccab",
      "pastelgreen-400": "#70A572",
      "pastelgreen-500": "#598e5b",
      "pastelgreen-600": "#457447",
      "pastelgreen-700": "#395c3b",
      "pastelgreen-800": "#314a32",
      "pastelgreen-900": "#293e2a",
      "pastelgreen-950": "#132014"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
