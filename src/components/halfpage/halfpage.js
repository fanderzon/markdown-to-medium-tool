import React from 'react';
import './halfpage.css';

const HalfPage = props => {
  let style = {
    background: props.background || 'transparent'
  };
  let subheader = !props.subheader ? '' : <span className="subheader"> - {props.subheader}</span>;

  return (
    <div className="container" style={style}>
      <div className="header">{props.header}{subheader}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default HalfPage;
