/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      minWidth: {
        '600': '600px',
      },
      maxWidth: {
        '700': '700px'
      },
      spacing: {
        '600': '600px',
        '200': '200px',
      },
      padding: {
        '30': '30px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

