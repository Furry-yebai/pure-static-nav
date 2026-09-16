/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#aeaeb2',
            500: '#86868b',
            600: '#6e6e73',
            700: '#424245',
            800: '#2c2c2e',
            900: '#1d1d1f',
          },
          blue: {
            500: '#0071e3',
            600: '#0077ed',
          }
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Helvetica Neue',
          'sans-serif'
        ]
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.03em' }],
        'display-lg': ['56px', { lineHeight: '1.07', fontWeight: '700', letterSpacing: '-0.025em' }],
        'display-md': ['40px', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'display-sm': ['28px', { lineHeight: '1.14', fontWeight: '600', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 40px rgba(0, 113, 227, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 113, 227, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backdropBlur: {
        'apple': '20px',
        'apple-lg': '40px',
      },
      backgroundImage: {
        'gradient-apple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0071e3 0%, #5ac8fa 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #0071e3 0px, transparent 50%), radial-gradient(at 80% 0%, #5ac8fa 0px, transparent 50%), radial-gradient(at 0% 50%, #667eea 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
