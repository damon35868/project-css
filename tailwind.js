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
        200:'#eee',
        300:'#767676',
        400:'#bbb',
        500:'#edefed',
        600:'#dce0e0;',
        700:'#c4c4c4;',
        800:'#d1d1c9'
      },
      white:{
        100:'#fff'
      },
      black:{
        100:'#000',
        200:'#484848',
        300:'#aaa',
        400:'#c3c3c3'
      },
      green:{
        100:'#018489',
        200:'#008489;'
      },
      red:{
        100:'rgb(255, 90, 95)'
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