/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'primary': '#FF4B26',
          'secondary': '#0066FF',
          'dark': '#111111',
        },
        fontFamily: {
          'rf': ['RFDewi', 'sans-serif'],
          'rf-expanded': ['RFDewiExpanded', 'sans-serif'],
          'rf-expanded-black': ['RFDewiExpandedBlack', 'sans-serif']
        },
        screens: {
          '2xs': '320px',
          'xs': '393px',
          'sm': '480px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1440px',
          '2xl': '1680px'
        },
      },
    },
    plugins: [],
  }