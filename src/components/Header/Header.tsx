import React from 'react';
import { InfoButton } from './InfoButton/InfoButton';
import { NewDatabaseBtn } from './NewDatabaseBtn/NewDatabaseBtn';

import styles from './Header.module.scss';

export const Header = (): any => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NewDatabaseBtn />
    </nav>
  </header>
);
