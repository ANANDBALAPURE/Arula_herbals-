import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3B2C",
          light: "#2C5240",
          dark: "#142A1E",
        },
        sage: {
          DEFAULT: "#7C9473",
          light: "#9BAE8E",
          dark: "#5F7758",
        },
        sand: {
          DEFAULT: "#E8DCC4",
          light: "#F2EAD8",
          dark: "#D8C7A2",
        },
        cream: "#FAF6EC",
        clay: {
          DEFAULT: "#A85C32",
          light: "#C57A4C",
          dark: "#8A4A26",
        },
        ink: "#232B20",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
        blob2: "40% 60% 70% 30% / 40% 50% 50% 60%",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(8px,-10px) rotate(3deg)" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        "rise-in": "riseIn 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
