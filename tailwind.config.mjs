/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"taylor-swift-500": "#478249",
				"taylor-swift-50": "#f2f7f2",
	

				fontFamily: {
					"m3-label-large-font-family": "Roboto-Medium, sans-serif",
					"label-large-font": "Roboto-Medium, sans-serif",
				},
				fontSize: {
				"m3-label-large-font-size": "14px",
				"label-large-size": "14px",
				},
				fontWeight: {
				"m3-label-large-font-weight": "500",
				},
				lineHeight: {
				"m3-label-large-line-height": "20px",
				"label-large-line-height": "20px",
				},
				letterSpacing: {
				"label-large-tracking": "0.1px",
				},
		},
	},
},
	plugins: [],
}
