import React from "react"
import Link from "@docusaurus/Link";
// @ts-ignore
import styles from "./style.module.scss"

export default function DocsWithImg(props) {
  let repositoryLink = false;
  if (props.doc) {
    repositoryLink = !!props.doc.repositoryLink
  }
  let doc = props.doc;
  return (<>
    <li className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <img
            src={doc.source}
            alt={doc.title}
          />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardTitle}>
          <Link className={styles.cardText} href={doc.link}>
            <h4>{doc.title}</h4></Link>
          {repositoryLink && <Link href={doc.repositoryLink} className={styles.cardSourceLink}><span>源码</span></Link>}
        </div>

        <div className={styles.cardDesc}>
          <p>{doc.description}</p>
        </div>
      </div>
    </li>
  </>)
}
