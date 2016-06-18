import React from 'react';
import styles from './textfield.css';

const TextField = props => {
  return (
    <div className={styles.container}>
      <textarea className={styles.textfield}></textarea>
    </div>
  );
};

export default TextField;
