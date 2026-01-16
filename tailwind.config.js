/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00D9FF', // Cyan - primary tech accent (terminal/console feel)
          hover: '#00B8D9', // Darker cyan on hover
          dark: '#0099B8', // Darker shade
          glow: '#00D9FF40', // Glow effect
          'glow-strong': '#00D9FF60',
        },
        primary: {
          blue: '#5B9BD5', // Professional blue - links, highlights
          'blue-hover': '#4A8BC2',
          'blue-glow': '#5B9BD530',
          cyan: '#00D9FF', // Bright cyan for tech elements
          'cyan-hover': '#00B8D9',
        },
        secondary: {
          green: '#00FF88', // Terminal green - success, code elements
          'green-hover': '#00D970',
          'green-glow': '#00FF8830',
          purple: '#A78BFA', // Purple for tech accents
          'purple-hover': '#8B6EF7',
          teal: '#14B8A6', // Teal for secondary accents
          'teal-hover': '#0D9488',
        },
        navy: {
          DEFAULT: '#0A0E27', // Deep dark blue - professional background
          light: '#151B2E', // Lighter navy
          lighter: '#1E2538', // Even lighter
          dark: '#050710', // Darker shade
          'terminal': '#0D1117', // Terminal/console dark
        },
        slate: {
          DEFAULT: '#64748B', // Professional text gray
          light: '#94A3B8', // Light text
          lighter: '#CBD5E1', // Lighter text
          lightest: '#F1F5F9', // Lightest text
          'code': '#8B949E', // Code text color
        },
        terminal: {
          green: '#00FF88', // Terminal success green
          yellow: '#FFD700', // Terminal warning yellow
          red: '#FF4444', // Terminal error red
          blue: '#00D9FF', // Terminal info blue
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'code-typing': 'codeTyping 0.5s steps(40) infinite',
        'terminal-blink': 'terminalBlink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(0, 217, 255, 0.3)',
          },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        codeTyping: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        terminalBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
