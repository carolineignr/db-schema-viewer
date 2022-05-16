import React from 'react';
import styles from './EmptyState.module.scss';

export const EmptyState = (): React.ReactElement => (
  <div className={styles.empty}>
    <p>No database schema was founded.</p>
  </div>
);
