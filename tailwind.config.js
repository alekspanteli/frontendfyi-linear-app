
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

function px(pixels) {
  return `${pixels / 16}rem`;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16
      )}`
    : null;
}


module.exports = {
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
      background: "rgb(0 2 18)",
      white: "rgb(255 255 255)",
      red: "#ff0000",
      "white-a08": "rgb(255 255 255 / .08)",
      accent: {
        300: "rgb(103 63 215)",
        500: "rgb(86 67 204)",
        700: "rgb(69 94 181)",
      },
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, var(--color-accent-700) 9.16%, var(--color-accent-500) 43.89%, var(--color-accent-300) 64.72%)",
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
  },
  plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, hexToRgb(val)])
    // Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // hex
  );

  addBase({
    ":root": newVars,
  });
}

