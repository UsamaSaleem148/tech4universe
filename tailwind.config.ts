import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0B0F', 
          subtle: '#15151C', 
          elevated: '#1C1C25', 
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#9CA3AF',
          dark: '#f0f0f0',
        },

        primary: {
          DEFAULT: '#5E6AD2', 
          hover: '#6E7AEF',
          foreground: '#FFFFFF',
        },

        secondary: {
          DEFAULT: '#1F1F28',
          foreground: '#E5E7EB',
        },

        border: {
          subtle: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.16)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
