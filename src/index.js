import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app.js';

const WrappedApp = props => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.querySelector('#app'));
