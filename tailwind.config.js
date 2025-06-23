/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFEAD8',
        salmon: '#E8988A',
        purple: '#9B177E',
        darkPurple: '#2A1458',
      },
      fontFamily: {
        retro: ['Press Start 2P', 'cursive'],
        pixel: ['VT323', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2.5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
