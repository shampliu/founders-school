var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('./components/Main');
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      {/* <IndexRoute component={Home} /> */}
    </Route>
  </Router>
  , document.getElementById('app'));
