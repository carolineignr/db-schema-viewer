import React from 'react';
import { useThree } from '@react-three/fiber';
// import { useAspect } from "@react-three/drei";
import { Flex, Box } from '@react-three/flex';
import { Table } from '../Table/Table';

import styles from './SchemaContainer.module.scss';
import { SchemaState } from '../../utils/types';

export const SchemaContainer = (schema) => {
  const { size } = useThree();
  let isActive = false;

  function setActiveTable(e) {
    console.log('click ok')
  } 

  function renderTables() {
    return schema.tables.map((table) => {
      return (
        <Box>
          <Table table={table} />
        </Box>
      )
    });
  }

  function connectTablesByRelationship() {}

  return <Flex flexDirection="row">{renderTables()}</Flex>
};
