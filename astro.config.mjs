import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://docs.youdescribe.org/",
	integrations: [
		starlight({
			title: 'YouDescribe Docs',
			social: {
				github: 'https://github.com/youdescribe-sfsu',
			},
			sidebar: [
				{
					label: 'Onboarding',
					link: '/onboarding',
				},
				{
					label: 'YouDescribe',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'YouDescribeX App', link: '/youdescribe/ydx-app' },
						{ label: 'YouDescribeX Api', link: '/youdescribe/ydx-api' },
						{ label: 'Video Pipeline', link: '/youdescribe/video-pipeline' },
						{ label: 'Object Detection Service', link: '/youdescribe/yolo-service' },
					],
				},
				{
					label: 'Team Lead Onboarding',
					link: '/team_lead_onboarding',
				},
				// {
				// 	label: 'CI CD Tools',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'AWS', link: '/getting-started/ydx' },
				// 		{ label: 'Video Pipeline', link: '/getting-started/video-pipeline' },
				// 	],
				// }
			],
		}),
	],
});
