module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "45/100": "45%",
        backgroundImage: {
          'background-image': "url('/public/bg.jpeg')",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
