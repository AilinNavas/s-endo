/** @type {import('tailwindcss').Config} */
export default {
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
      animation: {
        blob: "blob 4s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(50px, -60px) scale(1.5)"
          },
          "66%": {
            transform: "translate(-30px, 40px) scale(0.5)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [ 
    require('tailwindcss-animated')
  ],
}

