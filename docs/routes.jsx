
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var Root = require('./components/root.jsx');
var NotFound = require('./components/404.jsx');

module.exports = function(props) { 
  function renderRedirect(route, i) {
    if (route.path == '/') { return false }
    path = route.path.replace(/^\//, '');
    return (
      <Redirect {...props}
        key={'redirect-' + i}
        from={path + '/'}
        to={route.name} />
      )
  }
  function renderRoute(route, i) {
    if (route.path != '/') {
      var path = route.path.replace(/^\//, '');
    } else {
      var path = route.path;
    }
    return (
      <Route {...props}
        key={'route-' + i}
        name={route.name}
        path={path}
        handler={route.handler} />
    )
  }
  return (
    <Route name="root" path={props.baseUrl + '/'} handler={Root}>
      {props.routes.map(renderRoute)}
      {props.routes.map(renderRedirect)}
      <DefaultRoute {...this.props} name="404" handler={NotFound}/>
    </Route>
  )
};

