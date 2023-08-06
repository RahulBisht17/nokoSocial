/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '31':'7.75rem',
        '76':'19rem',
        '120':'30rem',
        '144': '36rem',
        '168': '41rem',
      },
      screens:{
        'xl-2':'1302px',
        'lg-2':'1152px'
      }
    },
    
  },
  plugins: [],
}

