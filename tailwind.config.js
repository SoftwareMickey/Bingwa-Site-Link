/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

