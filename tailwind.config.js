/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom:["Inria Serif", "sans-serif"]
    },
    extend: {      
      boxShadow: {
      'bxl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }},
  },
  plugins: [],
}