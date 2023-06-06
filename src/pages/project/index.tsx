import React from "react"
import Layout from "@theme/Layout"
import ViewLayout from "@site/src/components/ViewLayout";
import styles from "./style.module.scss";
import Link from "@docusaurus/Link";
import DocsListBoard from "@site/src/components/DocsListBoard";
import selfConfig from "@site/config/selfConfig"

const {githubUrl} = selfConfig
export default function Project() {
  // @formatter:off
  const docList = [
    {title: "正则表达式图形化界面", description:"一个用于把正则表达式拆解为图形流程图的工具网站，用于保证正则表达式的正确性，常用于管理系统和爬虫测试正则。", link: "https://regexper.com/", source: "/images/normal/regexp_01.png", repositoryLink: ""},
    {title: "Gulp多页面模板", description:"一个多页面的前端开发环境，实现了局域网多设备同步预览开发项目，配置前端常用开发工具处理，如SCSS，PostCSS，TS等。", link: "https://www.npmjs.com/package/gulp-init", source: "/images/gulp/gulp_init_01.png", repositoryLink: "https://github.com/AmandaYi/gulp-init"},
    {title: "前端工具组件库", description:"一个组件完成管理系统一个模块的增删改查，工作常用正则类，日期类，无极分类工具，Storage类等公司常用功能。", link: "https://github.com/AmandaYi/util-lib-doc", source: "/images/normal/util_lib_01.png", repositoryLink: "https://github.com/AmandaYi/util-lib-doc"},
    {title: "办公文档多人同步查看和编辑", description:"一个具有多用户权限控制的在线创建，编辑word，excel，ppt的项目，同时也有文档多版本控制功能。", link: "/docs/project/officeOnlineEdit", source: "/images/wps/wps_02.png", repositoryLink: ""},
    {title: "比特币区块链实现", description:"一个使用Go实现的比特币链，具有共识POW机制，交易，区块管理，签名，UTXO，钱包管理等，代码有大量注释，仅用于学习交流。", link: "https://github.com/AmandaYi/bitcoin_block", source: "/images/blockchain/bitcoin_block_01.png", repositoryLink: "https://github.com/AmandaYi/bitcoin_block"},
    {title: "Webpack工作流", description:"一个Webpack搭建的工作流，不过现在基本上React和Vue都有社区完善的Cli工具了。", link: "https://github.com/AmandaYi/workflow", source: "/images/webpack/webpack_01.jpg", repositoryLink: "https://github.com/AmandaYi/workflow"},
    {title: "go-zero微服务文档", description:"收集go-zero文档，其中也整理了微服务的服务治理，链路追踪，熔断，等常见算法。", link: "/docs/go-zero/project/prepare", source: "/images/go_zero/base.png", repositoryLink: ""},
    {title: "电子签章系统", description:"一个合同签章系统，具有拖动签章，骑缝章，文档上增加文案，调整文案样式等功能，暂未开放源码[清洗敏感数据后开源]。", link: "", source: "/img/default.jfif", repositoryLink: ""},
    {title: "多人在线白板系统", description:"一个多人实时同步白板协作系统，增加演讲者实时放入Word，Excel，PPT，文档实时标注，多人同步标记，也具有直播间功能。", link: "", source: "/images/whiteBoard/whiteBoard_01.png", repositoryLink: ""},
    {title: "用户数据收集系统", description:"一个行为预测兼日志功能的系统，已经应用于15多个系统，便于数据中心筛选用户行为，监控产品页面和页面行为预测等，开源中。", link: "", source: "/img/default.jfif", repositoryLink: ""},
  ];
  // @formatter:on

  return (<>
    <Layout>
      <ViewLayout>
        <div className={styles.view}>
          <CenterImage/>
          <DocsListBoard boardList={docList} boardTitle={"Web"}/>
        </div>
      </ViewLayout>
    </Layout>
  </>)
}

function CenterImage() {
  return (<>
    <div className={styles.centerImage}>
      <h1>项目部分分享</h1>
      <p>分享与交流是一种提高能力的有效方法，请多指教，欢迎Issue！</p>
      <Link className={styles.button} to={githubUrl}>
        多多指教Github
      </Link>
    </div>
  </>)
}
