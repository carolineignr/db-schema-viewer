/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form/Form';
import Container from '../../components/Container/Container.jsx';
import { ReduxState, TableState } from '../../utils/types';
import {
  setDatabaseModal,
  setSelectedTables,
  setTipsModal,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schemas = useSelector((state: ReduxState) => state.schemas);
  const currentState = useSelector((state: ReduxState) => state);
  const { selectedTables, databaseModalOpen, tipsModalOpen } = currentState;
  const isModalOpen = databaseModalOpen;

  function closeDatabaseModal(): void {
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

  function showTipsModal(): void {
    dispatch(setTipsModal(true));
  }

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  function closeTipsModal(): void {
    dispatch(setTipsModal(false));
  }

  function clearSelectedSchemas(): void {
    dispatch(setSelectedTables([]));
  }

  function exitApp(): void {
    clearSelectedSchemas();
    navigate(-1);
  }

  function renderNewDbButton(): boolean {
    if (schemas.length < 2 && selectedTables.length < 2) return true;
    return false;
  }

  function renderGenericHeader(): React.ReactElement | any {
    return (
      <div className={styles.schemasHeader__wrapper}>
        {renderNewDbButton() && (
          <>
            <p>Available database schemas</p>
            <button type="button" onClick={showTipsModal}>
              How to manipulate the scene
            </button>
            <button type="button" onClick={openDatabaseModal}>
              New database
            </button>
          </>
        )}
        {selectedTables.length === 2 && (
          <button type="button" onClick={clearSelectedSchemas}>
            Back to schemas
          </button>
        )}
        <button type="button" onClick={exitApp}>
          Exit
        </button>
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
        onRequestClose={closeDatabaseModal}
        className="modalCustomStyle"
      >
        <div className={styles.modal_container}>
          <Form />
        </div>
      </Modal>

      <Modal
        isOpen={tipsModalOpen}
        onRequestClose={closeTipsModal}
        className="modalCustomStyle"
      >
        <div className={styles.modal_container}>
          <div>
            <h1>How to move the camera</h1>
            <span>Tips to move camera</span>

            <h1>How to get closer to the 3D objects</h1>
            <span>Tips to get closer</span>

            <h1>How to change the visualization perspective</h1>
            <span>Tips to update perspective</span>
          </div>
          <button type="button" onClick={closeTipsModal}>
            Close
          </button>
        </div>
      </Modal>

      {schemas.length > 0 && renderGenericHeader()}

      <section className={styles.wrapper}>
        <Container
          schemas={schemas}
          selectedTables={selectedTables}
          onClick={onClickTable}
        />
      </section>
    </div>
  );
};

export default Home;
