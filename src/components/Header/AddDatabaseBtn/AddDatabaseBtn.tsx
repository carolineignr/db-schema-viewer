import React from 'react';
import { useDispatch } from 'react-redux';
import { setDatabaseModal } from '../../../store/actions/schemaActions';
import styles from './AddDatabaseBtn.module.scss';

export const AddDatabaseBtn = (): React.ReactElement => {
  const dispatch = useDispatch();

  function openDatabaseModal(): void {
    dispatch(setDatabaseModal(true));
  }

  return (
    <button className={styles.btn} type="button" onClick={openDatabaseModal}>
      + Add a new database
    </button>
  );
};
