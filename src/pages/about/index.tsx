import React from "react"
import Layout from '@theme/Layout';
import ViewLayout from "@site/src/components/ViewLayout"; // @docusaurus/preset-classic  declare module '@theme/Layout'
import styles from "./style.module.scss"
import Link from "@docusaurus/Link";
import {AiFillWechat} from "@site/node_modules/react-icons/ai";
import {MdOutlineMailOutline} from "@site/node_modules/react-icons/md";
import {VscGithub} from "@site/node_modules/react-icons/vsc";

export default function About() {
  return (<>
    <Layout>
      <ViewLayout>
        <div className={styles.about}>
          <h1>🎉您好！</h1>
          <h2>简单介绍</h2>
          <p>🤞遇到很多人，有大学老师和同学，有工作的同事，有半夜等你的滴滴司机，有超市的推销员，回忆起来很熟悉但是又很陌生；
          </p>
          <p>📓遇到很多项目，有React和Vue，有Node，有Go，时不时又能看到他们交错在一起，让人欣慰，让人苦笑；</p>
          <p>🌈每个人都是一样的，每个人又不是不一样的；不一样的是经历，一样的是我们对未来充满希望，完成一个个不可能！</p>
          <p>🌟最怕一生碌碌无为，还说平凡难能可贵。</p>

          <h2>📁技术栈</h2>
          <div className={styles.tech}>
            <img src="https://img.shields.io/badge/-React-222222?logo=React" alt=""/>
            <img src="https://img.shields.io/badge/-JavaScript-222222?logo=JavaScript" alt=""/>
            <img src="https://img.shields.io/badge/-TypeScript-222222?logo=TypeScript" alt=""/>
            <img src="https://img.shields.io/badge/-Miniprogram-222222?logo=wechat" alt=""/>

            <img src="https://img.shields.io/badge/-Vue-222222?logo=vuedotjs" alt=""/>
            <img src="https://img.shields.io/badge/-Angular-222222?logo=Angular" alt=""/>

            <img src="https://img.shields.io/badge/-Nest-222222?logo=nestjs" alt=""/>
            <img src="https://img.shields.io/badge/-Nuxt-222222?logo=nuxtdotjs" alt=""/>

            <img src="https://img.shields.io/badge/-Gulp-222222?logo=Gulp" alt=""/>
            <img src="https://img.shields.io/badge/-Webpack-222222?logo=Webpack" alt=""/>
            <img src="https://img.shields.io/badge/-Rollup-222222?logo=Rollup" alt=""/>
            <img src="https://img.shields.io/badge/-Vite-222222?logo=Vite" alt=""/>

            <img src="https://img.shields.io/badge/-ReactNative-222222?logo=ReactNative" alt=""/>
            <img src="https://img.shields.io/badge/-Electron-222222?logo=Electron" alt=""/>
            <img src="https://img.shields.io/badge/-Ionic-222222?logo=ionic" alt=""/>
            <img src="https://img.shields.io/badge/-Tailwindcss-222222?logo=tailwindcss" alt=""/>

            <img src="https://img.shields.io/badge/-NodeJS-222222?logo=nodedotjs" alt=""/>
            <img src="https://img.shields.io/badge/-Egg.js-222222?logo=Egg.js" alt=""/>

            <img src="https://img.shields.io/badge/-Go-222222?logo=Go" alt=""/>
            <img src="https://img.shields.io/badge/-GoZero-222222?logo=goZero" alt=""/>
            <img src="https://img.shields.io/badge/-Consul-222222?logo=consul" alt=""/>
            <img src="https://img.shields.io/badge/-RabbitMQ-222222?logo=rabbitmq" alt=""/>
            <img src="https://img.shields.io/badge/-Beego-222222?logo=beego" alt=""/>

            <img src="https://img.shields.io/badge/-Java-222222?logo=Java" alt=""/>
            <img src="https://img.shields.io/badge/-SpringBoot-222222?logo=SpringBoot" alt=""/>

            <img src="https://img.shields.io/badge/-Redis-222222?logo=redis" alt=""/>
            <img src="https://img.shields.io/badge/-Bolt-222222?logo=bolt" alt=""/>
            <img src="https://img.shields.io/badge/-Mysql-222222?logo=Mysql" alt=""/>
            <img src="https://img.shields.io/badge/-MongoDB-222222?logo=MongoDB" alt=""/>
            <img src="https://img.shields.io/badge/-PostgreSQL-222222?logo=PostgreSQL" alt=""/>
            <img src="https://img.shields.io/badge/-Mybatis-222222?logo=Mybatis" alt=""/>

            <img src="https://img.shields.io/badge/-Remix-222222?logo=remix" alt=""/>
            <img src="https://img.shields.io/badge/-Web3-222222?logo=web3dotjs" alt=""/>
            <img src="https://img.shields.io/badge/-Solidity-222222?logo=Solidity" alt=""/>
            <img src="https://img.shields.io/badge/-Bitcoin-222222?logo=bitcoin" alt=""/>
            <img src="https://img.shields.io/badge/-Ethereum-222222?logo=ethereum" alt=""/>
            <img src="https://img.shields.io/badge/-Fabric-222222?logo=fabric" alt=""/>
            <img src="https://img.shields.io/badge/-FastDFS-222222?logo=FastDFS" alt=""/>
            <img src="https://img.shields.io/badge/-IPFS-222222?logo=IPFS" alt=""/>
            <img src="https://img.shields.io/badge/-Ganache-222222?logo=ganache" alt=""/>

            <img src="https://img.shields.io/badge/-Git-222222?logo=Git" alt=""/>
            <img src="https://img.shields.io/badge/-GithubActions-222222?logo=githubactions" alt=""/>
            <img src="https://img.shields.io/badge/-Docker-222222?logo=Docker" alt=""/>
            <img src="https://img.shields.io/badge/-nginx-222222?logo=nginx" alt=""/>
            <img src="https://img.shields.io/badge/-Graphql-222222?logo=graphql" alt=""/>

          </div>

          <div className={styles.contact}>
            <h2>⛱联系我</h2>
            {/*<div className={styles.contactLine}>*/}
            {/*  <div className={styles.label}><MdOutlineMailOutline/><span className={styles.labelText}>邮箱：</span></div>*/}
            {/*  <div className={styles.value}><Link href={"mailto:amandayi521@gmail.com"}>amandayi521@gmail.com</Link>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={styles.contactLine}>
              <div className={styles.label}><AiFillWechat/><span className={styles.labelText}>微信：</span></div>
              <div className={styles.value}><img src="/img/weixin.png" width={200} alt=""/></div>
            </div>
            {/*<div className={styles.contactLine}>*/}
            {/*  <div className={styles.label}><VscGithub/><span className={styles.labelText}>Github:</span></div>*/}
            {/*  <div className={styles.value}>*/}
            {/*    <Link href={"https://github.com/AmandaYi"}>https://github.com/AmandaYi</Link>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </ViewLayout></Layout>
  </>)
}
