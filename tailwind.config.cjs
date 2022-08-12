/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 12/08/2022 - 17:29:53
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cabaret: "#D44969",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
      karla: ["Karla, sans-serif"],
    },
  },
  plugins: [],
};
