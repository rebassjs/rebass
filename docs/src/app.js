// Client App

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var data = require('./data');
var Root = React.createFactory(require('./components/root.jsx'));

Router.run(routes(data), Router.HistoryLocation, function(Handler, state) {
  React.render(React.createElement(Handler, window.INITIAL_PROPS), document);
});

