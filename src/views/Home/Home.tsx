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
  setShowTablesInfos,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';
import ManipulateSceneTipsModal from '../../components/ManipulateSceneTipsModal/ManipulateSceneTipsModal';
import { EmptyState } from '../../components/EmptyState/EmptyState';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schemas = useSelector((state: ReduxState) => state.schemas);
  const currentState = useSelector((state: ReduxState) => state);
  const {
    selectedTables,
    databaseModalOpen,
    tipsModalOpen,
    showTablesInfos,
  } = currentState;
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
        (table) => JSON.stringify(table) !== JSON.stringify(clickedTable),
      );
      dispatch(setSelectedTables(updatedArr));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  function onClickTable(table: TableState): any {
    if (selectedTables.length <= 2) {
      if (objectAlreadyIn(table)) {
        removeObjFromSelectedTables(table);
      } else {
        selectedTables.push(table);
        dispatch(setSelectedTables(selectedTables));
      }
    } else {
      alert('Already have two tables');
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
    dispatch(setShowTablesInfos(false));
  }

  function exitApp(): void {
    clearSelectedSchemas();
    dispatch(setShowTablesInfos(false));
    navigate('/');
  }

  function handleShowTablesInfos(): void {
    dispatch(setShowTablesInfos(true));
  }

  function renderFirstDbButton(): boolean {
    return schemas.length === 0;
  }

  function renderSecondDbButton(): boolean {
    return schemas.length === 1;
  }

  function renderGenericHeader(): React.ReactElement | any {
    return (
      <div className={styles.home_header__container}>
        {selectedTables.length === 2 && showTablesInfos ? (
          <button type="button" onClick={clearSelectedSchemas}>
            Back to schemas
          </button>
        ) : (
          selectedTables.length === 2 && (
            <button
              type="button"
              onClick={handleShowTablesInfos}
              className={styles.primary}
            >
              Check these tables
            </button>
          )
        )}

        <div>
          {renderFirstDbButton() && (
            <button
              type="button"
              onClick={openDatabaseModal}
              className={styles.primary}
            >
              Add database
            </button>
          )}

          {renderSecondDbButton() && (
            <button
              type="button"
              onClick={openDatabaseModal}
              className={styles.primary}
            >
              Add database
            </button>
          )}
        </div>

        <div className={styles.leftSide}>
          {!showTablesInfos && (
            <button type="button" onClick={showTipsModal}>
              Tips to manipulate the 3D scene
            </button>
          )}
          <button
            className={styles.exit__button}
            type="button"
            onClick={exitApp}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  function handleClick(e): void {
    console.log(e);
    // onClickTable();
  }

  useEffect(() => {
    Modal.setAppElement('#root');
  }, [schemas, navigate]);

  return (
    <section className={styles.wrapper}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeDatabaseModal()}
        className="modalCustomStyle"
      >
        <Form />
      </Modal>

      <Modal
        isOpen={tipsModalOpen}
        onRequestClose={() => closeTipsModal()}
        className="modalCustomStyle"
      >
        <ManipulateSceneTipsModal closeModal={() => closeTipsModal()} />
      </Modal>

      {renderGenericHeader()}

      {schemas.length > 0 ? (
        <Container
          schemas={schemas}
          selectedTables={selectedTables}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={onClickTable}
          showTablesInfos={showTablesInfos}
        />
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default Home;
