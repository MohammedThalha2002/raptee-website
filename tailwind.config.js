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
        'navlinksbg': '#424242',
      },
      height: {
        '10vh': '10vh',
        '25vh': '25vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '75vh': '75vh',
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
        nebula: 'Nebula',
        oswald: 'Oswald',
        mont: 'Montserrat',
      },
      backgroundImage: {
        'zerobg1': "url('/images/9.png')",
        'zerobg2': "url('/images/12.png')",
        'zerobg3': "url('/images/8.png')",
        'homebg': "url('/images/4.png')",
        'aboutbg': "url('/images/5.png')",
        'performbg': "url('/images/6.png')",
        'techstorybg': "url('/images/7.png')",
        'vcubg': "url('/images/2.png')",
        'bmsbg': "url('/images/1.png')",
        'motorbg': "url('/images/3.png')",
        'ccsbg': "url('/images/11.png')",
        'safetybg': "url('/images/10.png')",
      },
      boxShadow: {
        'edgeBlur': '0 0 5px 10px #000;',
      }
    },
    screens: {
      'xl': { 'min': '639px' },
      // => @media (max-width: 1279px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'techstorybp': '25%',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    }
  },
  plugins: [],
}