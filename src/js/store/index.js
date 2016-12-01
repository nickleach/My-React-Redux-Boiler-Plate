import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

let configureStore = null;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod').default;
} else {
  configureStore = require('./configureStore.dev').default;
}

// default state
const state = { };

const store = configureStore(state);
const history = syncHistoryWithStore(browserHistory, store);

export {
  store,
  history,
};
