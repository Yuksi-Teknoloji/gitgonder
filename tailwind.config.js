/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF5B04',
          50: '#FFF4ED',
          100: '#FFE6D6',
          500: '#FF5B04',
          600: '#E55103',
          700: '#CC4703',
        },
        gray: {
          DEFAULT: '#3A3A3A',
          700: '#3A3A3A',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
