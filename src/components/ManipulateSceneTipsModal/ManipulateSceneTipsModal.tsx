import React from 'react';

import styles from './ManipulateSceneTipsModal.module.scss';

export const ManipulateSceneTipsModal = ({
  closeModal,
}: any): React.ReactElement => (
  <div className={styles.container}>
    <div className={styles.content}>
      <p className={styles.title}>Scene manipulation tips</p>
      <p>How to change the visualization perspective</p>
      <span>
        To move the camera you must hold down the left mouse button and then
        move the mouse as desired within the container.
      </span>

      <p>How to move inside container</p>
      <span>
        To move inside the container just hold the right mouse button + the
        &apos;shift&apos; key in your keyboard, and then move the mouse as you wish.
      </span>

      <p>How to get closer to the 3D objects</p>
      <span>
        To zoom in or out of the 3D objects that represent the tables, just use
        the &apos;scroll&apos; of the mouse.
      </span>
    </div>
    <button type="button" onClick={closeModal}>
      Got it!
    </button>
  </div>
);

export default ManipulateSceneTipsModal;
