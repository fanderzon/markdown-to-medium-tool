import React from 'react';
import './halfpage.css';

const HalfPage = props => {
  let style = {
    background: props.background || 'transparent'
  };
  let subheader = !props.subheader ? '' : <span className="halfpage__subheader"> - {props.subheader}</span>;

  return (
    <div className="halfpage" style={style}>
      <div className="halfpage__header">{props.header}{subheader}</div>
      <div className="halfpage__content">
        {props.children}
      </div>
    </div>
  );
};

export default HalfPage;
