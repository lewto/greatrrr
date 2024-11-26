/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gg-racing': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(100px)', opacity: 0 },
          '26%': { transform: 'translateX(-100px)', opacity: 0 },
          '50%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(0)' }
        },
        'trail': {
          '0%': { transform: 'scaleX(0)', opacity: 1 },
          '100%': { transform: 'scaleX(1)', opacity: 0 }
        }
      }
    },
  },
  plugins: [],
};