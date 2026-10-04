import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: { DEFAULT: "#5B0E1A", deep: "#3D070F", soft: "#7A1322" },
        gold: { DEFAULT: "#D4AF37", soft: "#C49B3A", deep: "#A9842A" },
        ivory: "#FAF6EF",
        ink: { DEFAULT: "#4A3F35", soft: "#6B5B4B", mute: "#9A8C7C" },
        hair: "#E7DECB",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        pf: ["var(--font-pf)", "serif"],
        jp: ["var(--font-jp)", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(60,30,20,.10), 0 2px 8px rgba(60,30,20,.06)",
        photo: "0 6px 16px rgba(40,15,10,.25)",
        act: "0 3px 10px rgba(60,30,20,.05)",
        fav: "0 6px 12px rgba(120,90,20,.3)",
      },
    },
  },
  plugins: [],
};

export default config;
