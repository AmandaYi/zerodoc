import React from 'react';
import Layout from '@theme/Layout'; // @docusaurus/preset-classic  declare module '@theme/Layout'
import Hero from "@site/src/components/Hero"
import DocsListGuide from "@site/src/components/DocsListGuide"
import ContentListView from "@site/src/components/ContentListView"
import useGlobalData from "@docusaurus/useGlobalData";

export default function Home(): JSX.Element {
  const globalData = useGlobalData();

  let docList = [
    {
      title: "RDB和AOF",
      link: "/docs/redis/rdbaof",
      description: "记录对React的RDB和AOF的笔记。",
      source: "images/redis/aof02.png"
    },
    {
      title: "redis6新类型",
      link: "/docs/redis/structure2",
      description: "理解新类型Bitmaps和setbit命令。",
      source: "/images/redis/bitmap01.png"
    },
    {
      title: "go-zero微服务文档",
      link: "/docs/go-zero/project/prepare",
      description: "收集go-zero文档，其中也整理了微服务的服务治理，链路追踪，熔断，等常见算法。",
      source: "/images/go_zero/base.png"
    },
    {
      title: "React生命周期",
      link: "/docs/js/react/life",
      description: "记录了16.8以前和17以后的生命周期原理图。",
      source: "/images/react/life17.png"
    },
    {
      title: "Vue3笔记",
      link: "/docs/js/react/life",
      description: "记录了Vue3以及vite的笔记，备忘。",
      source: "/images/vue/vite01.png"
    },
    {
      title: "React扩展内容",
      link: "/docs/js/react/extension",
      description: "归纳setState，Hook，layload，组件优化，组件通信等。",
      source: "/images/react/vdom.png"
    },
    {
      title: "NPM通用工具库设计开发",
      link: "/docs/js/design/package",
      description: "完整封装一个NPM组件库。",
      source: "/images/webpack3/webpack21_01.png"
    },
    {
      title: "集群方案-主从复制",
      link: "/docs/redis/masterslave",
      description: "React Router6的笔记，记录Component和Hooks备忘。",
      source: "/images/redis/mslave01.png"
    },
    {
      title: "集群方案-cluster",
      link: "/docs/redis/cluster",
      description: "通过学习Redis的集群，举一反三理解其他应用的集群。",
      source: "/images/redis/cluster01.png"
    },
    {
      title: "办公文档多人同步查看和编辑",
      link: "/docs/project/officeOnlineEdit",
      description: "记录办公文档的接入，接入流程记录下来，记录多用户，多版本控制的实现流程，方便查阅。",
      source: '/images/wps/wps01.png'
    },
  ];

  const blogPluginData = globalData["docusaurus-plugin-content-blog"]["default"];

  // @ts-ignore
  const blogList = blogPluginData.blogContent.blogPosts || [];
  return (
    <Layout>
      <main>
        <Hero/>
        <DocsListGuide docList={docList}/>
        <ContentListView blogList={blogList}/>
      </main>
    </Layout>
  );
}


