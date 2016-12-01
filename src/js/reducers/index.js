import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import example from './example.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  example,
});

export {
  rootReducer,
};
