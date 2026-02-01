import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🧩 Extensibility',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Adapt your model/dataset once, train almost any combination of "model" 
×
 "dataset" 
×
 "loss function".
      </>
    ),
  },
  {
    title: '🔧 Maintainability',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        No need to worry about breaking the training codes of existing models/datasets/loss functions when adding new ones.
      </>
    ),
  },
  {
    title: '🚀 Efficiency',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Multi-GPU parallel training; Auto batch size reduction to prevent CUDA OOM, Auto hyperparameter searching, Python built-in logger; structured experimental result saving (json)...
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
