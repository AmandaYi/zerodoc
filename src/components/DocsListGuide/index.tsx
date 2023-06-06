import React from "react"
// @ts-ignore
import ViewLayout from "@site/src/components/ViewLayout";
import DocsListBoard from "@site/src/components/DocsListBoard";

export default function DocsListGuide(props) {
  const docList = props.docList || [];
  return (<>
    <ViewLayout>
      <DocsListBoard boardList={docList} boardTitle={"推荐阅读"}/>
    </ViewLayout>
  </>)
}
