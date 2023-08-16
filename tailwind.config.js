/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        'mobile':{"max":"1021px"},
        'md':{"min":"1024px"}
      }
    },
  },
  plugins: [],
}

