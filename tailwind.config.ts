import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark minimal palette
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-elevated': '#1a1a1a',
        'border': '#262626',
        'text-primary': '#fafafa',
        'text-secondary': '#a3a3a3',
        'text-muted': '#525252',

        // Accent colors
        'accent-green': '#22c55e',
        'accent-blue': '#3b82f6',
        'accent-orange': '#f97316',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#a855f7',

        // AWS theme colors (used throughout components)
        'aws-dark': '#0a0a0a',
        'aws-gray': '#141414',
        'aws-border': '#262626',

        // Terminal colors
        'terminal-bg': '#141414',
        'terminal-header': '#1a1a1a',
        'terminal-border': '#262626',
        'terminal-green': '#22c55e',
        'terminal-output': '#fafafa',
        'terminal-muted': '#525252',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
