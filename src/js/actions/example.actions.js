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

function clearCounter() {
  return {
    type: CLEAR_COUNTER,
  };
}

export {
  addToCounter,
  subtractFromCounter,
  clearCounter,
};
