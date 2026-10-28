import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#17211b', 900: '#243129', 800: '#39473e' },
        paper: { 50: '#fbfaf7', 100: '#f5f3ed', 200: '#e9e5db' },
        accent: { 300: '#d2ad91', 400: '#b9825c', 500: '#966543', 600: '#7d5135' },
        earth: { 100: '#f2e8df', 800: '#4a352b', 900: '#35251f' }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif']
      },
      boxShadow: { glow: '0 20px 60px rgba(28, 42, 34, .09)', soft: '0 8px 30px rgba(28, 42, 34, .06)' },
      borderRadius: { '4xl': '2rem' }
    }
  },
  plugins: []
} satisfies Config;
