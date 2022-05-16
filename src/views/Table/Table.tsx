/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { TableState } from '../../utils/types';
import styles from './Table.module.scss';

// eslint-disable-next-line react/prop-types
export const Table = (props: any): React.ReactElement => {
  const hasTags = Object.keys(props.table.tags).length > 0;

  function renderTags(): React.ReactElement {
    return props.table.tags.map((tag) => (
      <div className={styles.tags__div}>{tag}</div>
    ));
  }

  function relationWith(): number {
    let relations = 0;
    props.table.columns.forEach((column) => {
      if (column.reference) relations++;
    });

    return relations;
  }

  function renderColumnsInfos(): React.ReactElement {
    return (
      <div>
        <div className={styles.infosColumns__header}>
          <span>Respective column name</span>
          <span>Is primary key</span>
          <span>Max num of characters</span>
          <span>Nullable</span>
          <span>Default value</span>
          <span>Data domain</span>
          <span>Updatable</span>
          <span>Is an identity column</span>
          <span>Is foreign key</span>
        </div>

        <div>
          {props.table.columns.map((column) => (
            <div className={styles.infosColumns__container}>
              <p>{column.name || 'Not informed'}</p>
              <p>{column.isPrimary ? 'Yes' : 'No'}</p>
              <p>{column.maxLength || 'Not defined'}</p>
              <p>{column.nullable ? 'Yes' : 'No'}</p>
              <p>
                {column.defaultValue || 'There is not a default value defined'}
              </p>
              <p>{column.type || 'Not informed'}</p>
              <p>{column.isUpdatable ? 'Yes' : 'No'}</p>
              <p>{column.isIdentity ? 'Yes' : 'No'}</p>
              <p>
                {column.reference
                  ? `Is a reference of table ${column.reference.table}, column ${column.reference.column}`
                  : 'No'}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.infosTable__container}>
        <div>
          <span>Total number of columns</span>
          <p>{props.table.columns.length}</p>
        </div>
        <div>
          <span>Comments</span>
          <p>{props.table.comment || 'No comments'}</p>
        </div>
        <div>
          <span>Tags</span>
          {/* renderizar as tags dentro de 'mini cards' */}
          <p>{hasTags ? renderTags() : 'No tags'}</p>
        </div>
        <div>
          <span>How many tables does it relate to</span>
          <p>{relationWith()}</p>
        </div>
      </div>

      {renderColumnsInfos()}
    </>
  );
};

export default Table;
