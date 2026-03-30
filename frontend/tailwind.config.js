/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['calc(0.75rem * var(--text-scale))', { lineHeight: '1.5' }],
        'sm': ['calc(0.875rem * var(--text-scale))', { lineHeight: '1.5' }],
        'base': ['calc(1rem * var(--text-scale))', { lineHeight: '1.5' }],
        'lg': ['calc(1.125rem * var(--text-scale))', { lineHeight: '1.5' }],
        'xl': ['calc(1.25rem * var(--text-scale))', { lineHeight: '1.4' }],
        '2xl': ['calc(1.5rem * var(--heading-scale))', { lineHeight: '1.3' }],
        '3xl': ['calc(1.875rem * var(--heading-scale))', { lineHeight: '1.2' }],
        '4xl': ['calc(2.25rem * var(--heading-scale))', { lineHeight: '1.1' }],
        '5xl': ['calc(3rem * var(--heading-scale))', { lineHeight: '1' }],
        '6xl': ['calc(3.75rem * var(--heading-scale))', { lineHeight: '1' }],
        '7xl': ['calc(4.5rem * var(--heading-scale))', { lineHeight: '1' }],
      },
      colors: {
        aviation: {
          primary: '#1e3a8a',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          dark: '#1e293b',
          light: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
