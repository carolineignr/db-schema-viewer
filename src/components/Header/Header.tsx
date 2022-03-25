import React from 'react';
import { AddDatabaseBtn } from './AddDatabaseBtn/AddDatabaseBtn';
import styles from './Header.module.scss';

export const Header = (): any => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <AddDatabaseBtn />
    </nav>

    {/* TODO: add help/info button */}
  </header>
);
