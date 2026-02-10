/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#032c95',
          50: '#E6F0FF',
          100: '#CCE0FF',
          500: '#032c95',
          600: '#022173',
          700: '#021751',
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
