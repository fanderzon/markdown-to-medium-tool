import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
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
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={e => toggleMenu(e, props)}
        />
        <Drawer open={props.menuactive} width={400}>
          <AppBar
            title="Markdown to Medium"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={e => toggleMenu(e, props)}
            />
            <MenuItem>
              <div style={{
                fontSize: '20px'
              }}>Format inline codespan with</div>
              <Checkbox
                label="Bold"
                checked={props.codespan.strong}
                onClick={e => {
                  changeCodespan('strong', props);
                }} />
              <Checkbox
                label="Italic"
                checked={props.codespan.em}
                onClick={e => {
                  changeCodespan('em', props);
                }} />
              <Checkbox
                label="Quotes"
                checked={props.codespan.quoted}
                onClick={e => {
                  changeCodespan('quoted', props);
                }} />
            </MenuItem>
        </Drawer>
    </div>
  );
  // return <textarea
  //   className={styles.textfield}
  //   ref={node => { content = node; }}
  //   onChange={e => { props.dispatch(setContent(content.value)); }}></textarea>;
};

export default connect(state => ({
  menuactive: state.menuactive,
  codespan: state.codespan
}))(Bar);
