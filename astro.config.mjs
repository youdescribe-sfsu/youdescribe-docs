import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.youdescribe.org/",
  integrations: [starlight({
    title: 'YouDescribe Docs',
    social: {
      github: 'https://github.com/youdescribe-sfsu'
    },
    sidebar: [{
      label: 'Onboarding',
      link: '/onboarding'
    }, {
      label: 'YouDescribe',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'YouDescribeX App',
          link: '/youdescribe/ydx-app'
        }, {
          label: 'YouDescribeX Api',
          link: '/youdescribe/ydx-api'
        }, {
          label: 'Video Pipeline',
          link: '/youdescribe/video-pipeline'
        }, {
          label: 'Object Detection Service',
          link: '/youdescribe/yolo-service'
        }]
    }, {
      label: 'Team Lead Onboarding',
      // link: '/team-lead-onboarding',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Getting Started',
          link: '/team-lead-onboarding'
        }, {
          label: 'Important Scripts',
          link: '/team-lead-onboarding/important-scripts'
        }]
    }
      // {
      // 	label: 'CI CD Tools',
      // 	items: [
      // 		// Each item here is one entry in the navigation menu.
      // 		{ label: 'AWS', link: '/getting-started/ydx' },
      // 		{ label: 'Video Pipeline', link: '/getting-started/video-pipeline' },
      // 	],
      // }
    ]
  }), expressiveCode({
    frames: {
      showCopyToClipboardButton: true, // show the clickboard button
    },
    theme: ["github-dark"], // example theme, dracula like you wanted
  })]
});