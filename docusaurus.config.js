// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '赵哲云',
	tagline: '敛冷于眼，藏拙于神，潜动于灵魂，似愚非愚，大巧无巧，我们在思考中抵达内心的宁静和丰富。吾本来兹土,传法救迷情。一花开五叶，结果自然成。​',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/newblog/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	// favicon: 'img/favicon.ico',
	// organizationName: 'facebook', // Usually your GitHub org/user name.
	// projectName: 'docusaurus', // Usually your repo name.
	staticDirectories: ['static'],
	presets: [
		[
			// 使用的主题是什么， 支持简写，比如 '@docusaurus/preset-classic' 可以简写为 'classic'
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// editUrl:
						// 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '赵哲云',
				// logo: {
				// 	alt: '赵哲云',
				// 	src: 'img/logo.svg',
				// },
				items: [
					// 这些项目可以根据type字段具有不同的行为。以下部分将向您介绍所有可用的导航栏项目类型
					{
						type: "dropdown",
						position: "left",
						label: "前端",
						items:[
							// {
							// 	label: "2",
							// 	href: 'https://www.facebook.com',
							// },
							{
								type: 'doc',
								label: 'vue',
								docId: 'js/vue/vue2',
							},
							{
								type: 'doc',
								label: 'webpack',
								docId: 'js/webpack/index',
							},
							{
								type: 'doc',
								label: 'TypeScript',
								docId: 'js/typescript/base',
							}
						]
					},
					{
						type: "dropdown",
						position: "left",
						label: "Java",
						items:[
							// {
							// 	label: "2",
							// 	href: 'https://www.facebook.com',
							// },
							{
								type: 'doc',
								label: 'mybatis笔记',
								docId: 'orm/mybatis/index',
							},
						]
					},
					// {
					// 	type: 'doc',
					// 	docId: 'js/js',
					// 	position: 'left',
					// 	label: 'js',
					// },
					// {to: '/blog', label: 'Blog', position: 'left'},
					// {
					// 	href: 'https://github.com/facebook/docusaurus',
					// 	label: 'GitHub',
					// 	position: 'right',
					// },
				],
			},
			footer: {
				style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/js/js',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			{
				// 				label: 'Stack Overflow',
				// 				href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 			},
				// 			{
				// 				label: 'Discord',
				// 				href: 'https://discordapp.com/invite/docusaurus',
				// 			},
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/docusaurus',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'More',
				// 		items: [
				// 			{
				// 				label: 'Blog',
				// 				to: '/blog',
				// 			},
				// 			{
				// 				label: 'GitHub',
				// 				href: 'https://github.com/facebook/docusaurus',
				// 			},
				// 		],
				// 	},
				// ],
				copyright: `Copy right © ${new Date().getFullYear()}  Inc. By zhaozheyun `,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
