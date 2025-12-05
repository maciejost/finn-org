/** @type {import('tailwindcss').Config} */
import { tokens, breakpoints } from '@fremtind/jkl-core'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: {
		relative: true,
		files: [
			'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/**/*.{js,ts,jsx,tsx,mdx}',
		],
	},
	theme: {
		extend: {
			spacing: tokens.spacing,
		},
		colors: {
			...tokens.color.brand,
			...tokens.color.functional,
			'background-page': 'var(--jkl-color-background-page)',
			'page-variant': 'var(--jkl-color-background-page-variant)',
			'background-container': 'var(--jkl-color-background-container)',
			'background-container-low':
				'var(--jkl-color-background-container-low)',
			'background-container-high':
				'var(--jkl-color-background-container-high)',
			'background-input-base': 'var(--jkl-color-background-input-base)',
			'background-input-focus': 'var(--jkl-color-background-input-focus)',
			'background-action': 'var(--jkl-color-background-action)',
			'background-interactive': 'var(--jkl-color-background-interactive)',
			'background-interactive-hover':
				'var(--jkl-color-background-interactive-hover)',
			'background-interactive-selected':
				'var(--jkl-color-background-interactive-selected)',
			'background-alert-neutral':
				'var(--jkl-color-background-alert-neutral)',
			'background-alert-info': 'var(--jkl-color-background-alert-info)',
			'background-alert-success':
				'var(--jkl-color-background-alert-success)',
			'background-alert-warning':
				'var(--jkl-color-background-alert-warning)',
			'background-alert-error': 'var(--jkl-color-background-alert-error)',
			'text-default': 'var(--jkl-color-text-default)',
			'text-subdued': 'var(--jkl-color-text-subdued)',
			'text-inverted': 'var(--jkl-color-text-inverted)',
			'text-on-action': 'var(--jkl-color-text-on-action)',
			'text-interactive': 'var(--jkl-color-text-interactive)',
			'text-interactive-hover': 'var(--jkl-color-text-interactive-hover)',
			'text-on-alert': 'var(--jkl-color-text-on-alert)',
			'border-action': 'var(--jkl-color-border-action)',
			'border-input': 'var(--jkl-color-border-input)',
			'border-input-focus': 'var(--jkl-color-border-input-focus)',
			'border-separator': 'var(--jkl-color-border-separator)',
			'border-separator-strong':
				'var(--jkl-color-border-separator-strong)',
			'border-separator-hover': 'var(--jkl-color-border-separator-hover)',
		},
		fontWeight: tokens.typography.weight,
		fontSize: tokens.typography.font.size,
		lineHeight: tokens.typography.line.height,
		fontFamily: {},
		screens: {
			sm: `${breakpoints.medium}px`,
			md: `${breakpoints.large}px`,
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.title': {
					...tokens.typography.title.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.title.base,
					},
				},
				'.title-small': {
					...tokens.typography.titleSmall.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.titleSmall.base,
					},
				},
				'.heading-1': {
					...tokens.typography.heading_1.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.heading_1.base,
					},
				},
				'.heading-2': {
					...tokens.typography.heading_2.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.heading_2.base,
					},
				},
				'.heading-3': {
					...tokens.typography.heading_3.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.heading_3.base,
					},
				},
				'.heading-4': {
					...tokens.typography.heading_4.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.heading_4.base,
					},
				},
				'.heading-5': {
					...tokens.typography.heading_5.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.heading_5.base,
					},
				},
				'.body': {
					...tokens.typography.body.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.body.base,
					},
				},
				'.small': {
					...tokens.typography.small.small,
					[`@media (min-width: ${breakpoints.medium}px)`]: {
						...tokens.typography.small.base,
					},
				},
				'.max-width-content': {
					maxWidth: 'min(1400px, calc(100vw - 2rem))',
					[`@media (min-width: ${breakpoints.xl}px)`]: {
						padding: '0',
					},
				},
			})
		}),
	],
}
export default config
