module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: { 
    		pinkPrimary: "#61DAFB",
    		pinkSecondary: "#764ABC",
    		darkPrimary: "#111826",
    		darkSecondary: "#657786",
        darkThird: "#1F2936",
    	},
      animation: {
            'spin-slow': 'spin 3s linear infinite',
            'spin-very-slow': 'spin 5s linear infinite' 
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.png')",
      })
    }, 

    fontFamily: {
      'sans': ['Montserrat'],
      'body': ['Montserrat'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
