// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const navbarConfig = require("./config/navbarConfig");
const footerConfig = require("./config/footerConfig");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '无缘无故~望着我',
	tagline: '敛冷于眼，藏拙于神，潜动于灵魂，似愚非愚，大巧无巧，我们在思考中抵达内心的宁静和丰富。吾本来兹土,传法救迷情。一花开五叶，结果自然成。​',
	url: 'http://www.baby8013.com',
	baseUrl: '/',
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
					sidebarPath: require.resolve('./sidebarsConfig.js'),
					// Please change this to your repo.
					// editUrl: 'https://github.com/facebook/docusaurus/tree/main/packa  ges/create-docusaurus/templates/shared/',
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
	plugins: ['@docusaurus/theme-live-codeblock'],
	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				// 这个主题提供了一个 @theme/CodeBlock 组件，该组件基于 react-live 构建。您可以在 交互式代码编辑器 章节查阅相关文档。
				playgroundPosition: 'bottom',
			},

			navbar: navbarConfig,
			footer: footerConfig,

			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
