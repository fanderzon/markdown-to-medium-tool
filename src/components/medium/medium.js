import React from 'react';
import './medium.css';
import { connect } from 'react-redux';
import converter from '../../converter.js';

const Medium = props => {
  let content = {
    __html: converter(props)
  }
  return (
    <div id="medium" className="container" dangerouslySetInnerHTML={content}></div>
  );
};

export default connect(state => ({
  content: state.content,
  codespan: state.codespan
}))(Medium);
