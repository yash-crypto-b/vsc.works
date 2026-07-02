/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF5A1F',
        dark: '#111111',
        surface: '#F8F8F8',
        border: '#EAEAEA',
        text: '#1A1A1A',
        muted: '#666666',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(17, 17, 17, 0.25)',
      },
    },
  },
  plugins: [],
}

