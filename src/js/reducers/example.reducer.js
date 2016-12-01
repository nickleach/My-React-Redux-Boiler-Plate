import { ADD_TO_COUNTER, SUBTRACT_FROM_COUNTER } from '../actions/actionTypes';

const example = (state = {
  counter: 0,
}, action) => {
  switch (action.type) {
    case ADD_TO_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    case SUBTRACT_FROM_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    default:
      return state;
  }
};

export default example;
