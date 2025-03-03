import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        alata: ["var(--font-alata)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "#AAA9A8",
        "card-background": "#FFFFFF",
        "card-foreground": "#333333",
        "card-foreground-secondary": "#666666",
        "new-input": "#F5F3EE",
      },
    },
  },
  plugins: [],
};
export default config;
