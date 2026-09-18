import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#07101d', 900: '#0b1524', 800: '#122034' },
        accent: { 300: '#7ff5e2', 400: '#5eead4', 500: '#2dd4bf' }
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 0 1px rgba(94,234,212,.08), 0 24px 80px rgba(0,0,0,.22)' },
      borderRadius: { '4xl': '2rem' }
    }
  },
  plugins: []
} satisfies Config;
