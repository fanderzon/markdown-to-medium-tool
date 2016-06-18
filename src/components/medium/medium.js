import React from 'react';
import styles from './medium.css';
import { connect } from 'react-redux';
import converter from '../../converter.js';

const Medium = props => {
  let content = {
    __html: converter(props.content)
  }
  return (
    <div className={styles.container} dangerouslySetInnerHTML={content}></div>
  );
};

export default connect(state => ({
  content: state.content
}))(Medium);
