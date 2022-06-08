/* eslint-disable no-alert */
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
import ManipulateSceneTipsModal from '../../components/ManipulateSceneTipsModal/ManipulateSceneTipsModal';

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
      alert(
        'It was not possible to unselect this table, please restart the application and try again',
      );
      console.log(e);
      return false;
    }
  }

  function onClickTable(table: TableState): any {
    if (currentState.selectedTables.length <= 2) {
      if (objectAlreadyIn(table)) {
        removeObjFromSelectedTables(table);
        alert(
          'It was not possible to select this table, please restart the application and try again.',
        );
      } else {
        selectedTables.push(table);
        dispatch(setSelectedTables(selectedTables));
      }
    } else {
      alert('This table is already selected');
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
        {selectedTables.length === 2 ? (
          <button type="button" onClick={clearSelectedSchemas}>
            Back to schemas
          </button>
        ) : (
          <>
            <button type="button" onClick={showTipsModal}>
              How to manipulate the scene
            </button>
          </>
        )}
        {renderNewDbButton() && (
          <button type="button" onClick={openDatabaseModal}>
            New database
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
          <ManipulateSceneTipsModal closeModal={closeTipsModal} />
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
