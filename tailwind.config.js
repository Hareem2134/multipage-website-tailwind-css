// // tailwind.config.js
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'about-hero-image': "url('/about-heroimage.png')",
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-hero-image': "url('/about-heroimage.png')",
      },
    },
  },
  plugins: [],
}