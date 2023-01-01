/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    backgroundImage: {
        'hero-pattern': "url('/src/assets/SkillsBg.jpg')",
      },
      colors:{
        //light Mode
      primary:"#394953",
      secondary:"#ff8000",
      button_secondary:"#ffc993",
      bgprimary:"#ffff",
      bgsecondary:"#eeeeee",
      bgtransparent:"rgba(0,0,0,0.2)",
      //Dark Mode  
      bg_darkprimary:"#242e31",
      darksecondary:"#eeeeee",
      },
      animation:{
        'spin-slow': 'spin 15s linear infinite'
      }
  },
  plugins: [],
}}
