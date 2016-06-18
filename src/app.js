import React from 'react';
import { Provider } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import HalfPage from './components//halfpage/halfpage.js';
import TextField from './components//textfield/textfield.js';
import Medium from './components/medium/medium.js';
import styles from './app.css';
import { store } from './state.js';

const App = props => {
  return (
      <Provider store={store}>
        <div className={styles.container}>
          <AppBar
            title="Markdown to Medium"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div className={styles.main}>
            <HalfPage header="Markdown">
              <TextField />
            </HalfPage>
            <HalfPage header="Medium" background="#efffff">
              <Medium />
            </HalfPage>
          </div>
        </div>
      </Provider>
  );
};

export default App;
