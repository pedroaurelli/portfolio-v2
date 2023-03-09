/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{tsx,ts,jsx,js}'
  ],
  theme: {
    container: {
      padding: '1rem'
    },
    screens: {
      phone: '490px',
      tablet: '820px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        'primary-blue': '#2B3151',
        'secondary-blue': '#A9B2DF',
        'light-blue': '#EFF2FF',
        'dark-blue': '#151723',
        'black': '#161616',
        'white': '#F5F5F5',
        'gray': '#F3F3F3'
      },
    },
  },
  plugins: [],
}
