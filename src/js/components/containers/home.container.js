import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { addToCounter, subtractFromCounter } from '../../actions/example.actions';

const HomeContainer = ({ counter, addHandler, subtractHandler, children }) => (
  <div>
    {children && React.cloneElement(children, {
      counter,
      addHandler,
      subtractHandler,
    })}
  </div>
);

HomeContainer.propTypes = {
  children: PropTypes.object,
  counter: PropTypes.number,
  addHandler: PropTypes.func,
  subtractHandler: PropTypes.func,
};

const mapStateToProps = (state) => ({
  counter: state.example.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addHandler: () => {
    dispatch(addToCounter());
  },
  subtractHandler: () => {
    dispatch(subtractFromCounter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(HomeContainer));
