import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentTable,
  setDatabaseModal,
} from '../../store/actions/schemaActions';
import { ReduxState } from '../../utils/types';

import styles from './Header.module.scss';

export const Header = (): React.ReactElement => {
  const dispatch = useDispatch();
  const currentTable = useSelector((state: ReduxState) => state.currentTable);
  const currentSchema = useSelector((state: ReduxState) => state.schemas[0]);

  function handleBackButton(): void {
    dispatch(setCurrentTable(null));
  }

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  function renderTableInfoHeader(): React.ReactElement {
    return (
      <>
        <div>
          <span>Table name</span>
          <p>{currentTable.name}</p>
        </div>

        <button
          type="button"
          onClick={handleBackButton}
          className={styles.back__button}
        >
          Back to tables
        </button>
      </>
    );
  }

  function renderDatabaseSchemaHeader(): React.ReactElement {
    return (
      <>
        <div>
          <span>Database name</span>
          <p>{currentSchema.tables[0].columns[0].rawInfo.table_catalog}</p>
        </div>

        <button
          type="button"
          onClick={openDatabaseModal}
          className={styles.back__button}
        >
          + Add a new database
        </button>
      </>
    );
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {currentTable ? renderTableInfoHeader() : renderDatabaseSchemaHeader()}
      </nav>
    </header>
  );
};
