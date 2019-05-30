module.exports = {
  theme: {
    extend: {},
    colors:{
      blue: {
        100: '#1da1f2',
        200: '#a8d6f8'
      },
      gray:{
        100:'#ccc',
        200:'#eee'
      },
      white:{
        100:'#fff'
      },
      black:{
        100:'#000',
        200:'#484848'
      },
      green:{
        100:'#018489'
      }
    },
  variants: {
    backgroundColor: ['hover'],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
  }
}