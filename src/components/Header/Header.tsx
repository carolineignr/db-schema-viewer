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
  const schemas = useSelector((state: ReduxState) => state.schemas);

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
          <p>{schemas[0].tables[0].columns[0].rawInfo.table_catalog}</p>
        </div>

        {schemas.length < 2 && (
          <button
            type="button"
            onClick={openDatabaseModal}
            className={styles.back__button}
          >
            New database
          </button>
        )}
      </>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {currentTable
            ? renderTableInfoHeader()
            : renderDatabaseSchemaHeader()}
        </nav>
      </header>
      <p>{currentTable && currentTable.name}</p>
    </>
  );
};
