import React from 'react';
import styles from './halfpage.css';

const HalfPage = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default HalfPage;
