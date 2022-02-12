import React, { ReactElement } from 'react';

import Form from '../../components/Form/Form';
import SignIllustration from '../../assets/images/sign_illustration.png';

import styles from './Sign.module.scss';

const Sign = (): ReactElement => (
  <section className={styles.pageWrapper}>
    <div className={styles.container}>
      <div className={styles.presentation}>
        <h1 className={styles.title}> DB Schema Viewer </h1>
        <h3 className={styles.subtitle}>
          Access multiple databases and check their differences
        </h3>
      </div>
      <img
        className={styles.dbIllustration}
        src={SignIllustration}
        alt="Database illustration"
      />
    </div>
    <Form />
  </section>
);

export default Sign;
