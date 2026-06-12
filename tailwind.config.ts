import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171714",
        paper: "#f7f3ea",
        mist: "#e8ece7",
        brass: "#b5965a",
        cedar: "#143f3a",
        smoke: "#51534d",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 23, 20, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
