import React, { ReactElement } from 'react';

import styles from './Button.module.scss';

export const Button = ({ onSubmit }: any): ReactElement => (
  <button
    type="submit"
    className={styles.submitButton}
    onClick={(e) => onSubmit(e)}
  >
    Submit!
  </button>
);

export default Button;
