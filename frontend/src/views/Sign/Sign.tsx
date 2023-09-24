import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal';
import {
  clearSchemas,
  setToolDetailsModal,
} from '../../store/actions/schemaActions';
import { ReduxState } from '../../utils/types';

import styles from './Sign.module.scss';
import ToolDetailsModal from '../../components/ToolDetailsModal/ToolDetailsModal';

const Sign = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toolDetailsOpen } = useSelector((state: ReduxState) => state);

  function redirectToHome(): void {
    navigate('/home');
  }

  function openToolDetailsModal(): void {
    dispatch(setToolDetailsModal(true));
  }

  function closeToolDetailsModal(): void {
    dispatch(setToolDetailsModal(false));
  }

  useEffect(() => {
    dispatch(clearSchemas());
    Modal.setAppElement('#root');
  }, [dispatch]);

  return (
    <>
      <Modal
        isOpen={toolDetailsOpen}
        onRequestClose={() => closeToolDetailsModal()}
        className="modalCustomStyle"
      >
        <ToolDetailsModal closeModal={() => closeToolDetailsModal()} />
      </Modal>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <p className={styles.title}>
            A tool to help you <br /> better visualize
            <br /> heterogeneous
            <br /> database structures.
          </p>

          <div className={styles.buttons__container}>
            <button
              type="button"
              onClick={openToolDetailsModal}
              className={styles.secondary}
            >
              More info
            </button>
            <button
              type="button"
              onClick={redirectToHome}
              className={styles.primary}
            >
              Get started &gt;
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sign;
