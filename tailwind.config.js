/** @type {import('tailwindcss').Config} */

/* ColorHunt palette link: https://colorhunt.co/palette/e8e2dbfab95bf5564e1a3263 */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "offWhite": "#F0F0F0",
      "lightGrey": "#DBDBDB",
      "grayishBlue": "#7B879D",
      "darkBlue": "#1F3251",
      "navy": "#1A3263",
      "red": "#F5564E",
      "orange": "#FAB95B",
      "gray": "#E8E2DB",
    },
    extend: {
      fontFamily: {
        aileronRegular: "Aileron-Regular",
        aileronBold: "Aileron-Bold",
        ddinRegular: "DDin-Regular",
        ddinBold: "DDin-Bold",
        cardoRegular: "Cardo-Regular",
        cardoBold: "Cardo-Bold",
        quattrocentoRegular: "Quattrocento-Regular",
        quattrocentoBold: "Quattrocento-Bold",
      },
      backgroundImage: {
        'bgHome' : "url('/public/bg/bg-charlotte-sky.JPG')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs"),
  ],
}
