import React from 'react';

import styles from './ToolDetailsModal.module.scss';

export const ToolDetailsModal = ({ closeModal }: any): React.ReactElement => {
  function handleKeyPress(): void {
    closeModal();
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span
          role="button"
          className={styles.exit__button}
          onClick={closeModal}
          onKeyPress={handleKeyPress}
          tabIndex={0}
        >
          <i className="fa fa-close" />
        </span>
        <section className={styles.about}>
          <p className={styles.title}>Contextualizing</p>
          <p>
            There is a known challenge in combining data from different sources,
            largely because these data are arranged in these databases in different
            ways, as each database was designed and populated by different
            people/organizations, each with their own patterns. In order to be able
            to perform this data consumption in an efficient way, it is necessary to know
            how they are structured and think about how to treat them when they are in
            an API, for example.
          </p>
          <p>
            Doing this manually is a problem because each database has a table,
            which in turn has several columns with their particularities.
          </p>
          <p>
            Doing this manually is a problem because each database has a table,
            which in turn has several columns with their particularities.<br />
          </p>

          <p className={styles.title}>About</p>
          <p>
            To understand differences and similarities between heterogeneous
            data sources, it is necessary to inform in the tool the access data
            to two databases of the same business domain.
          </p>

          <p>
            Through these access data, the tool can then present the tables
            present in the informed bases in the format of 3D objects and
            scenarios to the user, to provide more interaction and allow
            dynamicity in the presentation of a large number of tables, for
            example. The metadata of these tables are also presented.
          </p>
          <p>
            Click on the <i>Get started</i> button and type some public database
            access to check their metadata information. <br />
          </p>
        </section>

        <section id={styles.scene_tips}>
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
        </section>
      </div>
      <button type="button" onClick={closeModal}>
        Got it!
      </button>
    </div>
  );
};

export default ToolDetailsModal;
