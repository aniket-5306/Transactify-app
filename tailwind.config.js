/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          chill: ['Poppins', 'sans-serif'],
          baloo: ['"Baloo Da 2"', 'cursive'],
          krona: ['"Krona One"', 'sans-serif'],
          roboto: ['"Roboto"', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

