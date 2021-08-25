module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Shabnam' : 'Shabnam',
        'ShabnamDigits' : 'ShabnamDigits'
      },
      colors: {
        'mainGreenColor' : '#199da3',
        'mainLightColor' : '#f7f8f9',
        'secondaryLightColor' : '#9CAEBB',
        'mainLightestColor' : '#F9F9F9',
        'mainDarkColor' : '#222222',
        'mainGrayDarkColor' : '#777777',
        'mainGrayDarkerColor' : '#454545',
      },
      boxShadow: {
        'nav' : '0px 3px 50px -1px #3232470D',
        'box' : '0px 0px 1px 0px #0C1A4B3D, 0px 3px 8px -1px #3232470D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
