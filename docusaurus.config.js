// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path")
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const navbarConfig = require("./config/navbarConfig");
const footerConfig = require("./config/footerConfig");
const baseConfig = require("./config/baseConfig")
let scripts = []
// 代码统计功能
if (process.env.NODE_ENV === "production") {
	scripts.push({
		src: 'https://hm.baidu.com/hm.js?748e7c913214342d8f0706348a9df9f3',
		async: true,
	})
}
/** @type {import('@docusaurus/types').Config} */
const config = {
	title: baseConfig.title,
	tagline: baseConfig.tagline,
	url: baseConfig.url,
	baseUrl: baseConfig.baseUrl,
	onBrokenLinks: baseConfig.onBrokenLinks,
	onBrokenMarkdownLinks: baseConfig.onBrokenMarkdownLinks,

	scripts: [...scripts],
	i18n:{
		defaultLocale: 'zh-CN',
		locales:['zh-CN']
	},
	// favicon: 'img/favicon.ico',
	// organizationName: 'facebook', // Usually your GitHub org/user name.
	// projectName: 'docusaurus', // Usually your repo name.
	staticDirectories: ['static', 'public'],
	presets: [
		[
			// 使用的主题是什么， 支持简写，比如 '@docusaurus/preset-classic' 可以简写为 'classic'
			'@docusaurus/preset-classic',

			/** @type {import('@docusaurus/preset-classic').Options} */

			({
				// docs: false,
				docs: {
					sidebarPath: require.resolve('./config/sidebarsConfig.js'),
					// Please change this to your repo.
					// editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				// blog: {
				// 	// showReadingTime: true,
				// 	// blogSidebarTitle: 'All posts',
				// 	// blogSidebarCount: 'ALL',
				// 	// Please change this to your repo.
				// 	// editUrl:
				// 	// 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				// },
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		// [path.resolve(__dirname, './src/plugins/plugin-content-docs'),{
		// 	sidebarPath: require.resolve('./config/sidebarsConfig.js'),
		// }],
		'docusaurus-plugin-sass', '@docusaurus/theme-live-codeblock',
		[
			path.resolve(__dirname, './src/plugins/plugin-content-blog'),
			{
				showReadingTime: true,
				blogSidebarTitle: 'All posts',
				blogSidebarCount: 0
			},
		],
		[
			'@docusaurus/plugin-ideal-image',
			{
				disableInDev: false,
			},
		],],


	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			htmlAttributes: {
				name:"999"
			},
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				// 这个主题提供了一个 @theme/CodeBlock 组件，该组件基于 react-live 构建。您可以在 交互式代码编辑器 章节查阅相关文档。
				playgroundPosition: 'bottom',
			},

			navbar: navbarConfig,
			// navbar: require.resolve('./config/navbarConfig.js').default,
			footer: footerConfig,
			// footer: require.resolve('./config/footerConfig.js').default,

			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['java'],
			},
		}),


	ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <% if (it.noIndex) { %>
      <meta name="robots" content="noindex, nofollow" />
    <% } %>
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %>>
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>`,
};

module.exports = config;
