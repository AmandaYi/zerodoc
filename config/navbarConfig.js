const { positional } = require("yargs")
const baseConfig = require("./baseConfig")

module.exports = {
	// 自动隐藏的粘性导航条,当用户开始向下滚动页面时自动隐藏导航条，当用户向上滚动页面时则显示导航条。
	hideOnScroll: true,
	title: 'ZEROYI',
	logo: {
		// alt: '赵哲云',
		src: 'img/logo.svg',
	},
	items: [
		// 这些项目可以根据type字段具有不同的行为。以下部分将向您介绍所有可用的导航栏项目类型
		{
			type: "dropdown",
			position: "left",
			label: "技术笔记Note",
			items: [
				{
					type: 'doc',
					label: 'react',
					docId: 'js/react/base',
				},

				{
					type: 'doc',
					label: 'vue',
					docId: 'js/vue/vue3base',
				},
				{
					type: 'doc',
					label: 'Redis6笔记',
					docId: 'redis/base',
				},
				{
					type: 'doc',
					label: 'Redis应用问题',
					docId: 'redis/cachepenetration',
				},
				{
					type: "doc",
					label: "go-zero微服务文档",
					docId: "go-zero/project/prepare"
				},
				{
					type: "doc",
					label: "微服务扩展阅读",
					docId: "go-zero/extension/bloom"
				},

				{
					type: 'doc',
					label: 'TypeScript',
					docId: 'js/typescript/base',
				},
				{
					type: 'doc',
					label: 'npm库开发',
					docId: 'js/design/package',
				},
				{
					type: 'doc',
					label: 'Hybird混合开发原理',
					docId: 'js/hybird/base',
				},
				{
					type: 'doc',
					label: '简易持续集成',
					docId: 'devops/webops',
				},
				{
					type: 'doc',
					label: 'WordPress主题开发',
					docId: 'wordpress/base',
				},
				{
					type: "doc",
					label: "办公文档多人同步编辑项目",
					docId: "project/officeOnlineEdit"
				},
				{
					type: "doc",
					label: "声网白板接入",
					docId: "structure/analyse"
				},


				{
					type: 'doc',
					label: 'react native',
					docId: 'js/rn/base',
				},
				{
					type: 'doc',
					label: 'webpack5核心笔记',
					docId: 'js/webpack/index',
				},
				{
					type: 'doc',
					label: 'webpack常用功能30篇',
					docId: 'js/webpack3/index',
				},
				{
					type: 'doc',
					label: '视频直播技术',
					docId: 'js/video/index',
				},
				{
					type: 'doc',
					label: "JS常用功能记录",
					docId: 'js/normal/index',
				},
				{
					type: "doc",
					label: "MySQL",
					docId: "mysql/join"
				},
				{
					type: 'doc',
					label: 'Mybatis笔记',
					docId: 'orm/mybatis/index',
				},

			]
		},
		{
			type: "dropdown",
			position: "left",
			label: "计算机基础知识",
			items: [
				{
					type: "doc",
					label: "数据结构与算法",
					docId: "structure/analyse"
				}
			]
		},
		{
			type: "dropdown",
			positional: "left",
			label: "安全工程",
			items: [
				{
					type: 'doc',
					label: 'Web逆向工程',
					docId: 'rsecu/webjs/1',
				},
			]
		},
		{
			label: '文学',
			position: 'left',
			href: 'https://www.xinwenmh.cn',
		},
		{
			label: '项目',
			position: 'right',
			href: baseConfig.baseUrl + 'project',
		}
	],
}

