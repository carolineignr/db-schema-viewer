import React from 'react';
import { Canvas } from 'react-three-fiber';
import { SchemaState, TableState } from '../../utils/types';
import { Table } from '../Table/Table';

import styles from './SchemaContainer.module.scss';

export const SchemaContainer = (schema: SchemaState): React.ReactElement => {
  function renderTables(): any {
    return schema.tables.map((table) => (
      <Table key={table.name} table={table} />
    ));
  }

  function connectTablesByRelationship(): void {}

  return (
    <div className={styles.wrapper}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {renderTables()}
      </Canvas>
    </div>
  );
};
