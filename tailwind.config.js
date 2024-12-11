/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'loading-dot': {
          '0%, 20%': { opacity: 0 },
          '40%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'zoomOut': {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        'zoomIn': {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.8)", opacity: 0 },
        },
        'slideInTop': {
          "0%": {
              transform: "translateY(-100%)",
              opacity: "0",
          },
          "100%": {
              transform: "translateY(0)",
              opacity: "1",
          },
      },
      },
      animation: {
        'slideInTop': "slideInTop 0.7s ease-out",
        'zoomOut': "zoomOut 0.3s ease-out",
        'zoomIn': "zoomIn 0.3s ease-in",
        'loading-dot': 'loading-dot 1.5s infinite',
        'pulse': "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      screens: {
        'sm' : { 'max' : '640px', 'min' : '200px'}
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'cambo': ['"Cambo"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'gupter': ['"Gupter"', 'serif'],
        'lily': ['"Lily Script One"', 'cursive'],
      },
      
      boxShadow: {
        'custom': '1px 2px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3)',
        'custom-lg': '2px 2px 1px rgba(0, 0, 0, 0.4), 2px 2px 6px rgba(0, 0, 0, 0.4)',
        'custom-xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}

