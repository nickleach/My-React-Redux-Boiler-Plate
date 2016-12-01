import React, { PropTypes, Component } from 'react';
import radium from 'radium';

const style = {
  listBox: {
    height: '30vh',
    minWidth: 200,
    listStyle: 'none',
    backgroundColor: 'white',
    padding: 20,
    overflowY: 'scroll',
  },
  activeItem: {
    backgroundColor: 'lightgrey',
    cursor: 'pointer',
  },
  inactiveItem: {
    cursor: 'pointer',
  },
  button: {
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 10,
    width: 100,
    fontSize: 40,
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid lightgrey',
  },
};

class DualListBox extends Component {
  static propTypes = {
    availableItems: PropTypes.array,
    assignedItems: PropTypes.array,
    availableGroup: PropTypes.string,
    assignedGroup: PropTypes.string,
    onChanges: PropTypes.func,
    style: PropTypes.object,
  };
  static defaultProps = {
    availableItems: [],
    assignedItems: [],
    availableGroup: 'Available',
    assignedGroup: 'Assigned',
    onChanges: () => {},
  };
  constructor() {
    super();
    this.state = {
      availableItems: [],
      assignedItems: [],
      selectedItem: null,
    };
    this.removeItem = this.removeItem.bind(this);
    this.addAllItems = this.addAllItems.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
  }

  componentDidMount() {
    const { availableItems, assignedItems } = this.props;
    this.setState({
      availableItems: this.alphabetizeItems(availableItems),
      assignedItems: this.alphabetizeItems(assignedItems),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.availableItems !== this.state.availableItems || prevState.assignedItems !== this.state.assignedItems) {
      const { assignedItems, availableItems } = this.state;
      this.props.onChanges(assignedItems, availableItems);
    }

    if (prevProps.availableItems !== this.props.availableItems || prevProps.assignedItems !== this.props.assignedItems) {
      this.setState({
        availableItems: this.alphabetizeItems(this.props.availableItems),
        assignedItems: this.alphabetizeItems(this.props.assignedItems),
      });
    }
  }

  addItem() {
    const
      { selectedItem } = this.state,
      availableItems = this.state.availableItems.slice(),
      assignedItems = this.state.assignedItems.slice();
    if (selectedItem) {
      if (!assignedItems.includes(selectedItem) && availableItems.includes(selectedItem)) {
        assignedItems.push(selectedItem);
        availableItems.splice(availableItems.indexOf(selectedItem), 1);
        this.setState({ assignedItems: this.alphabetizeItems(assignedItems), availableItems: this.alphabetizeItems(availableItems) });
      }
    }
  }

  removeItem() {
    const
      { selectedItem } = this.state,
      availableItems = this.state.availableItems.slice(),
      assignedItems = this.state.assignedItems.slice();
    if (selectedItem) {
      if (!availableItems.includes(selectedItem) && assignedItems.includes(selectedItem)) {
        availableItems.push(selectedItem);
        assignedItems.splice(assignedItems.indexOf(selectedItem), 1);
        this.setState({ assignedItems: this.alphabetizeItems(assignedItems), availableItems: this.alphabetizeItems(availableItems) });
      }
    }
  }

  addAllItems() {
    let { availableItems, assignedItems } = this.state;
    assignedItems = [...assignedItems, ...availableItems];
    availableItems = [];
    this.setState({ assignedItems: this.alphabetizeItems(assignedItems), availableItems: this.alphabetizeItems(availableItems) });
  }

  removeAllItems() {
    let { availableItems, assignedItems } = this.state;
    availableItems = [...assignedItems, ...availableItems];
    assignedItems = [];
    this.setState({ assignedItems: this.alphabetizeItems(assignedItems), availableItems: this.alphabetizeItems(availableItems) });
  }

  selectItem(item, e) {
    e.stopPropagation();
    let { selectedItem } = this.state;
    selectedItem = selectedItem === item ? null : item;

    this.setState({ selectedItem });
  }

  alphabetizeItems(items) {
    return items.sort((a, b) => {
      if (a.name.toString().toLowerCase() < b.name.toString().toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  render() {
    const { availableItems, assignedItems, selectedItem } = this.state;
    const { availableGroup, assignedGroup } = this.props;
    return (
      <div style={this.props.style}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <div>
            <h4>{availableGroup}</h4>
            <ul style={style.listBox} className="form-control">
              {availableItems.map(item =>
                <li key={item.value}
                  value={item.value}
                  style={selectedItem === item ? style.activeItem : style.inactiveItem }
                  onClick={(e) => this.selectItem(item, e)}>{item.name}</li>
              )}
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={style.button} onClick={this.addAllItems}>
              <i className="material-icons">list</i>
              <i className="material-icons">keyboard_arrow_right</i>
            </span>
            <i style={style.button} className="material-icons" onClick={() => this.addItem()}>keyboard_arrow_right</i>
            <i style={style.button} className="material-icons" onClick={this.removeItem}>keyboard_arrow_left</i>
            <span style={style.button} onClick={this.removeAllItems}>
              <i className="material-icons">keyboard_arrow_left</i>
              <i className="material-icons">list</i>
            </span>
          </div>
          <div>
            <h4>{assignedGroup}</h4>
            <ul style={style.listBox} className="form-control">
              {assignedItems.map(item =>
                <li key={item.value}
                  value={item.value}
                  style={selectedItem === item ? style.activeItem : style.inactiveItem}
                  onClick={(e) => this.selectItem(item, e)}>{item.name}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default radium(DualListBox);
