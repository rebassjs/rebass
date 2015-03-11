
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var Root = require('./components/root.jsx');
var Home = require('./components/Home.jsx');
var NotFound = require('./components/404.jsx');

module.exports = function(props) { 
  function renderRedirect(redirect, i) {
    return (
      <Redirect {...props}
        key={'redirect-' + i}
        from={redirect.from}
        to={redirect.to} />
      )
  }
  function renderRoute(route, i) {
    if (route.path == '') { return false }
    return (
      <Route {...props}
        key={'route-' + i}
        name={route.name}
        path={route.path}
        handler={route.handler} />
    )
  }
  var redirects = [];
  props.routes.forEach(function(route) {
    if (route.path == '') { return false }
    redirects.push({ from: route.path + '/', to: route.name });
  });
  redirects = redirects.concat(props.redirects);
  return (
    <Route name="root"
      path={props.baseUrl}
      handler={Root}>
      {props.routes.map(renderRoute)}
      {redirects.map(renderRedirect)}
      <DefaultRoute {...this.props} name="Home" handler={Home}/>
    </Route>
  )
};

