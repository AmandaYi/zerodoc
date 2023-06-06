import React from "react";

export default function Index(props) {
  const titleStyle = {
    textAlign: "center",
    marginBottom: "16px"
  };
  const titleText = props.titleText;

  return (<>
    {/*@ts-ignore*/}
    <h2 style={titleStyle}>{titleText}</h2>
  </>)
}
