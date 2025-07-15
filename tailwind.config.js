/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D9643A',
        'brand-light': '#E48C6A',
        'brand-dark': '#C05A34',
        neutral: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e7e7e7',
          300: '#d1d1d1',
          400: '#a0a0a0',
          500: '#6e6e6e',
          600: '#505050',
          700: '#3b3b3b',
          800: '#2a2a2a',
          900: '#1c1c1c',
          950: '#121212',
        },
        background: '#ffffff',
        'background-alt': '#f8f8f8',
        text: {
          primary: '#1c1c1c',
          secondary: '#505050',
        },
        title: '#473A35',
        border: '#e7e7e7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}; 