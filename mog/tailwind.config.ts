import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mogbg: "oklch(0.13 0.015 55)",
        mogpanel: "oklch(0.1 0.01 55)",
        mogorange: "oklch(0.78 0.19 55)",
        mogcyan: "oklch(0.78 0.19 195)",
        mogtext: "oklch(0.96 0.01 90)",
        mogmuted: "oklch(0.6 0.01 90)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
