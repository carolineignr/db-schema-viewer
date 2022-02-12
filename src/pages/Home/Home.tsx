import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Modal from 'react-modal';

import { SchemaContainer } from '../../components/SchemaContainer/SchemaContainer.js';
import { InfoButton } from '../../components/Header/InfoButton/InfoButton';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import { ReduxState } from '../../utils/types';
import { setDatabaseModal } from '../../store/actions/schemaActions';
import styles from './Home.module.scss';

export const Home = (): any => {
  const schemas = useSelector((state: ReduxState) => state.schemas);
  const isModalOpen = useSelector(
    (state: ReduxState) => state.databaseModalOpen,
  );
  const dispatch = useDispatch();

  // Passar para o arquivo de estilos
  const modalCustomStyle = {
    content: {
      backgroundColor: 'black',
      borderRadius: '10px',
      width: '50%',
      margin: '0 auto',
      display: 'flex',
      color: 'white',
      zIndex: '99',
    },
  };

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  return (
    <>
      <Header />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        style={modalCustomStyle}
      >
        <Form />
      </Modal>
      <section className={styles.wrapper}>
        <Carousel showThumbs={false}>
          {schemas.map((schema) => (
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <SchemaContainer tables={schema.tables} />
            </Canvas>
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
