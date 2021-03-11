module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: { 
    		pinkPrimary: "#dc2ade",
    		pinkSecondary: "#764ABC",
    		darkPrimary: "#111826",
    		darkSecondary: "#657786",
        darkThird: "#1F2936",
    	},
        animation: {
            'spin-slow': 'spin 3s linear infinite',
            'spin-very-slow': 'spin 5s linear infinite' 
        }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
