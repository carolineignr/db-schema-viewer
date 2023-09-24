import React from 'react';

import styles from './ManipulateSceneTipsModal.module.scss';

export const ManipulateSceneTipsModal = ({
  closeModal,
}: any): React.ReactElement => (
  <div className={styles.container}>
    <span
      role="button"
      className={styles.exit__button}
      onClick={closeModal}
      onKeyPress={closeModal}
      tabIndex={0}
    >
      <i className="fa fa-close" />
    </span>
    <div className={styles.content}>
      <p className={styles.title}>General tips</p>
      <p>
        <b>How add a database</b>
      </p>
      <p>
        Click in the <em>Add database</em> button and type the
        database access informations.
        <br />
        After the first database being saved, you will be able to add the seconde one.
      </p>

      <p>
        <b>How to visualize tables metadata info</b>
      </p>
      <p>
        Click in one table from the first database, and another table
        from the second database.
        <br />
        After this, just click in the <em>Check these tables</em> button.
      </p>

      <p className={styles.title}>Scene manipulation tips</p>
      <p>
        <b>How to change the 3D scene visualization perspective</b>
      </p>
      <p>
        To move the camera you must hold down the left mouse button and then
        move the mouse as desired within the container.
      </p>

      <p>
        <b>How to move inside the 3D scene container</b>
      </p>
      <p>
        To move inside the container just hold the right mouse button + <em>SHIFT</em> key
        in your keyboard, and then move the mouse as you wish.
      </p>

      <p>
        <b>How to get closer to the 3D objects presents in the scene</b>
      </p>
      <p>
        To zoom in or out of the 3D objects that represent the tables, just use
        the <em>scroll</em> of the mouse.
      </p>
    </div>
    <button type="button" onClick={closeModal}>
      Got it!
    </button>
  </div>
);

export default ManipulateSceneTipsModal;
