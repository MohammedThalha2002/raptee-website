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
        'greydiv': '#999999',
        'greytext': '#626262',
      },
      height: {
        '30rem': '30rem',
        '40rem': '40rem',
        '44rem': '44rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '55rem': '55rem',
        '60rem': '60rem',
        '70rem': '70rem',
        '80rem': '80rem',
        '90rem': '90rem',
        '10vh': '10vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '100vh': '100vh',
        '150vh': '150vh',
        '180vh': '180vh',
        '250vh': '250vh',
        '1/20': '20%',
        '1/30': '30%',
        '1/35': '35%',
        '1/40': '40%',
        '1/45': '45%',
        '1/60': '60%',
      },
      width: {
        '20vw': '20vw',
        '30rem': '30rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '70rem': '70rem',
        '80rem': '80rem',
        '90rem': '90rem',
        '1/10': '10%',
        '1/15': '15%',
        '1/20': '20%',
        '1/25': '25%',
        '1/30': '30%',
        '1/35': '35%',
        '1/40': '40%',
        '1/45': '45%',
      },
      inset: {
        '7rem': '7rem',
        '10rem': '10rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '70rem': '70rem',
        '80rem': '80rem',
        '90rem': '90rem',
        '1/5': '5%',
        '1/70': '70%',
        '1/90': '90%',
        '1/80': '80%',
        '1/96': '96%',
        '1/13': '13%',
      },
      aspectRatio: {
        '16/8': '16 / 8',
      },
      padding: {
        '1/5': '5%',
        '1/10': '10%',
        '1/13': '13%',
        '1/15': '15%',
      },
      fontFamily: {
        nebula: 'Nebula',
        oswald: 'Oswald',
        mont: 'Montserrat',
      },
      fontSize: {
        mml: '0.3rem',
        mmr: '0.4rem',
        mmb: '0.5rem',
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
        'culturebg': "url('/images/culturebg.jpg')",
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
    },
  },
  plugins: [],
}