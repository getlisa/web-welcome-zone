
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
				// Luxury AI theme colors
				lisa: {
					dark: '#0E0F1A',
					darker: '#080914',
					purple: '#7540EE',
					blue: '#1ECBE1',
					cyan: '#19E4D9',
					pink: '#FF2C9C',
					gray: {
						100: '#F5F7FA',
						200: '#E4E7EC', 
						300: '#D0D5DD',
						400: '#98A2B3',
						500: '#667085',
						600: '#475467',
						700: '#344054',
						800: '#1D2939',
						900: '#101828'
					}
				}
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
						boxShadow: '0 0 15px rgba(30, 203, 225, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(30, 203, 225, 0.6)' 
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
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, #1ECBE1, #7540EE)',
				'gradient-luxury': 'linear-gradient(90deg, #19E4D9, #7540EE, #FF2C9C)',
				'gradient-dark': 'radial-gradient(circle at 50% 50%, #1E293B, #0E0F1A)',
				'gradient-card': 'linear-gradient(180deg, rgba(30, 203, 225, 0.08), rgba(117, 64, 238, 0.08))',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
