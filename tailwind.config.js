/** @type {import('tailwindcss').Config} */
function px(pixels) {
  return `${pixels / 16}rem`;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-roboto-mono)"],
    },
    colors: {
      background: "rgb(0 2 18)",
      white: "rgb(255 255 255)",
    },
    fontSize: {
      // "size-0": "clamp(2.75rem, 1.97rem + 3.91vw, 5.00rem)",
      // "size-1": ["clamp(2.75rem, 1.97rem + 3.91vw, 5.00rem)", "1.1"],
      "md": px(16),
      "lg": px(22),
      "5xl": px(80),
    },
  },
  corePlugins: {
    container: false,
  },
};
