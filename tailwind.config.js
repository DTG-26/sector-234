/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xag: {
          bg: '#070709',
          surface: '#121217',
          concrete: '#27272A',
          steel: '#D4D4D8',
          cyan: '#06B6D4',
          crimson: '#EF4444',
          amber: '#F97316',
          emerald: '#10B981',
          gold: '#F59E0B'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'Consolas'],
        sans: ['"Chakra Petch"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
