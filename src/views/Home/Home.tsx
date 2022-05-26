/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form/Form';
import Container from '../../components/Container/Container';
import { ReduxState, TableState } from '../../utils/types';
import {
  setDatabaseModal,
  setSelectedTables,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schemas = useSelector((state: ReduxState) => state.schemas);
  const currentState = useSelector((state: ReduxState) => state);
  const { selectedTables, databaseModalOpen } = currentState;
  const isModalOpen = databaseModalOpen;

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  function objectAlreadyIn(clickedTable): any {
    return selectedTables.find(
      (table) => JSON.stringify(table) === JSON.stringify(clickedTable),
    );
  }

  function removeObjFromSelectedTables(clickedTable: TableState): boolean {
    try {
      const updatedArr = selectedTables.filter(
        (table) => JSON.stringify(table) === JSON.stringify(clickedTable),
      );
      dispatch(setSelectedTables(updatedArr));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  function onClickTable(table: TableState): any {
    if (currentState.selectedTables.length <= 2) {
      if (objectAlreadyIn(table)) {
        removeObjFromSelectedTables(table);
        // Mostrar erro para o usuário
        console.log('These table is already selected');
      } else {
        selectedTables.push(table);
        dispatch(setSelectedTables(selectedTables));
      }
    } else {
      // Mostrar erro para o usuário
      console.log('Already have two tables');
    }
  }

  function renderGenericHeader(): React.ReactElement {
    if (selectedTables.length < 2) {
      return (
        <div className={styles.general_header__container}>
          <p>Available database schemas</p>
        </div>
      );
    }

    return (
      <div className={styles.general_header__container}>
        <span>Current schema name</span>
        <span className={styles.name}>Schema name</span>
      </div>
    );
  }

  useEffect(() => {
    if (schemas.length < 1) {
      navigate(-1);
    }

    Modal.setAppElement('#root');
  }, [schemas, navigate]);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        className="modalCustomStyle"
      >
        <div className={styles.modal_container}>
          <Form />
        </div>
      </Modal>

      {schemas.length > 0 && renderGenericHeader()}

      <section className={styles.wrapper}>
        <>
          <Container
            schemas={schemas}
            selectedTables={selectedTables}
            onClick={onClickTable}
          />
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </>
      </section>
    </div>
  );
};

export default Home;
