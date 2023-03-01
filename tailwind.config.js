/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '48px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        50: '#F8F8F8',
        100: '#F1F1F2',
        200: '#E2E3E5',
        300: '#CDCED1',
        400: '#B7B9BD',
        500: '#70747B',
        600: '#5A5D62',
        700: '#43464A',
        800: '#2D2E31',
        900: '#161612',
      },
    },
    extend: {},
  },
  plugins: [],
}
