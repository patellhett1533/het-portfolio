/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["regular"],
      secondary: ["extra"],
      extra: ["Train One"],
      display: ["display"],
      mobDis: ["mobileDisplay"],
    },
    colors: {
      container: "var(--container-color)",
      background: "var(--background-color)",
      heading: "var(--heading-color)",
      title: "var(--title-color)",
      text: "var(--text-color)",
    },
    extend: {},
  },
  plugins: [],
};
