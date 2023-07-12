const plugin = require('tailwindcss/plugin')

function px(pixels) {
  return `${pixels / 16}rem`;
}

const themeConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-roboto-mono)"],
    },
    colors: {
      background: "rgb(var(--background))",
      white: {
        DEFAULT: "rgb(var(--white))",
      },
      grey: {
        DEFAULT: "rgb(var(--grey))",
        "dark":  "rgb(var(--grey-dark))",
      },
      accent: {
        300: "rgb(var(--accent-300))",
        500: "rgb(var(--accent-500))",
        700: "rgb(var(--accent-700))",
      },
      current: "currentColor",
      "text-inherit": "inherit",
      transparent: "transparent",
      red: "red",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, theme(colors.accent.700) 9.16%, theme(colors.accent.500) 43.89%, theme(colors.accent.300) 64.72%)",
    },
    fontSize: {
      xs: px(13),
      sm: px(14),
      md: px(16),
      lg: px(22),
      "5xl": px(80),
    },
    spacing: {
      auto: "auto",
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
    boxShadow: {
      primary: "rgb(80 63 205 / 0.5) 0px 1px 40px",
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('nth-3-5', '&:nth-child(n+3):nth-child(-n+5)')
    })
  ]
};

export default themeConfig;
