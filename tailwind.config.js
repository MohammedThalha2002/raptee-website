/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#E0B317',
        'highlight-low': '#5D4A0A',
      },
      height: {
        '10vh': '10vh',
        '100vh': '100vh',
        '150vh': '150vh',
      },
      width: {
        '20vw': '20vw',
      },
      aspectRatio: {
        '16/8': '16 / 8',
      },
      fontFamily: {
        nebula: ['Nebula'],
        oswald: ['Oswald'],
        mont: ['Montserrat'],
      },
      backgroundImage: {
        'zerobg1': "url('/images/9.png')",
        'zerobg2': "url('/images/12.png')",
        'zerobg3': "url('/images/8.png')",
      }
    },
  },
  plugins: [],
}