/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veloura: {
          cream: '#FAF6F2',
          champagne: '#FBF7F4',
          blush: '#F4E6E1',
          rose: '#EDD7D0',
          nude: '#EBD5CC',
          taupe: '#CBB4A7',
          gold: '#C5A882',
          bronze: '#A68261',
          espresso: '#2A211E',
          muted: '#7A6B65'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        'arch': '220px 220px 24px 24px',
        'arch-l': '260px 260px 28px 28px',
        'diagonal-cut': '200px 30px 140px 30px',
      }
    }
  },
  plugins: [],
}
