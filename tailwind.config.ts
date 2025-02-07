import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s infinite alternate both",
        "fade-in": "fade-in 0.5s linear forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        loading: "loading 1s ease-in-out infinite",
        blink: "blink 1s step-end infinite"
      },
      keyframes: {
        cursor: {
          "0%, 40%": { opacity: "0" },
          "60%, 100%": { opacity: "1" }
        },
        type: {
          "0%": { width: "0ch" },
          "100%": { width: "100%" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { opacity: "0" }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;