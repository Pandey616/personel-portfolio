import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d1117",
        paper: "#f5f7f9",
        signal: "#c7f36b",
        electric: "#7dd3fc",
      },
    },
  },
  plugins: [],
};

export default config;
