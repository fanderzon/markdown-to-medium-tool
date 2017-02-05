import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

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
  menuactive: state.menuactive
}))(Bar);
