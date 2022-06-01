import React, { ReactElement, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDatabaseModal,
  setInputParams,
  setSchema,
} from '../../store/actions/schemaActions';

import requests from '../../utils/index';
import { DatabaseInputParams, ReduxState } from '../../utils/types';

import styles from './Form.module.scss';

const Form = (): ReactElement => {
  const inputParams = useSelector((state: ReduxState) => state.inputParams);
  const navigate = useNavigate();
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
      if (data.tables.length < 1) {
        throw new Error('Não foi possível acessar o banco de dados.');
      }

      dispatch(setSchema(data));
      navigate('/home');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault();

    await loadSchema();
    dispatch(setDatabaseModal(false));
    clearInputs();
  };

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p>Database information&apos;s to access</p>
        <label htmlFor="host">
          Host name
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
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCloseDatabaseModal}>
          Cancel
        </button>
      </form>
    </section>
  );
};

export default Form;
