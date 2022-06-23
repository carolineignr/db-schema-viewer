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
  const { schemas, onClick, showTablesInfos, selectedTables } = customizedProps;

  function renderTables(schema) {
    return schema.tables.map((table) => (
      <Table
        position={[-20, 5, 0]}
        textPosition={[-20, 6, 0]}
        table={table}
        key={table.name}
        onClick={onClick}
        selectedTables={selectedTables}
      />
    ));
  }

  function renderSchemas(schema) {
    return (
      schema.tables && (
        <div className={styles.schema__container} key={schema.id}>
          <Header schema={schema} />

          <div className={styles.canvas__wrapper}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls />
              <OrthographicCamera
                makeDefault
                position={[50, 10, 10]}
                zoom={30}
              />
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
        </div>
      )
    );
  }

  return (
    <div>
      {showTablesInfos ? (
        <Tabs />
      ) : (
        schemas.map((schema) => renderSchemas(schema))
      )}
    </div>
  );
};

export default Container;
