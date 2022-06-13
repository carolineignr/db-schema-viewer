import React from 'react';
import styles from './EmptyState.module.scss';

export const EmptyState = (): React.ReactElement => (
  <div className={styles.empty}>
    <p>Add some database by clicking on the top left button here.</p>
  </div>
);
