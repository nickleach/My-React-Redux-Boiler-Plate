import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import App from '../components/app';
import HomeContainer from '../components/containers/home.container';
import HomePage from '../components/presentational/homePage';

function getRouter(history) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/home" />
      <Route path="/" component={App} >
        <Route path="home" component={{ content: HomeContainer }}>
          <IndexRoute component={HomePage} />
        </Route>
      </Route>
      <Redirect from="*" to="/home" />
    </Router>
  );
}

export default getRouter;
