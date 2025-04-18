import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(0 0% 90%)',
        input: 'hsl(0 0% 90%)',
        ring: 'hsl(0 0% 0%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(0 0% 0%)',
        primary: {
          DEFAULT: 'hsl(0 0% 0%)',
          foreground: 'hsl(0 0% 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 96%)',
          foreground: 'hsl(0 0% 0%)'
        },
        muted: {
          DEFAULT: 'hsl(0 0% 96%)',
          foreground: 'hsl(0 0% 45%)'
        },
        accent: {
          DEFAULT: 'hsl(0 0% 96%)',
          foreground: 'hsl(0 0% 0%)'
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)'
        }
      },
      borderRadius: {
        lg: 'calc(var(--radius) - 2px)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 6px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { transform: 'translateX(-20px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
