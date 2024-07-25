import React from "react"
import Link from "@docusaurus/Link";
import styles from "./userInfo.module.scss"
import {VscGithub} from "@site/node_modules/react-icons/vsc";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import selfConfig from "@site/config/selfConfig";

export default function UserInfo() {
  const {siteConfig} = useDocusaurusContext();
  const avatorLogo = selfConfig.avatorLogo;
  return (<>
    <div className={styles.userInfo}>

      <div className={styles.userContainer}>
        <div className={styles.avatar}>
          <img src={avatorLogo} alt=""/>
        </div>
        <div className={styles.name}>
          ZEROYI
        </div>
        <div className={styles.summary}>
          {siteConfig.tagline}
        </div>
        {/*<ul className={styles.navLinkList}>*/}
        {/*  <li>*/}
        {/*    <Link>*/}
        {/*      <CiFloppyDisk/><span>11</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link>*/}
        {/*      <GoTag/><span>22</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link>*/}
        {/*      <CiLocationArrow1/><span>33</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link>*/}
        {/*      <VscProject/><span>44</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        {/*<ul className={styles.contactList}>*/}
          {/*<Link><VscRss/></Link>*/}
        {/*  <Link href={selfConfig.githubUrl}><VscGithub/></Link>*/}
        {/*</ul>*/}
      </div>
      {/*<div className={styles.tagContainer}>*/}
      {/*  <div className={styles.tagTitle}>*/}
      {/*    <GoTag/><span>标签</span>*/}
      {/*  </div>*/}
      {/*  <ul className={styles.tagList}>*/}
      {/*    <li className={styles.tagName}>*/}
      {/*      <Link href={"xx"}>随便</Link>*/}
      {/*    </li>*/}
      {/*    <li className={styles.tagName}>*/}
      {/*      <Link>随便</Link>*/}
      {/*    </li>*/}
      {/*    <li className={styles.tagName}>*/}
      {/*      <Link>随便</Link>*/}
      {/*    </li>*/}
      {/*    <li className={styles.tagName}>*/}
      {/*      <Link>随便</Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  </>)
}

