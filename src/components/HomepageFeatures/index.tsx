import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {

    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,

  },
  {
    title: 'My Bio',
    Svg: null,
    description: (
      <>
        Hello! My name is Sashrika Das and welcome to my blog! I am a sophomore at East Lyme High School, Connecticut. My favorite hobbies are coding, listening to music, drawing and sketching, and when the weather is nice, I like to bike, play tennis, swim, and play with my dog Sasha as well. I always try to participate in coding competitions and like to share my story with my classmates and teachers.
      </>
    ),
  },

];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>

      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : null}

      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          <div className={clsx('col col--4 ')}>
            <img src="img/sash.png" className='rounded-img'></img>
          </div>
          <div className={clsx('col col--8 bio')} >
            <p >Hello! My name is Sashrika Das and welcome to my blog! I am a sophomore at East Lyme High School, Connecticut. My favorite hobbies are coding, listening to music, drawing and sketching, and when the weather is nice, I like to bike, play tennis, swim, and play with my dog Sasha as well. I always try to participate in coding competitions and like to share my story with my classmates and teachers.</p>
          </div>

          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
