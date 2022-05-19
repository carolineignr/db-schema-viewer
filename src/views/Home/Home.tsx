import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form/Form';
import Slider from '../../components/Slider/Slider';
import { Header } from '../../components/Header/Header';
import { ReduxState, TableState } from '../../utils/types';
import {
  setCurrentTable,
  setDatabaseModal,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schemas = useSelector((state: ReduxState) => state.schemas);
  const isModalOpen = useSelector(
    (state: ReduxState) => state.databaseModalOpen,
  );
  const currentTable = useSelector((state: ReduxState) => state.currentTable);

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  function onClickTable(table: TableState): void {
    dispatch(setCurrentTable(table));
  }

  useEffect(() => {
    if (schemas.length < 1) {
      navigate(-1);
    }

    Modal.setAppElement('#root');
  }, [schemas, navigate, dispatch]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        className="modalCustomStyle"
      >
        <div className={styles.modal_container}>
          <Form />
        </div>
      </Modal>

      {schemas.length > 0 && <Header />}

      <section className={styles.wrapper}>
        <>
          <Slider
            schemas={schemas}
            onClick={onClickTable}
            currentTable={currentTable}
          />
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </>
      </section>
    </>
  );
};

export default Home;
