import type { Config } from 'tailwindcss'

/**
 * Atelier Premium - warm midnight studio system
 * Charcoal surfaces + cream type + coral signal. No purple neon.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        atelier: {
          bg: 'rgb(var(--bg) / <alpha-value>)',
          raised: 'rgb(var(--raised) / <alpha-value>)',
          elevated: 'rgb(var(--elevated) / <alpha-value>)',
          cream: 'rgb(var(--cream) / <alpha-value>)',
          sand: 'rgb(var(--sand) / <alpha-value>)',
          mute: 'rgb(var(--mute) / <alpha-value>)',
          line: 'rgb(var(--line) / <alpha-value>)',
          coral: 'rgb(var(--coral) / <alpha-value>)',
          sage: 'rgb(var(--sage) / <alpha-value>)',
        },
        // Compat
        paper: 'rgb(var(--bg) / <alpha-value>)',
        panel: 'rgb(var(--raised) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--cream) / <alpha-value>)',
          soft: 'rgb(var(--sand) / <alpha-value>)',
          mute: 'rgb(var(--mute) / <alpha-value>)',
        },
        rule: 'rgb(var(--line) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--coral) / <alpha-value>)',
          soft: 'rgb(var(--coral-soft) / <alpha-value>)',
        },
        void: 'rgb(var(--bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--raised) / <alpha-value>)',
          elevated: 'rgb(var(--elevated) / <alpha-value>)',
          glass: 'rgb(var(--raised) / <alpha-value>)',
        },
        mist: {
          DEFAULT: 'rgb(var(--cream) / <alpha-value>)',
          soft: 'rgb(var(--sand) / <alpha-value>)',
          faint: 'rgb(var(--mute) / <alpha-value>)',
        },
        stroke: {
          DEFAULT: 'rgb(var(--line) / <alpha-value>)',
          strong: 'rgb(var(--line) / <alpha-value>)',
        },
        canvas: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          muted: 'rgb(var(--raised) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: [
          'clamp(2.75rem, 7.5vw, 5.5rem)',
          { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '700' },
        ],
        display: [
          'clamp(1.85rem, 4vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        title: [
          '1.25rem',
          { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        body: ['1.05rem', { lineHeight: '1.7', fontWeight: '400' }],
        small: ['0.925rem', { lineHeight: '1.6', fontWeight: '400' }],
        micro: [
          '0.7rem',
          { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '500' },
        ],
      },
      maxWidth: {
        content: '42rem',
        page: '74rem',
      },
      spacing: {
        section: '7.5rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        studio: '1.25rem',
        soft: '0.75rem',
      },
      boxShadow: {
        studio: '0 24px 60px -30px rgb(0 0 0 / 0.65)',
        soft: '0 12px 40px -20px rgb(0 0 0 / 0.5)',
        inset: 'inset 0 1px 0 rgb(255 255 255 / 0.06)',
      },
      backgroundImage: {
        'atelier-glow':
          'radial-gradient(ellipse 80% 55% at 0% 0%, rgb(var(--coral) / 0.16), transparent 55%), radial-gradient(ellipse 60% 45% at 100% 10%, rgb(var(--sage) / 0.12), transparent 50%), radial-gradient(ellipse 50% 40% at 70% 100%, rgb(var(--coral) / 0.08), transparent 55%)',
        'card-sheen':
          'linear-gradient(135deg, rgb(255 255 255 / 0.06), transparent 40%, transparent 60%, rgb(255 255 255 / 0.02))',
      },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'eng-scan': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '8%': { opacity: '0.7' },
          '100%': { transform: 'translateY(28rem)', opacity: '0' },
        },
        'eng-scan-wide': {
          '0%': { transform: 'translateX(-30%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(30%)', opacity: '0' },
        },
        'eng-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.35)' },
        },
        'eng-cta': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(var(--coral) / 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgb(var(--coral) / 0)' },
        },
        'eng-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        'eng-caret': {
          '0%, 45%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        floaty: 'floaty 9s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'eng-scan': 'eng-scan 7s ease-in-out infinite',
        'eng-scan-wide': 'eng-scan-wide 9s ease-in-out infinite',
        'eng-pulse': 'eng-pulse 1.8s ease-in-out infinite',
        'eng-cta': 'eng-cta 2.4s ease-out infinite',
        'eng-dot': 'eng-dot 1.6s ease-in-out infinite',
        'eng-caret': 'eng-caret 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}

export default config
