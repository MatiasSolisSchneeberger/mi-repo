import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage:{
				/* Fondos HeroImage */
				'fondos-debut': 'radial-gradient(closest-side, rgba(35, 66, 37, 0.75) 0%, rgba(35, 66, 37, 0) 100%), linear-gradient(to left, rgba(35, 66, 37, 0.25), rgba(35, 66, 37, 0.25)), url("/src/images/Fondos/01.Debut.png")',

				'fondos-fearless': 'radial-gradient(closest-side,rgba(132, 42, 28, 0.75) 0%,rgba(132, 42, 28, 0) 100%), linear-gradient(to left, rgba(132, 42, 28, 0.25), rgba(132, 42, 28, 0.25)), url("/src/images/Fondos/02.Fearless.png")',
				
				'fondos-speak-now': 'radial-gradient(closest-side,rgba(109, 71, 107, 0.75) 0%,rgba(109, 71, 107, 0) 100%), linear-gradient(to left, rgba(109, 71, 107, 0.25), rgba(109, 71, 107, 0.25)), url("/src/images/Fondos/03.SpeakNow.png")',
				
				'fondos-red': 'radial-gradient(closest-side,rgba(122, 46, 57, 0.75) 0%,rgba(122, 46, 57, 0) 100%), linear-gradient(to left, rgba(122, 46, 57, 0.25), rgba(122, 46, 57, 0.25)), url("/src/images/Fondos/03.Red.png")',
				
				'fondos-1989': 'radial-gradient(closest-side,rgba(15, 94, 125, 0.75) 0%,rgba(15, 94, 125, 0) 100%), linear-gradient(to left, rgba(15, 94, 125, 0.25), rgba(15, 94, 125, 0.25)), url("/src/images/Fondos/05.1989.png")',
				
				'fondos-reputation': 'radial-gradient(closest-side,rgba(72, 68, 68, 0.75) 0%,rgba(72, 68, 68, 0) 100%), linear-gradient(to left, rgba(72, 68, 68, 0.25), rgba(72, 68, 68, 0.25)), url("/src/images/Fondos/06.Reputation.png")',
				
				'fondos-lover': 'radial-gradient(closest-side,rgba(153, 27, 59, 0.75) 0%,rgba(153, 27, 59, 0) 100%), linear-gradient(to left, rgba(153, 27, 59, 0.25), rgba(153, 27, 59, 0.25)), url("/src/images/Fondos/07.Lover.png")',
				
				'fondos-folklore': 'radial-gradient(closest-side,rgba(93, 84, 79, 0.75) 0%,rgba(93, 84, 79, 0) 100%), linear-gradient(to left, rgba(93, 84, 79, 0.25), rgba(93, 84, 79, 0.25)), url("/src/images/Fondos/08.Folklore.png")',
				
				'fondos-evermore': 'radial-gradient(closest-side,rgba(108, 76, 64, 0.75) 0%,rgba(108, 76, 64, 0) 100%), linear-gradient(to left, rgba(108, 76, 64, 0.25), rgba(108, 76, 64, 0.25)), url("/src/images/Fondos/09.Evermore.png")',
				
				'fondos-midnights': 'radial-gradient(closest-side,rgba(61, 85, 144, 0.75) 0%,rgba(61, 85, 144, 0) 100%), linear-gradient(to left, rgba(61, 85, 144, 0.25), rgba(61, 85, 144, 0.25)), url("/src/images/Fondos/10.Midnights.png")',
				
				'fondos-TTPD': 'radial-gradient(closest-side,rgba(83, 71, 64, 0.75) 0%,rgba(0, 0, 0, 0) 100%), linear-gradient(to left, rgba(83, 71, 64, 0.25), rgba(83, 71, 64, 0.25)), url("/src/images/Fondos/11.TTPD.png")',
				'taylor-debut': 'linear-gradient(to left, #96c095, #96c095)',	

				/*  */
			},
			colors: {
				/* Debut */
				'debut-50': '#f2f7f2',
				'debut-100': '#e1edde',
				'debut-200': '#c3dac0',
				'debut-300': '#96c095',
				'debut-400': '#7cac7c',
				'debut-500': '#478249',
				'debut-600': '#346737',
				'debut-700': '#2a522e',
				'debut-800': '#234225',
				'debut-900': '#1d371f',
				'debut-950': '#101e12',

				/* Fearless */
				'fearless-50': '#fdf6ed',
				'fearless-100': '#f8e6cd',
				'fearless-200': '#f1c996',
				'fearless-300': '#e89f4f',
				'fearless-400': '#e58b3a',
				'fearless-500': '#dd6b23',
				'fearless-600': '#c34c1c',
				'fearless-700': '#a2341b',
				'fearless-800': '#842a1c',
				'fearless-900': '#6d241a',
				'fearless-950': '#3e0f0a',

				/* Speak Now */
				'speak-now-50': '#f8f6f9',
				'speak-now-100': '#f3eff4',
				'speak-now-200': '#e9dfeb',
				'speak-now-300': '#dac5dc',
				'speak-now-400': '#c7a8ca',
				'speak-now-500': '#ae83b1',
				'speak-now-600': '#9b679b',
				'speak-now-700': '#835382',
				'speak-now-800': '#6d476b',
				'speak-now-900': '#5d3e5d',
				'speak-now-950': '#362135',

				/* Red */
				'red-50': '#fcf4f4',
				'red-100': '#f9ebea',
				'red-200': '#f3d9d8',
				'red-300': '#eab8b7',
				'red-400': '#dd8f90',
				'red-500': '#cd666a',
				'red-600': '#b74751',
				'red-700': '#993742',
				'red-800': '#7a2e39',
				'red-900': '#6f2c38',
				'red-950': '#3d141b',

				/* 1989 */
				'1989-50': '#f1fafe',
				'1989-100': '#e2f4fc',
				'1989-200': '#b5e5f8',
				'1989-300': '#85d7f4',
				'1989-400': '#44c2ec',
				'1989-500': '#1cabdb',
				'1989-600': '#0e8abb',
				'1989-700': '#0d6e97',
				'1989-800': '#0f5e7d',
				'1989-900': '#124d68',
				'1989-950': '#0c3145',

				/* reputation */
				'reputation-50': '#f8f7f8',
				'reputation-100': '#efefef',
				'reputation-200': '#dcdbdc',
				'reputation-300': '#bebbbc',
				'reputation-400': '#9a9697',
				'reputation-500': '#746f70',
				'reputation-600': '#676263',
				'reputation-700': '#545051',
				'reputation-800': '#484444',
				'reputation-900': '#3e3c3c',
				'reputation-950': '#292829',

				/* lover */
				'lover-50': '#fdf2f6',
				'lover-100': '#fbe8f0',
				'lover-200': '#fad0e2',
				'lover-300': '#f7b0cc',
				'lover-400': '#f076a4',
				'lover-500': '#e74d82',
				'lover-600': '#d52d5f',
				'lover-700': '#b91d47',
				'lover-800': '#991b3b',
				'lover-900': '#801b35',
				'lover-950': '#4e091a',

				/* folklore */
				'folklore-50': '#f7f6f5',
				'folklore-100': '#ecebe8',
				'folklore-200': '#cdc9c1',
				'folklore-300': '#c0bbb1',
				'folklore-400': '#a69d91',
				'folklore-500': '#94887b',
				'folklore-600': '#877a6f',
				'folklore-700': '#71665d',
				'folklore-800': '#5d544f',
				'folklore-900': '#4d4641',
				'folklore-950': '#282422',

				/* evermore */
				'evermore-50': '#f9f6f3',
				'evermore-100': '#f1ebe3',
				'evermore-200': '#e2d5c6',
				'evermore-300': '#c5ac90',
				'evermore-400': '#ba997d',
				'evermore-500': '#ac8263',
				'evermore-600': '#9f7157',
				'evermore-700': '#845c4a',
				'evermore-800': '#6c4c40',
				'evermore-900': '#584036',
				'evermore-950': '#2f201b',

				/* midnights */
				'midnights-50': '#f2f7fc',
				'midnights-100': '#e2ecf7',
				'midnights-200': '#ccdef1',
				'midnights-300': '#aac9e6',
				'midnights-400': '#81add9',
				'midnights-500': '#6392ce',
				'midnights-600': '#4f79c1',
				'midnights-700': '#4567b0',
				'midnights-800': '#3d5590',
				'midnights-900': '#354873',
				'midnights-950': '#242e47',

				/* TTPD */
				'TTPD-50': '#f5f3f1',
				'TTPD-100': '#e5e3dc',
				'TTPD-200': '#cdc9bb',
				'TTPD-300': '#b0a894',
				'TTPD-400': '#998d75',
				'TTPD-500': '#8b7d67',
				'TTPD-600': '#766858',
				'TTPD-700': '#605348',
				'TTPD-800': '#534740',
				'TTPD-900': '#493f3a',
				'TTPD-950': '#29221f',

				/* mashup */
				'mashup-50': '#fef3f2',
				'mashup-100': '#fee5e2',
				'mashup-200': '#ffcfc9',
				'mashup-300': '#fdada4',
				'mashup-400': '#f97e70',
				'mashup-500': '#f15442',
				'mashup-600': '#de3724',
				'mashup-700': '#cd2f1d',
				'mashup-800': '#9a271a',
				'mashup-900': '#80261c',
				'mashup-950': '#460f09',
			},
			fontFamily: {
				"display-large-font-family": "Rubik Variable, sans-serif",
				"display-medium-font-family": "Rubik Variable, sans-serif",
				"display-small-font-family": "Rubik Variable, sans-serif",

				"headline-large-font-family": "Rubik Variable, sans-serif",
				"headline-medium-font-family": "Rubik Variable, sans-serif",
				"headline-small-font-family": "Rubik Variable, sans-serif",

				"title-large-font-family": "Rubik Variable, sans-serif",
				"title-medium-font-family": "Rubik Variable, sans-serif",
				"title-small-font-family": "Rubik Variable, sans-serif",

				"body-large-font-family": "Rubik Variable, sans-serif",
				"body-medium-font-family": "Rubik Variable, sans-serif",
				"body-small-font-family": "Rubik Variable, sans-serif",
			},
			fontSize: {
				"display-large-font-size": "72px",
				"display-medium-font-size": "45px",
				"display-small-font-size": "36px",

				"headline-large-font-size": "32px",
				"headline-medium-font-size": "28px",
				"headline-small-font-size": "24px",

				"title-large-font-size": "22px",
				"title-medium-font-size": "16px",
				"title-small-font-size": "14px",

				"body-large-font-size": "16px",
				"body-medium-font-size": "14px",
				"body-small-font-size": "12px",

				"display-medium-size": "45px",
				"display-small-size": "36px",

				"headline-large-size": "32px",
				"headline-medium-size": "28px",
				"headline-small-size": "24px",

				"title-large-size": "22px",
				"title-medium-size": "16px",
				"title-small-size": "14px",

				"label-large-size": "14px",
				"label-medium-size": "12px",
				"label-small-size": "11px",

				"body-large-size": "16px",
				"body-medium-size": "14px",
				"body-small-size": "12px",
			},
			fontWeight: {
				"display-large-font-weight": "700",
				"display-medium-font-weight": "700",
				"display-small-font-weight": "700",

				"headline-large-font-weight": "500",
				"headline-medium-font-weight": "500",
				"headline-small-font-weight": "500",

				"title-large-font-weight": "500",
				"title-medium-font-weight": "500",
				"title-small-font-weight": "500",

				"body-large-font-weight": "400",
				"body-medium-font-weight": "400",
				"body-small-font-weight": "400",
			},
			lineHeight: {
				"display-large-line-height": "64px",
				"display-medium-line-height": "52px",
				"display-small-line-height": "44px",

				"headline-large-line-height": "40px",
				"headline-medium-line-height": "36px",
				"headline-small-line-height": "32px",

				"title-large-line-height": "28px",
				"title-medium-line-height": "24px",
				"title-small-line-height": "20px",

				"body-large-line-height": "24px",
				"body-medium-line-height": "20px",
				"body-small-line-height": "16px",

				"display-large-line-height": "64px",
				"display-medium-line-height": "52px",
				"display-small-line-height": "44px",

				"headline-large-line-height": "40px",
				"headline-medium-line-height": "36px",
				"headline-small-line-height": "32px",

				"title-large-line-height": "28px",
				"title-medium-line-height": "24px",
				"title-small-line-height": "20px",

				"label-large-line-height": "20px",
				"label-medium-line-height": "16px",
				"label-small-line-height": "16px",

				"body-large-line-height": "24px",
				"body-medium-line-height": "20px",
				"body-small-line-height": "16px",
			},
			letterSpacing: {
				"display-medium-tracking": "",

				"headline-large-tracking": "",
				"headline-small-tracking": "",

				"title-large-tracking": "",
				"title-medium-tracking": "0.15px",
				"title-small-tracking": "0.1px",

				"label-large-tracking": "0.1px",
				"label-medium-tracking": "0.5px",
				"label-small-tracking": "0.5px",
				
				"body-large-tracking": "0.5px",
				"body-medium-tracking": "0.25px",
				"body-small-tracking": "0.4px",
			},
		
			
		},
	},
	plugins: [],
}
