/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        background: "rgb(var(--background-bg))"
      },
      fontSize: {
        'size-0': 'clamp(2.75rem, 1.97rem + 3.91vw, 5.00rem)',
      },
    },
  },
  corePlugins: {
    container: false,
  }
}
