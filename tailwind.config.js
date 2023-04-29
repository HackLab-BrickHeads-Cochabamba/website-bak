/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hacklab: {
          primary: "#1FD750",
          // primary: "#a3e635",
          secondary: "#FFFFFF",
          accent: "#181818",
          neutral: "#181818",
        },
      },
    ],
  },
};
