module.exports =  {
	style: 'dark',
		links: [
		{
			title: '列',
			// 救济他人的心，分裂一切阻碍自己的障碍微细会
			items: [
				{
					label: "前端通用工具库设计开发",
					to: "/docs/js/design/package"
				},
				{
					label: "金山文档在线编辑接入",
					to: "/docs/project/officeOnlineEdit"
				},
				{
					label: "纯静态文件的持续集成发布",
					to: "/docs/devops/webops"
				}
			]
		},
		{
			title: '前',
			// 五元素控制，更好的使用编程
			items: [
				{
					label: "TypeScript",
					to: "/docs/js/typescript/base"
				},
				{
					label: "Redis事务与锁",
					to: "/docs/redis/transaction"
				},
				{
					label: "webpack常用功能30篇",
					to: "/docs/js/webpack3/01"
				}
			]
		},
		{
			title: '皆',
			// 危机感应	表现知人心、操纵人心的能力 解开一切困扰-
			items: [
				{
					label: "数据结构与算法",
					to: "/docs/structure/analyse"
				}
			]
		},
		{
			title: '阵',
			// 心电感应/隐身 表示集富庶与敬爱于一身的能力。透视、洞察敌人心理
			items: [
				{
					label: "React",
					to: "/docs/js/react/base"
				},
				{
					label: "Vue",
					to: "/docs/js/vue/vue3base"
				},
			]
		},
			{
				title: "者",
				// 表现自由支配自己躯体和别人躯体的力量。万物之灵力，任我接洽
				items: [
					{
						label: "正则表达式流程图转换",
						href: "https://regexper.com/",
						target: "_blank",
					},
					{
						label: "分布式流量控制组件",
						href: "https://sentinelguard.io/zh-cn/index.html",
						target: "_blank",
					}
				]
			}
	],
		copyright: `
								<div>以生死为此岸，涅槃为彼岸，此岸苦苦挣扎，彼岸超然洒脱。</div>
								<div>Copy right © ${new Date().getFullYear()}  Inc. By zhaozheyun</div>
								<div><a href="https://beian.miit.gov.cn/" target="_blank" class="footer__link-item">京ICP备20000098号-1</a></div>
							`,



}
