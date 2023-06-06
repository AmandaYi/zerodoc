import React from "react"
import styles from "./style.module.scss";

export default function ViewLayout(props) {
  return (<>
    <div className={styles.view}>
      <div className={styles.viewBox}>
        {props.children}
      </div>
    </div>
  </>)
}
