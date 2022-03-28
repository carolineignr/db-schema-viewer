import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

import Form from '../../components/Form/Form';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ReduxState } from '../../utils/types';
import { setDatabaseModal } from '../../store/actions/schemaActions';

import styles from './Home.module.scss';
import Table from '../../components/DatabaseSchema/Table/Table';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  // const schemas = useSelector((state: ReduxState) => state.schemas);
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

  function onClickTable(id: String): void {
    navigate(`/table/${id}`);
  }

  return (
    <>
      <Header />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        style={modalCustomStyle}
      >
        <div className={styles.modal_container}>
          <Form />
          <button type="button" onClick={handleCloseDatabaseModal}>
            Cancelar
          </button>
        </div>
      </Modal>
      <section className={styles.wrapper}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Table position={[-1.2, 0, -3]} />
          <Table position={[1.2, 0, 1]} />
        </Canvas>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => navigate(-1)}>Go back</button>
      </section>
      <Footer />
    </>
  );
};

export default Home;
