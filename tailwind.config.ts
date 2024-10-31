import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
      extend: {
        colors: {
          // Define your custom colors for light and dark modes
          primary: {
            DEFAULT: 'var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))', // Light mode primary color
            dark: '#3B82F6', // Dark mode primary color
          },
          background: {
            DEFAULT: '#FFFFFF', // Light mode background
            dark: '#1F2937', // Dark mode background
          },
          text: {
            DEFAULT: '#000000', // Light mode text color
            dark: '#FFFFFF', // Dark mode text color
          },
        },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
