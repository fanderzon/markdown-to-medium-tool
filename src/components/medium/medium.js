import React from 'react';
import styles from './medium.css';
import { connect } from 'react-redux';

const Medium = props => {
  return (
    <div className={styles.container}>
      {props.content}
    </div>
  );
};

export default connect(state => ({
  content: state.content
}))(Medium);
