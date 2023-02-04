/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      
      fontFamily: {
        'Ginto': ['Ginto','Roboto'],
        'GintoNord' : ['GintoNord','Roboto'],
        'Whitney' : ['Whitney','Roboto'],
        'gg-sans' : ['Whitney','sans-serif']
      },
      colors: {
        'accent': '#404EED',
        'accentText': "#5865f2",
        'secondry': '#23272A'
      },
    },
  },
  plugins: [],
}
