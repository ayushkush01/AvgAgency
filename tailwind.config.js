/**
 * Design tokens.
 *
 * Colours are declared once as CSS variables in `src/index.css` (see the
 * "BRAND TOKENS" block). Tailwind only *references* them, so rebranding the
 * whole site — including every hover, tint and ring — is a single edit there.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Electric blue accent */
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover-rgb) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft-rgb) / <alpha-value>)',
        },
        /* Near-black headings + dark section surfaces */
        ink: {
          DEFAULT: 'rgb(var(--ink-rgb) / <alpha-value>)',
          surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        },
        /* Body copy, secondary copy, hairlines, subtle backgrounds */
        body: 'rgb(var(--text-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        subtle: 'rgb(var(--subtle-rgb) / <alpha-value>)',
        /* Legacy alias — existing `bg-mist` utilities resolve to `subtle`. */
        mist: 'rgb(var(--subtle-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        media: '20px',
        panel: '24px',
      },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(10, 10, 11, 0.12)',
        lift: '0 16px 36px -18px rgba(10, 10, 11, 0.26)',
        float: '0 12px 32px -12px rgba(10, 10, 11, 0.22)',
        glow: '0 18px 50px -20px rgba(37, 99, 255, 0.55)',
      },
      maxWidth: {
        shell: '1200px',
        prose: '62ch',
      },
      /* In-between steps used for muted text and hairlines */
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      transitionDuration: {
        250: '250ms',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.25s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
