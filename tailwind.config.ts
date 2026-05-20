import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#FAFAF7',
        ink: '#1A1A1A',
        muted: '#666666',
      },
      maxWidth: {
        content: '720px',
      },
      lineHeight: {
        body: '1.65',
      },
    },
  },
  plugins: [],
}

export default config
