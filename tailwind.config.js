/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#2e273c",
        secondary1: "#c3bcd4",
        black1: "#222222",
        cyan1: "#23cbd8",
        blue1: "#3865F3",
        gray1: "#94959B",
        gray2: "#F6F6F6",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        34: "34px",
        40: "40px",
        60: "60px",
        72: "72px",
      },
      screens: {
        main: "1280px",
        xs: { min: "460px" },
        // => @media (min-width: 992px) { ... }
      },
      borderRadius: {
        24: "24px",
      },
      boxShadow: {
        lg_1: "24px 24px 48px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
