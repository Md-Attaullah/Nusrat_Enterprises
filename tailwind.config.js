// Tailwind configuration file for production build (optional).
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#111827', // navy/near-black
          muted: '#6b7280'
        }
      }
    }
  },
  plugins: []
};