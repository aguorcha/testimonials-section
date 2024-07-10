/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'sans-serif']
      },
      fontWeight: {
        'normal': 500,
        'semibold': 600,
      },
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-drak-blackish-blue': 'hsl(219, 29%, 14%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      }
    },
  },
  plugins: [],
}

