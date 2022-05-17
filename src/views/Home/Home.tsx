import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';
import { Table as TableInfos } from '../Table/Table';
import Form from '../../components/Form/Form';
import Table from '../../components/DatabaseSchema/Table/Table';
import { Header } from '../../components/Header/Header';
import { ReduxState, TableState } from '../../utils/types';
import {
  setCurrentTable,
  setDatabaseModal,
} from '../../store/actions/schemaActions';

import styles from './Home.module.scss';

export const Home = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schemas = useSelector((state: ReduxState) => state.schemas);
  const isModalOpen = useSelector(
    (state: ReduxState) => state.databaseModalOpen,
  );
  const currentTable = useSelector((state: ReduxState) => state.currentTable);

  function handleCloseDatabaseModal(): void {
    dispatch(setDatabaseModal(false));
  }

  function onClickTable(table: TableState): void {
    dispatch(setCurrentTable(table));
  }

  function renderTables(identifier: number): React.ReactElement[] {
    let xPosition = -5;

    return schemas[identifier].tables.map((table) => (
      <Table
        position={[xPosition++, 1, -2]}
        onClick={onClickTable}
        table={table}
        key={table.name}
      />
    ));
  }

  useEffect(() => {
    if (schemas.length < 1) {
      navigate(-1);
    }

    Modal.setAppElement('#root');
  }, [schemas, navigate, dispatch]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseDatabaseModal}
        className="modalCustomStyle"
      >
        <div className={styles.modal_container}>
          <Form />
        </div>
      </Modal>

      {schemas.length > 0 && <Header />}

      <section className={styles.wrapper}>
        {currentTable ? (
          <TableInfos table={currentTable} />
        ) : (
          <>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls
                addEventListener={undefined}
                hasEventListener={undefined}
                removeEventListener={undefined}
                dispatchEvent={undefined}
              />
              {schemas.length > 0 && renderTables(0)}
              {schemas.length > 1 && renderTables(1)}
            </Canvas>
            <button type="button" onClick={() => navigate(-1)}>
              Go back
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
