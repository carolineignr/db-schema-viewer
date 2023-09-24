import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

import {
  setDatabaseModal,
  setInputParams,
  setSchema,
  setLoading,
} from '../../store/actions/schemaActions';

import requests from '../../utils/index';
import { ReduxState } from '../../utils/types';

import styles from './Form.module.scss';

const Form = (): ReactElement => {
  const { inputParams, loading } = useSelector((state: ReduxState) => state);
  const dispatch = useDispatch();

  function clearInputs(): void {
    const params = {
      host: '',
      database: '',
      user: '',
      password: '',
    };

    dispatch(setInputParams(params));
  }

  function updateValue(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    const currentInput = event.target;
    inputParams[currentInput.name] = currentInput.value;
    dispatch(setInputParams(inputParams));
  }

  async function loadSchema(): Promise<void> {
    try {
      const data: any = await requests.SCHEMA_GET(inputParams);
      if (!data.tables) {
        throw new Error('It was not possible to access the informed database.');
      }

      dispatch(setSchema(data));
    } catch (error) {
      swal(error, {
        icon: 'error',
      });
      console.log(error);
    }
  }

  const handleSubmit = async (event: any): Promise<void> => {
    dispatch(setLoading(true));
    event.preventDefault();

    try {
      await loadSchema();
      dispatch(setDatabaseModal(false));
      clearInputs();

      swal('Database saved!', {
        icon: 'success',
      });
      dispatch(setLoading(false));
    } catch (e) {
      dispatch(setDatabaseModal(false));
      dispatch(setLoading(false));
      console.log(e);
      swal(
        'Unfortunatelly we found a problem to save this database informations.',
        {
          icon: 'error',
        },
      );
    }
  };

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
    clearInputs();
  }

  return (
    <>
      {loading ? (
        <div className="feedback loader" />
      ) : (
        <section className={styles.container}>
          <span
            role="button"
            className={styles.exit__button}
            onClick={handleCloseDatabaseModal}
            onKeyPress={handleCloseDatabaseModal}
            tabIndex={0}
          >
            <i className="fa fa-close" />
          </span>
          <form onSubmit={handleSubmit}>
            <span className={styles.title}>Access informations</span>
            <label htmlFor="host">
              Database host address
              <input
                className={styles.formInput}
                name="host"
                value={inputParams.host}
                onChange={(e) => updateValue(e)}
              />
            </label>
            <label htmlFor="database">
              Database name
              <input
                className={styles.formInput}
                name="database"
                value={inputParams.database}
                onChange={(e) => updateValue(e)}
              />
            </label>
            <label htmlFor="user">
              Username to access database
              <input
                className={styles.formInput}
                name="user"
                value={inputParams.user}
                onChange={(e) => updateValue(e)}
              />
            </label>
            <label htmlFor="password">
              Password to access database
              <input
                className={styles.formInput}
                name="password"
                value={inputParams.password}
                onChange={(e) => updateValue(e)}
                type="password"
              />
            </label>

            <div>
              <button type="button" onClick={handleCloseDatabaseModal}>
                Cancel
              </button>
              <button type="submit" className={styles.primary}>
                Submit
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Form;
