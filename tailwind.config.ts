import type { Config } from 'tailwindcss';
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '0',
      },
      screens: {
        '2xl': '1920px',
      },
    },
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { 'transform-origin': 'top' },
          '15%': { transform: 'rotateZ(10deg)' },
          '30%': { transform: 'rotateZ(-10deg)' },
          '45%': { transform: 'rotateZ(5deg)' },
          '60%': { transform: 'rotateZ(-5deg)' },
          '75%': { transform: 'rotateZ(2deg)' },
        },
      },
      fontSize: {
        '3xl': ['2rem', '1.28'], // 32px
        '5xl': ['2.5rem', '1.28'], // 40px
        '6xl': ['2.75rem', '1.28'], // 44px
        '7xl': ['3rem', '1.28'], // 48px
        '8xl': ['4rem', '1.28'], // 64px
        '9xl': ['4.5rem', '1.28'], // 72px
        '10xl': ['6rem', '1.28'], // 96px
        '11xl': ['8rem', '1.28'], // 128px
        '12xl': ['10rem', '1.28'], // 160px
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        blue: {
          700: '#3328bf',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;

export default config;
