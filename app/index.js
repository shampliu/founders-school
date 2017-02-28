import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      {/* <IndexRoute component={Home} /> */}
    </Route>
  </Router>
  , document.getElementById('app'));
