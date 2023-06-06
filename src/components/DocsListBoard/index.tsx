import React from "react"
// @ts-ignore
import styles from "./style.module.scss"
import {Fade} from 'react-awesome-reveal'
import Title from "@site/src/components/Title"
import DocsWithImg from "@site/src/components/DocsItemShow/DocsWithImg";

export default function DocsListBoard(props) {
  let boardTitle = props.boardTitle;
  let boardList = [];
  if (props.boardList && props.boardList.length > 0) {
    boardList = props.boardList
  }
  return (<>
    <Title titleText={boardTitle}/>
    <ul className={styles.content}>
      <Fade direction="up" duration={800} triggerOnce={true}>
        {boardList.map((item, index) => {
          return (<DocsWithImg doc={item} key={index}/>)
        })}
      </Fade>
    </ul>
  </>)
}
