/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./docs/**/*.{md,mdx}",
    "./docusaurus.config.js",
    "./sidebars.js",
  ],
  theme: {
    extend: {
      screens: {
        desktop: { max: "62.5em" },
        laptop: { max: "50em" },
        tablet: { max: "43.75em" },
        mobile: { max: "33.75em" },
      },
    },
  },
  plugins: [],
};
