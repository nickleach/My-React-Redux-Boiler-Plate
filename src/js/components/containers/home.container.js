import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import { addToCounter, subtractFromCounter, clearCounter } from '../../actions/example.actions';

const HomeContainer = ({ counter, addHandler, subtractHandler, clearHandler, children }) => (
  <div>
    {children && React.cloneElement(children, {
      counter,
      addHandler,
      subtractHandler,
      clearHandler,
    })}
  </div>
);

HomeContainer.propTypes = {
  children: PropTypes.object,
  counter: PropTypes.number,
  addHandler: PropTypes.func,
  subtractHandler: PropTypes.func,
  clearHandler: PropTypes.func,
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
  clearHandler: () => {
    dispatch(clearCounter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(HomeContainer));
