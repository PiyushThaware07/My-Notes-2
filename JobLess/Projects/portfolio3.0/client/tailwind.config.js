/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { width: '30%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        loading: 'loading 5s linear',
      },
    },
  },
  plugins: [],
}

