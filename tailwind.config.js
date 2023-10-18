/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

  ],
  theme: {
    extend: {},
    screens: {
      '2xs': '400px',
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      color1: "#282a36",
      color2: "#44475a",
      color3: "#5a5e77",
      color4: "#717593",
      color5: "#f8f8f2",
    }
  },
  plugins: [],
}

