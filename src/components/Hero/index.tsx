import React from "react"
import Image from '@theme/IdealImage';
import Year from "./year2024.png"
import styles from "./style.module.scss"
import Link from "@docusaurus/Link";

export default function Hero() {
  return (<>
    <div className={styles.viewHero}>
      <div className={styles.heroSummary}>
        <p className={styles.nice}>Hi! Nice to meet U！</p>
        <p className={styles.zzy}>I'm here！I'am ZeroYi!</p>
        <p className={styles.desc}>这是一个记录笔记，记录技术，记录解决方案，记录点滴，记录所见所想的网站，您可以随便逛逛，相信我们都有美好的未来!</p>
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
