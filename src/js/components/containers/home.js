import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10vmin',
  },
};

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div style={style.container}>
        <h2>Hello</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Home));
