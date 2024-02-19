/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans:  [ "'Lato', sans-serif"],
      serif: [ "'Lobster', sans-serif "]
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cstgoldyellow : '#FF9800',
        cstgoldepale: '#f5b75d',
        cstlightgold : '#F4DC8F',
        cstgray : '#737373',
        cstdarkred : '#3E0A00',
        cstdefaultred :  '#B80000',
        cstdarkest:'#290202',
      },
    },
  },
  plugins: [],
};
