// App

var React = require('react');
var data = require('./data');

var App = React.createFactory(require('./docs/App.jsx'));

React.render(
  App(data),
  document.getElementById('app')
);


