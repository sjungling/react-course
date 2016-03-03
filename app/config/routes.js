var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistroy = ReactRouter.hashHistroy;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistroy}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports  = routes;
