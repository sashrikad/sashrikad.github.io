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
        Hello! My name is Sashrika Das and welcome to my blog! I am an 8th grade student in East Lyme Middle School, Connecticut. I have a dog named Sasha that is 7 years old. Along with playing with my dog, Sasha, my favorite hobbies are coding, drawing or sketching, and when the weather is nice, I like to bike as well. I always try to participate in coding competitions and like to share my story with my classmates and teachers.
      </>
    ),
  },
  
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
     
      <div className="text--center">
      {Svg? <Svg className={styles.featureSvg} role="img" />:null}
        
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
          <div className={clsx('col col--4 ') }>
          <img src="img/iamsashrika.jpeg" className='rounded-img'></img>
          </div>
          <div className={clsx('col col--8 bio') } >
            <p >Hello! My name is Sashrika Das and welcome to my blog! I am an 8th grade student in East Lyme Middle School, Connecticut. I have a dog named Sasha that is 7 years old. Along with playing with my dog, Sasha, my favorite hobbies are coding, drawing or sketching, and when the weather is nice, I like to bike as well. I always try to participate in coding competitions and like to share my story with my classmates and teachers.</p>
          </div>
       
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
