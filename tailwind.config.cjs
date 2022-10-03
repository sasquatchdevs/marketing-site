/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#448c74",
        hover: "rgba(54, 108, 90, 1)"
      },
    },
  },
  plugins: [],
};
