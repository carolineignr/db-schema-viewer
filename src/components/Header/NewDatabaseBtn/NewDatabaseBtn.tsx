import React from 'react';
import { useDispatch } from 'react-redux';
import { setDatabaseModal } from '../../../store/actions/schemaActions';
import styles from './NewDatabaseBtn.module.scss';

export const NewDatabaseBtn = (): any => {
  const dispatch = useDispatch();

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  return (
    <button
      className={styles.addDatabaseBtn}
      type="button"
      onClick={openDatabaseModal}
    >
      + Add a new database
    </button>
  );
};
