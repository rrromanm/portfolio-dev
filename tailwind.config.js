/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
      },
      keyframes: {
        scrollLTR: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        scrollLTR: 'scrollLTR 15s linear infinite',
        gradient: 'gradient 5s ease infinite',
      },
    },
  },
  plugins: [],
}
