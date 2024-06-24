/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_roxo1': `#694070`,
        'color_roxo2': `#E1D7E8`,
        'color_roxo3': `#DEC0F3`,
        'color_preto': `#2B2B2B`,
        'color_branco': `#ffffff`, 
        'color_cinza' : `#1f1f1f`,
        'color_azul' : `#001586`
      }
    },
  },
  plugins: [],
}