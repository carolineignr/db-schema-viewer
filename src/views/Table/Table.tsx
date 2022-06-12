/* eslint-disable react/destructuring-assignment */
// eslint-disable react/prop-types
import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './Table.module.scss';

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

  function renderColumnReference(column): React.ReactElement {
    return (
      <span>
        {column.reference.table} ({column.reference.column})
      </span>
    );
  }

  function renderColumnsInfos(): React.ReactElement {
    return (
      <div>
        <span className={styles.section__title}>
          What we know about this table columns
        </span>
        <div className={styles.infosColumns__header}>
          <span>Column name</span>
          <span>Primary key</span>
          <span>Max characters num</span>
          <span>Nullable</span>
          <span>Default value</span>
          <span>Data domain</span>
          <span>Updatable</span>
          <span>Identity column</span>
          <span>Foreign key</span>
        </div>

        <div className={styles.infosColumns}>
          {props.table.columns.map((column) => (
            <div className={styles.infosColumns__container}>
              <p className={styles.name}>{column.name || 'Not informed'}</p>
              <p>{column.isPrimary ? 'Yes' : 'No'}</p>
              <p>{column.maxLength || 'No'}</p>
              <p>{column.nullable ? 'Yes' : 'No'}</p>
              <p>{column.defaultValue || 'No'}</p>
              <p>{column.type || 'No'}</p>
              <p>{column.isUpdatable ? 'Yes' : 'No'}</p>
              <p>{column.isIdentity ? 'Yes' : 'No'}</p>
              <p>{column.reference ? renderColumnReference(column) : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header currentTable={props.table} />

      <div className={styles.infosTable__container}>
        <span className={styles.section__title}>
          What we know about this table
        </span>
        <div className={styles.infos}>
          <div>
            <span>Total number of columns</span>
            <p style={{ fontSize: '3rem', color: '#FFA229' }}>
              {props.table.columns.length}
            </p>
          </div>
          <div>
            <span>Comments</span>
            <p style={{ color: '#FFA229' }}>
              {props.table.comment || 'No comments'}
            </p>
          </div>
          <div>
            <span>Tags</span>
            {/* renderizar as tags dentro de 'mini cards' */}
            <p style={{ color: '#FFA229' }}>
              {hasTags ? renderTags() : 'No tags'}
            </p>
          </div>
          <div>
            <span>How many tables does it relate to</span>
            <p style={{ fontSize: '3rem', color: '#FFA229' }}>{relationWith()}</p>
          </div>
        </div>
      </div>

      {renderColumnsInfos()}
    </>
  );
};

export default Table;
