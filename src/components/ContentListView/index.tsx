import React, {useState} from "react"
import ViewLayout from "@site/src/components/ViewLayout";
import Title from "@site/src/components/Title";
import {CiBoxList, CiPause1} from "react-icons/ci"
import styles from "./style.module.scss"
// @ts-ignore
import BlogSort from "./BlogSort"
import GridDocs from "./GridDocs"
import UserInfo from "./UserInfo"
import {Fade} from "react-awesome-reveal";

const VIEW_TYPE_0 = "LIST";
const VIEW_TYPE_1 = "GRID";
const VIEW_TYPE_2 = "CARD";
const VIEW_TYPE_DEFAULT = VIEW_TYPE_2;
export default function ContentListView(props) {
  const blogList = props.blogList;
  const [viewType, setViewType] = useState(VIEW_TYPE_DEFAULT);
  const onChangeViewType = function (viewType) {
    setViewType(viewType)
  };
  return (<>
    <ViewLayout>
      <div style={{marginBottom: "30px"}}>
        <Title titleText={"随便看看"}/>

        <div style={{marginTop: "10px", marginBottom: "10px"}}>
          <ViewTypeSwitch viewType={VIEW_TYPE_DEFAULT} onChangeViewType={onChangeViewType}/>
        </div>
        {VIEW_TYPE_0 == viewType &&
				<Fade direction="up" duration={800} triggerOnce={true}><BlogSortList blogList={blogList}/></Fade>}
        {VIEW_TYPE_1 == viewType && <Fade direction="up" duration={800} triggerOnce={true}><GridDocsList/></Fade>}
        {VIEW_TYPE_2 == viewType &&
				<Fade direction="up" duration={800} triggerOnce={true}><SitePersonInfo blogList={blogList}/></Fade>}
      </div>
    </ViewLayout>
  </>)
}

function BlogSortList(props) {
  const blogList = props.blogList || [];
  return (<>
    {blogList.map(item => {
      if (!item.metadata.frontMatter.unlisted) {
        return <BlogSort blogSort={item} key={item.id}/>
      }
    })}
  </>)
}

function GridDocsList() {
  return (<GridDocs/>)
}

function SitePersonInfo(props) {
  const blogList = props.blogList || [];
  return (<>
    <div className={styles.sitePersonInfo}>
      <div className={styles.docsList}>
        {/*<BlogSort blogList={blogList}/>*/}
        <BlogSortList blogList={blogList}/>
      </div>
      <div className={styles.personInfo}>
        <UserInfo/>
      </div>
    </div>
  </>)
}


// 开关
function ViewTypeSwitch({onChangeViewType}: any): JSX.Element {
  const [viewType, setViewType] = useState(VIEW_TYPE_DEFAULT);

  let GetIconClassName = function (selfViewType) {
    let result = selfViewType === viewType ? styles.iconActive : styles.iconNormal;
    return `${result} ${styles.iconCommon}`
  };

  // 广播出去
  function innerToggleClick(viewType) {
    onChangeViewType(viewType);
    setViewType(viewType)
  }

  return (
    <div className={styles.viewTypeSwitch}>
      <div className={styles.iconGroup}>
        <CiBoxList className={GetIconClassName(VIEW_TYPE_0)} onClick={innerToggleClick.bind(this, VIEW_TYPE_0)}/>
        {/*<CiGrid41 className={GetIconClassName(VIEW_TYPE_1)} onClick={innerToggleClick.bind(this, VIEW_TYPE_1)}/>*/}
        <CiPause1 className={GetIconClassName(VIEW_TYPE_2)} onClick={innerToggleClick.bind(this, VIEW_TYPE_2)}/>
      </div>
    </div>
  )
}
