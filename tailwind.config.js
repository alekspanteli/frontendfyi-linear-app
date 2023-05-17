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
    spacing: {
      0: "0",
      1: px(4),
      2: px(8),
      3: px(12),
      4: px(16),
      5: px(20),
      6: px(24),
      7: px(28),
      8: px(32),
      9: px(36),
      10: px(40),
      11: px(44),
      12: px(48),
    },
  },
};
