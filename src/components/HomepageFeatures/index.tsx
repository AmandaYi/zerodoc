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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis nesciunt odio! Alias aliquid dolore doloribus excepturi itaque laboriosam magnam natus nulla perferendis placeat quaerat, quia ratione sequi, ullam veniam?
      </>
    ),
  },
  {
    title: '2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at aut blanditiis commodi, dignissimos dolores eaque earum eos hic omnis quas qui quis velit. Eos laboriosam libero nulla suscipit velit!
      </>
    ),
  },
  {
    title: '3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cum cumque delectus et exercitationem fugiat fugit iusto sapiente, totam vero voluptatem? Ab dignissimos, nam non praesentium quam quia recusandae.
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
        <h3>{title}</h3>
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
