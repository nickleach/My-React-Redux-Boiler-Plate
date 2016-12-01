import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import radium from 'radium';
import { VERSION } from '../config';

class App extends Component {
  static propTypes = {
    content: PropTypes.object,
  };

  render() {
    const { content } = this.props;
    return (
      <div style={{ minWidth: '100vw' }}>
        <nav className="navbar navbar-default" style={{ marginBottom: 0 }}>
          <div className="container-fluid">

          </div>
        </nav>
          <div style={{ minWidth: '100vw', height: '95vh', display: 'flex', flexFlow: 'row nowrap' }}>
            <div style={{ width: '100vw' }}>
              {content}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  modal: state.modal,
  currentApplication: state.application.name,
  apiVersion: state.application.apiVersion,
  currentTodDbVersion: state.tod.databases.currentVersion,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default radium(connected);
