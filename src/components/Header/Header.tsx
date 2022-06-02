import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDatabaseModal,
  setSelectedTables,
} from '../../store/actions/schemaActions';
import { ReduxState, TableState } from '../../utils/types';

import styles from './Header.module.scss';

export const Header = ({ schema, currentTable }: any): React.ReactElement => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: ReduxState) => state);
  const { schemas } = currentState;

  function handleBackButton(): void {
    dispatch(setSelectedTables([]));
  }

  function renderTableInfoHeader(table: TableState): React.ReactElement {
    return (
      <>
        <div>
          <span>Table name</span>
          <p>{table.name}</p>
        </div>
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
      </>
    );
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {!schema
          ? renderTableInfoHeader(currentTable)
          : renderDatabaseSchemaHeader()}
      </nav>
    </header>
  );
};
