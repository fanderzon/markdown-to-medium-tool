import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app.js';
import { store } from './state.js';
import './index.css';

const WrappedApp = props => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<WrappedApp />, document.querySelector('#root'));
