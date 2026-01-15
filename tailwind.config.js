// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./App.{js,jsx,ts,tsx}",
//     "./components/**/*.{js,jsx,ts,tsx}",
//     "./app/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // o 'media' para seguir el sistema
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          text: "#000000",
          // ...
        },
        dark: {
          background: "#000000",
          text: "#FFFFFF",
          // ...
        },
      },
    },
  },
  plugins: [],
};
