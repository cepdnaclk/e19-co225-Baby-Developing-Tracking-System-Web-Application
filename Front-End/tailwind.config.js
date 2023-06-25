/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from : {
            opacity: 0
            
        
          },
          to :{
            opacity: 1
          }
        }
      },
      animation:{
        fadein:"fadeIn 0.7s ease-in"
      }
    },
  },
  plugins: [],
}

