import React, { PropTypes } from 'react';
import radium from 'radium';
import { Provider } from 'react-redux';
import { getRouter } from '../../routes';

const Root = ({ store, history }) => (
    <Provider store={store}>
      <div style={{ minWidth: '100vw' }}>
        {getRouter(history, store)}
      </div>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default radium(Root);
