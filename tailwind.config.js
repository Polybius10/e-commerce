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
      backgroundImage: {
        'logo-image': "url('./src/assets/logo.png')",
      },
      dark: {
        background: "bg-slate-800",
        color: 'text-white'
      },
      boxShadow: {
      'bxl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }},
  },
  plugins: [],
}