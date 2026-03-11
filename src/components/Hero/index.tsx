import React from "react"
import Image from '@theme/IdealImage';
import Year from "./year2026.png"
import styles from "./style.module.scss"
import Link from "@docusaurus/Link";

export default function Hero() {
  return (<>
    <div className={styles.viewHero}>
      <div className={styles.heroSummary}>
        <p className={styles.nice}>Hi! Nice to meet U！</p>
        <p className={styles.zzy}>I'm here！I'am ZeroYi!</p>
        <p className={styles.desc}>这是一个记录技术笔记、技术解决方案、所见所想的个人网站!</p>
        <div>
          <Link
            className={styles.button}
            to="/about">
            自我介绍
          </Link>
        </div>
      </div>
      <div className={styles.heroImg}>
        <Image img={Year}/>
      </div>
    </div>
  </>)
}
