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
        '300vh': '300vh',
      },
      width: {
        '20vw': '20vw',
      },
      fontFamily: {
        nebula: ['Nebula'],
        oswald: ['Oswald'],
        mont: ['Montserrat'],
      },
      keyframes: {
        spin_words: {
          '10%, 100%': { transform: 'translateY(0%)' },
          '40%': { transform: 'translateY(-100%)' },
          '80%': { transform: 'translateY(-212%)' },
        }
      },
      animation: {
        spin_words: 'spin_words 15s infinite',
      },
      backgroundImage: {
        'homebg': "url('/images/1.png')"
      }
    },
  },
  plugins: [],
}