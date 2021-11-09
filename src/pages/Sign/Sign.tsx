import React, { ReactElement } from 'react';

import Form from '../../components/Form/Form';

import styles from './Sign.module.scss';

const Sign = (): ReactElement => (
  <section className={styles.pageWrapper}>
    <div className={styles.container}>
      <p className={styles.title}> DB Schema Viewer </p>
      <Form />
    </div>
  </section>
);

export default Sign;
