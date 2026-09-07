import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        panel: "var(--color-panel)",
        panelStrong: "var(--color-panel-strong)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        line: "var(--color-line)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        editorial: "0 25px 80px rgba(12, 11, 10, 0.16)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 15% 20%, rgba(210, 168, 107, 0.16), transparent 35%), radial-gradient(circle at 85% 10%, rgba(133, 77, 47, 0.18), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.7), rgba(240,232,224,0.88))"
      }
    }
  },
  plugins: []
};

export default config;
