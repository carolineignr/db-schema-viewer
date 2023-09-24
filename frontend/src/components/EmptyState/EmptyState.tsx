import React from 'react';
import styles from './EmptyState.module.scss';

export const EmptyState = (): React.ReactElement => (
  <div className={styles.empty}>
    <i className="fa fa-lightbulb-o" />
    <span>Start by adding a database clicking on the top left button</span>
  </div>
);
