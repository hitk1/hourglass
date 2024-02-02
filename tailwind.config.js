/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#202124",
        title: "#c5c8d4",
        displayNumber: '#e6e9f7',
        gray650: "#525459",
      },
      fontSize: {
        0: '0'
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
