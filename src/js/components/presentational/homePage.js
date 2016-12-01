import React, { PropTypes, Component } from 'react';
import radium from 'radium';
import DualListBox from './dualListBox';

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
    defaultAvailableGroup: PropTypes.array,
    defaultAssignedGroup: PropTypes.array,
  };

  static defaultProps = {
    defaultAssignedGroup: [
      {
        name: 'Darth Vader',
        value: 'vader',
      },
    ],
    defaultAvailableGroup: [
      {
        name: 'Darth Maul',
        value: 'maul',
      },
      {
        name: 'Luke',
        value: 'luke',
      },
      {
        name: 'Leia',
        value: 'leia',
      },
      {
        name: 'Han Solo',
        value: 'han',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    const {
      counter,
      addHandler,
      subtractHandler,
      clearHandler,
      defaultAvailableGroup,
      defaultAssignedGroup,
    } = this.props;
    return (
      <div style={_style.container}>
        <div>
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
        <DualListBox
          availableItems={defaultAvailableGroup}
          assignedItems={defaultAssignedGroup}
          availableGroup={'Jedi'}
          assignedGroup={'Sith'}
          style={{ backgroundColor: 'lightgrey' }}
          />
    </div>
    );
  }
}

export default radium(HomePage);
