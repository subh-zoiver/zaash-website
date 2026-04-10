/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0F1923',
          DEFAULT: '#1A2E42',
          light: '#243D56',
        },
        accent: {
          DEFAULT: '#00C9A7',
          hover: '#00A88C',
          subtle: '#E6FAF7',
        },
        grey: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          400: '#8D99A8',
          600: '#4A5568',
          900: '#1A202C',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '1200px',
        'text': '65ch',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}
