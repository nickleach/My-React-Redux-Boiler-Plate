import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { VERSION } from '../config';

const App = ({ content }) => (
    <div style={{ minWidth: '100vw' }}>
      <nav className="navbar navbar-inverse" style={{ marginBottom: 0 }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Import.io</a>
          </div>
          <p className="navbar-text navbar-right" style={{ paddingRight: 5 }}> v{ VERSION }</p>
        </div>
      </nav>
        <div style={{ minWidth: '100vw', height: '95vh', display: 'flex', flexFlow: 'row nowrap' }}>
          <div style={{ width: '100vw' }}>
            {content}
          </div>
      </div>
    </div>
  );

App.propTypes = {
  content: PropTypes.object,
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default radium(connected);
