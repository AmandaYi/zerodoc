import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};
const FeatureList: FeatureItem[] = [
  {
    title: '1',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        And did you get what<br/>
        you wanted from this life, even so?<br/>
        I did.<br/>
        And what did you want?<br/>
        To call myself beloved, to feel myself<br/>
        beloved on the earth.<br/>


      </>
    ),
  },
  {
    title: '2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chaque individu est un arbre<br/>
        Sa racine ancré e dans la terre<br/>
        Tandis que son esprit erre partout<br/>
        Nous somme tous lesé trangers de la terre<br/>
      </>
    ),
  },
  {
    title: '3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        穿过无尽雾霾 过去已被掩盖<br/>
        越过茫茫人海 内心依然空白<br/>
        回忆和现在 哪个值得依赖<br/>
        明天和意外 哪个会先到来<br/>
        {/*经过无数站台 还守着期待*/}
        {/*翻过重重山脉 徒增了感慨<br/>*/}
        跨过银河星海 命运自有安排<br/>
        惹落岁月尘埃 试着学会释怀<br/>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
