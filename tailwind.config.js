/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['60px', '70px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        kaisei: ['Kaisei Decol', 'sans-serif'],
        greatVibes: ['Great Vibes', 'sans-serif']
      },
      colors: {
        'primary-green': "#61805B",
        'secondary-green': "#87A18E",
        'green-text': "#1E543A",
        'gold': "#9F8052",
        'pale-green': "#87A18E",
      },
      boxShadow: {
        '3xl': '0 15px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      animation: {
        'bounce-once': 'bounce-once 1s ease',
      }
    },
  },
  plugins: [],
}

