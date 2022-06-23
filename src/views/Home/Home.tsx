/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import Form from '../../components/Form/Form';
import Container from '../../components/Container/Container.jsx';
import ManipulateSceneTipsModal from '../../components/ManipulateSceneTipsModal/ManipulateSceneTipsModal';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { ReduxState, TableState } from '../../utils/types';
import {
  setDatabaseModal,
  setSelectedTables,
  setTipsModal,
  setShowTablesInfos,
  clearSchemas,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentState = useSelector((state: ReduxState) => state);
  const {
    selectedTables,
    databaseModalOpen,
    tipsModalOpen,
    showTablesInfos,
    schemas,
  } = currentState;
  const isModalOpen = databaseModalOpen;

  function closeDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  function alreadyInSelectedTables(clickedTable): any {
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
    console.log(selectedTables);
    if (alreadyInSelectedTables(table)) {
      removeObjFromSelectedTables(table);
      return;
    }

    if (selectedTables.length < 2) {
      selectedTables.push(table);
      dispatch(setSelectedTables(selectedTables));
    } else {
      swal('Already have two tables');
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

  function clearSelectedTables(): void {
    dispatch(setSelectedTables([]));
    dispatch(setShowTablesInfos(false));
  }

  function handleClearSchemas(): void {
    dispatch(clearSchemas());
    dispatch(setSelectedTables([]));
  }

  function exitApp(): void {
    clearSelectedTables();
    dispatch(setShowTablesInfos(false));
    navigate('/');
  }

  function handleShowTablesInfos(): void {
    dispatch(setShowTablesInfos(true));
  }

  function renderAddButton(): boolean {
    return !showTablesInfos && schemas.length < 2;
  }

  function renderBackButton(): boolean {
    return selectedTables.length === 2 && showTablesInfos;
  }

  function renderClearSchemasButton(): boolean {
    return selectedTables.length === 2 && !showTablesInfos;
  }

  function renderLeftsideButtons(): React.ReactElement {
    return (
      <div className={styles.group_secondary__button}>
        {renderBackButton() && (
          <button type="button" onClick={clearSelectedTables}>
            Back to schemas |
          </button>
        )}

        {schemas.length > 0 && !showTablesInfos && (
          <button type="button" onClick={handleClearSchemas}>
            Clear schemas |
          </button>
        )}

        {!showTablesInfos && (
          <>
            <button type="button" onClick={showTipsModal}>
              Important tips |
            </button>
          </>
        )}

        <button
          className={`${styles.exit__button} ml-1`}
          type="button"
          onClick={exitApp}
        >
          Exit
        </button>
      </div>
    );
  }

  // needs refactor
  function renderHeader(): React.ReactElement | any {
    return (
      <div className={styles.header__container}>
        {renderAddButton() && (
          <button
            type="button"
            onClick={openDatabaseModal}
            className={styles.primary__button}
          >
            Add database
          </button>
        )}

        {renderClearSchemasButton() && (
          <button
            type="button"
            onClick={handleShowTablesInfos}
            className={styles.primary__button}
          >
            Check these tables
          </button>
        )}

        {renderLeftsideButtons()}
      </div>
    );
  }

  function renderContainer(): React.ReactElement {
    return (
      <div className={styles.container}>
        {schemas.length > 0 ? (
          <Container
            schemas={schemas}
            selectedTables={selectedTables}
            onClick={onClickTable}
            showTablesInfos={showTablesInfos}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    );
  }

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

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

      {renderHeader()}
      {renderContainer()}
    </section>
  );
};

export default Home;
