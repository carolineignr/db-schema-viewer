/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Table as TableInfos } from '../../views/Table/Table';
import { Header } from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Table from '../DatabaseSchema/Table/Table';

import styles from './Container.module.scss';

export const Container = (customizedProps: any): React.ReactElement => {
  const { schemas, onClick, selectedTables } = customizedProps;

  function renderTables(schema): React.ReactElement {
    let xPosition = -5;
    return schema.tables.map((table) => (
      <Table
        position={[xPosition++, 1, 1]}
        table={table}
        key={table.name}
        onClick={onClick}
      />
    ));
  }

  function renderSchemas(): any {
    return schemas.map((schema) => (
      <div className={styles.schema__container}>
        <Header schema={schema} />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
          />
          {renderTables(schema)}
        </Canvas>
      </div>
    ));
  }

  return <div>{selectedTables.length === 2 ? <Tabs /> : renderSchemas()}</div>;
};

export default Container;
