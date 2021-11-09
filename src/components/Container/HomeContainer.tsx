/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
import React, { ReactElement } from 'react';
// import DropdownTreeSelect from 'react-dropdown-tree-select';
import { useSelector } from 'react-redux';

import { ReduxState } from '../../utils/types';

export default function HomeContainer(): ReactElement {
  const schema = useSelector((state: ReduxState) => state[0].schema);
  const data = {
    label: 'Tables',
    value: 'tables',
    children: [],
  };

  const showSchema = (): boolean => {
    return Object.keys(schema).length > 0;
  };

  function getTablesFromState(): any {
    return schema.tables.map((table: any, index) => {
      return {
        label: table.name,
        value: `table-${table.name}-${index}`,
        children: table.columns.map((col: any) => {
          return {
            label: col.name,
            value: `col-${col.name}`,
          };
        }),
      };
    });
  }

  const dropdownList = (): any => {
    data.children = [...data.children, getTablesFromState()];

    return data;
  };

  const renderTables = (): ReactElement => {
    return <p>Teste</p>;
  };

  return renderTables();
}
