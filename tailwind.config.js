/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { parse } from "postcss";
import { objectify } from "postcss-js";

function px(pixels) {
  return `${pixels / 16}rem`;
}

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  fontFamily: {
    sans: ["var(--font-inter)"],
    mono: ["var(--font-roboto-mono)"],
  },
  colors: {
    background: "rgb(0 2 18)",
    white: "rgb(255 255 255)",
    red: "red",
    "white-a08": "rgb(255 255 255 / .08)",
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
};
export const plugins = [
  plugin(function ({ addComponents, config }) {
    let result = "";

    const currentConfig = config();

    const groups = [
      { key: "colors", prefix: "color" },
      { key: "spacing", prefix: "space" },
      { key: "fontSize", prefix: "size" },
    ];

    groups.forEach(({ key, prefix }) => {
      const group = currentConfig.theme[key];

      if (!group) {
        return;
      }

      Object.keys(group).forEach((key) => {
        result += `--${prefix}-${key}: ${group[key]};`;
      });
    });

    addComponents({
      ":root": objectify(parse(result)),
    });
  }),
];
