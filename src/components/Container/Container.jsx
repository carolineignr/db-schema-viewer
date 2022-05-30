/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Flex } from '@react-three/flex';

import { Header } from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Table from '../DatabaseSchema/Table/Table.jsx';

import styles from './Container.module.scss';

export const Container = (customizedProps) => {
  const { schemas, onClick, selectedTables } = customizedProps;

  function renderTables(schema) {
    return schema.tables.map((table) => (
      <Table
        position={[-20, 5, -5]}
        table={table}
        key={table.name}
        onClick={onClick}
      />
    ));
  }

  function renderSchemas() {
    return schemas.map((schema) => (
      <div className={styles.schema__container}>
        <Header schema={schema} />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="row"
            flexWrap="wrap"
            size={[40, 10, 10]}
          >
            {renderTables(schema)}
            {/* {renderTables(schema)}
            {renderTables(schema)}
            {renderTables(schema)}
            {renderTables(schema)}
            {renderTables(schema)} */}
          </Flex>
        </Canvas>
      </div>
    ));
  }

  useEffect(() => console.log(selectedTables));

  return <div>{selectedTables.length === 2 ? <Tabs /> : renderSchemas()}</div>;
};

export default Container;
