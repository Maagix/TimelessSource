/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#9d5248",
        "main-yellow": "#f6f1de",
        "main-gray": "#4a4a4a",
        "main-dark": "#212121",
        "main-bg-gray": "#ececec",
        "main-bg-yellow": "#F2ECE5",
      },

      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },

        slideFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 100 },
        },
        slideFromTopLow: {
          "0%": { transform: "translateY(-5%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 100 },
        },

        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },

      animation: {
        slideInLeft: "slideFromLeft 0.5s ease-in-out",
        slideInTop: "slideFromTop 0.4s ease-in-out",
        slideInTopLow: "slideFromTopLow 0.4s ease-in-out",
        grow: "grow 0.4s ease-in-out",
        fadeIn: "fadeIn 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
