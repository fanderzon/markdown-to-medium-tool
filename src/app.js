import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from './textfield/textfield.js';
import styles from './app.css';

const App = props => {
  return (
      <div className={styles.container}>
        <AppBar
          title="Markdown to Medium"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <div className={styles.main}>
          <TextField />
          <TextField />
        </div>
      </div>
  );
};

export default App;
