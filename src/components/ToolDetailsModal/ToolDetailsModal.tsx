import React from 'react';

import styles from './ToolDetailsModal.module.scss';

export const ToolDetailsModal = ({ closeModal }: any): React.ReactElement => {
  function handleKeyPress(): void {
    closeModal();
  }

  return (
    <div className={styles.container}>
      <span
        role="button"
        className={styles.exit__button}
        onClick={closeModal}
        onKeyPress={handleKeyPress}
        tabIndex={0}
      >
        Close
      </span>
      <div className={styles.content}>
        <p className={styles.title}>About</p>
        <span>
          The purpose of this tool is to visualize different data sources.
          Differences and similarities of their metadata will be exposed,
          allowing a complete understanding of their structures and how they
          were schematized. <br />
        </span>
        <span>
          Click on the <i>Get started</i> button and type some public database
          access to check their metadata information. <br />
          Part of the purpose is to delivery a great experience to you, so
          hope you enjoy!
        </span>
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
      <div className={styles.empty}> </div>
    </div>
  );
};

export default ToolDetailsModal;
