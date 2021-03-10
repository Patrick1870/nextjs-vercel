module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: { 
    		pinkPrimary: "#dc2ade",
    		darkPrimary: "#111826"
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
