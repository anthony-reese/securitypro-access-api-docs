// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SecurityPro Access API',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/anthony-reese/securitypro-access-api' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/overview' },
						{ label: 'Authentication', link: '/authentication' },
						{ label: 'Quickstart', link: '/quickstart' },
					],
				},
				{
					label: 'Core Resources',
					items: [
						{ label: 'Users', link: '/users' },
						{ label: 'Roles', link: '/roles' },
						{ label: 'Audit Events', link: '/audit-events' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Error Handling', link: '/error-handling' },
						{ label: 'Rate Limits', link: '/rate-limits' },
					],
				},
			],
		}),
	],
});
