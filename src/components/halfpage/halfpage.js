import React from 'react';
import styles from './halfpage.css';

const HalfPage = props => {
  let style = {
    background: props.background || 'transparent'
  };
  let subheader = !props.subheader ? '' : <span className={styles.subheader}> - {props.subheader}</span>;

  return (
    <div className={styles.container} style={style}>
      <div className={styles.header}>{props.header}{subheader}</div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default HalfPage;
