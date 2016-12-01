import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import App from '../components/app';
import Home from '../components/containers/home';

function getRouter(history) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/home" />
      <Route path="/" component={App} >
        <Route path="home" component={{ content: Home }} />
      </Route>
      <Redirect from="*" to="/home" />
    </Router>
  );
}

export default getRouter;
