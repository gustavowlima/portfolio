
const brandColors = {
  purpleBlack: '#09041D',
  purplePersian: '#2E1477',
  bluePurple: '#1C0B60',
  purple: '#5628AB',
  platinum: '#ffffff'
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        ...brandColors,

        backgroundColor: brandColors.purpleBlack,
        textColor: brandColors.platinum

      },
      fontFamilly: {
        'poppins': ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'blur': "url('./assets/blur.png')"
      }
    },
  },
  plugins: [],
}