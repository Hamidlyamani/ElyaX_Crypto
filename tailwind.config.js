/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
		"./src/**/**/.{ts,tsx}",
	],
	theme: {
		darkMode: 'class',
		extend: {
			fontFamily: {
				L_light: [
					'Lufga-light'
				],
				L_regular: [
					'Lufga-regular'
				],
				L_medium: [
					'Lufga-medium'
				],
				L_semiBold: [
					'Lufga-medium'
				]
			},
			fontSize: {
				'h1': ['32px', { lineHeight: '40px' }],
				'h1-b': ['58px'],
				'h1-bm': ['48px'],
				'h2': ['54px', { lineHeight: '60px', fontWeight: 'bold', letterSpacing: '-0.036em' }],
				'h2-m': ['28px'],
				'h4': ['22px'],
				'h5': ['20px'],
				'b-large': ['18px', { lineHeight: '22px' }],
				'b-small': ['14px'],
				'b-medium': ['16px'],
				'b-bold': ['16px', { fontWeight: 600 }],
				'b-s-bold': ['14px', { fontWeight: 'bold' }],
				'tag': ['12px', { lineHeight: '12px' }],
				'tag-small': ['10px', { lineHeight: '10px' }],
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				orange: '#F46D22',
				green_light: '#1DD6B4',
				green_light_1: '#77ED91',
				yallow: '#FAE529',
				yallow2: '#DDC85B',
				black_coin: '#1A1A1A',
				black_100: '#1A1A1A',
				gray: {
					1000: "#111111",
					900: "#212325",
					800: "#909093",
					100: "#909093",
					50: "rgb(217, 217, 217)",
					10: "#F8F8F9",
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: '#151617',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

