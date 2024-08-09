/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins","sans-serif"],
        cursive:["Dancing Script", "cursive"]
      },
      colors:{
        primary:"#854d3d",
        secondary:"#4a1e1b",
        brandDark:"#270c05",
      },
      container:{
       center:true,
       padding:{
        DEFAULT:"1rem",
        sm:"2rem",
       },
      }
    },
  },
  plugins: [],
}
