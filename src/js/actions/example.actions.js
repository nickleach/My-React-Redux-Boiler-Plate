import { ADD_TO_COUNTER, SUBTRACT_FROM_COUNTER } from './actionTypes';

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

export {
  addToCounter,
  subtractFromCounter,
};
