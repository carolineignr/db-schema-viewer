import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import SignIllustration from '../../assets/images/db-person.png';
import Form from '../../components/Form/Form';
import { clearSchemas, setDatabaseModal } from '../../store/actions/schemaActions';
import { ReduxState } from '../../utils/types';

import styles from './Sign.module.scss';

const Sign = (): ReactElement => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: ReduxState) => state.databaseModalOpen,
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

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        className="modalCustomStyle"
      >
        <Form />
      </Modal>

      <section className={styles.pageWrapper}>
        <div className={styles.presentation__container}>
          <h1 className={styles.title}> DB Schema Metadata </h1>
          <img
            className={styles.dbIllustration}
            src={SignIllustration}
            alt="Initial page illustration"
          />
        </div>

        <div className={styles.app_details__container}>
          <h2 className={styles.app_details__title}>What is that app</h2>
          <p className={styles.app_details__text}>
            Viewer to help you to understand better heterogeneous schemas
          </p>

          <h2 className={styles.app_details__title}>
            What it helps me to resolve
          </h2>
          <p className={styles.app_details__text}>
            Better understanding of relational database metadata
          </p>
          <br />
          <p className={styles.app_details__text}>
            Comparison of heterogeneous relational databases
          </p>

          <h2 className={styles.app_details__title}>How do I do that?</h2>
          <p className={styles.app_details__text}>
            Click in the above button and type a{' '}
            <strong style={{ color: 'white' }}>public</strong> database address
            and access credentials
          </p>
          <br />

          <button
            type="button"
            onClick={openDatabaseModal}
            className={styles.back__button}
          >
            Get started
          </button>
        </div>
      </section>
    </>
  );
};

export default Sign;
