import React from 'react';
import styles from './NewDatabaseBtn.module.scss';

export const NewDatabaseBtn = (): any => {
  function openNewDatabaseModal(): void {
    console.log('Aqui vai abrir um modal');
  }

  return (
    <button
      className={styles.addDatabaseBtn}
      type="button"
      onClick={openNewDatabaseModal}
    >
      + Add a new database
    </button>
  );
};
