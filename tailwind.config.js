/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        'mobile':{"max":"640px"},
        'md':{"min":"640px"}
      }
    },
  },
  plugins: [],
}

