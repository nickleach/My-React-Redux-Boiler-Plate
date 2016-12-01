import { ADD_TO_COUNTER, SUBTRACT_FROM_COUNTER, CLEAR_COUNTER } from './actionTypes';

function addToCounter() {
  return {
    type: ADD_TO_COUNTER,
  };
}

function subtractFromCounter() {
  return {
    type: SUBTRACT_FROM_COUNTER,
  };
}

function resetCounter() {
  return {
    type: CLEAR_COUNTER,
  };
}

function clearCounter() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.example.counter !== 0) {
      dispatch(resetCounter());
    }
  };
}

export {
  addToCounter,
  subtractFromCounter,
  clearCounter,
};
