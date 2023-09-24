import React from 'react';
import { TableState } from '../../utils/types';

import styles from './Header.module.scss';

export const Header = ({ schema, currentTable }: any): React.ReactElement => {
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
        <div className={styles.database}>
          <span>Database name</span>
          <p>{schema.tables[0].columns[0].rawInfo.table_catalog}</p>
          <span>Total tables: {schema.tables.length}</span>
        </div>
      </>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {!schema
          ? renderTableInfoHeader(currentTable)
          : renderDatabaseSchemaHeader()}
      </div>
    </header>
  );
};
