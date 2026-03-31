/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily: {
        sans: ['Inter', 'sans-serif'],      // body + buttons
        display: ['Poppins', 'sans-serif'], // headings
},
      colors: {
        premiumBg: "#f3f4f4",
        primaryText: "#0f172a",
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}