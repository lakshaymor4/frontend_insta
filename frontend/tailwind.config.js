/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "451px",
        // => @media (min-width: 576px) { ... }

        md: "875px",
        // => @media (min-width: 960px) { ... }
      },
    },
  },
  plugins: [],
};
