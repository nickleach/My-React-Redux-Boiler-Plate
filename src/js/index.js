// @flow

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/containers/root';
import { store, history } from './store';

render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);
