import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import styles from './Home.module.scss';
import { SchemaContainer } from '../../components/SchemaContainer/SchemaContainer';
import { InfoButton } from '../../components/Header/InfoButton/InfoButton';
import { ReduxState } from '../../utils/types';

export const Home = (): any => {
  const schemas = useSelector((state: ReduxState) => state.schemas);

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Carousel showThumbs={false}>
          {schemas.map((schema) => (
            <SchemaContainer tables={schema.tables} />
          ))}
        </Carousel>
      </section>
      <div>
        <InfoButton />
      </div>
      <Footer />
    </>
  );
};

export default Home;
