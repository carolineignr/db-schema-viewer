import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import Form from '../../components/Form/Form';
import {
  clearSchemas,
  setDatabaseModal,
  setToolDetailsModal,
} from '../../store/actions/schemaActions';
import { ReduxState } from '../../utils/types';

import styles from './Sign.module.scss';

const Sign = (): ReactElement => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: ReduxState) => state.databaseModalOpen,
  );
  const isToolDetailsModalOpen = useSelector(
    (state: ReduxState) => state.toolDetailsOpen,
  );

  useEffect(() => {
    dispatch(clearSchemas());
    Modal.setAppElement('#root');
  }, [dispatch]);

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  function openToolDetailsModal(): void {
    console.log('funcao do modal');
    dispatch(setToolDetailsModal(true));
  }

  function closeToolDetailsModal(): void {
    dispatch(setToolDetailsModal(false));
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        className="modalCustomStyle"
      >
        <Form />
      </Modal>

      <Modal
        isOpen={isToolDetailsModalOpen}
        onRequestClose={closeToolDetailsModal}
        className="modalCustomStyle"
      >
        <div>
          Infos
          <button type="button" onClick={closeToolDetailsModal}>
            Close
          </button>
        </div>
      </Modal>

      <section className={styles.wrapper}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>
            {' '}
            Database Metadata <span>Visualizer</span>{' '}
          </h1>
        </div>
        <div className={styles.app_details__container}>
          <h2 className={styles.app_details__title}>What is that?</h2>
          <p className={styles.app_details__text}>
            A tool to help you to visualize heterogeneous databases metadata
          </p>

          <h2 className={styles.app_details__title}>
            What does it help me with?
          </h2>
          <p className={styles.app_details__text}>
            Better understanding of relational databases metadata and it&apos;s
            heterogeneous architecture
          </p>

          <h2 className={styles.app_details__title}>How do I do that?</h2>
          <p className={styles.app_details__text}>
            Click in the above <strong>Get started</strong> button and type a{' '}
            <strong>public</strong> database address and it access credentials
          </p>
        </div>

        <div className={styles.buttons__container}>
          <button type="button" onClick={openToolDetailsModal}>
            Tell me more about this tool
          </button>
          <button
            type="button"
            onClick={openDatabaseModal}
            className={styles.submit__button}
          >
            Get started &gt;
          </button>
        </div>
      </section>
    </>
  );
};

export default Sign;
