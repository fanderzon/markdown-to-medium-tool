import React from 'react';
import { connect } from 'react-redux';
import HalfPage from './components//halfpage/halfpage.js';
import TextField from './components//textfield/textfield.js';
import Medium from './components/medium/medium.js';
import AppBar from './components/appbar/appbar.js';
import styles from './app.css';
import { closeMenu } from './state.js';

function handleClick(e, props) {
  if (props.menuactive) {
    props.dispatch(closeMenu());
  }
}

const App = props => {
  return (
    <div className={styles.container}>
      <AppBar />
      <div className={styles.main} onClick={e => handleClick(e, props)}>
        <HalfPage header="Markdown" background="#efffff">
          <TextField />
        </HalfPage>
        <HalfPage header="Medium">
          <Medium />
        </HalfPage>
      </div>
    </div>
  );
};

export default connect(state => ({
  menuactive: state.menuactive
}))(App);
