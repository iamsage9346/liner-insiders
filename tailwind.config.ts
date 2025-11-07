import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          50: '#f8f9fb',
          100: '#f1f3f7',
          200: '#e4e8ef',
          300: '#cdd4e2',
          400: '#a8b3c9',
          500: '#8391af',
          600: '#667397',
          700: '#4e5a7e',
          800: '#3d4766',
          900: '#2a3147',
          950: '#1a1f33',
        },
        scholarly: {
          50: '#faf8f6',
          100: '#f4f1ed',
          200: '#e8e2d9',
          300: '#d5cbbf',
          400: '#baaa98',
          500: '#a08976',
          600: '#896f5f',
          700: '#715a4d',
          800: '#5e4a40',
          900: '#4f3e36',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        'academic': '0.02em',
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
    }
  },
  plugins: []
};

export default config;


