import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { openMenu, closeMenu, setCodespan } from '../../state.js';

function toggleMenu(e, props) {
  if (props.menuactive) {
    props.dispatch(closeMenu());
  } else {
    props.dispatch(openMenu());
  }
}

function changeCodespan(key, props) {
  let obj = {};
  obj[key] = (key in props.codespan) ? !props.codespan[key] : true;
  props.dispatch(setCodespan(Object.assign(
    {}, props.codespan, obj
  )));
}

const Bar = props => {
  return (
    <div>
      <AppBar
        title="Markdown to Medium"
        showMenuIconButton={false}
        />
    </div>
  );
};

export default connect(state => ({
  menuactive: state.menuactive,
  codespan: state.codespan
}))(Bar);
