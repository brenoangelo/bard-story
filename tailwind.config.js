/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "start-bg": "url('/bg-1.png')",
        "end-bg": "url('/bg-2.png')",
      },
      fontFamily: {
        'sans': ['gabriela', 'system-ui']
      }
    },
  },
  plugins: [],
}