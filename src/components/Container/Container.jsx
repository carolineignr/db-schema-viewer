/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Flex } from '@react-three/flex';

import { Header } from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Table from '../Table/Table.jsx';

import styles from './Container.module.scss';

export const Container = (customizedProps) => {
  const { schemas, onClick, selectedTables } = customizedProps;

  function renderTables(schema) {
    return schema.tables.map((table) => (
      <Table
        position={[-20, 5, -5]}
        textPosition={[-20, 6, -5]}
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
          <OrthographicCamera makeDefault position={[50, 10, 10]} zoom={30} />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="row"
            flexWrap="wrap"
            size={[40, 10, 10]}
          >
            {renderTables(schema)}
            {/* Teste com múltiplas tabelas */}
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

  return <div>{selectedTables.length === 2 ? <Tabs /> : renderSchemas()}</div>;
};

export default Container;
