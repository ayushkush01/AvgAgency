/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FF4D2E',
          dark: '#E8380F',
        },
        ink: '#0A0A0A',
        peach: '#FFE9E3',
        peachdeep: '#FFD5CB',
        dark: {
          DEFAULT: '#0B0B0B',
          card: '#141414',
        },
        sunny: '#FFB400',
        cyan: '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
        media: '24px',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(10, 10, 10, 0.12)',
        lift: '0 18px 40px -18px rgba(10, 10, 10, 0.28)',
        float: '0 12px 32px -12px rgba(10, 10, 10, 0.22)',
      },
      maxWidth: {
        shell: '1240px',
      },
      /* Adds the in-between steps used for muted text and hairlines */
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
    },
  },
  plugins: [],
}
