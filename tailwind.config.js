/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 25s linear infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards", 
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInSlide: 'fadeInSlide 1s ease-out forwards',
        expandLine: 'expandLine 1s ease-out forwards',
        floatDown: 'floatDown 0.8s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" }, 
          "100%": { opacity: 1, transform: "translateX(0)" },   
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        },
         fadeInSlide: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        expandLine: {
          '0%': { width: '0', left: '50%' },
          '100%': { width: '100%', left: '0%' },
        },
        floatDown: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(6px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      },
    },
  },
  plugins: [],
}

