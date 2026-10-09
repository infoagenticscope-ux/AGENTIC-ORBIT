/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          darker: '#010409',
          card: '#080D1A',
          surface: '#0D1527',
          border: 'rgba(0, 240, 255, 0.22)',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
          blue: '#00F0FF',
          blueGlow: '#00D2FF',
          blueDeep: '#0066FF',
          blueHover: '#38BDF8',
          silver: '#94A3B8',
          textMuted: '#94A3B8',
          textSubtle: '#64748B',
          whatsapp: '#25D366',
          whatsappHover: '#1ebe5d',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(0, 240, 255, 0.45)',
        'glow-blue-lg': '0 0 60px -10px rgba(0, 210, 255, 0.55)',
        'glow-blue-sm': '0 0 15px -2px rgba(0, 240, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 240, 255, 0.15)',
        'whatsapp-glow': '0 0 25px rgba(37, 211, 102, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow-sweep': 'sweep 8s linear infinite',
        'marquee': 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(0, 240, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.04) 1px, transparent 1px)',
        'circuit-pattern': 'linear-gradient(to right, rgba(0, 240, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.06) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
