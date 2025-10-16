/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/Components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],

  //https://tailwindcss.com/docs/colors
  theme: {
    extend: {
      colors: {
        red: '#ae949aff',
        blue:'#0360E6'
        //todo add colors from figma here
      }
    }
  },

  plugins: []
}

