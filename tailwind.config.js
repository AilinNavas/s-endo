/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
      "primary": "#0a2d5b",
      "secondary" : "#6495ed",
      "tartiary" : "#808080",
      "gray" : " #b6b9ba",
      "blue" : "#6a5acd"
      },
      backgroundImage:{
        'hero-bg': "url('./src/assets/fondo2.avif')"
      } 
     
    },
  },
  plugins: [ 
    require('tailwindcss-animated')
  ],
}

