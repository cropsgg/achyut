/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E6E6E6',
        primary: '#171717',
        accent: '#8B5CF6',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    // Uncomment after running npm install
    // require('@tailwindcss/typography'),
  ],
} 