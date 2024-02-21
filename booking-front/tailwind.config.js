// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         light: {

//           "primary": "#F8CF32",

//           "secondary": "#E54c44",

//           "accent": "#00cdb7",

//           "neutral": "#5a5560",

//           "base-100": "#fffded",

//           "info": "#00b5ff",

//           "success": "#22c55e",

//           "warning": "#ffbe00",

//           "error": "#dc2626",
//         },
//       },
//     ],
//   },
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {

        "mylight": {

          "primary": "#F8CF32",

          "secondary": "#E54c44",

          "accent": "#00cdb7",

          // "neutral": "9999999",
          "neutral": "#5a5560",

          "base-100": "#fffded",

          "info": "#00b5ff",

          "success": "#22c55e",

          "warning": "#ffbe00",

          "error": "#dc2626",
        },

      },
      "light"
    ],
  }
}
