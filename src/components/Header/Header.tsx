import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDatabaseModal,
  setSelectedTables,
} from '../../store/actions/schemaActions';
import { ReduxState, TableState } from '../../utils/types';

import styles from './Header.module.scss';

export const Header = ({ schema }: any): React.ReactElement => {
  const dispatch = useDispatch();

  const currentState = useSelector((state: ReduxState) => state);
  const { selectedTables, schemas } = currentState;

  function handleBackButton(): void {
    dispatch(setSelectedTables([]));
  }

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  function renderTableInfoHeader(table: TableState): React.ReactElement {
    return (
      <>
        <div>
          <span>Table name</span>
          <p>{table.name}</p>
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
          <p>{schema.tables[0].columns[0].rawInfo.table_catalog}</p>
          <span>Total columns: {schema.tables.length}</span>
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
          {selectedTables.length === 2
            ? selectedTables.map((table) => renderTableInfoHeader(table))
            : renderDatabaseSchemaHeader()}
        </nav>
      </header>
    </>
  );
};
