import React from 'react';
import './textfield.css';
import { connect } from 'react-redux';
import { setContent } from '../../state.js';

const TextField = props => {
  let content;
  return <textarea
    className="textfield"
    ref={node => { content = node; }}
    onChange={e => { props.dispatch(setContent(content.value)); }}></textarea>;
};

export default connect()(TextField);
