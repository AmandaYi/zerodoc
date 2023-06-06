import React from "react"
import Link from "@docusaurus/Link";
import styles from "./blogSort.module.scss"
import selfConfig from "@site/config/selfConfig"

export default function BlogSort(props) {
  const avatorLogo = selfConfig.avatorLogo;
  let blogSort = props.blogSort;
  let metadata = blogSort.metadata;
  let {title, permalink, date, readingTime, description} = metadata;
  let dateString = new Date(date).toLocaleDateString();
  let readingTimeString = Math.round(readingTime);
  // @ts-ignore
  return (<>
    <div className={styles.sortItem}>
      <div className={styles.sortHeader}>
        <Link href={permalink}><h2 className={styles.articleTitle}>{title}</h2></Link>
        <p className={styles.summary}>
          <time>{dateString}</time>
          · <span>阅读需要{readingTimeString}分钟</span>
        </p>
        <div className={styles.personInfo}>
          <Link><img src={avatorLogo} alt=""/></Link>
          <div className={styles.infoBase}>
            <Link><span className={styles.userName}>ME</span></Link>
            <span className={styles.summaryPerson}></span>
          </div>
        </div>
      </div>
      <div className={styles.sortContent}>
        {description}
      </div>

      <div className={styles.sortFooter}>
        {/*<div className={styles.tagList}><span>标签</span>：<Link href={"xxx"}><span>随笔</span></Link></div>*/}
        <div className={styles.moreText}><Link href={permalink}>阅读更多</Link></div>
      </div>

    </div>
  </>)
}
