module.exports = {
  theme: {
    extend: {},
    colors:{
      blue: {
        100: '#1da1f2',
        200: '#a8d6f8'
      },
      gray:{
        100:'#ccc'
      },
      white:{
        100:'#fff'
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