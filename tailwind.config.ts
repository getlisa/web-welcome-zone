
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom color scheme
				coolGray: {
					DEFAULT: '#ca4f98',
					dark: '#ca4f98',
					light: '#ca4f98',
				},
				deepWine: {
					DEFAULT: '#ca4f98',
					dark: '#ca4f98',
					light: '#ca4f98',
				},
				warmBlush: {
					DEFAULT: '#ca4f98',
					dark: '#ca4f98',
					light: '#ca4f98',
				},
				trueBlack: '#0a0a0a',
				pureWhite: '#ffffff',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 25px rgba(243, 213, 229, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(243, 213, 229, 0.6)' 
					},
				},
				'text-reveal': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
					},
					'100%': { 
						opacity: '1',
					},
				},
				'button-press': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.97)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'rotate-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'text-reveal': 'text-reveal 0.8s ease forwards',
				'fade-in': 'fade-in 1s ease forwards',
				'button-press': 'button-press 0.3s ease-in-out',
				'shimmer': 'shimmer 3s linear infinite',
				'rotate-gradient': 'rotate-gradient 3s linear infinite',
				'orbit': 'orbit 12s linear infinite',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, #3F132D, #3F132D)',
				'gradient-luxury': 'linear-gradient(90deg, #3F132D, #3F132D, #3F132D)',
				'gradient-dark': 'radial-gradient(circle at 50% 50%, #3F132D, #3F132D)',
				'gradient-card': 'linear-gradient(180deg, rgba(62, 12, 41, 0.08), rgba(243, 213, 229, 0.08))',
				'hero-pattern': 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
