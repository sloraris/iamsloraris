/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu', 'Sans Serif'],
				serif: ['Exo 2', 'Sans Serif'],
				mono: ['Ubuntu Mono', 'monospace'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			"sunset",
			{
				sloraris: {
					"primary": "#fc8236",
					"secondary": "#60a5fa",
					"accent": "#6f0fc2",
					"neutral": "#e7eff9",
					"base-100": "#1f2937", // Changed from #1a222d to #1f2937
					"base-200": "#101721",
					"base-300": "#090f16",
					"info": "#9ca3af",
					"success": "#4ade80",
					"warning": "#facc15",
					"error": "#ef4444",
				},
			},
		],
	}
}
