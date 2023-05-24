/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      minHeight: {
        "75vh": "75vh",
        "25vh": "25vh",
        "80vh": "80vh",
        "75vh": "75vh",
        "66vh": "66vh",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
