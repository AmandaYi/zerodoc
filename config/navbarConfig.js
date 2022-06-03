const baseConfig = require("./baseConfig")

module.exports = {
	// 自动隐藏的粘性导航条,当用户开始向下滚动页面时自动隐藏导航条，当用户向上滚动页面时则显示导航条。
	hideOnScroll: true,
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
			items: [

				{
					type: 'doc',
					label: 'react',
					docId: 'js/react/base',
				},
				{
					type: 'doc',
					label: 'react native',
					docId: 'js/rn/base',
				},
				{
					type: 'doc',
					label: 'TypeScript',
					docId: 'js/typescript/base',
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
					label: 'vue',
					docId: 'js/vue/vue2',
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

			]
		},
		{
			type: "dropdown",
			position: "left",
			label: "Java",
			items: [
				{
					type: 'doc',
					label: 'mybatis笔记',
					docId: 'orm/mybatis/index',
				},
				{
					type: 'doc',
					label: 'redis6笔记',
					docId: 'redis/base',
				},
			]
		},
		{
			type: "dropdown",
			position: "left",
			label: "系统设计",
			items: [
				{
					type: 'doc',
					label: '前端库开发',
					docId: 'js/design/package',
				},
				{
					type: 'doc',
					label: '知识',
					docId: 'web/01',
				},
				{
					type: 'doc',
					label: '前端简易持续集成',
					docId: 'devops/webops',
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
			position: "left",
			label: "生态项目",
			items: [
				{
					type: "doc",
					label: "金山文档在线编辑接入",
					docId: "project/officeOnlineEdit"
				},
				// {
				// 	type: "doc",
				// 	label: "WPS文档接入（Java版）",
				// 	docId: "structure/analyse"
				// },
				{
					type: "doc",
					label: "声网白板接入",
					docId: "structure/analyse"
				},
				{
					label: "大小写转换",
					href: baseConfig.baseUrl + 'tools/toggle_word/index.html',
					target: "_blank"
				}
			]
		},
		// {
		// 	type: "dropdown",
		// 	position: "left",
		// 	label: "MAYA",
		// 	items: [
		// 		{
		// 			type: "doc",
		// 			label: "maya",
		// 			docId: "maya/01"
		// 		}
		// 	]
		// },
		// {
		// 	type: "doc",
		// 	position: "right",
		// 	label: "关于",
		// 	docId: "about/index"
		// },
		// {
		// 	type: "dropdown",
		// 	position: "right",
		// 	label: "其他",
		// 	items: [
		// 		{
		// 			to: "blog/rich/poor",
		// 			label: "胡思乱想",
		// 		}
		// 	]
		// }
		// {
		// 	type: 'search',
		// 	position: 'right',
		// },
	],
}

