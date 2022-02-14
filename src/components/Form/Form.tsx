import React, { ReactElement, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDatabaseModal,
  setInputParams,
  setSchema,
} from '../../store/actions/schemaActions';

import requests from '../../utils/index';
import { ReduxState } from '../../utils/types';

import styles from './Form.module.scss';

const Form = (): ReactElement => {
  let inputParams = useSelector((state: ReduxState) => state.inputParams);
  let loading = false;
  // let error = null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function updateValue(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    const currentInput = event.target;
    inputParams[currentInput.name] = currentInput.value;
    dispatch(setInputParams(inputParams));
  }

  async function loadSchema(): Promise<void> {
    try {
      loading = true;
      const data = await requests.SCHEMA_GET(inputParams);

      if (!data) throw new Error('Não foi possível acessar o banco de dados.');

      dispatch(setSchema(data));
      navigate('/home');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      loading = false;
    }
  }

  function clearInputs(): void {
    inputParams = {
      host: '',
      database: '',
      user: '',
      password: '',
    };

    dispatch(setInputParams(inputParams));
  }

  const handleSubmit = async (event: any): Promise<void> => {
    event.preventDefault();

    await loadSchema();

    dispatch(setDatabaseModal(false));
    clearInputs();
  };

  return (
    <section className={styles.container}>
      <p className={styles.description}>Type your database credentials:</p>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          name="host"
          value={inputParams.host}
          onChange={(e) => updateValue(e)}
          placeholder="Host"
        />
        <input
          className={styles.formInput}
          name="database"
          value={inputParams.database}
          onChange={(e) => updateValue(e)}
          placeholder="Database Name"
        />
        <input
          className={styles.formInput}
          name="user"
          value={inputParams.user}
          onChange={(e) => updateValue(e)}
          placeholder="Username"
        />
        <input
          className={styles.formInput}
          name="password"
          value={inputParams.password}
          onChange={(e) => updateValue(e)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
