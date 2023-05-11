/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			minWidth: {
				'192': '192px',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
