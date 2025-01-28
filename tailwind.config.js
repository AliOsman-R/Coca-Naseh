/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#0e2140",
        "secondary-color":"#c1b06c",
        "text-color":"#788596",
        "secondary-icon-color":"#fcf9f2"
      },
      screens:{
        slg:"1150px"
      }
    },
  },
  plugins: [],
}

