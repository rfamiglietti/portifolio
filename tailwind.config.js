/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores personalizadas
        "blue-neon": "#58a6ff",
        "purple-neon": "#bc8cff",
      },
    },
  },
  plugins: [],
}