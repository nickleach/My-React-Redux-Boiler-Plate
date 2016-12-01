import React, { PropTypes, Component } from 'react';
import radium from 'radium';

const _style = {
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    margin: 10,
  },
};

class HomePage extends Component {
  static propTypes = {
    counter: PropTypes.number,
    addHandler: PropTypes.func,
    subtractHandler: PropTypes.func,
    clearHandler: PropTypes.func,
  };

  componentDidMount() {

  }

  render() {
    const { counter, addHandler, subtractHandler, clearHandler } = this.props;
    return (
      <div style={_style.container}>
        <button style={_style.button} className="btn btn-primary" onClick={addHandler}>
          <i className="fa fa-plus"></i>
        </button>
        <div style={{ fontSize: 20, margin: 20 }}> { counter } </div>
        <button style={_style.button} className="btn btn-primary" onClick={subtractHandler}>
          <i className="fa fa-minus"></i>
        </button>
        <button style={_style.button} className="btn btn-danger" onClick={clearHandler}>
          <i className="fa fa-refresh"></i>
        </button>
    </div>
    );
  }
}

export default radium(HomePage);
