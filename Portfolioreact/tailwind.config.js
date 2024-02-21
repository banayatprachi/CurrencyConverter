/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgb': 'rgb(var(--color-rgb))',
      },
      textColor: {
        'rgb': 'rgb(var(--color-rgb))',
      },
    },
  
  },
  plugins: [],
}

