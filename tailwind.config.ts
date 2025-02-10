import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      red: "#e31e24",
      hoverRed: "#c2191f",
      white: "#fff"
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
