/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        paper: "#f3f0e8",
        signal: "#e85d3f",
        mint: "#b8e7d1",
        graphite: "#24272d"
      }
    }
  },
  plugins: []
};
