/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/Components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#2e5164ff',
        lightGrey: '#9AA6B2',
        blue: '#0B84FF',
        navyBlue: '#072146',
        darkBlue: '#06357A',
        red: '#ae949aff'

        //todo add colors from figma here
      }
    }
  },
  safelist: [
    'bg-red',
    'bg-offWhite',
    'bg-blue',
    'bg-navyBlue',
    'bg-darkBlue',
    'bg-lightGrey',
    'text-red',
    'text-offWhite',
    'text-blue',
    'text-navyBlue',
    'text-darkBlue',
    'text-lightGrey'
  ],
  plugins: []
}

