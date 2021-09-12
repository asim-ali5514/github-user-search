module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'sky-blue' : '#0079FF',
        'light-grey' : '#697C9A',
        'navy-blue' : '#4B6A9B',
        'dark-grey' : '#2B3442',
        'snow' : '#F6F8FF',
        'slight-dark-white' : '#FEFEFE',
        'dark-mode-bg' : 'hsl(220, 40%, 13%)',
        'dark-blue' : '#1E2A47'
      },
      fontFamily : {
        'Space-Mono' : ['"Space Mono"' , 'monospace'],
      },
      fontSize : {
        'mobile-title' : '26px',
      },
      spacing : {
        'mob-search' : '327px'
      },
      maxWidth : {
        'mob-search' : '327px'

      }
    },
  },
  variants: {
    extend: {
      display : ['dark'],
      fill : ['hover' , 'focus'],
      cursor : ['hover' , 'focus']
    },
  },
  plugins: [],
}