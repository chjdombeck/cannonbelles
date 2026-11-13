/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "cannon-red": "#D91E18",
        "deep-red": "#A4161A",
        charcoal: "#2B2B2B",
        "soft-gray": "#E5E5E5",
        cream: "#F8F5F0",
        muted: "#B0B0B0",
        beige: "#EFE6D8",
        "warm-brown": "#7A5C3E",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        wider: "0.08em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
